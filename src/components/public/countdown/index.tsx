import { Button } from "@/components/ui/button";
import { CountdownRenderProps } from "react-countdown";

export const renderer = ({
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return (
      <main>
        <span className="text-red-500 font-semibold">Waktu OTP Habis!</span>
        <Button onClick={resendOTP}>Kirim Ulang OTP</Button>
      </main>
    );
  } else {
    return (
      <span className="text-blue-600 font-mono text-lg">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    );
  }
};

const resendOTP = async () => {
  const resCookie = await fetch("/api/cookies");
  const dataCookie = await resCookie.json();
  if (dataCookie.cookie.email) {
    const { email, fullname } = dataCookie.cookie;
    await fetch("/api/resend-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, fullname }),
    });
  }
};
