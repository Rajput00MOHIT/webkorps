'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { ServiceHero } from '../../components/ServiceHero';
import { ServiceCapabilities } from '../../components/ServiceCapabilities';
import { DomainSpecificSolutions } from '../../components/DomainSpecificSolutions';
import { ProvenDeliveryProcess } from '../../sections/custom-software/ProvenDeliveryProcess';
import { ServiceOutcomes } from '../../components/ServiceOutcomes';
import { TechnologyExpertise } from '../../sections/technologies/TechnologyExpertise/TechnologyExpertise';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { FAQ } from '../../sections/home/FAQ/FAQ';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';

// Reusing Universal Logistics Components
import {
  LogisticsIndustryStats,
  LogisticsEcosystem,
  LogisticsChallenges,
  LogisticsAISection,
  LogisticsPartner,
} from '../LogisticsSoftwareDevelopment/components';

// FinTech Data
import {
  FINTECH_CAPABILITIES,
  FINTECH_BUSINESS_DOMAINS,
  FINTECH_OUTCOMES,
  FINTECH_FAQS,
  FINTECH_STATS,
  FINTECH_ECOSYSTEM_STAGES,
  FINTECH_CHALLENGES,
  FINTECH_AI_USE_CASES,
  FINTECH_PARTNER_CAPABILITIES,
  aiPreviewImg,
  partnerVisualImg,
} from './fintechData';

import './FintechPage.css';

