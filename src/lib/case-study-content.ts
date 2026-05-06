import raw from "./case-studies-content.json";

export type CaseStudyContent = {
  title: string;
  overview: string;
  challenge: { text: string; bullets: string[] };
  solution: { text: string; bullets: string[] };
  result: { bullets: string[] };
};

const data = raw as Record<string, CaseStudyContent>;

export function getCaseStudyContent(slug: string): CaseStudyContent | null {
  return data[slug] ?? null;
}
