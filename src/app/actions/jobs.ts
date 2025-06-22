import { IJobs } from "../../../types";

type JobsData = Omit<IJobs, "jobLocType" | "empType" | "deadline" | "id"> & {
  jobLocType: string;
  empType: string;
  deadline: string;
};

export async function addJobs(formData: JobsData) {
  const {
    publisherId,
    deadline,
    position,
    jobLocType,
    empType,
    qualification,
    description,
  } = formData;

  const deadlineDate = new Date(deadline);

  const res = await fetch("/api/jobs", {
    method: "POST",
    body: JSON.stringify({
      publisherId,
      position,
      jobLocType,
      empType,
      deadline: deadlineDate,
      qualification,
      description,
    }),
    headers: { "Content-Type": "application/json" },
  });

  return { success: res.ok };
}
