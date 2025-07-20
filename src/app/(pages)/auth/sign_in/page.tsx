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
import { Avatar, AvatarImage } from "@/components/ui/avatar";

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
      <main className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Form Section */}
        <section className="w-full flex flex-col justify-between">
          <div className="h-full px-6 sm:px-12 md:px-16 pt-8 md:pt-24 pb-12">
            <h1 className="text-4xl sm:text-5xl font-semibold mt-10">Masuk</h1>
            <form
              onSubmit={handleFormSubmit}
              className="w-full flex flex-col items-center pt-6"
            >
              <div className="flex flex-col gap-6 w-full ">
                <div className="grid gap-3">
                  <Label
                    htmlFor="email"
                    className="text-lg sm:text-xl font-light"
                  >
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
                  <Label
                    htmlFor="password"
                    className="text-lg sm:text-xl font-light"
                  >
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
                    className="ml-auto inline-block text-sm sm:text-base hover:underline font-bold"
                  >
                    Lupa Password?
                  </Link>
                </div>
                <div className="grid place-items-center gap-3">
                  <Button
                    type="submit"
                    className="h-14 w-full max-w-[360px] bg-[#5271FF] text-white font-bold text-lg"
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
                    className="w-full max-w-[360px] h-14"
                    type="button"
                  >
                    <FcGoogle />
                    Login with Google
                  </Button>
                </div>
              </div>
              <div className="mt-6 text-center text-base">
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
          <div className="px-6 sm:px-12 md:pl-16 pb-4 text-sm text-center lg:text-left">
            <span>Copyright © 2025 PT. WINNICODE GARUDA TEKNOLOGI</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="hidden md:flex w-full h-full flex-col bg-gradient-to-r from-[#AF289D] to-[#314499]">
          <div className="w-full pt-18 pl-20">
            <Link href={"/"} className="text-5xl font-changa text-white">
              WinniCareer
            </Link>
          </div>
          <div className="w-full h-3/4 items-center justify-center flex px-6">
            <div className="text-center max-w-xl">
              <span className="text-4xl xl:text-6xl italic font-bold text-white">
                Jelajahi potensi dirimu dan jadilah professional.
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
