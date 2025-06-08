import { client, createEmailTemplate } from "./email";
import { z } from "zod";
import { SendOTPSchema } from "@/lib/definition";

export async function sendOtpEmail({
  otp,
  fullname,
  email,
}: z.infer<typeof SendOTPSchema>) {
  const emailTemplate = await createEmailTemplate("otp");
  const parsedEmailTemplate = emailTemplate({ fullname, otp });

  try {
    await client.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "OTP Verification",
      html: parsedEmailTemplate,
    });
  } catch (error) {
    console.log("Failed to send OTP", error);
  }
}
