"use client";
import { OverViewApplyTable } from "@/components/dashboard/table/overview_apply";
import { OverViewJobsTable } from "@/components/dashboard/table/overview_jobs";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useApplicants } from "@/hooks/useApplicants";
import { useApply } from "@/hooks/useApply";
import { useJobs } from "@/hooks/useJobs";
import { BriefcaseBusiness, LoaderCircle, Users } from "lucide-react";
import React from "react";

export default function DashboardMain() {
  const { data: jobs, isPending: isPendingJobs } = useJobs();
  const { data: applicants, isPending: isPendingApplicants } = useApplicants();
  const { data: apply, isPending: isPendingApply } = useApply();
  return (
    <main className="w-full p-10">
      <section className="w-full h-full rounded  bg-[#111111]">
        <div className="flex gap-4 mb-6 p-6">
          <Card className="relative w-[20rem] bg-gradient-to-r from-[#314499]/60 to-[#5e6997]/6   0">
            <div className="absolute right-0 bottom-0">
              <BriefcaseBusiness size={128} className="opacity-20" />
            </div>
            <CardHeader className="z-20">
              <CardTitle className="text-3xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {isPendingJobs ? (
                  <Skeleton className="h-12 w-[64px] bg-[#192452]" />
                ) : (
                  jobs?.length
                )}
              </CardTitle>
            </CardHeader>

            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-bold text-2xl">
                Jobs Published
              </div>
            </CardFooter>
          </Card>
          <Card className="relative w-[20rem] bg-gradient-to-r from-[#AF289D]/60  to-[#a75c9d]/60">
            <div className="absolute right-0 bottom-0">
              <Users size={128} className="opacity-20 " />
            </div>
            <CardHeader className="z-20">
              <CardTitle className="text-3xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {isPendingApplicants ? "Loading" : applicants?.length}
              </CardTitle>
            </CardHeader>

            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-bold text-2xl">
                Applicants
              </div>
            </CardFooter>
          </Card>
        </div>
        <div>
          <section className="p-10">
            <h1 className="font-bold text-2xl">Overview Applicants</h1>
            {isPendingApply ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <OverViewApplyTable data={apply ?? []} />
            )}
          </section>
          <section className="p-10">
            <h1 className="font-bold text-2xl">Overview Jobs</h1>

            {isPendingJobs ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <OverViewJobsTable data={jobs ?? []} />
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
