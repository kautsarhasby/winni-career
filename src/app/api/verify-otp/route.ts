import { NextRequest, NextResponse } from "next/server";
import { verifyOTP } from "@/lib/email/services/otp";

export async function POST(request: NextRequest) {
  const data: { otp: number } = await request.json();

  const { otp } = data;

  try {
    const res = await verifyOTP({ otp });
    if (!res) return;

    const response = NextResponse.json(
      { message: res.message, status: res.status },
      { status: res.status }
    );

    response.cookies.set("session", "", {
      httpOnly: true,
      secure: true,
      expires: new Date(0),
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Failed sending OTP", error);
    return Response.json({ message: "Failed sending OTP" }, { status: 500 });
  }
}
