"use client";
import Image from "next/image";

type LogoEntry = { src: string; alt: string; text?: never } | { src?: never; alt: string; text: string };

const logos: LogoEntry[] = [
  { src: "/logos/logo1.png", alt: "Client Logo 1" },
  { src: "/logos/logo2.png", alt: "Client Logo 2" },
  { src: "/logos/logo3.png", alt: "Client Logo 3" },
  { src: "/logos/logo4.png", alt: "Client Logo 4" },
  { src: "/logos/logo5.png", alt: "Client Logo 5" },
  { src: "/logos/logo6.png", alt: "Client Logo 6" },
  { src: "/logos/logo7.png", alt: "Client Logo 7" },
  { src: "/logos/logo8.png", alt: "Client Logo 8" },
  { src: "/logos/logo12.jpg", alt: "India BBQ" },
  { src: "/logos/logo13.jpg", alt: "Theona" },
  { src: "/logos/logo14.jpg", alt: "Blacksphere" },
  { alt: "GFXBandits IT Solutions", text: "GFXBandits" },
  { alt: "Stancor Alloys Private Limited", text: "Stancor Alloys" },
  { alt: "LLM Foods", text: "LLM Foods" },
];

export default function TrustedBy() {
  const track = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <section className="py-14 md:py-16 bg-[var(--color-tertiary)] border-y border-[var(--color-line)] overflow-hidden">
      <div className="container-x">
        <p className="text-center text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase mb-8">
          Trusted By
        </p>
      </div>

      {/* Full-width marquee — no container-x so it bleeds edge to edge */}
      <div className="overflow-hidden w-full">
        <div
          className="flex items-center gap-8 md:gap-14 animate-[logoScroll_30s_linear_infinite] w-max"
          style={{ willChange: "transform" }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center w-[110px] h-[48px] md:w-[160px] md:h-[64px]"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  className="object-contain w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              ) : (
                <span className="px-3 py-2 rounded-lg border border-[var(--color-line)] bg-white text-[var(--color-primary)] text-xs md:text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {logo.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logoScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
