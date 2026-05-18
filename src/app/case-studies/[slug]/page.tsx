import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import { caseStudies, getCaseStudyMeta } from "@/lib/case-studies";
import { getCaseStudyContent } from "@/lib/case-study-content";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

async function getDynamicStudy(slug: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://finvvritti.com";
    const res = await fetch(`${baseUrl}/api/case-studies/${slug}`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    console.error("[getDynamicStudy]", e);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getCaseStudyMeta(slug) ?? await getDynamicStudy(slug);
  if (!m) return { title: "Case Study | Finvvritti" };
  return { title: `${m.title} | Finvvritti`, description: m.subtitle };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Static case study
  const staticMeta = getCaseStudyMeta(slug);
  const staticContent = getCaseStudyContent(slug);
  if (staticMeta && staticContent) {
    return (
      <>
        <Navbar />
        <main>
          <PageHero
            eyebrow={staticMeta.category}
            title={staticContent.title}
            description={staticMeta.subtitle}
            image={staticMeta.image}
            imageAlt={staticContent.title}
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
              { label: staticMeta.title.length > 36 ? staticMeta.title.slice(0, 36) + "…" : staticMeta.title },
            ]}
          />
          <CaseStudyDetail content={staticContent} />
          <CaseStudyCTA />
          <ContactSection />
        </main>
        <Footer />
      </>
    );
  }

  // Dynamic case study from Blob
  const dynamic = await getDynamicStudy(slug);
  if (!dynamic) notFound();

  const shortTitle = dynamic.title?.length > 36 ? dynamic.title.slice(0, 36) + "…" : dynamic.title;
  const FALLBACK_IMG = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80";
  const heroImage = dynamic.image && dynamic.image.startsWith("http") ? dynamic.image : FALLBACK_IMG;

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow={dynamic.category || "Case Study"}
          title={dynamic.title || "Case Study"}
          description={dynamic.subtitle || ""}
          image={heroImage}
          imageAlt={dynamic.title || "Case Study"}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
            { label: shortTitle },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-x max-w-4xl">
            {dynamic.content ? (
              <div className="text-[var(--color-ink)]/80 leading-relaxed whitespace-pre-line text-base md:text-lg space-y-4">
                {dynamic.content}
              </div>
            ) : (
              <p className="text-center text-[var(--color-muted)] py-12">Content coming soon.</p>
            )}
          </div>
        </section>

        <CaseStudyCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function CaseStudyCTA() {
  return (
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
                Reach out today for expert advice tailored to your financial needs. Your first consultation is free.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <a href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-secondary-light)] transition-colors">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
