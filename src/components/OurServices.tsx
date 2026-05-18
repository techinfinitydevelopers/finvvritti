"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Building2, BookOpen, BarChart3, Scale, Users, Calculator, Globe2, ShieldCheck, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Building2,   label: "Company Incorporation",        slug: "business-incorporation-services",          category: "Corporate Finance" },
  { icon: BookOpen,    label: "Accounting & Bookkeeping",      slug: "accounting-bookkeeping-services",          category: "Corporate Finance" },
  { icon: BarChart3,   label: "Virtual CFO Services",          slug: "virtual-cfo-services",                     category: "Specialized" },
  { icon: Scale,       label: "Business Valuation",            slug: "business-valuation-services-in-india",     category: "Specialized" },
  { icon: Users,       label: "Startup Registration",          slug: "startup-registration",                     category: "Business Setup" },
  { icon: ShieldCheck, label: "Compliance Management",         slug: "compliance-management-services",           category: "Corporate Finance" },
  { icon: Calculator,  label: "Direct Tax Services",           slug: "direct-tax-services",                      category: "Business Advisory" },
  { icon: Globe2,      label: "Company Incorporation — USA",   slug: "incorporation-services-in-the-usa",        category: "International" },
];

export default function OurServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ourservices-header", {
        immediateRender: false, opacity: 0, y: 24, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".ourservices-header", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".ourservices-card", {
        immediateRender: false, opacity: 0, y: 22, duration: 0.45, stagger: 0.07, ease: "power3.out",
        scrollTrigger: { trigger: ".ourservices-grid", start: "top 85%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[var(--color-tertiary)]">
      <div className="container-x">

        {/* Header */}
        <div className="ourservices-header max-w-3xl mb-12">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            What We Offer
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            Our{" "}
            <span className="italic text-[var(--color-secondary-dark)]">Services</span>
          </h2>
          <p className="mt-4 text-[var(--color-ink)]/70 text-base md:text-lg max-w-2xl">
            End-to-end financial, compliance, and advisory solutions — all under one roof.
          </p>
        </div>

        {/* Grid — 4 cols desktop, 2 mobile */}
        <div className="ourservices-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {services.map(({ icon: Icon, label, slug, category }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="ourservices-card group bg-white rounded-2xl border border-[var(--color-line)] p-5 md:p-6 flex flex-col gap-4 hover:shadow-elev-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="h-11 w-11 rounded-xl gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon size={20} className="text-[var(--color-primary)]" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[var(--color-secondary-dark)] mb-1">{category}</p>
                <h3 className="font-display text-base md:text-lg text-[var(--color-primary)] leading-snug">{label}</h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)]/60 group-hover:text-[var(--color-primary)] transition-colors">
                Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <Link
            href="/all-services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
