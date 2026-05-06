import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import { caseStudies, getCaseStudyMeta } from "@/lib/case-studies";
import { getCaseStudyContent } from "@/lib/case-study-content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getCaseStudyMeta(slug);
  if (!m) return { title: "Case Study — Finvvritti" };
  return { title: `${m.title} — Finvvritti`, description: m.subtitle };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getCaseStudyMeta(slug);
  const content = getCaseStudyContent(slug);
  if (!meta || !content) notFound();

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow={meta.category}
          title={content.title}
          description={meta.subtitle}
          image={meta.image}
          imageAlt={content.title}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
            { label: meta.title.length > 36 ? meta.title.slice(0, 36) + "…" : meta.title },
          ]}
        />

        <CaseStudyDetail content={content} />

        <section className="py-16 md:py-20 bg-white">
          <div className="container-x">
            <div className="rounded-3xl gradient-primary p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--color-secondary)]/25 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[var(--color-secondary)]/15 blur-3xl" />
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
                    Request a call back
                  </span>
                  <h2 className="font-display mt-3 text-3xl md:text-4xl leading-tight">
                    Need Help with Your{" "}
                    <span className="text-gradient-gold">Tax Matters?</span>
                  </h2>
                  <p className="mt-4 text-white/85 text-base md:text-lg max-w-md">
                    Reach out today for expert advice tailored to your financial
                    needs. Your first consultation is free—no obligations.
                  </p>
                </div>
                <div className="lg:justify-self-end">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-secondary-light)] transition-colors"
                  >
                    Schedule a Consultation
                  </a>
                </div>
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
