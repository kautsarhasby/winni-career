import { prisma } from "@/lib/prisma-client";
import { ISchedules } from "../../../../types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  if (!uuid) {
    const schedules = await prisma.interviewSchedules.findMany();

    return Response.json({
      message: "Success retrieved all data",
      data: schedules,
    });
  }
  const findedSchedule = await prisma.interviewSchedules.findFirst({
    where: { id: uuid },
  });

  if (!findedSchedule)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  return Response.json(
    { message: "Schedule found", data: findedSchedule },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const data: ISchedules = await request.json();

  await prisma.$transaction([
    prisma.interviewSchedules.create({
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
