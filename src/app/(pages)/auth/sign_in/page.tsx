"use client";
import { signIn } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FormEvent } from "react";

export default function SignInPage() {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: { email: string; password: string }) => {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (result?.error) throw new Error(result.error);
      return result;
    },
    onSuccess: () => {
      router.push("/");
    },
    onError: (err) => {
      console.error(err);
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
    <main className="flex justify-center items-center w-full h-screen">
      <form onSubmit={handleFormSubmit} className="w-full container border">
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <span className="flex items-center gap-2">
                  <LoaderCircle className="animate-spin" />
                  Authenticating...
                </span>
              ) : (
                "Login"
              )}
            </Button>
            <Button
              onClick={() => signIn("google", { callbackUrl: "/home" })}
              variant="outline"
              className="w-full"
              type="button"
            >
              <FcGoogle />
              Login with Google
            </Button>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="#" className="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </form>
    </main>
  );
}
