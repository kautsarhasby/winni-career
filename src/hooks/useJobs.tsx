import { useQuery } from "@tanstack/react-query";
import { IJobs } from "@/types";

export function useJobs() {
  return useQuery<IJobs[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      return data.data as IJobs[];
    },
  });
}
