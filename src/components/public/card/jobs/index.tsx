import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, BriefcaseBusiness, Clock } from "lucide-react";
import React from "react";
import { IJobs } from "../../../../../types";
import Link from "next/link";

type TypeCardJobs = Omit<IJobs, "publisherId"> & { role: string | undefined };

export default function CardJobs({
  id,
  position,
  jobLocType,
  empType,
  deadline,
  role,
}: TypeCardJobs) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-2xl text-black font-semibold  @[250px]/card:text-3xl">
          {position}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col text-muted-foreground  items-start gap-1.5 text-sm">
        <div className="text-muted-foreground flex items-center gap-2">
          {" "}
          <Building2 size={16} />
          {jobLocType}
        </div>
        <div className="text-muted-foreground flex items-center gap-2">
          {" "}
          <BriefcaseBusiness size={16} />
          {empType}
        </div>

        <div className="line-clamp-1 items-center flex gap-2 font-medium">
          <Clock size={16} /> Batas Lamar :{" "}
          <span>
            {new Date(deadline).getDate().toString()}{" "}
            {new Date(deadline).toLocaleDateString("default", {
              month: "long",
            })}{" "}
            {new Date(deadline).getFullYear().toString()}
          </span>
        </div>
        <div className="flex gap-2 justify-end border w-full">
          <Button className="outline-[#5271FF]" asChild>
            <Link href={`/jobs/${id}`}>Detail</Link>
          </Button>
          {role === "ADMIN" || role === "HR" ? (
            <Button disabled className="bg-gray-300 text-gray-500 w-[150px]">
              Lamar
            </Button>
          ) : (
            <Button className="bg-[#5271FF] hover:bg-blue-700 text-white w-[150px]">
              <Link href={`${id}/apply`}>Lamar</Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
