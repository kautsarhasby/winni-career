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
import { useMutation, useQuery } from "@tanstack/react-query";
import { uploadPdf } from "@/lib/supabase/upload";
import FooterInput from "@/components/public/footer-input";
import { useParams } from "next/navigation";
import { IJobs } from "../../../../../../types";
import { Skeleton } from "@/components/ui/skeleton";

export default function JobbApplyPage() {
  const [file, setFile] = useState<File | null>(null);
  const params = useParams();
  const id = params.id;

  const { data, isPending: pendingQuery } = useQuery({
    queryKey: ["job", id],
    queryFn: async () => {
      const res = await fetch(`/api/jobs?uuid=${id}`);
      const data = await res.json();
      console.log(data);
      const jobs: IJobs = data.data;
      return jobs;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (file: File) => uploadPdf(file, "user123"),
  });

  const handleUpload = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      console.log(file);
      mutate(file);
    }
  };
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#314499] via-[#AF289D] to-[#314499]">
      <section className=" w-[550px] h-full flex items-center">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Form Pendaftaran</CardTitle>
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
                  Posisi yang dilamar :{" "}
                  <strong>
                    {data?.position ? (
                      data.position
                    ) : (
                      <Skeleton className="h-6 w-[250px]" />
                    )}
                  </strong>
                </Label>
                <Label>
                  Jenis Kontrak :{" "}
                  <strong>
                    {data?.empType ? (
                      data.empType
                    ) : (
                      <Skeleton className="h-6 w-[150px]" />
                    )}
                  </strong>
                </Label>
                <Label>
                  Sistem Kerja :{" "}
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
                <Input id="fullname" name="fullname" placeholder="Fullname" />
              </div>

              <div className="mb-3">
                <Label htmlFor="CV" className="mb-2">
                  CV
                </Label>
                <Input
                  type="file"
                  id="CV"
                  className="cursor-pointer"
                  accept="application/pdf"
                  onChange={(e) => {
                    setFile(e.target.files?.[0] || null);
                    console.log(e.target.files?.[0]);
                  }}
                />
              </div>

              <div className="w-full flex justify-end">
                <Button type="submit" disabled={isPending || pendingQuery}>
                  {isPending ? "Loading" : "Submit"}
                </Button>
                {isSuccess && (
                  <p className="text-green-600">Berhasil submit!</p>
                )}
                {isError && <p className="text-red-600">Gagal submit!</p>}
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
      <FooterInput />
    </main>
  );
}
