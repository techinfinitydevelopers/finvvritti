"use client";

const logos = [
  "Zedcom Global",
  "KK & Co",
  "VivaLife Pharma",
  "Northbridge",
  "Lumen Capital",
  "Orbit Foods",
  "Helix Realty",
  "Vista Tech",
];

export default function TrustedBy() {
  return (
    <section className="py-14 md:py-16 bg-[var(--color-tertiary)] border-y border-[var(--color-line)]">
      <div className="container-x">
        <p className="text-center text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
          Trusted By
        </p>
        <div className="mt-8 overflow-hidden no-scrollbar">
          <div className="flex gap-10 md:gap-14 animate-[scroll_28s_linear_infinite] whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-xl md:text-2xl text-[var(--color-primary)]/60 hover:text-[var(--color-primary)] transition-colors"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
