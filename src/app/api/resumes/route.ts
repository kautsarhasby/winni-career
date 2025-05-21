import { prisma } from "@/lib/prisma-client";
import { IResumes } from "../../../../types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  if (!uuid) {
    const resumes = await prisma.resumes.findMany();

    return Response.json({
      message: "Success retrieved all data",
      data: resumes,
    });
  }
  const findedResume = await prisma.resumes.findFirst({
    where: { id: uuid },
  });

  if (!findedResume)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  return Response.json(
    { message: "resume found", data: findedResume },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const data: IResumes = await request.json();

  await prisma.$transaction([
    prisma.resumes.create({
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

  const data: IResumes = await request.json();

  if (!uuid)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  const updateData = await prisma.$transaction([
    prisma.resumes.update({
      where: { id: uuid },
      data,
    }),
  ]);

  return Response.json(
    { message: "Success Updated resume", data: updateData },
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
  const resume = await prisma.resumes.delete({ where: { id: uuid } });

  return Response.json({
    message: `Success Deleted resume with email : ${resume.id}`,
  });
}
