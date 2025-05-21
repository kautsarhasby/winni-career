import { prisma } from "@/lib/prisma-client";
import { IApplicantsJobs } from "../../../../types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  if (!uuid) {
    const applicantJobs = await prisma.applicantJobs.findMany();

    return Response.json({
      message: "Success retrieved all data",
      data: applicantJobs,
    });
  }
  const findedApplicantJobs = await prisma.applicantJobs.findFirst({
    where: { id: uuid },
  });

  if (!findedApplicantJobs)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  return Response.json(
    { message: "Applicant jobs found", data: findedApplicantJobs },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const data: IApplicantsJobs = await request.json();

  await prisma.$transaction([
    prisma.applicantJobs.create({
      data,
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
