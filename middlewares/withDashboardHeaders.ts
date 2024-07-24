import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "./types";

export const withDashboardHeaders: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    if (config.pattern?.test(request.nextUrl.pathname)) {
      const headers = new Headers(request.headers);

      headers.set("x-current-path", request.nextUrl.pathname);
      headers.set("x-current-params", request.nextUrl.searchParams?.toLocaleString());
      
      return NextResponse.next({
        request: {
          headers: headers
        },
      });  
    }

    return next(request, _next);
  }
}

export const config = {
  pattern: new RegExp('^/dashboard(\/.*)?$'),
};