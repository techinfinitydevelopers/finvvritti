import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import {
  Building2, BookOpen, ShieldCheck, FileText, Globe2, BarChart3,
  TrendingUp, Landmark, Search, Briefcase, Calculator, Scale,
  Award, Users, FileCheck, DollarSign, Cpu, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "All Services | Finvvritti | CA & CS Advisory",
  description: "Explore all financial, compliance, and advisory services offered by Finvvritti — India's trusted CA & CS firm in Mumbai.",
};

const groups = [
  {
    title: "Corporate Finance Services",
    color: "#0A2540",
    services: [
      { icon: Building2,   label: "Company Incorporation",          slug: "business-incorporation-services" },
      { icon: BookOpen,    label: "Accounting & Bookkeeping",        slug: "accounting-bookkeeping-services" },
      { icon: ShieldCheck, label: "Compliance Management",           slug: "compliance-management-services" },
      { icon: FileText,    label: "Company Secretarial Services",    slug: "company-secretary-services" },
      { icon: Globe2,      label: "Online Registration Services",    slug: "online-registration-services" },
      { icon: Award,       label: "Trademark Registration",          slug: "trademark-registration" },
    ],
  },
  {
    title: "Specialized Services",
    color: "#B45309",
    services: [
      { icon: BarChart3,   label: "Virtual CFO Services",            slug: "virtual-cfo-services" },
      { icon: DollarSign,  label: "Debt Raise",                      slug: "debt-raise" },
      { icon: TrendingUp,  label: "Debt Restructuring Advisory",     slug: "debt-restructuring-advisory" },
      { icon: Landmark,    label: "SME IPO Advisory",                slug: "what-is-sme-ipo" },
      { icon: Scale,       label: "Business Valuation",              slug: "business-valuation-services-in-india" },
      { icon: Search,      label: "Transaction Advisory",            slug: "transaction-advisory" },
    ],
  },
  {
    title: "Business Setup Services",
    color: "#1E6B4F",
    services: [
      { icon: Globe2,      label: "Entry India Strategies",          slug: "entry-india-strategies" },
      { icon: Building2,   label: "Business Incorporation",          slug: "business-incorporation-services" },
      { icon: FileCheck,   label: "Regulatory Registrations",        slug: "regulatory-registration" },
      { icon: Users,       label: "Startup Registration",            slug: "startup-registration" },
      { icon: Briefcase,   label: "LLP Registration Services",       slug: "llp-registration-services" },
    ],
  },
  {
    title: "Business Advisory Services",
    color: "#7C3AED",
    services: [
      { icon: Calculator,  label: "Direct Tax Services",             slug: "direct-tax-services" },
      { icon: FileText,    label: "Indirect Tax Services",           slug: "indirect-tax-services" },
      { icon: Cpu,         label: "ESOP Advisory",                   slug: "esop" },
      { icon: Search,      label: "Internal Audit",                  slug: "internal-audit" },
      { icon: Briefcase,   label: "Business Plan",                   slug: "business-plan" },
    ],
  },
  {
    title: "International Services",
    color: "#0369A1",
    services: [
      { icon: Globe2,      label: "Company Incorporation in USA",       slug: "incorporation-services-in-the-usa" },
      { icon: Globe2,      label: "Company Incorporation in Dubai",     slug: "business-setup-dubai" },
      { icon: Globe2,      label: "Company Incorporation in Singapore", slug: "company-incorporation-singapore" },
      { icon: FileCheck,   label: "Financial Audits in the USA",        slug: "professional-financial-audit-services-in-the-usa" },
      { icon: ShieldCheck, label: "Foreign Compliance & Reporting",     slug: "foreign-compliance-reporting" },
    ],
  },
];

export default function AllServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Services"
          title="Everything You Need,"
          highlight="Under One Roof"
          description="From incorporation to compliance, taxation to CFO advisory — Finvvritti covers every aspect of your financial and corporate requirements."
          image="https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Finvvritti Services"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "All Services" },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-x space-y-16">
            {groups.map((group) => (
              <div key={group.title}>
                {/* Group heading */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-8 rounded-full" style={{ backgroundColor: group.color }} />
                  <h2
                    className="font-display text-xl md:text-2xl font-semibold"
                    style={{ color: group.color }}
                  >
                    {group.title}
                  </h2>
                </div>

                {/* Service cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.services.map(({ icon: Icon, label, slug }) => (
                    <Link
                      key={slug + label}
                      href={`/services/${slug}`}
                      className="group bg-[var(--color-tertiary)] border border-[var(--color-line)] rounded-2xl p-5 flex flex-col gap-4 hover:bg-white hover:shadow-elev-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div
                        className="h-10 w-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: group.color + "18" }}
                      >
                        <Icon size={18} style={{ color: group.color }} />
                      </div>
                      <h3 className="font-display text-[var(--color-primary)] text-base leading-snug flex-1">{label}</h3>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors">
                        Read More <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--color-tertiary)] border-t border-[var(--color-line)]">
          <div className="container-x text-center">
            <h2 className="font-display text-2xl md:text-3xl text-[var(--color-primary)]">
              Not sure which service you need?
            </h2>
            <p className="mt-3 text-[var(--color-ink)]/70 max-w-xl mx-auto">
              Talk to our team and we will guide you to the right solution for your business.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Book Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
