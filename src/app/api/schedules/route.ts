import { sendMeetEmail } from "@/lib/email/services/send-email";
import { prisma } from "@/lib/prisma-client";
import { ISchedules } from "@/types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const jobId = request.nextUrl.searchParams.get("jobId");
  const applicantId = request.nextUrl.searchParams.get("applicantId");

  if (applicantId && !jobId) {
    const schedules = await prisma.interviewSchedules.findMany({
      where: { applicantId },
      include: {
        applicant: true,
        job: true,
      },
    });

    return Response.json({
      message: "Success retrieved jobs for applicant",
      data: schedules,
    });
  }

  if (applicantId && jobId) {
    const findedschedules = await prisma.interviewSchedules.findFirst({
      where: {
        jobId,
        applicantId,
      },
      include: {
        applicant: true,
        job: true,
      },
    });

    if (!findedschedules) {
      return Response.json(
        { message: "UUID not found, please check again" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Applicant jobs found", data: findedschedules },
      { status: 200 }
    );
  }

  const allSchedules = await prisma.interviewSchedules.findMany({
    include: {
      applicant: true,
      job: true,
    },
  });

  return Response.json({
    message: "Success retrieved all data",
    data: allSchedules,
  });
}

type schedulesPayload = ISchedules & { email: string; fullname: string };

export async function POST(request: NextRequest) {
  const data: schedulesPayload = await request.json();

  await prisma.$transaction([
    prisma.interviewSchedules.create({
      data: {
        mode: data.mode,
        scheduleDate: data.scheduleDate,
        scheduleTime: data.scheduleTime,
        status: data.status,
        linkMeet: data.linkMeet,
        location: data.location,
        applicantId: data.applicantId,
        jobId: data.jobId,
      },
    }),
  ]);
  const date = new Date(data.scheduleDate);
  const scheduleDate = date.toLocaleDateString("id-ID", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  await sendMeetEmail({
    email: data.email,
    fullname: data.fullname,
    meetingLink: data.linkMeet,
    scheduleDate,
    scheduleTime: data.scheduleTime,
  });

  return Response.json(
    { message: "Successfully added data", data },
    { status: 200 }
  );
}

export async function PUT(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  const data: ISchedules = await request.json();

  if (!uuid)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  const updateData = await prisma.$transaction([
    prisma.interviewSchedules.update({
      where: { id: uuid },
      data,
    }),
  ]);

  return Response.json(
    { message: "Success Updated schedule", data: updateData },
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
  const schedule = await prisma.interviewSchedules.delete({
    where: { id: uuid },
  });

  return Response.json({
    message: `Success Deleted schedule with email : ${schedule.id}`,
  });
}