export const FintechPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'FinTech Software Development & Banking Solutions | Webkorps',
      description:
        'Engineer secure, scalable financial software: neo-banking platforms, real-time payment switches, algorithmic wealth tech, and AI-driven fraud defense.',
      canonicalUrl: 'https://www.webkorps.com/industries/fintech',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-fintech-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#fintech-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main id="fintech-main-content" tabIndex={-1} className="wk-fintech-page__main">
        {/* SECTION 01: Hero Section */}
        <ServiceHero
          badge="FinTech & Banking Solutions"
          titleLine1={
            <span className="wk-fintech-hero-title">
              Bank-Grade{' '}
              <span className="wk-fintech-hero-word">
                F
                <span className="wk-fintech-hero-svg-badge" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    className="wk-fintech-hero-svg-img"
                  >
                    <rect width="47" height="47" rx="23.5" fill="white" />
                    <path
                      d="M14 20L23.5 14L33 20V32C33 32.5304 32.7893 33.0391 32.4142 33.4142C32.0391 33.7893 31.5304 34 31 34H16C15.4696 34 14.9609 33.7893 14.5858 33.4142C14.2107 33.0391 14 32.5304 14 32V20Z"
                      stroke="#1887C9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 34V24H27V34"
                      stroke="#1887C9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                inTech for
              </span>
            </span>
          }
          titleLine2={
            <>
              Next-Gen <span className="wk-service-hero__title-accent">Financial Rails</span>
            </>
          }
          description="Engineer secure, scalable financial software: neo-banking platforms, real-time payment switches, algorithmic wealth tech, and AI-driven fraud defense."
          ctaText="Discuss Your FinTech Project"
          ctaHref="/contact-us"
        />

        {/* SECTION 02: Market Intelligence & Stats */}
        <LogisticsIndustryStats
          id="fintech-stats"
          title={
            <>
              Financial Technology &amp; Banking <span className="wk-logistics-stats__title-accent">at a Glance</span>
            </>
          }
          subtitle="Real-time transaction benchmarks, sub-second settlement metrics, and fraud prevention rates shaping modern digital banking."
          featured={FINTECH_STATS.featured}
          items={FINTECH_STATS.secondary}
        />

        {/* SECTION 03: How the FinTech & Banking Ecosystem Works (GSAP Horizontal Scroll) */}
        <LogisticsEcosystem
          id="fintech-ecosystem"
          title={
            <>
              How the Modern <span className="wk-logistics-eco__title-accent">FinTech Ecosystem Works</span>
            </>
          }
          subtitle="From customer onboarding and eKYC to core ledger accounting, algorithmic wealth management, and real-time payment switches."
          stages={FINTECH_ECOSYSTEM_STAGES}
        />

        {/* SECTION 04: Real Operational Challenges in FinTech */}
        <LogisticsChallenges
          id="fintech-challenges"
          title={
            <>
              Why Financial Infrastructure <span className="wk-logistics-ch__title-accent">Gets Complex</span>
            </>
          }
          subtitle="Legacy core banking mainframes, strict compliance mandates, and high latency hurdles stall product innovation."
          items={FINTECH_CHALLENGES}
        />

        {/* SECTION 05: Core Financial Technology Capabilities */}
        <ServiceCapabilities
          id="fintech-solutions"
          title={
            <>
              Enterprise-Grade Technology for{' '}
              <span className="wk-capabilities__title-accent">Modern Financial Institutions</span>
            </>
          }
          subtitle="We engineer modular financial software for high-throughput payment switching, double-entry core ledgers, and automated regulatory compliance."
          items={FINTECH_CAPABILITIES}
        />

        {/* SECTION 06: How AI Is Transforming FinTech */}
        <LogisticsAISection
          id="fintech-ai"
          title={
            <>
              Smarter Financial Services <span className="wk-logistics-ai__title-accent">with AI</span>
            </>
          }
          subtitle="Applied intelligence automates credit underwriting, intercepts synthetic identity fraud, and surfaces real-time wealth advice."
          image={aiPreviewImg}
          useCases={FINTECH_AI_USE_CASES}
        />

        {/* SECTION 07: Software Solutions for Different FinTech Business Models */}
        <DomainSpecificSolutions
          id="fintech-business-models"
          title={
            <>
              Financial Platforms for{' '}
              <span className="wk-domain-sol__title-accent">Every Business Model</span>
            </>
          }
          subtitle="Tailored financial technology platforms for neo-banks, payment switches, and digital lending institutions."
          engineeringLabel="Webkorps Financial Engineering"
          domains={FINTECH_BUSINESS_DOMAINS}
        />

        {/* SECTION 08: Your Technology Partner for FinTech */}
        <LogisticsPartner
          id="fintech-partner"
          title={
            <>
              Your Strategic <span className="wk-logistics-pt__title-accent">Financial Engineering Partner</span>
            </>
          }
          subtitle="From high-throughput core ledger development to PCI DSS level 1 certified payment switches, Webkorps provides end-to-end FinTech engineering."
          image={partnerVisualImg}
          capabilities={FINTECH_PARTNER_CAPABILITIES}
        />

        {/* SECTION 09: FinTech Delivery Process */}
        <ProvenDeliveryProcess />

        {/* SECTION 10: Measurable Business Outcomes */}
        <ServiceOutcomes
          id="fintech-outcomes"
          title={
            <>
              Scale Faster with <span className="wk-service-outcomes__title-accent">Zero-Downtime</span> Financial Infrastructure
            </>
          }
          subtitle="Measurable transaction velocity, bank-grade regulatory compliance, and enhanced user authorization rates."
          items={FINTECH_OUTCOMES}
        />

        {/* SECTION 11: Future-Ready FinTech Stack */}
        <TechnologyExpertise
          id="fintech-tech-stack"
          titlePart1="Future-Ready"
          titlePart2="FinTech Stack"
          subtitle="We leverage high-performance cloud platforms, microservices architecture, and zero-trust security to ensure reliability and regulatory compliance."
        />

        {/* SECTION 12: Relevant Case Studies & Client Trust */}
        <BrandTrustStrip variant="services" />
        <ClientTestimonials />

        {/* SECTION 13: Frequently Asked Questions & Primary CTA */}
        <FAQ
          id="fintech-faq"
          title={
            <>
              FinTech Engineering <span className="wk-faq__title-accent">Questions Answered</span>
            </>
          }
          subtitle="Everything you need to know about building, scaling, and securing enterprise financial software platforms with Webkorps."
          items={FINTECH_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Ready to build high-scale financial software?',
            desc: 'Schedule a technical consultation with our senior FinTech architects. We evaluate system bottlenecks, review compliance readiness, and map a production engineering roadmap.',
            buttonText: 'Discuss Your FinTech Project',
            buttonHref: '/contact-us',
          }}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};
