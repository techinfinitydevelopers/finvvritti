import raw from "./services-content.json";

export type ServiceContent = {
  title: string;
  overview: string[];
  sections: string[];
  bullets: string[];
};

const data = raw as Record<string, ServiceContent>;

export function getServiceContent(slug: string): ServiceContent | null {
  return data[slug] ?? null;
}
