import { IApply } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useSingleApply(id: string, enabled = true) {
  return useQuery<IApply[]>({
    queryKey: ["single_apply", id],
    queryFn: async () => {
      const result = await fetch(`/api/applicants_jobs?applicantId=${id}`);
      const data = await result.json();
      return data.data;
    },
    enabled,
  });
}
