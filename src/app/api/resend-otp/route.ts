import { NextRequest } from "next/server";
import { IApplicants } from "../../../../types";
import { sendOTPVerification } from "@/lib/email/services/otp";
import { createSession } from "@/lib/session";

export async function POST(request: NextRequest) {
  const data: IApplicants = await request.json();
  const { email, fullname } = data;

  try {
    await sendOTPVerification({ email, fullname });

    await createSession({ email });

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Failed sending OTP", error);
    return Response.json({ message: "Failed sending OTP" }, { status: 500 });
  }
}
