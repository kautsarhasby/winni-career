import { jwtVerify } from "jose";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

async function verifySessionJWT(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}

export default withAuth(
  async function middleware(req) {
    const session = req.cookies.get("session")?.value;
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    let sessionPayload = null;
    if (session) {
      console.log("session :", session);
      sessionPayload = await verifySessionJWT(session);
    }
    if (pathname.startsWith("/auth/otp")) {
      if (!sessionPayload) {
        return NextResponse.redirect(new URL("/", req.url));
      } else {
        return NextResponse.next();
      }
    }

    if (pathname.match(/^\/jobs\/[^\/]+\/apply$/) && !token) {
      return NextResponse.redirect(new URL("/auth/sign_in", req.url));
    }

    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (pathname.startsWith("/auth") && token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (pathname.startsWith("/add_profile")) {
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
  matcher: [
    "/dashboard/:path*",
    "/jobs/:id/apply",
    "/profile",
    "/add_profile",
    "/auth/otp",
  ],
};
