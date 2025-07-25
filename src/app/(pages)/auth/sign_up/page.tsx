"use client";
import DateComponent from "@/components/public/date";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormState, SignupFormApplicantSchema } from "@/lib/definition";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircleIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

type ApplicantPayload = z.infer<typeof SignupFormApplicantSchema>;
type ErrorResponse = {
  message: string;
  errors?: Record<string, string[]>;
};

export default function SignUp() {
  const [birthdate, setBirthdate] = useState("");
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "MALE",
  });
  const [formState, setFormState] = useState<FormState>({
    values: {},
    errors: {},
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGenderChange = (value: string) => {
    setForm((prev) => ({ ...prev, gender: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      ...form,
      birthdate,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: ApplicantPayload) => {
      const formData = new FormData();
      formData.append("fullname", payload.fullname);
      formData.append("email", payload.email);
      formData.append("password", payload.password);
      formData.append("gender", payload.gender);
      formData.append("birthdate", birthdate);
      const res = await fetch("/api/auth/sign_up", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        throw result;
      }

      return result;
    },
    onSuccess: (data) => {
      if (data.success) {
        window.location.href = "/otp";
      } else {
        setFormState(data);
      }
    },
    onError: (error: ErrorResponse) => {
      setFormState((prev) => ({
        ...prev,
        message: error?.message ?? "Terjadi kesalahan",
        errors: error?.errors ?? {},
      }));
    },
  });

  return (
    <main className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2">
      <section className="hidden md:flex bg-gradient-to-r from-[#AF289D] to-[#314499] flex-col">
        <div className="pt-18 pl-20">
          <Link href="/" className="text-5xl font-changa text-white">
            WinniCareer
          </Link>
        </div>
        <div className="w-full h-3/4 flex items-center justify-center">
          <div className="w-[560px] text-center text-white text-6xl italic font-bold">
            Jelajahi potensi dirimu dan jadilah professional.
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col">
        <div className="h-full md:pt-4 pb-24 px-4 md:px-16">
          <h1 className="text-5xl font-semibold mt-20">Daftar</h1>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col justify-center items-center pt-6"
          >
            <div className="flex flex-col gap-6 w-full">
              <div>
                <Label htmlFor="fullname" className="text-xl font-light mb-2">
                  Fullname
                </Label>
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder="Fullname"
                  value={form.fullname}
                  onChange={handleChange}
                />
                {formState.errors?.fullname && (
                  <p className="text-red-600">{formState.errors.fullname}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-xl font-light mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                {formState.errors?.email && (
                  <p className="text-red-600">{formState.errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="password" className="text-xl font-light mb-2">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={form.password}
                  onChange={handleChange}
                />
                {formState.errors?.password?.map((err, i) => (
                  <p key={i} className="text-red-600">
                    • {err}
                  </p>
                ))}
              </div>

              <div>
                <Label htmlFor="birthdate" className="text-xl font-light mb-2">
                  Birthdate
                </Label>
                <DateComponent onChange={setBirthdate} />
                {formState.errors?.birthdate && (
                  <p className="text-red-600">{formState.errors.birthdate}</p>
                )}
              </div>

              <div>
                <Label className="text-xl font-light mb-2">Gender</Label>
                <RadioGroup
                  defaultValue="MALE"
                  name="gender"
                  onValueChange={handleGenderChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      id="male"
                      value="MALE"
                      className="w-6 h-6"
                    />
                    <Label htmlFor="male" className="text-lg font-bold">
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      id="female"
                      value="FEMALE"
                      className="w-6 h-6"
                    />
                    <Label htmlFor="female" className="text-lg font-bold">
                      Female
                    </Label>
                  </div>
                </RadioGroup>
                {formState.errors?.gender && (
                  <p className="text-red-600">{formState.errors.gender}</p>
                )}
              </div>

              <div className="flex flex-col gap-4 items-center">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-14 w-full bg-[#5271FF] text-white font-bold text-xl md:w-[360px]"
                >
                  {isPending ? (
                    <LoaderCircleIcon className="animate-spin" />
                  ) : (
                    "Daftar"
                  )}
                </Button>

                <p>atau</p>

                <Button
                  onClick={() => signIn("google", { callbackUrl: "/home" })}
                  variant="outline"
                  className="md:w-[360px] w-full h-14"
                  type="button"
                >
                  <FcGoogle />
                  Login with Google
                </Button>
              </div>
            </div>
          </form>

          <div className="text-center text-lg pt-8">
            Sudah punya akun?{" "}
            <Link
              href="/auth/sign_in"
              className="hover:underline font-bold text-[#5271FF]"
            >
              Masuk
            </Link>
          </div>
        </div>

        <div className="px-4 text-center md:pr-8 pb-2">
          <span>Copyright © 2025 PT. WINNICODE GARUDA TEKNOLOGI</span>
        </div>
      </section>
    </main>
  );
}
