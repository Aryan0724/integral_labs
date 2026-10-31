import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_COOKIE_NAME, verifySessionToken } from '@/lib/auth';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    const authCookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    const session = verifySessionToken(authCookie);

    // Allow access to login page
    if (pathname === '/admin/login') {
      if (session.valid) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      return NextResponse.next();
    }

    // Redirect unauthenticated or forged sessions to /admin/login
    if (!session.valid) {
      const loginUrl = new URL('/admin/login', request.url);
      const response = NextResponse.redirect(loginUrl);
      if (authCookie) {
        response.cookies.delete(AUTH_COOKIE_NAME);
      }
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

