"use client";
import Image from "next/image";
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
  {
    Icon: Stethoscope,
    name: "Healthcare",
    blurb: "Hospitals, clinics & life sciences",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    Icon: Radio,
    name: "Communications",
    blurb: "Media, telecom & broadcasting",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
  },
  {
    Icon: Cpu,
    name: "Infotech",
    blurb: "SaaS, IT services & startups",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    Icon: Building2,
    name: "Real Estate",
    blurb: "Developers, REITs & brokers",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    Icon: UtensilsCrossed,
    name: "Food & Beverages",
    blurb: "Restaurants, FMCG & cloud kitchens",
    img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80",
  },
  {
    Icon: Film,
    name: "Entertainment",
    blurb: "Production, OTT & live events",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
  },
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

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden border border-[var(--color-line)] bg-[var(--color-tertiary)] hover:shadow-elev-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={it.img}
                  alt={`${it.name} industry`}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-[var(--color-primary)]/15 to-transparent" />
                <div className="absolute top-4 left-4 h-11 w-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-elev">
                  <it.Icon size={20} className="text-[var(--color-primary)]" />
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-xl md:text-2xl text-[var(--color-primary)]">
                  {it.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {it.blurb}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
