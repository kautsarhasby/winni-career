import { prisma } from "@/lib/prisma-client";
import { IJobs } from "../../../../types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  if (!uuid) {
    const jobs = await prisma.jobs.findMany();

    return Response.json({
      message: "Success retrieved all data",
      data: jobs,
    });
  }
  const findedJob = await prisma.jobs.findFirst({
    where: { id: uuid },
  });

  if (!findedJob)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  return Response.json(
    { message: "job found", data: findedJob },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const data: IJobs = await request.json();

  await prisma.$transaction([
    prisma.jobs.create({
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

  const data: IJobs = await request.json();

  if (!uuid)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  const updateData = await prisma.$transaction([
    prisma.jobs.update({
      where: { id: uuid },
      data,
    }),
  ]);

  return Response.json(
    { message: "Success Updated job", data: updateData },
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
  const job = await prisma.jobs.delete({ where: { id: uuid } });

  return Response.json({
    message: `Success Deleted job with id : ${job.id}`,
  });
}
