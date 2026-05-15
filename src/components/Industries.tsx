"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Stethoscope, Cpu, Building2, UtensilsCrossed, Hammer, Scissors } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { Icon: Cpu, name: "Infotech", blurb: "SaaS, IT services, influencers & startups", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" },
  { Icon: Hammer, name: "Metals & Minerals", blurb: "Steel, mining & commodity trading", img: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?auto=format&fit=crop&w=900&q=80" },
  { Icon: UtensilsCrossed, name: "Food & Beverages", blurb: "Restaurants, FMCG & cloud kitchens", img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80" },
  { Icon: Building2, name: "Real Estate", blurb: "Developers, architects & brokers", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80" },
  { Icon: Scissors, name: "Textile", blurb: "Garments, fabrics & fashion retail", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80" },
  { Icon: Stethoscope, name: "Healthcare", blurb: "Hospitals, clinics & life sciences", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80" },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".industries-header", {
        immediateRender: false, opacity: 0, y: 22, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".industries-header", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".industry-card", {
        immediateRender: false, opacity: 0, y: 28, duration: 0.55, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".industries-grid", start: "top 85%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="industries-header max-w-3xl">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            Industries We Serve
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            Working with Businesses That{" "}
            <span className="italic text-[var(--color-secondary-dark)]">Value Accuracy</span>
          </h2>
        </div>

        <div className="industries-grid mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((it) => (
            <div
              key={it.name}
              className="industry-card group relative rounded-2xl overflow-hidden border border-[var(--color-line)] bg-[var(--color-tertiary)] hover:shadow-elev-lg hover:-translate-y-1 transition-all duration-300"
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
                <h3 className="font-display text-xl md:text-2xl text-[var(--color-primary)]">{it.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{it.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
