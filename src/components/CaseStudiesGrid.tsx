"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, type CaseStudyMeta } from "@/lib/case-studies";

const FILTERS = ["All", "Virtual CFO", "Direct Tax", "Indirect Tax", "Advisory"];

export default function CaseStudiesGrid() {
  const [active, setActive] = useState("All");
  const [dynamic, setDynamic] = useState<CaseStudyMeta[]>([]);

  useEffect(() => {
    fetch("/api/case-studies")
      .then((r) => r.json())
      .then((data: CaseStudyMeta[]) => {
        // newest first, no duplicates
        const staticSlugs = new Set(caseStudies.map((c) => c.slug));
        const newOnes = [...data]
          .filter((d) => !staticSlugs.has(d.slug))
          .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
        setDynamic(newOnes);
      })
      .catch(() => {});
  }, []);

  // Dynamic (newest) first, then static
  const all = [...dynamic, ...caseStudies];
  const filtered = active === "All" ? all : all.filter((c) => c.category === active);

  return (
    <section className="py-16 md:py-24 bg-[var(--color-tertiary)]">
      <div className="container-x">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border transition-colors ${
                active === f
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                  : "bg-white text-[var(--color-primary)] border-[var(--color-line)] hover:border-[var(--color-primary)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-[var(--color-muted)] py-20">No case studies in this category yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {filtered.map((c) => (
              <div key={c.slug}>
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="group block h-full rounded-3xl overflow-hidden border border-[var(--color-line)] bg-white hover:shadow-elev-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-tertiary)]">
                    {c.image ? (
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        sizes="(max-width: 768px) 90vw, 45vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 gradient-primary" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/65 via-[var(--color-primary)]/15 to-transparent" />
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                      {c.category}
                    </span>
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="font-display text-xl md:text-2xl text-[var(--color-primary)] leading-snug">{c.title}</h3>
                    <p className="mt-3 text-sm md:text-[15px] text-[var(--color-ink)]/75 leading-relaxed">{c.subtitle}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                      Read case study
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
