"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  {
    quote: "Enjoyed working with Finvvritti, great learning experience!",
    name: "Kamal K. Advani",
    role: "CEO, KK & Co",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    quote: "Exceptional service, great value & surprising insights.",
    name: "Rajat Mehta",
    role: "Zedcom Global",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
  {
    quote: "Service-oriented, responsive, terrific value to add!",
    name: "A. Raghuvanshi",
    role: "CEO, VivaLife Pharma",
    avatar: "https://i.pravatar.cc/120?img=68",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-tertiary)]">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            Testimonials
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            What Our{" "}
            <span className="italic text-[var(--color-secondary-dark)]">
              Clients Say
            </span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5 md:gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative rounded-2xl bg-white border border-[var(--color-line)] p-6 md:p-7 hover:shadow-elev-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Quote size={28} className="text-[var(--color-secondary)]/70" />
              <blockquote className="mt-4 text-[var(--color-ink)] text-base md:text-lg leading-relaxed">
                “{t.quote}”
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-[var(--color-secondary-dark)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <figcaption className="mt-4 pt-4 border-t border-[var(--color-line)] flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-full overflow-hidden ring-2 ring-[var(--color-secondary)]/40">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-primary)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
