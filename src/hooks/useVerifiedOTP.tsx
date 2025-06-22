import { FormState } from "@/lib/definition";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useVerifiedOTP = (verified: boolean) => {
  const router = useRouter();
  useEffect(() => {}, [router]);
};
