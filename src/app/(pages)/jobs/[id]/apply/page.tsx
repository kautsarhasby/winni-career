"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadPdf } from "@/lib/supabase/upload";
import FooterInput from "@/components/public/footer-input";
import { useParams, useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import { useSingleJob } from "@/hooks/useSingleJob";

export default function JobApplyPage() {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();
  const params = useParams();
  const { data: session } = useSession();
  const applicantId = session?.user.id;
  const jobId = params.id as string;
  const { data, isPending: pendingQuery } = useSingleJob(jobId);

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: async (file: File) => {
      if (!applicantId) throw new Error("id not found");
      const uploaded = uploadPdf(file, applicantId);
      if ((await uploaded).fullPath) {
        await fetch("/api/resumes", {
          method: "POST",
          body: JSON.stringify({
            applicantId,
            jobId,
            resumeName: `CV-${session?.user.fullname}`,
            resumeUrl: (await uploaded).fullPath,
          }),
          headers: { "Content-Type": "application/json" },
        });

        await fetch("/api/applicants_jobs", {
          method: "POST",
          body: JSON.stringify({
            applicantId,
            jobId,
            resumeApplicantId: applicantId,
            resumeJobId: jobId,
          }),
          headers: { "Content-Type": "application/json" },
        });
      }
    },
    onSuccess: () => router.push(`/jobs/${jobId}/status`),
  });

  const handleUpload = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      console.log(file);
      mutate(file);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#314499] via-[#AF289D] to-[#314499]">
      <section className="w-full max-w-[550px] h-full md:h-auto flex items-center justify-center">
        <Card className="w-full rounded-none md:rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl">
              Form Pendaftaran
            </CardTitle>
            <CardDescription>
              Selamat datang di Form Pendaftaran
            </CardDescription>
            <CardDescription>
              Sebelum melamar, pastikan kamu mengisi semua form berikut.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="" method="POST" onSubmit={handleUpload}>
              <div className="mb-3 flex flex-col gap-3">
                <Label>
                  Posisi yang dilamar:{" "}
                  <strong>
                    {data?.position ? (
                      data.position
                    ) : (
                      <Skeleton className="h-6 w-[250px]" />
                    )}
                  </strong>
                </Label>
                <Label>
                  Jenis Kontrak:{" "}
                  <strong>
                    {data?.empType ? (
                      data.empType
                    ) : (
                      <Skeleton className="h-6 w-[150px]" />
                    )}
                  </strong>
                </Label>
                <Label>
                  Sistem Kerja:{" "}
                  <strong>
                    {data?.jobLocType ? (
                      data.jobLocType
                    ) : (
                      <Skeleton className="h-6 w-[150px]" />
                    )}
                  </strong>
                </Label>
              </div>

              <div className="mb-3">
                <Label htmlFor="fullname" className="mb-2">
                  Fullname
                </Label>
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder="Fullname"
                  className="w-full"
                />
              </div>

              <div className="mb-3">
                <Label htmlFor="CV" className="mb-2">
                  CV
                </Label>
                <Input
                  type="file"
                  id="CV"
                  className="cursor-pointer w-full"
                  accept="application/pdf"
                  onChange={(e) => {
                    setFile(e.target.files?.[0] || null);
                    console.log(e.target.files?.[0]);
                  }}
                />
              </div>

              <div className="w-full flex justify-end flex-wrap gap-2">
                <Button
                  type="submit"
                  disabled={isPending || pendingQuery}
                  className="cursor-pointer"
                >
                  {isPending ? "Loading" : "Submit"}
                </Button>
                {isSuccess && (
                  <p className="text-green-600 text-sm">Berhasil submit!</p>
                )}
                {isError && (
                  <p className="text-red-600 text-sm">Gagal submit!</p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
      <FooterInput />
    </main>
  );
}
