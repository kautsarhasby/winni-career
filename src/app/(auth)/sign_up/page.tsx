"use client";
import { signUpApplicant } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";

export default function SignUp() {
  const [state, action, pending] = useActionState(signUpApplicant, undefined);

  return (
    <main>
      <form action={action}>
        <div>
          <label htmlFor="fullname">Fullname</label>
          <Input id="fullname" name="fullname" placeholder="Fullname" />
          {state?.errors?.fullname && (
            <p className="text-red-600">{state.errors.fullname}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input id="email" name="email" placeholder="Email" />
          {state?.errors?.email && (
            <p className="text-red-600">{state.errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input id="password" name="password" type="password" />
          {state?.errors?.password && (
            <p className="text-red-600">{state.errors.fullname}</p>
          )}
        </div>
        <div>
          <label htmlFor="birthdate">Birthdate</label>
          <Input id="birthdate" name="birthdate" type="date" />
          {state?.errors?.birthdate && (
            <p className="text-red-600">{state.errors.birthdate}</p>
          )}
        </div>
        <div>
          <div className="flex items-center flex-row-reverse p-0 m-0">
            <label htmlFor="maleRadio">Male</label>
            <Input id="maleRadio" name="gender" type="radio" value="MALE" />
          </div>
          <div>
            <label htmlFor="femaleRadio">Female</label>
            <Input id="femaleRadio" name="gender" type="radio" value="FEMALE" />
          </div>
          {state?.errors?.gender && (
            <p className="text-red-600">{state.errors.gender}</p>
          )}
        </div>

        <Button type="submit" disabled={pending}>
          Sign Up
        </Button>
      </form>
    </main>
  );
}
