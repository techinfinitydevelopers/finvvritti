import raw from "./services-content.json";

export type ServiceFAQ = {
  q: string;
  a: string;
};

export type ServiceBenefit = {
  icon: string;
  title: string;
  desc: string;
};

export type ServiceContent = {
  title: string;
  overview: string[];
  benefits?: ServiceBenefit[];
  sections: string[];
  bullets: string[];
  documents?: string[];
  faqs?: ServiceFAQ[];
};

const data = raw as Record<string, ServiceContent>;

export function getServiceContent(slug: string): ServiceContent | null {
  return data[slug] ?? null;
}
