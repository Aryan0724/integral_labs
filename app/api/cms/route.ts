import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSiteContent, saveSiteContent, SiteContent } from '@/lib/cms';
import { AUTH_COOKIE_NAME, verifySessionToken } from '@/lib/auth';

export async function GET() {
  const content = getSiteContent();
  return NextResponse.json(content);
}

export async function POST(request: Request) {
  try {
    let authCookie: string | undefined;
    try {
      const cookieStore = await cookies();
      authCookie = cookieStore.get(AUTH_COOKIE_NAME)?.value;
    } catch {
      // In standalone tests or non-context invocations, read from Cookie header
    }

    if (!authCookie) {
      const cookieHeader = request.headers.get('cookie');
      if (cookieHeader) {
        const match = cookieHeader.match(new RegExp(`(?:^|; )${AUTH_COOKIE_NAME}=([^;]*)`));
        authCookie = match ? decodeURIComponent(match[1]) : undefined;
      }
    }

    const session = verifySessionToken(authCookie);

    if (!session.valid) {
      return NextResponse.json(
        { message: `Unauthorized: ${session.reason || 'Administrative session required'}` }, 
        { status: 401 }
      );
    }

    const newContent = await request.json();

    if (!newContent || typeof newContent !== 'object' || Array.isArray(newContent)) {
      return NextResponse.json({ message: 'Invalid payload structure' }, { status: 400 });
    }

    const success = saveSiteContent(newContent as SiteContent);
    
    if (success) {
      return NextResponse.json({ message: 'Content updated successfully' });
    } else {
      return NextResponse.json({ message: 'Failed to save content' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }
}


