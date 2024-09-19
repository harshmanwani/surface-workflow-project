import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { event, visitor, metadata } = await request.json();

  const newEvent = await prisma.event.create({
    data: {
      event,
      visitor,
      metadata,
    },
  });

  return NextResponse.json(newEvent);
}

export async function GET(request: Request) {
  return NextResponse.json({
    "test": "lol ok"
  })
}
