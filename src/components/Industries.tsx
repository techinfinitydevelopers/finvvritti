"use client";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Radio,
  Cpu,
  Building2,
  UtensilsCrossed,
  Film,
} from "lucide-react";

const items = [
  { Icon: Stethoscope, name: "Healthcare" },
  { Icon: Radio, name: "Communications" },
  { Icon: Cpu, name: "Infotech" },
  { Icon: Building2, name: "Real Estate" },
  { Icon: UtensilsCrossed, name: "Food & Beverages" },
  { Icon: Film, name: "Entertainment" },
];

export default function Industries() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            Industries We Serve
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            Working with Businesses That{" "}
            <span className="italic text-[var(--color-secondary-dark)]">
              Value Accuracy
            </span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-[var(--color-line)] bg-[var(--color-tertiary)] p-5 md:p-6 hover:border-[var(--color-secondary)]/60 hover:bg-white hover:shadow-elev transition-all"
            >
              <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                <it.Icon size={20} className="text-[var(--color-secondary)]" />
              </div>
              <p className="mt-4 font-semibold text-[var(--color-primary)]">
                {it.name}
              </p>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
                Industry-aligned advisory
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
