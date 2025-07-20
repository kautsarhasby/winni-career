"use server";
import { client, createEmailTemplate } from "./email";
import { z } from "zod";
import { SendOTPSchema } from "@/lib/definition";

export async function sendOtpEmail({
  otp,
  fullname,
  email,
}: z.infer<typeof SendOTPSchema>) {
  const emailTemplate = await createEmailTemplate({ fullname, otp });

  try {
    await client.sendMail({
      from: `"Winni Career" <${process.env.EMAIL_ADDRESS}>`,
      to: email,
      subject: "OTP Verification",
      html: emailTemplate,
    });

    console.log(`success mengirim email ke ${email}`);
  } catch (error) {
    console.log("Failed to send OTP", error);
  }
}

export async function sendResetEmail({
  email,
  fullname,
  resetLink,
}: {
  email: string;
  fullname: string;
  resetLink?: string;
}) {
  const emailTemplate = await createEmailTemplate({ fullname, resetLink });

  try {
    await client.sendMail({
      from: `"Winni Career" <${process.env.EMAIL_ADDRESS}>`,
      to: email,
      subject: "Reset Password",
      html: emailTemplate,
    });

    console.log(`success mengirim email ke ${email}`);
  } catch (error) {
    console.log("Failed to send OTP", error);
    return false;
  }
}
