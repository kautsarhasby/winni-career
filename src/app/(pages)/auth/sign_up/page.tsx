"use client";
import { signUpApplicant } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSignUp } from "@/hooks/useSignUp";
import { FormState } from "@/lib/definition";
import { LoaderCircleIcon } from "lucide-react";
import { useActionState } from "react";

export default function SignUp() {
  const [state, action, pending] = useActionState<FormState, FormData>(
    signUpApplicant,
    {
      values: {},
    }
  );

  useSignUp(state);

  return (
    <main className="h-screen w-full grid-cols-2 grid ">
      <section className="h-full bg-purple-300"></section>
      <section className="h-full w-full flex items-center p-4">
        <form action={action} className="w-full">
          <div className="mb-3">
            <Label htmlFor="fullname">Fullname</Label>
            <Input
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
            <Label htmlFor="email">Email</Label>
            <Input
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
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
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
          <div className="mb-3">
            <Label htmlFor="birthdate">Birthdate</Label>
            <Input
              id="birthdate"
              name="birthdate"
              type="date"
              defaultValue={state?.values?.birthdate}
            />
            {state?.errors?.birthdate && (
              <p className="text-red-600">{state.errors.birthdate}</p>
            )}
          </div>
          <RadioGroup defaultValue="MALE" className="mb-3" name="gender">
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="male" value="MALE" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="female" value="FEMALE" />
              <Label htmlFor="female">Female</Label>
            </div>
            {state?.errors?.gender && (
              <p className="text-red-600">{state.errors.gender}</p>
            )}
          </RadioGroup>

          <Button type="submit" disabled={pending}>
            {pending ? (
              <LoaderCircleIcon className="animate-spin" />
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </section>
    </main>
  );
}
