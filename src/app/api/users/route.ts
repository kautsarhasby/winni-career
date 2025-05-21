import { prisma } from "@/lib/prisma-client";
import { IUsers } from "../../../../types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  if (!uuid) {
    const users = await prisma.users.findMany();

    return Response.json({ message: "User found", data: users });
  }
  const findedUser = await prisma.users.findFirst({ where: { id: uuid } });

  if (!findedUser)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  return Response.json(
    { message: "Success retrieved all data", data: findedUser },
    { status: 200 }
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
