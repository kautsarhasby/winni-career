import { INotifications } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function useNotification({
  applicantId,
  shouldFetch,
}: {
  applicantId: string;
  shouldFetch: boolean;
}) {
  return useQuery<INotifications[]>({
    queryKey: ["notifications", applicantId],
    queryFn: async () => {
      const res = await fetch(`/api/notifications?applicantId=${applicantId}`);
      if (res.status === 404) {
        return [];
      }
      const data_res = await res.json();
      return data_res;
    },
    enabled: shouldFetch,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
