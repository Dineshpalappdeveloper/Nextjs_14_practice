import { NextResponse } from "next/server";

export function middleware(request) {
    // console.log(request);
    // here if checking the redirection condition if not then  redirted to below config contion
    // if (request.nextUrl.pathname != "/user") {
    // return NextResponse.redirect(new URL("/login", request.url))
    // }
}
export const config = {
    // if user trying to acces the below url then redirected to upper menstion return destination
    // matcher: ["/user/:path*", "/pages/:path*"]
}