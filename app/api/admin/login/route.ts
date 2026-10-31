import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { 
  AUTH_COOKIE_NAME, 
  createSessionToken, 
  getAuthCookieOptions, 
  checkRateLimit, 
  resetRateLimit 
} from '@/lib/auth';

export async function POST(request: Request) {
  try {
    // Client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';
    const rateLimitKey = `login_${clientIp}`;

    const rateLimit = checkRateLimit(rateLimitKey, 5, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Too many login attempts. Please wait ${rateLimit.retryAfterSeconds || 900} seconds before retrying.` 
        }, 
        { status: 429 }
      );
    }

    const { password } = await request.json();
    const configuredPassword = process.env.ADMIN_PASSWORD;
    const adminPassword = configuredPassword || (process.env.NODE_ENV !== 'production' ? "integral_secure_2024" : null);

    if (!adminPassword) {
      console.error('ADMIN_PASSWORD environment variable is not configured in production environment.');
      return NextResponse.json(
        { success: false, message: 'Administrative authentication is unconfigured' }, 
        { status: 503 }
      );
    }

    if (password && password === adminPassword) {
      // Clear rate limiter upon successful authentication
      resetRateLimit(rateLimitKey);

      const sessionToken = createSessionToken('admin', 86400);
      if (!sessionToken) {
        return NextResponse.json(
          { success: false, message: 'Administrative session service is unconfigured in production' }, 
          { status: 503 }
        );
      }

      const response = NextResponse.json({ success: true });
      response.cookies.set(AUTH_COOKIE_NAME, sessionToken, getAuthCookieOptions(86400));

      try {
        const cookieStore = await cookies();
        cookieStore.set(AUTH_COOKIE_NAME, sessionToken, getAuthCookieOptions(86400));
      } catch {
        // Fallback for standalone test runners
      }

      return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}


