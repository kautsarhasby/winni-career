"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { FormEvent, useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { editJobs } from "@/app/actions/jobs";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useSingleJob } from "@/hooks/useSingleJob";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const RichTextEditor = dynamic(
  () => import("@/components/dashboard/richtext"),
  { ssr: false }
);

export default function EditJobsPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const params = useParams();
  const jobId = params.jobId as string;
  const { data: job, isPending: isPendingJob } = useSingleJob(jobId);
  const [empType, setEmpType] = useState("");
  const [jobLocType, setJobLocType] = useState("");

  const [qualification, setQualification] = useState<string>("");

  useEffect(() => {
    if (job?.qualification) {
      setQualification(job.qualification);
    }
  }, [job]);
  useEffect(() => {
    if (job) {
      setEmpType(job.empType || "");
      setJobLocType(job.jobLocType || "");
    }
  }, [job]);

  const { isPending, mutate } = useMutation({
    mutationFn: editJobs,
    onError: (err) => console.log(err),
    onSuccess: () => router.push("/dashboard/jobs"),
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const position = formData.get("position")?.toString() || "";
    const jobLocType = formData.get("jobLocType")?.toString() || "";
    const empType = formData.get("empType")?.toString() || "";
    const deadline = formData.get("deadline")?.toString() || "";
    const description = formData.get("description")?.toString() || "";

    const userId = session?.user.id;
    if (!userId) return;

    mutate({
      jobId,
      formData: {
        publisherId: userId,
        position,
        jobLocType,
        empType,
        deadline,
        description,
        qualification,
      },
    });
  };

  const isLoading = isPendingJob || !job;

  return (
    <main className="h-full w-full flex flex-col p-4">
      <h1 className="text-2xl font-semibold">Edit Job</h1>
      <form className="w-full p-4 rounded-md" onSubmit={handleSubmit}>
        {isLoading && (
          <div className="text-sm text-muted-foreground flex items-center gap-2 mb-4">
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading job data...
          </div>
        )}

        <div className="mb-4">
          <Label htmlFor="position" className="mb-1 block">
            Job&apos;s Position
          </Label>
          <Input
            id="position"
            name="position"
            placeholder="Job's Position"
            className="w-full"
            defaultValue={job?.position}
            disabled={isLoading}
          />
        </div>

        <div className="mb-4">
          <input type="hidden" name="jobLocType" value={jobLocType} />
          <Label htmlFor="jobLocType" className="mb-1 block">
            Job&apos;s Location Type
          </Label>
          <Select
            name="jobLocType"
            value={job?.jobLocType}
            onValueChange={(val) => setJobLocType(val)}
            disabled={isLoading}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Job's Location Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="REMOTE">Remote</SelectItem>
              <SelectItem value="ONSITE">Onsite</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <input type="hidden" name="empType" value={empType} />
          <Label htmlFor="empType" className="mb-1 block">
            Employment Type
          </Label>
          <Select
            name="empType"
            value={job?.empType}
            onValueChange={(val) => setEmpType(val)}
            disabled={isLoading}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Employment Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FULLTIME">Fulltime</SelectItem>
              <SelectItem value="INTERNSHIP">Internship</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4 w-[200px]">
          <Label htmlFor="deadline" className="mb-1 block">
            Deadline of Acceptance
          </Label>
          <Input
            id="deadline"
            name="deadline"
            type="date"
            defaultValue={
              job?.deadline
                ? new Date(job.deadline).toISOString().split("T")[0]
                : ""
            }
            disabled={isLoading}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="description" className="mb-1 block">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            defaultValue={job?.description}
            disabled={isLoading}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="qualification" className="mb-1 block">
            Qualification
          </Label>
          <RichTextEditor
            content={qualification}
            onChange={(val) => setQualification(val)}
          />
          <input type="hidden" name="qualification" value={qualification} />
        </div>

        <Button type="submit" disabled={isPending || isLoading}>
          {isPending ? "Publishing..." : "Publish"}
        </Button>
      </form>
    </main>
  );
}
