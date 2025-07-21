import { render } from "@react-email/components";
import { createTransport } from "nodemailer";
import { EmailOTP } from "../template/otp-email";
import { ResetPasswordEmail } from "../template/reset-email";
import { EmailCVPassed } from "../template/meet-email";

export const client = createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_API_KEY,
  },
});

interface EmailProps {
  fullname: string;
  otp?: number;
  resetLink?: string;
  meetingLink?: string;
  scheduleDate?: string;
  scheduleTime?: string;
}

export async function createEmailTemplate({
  fullname,
  otp,
  resetLink,
  meetingLink,
  scheduleDate,
  scheduleTime,
}: EmailProps) {
  let emailHTML;
  if (otp) {
    emailHTML = await render(<EmailOTP fullname={fullname} otp={otp} />);
  } else if (resetLink) {
    emailHTML = await render(
      <ResetPasswordEmail fullname={fullname} resetLink={resetLink} />
    );
  } else if (meetingLink && scheduleDate && scheduleTime) {
    emailHTML = await render(
      <EmailCVPassed
        meetingLink={meetingLink}
        fullname={fullname}
        scheduleDate={scheduleDate}
        scheduleTime={scheduleTime}
      />
    );
  }

  return emailHTML;
}
