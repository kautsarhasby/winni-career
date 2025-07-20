"use client";
import FooterInput from "@/components/public/footer-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

export default function EmailPage() {
  const [email, setEmail] = useState("");
  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      await fetch("/api/reset", {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
        headers: { "Content-Type": "application/json" },
      });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };
  return (
    <main className="h-screen relative w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#314499] via-[#AF289D] to-[#314499]">
      <div className="absolute top-10 left-10">
        <p className="font-changa text-4xl">WinniCareer</p>
      </div>
      <section className="h-full flex w-1/4 items-center">
        <section className="bg-[#111110] w-full p-6 rounded-lg flex flex-col justify-center">
          <div className="mb-3">
            <h2 className="font-bold text-start w-full text-2xl">
              Lupa Password
            </h2>
            <p>Masukkan Email yang terdaftar untuk mendapatkan kode OTP</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full mb-3">
            <div className="mb-3">
              <Label className="mb-2">Email address</Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? <LoaderCircle className="animate-spin" /> : "Kirim"}
            </Button>
          </form>
          <div className="w-full text-center ">
            <p>
              Belum punya akun ?{" "}
              <Link href={"/"} className="font-bold">
                Daftar
              </Link>
            </p>
          </div>
        </section>
      </section>
      <FooterInput />
    </main>
  );
}
