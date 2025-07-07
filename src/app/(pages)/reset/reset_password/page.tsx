"use client";
import FooterInput from "@/components/public/footer-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function ResetPassword() {
  const router = useRouter();
  const tokenParams = useSearchParams();
  const token = tokenParams.get("token");

  const { data: dataQuery, isPending: pendingQuery } = useQuery({
    queryKey: ["token"],
    queryFn: async () => {
      const res = await fetch(`/api/reset?token=${token}`);
      const resetData = await res.json();
      console.log("data", resetData);
      return resetData;
    },
  });

  const {
    isPending: pendingMutate,
    mutate,
    data: dataMutate,
  } = useMutation({
    mutationFn: async () => {},
  });

  useEffect(() => {
    // if (dataQuery && dataQuery.success === false) {
    //   router.push("/");
    // }
  }, [dataQuery, router]);

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
          <form action="" className="w-full">
            <div className="mb-3">
              <Label className="mb-2">
                New Password<p className="text-red-600">*</p>
              </Label>
              <Input type="password" placeholder="New Password" />
            </div>
            <div className="mb-6">
              <Label className="mb-2">
                Confirm Password<p className="text-red-600">*</p>
              </Label>
              <Input type="password" placeholder="Confirm Password" />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </section>
      <FooterInput />
    </main>
  );
}
