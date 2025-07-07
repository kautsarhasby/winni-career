import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    if (pathname.match(/^\/jobs\/[^\/]+\/apply$/) && !token) {
      return NextResponse.redirect(new URL("/auth/sign_in", req.url));
    }

    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (pathname.startsWith("/auth") && token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    const role = token.role;

    if (pathname.startsWith("/dashboard/hr") && role !== "HR") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (pathname.startsWith("/dashboard/admin") && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/jobs/:id/apply"],
};
