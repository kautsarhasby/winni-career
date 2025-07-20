"use client";
import { useQuery } from "@tanstack/react-query";
import FooterInput from "@/components/public/footer-input";
import { useParams } from "next/navigation";
import { IApplicantsJobs, JobStatus } from "@/types";
import { useSession } from "next-auth/react";
import CardStatus from "@/components/public/card/status_apply";

export default function StatusPage() {
  const params = useParams();
  const { data: session } = useSession();
  const applicantId = session?.user.id;
  const jobId = params.id as string;

  const { data: statusData } = useQuery({
    queryKey: ["applicants_jobs", jobId, applicantId],
    enabled: !!applicantId && !!jobId,
    queryFn: async () => {
      const res = await fetch(
        `/api/applicants_jobs?jobId=${jobId}&applicantId=${applicantId}`
      );
      const data = await res.json();
      console.log(data);
      const applicantsJobs: IApplicantsJobs = data.data;
      return applicantsJobs;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#314499] via-[#AF289D] to-[#314499]">
      <section className=" w-[550px] h-full flex items-center">
        <CardStatus status={statusData?.status as JobStatus} />
      </section>
      <FooterInput />
    </main>
  );
}
