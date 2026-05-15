"use client";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Sparkles, ArrowRight, ChevronDown, Shield, Infinity, RefreshCw, PiggyBank, BadgeCheck, TrendingUp, Globe, Briefcase, Receipt, Percent, Search, Banknote, Network } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ServiceContent } from "@/lib/service-content";

gsap.registerPlugin(ScrollTrigger);

/* ── FAQ Accordion Item ── */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (open) {
      gsap.fromTo(el,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.25, ease: "power2.in" });
    }
  }, [open]);

  return (
    <div
      className={`sd-faq-item rounded-2xl border transition-colors duration-200 overflow-hidden ${
        open ? "border-[var(--color-primary)]/30 bg-[var(--color-primary)]/[0.03]" : "border-[var(--color-line)] bg-white"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[var(--color-primary)] text-sm md:text-base leading-snug">
          {index + 1}. {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[var(--color-secondary-dark)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div ref={bodyRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
        <p className="px-5 md:px-6 pb-5 text-sm md:text-[15px] text-[var(--color-ink)]/75 leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function ServiceDetail({
  content,
  serviceTitle,
}: {
  content: ServiceContent;
  serviceTitle: string;
}) {
  const { overview, benefits, benefitHeading, sections, bullets, documents, faqs } = content;
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Scroll to top on mount */
    window.scrollTo({ top: 0, behavior: "instant" });

    const ctx = gsap.context(() => {

      /* ── Section 1: Overview ── */
      if (overview.length > 0) {
        gsap.from(".sd-label", {
          immediateRender: false, opacity: 0, y: 10, duration: 0.5, ease: "power3.out",
          scrollTrigger: { trigger: ".sd-overview", start: "top 85%", toggleActions: "play none none none" },
        });
        gsap.from(".sd-heading", {
          immediateRender: false, opacity: 0, y: 18, duration: 0.6, ease: "power3.out", delay: 0.08,
          scrollTrigger: { trigger: ".sd-overview", start: "top 85%", toggleActions: "play none none none" },
        });
        gsap.from(".sd-overview-para", {
          immediateRender: false, opacity: 0, y: 14, duration: 0.55, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: ".sd-overview-right", start: "top 85%", toggleActions: "play none none none" },
        });
        gsap.from(".sd-highlight-card", {
          immediateRender: false, opacity: 0, y: 18, duration: 0.5, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ".sd-highlights", start: "top 88%", toggleActions: "play none none none" },
        });
      }

      /* ── Section 1b: Benefits ── */
      if (benefits && benefits.length > 0) {
        gsap.from(".sd-benefit-card", {
          immediateRender: false, opacity: 0, y: 20, duration: 0.45, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: ".sd-benefits", start: "top 85%", toggleActions: "play none none none" },
        });
      }

      /* ── Section 2: Coverage ── */
      if (sections.length > 0) {
        gsap.from(".sd-coverage-header", {
          immediateRender: false, opacity: 0, y: 22, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".sd-coverage", start: "top 85%", toggleActions: "play none none none" },
        });
        gsap.from(".sd-section-card", {
          immediateRender: false, opacity: 0, y: 22, duration: 0.5, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: ".sd-sections-grid", start: "top 85%", toggleActions: "play none none none" },
        });
      }

      /* ── Section 3: Inclusions ── */
      if (bullets.length > 0) {
        gsap.from(".sd-inclusions-header", {
          immediateRender: false, opacity: 0, y: 22, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".sd-inclusions", start: "top 85%", toggleActions: "play none none none" },
        });
        gsap.from(".sd-bullet", {
          immediateRender: false, opacity: 0, x: -10, duration: 0.4, stagger: 0.04, ease: "power2.out",
          scrollTrigger: { trigger: ".sd-bullets-list", start: "top 85%", toggleActions: "play none none none" },
        });
      }

      /* ── Section 4: FAQs ── */
      if (faqs && faqs.length > 0) {
        gsap.from(".sd-faqs-header", {
          immediateRender: false, opacity: 0, y: 22, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".sd-faqs", start: "top 85%", toggleActions: "play none none none" },
        });
        gsap.from(".sd-faq-item", {
          immediateRender: false, opacity: 0, y: 16, duration: 0.4, stagger: 0.06, ease: "power2.out",
          scrollTrigger: { trigger: ".sd-faqs-list", start: "top 85%", toggleActions: "play none none none" },
        });
      }

    }, wrapRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [overview.length, benefits?.length, sections.length, bullets.length, faqs?.length]);

  /* Icon map for benefits */
  const benefitIconMap: Record<string, React.ReactNode> = {
    "shield":       <Shield size={20} />,
    "infinity":     <Infinity size={20} />,
    "repeat":       <RefreshCw size={20} />,
    "piggy-bank":   <PiggyBank size={20} />,
    "badge-check":  <BadgeCheck size={20} />,
    "trending-up":  <TrendingUp size={20} />,
    "globe":        <Globe size={20} />,
    "briefcase":    <Briefcase size={20} />,
    "receipt":      <Receipt size={20} />,
    "percent":      <Percent size={20} />,
    "search":       <Search size={20} />,
    "banknote":     <Banknote size={20} />,
    "network":      <Network size={20} />,
  };

  /* Derive highlight stats */
  const highlights = [
    { num: sections.length > 0 ? `${sections.length}+` : "5+", label: "Key Areas Covered" },
    { num: "30+", label: "Years Combined Experience" },
    { num: "100%", label: "Compliance Assured" },
  ];

  return (
    <div ref={wrapRef}>

      {/* ─────────────────────────────────────
          SECTION 1, OVERVIEW
      ───────────────────────────────────── */}
      {overview.length > 0 && (
        <section className="sd-overview py-16 md:py-24 bg-white">
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

              {/* Left sticky */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <span className="sd-label text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                  Overview
                </span>
                <h2 className="sd-heading font-display mt-3 text-3xl md:text-4xl xl:text-5xl text-[var(--color-primary)] leading-tight">
                  {serviceTitle}
                </h2>
                <div className="mt-6 h-1 w-12 rounded-full gradient-gold" />
                <a
                  href="/contact"
                  className="mt-8 hidden lg:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
                >
                  Book a Consultation
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* Right: paragraphs */}
              <div className="sd-overview-right lg:col-span-7 space-y-5">
                {overview.map((para, i) => (
                  <p key={i} className="sd-overview-para text-[var(--color-ink)]/80 text-base md:text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
                <a
                  href="/contact"
                  className="mt-2 lg:hidden inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
                >
                  Book a Consultation <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Highlight stat row */}
            <div className="sd-highlights mt-14 grid grid-cols-3 gap-4 border-t border-[var(--color-line)] pt-10">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="sd-highlight-card flex items-center gap-4 rounded-2xl bg-[var(--color-tertiary)] border border-[var(--color-line)] p-5 hover:shadow-elev hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="h-12 min-w-12 px-2 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                    <span className="font-display text-lg font-bold text-[var(--color-primary)] whitespace-nowrap">{h.num}</span>
                  </div>
                  <p className="font-semibold text-[var(--color-primary)] text-sm md:text-base leading-snug">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────
          SECTION 1b, KEY BENEFITS
      ───────────────────────────────────── */}
      {benefits && benefits.length > 0 && (
        <section className="sd-benefits py-14 md:py-20 bg-[var(--color-tertiary)] border-y border-[var(--color-line)]">
          <div className="container-x">
            <p className="text-center text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase mb-8">
              {benefitHeading ?? "Why Incorporate Your Business"}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="sd-benefit-card group rounded-2xl bg-white border border-[var(--color-line)] p-5 hover:shadow-elev hover:-translate-y-1 transition-all duration-200 flex flex-col gap-3"
                >
                  <div
                    className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center text-[var(--color-primary)] group-hover:scale-105 transition-transform"
                  >
                    {benefitIconMap[b.icon] ?? <Sparkles size={18} />}
                  </div>
                  <h4 className="font-display text-[var(--color-primary)] text-base font-semibold leading-snug">
                    {b.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[var(--color-ink)]/70 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────
          SECTION 2, WHAT WE COVER
      ───────────────────────────────────── */}
      {sections.length > 0 && (
        <section className="sd-coverage py-16 md:py-24 bg-[var(--color-primary)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[var(--color-secondary)]/15 blur-3xl" />

          <div className="container-x relative">
            <div className="sd-coverage-header max-w-2xl">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
                What We Cover
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                Key areas of{" "}
                <span className="text-gradient-gold">engagement</span>
              </h2>
              <p className="mt-4 text-white/70 text-base md:text-lg max-w-xl">
                Our structured approach covers every aspect of this service to deliver complete, compliant outcomes.
              </p>
            </div>

            <div className="sd-sections-grid mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {sections.map((s, i) => (
                <div
                  key={s + i}
                  className="sd-section-card group rounded-2xl bg-white/[0.07] border border-white/10 p-5 md:p-6 hover:bg-white/[0.12] transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center group-hover:scale-105 transition-transform mb-4">
                    <Sparkles size={17} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-display text-base md:text-lg text-white leading-snug">{s}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────
          SECTION 3, POST-INCORPORATION CHECKLIST
      ───────────────────────────────────── */}
      {bullets.length > 0 && (
        <section className="sd-inclusions py-16 md:py-24 bg-[var(--color-tertiary)]">
          <div className="container-x">
            <div className="sd-inclusions-header max-w-2xl">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                Post-Incorporation
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl text-[var(--color-primary)] leading-tight">
                What happens{" "}
                <span className="italic text-[var(--color-secondary-dark)]">after incorporation</span>
              </h2>
              <p className="mt-3 text-[var(--color-ink)]/70 text-base">
                Mandatory compliance steps under the Companies Act 2013, Finvvritti walks you through every one.
              </p>
            </div>

            <ul className="sd-bullets-list mt-10 grid md:grid-cols-2 gap-x-6 gap-y-3">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="sd-bullet flex items-start gap-3 rounded-xl bg-white border border-[var(--color-line)] p-4 hover:shadow-elev hover:-translate-y-0.5 transition-all duration-200"
                >
                  <CheckCircle2 size={18} className="mt-0.5 text-[var(--color-secondary-dark)] shrink-0" />
                  <span className="text-sm md:text-[15px] text-[var(--color-ink)]/85 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA strip */}
            <div className="mt-14 rounded-3xl gradient-primary p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
                  Ready to get started?
                </h3>
                <p className="mt-2 text-white/75 text-sm md:text-base">
                  Book a free consultation and we&apos;ll outline a clear plan for your business.
                </p>
              </div>
              <a
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold text-sm hover:bg-[var(--color-secondary-light)] transition-colors"
              >
                Book Free Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────
          SECTION 3b, DOCUMENTS REQUIRED
      ───────────────────────────────────── */}
      {documents && documents.length > 0 && (
        <section className="py-14 md:py-20 bg-white border-t border-[var(--color-line)]">
          <div className="container-x">
            <div className="max-w-2xl mb-8">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                Documents Required
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl text-[var(--color-primary)] leading-tight">
                What you&apos;ll{" "}
                <span className="italic text-[var(--color-secondary-dark)]">need to provide</span>
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {documents.map((doc, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-[var(--color-tertiary)] border border-[var(--color-line)] p-4"
                >
                  <CheckCircle2 size={17} className="mt-0.5 text-[var(--color-secondary-dark)] shrink-0" />
                  <span className="text-sm text-[var(--color-ink)]/85 leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────
          SECTION 4, FAQs
      ───────────────────────────────────── */}
      {faqs && faqs.length > 0 && (
        <section className="sd-faqs py-16 md:py-24 bg-white">
          <div className="container-x">

            {/* Header, full width */}
            <div className="sd-faqs-header max-w-2xl mb-10">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                FAQs
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl text-[var(--color-primary)] leading-tight">
                Frequently asked{" "}
                <span className="italic text-[var(--color-secondary-dark)]">questions</span>
              </h2>
              <p className="mt-3 text-[var(--color-ink)]/70 text-base">
                Everything you need to know before incorporating your business.
              </p>
            </div>

            {/* 2-col: image | accordion */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

              {/* Left, image */}
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,37,64,0.12)] aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                  alt="Business incorporation consultation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right, accordion */}
              <div className="sd-faqs-list space-y-3">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
                ))}
                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
                >
                  Book a Free Consultation <ArrowRight size={15} />
                </a>
              </div>

            </div>
          </div>
        </section>
      )}

    </div>
  );
}
