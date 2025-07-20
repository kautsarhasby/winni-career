import { IJobs } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useSingleJob(id: string) {
  return useQuery({
    queryKey: ["job", id],
    queryFn: async () => {
      const res = await fetch(`/api/jobs?uuid=${id}`);
      const data = await res.json();
      console.log(data);
      const jobs: IJobs = data.data;
      return jobs;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
