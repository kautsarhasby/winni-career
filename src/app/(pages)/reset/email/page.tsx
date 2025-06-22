"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export default function EmailPage() {
  const { isPending, mutate, data } = useMutation({
    mutationFn: async () => {},
  });
  return (
    <main className="h-screen flex items-center justify-center">
      <section className="bg-[#111110]  w-1/4 p-6 rounded-lg flex flex-col ">
        <div className="mb-3">
          <h2 className="font-bold text-start w-full text-2xl">
            Forgot Password
          </h2>
          <p>Fill up the form to reset the password</p>
        </div>
        <form action="" className="w-full mb-3">
          <div className="mb-3">
            <Label className="mb-2">Email address</Label>
            <Input type="email" placeholder="Email" />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
        <div className="w-full text-center ">
          <p>
            Not register yet ?{" "}
            <Link href={"/"} className="font-bold">
              Register now
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
