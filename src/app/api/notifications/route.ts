import { prisma } from "@/lib/prisma-client";
import { INotifications } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const applicantId = searchParams.get("applicantId");

  if (!applicantId) {
    return NextResponse.json(
      { message: "Missing applicantId" },
      { status: 400 }
    );
  }

  const notifications = await prisma.notifications.findMany({
    where: { applicantId },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(notifications);
}

export async function POST(request: NextRequest) {
  const data: INotifications = await request.json();

  await prisma.$transaction([
    prisma.notifications.create({
      data,
    }),
  ]);

  return Response.json(
    { message: "Successfully added data", data },
    { status: 200 }
  );
}

export async function PATCH(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("applicantId");

  const data: INotifications = await request.json();

  if (!uuid)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  const updateData = await prisma.$transaction([
    prisma.notifications.update({
      where: { id: uuid },
      data,
    }),
  ]);

  return Response.json(
    { message: "Success Updated notification", data: updateData },
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
  const notification = await prisma.notifications.delete({
    where: { id: uuid },
  });

  return Response.json({
    message: `Success Deleted notification with id : ${notification.id}`,
  });
}
