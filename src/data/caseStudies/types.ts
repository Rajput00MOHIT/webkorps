export interface CaseStudyMetric {
  value: string;
  unit?: string;
  label: string;
  baseline?: string;
  timeframe?: string;
  source?: string;
}

export interface CaseStudyAtAGlanceItem {
  label: string;
  value: string;
}

export interface CaseStudyChallenge {
  number: string;
  heading: string;
  description: string;
  consequences: string[];
}

export interface CaseStudyGoal {
  goal: string;
  measurement: string;
  result: string;
}

export interface CaseStudyDecision {
  number: string;
  decision: string;
  alternativesConsidered: string;
  whyChosen: string;
  observedImpact: string;
}

export interface CaseStudySolutionFeature {
  number: string;
  title: string;
  badge: string;
  description: string;
  workflowImprovement: string;
  targetUsers: string;
  visualLabel: string;
  visualType: 'dashboard' | 'mobile' | 'portal' | 'pipeline';
  annotations: string[];
}

export interface CaseStudyTechCategory {
  role: string;
  technologies: {
    name: string;
    purpose: string;
    href?: string;
  }[];
}

export interface CaseStudyFAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CaseStudyData {
  id: string;
  slug: string;
  alternativeSlugs?: string[];
  client: string;
  clientLogo?: any;
  clientLogoAlt?: string;
  industry: string;
  serviceCategory: string;
  outcomeHeadline: string;
  subtitle: string;
  heroImage: any;
  heroImageAlt: string;
  heroMetrics: CaseStudyMetric[];
  
  // At a glance (Section 02)
  atAGlance: CaseStudyAtAGlanceItem[];
  
  // In short (Section 03)
  inShort: string;
  
  // Context (Section 05)
  clientContext: {
    paragraphs: string[];
    operatingStats: { label: string; value: string }[];
  };
  
  // Challenges (Section 06)
  challenges: CaseStudyChallenge[];
  
  // Goals (Section 07)
  goals: CaseStudyGoal[];
  
  // Approach & Decisions (Section 08)
  decisions: CaseStudyDecision[];
  
  // Solution (Section 09)
  solutionFeatures: CaseStudySolutionFeature[];
  
  // Technical Execution (Section 10 - Optional)
  technicalExecution?: {
    overview: string;
    architecturePoints: { title: string; description: string }[];
    securityPoints: string[];
    performanceHighlights: string[];
  };
  
  // Results (Section 11)
  results: {
    headline: string;
    description: string;
    metrics: CaseStudyMetric[];
    qualitativeOutcomes: string[];
  };
  
  // Testimonial (Section 12 - Optional)
  testimonial?: {
    quote: string;
    author: string;
    designation: string;
    company: string;
  };
  
  // Technology Stack (Section 13)
  techStack: CaseStudyTechCategory[];
  
  // Reusable Pattern (Section 14)
  reusablePattern: {
    patternHeadline: string;
    patternDescription: string;
    adjacentIndustries: {
      name: string;
      scenario: string;
    }[];
  };
  
  // Engagement Details (Section 15 - Optional)
  engagementDetails?: {
    teamSize: string;
    duration: string;
    model: string;
    cadence: string;
    practices: string[];
  };
  
  // FAQs (Section 16 - Optional)
  faqs?: CaseStudyFAQItem[];
  
  // Related Case Studies (Section 17)
  relatedCaseIds: string[];
  
  // SEO & Metadata
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
    publishedAt: string;
    updatedAt: string;
  };
}
