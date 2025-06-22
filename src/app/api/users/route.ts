import { prisma } from "@/lib/prisma-client";
import { IUsers } from "../../../../types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const role = request.nextUrl.searchParams.get("role")?.toString() || "";

  if (role === "admin") {
    const admin = await prisma.users.findMany({ where: { role: "ADMIN" } });

    return Response.json({ message: "Admin found", data: admin });
  } else if (role === "hr") {
    const hr = await prisma.users.findMany({ where: { role: "HR" } });

    return Response.json({ message: "Hr found", data: hr });
  }
  return Response.json(
    { message: "role not found, please check again" },
    { status: 404 }
  );
}

export async function POST(request: NextRequest) {
  const data: IUsers = await request.json();

  await prisma.$transaction([
    prisma.users.create({
      data: {
        email: data.email,
        username: data.username,
        birthdate: data.birthdate,
        fullname: data.fullname,
        password: data.password,
        role: data.role,
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

  const data: IUsers = await request.json();

  if (!uuid)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  const updateData = await prisma.$transaction([
    prisma.users.update({
      where: { id: uuid },
      data: {
        email: data.email,
        username: data.username,
        birthdate: data.birthdate,
        fullname: data.fullname,
        password: data.password,
        role: data.role,
      },
    }),
  ]);

  return Response.json(
    { message: "Success Updated User", data: updateData },
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
  const user = await prisma.users.delete({ where: { id: uuid } });

  return Response.json({
    message: `Success Deleted user with email : ${user.email}`,
  });
}
