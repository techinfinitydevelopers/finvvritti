"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Building2, BookOpen, ShieldCheck, FileText, Globe2, BarChart3,
  TrendingUp, Landmark, Search, Briefcase, Calculator, Scale,
  Award, Users, ArrowUpRight, Cpu, FileCheck, DollarSign,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Building2,   label: "Company Incorporation",           slug: "business-incorporation-services" },
  { icon: BookOpen,    label: "Accounting & Bookkeeping",         slug: "accounting-bookkeeping-services" },
  { icon: ShieldCheck, label: "Compliance Management",           slug: "compliance-management-services" },
  { icon: FileText,    label: "Company Secretarial Services",     slug: "company-secretary-services" },
  { icon: Globe2,      label: "Online Registration Services",     slug: "online-registration-services" },
  { icon: Award,       label: "Trademark Registration",           slug: "trademark-registration" },
  { icon: BarChart3,   label: "Virtual CFO Services",             slug: "virtual-cfo-services" },
  { icon: DollarSign,  label: "Debt Raise",                       slug: "debt-raise" },
  { icon: TrendingUp,  label: "Debt Restructuring Advisory",      slug: "debt-restructuring-advisory" },
  { icon: Landmark,    label: "SME IPO Advisory",                 slug: "what-is-sme-ipo" },
  { icon: Scale,       label: "Business Valuation",               slug: "business-valuation-services-in-india" },
  { icon: Search,      label: "Transaction Advisory",             slug: "transaction-advisory" },
  { icon: Briefcase,   label: "Entry India Strategies",           slug: "entry-india-strategies" },
  { icon: Users,       label: "Startup Registration",             slug: "startup-registration" },
  { icon: FileCheck,   label: "LLP Registration Services",        slug: "llp-registration-services" },
  { icon: Calculator,  label: "Direct Tax Services",              slug: "direct-tax-services" },
  { icon: FileText,    label: "Indirect Tax Services",            slug: "indirect-tax-services" },
  { icon: Cpu,         label: "ESOP Advisory",                    slug: "esop" },
  { icon: Search,      label: "Internal Audit",                   slug: "internal-audit" },
  { icon: Globe2,      label: "Company Incorporation — USA",      slug: "incorporation-services-in-the-usa" },
  { icon: Globe2,      label: "Company Incorporation — Dubai",    slug: "business-setup-dubai" },
  { icon: Globe2,      label: "Company Incorporation — Singapore",slug: "company-incorporation-singapore" },
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
        immediateRender: false, opacity: 0, y: 22, duration: 0.45, stagger: 0.04, ease: "power3.out",
        scrollTrigger: { trigger: ".ourservices-grid", start: "top 85%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[var(--color-primary)] overflow-hidden">
      <div className="container-x">
        {/* Header */}
        <div className="ourservices-header text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
            What We Offer
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Our{" "}
            <span className="italic text-[var(--color-secondary)]">Services</span>
          </h2>
          <p className="mt-4 text-white/65 text-base md:text-lg max-w-2xl mx-auto">
            End-to-end financial, compliance, and advisory solutions — all under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="ourservices-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {services.map(({ icon: Icon, label, slug }) => (
            <Link
              key={slug + label}
              href={`/services/${slug}`}
              className="ourservices-card group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[var(--color-secondary)]/50 p-5 md:p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="h-10 w-10 rounded-xl bg-[var(--color-secondary)]/15 group-hover:bg-[var(--color-secondary)]/25 flex items-center justify-center transition-colors">
                <Icon size={18} className="text-[var(--color-secondary)]" />
              </div>
              <p className="text-white/90 text-sm font-medium leading-snug flex-1">{label}</p>
              <div className="flex items-center gap-1 text-[var(--color-secondary)]/70 group-hover:text-[var(--color-secondary)] transition-colors">
                <span className="text-xs font-semibold">Read More</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] text-sm font-semibold hover:bg-[var(--color-secondary-light)] transition-colors"
          >
            View All Services <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
