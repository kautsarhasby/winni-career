"use client";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { SchedulesTable } from "@/components/dashboard/table/table_schedules";
import { useSchedules } from "@/hooks/useSchedules";
import { useState } from "react";

export default function ApplicantListPage() {
  const { data: applicants, isPending } = useSchedules();
  const [search, setSearch] = useState("");

  return (
    <main className="h-full w-full flex flex-col  p-4">
      <section className="grid gap-3 mb-3">
        <Input
          placeholder="Search Applicant"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section>
        {isPending ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <SchedulesTable data={applicants ?? []} search={search} />
        )}
      </section>
    </main>
  );
}
