import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import CaseStudy from "@/components/CaseStudy";
import YoutubeShorts from "@/components/YoutubeShorts";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Case Studies | Finvvritti | How We Help Businesses Thrive",
  description:
    "Real stories of clarity, control and growth - see how Finvvritti partners with families, founders and SMEs across financial decisions.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Case Studies"
          title="How We Help"
          highlight="Businesses Thrive"
          description="Real stories of clarity, control and growth - see how Finvvritti partners with families, founders, and SMEs across critical financial decisions."
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Finvvritti analytical financial dashboard for case studies"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Case Studies" },
          ]}
        />

        <CaseStudiesGrid />

        {/* Case study for a global technology company struggling with internal finance management. */}
        <section className="py-12 bg-white">
          <div className="container-x">
            <p className="text-center text-sm md:text-base text-[var(--color-muted)] italic">
              Case study for a global technology company struggling with
              internal finance management.
            </p>
          </div>
        </section>

        <CaseStudy />

        <YoutubeShorts />

        <Testimonials />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-x">
            <div className="rounded-3xl gradient-primary p-8 md:p-14 text-center text-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--color-secondary)]/25 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[var(--color-secondary)]/15 blur-3xl" />
              <div className="relative max-w-3xl mx-auto">
                <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
                  Get In Touch
                </span>
                <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Take the Next Step Toward{" "}
                  <span className="text-gradient-gold">Financial Clarity</span>
                </h2>
                <p className="mt-5 text-white/85 text-base md:text-lg">
                  Partner with Finvvritti to improve accounting, compliance, and
                  financial decision-making for your business.
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-secondary-light)] transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
