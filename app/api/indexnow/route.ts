import { NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/auth';
import { submitToIndexNow, coreContentUrls, INDEXNOW_KEY } from '@/lib/indexnow';
import { SITE_CONFIG } from '@/lib/site-config';

/**
 * Manual IndexNow ping endpoint.
 *
 * POST { "paths": ["/service", ...], "all": true }
 *  - With "all": true → pings every public content URL (used after content edits).
 *  - With paths → pings only those site-relative paths (same-origin enforced).
 *
 * GET → returns discovery/ping metadata (no-op; harmless for crawlers).
 */
export async function GET() {
  return NextResponse.json({
    engine: 'IndexNow',
    keyLocation: `${SITE_CONFIG.domain}/${INDEXNOW_KEY}.txt`,
    usage: 'POST { paths: string[] } to ping specific URLs, or { all: true } to ping all public content.',
  });
}

export async function POST(request: Request) {
  try {
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

    const rateLimit = checkRateLimit(`indexnow_${clientIp}`, 10, 60_000);
    if (!rateLimit.allowed) {
      return NextResponse.json({ message: 'Too many ping requests.' }, { status: 429 });
    }

    const body = await request.json().catch(() => ({}));

    if (body?.all) {
      const ok = await submitToIndexNow(coreContentUrls());
      return NextResponse.json({ allPinged: ok }, { status: ok ? 200 : 502 });
    }

    if (!Array.isArray(body?.paths) || body.paths.length === 0) {
      return NextResponse.json(
        { message: 'Provide { paths: string[] } site-relative paths, or { all: true }.' },
        { status: 400 }
      );
    }

    // Same-origin enforcement: only site-relative paths of this deployment are pinged.
    const origin = new URL(request.url).origin;
    const urls = body.paths
      .filter((p: unknown) => typeof p === 'string')
      .map((p: string) => {
        try {
          const resolved = new URL(p, origin);
          if (resolved.host !== new URL(SITE_CONFIG.domain).host) return null;
          return SITE_CONFIG.domain + resolved.pathname;
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    if (!urls.length) {
      return NextResponse.json({ message: 'No valid same-site paths to ping.' }, { status: 400 });
    }

    const ok = await submitToIndexNow(urls);
    return NextResponse.json({ pinged: urls, ok }, { status: ok ? 200 : 502 });
  } catch (error) {
    console.error('[IndexNow API] error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
