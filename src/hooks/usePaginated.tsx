import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IJobs } from "../../types";

export const usePaginated = () => {
  const itemPerPages = 6;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isPending } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      const jobs: IJobs[] = data.data;
      return jobs;
    },
  });
  const totalPages = Math.ceil((data?.length || 0) / itemPerPages);
  const paginatedData = data?.slice(
    (currentPage - 1) * itemPerPages,
    currentPage * itemPerPages
  );

  return { isPending, totalPages, paginatedData, setCurrentPage, currentPage };
};
