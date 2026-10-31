import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { AUTH_COOKIE_NAME, getAuthCookieOptions, revokeSessionToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    let authCookie: string | undefined;
    try {
      const cookieStore = await cookies();
      authCookie = cookieStore.get(AUTH_COOKIE_NAME)?.value;
    } catch {
      // In standalone tests or non-context invocations
    }

    if (!authCookie && request) {
      const cookieHeader = request.headers?.get('cookie');
      if (cookieHeader) {
        const match = cookieHeader.match(new RegExp(`(?:^|; )${AUTH_COOKIE_NAME}=([^;]*)`));
        authCookie = match ? decodeURIComponent(match[1]) : undefined;
      }
    }

    // Server-side token revocation: invalidate token before clearing cookie
    if (authCookie) {
      revokeSessionToken(authCookie);
    }

    const response = NextResponse.json({ success: true, message: 'Session revoked and logged out successfully' });
    response.cookies.set(AUTH_COOKIE_NAME, '', getAuthCookieOptions(0));

    try {
      const cookieStore = await cookies();
      cookieStore.set(AUTH_COOKIE_NAME, '', getAuthCookieOptions(0));
    } catch {
      // Fallback for standalone test runners
    }

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
