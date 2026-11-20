'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { ServiceHero } from '../../components/ServiceHero';
import { ServiceCapabilities, CapabilityItem } from '../../components/ServiceCapabilities';
import { DomainSpecificSolutions, DomainSolutionItem } from '../../components/DomainSpecificSolutions';
import { ProvenDeliveryProcess } from '../../sections/custom-software/ProvenDeliveryProcess';
import { ServiceOutcomes, OutcomeItem } from '../../components/ServiceOutcomes';
import { TechnologyExpertise } from '../../sections/technologies/TechnologyExpertise/TechnologyExpertise';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { FAQ } from '../../sections/home/FAQ/FAQ';
import { FAQItemData } from '../../sections/home/FAQ/faqData';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import type { StaticImageData } from 'next/image';

// Directly Reuse Logistics Core Interactive Components
import {
  LogisticsIndustryStats,
  LogisticsEcosystem,
  LogisticsChallenges,
  LogisticsAISection,
  LogisticsPartner,
} from '../LogisticsSoftwareDevelopment/components';

import './IndustryDetailView.css';

export interface IndustryEcosystemStage {
  id: string;
  stepNumber?: string;
  title: string;
  description: string;
  image: StaticImageData | string;
}

export interface IndustryChallengeItem {
  number: string;
  title: string;
  description: string;
  impact: string;
}

export interface IndustryAIUseCase {
  id: string;
  number: string;
  title: string;
  problem: string;
  aiApproach?: string;
  integrations?: string;
  benefit?: string;
}

export interface IndustryPartnerCapability {
  number: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface IndustryStatItem {
  id?: string;
  badge: string;
  value: string;
  label: string;
  description: string;
  source: string;
  image?: StaticImageData | string;
}

export interface IndustryStatsData {
  featured: {
    badge: string;
    value: string;
    label: string;
    description: string;
    source: string;
    image?: StaticImageData | string;
  };
  secondary: IndustryStatItem[];
}

export interface IndustryPageConfig {
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;

  // Hero
  badge: string;
  heroFirstWordPrefix: string;
  heroFirstWordLetter: string;
  heroSvgPath: React.ReactNode;
  heroFirstWordSuffix: string;
  heroTitleLine2: React.ReactNode;
  heroDescription: string;
  ctaText: string;

  // Stats
  statsTitle: React.ReactNode;
  statsSubtitle: string;
  statsData: IndustryStatsData;

  // Ecosystem
  ecosystemTitle: React.ReactNode;
  ecosystemSubtitle: string;
  ecosystemStages: IndustryEcosystemStage[];

  // Challenges
  challengesTitle: React.ReactNode;
  challengesSubtitle: string;
  challenges: IndustryChallengeItem[];

  // Capabilities
  capabilitiesTitle: React.ReactNode;
  capabilitiesSubtitle: string;
  capabilities: CapabilityItem[];

  // AI
  aiTitle: React.ReactNode;
  aiSubtitle: string;
  aiImage: StaticImageData | string;
  aiUseCases: IndustryAIUseCase[];

  // Domain Solutions
  domainsTitle: React.ReactNode;
  domainsSubtitle: string;
  domainsEngineeringLabel: string;
  domains: DomainSolutionItem[];

  // Partner
  partnerTitle: React.ReactNode;
  partnerSubtitle: string;
  partnerImage: StaticImageData | string;
  partnerCapabilities: IndustryPartnerCapability[];

  // Outcomes
  outcomesTitle: React.ReactNode;
  outcomesSubtitle: string;
  outcomes: OutcomeItem[];

  // Tech Stack
  techStackTitle1: string;
  techStackTitle2: string;
  techStackSubtitle: string;

