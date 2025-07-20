"use server";
import { sendResetEmail } from "@/lib/email/services/send-email";
import { prisma } from "@/lib/prisma-client";
import { IApplicants } from "@/types";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const token = searchParams.get("token")?.toString();
  const dateTime = new Date();

  const applicantToken = await prisma.passwordResetToken.findFirst({
    where: { token },
  });
  console.log(applicantToken);
  if (applicantToken) {
    if (applicantToken.expiresAt.getTime() > dateTime.getTime())
      return NextResponse.json(
        { message: "Expired token", success: false },
        { status: 440 }
      );

    return NextResponse.json(
      { data: applicantToken.applicantId, success: true },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { message: "Something went error", success: false },
    { status: 500 }
  );
}

export async function POST(req: NextRequest) {
  const { email }: { email: string } = await req.json();
  const token = uuidv4();
  const expires = new Date(Date.now() + 1000 * 60 * 10);
  const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset/reset_password?token=${token}`;

  const applicant = await prisma.applicants.findFirst({ where: { email } });

  if (!applicant)
    return NextResponse.json(
      { message: "Applicant tidak ditemukan" },
      { status: 404 }
    );

  const resetEmail = await sendResetEmail({
    email,
    fullname: applicant.fullname,
    resetLink,
  });

  if (resetEmail == false)
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );

  await prisma.passwordResetToken.create({
    data: { token, applicantId: applicant.id, expiresAt: expires },
  });

  return NextResponse.json(
    { message: "Sukses mengirim email" },
    { status: 200 }
  );
}

export async function PUT(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  const data = await request.json();
  if (!uuid)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  const hashedPassword = await bcrypt.hash(data, 10);

  const updateData = await prisma.$transaction([
    prisma.applicants.update({
      where: { id: uuid },
      data: {
        password: hashedPassword,
      },
    }),
  ]);

  return Response.json(
    { message: "Success Updated applicant", data: updateData },
    { status: 200 }
  );
}
