"use client";
import FooterInput from "@/components/public/footer-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { z } from "zod";

const schema = z
  .object({
    password: z
      .string()
      .regex(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Password harus mengandung angka dan simbol"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak cocok",
    path: ["confirmPassword"],
  });

export default function ResetPassword() {
  const router = useRouter();
  const tokenParams = useSearchParams();
  const token = tokenParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { data: dataQuery, isPending: pendingQuery } = useQuery({
    queryKey: ["token_reset", token],
    queryFn: async () => {
      const res = await fetch(`/api/reset?token=${token}`);
      const resetData = await res.json();
      console.log("data", resetData);
      return resetData;
    },
  });

  const { isPending: pendingMutate, mutate } = useMutation({
    mutationFn: async () => {
      await fetch(`/api/reset?uuid=${dataQuery.data}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(password),
      });
    },
    onSuccess: () => router.push("/auth/sign_in"),
  });

  useEffect(() => {
    if (!pendingQuery) {
      if (dataQuery.success === false) {
        router.push("/");
      }
    }
  }, [dataQuery, router, pendingQuery]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = schema.safeParse({ password, confirmPassword });

    if (!result.success) {
      setError(result.error.issues[0]?.message || "Terjadi kesalahan");
    } else {
      setError("");
    }
    mutate();
  };

  return (
    <main className="h-screen relative w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#314499] via-[#AF289D] to-[#314499]">
      <div className="absolute top-10 left-10">
        <p className="font-changa text-4xl">WinniCareer</p>
      </div>
      <section className="h-full flex w-1/4 items-center">
        <div className="bg-[#111110] w-full p-6 rounded-lg flex flex-col justify-center ">
          <h2 className="font-bold text-start w-full text-2xl">
            Reset Password
          </h2>
          <p className="text-gray-400 text-sm mb-3  ">
            Masukkan password barumu
          </p>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-3">
              <Label className="mb-2">
                New Password<p className="text-red-600">*</p>
              </Label>
              <Input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <Label className="mb-2">
                Confirm Password<p className="text-red-600">*</p>
              </Label>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={pendingQuery || pendingMutate}
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
      <FooterInput />
    </main>
  );
}
