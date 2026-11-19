'use client';

import React from 'react';
import { Header } from '../../sections/home/Header/Header';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { CaseStudyData } from '../../data/caseStudies/types';
import { CaseStudyHero } from './components/CaseStudyHero';
import { CaseStudyAtAGlance, CaseStudyInShort } from './components/CaseStudyAtAGlance';
import { CaseStudyStickyNav } from './components/CaseStudyStickyNav';
import {
  CaseStudyContext,
  CaseStudyChallenges,
  CaseStudyGoals,
  CaseStudyDecisions,
} from './components/CaseStudyContextAndChallenges';
import {
  CaseStudySolutions,
  CaseStudyTechDeepDive,
  CaseStudyResults,
  CaseStudyTestimonial,
} from './components/CaseStudySolutionAndResults';
import {
  CaseStudyTechStack,
  CaseStudyChallengeToo,
  CaseStudyEngagement,
  CaseStudyFAQ,
} from './components/CaseStudyTechAndEngagement';
import { CaseStudyRelatedAndCTA } from './components/CaseStudyRelatedAndCTA';
import './CaseStudyDetailPage.css';

interface CaseStudyDetailPageProps {
  data: CaseStudyData;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ data }) => {
  return (
    <div className="wk-case-study-detail-page">
      <a href="#case-study-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      <main id="case-study-main-content" tabIndex={-1} className="wk-cs-main">
        {/* Section 01: Hero + Breadcrumb */}
        <CaseStudyHero data={data} />

        {/* Section 02: Project at a Glance */}
        <CaseStudyAtAGlance data={data} />

        {/* Section 03: In Short (Self-contained 60-90 words for GEO/AEO/SEO) */}
        <CaseStudyInShort inShort={data.inShort} client={data.client} />

        {/* Main Content Area with Sticky Navigation Rail */}
        <div className="wk-cs-main-body">
          {/* Section 04: Sticky In-Page Navigation */}
          <CaseStudyStickyNav />

          {/* Core Case Study Sections Column */}
          <div className="wk-cs-content-stream">
            {/* Section 05: Client & Business Context */}
            <CaseStudyContext data={data} />

            {/* Section 06: The Business Challenge */}
            <CaseStudyChallenges data={data} />

            {/* Section 07: Goals and Success Criteria */}
            <CaseStudyGoals data={data} />

            {/* Section 08: Approach & Key Decisions */}
            <CaseStudyDecisions data={data} />

            {/* Section 09: The Solution (Alternating Feature Rows) */}
            <CaseStudySolutions features={data.solutionFeatures} />

            {/* Section 10: Technical Execution (Optional / Collapsible) */}
            {data.technicalExecution && (
              <CaseStudyTechDeepDive techExecution={data.technicalExecution} />
            )}

            {/* Section 11: Results & Business Impact */}
            <CaseStudyResults results={data.results} />

            {/* Section 12: Client Testimonial (Optional) */}
            {data.testimonial && (
              <CaseStudyTestimonial testimonial={data.testimonial} />
            )}

            {/* Section 13: Technology Stack */}
            <CaseStudyTechStack techStack={data.techStack} />

            {/* Section 14: Is This Your Challenge Too? */}
            <CaseStudyChallengeToo reusablePattern={data.reusablePattern} />

            {/* Section 15: Team and Engagement Details (Optional) */}
            {data.engagementDetails && (
              <CaseStudyEngagement engagementDetails={data.engagementDetails} />
            )}

            {/* Section 16: Project-Specific FAQ (Optional) */}
            {data.faqs && data.faqs.length > 0 && (
              <CaseStudyFAQ faqs={data.faqs} />
            )}
          </div>
        </div>

        {/* Section 17: Related Case Studies + Final Inquiry CTA */}
        <CaseStudyRelatedAndCTA
          currentSlug={data.slug}
          industry={data.industry}
          serviceCategory={data.serviceCategory}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};
