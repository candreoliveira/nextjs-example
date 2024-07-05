import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const headers = new Headers(request.headers);

    headers.set("x-current-path", request.nextUrl.pathname);
    headers.set("x-current-params", request.nextUrl.searchParams?.toLocaleString());
    
    return NextResponse.next({
      request: {
        headers: headers
      },
    });
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}