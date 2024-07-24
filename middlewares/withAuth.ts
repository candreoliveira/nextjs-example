import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "./types";
import { getToken } from 'next-auth/jwt';

export const withAuth: MiddlewareFactory = (next) => {
  // return NextAuth(authConfig).auth;
  return async (req: NextRequest, _next: NextFetchEvent) => {
    if (config.pattern?.test(req.nextUrl.pathname)) {
      const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET||"", salt: process.env.NEXTAUTH_SALT||"" });
  
      const isAuthenticated = !!token;
      const isOnDashboard = req.nextUrl.pathname.startsWith('/dashboard');
    
      if (isOnDashboard && !isAuthenticated) {
        return NextResponse.redirect(new URL('/login', req.url));
      }
    
      // return NextResponse.next();
    }

    return next(req, _next);
  }
}

export const config = {
  pattern: new RegExp('/((?!api|_next/static|_next/image|.*\\.png$).*)'),
};