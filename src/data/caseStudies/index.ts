import { CaseStudyData } from './types';
import { SAFEXPRESS_CASE_STUDY } from './safexpress';

export * from './types';
export * from './safexpress';

export const ALL_DETAILED_CASE_STUDIES: CaseStudyData[] = [
  SAFEXPRESS_CASE_STUDY,
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  const normalized = slug.toLowerCase().trim();
  return ALL_DETAILED_CASE_STUDIES.find(
    (cs) =>
      cs.slug.toLowerCase() === normalized ||
      cs.id.toLowerCase() === normalized ||
      cs.alternativeSlugs?.some((alt) => alt.toLowerCase() === normalized)
  );
}

export function getAllCaseStudySlugs(): string[] {
  const slugs: string[] = [];
  ALL_DETAILED_CASE_STUDIES.forEach((cs) => {
    slugs.push(cs.slug);
    if (cs.alternativeSlugs) {
      slugs.push(...cs.alternativeSlugs);
    }
  });
  return Array.from(new Set(slugs));
}
