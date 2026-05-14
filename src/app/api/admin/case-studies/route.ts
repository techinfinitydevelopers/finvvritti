import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "finvvritti@admin";

function auth(req: Request) {
  return req.headers.get("x-admin-token") === ADMIN_PASSWORD;
}

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const studies = await prisma.caseStudy.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(studies);
}

export async function POST(req: Request) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { title, subtitle, category, image, slug, content } = await req.json();
  if (!title || !slug || !category)
    return NextResponse.json({ error: "title, slug and category are required" }, { status: 400 });

  const existing = await prisma.caseStudy.findUnique({ where: { slug } });
  if (existing) return NextResponse.json({ error: "Slug already exists" }, { status: 400 });

  const study = await prisma.caseStudy.create({
    data: { slug, title, subtitle: subtitle || "", category, image: image || "", content: content || "" },
  });
  return NextResponse.json({ ok: true, study });
}

export async function PUT(req: Request) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { slug, ...updates } = await req.json();
  const study = await prisma.caseStudy.update({ where: { slug }, data: updates });
  return NextResponse.json({ ok: true, study });
}

export async function DELETE(req: Request) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { slug } = await req.json();
  await prisma.caseStudy.delete({ where: { slug } });
  return NextResponse.json({ ok: true });
}
