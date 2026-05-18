import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const CONFIG_SLUG = "__config__categories";
const DEFAULT_CATS = ["Virtual CFO", "Direct Tax", "Indirect Tax", "Advisory"];

function auth(req: Request) {
  const token = req.headers.get("x-admin-token") || "";
  return token === process.env.ADMIN_PASSWORD;
}

async function readCategories(): Promise<string[]> {
  const record = await prisma.caseStudy.findUnique({ where: { slug: CONFIG_SLUG } });
  if (!record || !record.content) return DEFAULT_CATS;
  try {
    const parsed = JSON.parse(record.content);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_CATS;
  } catch {
    return DEFAULT_CATS;
  }
}

async function writeCategories(cats: string[]) {
  await prisma.caseStudy.upsert({
    where: { slug: CONFIG_SLUG },
    update: { content: JSON.stringify(cats), title: "__categories__", category: "__system__", subtitle: "" },
    create: { slug: CONFIG_SLUG, title: "__categories__", category: "__system__", subtitle: "", content: JSON.stringify(cats) },
  });
}

export async function GET(req: Request) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const cats = await readCategories();
  return NextResponse.json(cats);
}

export async function POST(req: Request) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { name } = await req.json();
  if (!name?.trim()) return NextResponse.json({ error: "Name required" }, { status: 400 });
  const cats = await readCategories();
  const trimmed = name.trim();
  if (cats.includes(trimmed)) return NextResponse.json({ error: "Already exists" }, { status: 409 });
  cats.push(trimmed);
  await writeCategories(cats);
  return NextResponse.json(cats);
}

export async function DELETE(req: Request) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { name } = await req.json();
  const cats = await readCategories();
  const updated = cats.filter((c) => c !== name);
  if (updated.length === cats.length) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await writeCategories(updated);
  return NextResponse.json(updated);
}
