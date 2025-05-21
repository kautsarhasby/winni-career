import { prisma } from "@/lib/prisma-client";
import { IApplicants } from "../../../../types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  if (!uuid) {
    const applicants = await prisma.applicants.findMany();

    return Response.json({
      message: "Success retrieved all data",
      data: applicants,
    });
  }
  const findedApplicant = await prisma.applicants.findFirst({
    where: { id: uuid },
  });

  if (!findedApplicant)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  return Response.json(
    { message: "Applicant found", data: findedApplicant },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const data: IApplicants = await request.json();

  await prisma.$transaction([
    prisma.applicants.create({
      data: {
        email: data.email,
        birthdate: data.birthdate,
        fullname: data.fullname,
        password: data.password,
        gender: data.gender,
      },
    }),
  ]);

  return Response.json(
    { message: "Successfully added data", data },
    { status: 200 }
  );
}

export async function PUT(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  const data: IApplicants = await request.json();

  if (!uuid)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  const updateData = await prisma.$transaction([
    prisma.applicants.update({
      where: { id: uuid },
      data: {
        email: data.email,
        birthdate: data.birthdate,
        fullname: data.fullname,
        password: data.password,
        gender: data.gender,
      },
    }),
  ]);

  return Response.json(
    { message: "Success Updated applicant", data: updateData },
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
  const applicant = await prisma.applicants.delete({ where: { id: uuid } });

  return Response.json({
    message: `Success Deleted applicant with email : ${applicant.email}`,
  });
}
