import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, BriefcaseBusiness, Clock } from "lucide-react";
import React from "react";
import { IJobs } from "@/types";
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
    <Card className="bg-white shadow-md p-4 sm:p-6 w-full max-w-md mx-auto">
      <CardHeader className="p-0 mb-3">
        <CardTitle className="text-lg sm:text-2xl text-black font-semibold">
          {position}
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex flex-col items-start gap-2 text-muted-foreground text-sm p-0">
        <div className="flex items-center gap-2">
          <Building2 size={16} />
          {jobLocType}
        </div>
        <div className="flex items-center gap-2">
          <BriefcaseBusiness size={16} />
          {empType}
        </div>
        <div className="flex items-center gap-2 font-medium flex-wrap">
          <Clock size={16} /> Batas Lamar:{" "}
          <span>
            {new Date(deadline).getDate()}{" "}
            {new Date(deadline).toLocaleDateString("default", {
              month: "long",
            })}{" "}
            {new Date(deadline).getFullYear()}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full mt-3  md:justify-end">
          <Button className="w-full sm:w-auto" asChild>
            <Link href={`/jobs/${id}`}>Detail</Link>
          </Button>

          {role === "ADMIN" || role === "HR" ? (
            <Button
              disabled
              className="w-full sm:w-[150px] bg-gray-300 text-gray-500"
            >
              Lamar
            </Button>
          ) : (
            <Button
              className="w-full sm:w-[150px] bg-[#5271FF] hover:bg-blue-700 text-white"
              asChild
            >
              <Link href={`/jobs/${id}/apply`}>Lamar</Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
