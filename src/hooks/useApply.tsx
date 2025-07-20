import { IApply } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useApply() {
  return useQuery<IApply[]>({
    queryKey: ["apply"],
    queryFn: async () => {
      const result = await fetch("/api/applicants_jobs");
      const data = await result.json();
      return data.data;
    },
  });
}
