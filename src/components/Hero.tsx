"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, TrendingUp, FileCheck2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const blobTopRef = useRef<HTMLDivElement>(null);
  const blobBotRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(badgeRef.current, { opacity: 0, y: 12, duration: 0.5 })
        .from(headingRef.current, { opacity: 0, y: 18, duration: 0.6 }, "-=0.3")
        .from(paraRef.current, { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
        .from(btnsRef.current, { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
        .from(iconsRef.current, { opacity: 0, y: 14, duration: 0.5 }, "-=0.3")
        .from(visualRef.current, { opacity: 0, scale: 0.96, duration: 0.7 }, "-=0.6");

      // Parallax on blobs on scroll
      gsap.to(blobTopRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(blobBotRef.current, {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden w-full"
    >
      <div className="absolute inset-0 -z-10 gradient-primary" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div
        ref={blobTopRef}
        className="absolute -top-40 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/25 blur-3xl"
      />
      <div
        ref={blobBotRef}
        className="absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/15 blur-3xl"
      />

      <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 text-white">
          <span
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs md:text-sm tracking-wide"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
            ACCOUNTING AND TRUSTED FINANCIAL ADVISORY
          </span>

          <h1
            ref={headingRef}
            className="font-display mt-4 text-[26px] sm:text-[38px] lg:text-[50px] xl:text-[50px] leading-[1.05] tracking-tight"
          >
            Your Finance,{" "}
            <span className="text-gradient-gold whitespace-nowrap">Our Responsibility</span>
          </h1>

          <p
            ref={paraRef}
            className="mt-2 text-sm md:text-base text-white/65 max-w-xl"
          >
            India&apos;s leading advisory and Chartered Accountant Firm in Mumbai
          </p>

          <p className="mt-3 text-base md:text-lg text-white/80 max-w-xl">
            One-stop solution for finance, compliance & growth. We combine CA &
            CS expertise across auditing, accounting, taxation, debt advisory,
            CFO services, and valuation.
          </p>

          <div
            ref={btnsRef}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <a
              href="/services"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-secondary-light)] transition-colors text-sm"
            >
              Our Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/25 text-white font-medium hover:bg-white/5 transition-colors text-sm"
            >
              Book Free Consultation
            </a>
          </div>

          <div
            ref={iconsRef}
            className="mt-8 grid grid-cols-3 gap-4 max-w-lg"
          >
            {[
              { Icon: ShieldCheck, label: "Compliance" },
              { Icon: FileCheck2, label: "Accuracy" },
              { Icon: TrendingUp, label: "Growth" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-white/85 text-sm"
              >
                <Icon size={18} className="text-[var(--color-secondary)]" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div ref={visualRef} className="lg:col-span-6 relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(card1Ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.6,
        ease: "power3.out",
      });
      gsap.from(card2Ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.75,
        ease: "power3.out",
      });

      // Subtle floating animation
      gsap.to(card1Ref.current, {
        y: -8,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(card2Ref.current, {
        y: -6,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative mx-auto max-w-xl lg:max-w-none overflow-visible">
      <div className="relative aspect-[16/9] sm:aspect-[5/6] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-elev-lg">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
          alt="Finvvritti CA reviewing financial accounts and tax documents"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/40 via-transparent to-transparent" />
      </div>

      <div
        ref={card1Ref}
        className="absolute -left-3 sm:-left-6 top-6 sm:top-10 w-[220px] sm:w-[260px] rounded-2xl bg-white/95 backdrop-blur shadow-elev-lg p-4 sm:p-5 border border-white/40"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[var(--color-muted)]">
              Q3 Revenue
            </p>
            <p className="font-display text-xl sm:text-2xl text-[var(--color-primary)] mt-0.5">
              ₹ 4.82 Cr
            </p>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)] text-[10px] sm:text-xs font-semibold">
            +18.4%
          </span>
        </div>
        <svg viewBox="0 0 240 60" className="mt-3 w-full h-12">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0A2540" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0A2540" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 45 L30 38 L60 42 L90 28 L120 32 L150 20 L180 24 L210 12 L240 16 L240 60 L0 60 Z"
            fill="url(#g1)"
          />
          <path
            d="M0 45 L30 38 L60 42 L90 28 L120 32 L150 20 L180 24 L210 12 L240 16"
            fill="none"
            stroke="#0A2540"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        ref={card2Ref}
        className="absolute -right-2 sm:-right-4 bottom-6 sm:bottom-10 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur shadow-elev-lg p-3 sm:p-4 border border-white/40"
      >
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl gradient-gold flex items-center justify-center">
          <ShieldCheck size={20} className="text-[var(--color-primary)]" />
        </div>
        <div>
          <p className="text-[10px] sm:text-xs text-[var(--color-muted)]">Compliance</p>
          <p className="text-sm font-semibold text-[var(--color-primary)]">
            100% On-time
          </p>
        </div>
      </div>
    </div>
  );
}
