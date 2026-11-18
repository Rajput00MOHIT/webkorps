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

// Dedicated Logistics Sections
import {
  LogisticsIndustryStats,
  LogisticsEcosystem,
  LogisticsChallenges,
  LogisticsAISection,
  LogisticsIntegrations,
  LogisticsPartner,
} from './components';

// Logistics Data
import {
  LOGISTICS_CAPABILITIES,
  LOGISTICS_BUSINESS_DOMAINS,
  LOGISTICS_OUTCOMES,
  LOGISTICS_FAQS,
} from './logisticsSoftwareData';

import './LogisticsSoftwareDevelopmentPage.css';

export const LogisticsSoftwareDevelopmentPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Logistics Software Development & Supply Chain Technology | Webkorps',
      description:
        'Build smarter logistics operations with custom software, real-time tracking, connected systems, and intelligent automation. Trusted by leading freight and enterprise logistics operators.',
      canonicalUrl: 'https://www.webkorps.com/industries/logistics',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-logistics-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#logistics-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="logistics-main-content"
        tabIndex={-1}
        className="wk-logistics-page__main"
      >
        {/* SECTION 01: Hero Section */}
        <ServiceHero
          badge="Logistics Technology Solutions"
          titleLine1={
            <span className="wk-logistics-hero-title">
              Smart{' '}
              <span className="wk-logistics-hero-word">
                L
                <span className="wk-logistics-hero-svg-badge" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    className="wk-logistics-hero-svg-img"
                  >
                    <rect width="47" height="47" rx="23.5" fill="white" />
                    <path
                      d="M20.2312 15.6929H33.7717C34.7914 15.6929 35.6181 16.5195 35.6181 17.5393V24.925C35.6181 25.9448 34.7914 26.7714 33.7717 26.7714H20.2312C19.2114 26.7714 18.3848 25.9448 18.3848 24.925V17.5393C18.3848 16.5195 19.2114 15.6929 20.2312 15.6929Z"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      stroke="#1A87C8"
                    />
                    <path
                      d="M23.3086 19.3857V23.0786M30.6943 19.3857V23.0786"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      stroke="#1A87C8"
                    />
                    <path
                      d="M30.6952 15.6929V12H23.3095V15.6929M35.619 30.4643H33.1571M33.1571 30.4643H29.4643M33.1571 30.4643V32.3107C33.1571 32.8004 32.9626 33.2701 32.6163 33.6163C32.2701 33.9626 31.8004 34.1571 31.3107 34.1571C30.821 34.1571 30.3514 33.9626 30.0051 33.6163C29.6588 33.2701 29.4643 32.8004 29.4643 32.3107V30.4643M29.4643 30.4643H22.0786M22.0786 30.4643H18.3857M22.0786 30.4643V32.3107C22.0786 32.8004 21.884 33.2701 21.5378 33.6163C21.1915 33.9626 20.7218 34.1571 20.2321 34.1571C19.7424 34.1571 19.2728 33.9626 18.9265 33.6163C18.5802 33.2701 18.3857 32.8004 18.3857 32.3107V30.4643M18.3857 30.4643H15.9238C15.5973 30.4643 15.2842 30.3346 15.0534 30.1037C14.8225 29.8729 14.6929 29.5598 14.6929 29.2333V15.0774C14.6929 14.7509 14.5632 14.4378 14.3323 14.207C14.1015 13.9761 13.7884 13.8464 13.4619 13.8464H11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#1A87C8"
                    />
                  </svg>
                </span>
                gistics for
              </span>
            </span>
          }
          titleLine2={
            <>
              Connected <span className="wk-service-hero__title-accent">Supply Chains</span>
            </>
          }
          description="Build smarter logistics operations with custom software, real-time tracking, connected systems, and intelligent automation."
          ctaText="Discuss Your Project"
          ctaHref="/contact-us"
        />

        {/* SECTION 02: Logistics Industry at a Glance */}
        <LogisticsIndustryStats id="logistics-stats" />

        {/* SECTION 03: How the Logistics Ecosystem Works */}
        <LogisticsEcosystem />

        {/* SECTION 04: The Real Challenges in Logistics */}
        <LogisticsChallenges />

        {/* SECTION 05: End-to-End Logistics Software Solutions */}
        <ServiceCapabilities
          id="logistics-solutions"
          title={
            <>
              One Connected Platform for{' '}
              <span className="wk-capabilities__title-accent">Every Logistics Operation</span>
            </>
          }
          subtitle="From algorithmic dispatching and smart warehousing to real-time telematics and automated freight billing, we engineer modular software tailored to your workflows."
          items={LOGISTICS_CAPABILITIES}
        />

        {/* SECTION 06: How AI Is Transforming Logistics */}
        <LogisticsAISection />

        {/* SECTION 07: Software Solutions for Different Logistics Business Models */}
        <DomainSpecificSolutions
          id="logistics-business-models"
          title={
            <>
              Software Solutions for{' '}
              <span className="wk-domain-sol__title-accent">Different Logistics Business Models</span>
            </>
          }
          subtitle="Whether you operate a global freight forwarding firm, a multi-client 3PL network, or retail delivery fleets, we build platforms aligned with your commercial reality."
          engineeringLabel="Webkorps Logistics Engineering"
          domains={LOGISTICS_BUSINESS_DOMAINS}
        />

        {/* SECTION 08: Connected Logistics Technology & Integrations */}
        <LogisticsIntegrations />

        {/* SECTION 09: Your Technology Partner for Smarter Logistics */}
        <LogisticsPartner />

        {/* SECTION 10: Logistics Software Development Process */}
        <ProvenDeliveryProcess />

        {/* SECTION 11: Business Outcomes */}
        <ServiceOutcomes
          id="logistics-outcomes"
          title={
            <>
              Build Faster, <span className="wk-service-outcomes__title-accent">More Connected</span> Logistics Operations
            </>
          }
          subtitle="Measurable operational velocity, lower operating costs, and enhanced freight visibility for your entire enterprise."
          items={LOGISTICS_OUTCOMES}
        />

        {/* SECTION 12: Future-Ready Technology Stack */}
        <TechnologyExpertise
          id="logistics-tech-stack"
          titlePart1="Future-Ready"
          titlePart2="Logistics Stack"
          subtitle="We leverage high-performance cloud frameworks, telemetry brokers, and scalable databases to power uninterrupted supply chain operations."
        />

        {/* SECTION 13: Relevant Case Studies & Client Trust */}
        <BrandTrustStrip variant="services" />
        <ClientTestimonials />

        {/* SECTION 14 & 15: Logistics FAQ & Final CTA */}
        <FAQ
          id="logistics-faq"
          title={
            <>
              Logistics Software <span className="wk-faq__title-accent">FAQs</span>
            </>
          }
          subtitle="Answers to common questions about custom TMS/WMS development, telematics integrations, security, and delivery timelines."
          items={LOGISTICS_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Ready to Build a Smarter Logistics Operation?',
            desc: 'Connect your logistics workflows, improve operational visibility, and build technology that grows with your business.',
            buttonText: 'Discuss Your Project',
            buttonHref: '/contact-us',
          }}
        />
      </main>

      {/* SECTION 16: Global Footer & Bottom Navigation */}
      <Footer />
      <BottomNavigation />
    </div>
  );
};
