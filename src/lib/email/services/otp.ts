"use server";
import {
  SendOTPVerificationSchema,
  SessionPayload,
  VerifyOTPSchema,
} from "@/lib/definition";
import { sendOtpEmail } from "@/lib/email/services/send-email";
import { prisma } from "@/lib/prisma-client";
import { decrypt } from "@/lib/session";
import { generateRandomOTP } from "@/lib/utils";
import { cookies } from "next/headers";
import { z } from "zod";

export async function sendOTPVerification({
  fullname,
  email,
}: z.infer<typeof SendOTPVerificationSchema>) {
  const nextFiveMinutesDate = new Date();
  nextFiveMinutesDate.setMinutes(nextFiveMinutesDate.getMinutes() + 5);

  const payload = {
    otp: generateRandomOTP(),
    fullname,
    email,
    expiredAt: nextFiveMinutesDate,
  };

  const otp = Number(payload.otp);

  await prisma.applicants.update({
    where: { email },
    data: { otp, expiredAt: payload.expiredAt },
  });

  await sendOtpEmail({
    otp,
    email,
    fullname,
  });
}

export async function verifyOTP({ otp }: z.infer<typeof VerifyOTPSchema>) {
  const session = (await cookies()).get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }
  const sessionPayload = payload as SessionPayload;
  const numberOTP = Number(otp);

  const verifyingUser = await prisma.applicants.findFirst({
    where: {
      otp: numberOTP,
      AND: {
        email: sessionPayload.email,
      },
    },
  });

  if (!verifyingUser) {
    console.log("user not found or otp error");
    return { status: 401 };
  }

  if (new Date() >= verifyingUser.expiredAt!) {
    return { status: 422, message: "OTP Sudah Expired" };
  }

  const userId = verifyingUser.id;
  await prisma.applicants.update({
    where: {
      id: userId,
    },
    data: {
      otp: null,
      verified: true,
    },
  });
  console.log("success verify");
  return { status: 200 };
}
