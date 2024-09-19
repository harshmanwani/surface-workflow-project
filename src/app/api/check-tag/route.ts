import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const latestEvent = await prisma.event.findFirst({
      where: { event: 'Track' },
      orderBy: { createdAt: 'desc' },
    });

    if (latestEvent) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 404 });
    }
  } catch (error) {
    console.error("Error checking tag:", error);
    return NextResponse.json({ error: "Failed to check tag" }, { status: 500 });
  }
}
