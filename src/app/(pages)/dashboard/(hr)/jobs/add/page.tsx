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
import React, { FormEvent, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { addJobs } from "@/app/actions/jobs";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RichTextEditor = dynamic(
  () => import("@/components/dashboard/richtext"),
  { ssr: false }
);

export default function AddJobsPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [qualification, setQualification] = useState<string>("");

  const { isPending, mutate } = useMutation({
    mutationFn: addJobs,
    onError: (err) => {
      toast.error(err?.message || "Terjadi kesalahan saat menambahkan job");
      console.log(err);
    },
    onSuccess: () => {
      toast.success("Job berhasil ditambahkan!");
      router.push("/dashboard/jobs");
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const position = formData.get("position")?.toString() || "";
    const jobLocType = formData.get("jobLocType")?.toString() || "";
    const empType = formData.get("empType")?.toString() || "";
    const deadline = formData.get("deadline")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    const qualification = formData.get("qualification")?.toString() || "";

    const userId = session?.user.id;

    if (!userId) return;

    mutate({
      publisherId: userId,
      position,
      jobLocType,
      empType,
      deadline,
      description,
      qualification,
    });
  };

  return (
    <main className="h-full w-full flex  p-4">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-3">
          <Label htmlFor="position">Job&apos;s Position</Label>
          <Input
            id="position"
            name="position"
            placeholder="Job's Position"
            className="w-full"
          />
        </div>
        <div className="mb-3">
          <Label htmlFor="jobLocType">Job&apos; Location Type</Label>
          <Select name="jobLocType">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Job's Location Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="REMOTE">Remote</SelectItem>
              <SelectItem value="ONSITE">Onsite</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-3">
          <Label htmlFor="empType">Employment Type</Label>
          <Select name="empType">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Employment Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FULLTIME">Fulltime</SelectItem>
              <SelectItem value="INTERNSHIP">Internship</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-3 w-[150px]">
          <Label htmlFor="deadline">Deadline of Acceptance</Label>
          <Input id="deadline" name="deadline" type="date" />
        </div>
        <div className="mb-3">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" />
        </div>
        <div className="mb-3">
          <Label htmlFor="qualification">Qualification</Label>
          <RichTextEditor
            content=""
            onChange={(val) => setQualification(val)}
          />
          <input type="hidden" name="qualification" value={qualification} />
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Publishing..." : "Publish"}{" "}
        </Button>
      </form>
    </main>
  );
}
