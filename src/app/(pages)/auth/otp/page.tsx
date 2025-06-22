"use client";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { FormEvent, useEffect, useState } from "react";
import CountDown from "react-countdown";
import { renderer } from "@/components/public/countdown";
import { cookies } from "next/headers";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";

export default function OTPPage() {
  const [otpMessage, setOTPMessage] = useState<string>("");
  const [expiredOTP, setExpiredOTP] = useState<number>();

  useEffect(() => {
    const getCookie = async () => {
      const res = await fetch("/api/cookies");
      const data = await res.json();
      if (data.cookie.expiredOTP) {
        const expiredOTPDate = new Date(data.cookie.expiredOTP);
        setExpiredOTP(expiredOTPDate.getTime());
      }
    };

    getCookie();
  }, []);

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ otp }: { otp: string }) => {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
      });
      const data = await res.json();
      if (data) {
        setOTPMessage(data.message);
      }
    },
  });

  const submitted = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const otp = formData.get("otp")?.toString() || "";
    mutate({ otp });
  };

  return (
    <main className="justify-center items-center flex flex-col h-screen">
      <h1>OTP Telah dikirim</h1>

      {expiredOTP ? (
        <CountDown date={expiredOTP} renderer={renderer} />
      ) : (
        "00 : 00"
      )}

      <form
        action=""
        onSubmit={submitted}
        className="flex justify-center flex-col"
      >
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          className="mb-3"
          name="otp"
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        {otpMessage && <p className="text-red-500">{otpMessage}</p>}
        <Button type="submit">
          {isPending ? <LoaderCircle className="animate-spin" /> : "Submit"}
        </Button>
      </form>
    </main>
  );
}
