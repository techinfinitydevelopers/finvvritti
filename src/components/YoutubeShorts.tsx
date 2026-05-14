const FALLBACK = ["kk2qOByoPF4","kBmKLANiXdE","1jK1V-BBHag","r80JPBxCyi4","hSTCPDkdZHk"];
const CH = "https://www.youtube.com/@FinvvrittiAdvisors";

function Icon({ size=16 }:{size?:number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  );
}

const API_KEY = process.env.YOUTUBE_API_KEY;
const UPLOADS_PLAYLIST_ID = "UU2rQSc83cV69urS91V_KchA";

async function fetchShorts(): Promise<string[]> {
  try {
    if (!API_KEY) return FALLBACK;

    const listRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=20&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!listRes.ok) return FALLBACK;
    const listData = await listRes.json();
    const videoIds: string[] = (listData.items ?? []).map(
      (item: { contentDetails: { videoId: string } }) => item.contentDetails.videoId
    );
    if (!videoIds.length) return FALLBACK;

    const detailRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds.join(",")}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!detailRes.ok) return FALLBACK;
    const detailData = await detailRes.json();

    const shorts = (detailData.items ?? [])
      .filter((v: { contentDetails: { duration: string } }) => {
        const d = v.contentDetails.duration;
        const match = d.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
        if (!match) return false;
        const h = parseInt(match[1] ?? "0");
        const m = parseInt(match[2] ?? "0");
        return h === 0 && m <= 1;
      })
      .map((v: { id: string }) => v.id)
      .slice(0, 5);

    return shorts.length ? shorts : FALLBACK;
  } catch { return FALLBACK; }
}

export default async function YoutubeShorts() {
  const shorts = await fetchShorts();
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">Latest Shorts</span>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
              Finance Tips &{" "}<span className="italic text-[var(--color-secondary-dark)]">Insights</span>
            </h2>
          </div>
          <a href={CH} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition-colors shrink-0">
            <Icon size={16} /> View All on YouTube
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {shorts.map((id) => (
            <a key={id} href={`https://www.youtube.com/shorts/${id}`} target="_blank" rel="noopener noreferrer"
              className="group relative w-full rounded-2xl overflow-hidden bg-black border border-[var(--color-line)] block"
              style={{ aspectRatio: "9/16" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="YouTube Short"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                </div>
              </div>
              <div className="absolute top-2 left-2 bg-[var(--color-secondary)] text-[var(--color-primary)] text-[10px] font-bold px-2 py-0.5 rounded-full">Shorts</div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href={CH} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] text-sm font-semibold hover:bg-[var(--color-secondary-light)] transition-colors">
            <Icon size={18} /> Subscribe to Our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}
