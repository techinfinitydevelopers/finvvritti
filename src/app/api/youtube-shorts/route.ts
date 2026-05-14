import { NextResponse } from "next/server";

const API_KEY = process.env.YOUTUBE_API_KEY;
const UPLOADS_PLAYLIST_ID = "UU2rQSc83cV69urS91V_KchA";

export const revalidate = 3600; // 1 hour

async function getLatestVideoIds(max = 20): Promise<string[]> {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=${max}&key=${API_KEY}`
  );
  const data = await res.json();
  return (data.items ?? []).map((item: { contentDetails: { videoId: string } }) => item.contentDetails.videoId);
}

async function filterShorts(videoIds: string[]): Promise<string[]> {
  if (!videoIds.length) return [];
  const ids = videoIds.join(",");
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${ids}&key=${API_KEY}`
  );
  const data = await res.json();

  return (data.items ?? [])
    .filter((v: { contentDetails: { duration: string } }) => {
      const d = v.contentDetails.duration;
      const match = d.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
      if (!match) return false;
      const h = parseInt(match[1] ?? "0");
      const m = parseInt(match[2] ?? "0");
      const s = parseInt(match[3] ?? "0");
      return h === 0 && m <= 1 && (m === 0 ? s <= 60 : s === 0);
    })
    .map((v: { id: string }) => v.id)
    .slice(0, 5);
}

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: "YOUTUBE_API_KEY not set" }, { status: 500 });
  }

  try {
    const videoIds = await getLatestVideoIds(20);
    const shorts = await filterShorts(videoIds);
    return NextResponse.json(
      { shorts },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate" } }
    );
  } catch (err) {
    console.error("YouTube API error:", err);
    return NextResponse.json({ error: "Failed to fetch shorts" }, { status: 500 });
  }
}
