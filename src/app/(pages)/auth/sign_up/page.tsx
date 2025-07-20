"use client";
import { signUpApplicant } from "@/app/actions/auth";
import DateComponent from "@/components/public/date";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSignUp } from "@/hooks/useSignUp";
import { FormState } from "@/lib/definition";
import { LoaderCircleIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useActionState, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const [birthdate, setBirthdate] = useState("");
  const [state, action, pending] = useActionState<FormState, FormData>(
    signUpApplicant,
    {
      values: {},
    }
  );

  useSignUp(state);

  return (
    <>
      <header className="md:hidden flex items-center gap-2 p-4 min-w-0">
        <Link href="/" className="flex items-center gap-2">
          <Avatar className="w-[24px] h-[24px] md:block">
            <AvatarImage src="/logo-winnicode.png" />
          </Avatar>
          <h1 className="font-changa text-[#FF66C4] truncate max-w-[120px] sm:max-w-[200px] md:text-2xl">
            Winni<span className="text-[#5271FF]">Career</span>
          </h1>
        </Link>
      </header>
      <main className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2">
        <section className="hidden w-full h-full md:flex flex-col bg-gradient-to-r from-[#AF289D] to-[#314499]">
          <div className="w-full pt-18 pl-20">
            <Link href={"/"} className="text-5xl font-changa">
              WinniCareer
            </Link>
          </div>
          <div className=" w-full h-3/4 items-center justify-center flex ">
            <div className="w-[560px] text-center ">
              <span className="text-6xl italic font-bold">
                Jelajahi potensi dirimu dan jadilah professional.
              </span>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col ">
          <div className="h-full md:pt-4 pb-24 px-4 md:px-16">
            <h1 className="text-5xl font-semibold mt-20">Daftar</h1>
            <form
              action={action}
              className="w-full flex flex-col justify-center items-center pt-6 "
            >
              <div className="flex flex-col gap-6 w-full">
                <div className="mb-3">
                  <Label htmlFor="fullname" className="text-xl font-light mb-2">
                    Fullname
                  </Label>
                  <Input
                    className="h-12"
                    id="fullname"
                    name="fullname"
                    placeholder="Fullname"
                    defaultValue={state?.values?.fullname}
                  />
                  {state?.errors?.fullname && (
                    <p className="text-red-600">{state.errors.fullname}</p>
                  )}
                </div>
                <div className="mb-3">
                  <Label htmlFor="email" className="text-xl font-light mb-2">
                    Email
                  </Label>
                  <Input
                    className="h-12"
                    id="email"
                    name="email"
                    placeholder="Email"
                    defaultValue={state?.values?.email}
                  />
                  {state?.errors?.email && (
                    <p className="text-red-600">{state.errors.email}</p>
                  )}
                </div>
                <div className="mb-3">
                  <Label htmlFor="password" className="text-xl font-light mb-2">
                    Password
                  </Label>

                  <Input
                    className="h-12"
                    id="password"
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    defaultValue={state?.values?.password}
                  />
                  {state?.errors?.password &&
                    state.errors.password.map((error, i) => (
                      <p className="text-red-600" key={i}>
                        &#8226; {error}
                      </p>
                    ))}
                </div>
                <div>
                  <Label
                    htmlFor="birthdate"
                    className="text-xl font-light mb-2"
                  >
                    Birthdate
                  </Label>
                  <DateComponent onChange={(date) => setBirthdate(date)} />
                  <Input type="hidden" name="birthdate" value={birthdate} />
                  {state?.errors?.birthdate && (
                    <p className="text-red-600">{state.errors.birthdate}</p>
                  )}
                </div>
                <div className="mb-3">
                  <Label htmlFor="" className="text-xl font-light mb-2">
                    Gender
                  </Label>
                  <RadioGroup
                    defaultValue="MALE"
                    className="mb-3"
                    name="gender"
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
                    {state?.errors?.gender && (
                      <p className="text-red-600">{state.errors.gender}</p>
                    )}
                  </RadioGroup>
                </div>

                <div className="justify-around items-center gap-4 flex flex-col">
                  <Button
                    type="submit"
                    disabled={pending}
                    className="h-14 md:w-[360px] w-full bg-[#5271FF] text-white font-bold text-xl"
                  >
                    {pending ? (
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
            <div className="text-center text-lg pt-8 ">
              <span>
                Sudah punya akun?{" "}
                <Link
                  href={"/auth/sign_in"}
                  className="hover:underline font-bold text-[#5271FF]"
                >
                  Masuk
                </Link>
              </span>
            </div>
          </div>
          {/* Footer */}
          <div className="md:self-end px-4 text-center md:pr-8 pb-2 self-center">
            <span>Copyright © 2025 PT. WINNICODE GARUDA TEKNOLOGI</span>
          </div>
        </section>
      </main>
    </>
  );
}
