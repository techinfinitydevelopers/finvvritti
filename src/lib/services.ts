import {
  FileText,
  Rocket,
  ShieldCheck,
  Stamp,
  Globe,
  ClipboardCheck,
  BookOpen,
  Building,
  UserCheck,
  FileSearch,
  Building2,
  Flag,
  Users,
  FileBarChart,
  Calculator,
  Handshake,
  TrendingUp,
  ListChecks,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  Icon: LucideIcon;
  image: string;
  category: "Setup" | "Compliance" | "Advisory" | "Global" | "Capital";
};

export const services: Service[] = [
  {
    slug: "llp-registration-services",
    title: "LLP Registration Services",
    blurb:
      "End-to-end LLP setup, name reservation, partner KYC, agreement drafting, and ROC filings.",
    Icon: FileText,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    category: "Setup",
  },
  {
    slug: "startup-registration",
    title: "Startup Registration",
    blurb:
      "DPIIT recognition, incorporation, and unlocking startup-specific tax & funding benefits.",
    Icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    category: "Setup",
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration",
    blurb:
      "Trademark search, classification, filing, prosecution, and enforcement support.",
    Icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    category: "Compliance",
  },
  {
    slug: "regulatory-registration",
    title: "Regulatory Registration",
    blurb:
      "FSSAI, IEC, MSME, ISO, GST, Shop & Establishment, all your registrations in one place.",
    Icon: Stamp,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    category: "Compliance",
  },
  {
    slug: "online-registration-services",
    title: "Online Registration Services",
    blurb:
      "GST, MSME, IEC, FSSAI, PTEC, PTRC, Trademark, Startup India & RERA, all online registrations handled end-to-end.",
    Icon: ListChecks,
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=80",
    category: "Compliance",
  },
  {
    slug: "entry-india-strategies",
    title: "Entry India Strategies",
    blurb:
      "Structure, FDI advisory, regulatory clearances, and compliance for entering the Indian market.",
    Icon: Globe,
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
    category: "Global",
  },
  {
    slug: "compliance-management-services",
    title: "Compliance Management Services",
    blurb:
      "Calendar-driven filings, statutory reviews, and proactive monitoring, never miss a date.",
    Icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    category: "Compliance",
  },
  {
    slug: "accounting-bookkeeping-services",
    title: "Accounting & Bookkeeping Services",
    blurb:
      "Accurate ledgers, monthly MIS, payroll, and audit-ready records, finance you can trust.",
    Icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=900&q=80",
    category: "Compliance",
  },
  {
    slug: "business-incorporation-services",
    title: "Business Incorporation Services",
    blurb:
      "Pvt Ltd, OPC, Partnership, incorporated right with the optimal structure for your goals.",
    Icon: Building,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    category: "Setup",
  },
  {
    slug: "company-secretary-services",
    title: "Company Secretary Services",
    blurb:
      "Board, ROC, statutory registers, and governance support handled by qualified CS professionals.",
    Icon: UserCheck,
    image:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=900&q=80",
    category: "Compliance",
  },
  {
    slug: "professional-financial-audit-services-in-the-usa",
    title: "Professional Financial Audit Services in the USA",
    blurb:
      "GAAP-aligned audits, reviews, compilations and reporting for US entities and subsidiaries.",
    Icon: FileSearch,
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=900&q=80",
    category: "Global",
  },
  {
    slug: "business-setup-dubai",
    title: "Business Setup Company in Dubai for Company Formation & Incorporation Services",
    blurb:
      "DED & free-zone formation, residency visas, banking, and ongoing compliance in the UAE.",
    Icon: Building2,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    category: "Global",
  },
  {
    slug: "incorporation-services-in-the-usa",
    title: "Incorporation Services in the USA",
    blurb:
      "LLC and C-Corp formation, EIN, registered agent, and federal/state compliance.",
    Icon: Flag,
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=80",
    category: "Global",
  },
  {
    slug: "esop",
    title: "ESOP",
    blurb:
      "Plan design, valuation under Rule 3(8), taxation guidance, grants, and full rollout.",
    Icon: Users,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    category: "Advisory",
  },
  {
    slug: "business-plan",
    title: "Business Plan",
    blurb:
      "Investor-ready business plan with financial models, market analysis, and pitch deck.",
    Icon: FileBarChart,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    category: "Advisory",
  },
  {
    slug: "business-valuation-services-in-india",
    title: "Business Valuation Services in India",
    blurb:
      "DCF, comparable-company, and asset-based valuations with statutory-compliant reports.",
    Icon: Calculator,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
    category: "Advisory",
  },
  {
    slug: "transaction-advisory",
    title: "Transaction Advisory",
    blurb:
      "M&A advisory, financial & tax due diligence, deal structuring, and post-deal integration.",
    Icon: Handshake,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
    category: "Capital",
  },
  {
    slug: "what-is-sme-ipo",
    title: "What is SME IPO?",
    blurb:
      "Eligibility, listing path on NSE Emerge / BSE SME, documentation, and post-listing compliance.",
    Icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=900&q=80",
    category: "Capital",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
