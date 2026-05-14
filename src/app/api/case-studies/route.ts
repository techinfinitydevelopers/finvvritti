import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const studies = await prisma.caseStudy.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(studies);
}
