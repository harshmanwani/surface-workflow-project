import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { event, visitor, metadata, createdAt } = await request.json();

    const newEvent = await prisma.event.create({
      data: {
        event,
        visitor,
        metadata,
        createdAt: new Date(createdAt),
      },
    });

    return NextResponse.json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const events = await prisma.event.findMany({
    orderBy: { createdAt: 'desc' },
    take: 25,
  });
  return NextResponse.json(events);
}
