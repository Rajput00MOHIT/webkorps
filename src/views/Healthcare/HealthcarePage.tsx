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

// Healthcare Data
import {
  HEALTHCARE_CAPABILITIES,
  HEALTHCARE_BUSINESS_DOMAINS,
  HEALTHCARE_OUTCOMES,
  HEALTHCARE_FAQS,
  HEALTHCARE_STATS,
  HEALTHCARE_ECOSYSTEM_STAGES,
  HEALTHCARE_CHALLENGES,
  HEALTHCARE_AI_USE_CASES,
  HEALTHCARE_PARTNER_CAPABILITIES,
  aiHealthImg,
  hospitalImg,
} from './healthcareData';

import './HealthcarePage.css';

export const HealthcarePage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Healthcare Software Development & HealthTech Solutions | Webkorps',
      description:
        'Engineer HIPAA-compliant healthcare software: EHR/EMR platforms, telemedicine portals, remote patient monitoring, and clinical AI diagnostics.',
      canonicalUrl: 'https://www.webkorps.com/industries/healthcare',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-health-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#health-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main id="health-main-content" tabIndex={-1} className="wk-health-page__main">
        {/* SECTION 01: Hero Section */}
        <ServiceHero
          badge="Healthcare & HealthTech Solutions"
          titleLine1={
            <span className="wk-health-hero-title">
              Patient-Centric{' '}
              <span className="wk-health-hero-word">
                H
                <span className="wk-health-hero-svg-badge" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    className="wk-health-hero-svg-img"
                  >
                    <rect width="47" height="47" rx="23.5" fill="white" />
                    <path
                      d="M23.5 16V31M16 23.5H31"
                      stroke="#1887C9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                ealthcare for
              </span>
            </span>
          }
          titleLine2={
            <>
              Next-Gen <span className="wk-service-hero__title-accent">Clinical Workflows</span>
            </>
          }
          description="Engineer HIPAA-compliant healthcare software: EHR/EMR platforms, telemedicine portals, remote patient monitoring, and clinical AI diagnostics."
          ctaText="Discuss Your Healthcare Project"
          ctaHref="/contact-us"
        />

        {/* SECTION 02: Market Intelligence & Stats */}
        <LogisticsIndustryStats
          id="healthcare-stats"
          title={
            <>
              Healthcare &amp; Digital Health <span className="wk-logistics-stats__title-accent">at a Glance</span>
            </>
          }
          subtitle="Real-time patient intake benchmarks, zero-trust HIPAA compliance metrics, and diagnostic accuracy shaping modern care."
          featured={HEALTHCARE_STATS.featured}
          items={HEALTHCARE_STATS.secondary}
        />

        {/* SECTION 03: How the Healthcare Ecosystem Works (GSAP Horizontal Scroll) */}
        <LogisticsEcosystem
          id="healthcare-ecosystem"
          title={
            <>
              How the Modern <span className="wk-logistics-eco__title-accent">Healthcare Ecosystem Works</span>
            </>
          }
          subtitle="From patient onboarding and EHR intake to AI diagnostics, smart dispensing, remote telemetry, and claims reimbursement."
          stages={HEALTHCARE_ECOSYSTEM_STAGES}
        />

        {/* SECTION 04: Real Challenges in Healthcare */}
        <LogisticsChallenges
          id="healthcare-challenges"
          title={
            <>
              Why Clinical Systems <span className="wk-logistics-ch__title-accent">Get Complex</span>
            </>
          }
          subtitle="Fragmented EHR silos, regulatory compliance hurdles, and clinician charting fatigue create severe operational bottlenecks."
          items={HEALTHCARE_CHALLENGES}
        />

        {/* SECTION 05: Core Healthcare Capabilities */}
        <ServiceCapabilities
          id="healthcare-solutions"
          title={
            <>
              Enterprise Technology for{' '}
              <span className="wk-capabilities__title-accent">Connected Digital Medicine</span>
            </>
          }
          subtitle="We engineer modular digital health software for telemedicine, SMART-on-FHIR integrations, and remote biometric monitoring."
          items={HEALTHCARE_CAPABILITIES}
        />

        {/* SECTION 06: How AI Is Transforming Healthcare */}
        <LogisticsAISection
          id="healthcare-ai"
          title={
            <>
              Smarter Healthcare <span className="wk-logistics-ai__title-accent">with AI</span>
            </>
          }
          subtitle="Applied machine learning automates clinical charting, speeds acute diagnostic triage, and cuts administrative claim rejections."
          image={aiHealthImg}
          useCases={HEALTHCARE_AI_USE_CASES}
        />

        {/* SECTION 07: Solutions for Different Healthcare Business Models */}
        <DomainSpecificSolutions
          id="healthcare-business-models"
          title={
            <>
              Digital Health Platforms for{' '}
              <span className="wk-domain-sol__title-accent">Every Clinical Model</span>
            </>
          }
          subtitle="Tailored digital health platforms for hospital systems, virtual clinics, and connected medical device manufacturers."
          engineeringLabel="Webkorps HealthTech Engineering"
          domains={HEALTHCARE_BUSINESS_DOMAINS}
        />

        {/* SECTION 08: Your Technology Partner for Healthcare */}
        <LogisticsPartner
          id="healthcare-partner"
          title={
            <>
              Your Strategic <span className="wk-logistics-pt__title-accent">Healthcare Engineering Partner</span>
            </>
          }
          subtitle="From HL7/FHIR interoperability to FDA-aligned medical device telemetry, Webkorps provides end-to-end health software development."
          image={hospitalImg}
          capabilities={HEALTHCARE_PARTNER_CAPABILITIES}
        />

        {/* SECTION 09: Healthcare Delivery Process */}
        <ProvenDeliveryProcess />

        {/* SECTION 10: Measurable Clinical Outcomes */}
        <ServiceOutcomes
          id="healthcare-outcomes"
          title={
            <>
              Improve Care Delivery with <span className="wk-service-outcomes__title-accent">HIPAA-Compliant</span> Systems
            </>
          }
          subtitle="Faster patient registration, lower insurance claim denials, and enhanced physician clinical efficiency."
          items={HEALTHCARE_OUTCOMES}
        />

        {/* SECTION 11: Future-Ready Healthcare Stack */}
        <TechnologyExpertise
          id="healthcare-tech-stack"
          titlePart1="Future-Ready"
          titlePart2="HealthTech Stack"
          subtitle="We leverage high-performance cloud frameworks, FHIR HL7 brokers, and zero-trust encryption to safeguard Protected Health Information (PHI)."
        />

        {/* SECTION 12: Relevant Case Studies & Client Trust */}
        <BrandTrustStrip variant="services" />
        <ClientTestimonials />

        {/* SECTION 13: Frequently Asked Questions & Primary CTA */}
        <FAQ
          id="healthcare-faq"
          title={
            <>
              Healthcare Engineering <span className="wk-faq__title-accent">Questions Answered</span>
            </>
          }
          subtitle="Everything you need to know about building, scaling, and securing enterprise digital health platforms with Webkorps."
          items={HEALTHCARE_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Ready to modernize your healthcare technology?',
            desc: 'Schedule a technical consultation with our senior HealthTech architects. We evaluate HIPAA compliance readiness, design FHIR integration architectures, and deliver production roadmaps.',
            buttonText: 'Discuss Your Healthcare Project',
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
