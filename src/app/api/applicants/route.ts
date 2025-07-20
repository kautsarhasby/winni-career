import { prisma } from "@/lib/prisma-client";
import { IApplicants } from "@/types";
import bcrypt from "bcryptjs";
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
  const data = await request.json();

  const new_birthdate = new Date(data.birthdate);

  await prisma.$transaction([
    prisma.applicants.create({
      data: {
        email: data.email,
        birthdate: new_birthdate,
        fullname: data.fullname,
        password: "",
        gender: data.gender,
        account_type: "GOOGLE",
      },
    }),
  ]);

  console.log(data);
  return Response.json(
    { message: "Successfully added data", data },
    { status: 200 }
  );
}

export async function PUT(request: NextRequest) {
  type IApplicantsPicked = Pick<
    IApplicants,
    "email" | "birthdate" | "fullname" | "gender"
  > &
    Partial<Pick<IApplicants, "password">>;
  const uuid = request.nextUrl.searchParams.get("uuid");

  const data: IApplicants = await request.json();

  if (!uuid)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  const updatePayload: IApplicantsPicked = {
    email: data.email,
    birthdate: data.birthdate,
    fullname: data.fullname,
    gender: data.gender,
  };

  if (data.password && data.password.trim() !== "") {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    updatePayload.password = hashedPassword;
  }
  console.log(updatePayload);
  const updateData = await prisma.$transaction([
    prisma.applicants.update({
      where: { id: uuid },
      data: updatePayload,
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
