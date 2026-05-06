import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
      <div className="container-x grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg gradient-gold flex items-center justify-center">
              <span className="font-display text-[var(--color-primary)] text-xl font-bold">
                F
              </span>
            </div>
            <span className="font-display text-2xl font-semibold">
              Finvvritti
            </span>
          </Link>
          <p className="mt-4 text-white/70 max-w-md leading-relaxed">
            Finvvritti provides accurate accounting and trusted financial
            advisory services for growing businesses.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "About Us", href: "#about" },
              { label: "Case Studies", href: "#case-studies" },
              { label: "FAQs", href: "#faqs" },
              { label: "Contact Us", href: "#contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/75 hover:text-[var(--color-secondary)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 text-[var(--color-secondary)] shrink-0" />
              <a href="tel:+17078920749" className="hover:text-white">
                +1 (707) 892-0749
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 text-[var(--color-secondary)] shrink-0" />
              <a href="mailto:info@finvvritti.com" className="hover:text-white">
                info@finvvritti.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 text-[var(--color-secondary)] shrink-0" />
              <span>120 Financial Park, Suite 405, New York, NY 10005, USA</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
        <p>© {year} FINVVRITTI. All rights reserved.</p>
        <p>Built with care for clarity in finance.</p>
      </div>
    </footer>
  );
}
