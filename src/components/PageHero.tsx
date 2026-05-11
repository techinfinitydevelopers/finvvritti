"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".page-hero-crumb", { opacity: 0, y: 8, duration: 0.4 })
        .from(".page-hero-badge", { opacity: 0, y: 12, duration: 0.5 }, "-=0.2")
        .from(".page-hero-title", { opacity: 0, y: 16, duration: 0.6 }, "-=0.35")
        .from(".page-hero-desc", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
        .from(".page-hero-image", { opacity: 0, scale: 0.96, duration: 0.7 }, "-=0.5");
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-primary" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/25 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-[360px] w-[360px] rounded-full bg-[var(--color-secondary)]/15 blur-3xl" />

      <div className="container-x">
        {crumbs.length > 0 && (
          <nav
            className="page-hero-crumb flex items-center gap-1.5 text-xs md:text-sm text-white/70"
            aria-label="Breadcrumb"
          >
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight size={14} className="opacity-60" />
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid lg:grid-cols-12 gap-10 items-center mt-6">
          <div className="lg:col-span-7 text-white">
            <span className="page-hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs md:text-sm tracking-[0.2em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
              {eyebrow}
            </span>

            <h1 className="page-hero-title font-display mt-5 text-[26px] sm:text-[38px] lg:text-[50px] xl:text-[62px] leading-[1.05] tracking-tight">
              {title}
              {highlight && (
                <>
                  {" "}
                  <span className="text-gradient-gold">{highlight}</span>
                </>
              )}
            </h1>

            {description && (
              <p className="page-hero-desc mt-5 text-base md:text-lg text-white/80 max-w-xl">
                {description}
              </p>
            )}
          </div>

          <div className="page-hero-image lg:col-span-5">
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-elev-lg ring-1 ring-white/10">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
