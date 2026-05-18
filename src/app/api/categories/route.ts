import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const CONFIG_SLUG = "__config__categories";
const DEFAULT_CATS = ["Virtual CFO", "Direct Tax", "Indirect Tax", "Advisory"];

export async function GET() {
  try {
    const record = await prisma.caseStudy.findUnique({ where: { slug: CONFIG_SLUG } });
    if (!record || !record.content) return NextResponse.json(DEFAULT_CATS);
    const parsed = JSON.parse(record.content);
    return NextResponse.json(Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_CATS);
  } catch {
    return NextResponse.json(DEFAULT_CATS);
  }
}
