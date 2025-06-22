"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const { mutate, data, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (formData: {
      fullname: string;
      email: string;
      birthdate: string;
      gender: string;
    }) => {
      const res = await fetch("/api/applicants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      return res.json();
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullname = formData.get("fullname")?.toString() || "";
    const birthdate = formData.get("birthdate")?.toString() || "";
    const gender = formData.get("gender")?.toString() || "";
    mutate({ fullname, birthdate, gender, email });
  };

  useEffect(() => {
    console.log(session);
    if (session?.user.name && session.user.email) {
      setFullname(session.user.name);
      setEmail(session.user.email);
    }
  }, [session]);

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <section className="w-1/4">
        <Card>
          <CardHeader>
            <CardTitle>Complete Your Profile</CardTitle>
            <CardDescription>
              Before we continue, it seems you logged in using Google Account.
            </CardDescription>
            <CardDescription>
              Please fill this form and make sure you profile is right
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3">
                <Label htmlFor="fullname" className="mb-2">
                  Fullname
                </Label>
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="birthdate" className="mb-2">
                  Birthdate
                </Label>
                <Input
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  className="w-[150px]"
                />
              </div>
              <div className="mb-3">
                <Label className="mb-2">Gender</Label>
                <RadioGroup defaultValue="MALE" className="mb-3" name="gender">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="male" value="MALE" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="female" value="FEMALE" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="w-full flex justify-end">
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Submitting..." : "Submit"}
                </Button>
              </div>

              {isSuccess && <p className="text-green-600">Berhasil submit!</p>}
              {isError && <p className="text-red-600">Gagal submit!</p>}
              {data && <p className="text-blue-600">{data?.message}</p>}
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
