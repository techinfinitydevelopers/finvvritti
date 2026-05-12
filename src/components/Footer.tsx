import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
      <div className="container-x grid md:grid-cols-12 gap-8 md:gap-10">
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
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "About Us", href: "/about" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "FAQs", href: "/faq" },
              { label: "Contact Us", href: "/contact" },
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
              <a href="tel:+918080386506" className="hover:text-white">
                +91 80803 86506
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 text-[var(--color-secondary)] shrink-0" />
              <a href="mailto:gagan@finvvritti.com" className="hover:text-white">
                gagan@finvvritti.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 text-[var(--color-secondary)] shrink-0" />
              <span>Office No 504, D Wing, 5th Floor, Shreepati Jewels, Khattar Galli, Mumbai, Maharashtra 400004</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
        <div className="flex items-center gap-4">
          <p>© {year} FINVVRITTI. All rights reserved.</p>
          <a
            href="/privacy-policy"
            className="hover:text-[var(--color-secondary)] transition-colors"
          >
            Privacy Policy
          </a>
        </div>
        <p>
          Designed &amp; Developed by{" "}
          <a
            href="https://techinfinity.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[var(--color-secondary)] transition-colors font-medium"
          >
            TechInfinity
          </a>
        </p>
      </div>
    </footer>
  );
}
