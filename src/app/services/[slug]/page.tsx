import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) return { title: "Service — Finvvritti" };
  return {
    title: `${s.title} — Finvvritti`,
    description: s.blurb,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow={service.category}
          title={service.title}
          description={service.blurb}
          image={service.image}
          imageAlt={service.title}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-x max-w-3xl">
            <p className="text-[var(--color-ink)]/80 text-base md:text-lg leading-relaxed">
              Detailed scope, deliverables, and timeline for{" "}
              <strong className="text-[var(--color-primary)]">
                {service.title}
              </strong>{" "}
              are tailored to your business stage and sector. Reach out to our
              team and we will share a clear plan within one business day.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Talk to a Specialist
            </a>
          </div>
        </section>

        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
