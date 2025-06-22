"use client";
import { useQuery } from "@tanstack/react-query";
import { IJobs } from "../../types";
import Navbar from "@/components/public/navbar";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseBusiness, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Main() {
  const { data, isPending } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      const jobs: IJobs[] = data.data;
      return jobs;
    },
  });

  return (
    <main className="min-h-screen w-full relative">
      <Navbar />
      <section className="grid-cols-3 grid gap-3 p-2">
        {isPending
          ? "Loading data"
          : data?.map((job, i) => (
              <Card className="bg-white" key={i.toString()}>
                <CardHeader>
                  <CardTitle className="text-2xl text-black font-semibold  @[250px]/card:text-3xl">
                    {job.position}
                  </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col text-muted-foreground  items-start gap-1.5 text-sm">
                  <div className="text-muted-foreground flex items-center gap-2">
                    {" "}
                    <Building2 size={16} />
                    {job.jobLocType}
                  </div>
                  <div className="text-muted-foreground flex items-center gap-2">
                    {" "}
                    <BriefcaseBusiness size={16} />
                    {job.empType}
                  </div>

                  <div className="line-clamp-1 items-center flex gap-2 font-medium">
                    <Clock size={16} /> Batas Lamar :{" "}
                    <span>
                      {new Date(job.deadline).getDate().toString()}{" "}
                      {new Date(job.deadline).toLocaleDateString("default", {
                        month: "long",
                      })}{" "}
                      {new Date(job.deadline).getFullYear().toString()}
                    </span>
                  </div>
                  <div className="flex gap-2 justify-end border w-full">
                    <Button className="outline-[#5271FF]">Detail</Button>
                    <Button className="bg-[#5271FF] text-white">Lamar</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
      </section>
    </main>
  );
}
