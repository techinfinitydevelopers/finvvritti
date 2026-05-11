import { put } from "@vercel/blob";

const BLOB_KEY = "case-studies-dynamic.json";

// Extract store ID from token — format: vercel_blob_rw_{storeId}_{hash}
function getBlobUrl() {
  const token = process.env.BLOB_READ_WRITE_TOKEN || "";
  const match = token.match(/vercel_blob_rw_([^_]+)_/);
  const storeId = match ? match[1] : "";
  return `https://${storeId}.public.blob.vercel-storage.com/${BLOB_KEY}`;
}

export async function readStudies() {
  try {
    const url = getBlobUrl();
    // Cache-bust to bypass CDN caching after writes
    const res = await fetch(`${url}?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function writeStudies(data: unknown[]) {
  await put(BLOB_KEY, JSON.stringify(data), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}
