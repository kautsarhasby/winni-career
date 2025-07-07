"use client";
import Navbar from "@/components/public/navbar";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/public/footer";
import { usePaginated } from "@/hooks/usePaginated";
import CardJobs from "@/components/public/card/jobs";
import { useSearchJobs } from "@/hooks/useSearchJobs";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Main() {
  const { data: session } = useSession();
  const { paginatedData, totalPages, setCurrentPage, currentPage, isPending } =
    usePaginated();
  const {
    filteredData,
    handleSearch,
    setFilters,
    setSearchQuery,
    searchQuery,
  } = useSearchJobs(paginatedData);
  return (
    <main className="min-h-screen w-full relative">
      <Navbar />
      <section className="h-[460px] w-full bg-gradient-to-r from-[#314499] via-[#AF289D] to-[#314499] flex items-center justify-center relative">
        <div className="absolute left-10 top-10 border-b-2 border-white w-[360px] pb-4">
          <span className="font-bold text-2xl ">Winni Career</span>
        </div>
        <div className="w-1/3 text-center ">
          <span className="font-bold text-6xl italic">
            Jelajahi Potensi dirimu dan jadilah professional
          </span>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full">
        <div className="w-full h-[200px] flex items-center justify-center gap-2 container">
          <div className="relative ">
            <Search
              className="absolute top-2.5 left-2"
              size={18}
              color="black"
            />
            <Input
              placeholder="Cari Lowongan"
              name="position"
              className="pl-8 w-[400px] !bg-neutral-300 !text-[#929292]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative w-full ">
            <select
              className="appearance-none  h-9  w-full bg-neutral-300 text-black font-semibold rounded-md px-4 py-2 text-center text-sm pr-10"
              name="jobLocType"
              defaultValue={""}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, jobLocType: e.target.value }))
              }
            >
              <option value="">Semua Sistem Kerja</option>
              <option value="wfo">WFO</option>
              <option value="wfh">WFH</option>
            </select>

            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black pointer-events-none" />
          </div>
          <div className="relative w-full ">
            <select
              className="appearance-none text-sm h-9 w-full bg-neutral-300 text-black font-semibold rounded-md px-4 py-2 text-center pr-10"
              name="empType"
              defaultValue={""}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, empType: e.target.value }))
              }
            >
              <option value={""}>Semua Tipe Kerja</option>
              <option value="FULLTIME">Fulltime</option>
              <option value="INTERNSHIP">Internship</option>
            </select>

            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black pointer-events-none  " />
          </div>
          <Button
            className="bg-[#5271FF] text-white w-[150px] text-lg"
            onSubmit={handleSearch}
          >
            Cari
          </Button>
        </div>
        <div className="border p-10   mb-20 border-white w-[98%] rounded-lg">
          <div className="border-b border-white w-[240px]">
            <h1>Lowongan yang tersedia</h1>
          </div>
          <div className="grid-cols-3 grid gap-6 p-12">
            {isPending ? (
              <>
                <Skeleton className="w-auto h-60" />
                <Skeleton className="w-auto h-60" />
                <Skeleton className="w-auto h-60" />
                <Skeleton className="w-auto h-60" />
                <Skeleton className="w-auto h-60" />
                <Skeleton className="w-auto h-60" />
              </>
            ) : (
              (filteredData.length > 0 ? filteredData : paginatedData)?.map(
                (job, i) => (
                  <CardJobs
                    key={job.id || i}
                    {...job}
                    role={session?.user.role}
                  />
                )
              )
            )}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <Button
              variant={"ghost"}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              &lt;
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                variant={"ghost"}
                key={page}
                onClick={() => setCurrentPage(page)}
                className={
                  page === currentPage ? " text-white" : "text-neutral-400"
                }
              >
                {page}
              </Button>
            ))}
            <Button
              variant={"ghost"}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              &gt;
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
