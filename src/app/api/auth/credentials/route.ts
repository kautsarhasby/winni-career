import { prisma } from "@/lib/prisma-client";
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
    where: { email, AND: { password } },
  });
  const applicant = await prisma.applicants.findFirst({
    where: { email, AND: { password } },
  });

  if (user) {
    return NextResponse.json(user);
  } else if (applicant) {
    return NextResponse.json(applicant);
  } else {
    return NextResponse.error();
  }
}
