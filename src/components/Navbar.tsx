"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/85 shadow-[0_1px_0_0_rgba(10,37,64,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg gradient-primary flex items-center justify-center">
            <span className="font-display text-[var(--color-secondary)] text-lg font-bold">
              F
            </span>
          </div>
          <span className="font-display text-xl md:text-2xl font-semibold text-[var(--color-primary)] tracking-tight">
            Finvvritti
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--color-ink)]/80 hover:text-[var(--color-primary)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+17078920749"
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]"
          >
            <Phone size={15} className="text-[var(--color-secondary)]" />
            +1 (707) 892-0749
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
          >
            Book Consultation
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="lg:hidden p-2 rounded-md text-[var(--color-primary)]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--color-line)]">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base py-2 font-medium text-[var(--color-ink)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+17078920749"
              className="text-sm py-2 font-medium text-[var(--color-primary)] flex items-center gap-2"
            >
              <Phone size={15} /> +1 (707) 892-0749
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-3 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
