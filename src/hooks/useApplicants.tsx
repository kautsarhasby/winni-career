import { IApplicants } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useApplicants() {
  return useQuery<IApplicants[]>({
    queryKey: ["applicants"],
    queryFn: async () => {
      const result = await fetch("/api/applicants");
      const data = await result.json();
      return data.data;
    },
  });
}
