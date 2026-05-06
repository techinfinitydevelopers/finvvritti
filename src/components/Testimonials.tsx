"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  {
    quote: "Enjoyed working with Finvvritti, great learning experience!",
    name: "Kamal K. Advani",
    role: "CEO, KK & Co",
  },
  {
    quote: "Exceptional service, great value & surprising insights.",
    name: "Rajat Mehta",
    role: "Zedcom Global",
  },
  {
    quote: "Service-oriented, responsive, terrific value to add!",
    name: "A. Raghuvanshi",
    role: "CEO, VivaLife Pharma",
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

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl bg-white border border-[var(--color-line)] p-6 md:p-7 hover:shadow-elev transition-all"
            >
              <Quote
                size={28}
                className="text-[var(--color-secondary)]/70"
              />
              <blockquote className="mt-4 text-[var(--color-ink)] text-base md:text-lg leading-relaxed">
                “{t.quote}”
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-[var(--color-secondary-dark)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <figcaption className="mt-4 pt-4 border-t border-[var(--color-line)]">
                <p className="font-semibold text-[var(--color-primary)]">
                  {t.name}
                </p>
                <p className="text-xs text-[var(--color-muted)]">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
