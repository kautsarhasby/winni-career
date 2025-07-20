import { useState } from "react";
import { useJobs } from "./useJobs";

export const usePaginated = () => {
  const itemPerPages = 6;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isPending } = useJobs();
  const totalPages = Math.ceil((data?.length || 0) / itemPerPages);
  const paginatedData = data?.slice(
    (currentPage - 1) * itemPerPages,
    currentPage * itemPerPages
  );

  return { isPending, totalPages, paginatedData, setCurrentPage, currentPage };
};
