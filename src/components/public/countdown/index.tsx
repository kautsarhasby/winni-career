import { Button } from "@/components/ui/button";
import { useState } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

export default function CountDownOTP({ expiredOTP }: { expiredOTP: number }) {
  const [countdownKey, setCountdownKey] = useState(0);

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
      setCountdownKey((prev) => prev + 1);
      window.location.reload();
    }
  };

  const renderer = ({ minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return (
        <div className="grid ">
          <span className="text-red-500 font-semibold">Waktu OTP Habis!</span>
          <Button onClick={resendOTP}>Kirim Ulang OTP</Button>
        </div>
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

  return <Countdown key={countdownKey} date={expiredOTP} renderer={renderer} />;
}
