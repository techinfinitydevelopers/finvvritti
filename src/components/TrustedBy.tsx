"use client";
import Image from "next/image";

const logos = [
  { src: "/logos/logo1.png", alt: "Client Logo 1" },
  { src: "/logos/logo2.png", alt: "Client Logo 2" },
  { src: "/logos/logo3.png", alt: "Client Logo 3" },
  { src: "/logos/logo4.png", alt: "Client Logo 4" },
  { src: "/logos/logo5.png", alt: "Client Logo 5" },
  { src: "/logos/logo6.png", alt: "Client Logo 6" },
  { src: "/logos/logo7.png", alt: "Client Logo 7" },
  { src: "/logos/logo8.png", alt: "Client Logo 8" },
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
          className="flex items-center gap-12 md:gap-16 animate-[logoScroll_30s_linear_infinite] w-max"
          style={{ willChange: "transform" }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: 180, height: 72 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={72}
                className="object-contain w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                style={{ maxWidth: 180, maxHeight: 72 }}
              />
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
