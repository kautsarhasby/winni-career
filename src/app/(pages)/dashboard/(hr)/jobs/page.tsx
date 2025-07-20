"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useJobs } from "@/hooks/useJobs";
import { JobsTable } from "@/components/dashboard/table/table_jobs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JobListPage() {
  const { data: jobs, isPending } = useJobs();
  const [filter, setFilter] = useState("");

  return (
    <main className="h-full w-full flex flex-col  p-4">
      <section className="grid gap-3 my-3">
        <Input
          placeholder="Search Jobs"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="w-full flex justify-end">
          <Button asChild>
            <Link href={"/dashboard/jobs/add"}>Add Jobs</Link>
          </Button>
        </div>
      </section>

      <section>
        {isPending ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <JobsTable data={jobs ?? []} filterValue={filter} />
        )}
      </section>
    </main>
  );
}
