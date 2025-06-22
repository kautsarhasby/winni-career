import { prisma } from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";

interface ICredentials {
  id: string;
  email: string;
  fullname: string;
  role?: string;
}

export async function POST(req: NextRequest) {
  const { email }: ICredentials = await req.json();

  const user = await prisma.users.findFirst({ where: { email } });
  const applicant = await prisma.applicants.findFirst({ where: { email } });

  if (user) {
    return NextResponse.json(user);
  } else if (applicant) {
    return NextResponse.json(applicant);
  } else {
    return NextResponse.error();
  }
}
