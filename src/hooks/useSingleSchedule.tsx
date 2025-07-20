import { ISchedules } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useSingleSchedule(id: string, enabled = true) {
  return useQuery<ISchedules[]>({
    queryKey: ["single_schedule", id],
    queryFn: async () => {
      const result = await fetch(`/api/schedules?applicantId=${id}`);
      const data = await result.json();
      return data.data;
    },
    enabled,
  });
}
