import { useState } from "react";
import { IJobs } from "@/types";

export const useSearchJobs = (data: IJobs[] | undefined) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    jobLocType: "",
    empType: "",
    position: "",
  });
  const [filteredData, setFilteredData] = useState<IJobs[]>([]);

  function handleSearch() {
    const lowerSearch = searchQuery.toLowerCase();

    const result = data?.filter((job) => {
      const matchSearch =
        job.position.toLowerCase().includes(lowerSearch) ||
        job.empType.toLowerCase().includes(lowerSearch);

      const matchLoc =
        !filters.jobLocType || job.jobLocType === filters.jobLocType;
      const matchEmp = !filters.empType || job.empType === filters.empType;
      const matchPos = !filters.position || job.position === filters.position;

      return matchSearch && matchLoc && matchEmp && matchPos;
    });

    setFilteredData(result || []);
  }
  return {
    filteredData,
    handleSearch,
    setSearchQuery,
    setFilters,
    filters,
    searchQuery,
  };
};
