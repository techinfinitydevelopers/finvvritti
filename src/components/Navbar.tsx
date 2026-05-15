"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";

const otherLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

type MenuItem = { label: string; slug: string | null }; // null = page not yet created
type MenuGroup = { title: string; color: string; items: MenuItem[] };

const megaGroups: MenuGroup[] = [
  {
    title: "Corporate Finance Services",
    color: "#0A2540",
    items: [
      { label: "Company Incorporation", slug: "business-incorporation-services" },
      { label: "Accounting & Bookkeeping", slug: "accounting-bookkeeping-services" },
      { label: "Compliance Management Services", slug: "compliance-management-services" },
      { label: "Company Secretarial Services", slug: "company-secretary-services" },
      { label: "Online Registration Services", slug: "online-registration-services" },
      { label: "Trademark Registration", slug: "trademark-registration" },
    ],
  },
  {
    title: "International Services",
    color: "#0369A1",
    items: [
      { label: "Company Incorporation in USA", slug: "incorporation-services-in-the-usa" },
      { label: "Company Incorporation in Dubai", slug: "business-setup-dubai" },
      { label: "Company Incorporation in Singapore", slug: "company-incorporation-singapore" },
      { label: "Financial Audits in the USA", slug: "professional-financial-audit-services-in-the-usa" },
      { label: "Foreign Compliance & Ongoing Reporting", slug: "foreign-compliance-reporting" },
    ],
  },
  {
    title: "Specialized Services",
    color: "#B45309",
    items: [
      { label: "Virtual CFO Services", slug: "virtual-cfo-services" },
      { label: "Debt Raise", slug: "debt-raise" },
      { label: "Debt Restructuring Advisory", slug: "debt-restructuring-advisory" },
      { label: "SME IPO Advisory", slug: "what-is-sme-ipo" },
      { label: "Business Valuation", slug: "business-valuation-services-in-india" },
      { label: "Transaction Advisory", slug: "transaction-advisory" },
    ],
  },
  {
    title: "Business Setup Services",
    color: "#1E6B4F",
    items: [
      { label: "Entry India Strategies", slug: "entry-india-strategies" },
      { label: "Business Incorporation", slug: "business-incorporation-services" },
      { label: "Regulatory Registrations", slug: "regulatory-registration" },
      { label: "Startup Registration", slug: "startup-registration" },
      { label: "LLP Registration Services", slug: "llp-registration-services" },
    ],
  },
  {
    title: "Business Advisory Services",
    color: "#7C3AED",
    items: [
      { label: "Direct Tax Services", slug: "direct-tax-services" },
      { label: "Indirect Tax Services", slug: "indirect-tax-services" },
      { label: "ESOP Advisory", slug: "esop" },
      { label: "Internal Audit", slug: "internal-audit" },
      { label: "Business Plan", slug: "business-plan" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = !scrolled;

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/90 shadow-[0_1px_0_0_rgba(10,37,64,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="bg-white rounded-xl px-3 py-1.5">
            <Image
              src="/logo-dark.png"
              alt="Finvvritti"
              width={233}
              height={263}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Home */}
          <a href="/" className={`text-sm font-medium transition-colors ${onHero ? "text-white/85 hover:text-[var(--color-secondary)]" : "text-[var(--color-ink)]/80 hover:text-[var(--color-primary)]"}`}>
            Home
          </a>

          {/* Services mega menu trigger */}
          <div
            ref={megaRef}
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                onHero ? "text-white/85 hover:text-[var(--color-secondary)]" : "text-[var(--color-ink)]/80 hover:text-[var(--color-primary)]"
              }`}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Other links */}
          {otherLinks.slice(1).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${onHero ? "text-white/85 hover:text-[var(--color-secondary)]" : "text-[var(--color-ink)]/80 hover:text-[var(--color-primary)]"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+918080386506" className={`flex items-center gap-2 text-sm font-medium transition-colors ${onHero ? "text-white/90" : "text-[var(--color-primary)]"}`}>
            <Phone size={15} className="text-[var(--color-secondary)]" />
            +91 80803 86506
          </a>
          <a href="/contact" className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${onHero ? "bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary-light)]" : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]"}`}>
            Book Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          className={`lg:hidden p-2 rounded-md transition-colors ${onHero ? "text-white" : "text-[var(--color-primary)]"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Full-width mega menu panel */}
      {megaOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-white shadow-[0_20px_60px_rgba(10,37,64,0.14)] border-t border-[var(--color-line)]"
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
        >
          <div className="container-x py-8">
            <div className="grid grid-cols-5 gap-6">
              {megaGroups.map((group) => (
                <div key={group.title}>
                  <p
                    className="text-[10px] font-bold tracking-[0.16em] uppercase mb-3 pb-2 border-b border-[var(--color-line)] leading-snug"
                    style={{ color: group.color }}
                  >
                    {group.title}
                  </p>
                  <ul className="flex flex-col gap-0.5">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        {item.slug ? (
                          <Link
                            href={`/services/${item.slug}`}
                            onClick={() => setMegaOpen(false)}
                            className="group flex items-start gap-2 rounded-lg px-2 py-1.5 hover:bg-[var(--color-tertiary)] transition-colors"
                          >
                            <span className="text-[12.5px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-primary)] leading-snug">
                              {item.label}
                            </span>
                          </Link>
                        ) : (
                          <span className="flex items-start gap-2 rounded-lg px-2 py-1.5 opacity-40 cursor-not-allowed">
                            <span className="text-[12.5px] font-medium text-[var(--color-ink)] leading-snug">
                              {item.label}
                            </span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer strip */}
            <div className="mt-6 pt-4 border-t border-[var(--color-line)] flex items-center justify-between">
              <p className="text-xs text-[var(--color-muted)]">26 services across 5 practice areas</p>
              <Link
                href="/services"
                onClick={() => setMegaOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary-dark)] transition-colors"
              >
                View All Services <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Scroll progress */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
          <div className="h-full gradient-gold transition-none" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--color-line)] max-h-[80vh] overflow-y-auto">
          <div className="container-x py-4 flex flex-col gap-1">
            <a href="/" onClick={() => setOpen(false)} className="text-base py-2.5 font-medium text-[var(--color-ink)] border-b border-[var(--color-line)]">
              Home
            </a>

            {/* Mobile services accordion */}
            <div className="border-b border-[var(--color-line)]">
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="w-full flex items-center justify-between py-2.5 text-base font-medium text-[var(--color-ink)]"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pb-3 space-y-4">
                  {megaGroups.map((group) => (
                    <div key={group.title}>
                      <p className="text-[10px] font-bold tracking-[0.16em] uppercase px-1 mb-1.5" style={{ color: group.color }}>
                        {group.title}
                      </p>
                      {group.items.map((item) =>
                        item.slug ? (
                          <Link
                            key={item.label}
                            href={`/services/${item.slug}`}
                            onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                            className="flex items-center gap-2.5 py-2 px-2 rounded-lg hover:bg-[var(--color-tertiary)]"
                          >
                            <span className="text-sm text-[var(--color-ink)]">{item.label}</span>
                          </Link>
                        ) : (
                          <span key={item.label} className="flex items-center gap-2.5 py-2 px-2 opacity-40">
                            <span className="text-sm text-[var(--color-ink)]">{item.label}</span>
                          </span>
                        )
                      )}
                    </div>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-1.5 px-2 text-sm font-semibold text-[var(--color-primary)]"
                  >
                    View All Services <ArrowRight size={13} />
                  </Link>
                </div>
              )}
            </div>

            {otherLinks.slice(1).map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base py-2.5 font-medium text-[var(--color-ink)] border-b border-[var(--color-line)]">
                {l.label}
              </a>
            ))}

            <a href="tel:+918080386506" className="text-sm py-2 font-medium text-[var(--color-primary)] flex items-center gap-2">
              <Phone size={15} /> +91 80803 86506
            </a>
            <a href="/contact" onClick={() => setOpen(false)} className="mt-2 text-center px-4 py-3 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold">
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
