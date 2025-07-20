"use client";
import { Input } from "@/components/ui/input";
import { ApplicantsTable } from "@/components/dashboard/table/table_applicants";
import { LoaderCircle } from "lucide-react";
import { useApply } from "@/hooks/useApply";
import { useState } from "react";

export default function ApplicantListPage() {
  const { data: applicants, isPending } = useApply();
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
          <ApplicantsTable data={applicants ?? []} search={search} />
        )}
      </section>
    </main>
  );
}
