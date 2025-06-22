import { NextRequest } from "next/server";
import { verifyOTP } from "@/lib/email/services/otp";

export async function POST(request: NextRequest) {
  const data: { otp: number } = await request.json();

  const { otp } = data;
  try {
    const res = await verifyOTP({ otp });

    return Response.json(
      { message: res?.message, status: res?.status },
      { status: res?.status }
    );
  } catch (error) {
    console.error("Failed sending OTP", error);
    return Response.json({ message: "Failed sending OTP" }, { status: 500 });
  }
}
