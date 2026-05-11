import { NextResponse } from "next/server";
import { readStudies, writeStudies } from "@/lib/blob-studies";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "finvvritti@admin";

function auth(req: Request) {
  return req.headers.get("x-admin-token") === ADMIN_PASSWORD;
}

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const studies = await readStudies();
  return NextResponse.json(studies);
}

export async function POST(req: Request) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const { title, subtitle, category, image, slug, content } = body;
  if (!title || !slug || !category)
    return NextResponse.json({ error: "title, slug and category are required" }, { status: 400 });

  const studies = await readStudies();
  if (studies.find((s: { slug: string }) => s.slug === slug))
    return NextResponse.json({ error: "Slug already exists" }, { status: 400 });

  const newStudy = { slug, title, subtitle: subtitle || "", category, image: image || "", content: content || "", createdAt: new Date().toISOString() };
  studies.push(newStudy);
  await writeStudies(studies);
  return NextResponse.json({ ok: true, study: newStudy });
}

export async function PUT(req: Request) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const { slug, ...updates } = body;
  const studies = await readStudies();
  const idx = studies.findIndex((s: { slug: string }) => s.slug === slug);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  studies[idx] = { ...studies[idx], ...updates };
  await writeStudies(studies);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { slug } = await req.json();
  const studies = await readStudies();
  await writeStudies(studies.filter((s: { slug: string }) => s.slug !== slug));
  return NextResponse.json({ ok: true });
}
