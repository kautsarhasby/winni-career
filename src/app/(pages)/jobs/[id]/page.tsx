"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { IJobs } from "../../../../../types";
import { useParams } from "next/navigation";
import Navbar from "@/components/public/navbar";
import {
  BriefcaseBusiness,
  Building2,
  Clock,
  LoaderCircle,
  MapPin,
  Share2,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Footer from "@/components/public/footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function JobPage() {
  const { data: session } = useSession();
  const params = useParams();
  const id = params.id;

  const { data, isPending } = useQuery({
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

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <>
      <Navbar />
      <main className="w-full px-4 py-6 text-white bg-black">
        <section className="max-w-7xl h-full ml-12  border-b border-gray-700 pb-2">
          <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between mb-3">
              <h1 className="text-3xl font-bold">
                {data?.position ? (
                  data.position
                ) : (
                  <Skeleton className="h-8 w-[500px] " />
                )}
              </h1>
              <button className="p-2 rounded hover:bg-gray-800">
                <Share2 size={18} />
              </button>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="max-w-sm flex justify-between">
                <span className="flex items-center gap-2">
                  <Building2 size={16} />
                  {data?.jobLocType ? (
                    data.jobLocType
                  ) : (
                    <Skeleton className="h-6 w-[250px]" />
                  )}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  Jakarta
                </span>
              </div>
              <span className="flex items-center gap-2">
                <BriefcaseBusiness size={16} />
                {data?.empType ? (
                  data.empType
                ) : (
                  <Skeleton className="h-6 w-[250px]" />
                )}
              </span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <div className="flex items-center gap-2 text-sm ">
                <Clock size={16} />
                <div className="flex gap-2">
                  <span className="text-muted-foreground flex">
                    Batas Lamar :{" "}
                  </span>
                  {data?.deadline ? (
                    <strong>
                      {" "}
                      {new Date(data.deadline).getDate().toString()}{" "}
                      {new Date(data.deadline).toLocaleDateString("default", {
                        month: "long",
                      })}{" "}
                      {new Date(data.deadline).getFullYear().toString()}
                    </strong>
                  ) : (
                    <Skeleton className="h-6 w-[250px]" />
                  )}
                </div>
              </div>
              {isPending ||
              session?.user.role === "ADMIN" ||
              session?.user.role === "HR" ? (
                <Button
                  disabled
                  className="bg-gray-300 text-gray-500 w-[150px]"
                >
                  {isPending ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "Lamar"
                  )}
                </Button>
              ) : (
                <Button className="bg-[#5271FF] hover:bg-blue-700 text-white w-[150px]">
                  <Link href={`${data?.id}/apply`}>Lamar</Link>
                </Button>
              )}
            </div>
          </div>
        </section>
        <section className="max-w-4xl ml-12 mt-6 space-y-6 text-sm leading-relaxed text-gray-300">
          <div>
            <h2 className="text-white text-lg font-semibold mb-1">Deskripsi</h2>
            {data?.description ? (
              <p>{data?.description}</p>
            ) : (
              <div className="flex flex-col gap-2">
                <Skeleton className="h-6 w-[500px]" />
                <Skeleton className="h-6 w-[300px]" />
                <Skeleton className="h-6 w-[250px]" />
              </div>
            )}
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-1">
              Kualifikasi
            </h2>
            {data?.qualification ? (
              <ul
                className="list-disc  space-y-1"
                dangerouslySetInnerHTML={{ __html: data.qualification }}
              ></ul>
            ) : (
              <div className="flex flex-col gap-2 pl-8">
                <Skeleton className="h-6 w-[300px]" />
                <Skeleton className="h-6 w-[300px]" />
                <Skeleton className="h-6 w-[300px]" />
                <Skeleton className="h-6 w-[300px]" />
                <Skeleton className="h-6 w-[300px]" />
                <Skeleton className="h-6 w-[300px]" />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
