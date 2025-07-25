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
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FooterInput from "@/components/public/footer-input";
import CountDownOTP from "@/components/public/countdown";
import { useRouter } from "next/navigation";

export default function OTPPage() {
  const [otpMessage, setOTPMessage] = useState<string>("");
  const [expiredOTP, setExpiredOTP] = useState<number>();
  const router = useRouter();

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
    onSuccess: () => {
      Cookies.remove("session");
      router.push("/sign_in");
    },
  });

  const submitted = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const otp = formData.get("otp")?.toString() || "";
    mutate({ otp });
  };

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#314499] via-[#AF289D] to-[#314499]">
      <div className="absolute top-10 left-10">
        <p className="font-changa text-4xl">WinniCareer</p>
      </div>
      <section className="w-[550px] h-full flex items-center ">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Verifikasi Akun</CardTitle>
            <CardDescription>
              OTP telah dikirim melalui email youremail@example.com, silahkan
              masukkan OTP di kolom berikut
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col items-center gap-3 w-full">
            {expiredOTP ? <CountDownOTP expiredOTP={expiredOTP} /> : "Loading"}
            <form
              action=""
              onSubmit={submitted}
              className="flex justify-center items-center flex-col w-full gap-3"
            >
              <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
                className="mb-3 "
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
              <Button type="submit" className="bg-[#5271FF] text-white w-3/4">
                {isPending ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
      <FooterInput />
    </main>
  );
}
