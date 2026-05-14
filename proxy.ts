import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    const authCookie = request.cookies.get('admin_auth')?.value;
    
    // In production, you would check this against an ENV variable
    // For now, we'll allow a simple "admin" password check in a login sub-route or similar
    // But since we want to "secure" it, we'll redirect to /login if no cookie exists
    if (authCookie !== 'authenticated' && pathname !== '/admin/login') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
