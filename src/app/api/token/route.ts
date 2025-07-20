import { prisma } from "@/lib/prisma-client";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const data = await request.json();
  if (!token)
    return Response.json({ message: "Token Not Found" }, { status: 404 });
  await prisma.$transaction([
      const applicantTokenId = await prisma.passwordResetToken.findFirst({
        where: { token },
      });
      

  ]);

  console.log(data);
  return Response.json(
    { message: "Successfully added data", data },
    { status: 200 }
  );
}
