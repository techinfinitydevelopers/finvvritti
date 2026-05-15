import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
      <div className="container-x grid md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-5">
          <Link href="/" className="flex items-center">
            <Image src="/logo-dark.png" alt="Finvvritti" width={233} height={263} className="h-16 w-auto object-contain" />
          </Link>
          <p className="mt-4 text-white/70 max-w-md leading-relaxed">
            Finvvritti provides accurate accounting and trusted financial
            advisory services for growing businesses.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href="https://www.instagram.com/finvvritti?igsh=MTVmOXRkMmptd29rcw==" target="_blank" rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-white/10 hover:bg-[var(--color-secondary)] flex items-center justify-center transition-colors" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/finvvritti-advisors/" target="_blank" rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-white/10 hover:bg-[var(--color-secondary)] flex items-center justify-center transition-colors" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@FinvvrittiAdvisors" target="_blank" rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-white/10 hover:bg-[var(--color-secondary)] flex items-center justify-center transition-colors" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>
          </div>
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
              <span>Office No 504, D Wing, 5th Floor, Shreepati Jewels, Khattar Galli, Charni Road, Mumbai, Maharashtra 400004</span>
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
