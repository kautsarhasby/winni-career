import { useQuery } from "@tanstack/react-query";
import { IScheduleTable } from "@/types";

export function useSchedules() {
  return useQuery<IScheduleTable[]>({
    queryKey: ["schedules"],
    queryFn: async () => {
      const res = await fetch("/api/schedules");
      const data = await res.json();
      return data.data as IScheduleTable[];
    },
  });
}
