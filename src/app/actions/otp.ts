import { SendOTPVerificationSchema, VerifyOTPSchema } from "@/lib/definition";
import { sendOtpEmail } from "@/lib/email/services/otp";
import { prisma } from "@/lib/prisma-client";
import { generateRandomOTP } from "@/lib/utils";
import { z } from "zod";

export async function sendOTPVerification({
  fullname,
  email,
  id,
}: z.infer<typeof SendOTPVerificationSchema>) {
  await prisma.$transaction(
    async (tx) => {
      const nextFiveMinutesDate = new Date();

      nextFiveMinutesDate.setMinutes(nextFiveMinutesDate.getMinutes() + 1);

      const payload = {
        otp: generateRandomOTP(),
        fullname,
        email,
        expiredAt: nextFiveMinutesDate,
      };

      const otp = Number(payload.otp);

      await tx.applicants.update({
        where: { id },
        data: { otp },
      });

      await sendOtpEmail({
        otp,
        email,
        fullname,
      });
    },
    { timeout: 30000 }
  );
}

export async function verifyOTP({
  otp,
  email,
}: z.infer<typeof VerifyOTPSchema>) {
  const verifyingUser = await prisma.applicants.findFirst({
    where: {
      otp,
      email,
    },
  });
  if (!verifyingUser) {
    return { status: 401 };
  }

  if (new Date() >= verifyingUser.expiredAt!) {
    return { status: 422 };
  }

  const userId = verifyingUser.id;

  await prisma.$transaction(async (tx) => {
    await tx.applicants.update({
      where: {
        id: userId,
      },
      data: {
        otp: null,
        verified: true,
      },
    });
  });

  return { status: 200 };
}
