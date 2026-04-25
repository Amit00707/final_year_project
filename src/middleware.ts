import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // 1. Unauthenticated users cannot access main routes
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/library') || pathname.startsWith('/read')) {
    if (!token) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 2. Teacher specific route guard
  if (pathname.startsWith('/teacher') && token?.role !== 'teacher') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // 3. Admin specific route guard
  if (pathname.startsWith('/admin') && token?.role !== 'admin') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // 4. Prevent authenticated users from seeing the auth gateway
  if (token && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

// Strictly enforce middleware only on protected pathways to save execution time
export const config = {
  matcher: ['/dashboard/:path*', '/library/:path*', '/read/:path*', '/teacher/:path*', '/admin/:path*', '/login', '/signup'],
};
