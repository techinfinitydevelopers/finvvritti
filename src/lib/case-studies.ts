export type CaseStudyMeta = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  createdAt?: string;
};

export const caseStudies: CaseStudyMeta[] = [
  {
    slug: "adi-nisa-turning-their-local-coffee-shop-into-a-profitable-scalable-business",
    title: "Adi & Nisa - Turning Their Local Coffee Shop Into a Profitable, Scalable Business",
    subtitle: "From cash-stressed shop to disciplined business with 3.5x monthly profit growth.",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
    category: "Virtual CFO",
  },
  {
    slug: "mr-budi-optimizing-retirement-funds-for-a-worry-free-future",
    title: "Mr. Budi - Optimizing Tax Planning for a Worry-Free Future",
    subtitle: "Holistic direct tax strategy: structured planning, deductions optimized, and full compliance.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    category: "Direct Tax",
  },
  {
    slug: "rina-a-freelance-writer-builds-financial-stability-from-unpredictable-income",
    title: "Rina A. - GST Compliance & Indirect Tax for a Growing Business",
    subtitle: "Streamlined GST filings, reduced penalties, and clear indirect tax framework for a service business.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    category: "Indirect Tax",
  },
  {
    slug: "dita-rafi-planning-their-dream-home-without-financial-stress",
    title: "Dita & Rafi - Strategic Advisory for Business Expansion",
    subtitle: "How a growing business aligned financial goals, reduced debt, and secured funding for expansion.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    category: "Advisory",
  },
  {
    slug: "jonathan-t-from-financial-uncertainty-to-total-clarity",
    title: "Jonathan T. - From Financial Uncertainty to Total Clarity",
    subtitle: "A startup founder rebuilds financial structure with expert advisory and a clear growth roadmap.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    category: "Advisory",
  },
];

export function getCaseStudyMeta(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
