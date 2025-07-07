"use client";
import { signIn } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FormEvent, useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: { email: string; password: string }) => {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (result?.error) throw new Error("Email atau Password Salah");
      return result;
    },
    onSuccess: () => {
      router.push("/");
    },
    onError: (err) => {
      if (err instanceof Error) {
        setLoginError(err.message);
      } else {
        setLoginError("Terjadi kesalahan saat login.");
      }
    },
  });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    mutate({ email, password });
  };

  return (
    <main className="h-screen w-full grid-cols-2 grid ">
      <section className="w-full flex flex-col ">
        <div className="h-full pt-24 pb-24 pr-16 pl-16  ">
          <h1 className="text-5xl font-semibold mt-20">Masuk</h1>
          <form
            onSubmit={handleFormSubmit}
            className="w-full flex flex-col justify-center items-center pt-6 "
          >
            <div className="flex flex-col gap-6 w-full">
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-xl font-light">
                  Email
                </Label>
                <Input
                  className="h-12"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
                {loginError && (
                  <span className="text-red-600 text-sm">{loginError}</span>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password" className="text-xl font-light">
                  Password
                </Label>

                <Input
                  className="h-12"
                  id="password"
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                />
                <Link
                  href="/reset/email"
                  className="ml-auto inline-block text-lg hover:underline font-bold"
                >
                  Lupa Password?
                </Link>
              </div>
              <div className="grid place-items-center gap-3">
                <Button
                  type="submit"
                  className="h-14 w-[360px] bg-[#5271FF] text-white font-bold text-xl"
                  disabled={isPending}
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <LoaderCircle className="animate-spin" />
                      Authenticating...
                    </span>
                  ) : (
                    "Masuk"
                  )}
                </Button>
                <p>atau</p>
                <Button
                  onClick={() => signIn("google", { callbackUrl: "/home" })}
                  variant="outline"
                  className="w-[360px] h-14"
                  type="button"
                >
                  <FcGoogle />
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-lg">
              Tidak punya akun?{" "}
              <Link
                href="/auth/sign_up"
                className="hover:underline font-bold text-[#5271FF]"
              >
                Daftar
              </Link>
            </div>
          </form>
        </div>
        <div className="pl-8 pb-2">
          <span>Copyright © 2025 PT. WINNICODE GARUDA TEKNOLOGI</span>
        </div>
      </section>
      <section className="w-full h-full flex flex-col bg-gradient-to-r from-[#AF289D] to-[#314499]">
        <div className="w-full pt-18 pl-20">
          <span className="text-5xl font-changa">WinniCareer</span>
        </div>
        <div className=" w-full h-3/4 items-center justify-center flex ">
          <div className="w-[560px] text-center ">
            <span className="text-6xl italic font-bold">
              Jelajahi potensi dirimu dan jadilah professional.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
