"use client";
import { FormDialog } from "@/components/dashboard/form-dialog";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { IApplicants } from "../../../../../types";
import { DataTableDemo } from "@/components/dashboard/table";

export default function ApplicantListPage() {
  const { data: applicants, isPending } = useQuery({
    queryKey: ["applicants"],
    queryFn: async () => {
      const result = await fetch("/api/applicants");
      const data = await result.json();
      console.log(data);
      return data;
    },
  });

  return (
    <main className="h-full w-full flex flex-col  p-4">
      <section className="grid gap-3">
        <Input placeholder="Search Applicant" />
        <div className="w-full flex justify-end">
          <FormDialog />
        </div>
      </section>
      <section>
        {isPending
          ? "Loading Applicant"
          : applicants.data.map((applicant: IApplicants, i: number) => (
              <p key={i.toString()}>{applicant.fullname}</p>
            ))}
      </section>
      <section>
        <DataTableDemo data={applicants} />
      </section>
    </main>
  );
}