  // FAQ
  faqTitle: React.ReactNode;
  faqSubtitle: string;
  faqs: FAQItemData[];
  ctaTitle: string;
  ctaDesc: string;
}

export const IndustryDetailView: React.FC<{ config: IndustryPageConfig }> = ({ config }) => {
  useEffect(() => {
    updateSEOMetadata({
      title: config.seoTitle,
      description: config.seoDescription,
      canonicalUrl: config.canonicalUrl,
    });
  }, [config]);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-ind-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#ind-main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Header />

      <main id="ind-main-content" tabIndex={-1} className="wk-ind-page__main">
        {/* SECTION 01: Hero */}
        <ServiceHero
          badge={config.badge}
          titleLine1={
            <span className="wk-ind-hero-title">
              {config.heroFirstWordPrefix}{' '}
              <span className="wk-ind-hero-word">
                {config.heroFirstWordLetter}
                <span className="wk-ind-hero-svg-badge" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    className="wk-ind-hero-svg-img"
                  >
                    <rect width="47" height="47" rx="23.5" fill="white" />
                    {config.heroSvgPath}
                  </svg>
                </span>
                {config.heroFirstWordSuffix}
              </span>
            </span>
          }
          titleLine2={config.heroTitleLine2}
          description={config.heroDescription}
          ctaText={config.ctaText}
          ctaHref="/contact-us"
        />

        {/* SECTION 02: Stats (Reusing LogisticsIndustryStats) */}
        <LogisticsIndustryStats
          id="industry-stats"
          title={config.statsTitle}
          subtitle={config.statsSubtitle}
          featured={config.statsData.featured}
          items={config.statsData.secondary}
        />

        {/* SECTION 03: Ecosystem (Reusing LogisticsEcosystem with GSAP horizontal scroll) */}
        <LogisticsEcosystem
          id="industry-ecosystem"
          title={config.ecosystemTitle}
          subtitle={config.ecosystemSubtitle}
          stages={config.ecosystemStages}
        />

        {/* SECTION 04: Challenges (Reusing LogisticsChallenges) */}
        <LogisticsChallenges
          id="industry-challenges"
          title={config.challengesTitle}
          subtitle={config.challengesSubtitle}
          items={config.challenges}
        />

        {/* SECTION 05: Capabilities */}
        <ServiceCapabilities
          id="industry-solutions"
          title={config.capabilitiesTitle}
          subtitle={config.capabilitiesSubtitle}
          items={config.capabilities}
        />

        {/* SECTION 06: AI Section (Reusing LogisticsAISection) */}
        {config.aiUseCases && config.aiUseCases.length > 0 && (
          <LogisticsAISection
            id="industry-ai"
            title={config.aiTitle}
            subtitle={config.aiSubtitle}
            image={config.aiImage}
            useCases={config.aiUseCases}
          />
        )}

        {/* SECTION 07: Domain Specific Solutions */}
        <DomainSpecificSolutions
          id="industry-domain-models"
          title={config.domainsTitle}
          subtitle={config.domainsSubtitle}
          engineeringLabel={config.domainsEngineeringLabel}
          domains={config.domains}
        />

        {/* SECTION 08: Technology Partner (Reusing LogisticsPartner) */}
        <LogisticsPartner
          id="industry-partner"
          title={config.partnerTitle}
          subtitle={config.partnerSubtitle}
          image={config.partnerImage}
          capabilities={config.partnerCapabilities}
        />

        {/* SECTION 09: Delivery Process */}
        <ProvenDeliveryProcess />

        {/* SECTION 10: Measurable Outcomes */}
        <ServiceOutcomes
          id="industry-outcomes"
          title={config.outcomesTitle}
          subtitle={config.outcomesSubtitle}
          items={config.outcomes}
        />

        {/* SECTION 11: Tech Stack */}
        <TechnologyExpertise
          id="industry-tech-stack"
          titlePart1={config.techStackTitle1}
          titlePart2={config.techStackTitle2}
          subtitle={config.techStackSubtitle}
        />

        {/* SECTION 12: Trust & Testimonials */}
        <BrandTrustStrip variant="services" />
        <ClientTestimonials />

        {/* SECTION 13: FAQ & CTA */}
        <FAQ
          id="industry-faq"
          title={config.faqTitle}
          subtitle={config.faqSubtitle}
          items={config.faqs}
          showCta={true}
          ctaProps={{
            title: config.ctaTitle,
            desc: config.ctaDesc,
            buttonText: 'Discuss Your Project',
            buttonHref: '/contact-us',
          }}
        />
      </main>

      <Footer />
      <BottomNavigation />
    </div>
  );
};
