import { prisma } from "@/lib/prisma-client";
import { INotifications } from "../../../../types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  if (!uuid) {
    const notifications = await prisma.notifications.findMany();

    return Response.json({
      message: "Success retrieved all data",
      data: notifications,
    });
  }
  const findedNotification = await prisma.notifications.findFirst({
    where: { id: uuid },
  });

  if (!findedNotification)
    return Response.json(
      { message: "UUID not found, please check again" },
      { status: 404 }
    );

  return Response.json(
    { message: "Notification found", data: findedNotification },
    { status: 200 }
  );
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

export async function PUT(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

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
