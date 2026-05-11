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
    slug: "dita-rafi-planning-their-dream-home-without-financial-stress",
    title: "Dita & Rafi — Planning Their Dream Home Without Financial Stress",
    subtitle:
      "How a young couple aligned goals, paid down debt, and saved 20× for their first home.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    category: "Personal Finance",
  },
  {
    slug: "jonathan-t-from-financial-uncertainty-to-total-clarity",
    title: "Jonathan T. — From Financial Uncertainty to Total Clarity",
    subtitle:
      "A young tech professional rebuilds his finances from scratch with a structured plan.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    category: "Personal Finance",
  },
  {
    slug: "mr-budi-optimizing-retirement-funds-for-a-worry-free-future",
    title: "Mr. Budi — Optimizing Retirement Funds for a Worry-Free Future",
    subtitle:
      "Holistic retirement strategy: structured income, inflation protection, and estate clarity.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    category: "Retirement",
  },
  {
    slug: "adi-nisa-turning-their-local-coffee-shop-into-a-profitable-scalable-business",
    title:
      "Adi & Nisa — Turning Their Local Coffee Shop Into a Profitable, Scalable Business",
    subtitle:
      "From cash-stressed shop to disciplined business with 3.5× monthly profit growth.",
    image:
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
    category: "SME",
  },
  {
    slug: "rina-a-freelance-writer-builds-financial-stability-from-unpredictable-income",
    title:
      "Rina A. — Freelance Writer Builds Financial Stability from Unpredictable Income",
    subtitle:
      "Variable income tamed: emergency fund, steady savings, and confidence to raise rates.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    category: "Freelancer",
  },
];

export function getCaseStudyMeta(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
