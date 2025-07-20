import { prisma } from "@/lib/prisma-client";
import { IApplicantsJobs } from "@/types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const jobId = request.nextUrl.searchParams.get("jobId");
  const applicantId = request.nextUrl.searchParams.get("applicantId");

  if (applicantId && !jobId) {
    const applicantJobs = await prisma.applicantJobs.findMany({
      where: { applicantId },
      include: {
        applicant: true,
        job: true,
        resume: true,
      },
    });

    return Response.json({
      message: "Success retrieved jobs for applicant",
      data: applicantJobs,
    });
  }

  if (applicantId && jobId) {
    const findedApplicantJobs = await prisma.applicantJobs.findFirst({
      where: {
        jobId,
        applicantId,
      },
      include: {
        applicant: true,
        job: true,
        resume: true,
      },
    });

    if (!findedApplicantJobs) {
      return Response.json(
        { message: "UUID not found, please check again" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Applicant jobs found", data: findedApplicantJobs },
      { status: 200 }
    );
  }

  const allApplicantJobs = await prisma.applicantJobs.findMany({
    include: {
      applicant: true,
      job: true,
      resume: true,
    },
  });

  return Response.json({
    message: "Success retrieved all data",
    data: allApplicantJobs,
  });
}

export async function POST(request: NextRequest) {
  const data: IApplicantsJobs = await request.json();
  await prisma.$transaction([
    prisma.applicantJobs.create({
      data: { ...data, status: "PENDING" },
    }),
  ]);
  return Response.json(
    { message: "Successfully added data", data },
    { status: 200 }
  );
}

export async function PUT(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  const data: IApplicantsJobs = await request.json();

  if (!uuid)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  const updateData = await prisma.$transaction([
    prisma.applicantJobs.update({
      where: { id: uuid },
      data,
    }),
  ]);

  return Response.json(
    { message: "Success Updated applicant jobs", data: updateData },
    { status: 200 }
  );
}

export async function DELETE(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  if (!uuid)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );
  const applicantJobs = await prisma.applicantJobs.delete({
    where: { id: uuid },
  });

  return Response.json({
    message: `Success Deleted applicant jobs with id : ${applicantJobs.applicantId}`,
  });
}
