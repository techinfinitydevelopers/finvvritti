import { NextResponse } from "next/server";
import { readStudies } from "@/lib/blob-studies";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await readStudies();
  return NextResponse.json(data);
}
