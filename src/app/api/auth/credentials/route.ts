import { prisma } from "@/lib/prisma-client";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

interface ICredentials {
  id: string;
  email: string;
  fullname: string;
  password: string;
  role?: string;
}

export async function POST(req: NextRequest) {
  const { email, password }: ICredentials = await req.json();

  const user = await prisma.users.findFirst({
    where: { email },
  });
  const applicant = await prisma.applicants.findFirst({
    where: { email },
  });

  console.log(user);
  if (user && (await bcrypt.compare(password, user.password))) {
    return NextResponse.json(user);
  }

  if (applicant && (await bcrypt.compare(password, applicant.password))) {
    return NextResponse.json(applicant);
  }

  return new NextResponse("Email atau Password salah", { status: 401 });
}
