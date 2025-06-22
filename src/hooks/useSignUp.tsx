import { FormState } from "@/lib/definition";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useSignUp = (state: FormState | undefined) => {
  const router = useRouter();
  useEffect(() => {
    if (state?.success) {
      console.log(state);
      router.push("/auth/otp");
    }
  }, [state, router]);
};
