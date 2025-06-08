import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedpath = path.startsWith("/dashboard");
  const isAdminPath = path.startsWith("/dashboard/admin");
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (token && isProtectedpath) {
    const role = token.role as string;
    if (path.startsWith("/dashboard/admin")) {
      if (role !== "ADMIN") {
        return NextResponse.redirect(new URL("/sign_in", request.url));
      }
    } else if (path.startsWith("/dashboard/hr")) {
      if (role !== "HR") {
        return NextResponse.redirect(new URL("/sign_in", request.url));
      }
    }
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (token && isAdminPath) {
    const role = token.role as string;
    if (role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
