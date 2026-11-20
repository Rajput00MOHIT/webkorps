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

// Retail Data
import {
  RETAIL_CAPABILITIES,
  RETAIL_BUSINESS_DOMAINS,
  RETAIL_OUTCOMES,
  RETAIL_FAQS,
  RETAIL_STATS,
  RETAIL_ECOSYSTEM_STAGES,
  RETAIL_CHALLENGES,
  RETAIL_AI_USE_CASES,
  RETAIL_PARTNER_CAPABILITIES,
  catalogSearchImg,
  storefrontImg,
} from './retailEcommerceData';

import './RetailEcommercePage.css';

export const RetailEcommercePage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Retail & E-Commerce Software Development | Webkorps',
      description:
        'Build high-converting headless digital commerce storefronts, distributed order management, AI product discovery, and omnichannel retail platforms.',
      canonicalUrl: 'https://www.webkorps.com/industries/retail-ecommerce',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-retail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#retail-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main id="retail-main-content" tabIndex={-1} className="wk-retail-page__main">
        {/* SECTION 01: Hero Section */}
        <ServiceHero
          badge="Retail & E-Commerce Solutions"
          titleLine1={
            <span className="wk-retail-hero-title">
              Next-Gen{' '}
              <span className="wk-retail-hero-word">
                R
                <span className="wk-retail-hero-svg-badge" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    className="wk-retail-hero-svg-img"
                  >
                    <rect width="47" height="47" rx="23.5" fill="white" />
                    <path
                      d="M16 19H31L29 29H18L16 19Z"
                      stroke="#1887C9"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 19V16C20 14.8954 20.8954 14 22 14H25C26.1046 14 27 14.8954 27 16V19"
                      stroke="#1887C9"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                etail for
              </span>
            </span>
          }
          titleLine2={
            <>
              Connected <span className="wk-service-hero__title-accent">Omnichannel Commerce</span>
            </>
          }
          description="Build high-converting headless digital commerce storefronts, distributed order management, AI product discovery, and omnichannel retail platforms."
          ctaText="Discuss Your Commerce Project"
          ctaHref="/contact-us"
        />

        {/* SECTION 02: Market Intelligence & Stats */}
        <LogisticsIndustryStats
          id="retail-stats"
          title={
            <>
              Retail &amp; Digital Commerce <span className="wk-logistics-stats__title-accent">at a Glance</span>
            </>
          }
          subtitle="Real-time checkout conversion benchmarks, inventory accuracy metrics, and mobile commerce engagement rates shaping modern retail."
          featured={RETAIL_STATS.featured}
          items={RETAIL_STATS.secondary}
        />

        {/* SECTION 03: How the Retail Ecosystem Works (GSAP Horizontal Scroll) */}
        <LogisticsEcosystem
          id="retail-ecosystem"
          title={
            <>
              How Modern <span className="wk-logistics-eco__title-accent">Omnichannel Commerce Works</span>
            </>
          }
          subtitle="From headless storefront discovery and AI search to frictionless checkout, multi-hub fulfillment, and automated loyalty retention."
          stages={RETAIL_ECOSYSTEM_STAGES}
        />

        {/* SECTION 04: Real Challenges in Retail & E-Commerce */}
        <LogisticsChallenges
          id="retail-challenges"
          title={
            <>
              Why Modern Commerce <span className="wk-logistics-ch__title-accent">Gets Complex</span>
            </>
          }
          subtitle="Monolithic legacy platforms, inventory sync delays between online and physical stores, and cart abandonment hurt retail margins."
          items={RETAIL_CHALLENGES}
        />

        {/* SECTION 05: Core Retail Capabilities */}
        <ServiceCapabilities
          id="retail-solutions"
          title={
            <>
              Modular Technology for{' '}
              <span className="wk-capabilities__title-accent">High-Growth Retail Brands</span>
            </>
          }
          subtitle="We engineer composable commerce solutions for headless storefronts, distributed order routing, and 1-click digital wallet checkouts."
          items={RETAIL_CAPABILITIES}
        />

        {/* SECTION 06: How AI Is Transforming Retail */}
        <LogisticsAISection
          id="retail-ai"
          title={
            <>
              Smarter Retail <span className="wk-logistics-ai__title-accent">with AI</span>
            </>
          }
          subtitle="AI predicts demand, personalizes product discovery, and optimizes gross margins across omnichannel storefronts."
          image={catalogSearchImg}
          useCases={RETAIL_AI_USE_CASES}
        />

        {/* SECTION 07: Solutions for Different Retail Business Models */}
        <DomainSpecificSolutions
          id="retail-business-models"
          title={
            <>
              Commerce Platforms for{' '}
              <span className="wk-domain-sol__title-accent">Every Retail Model</span>
            </>
          }
          subtitle="Tailored digital commerce platforms for D2C brands, B2B wholesale portals, and multi-vendor marketplaces."
          engineeringLabel="Webkorps Commerce Engineering"
          domains={RETAIL_BUSINESS_DOMAINS}
        />

        {/* SECTION 08: Your Technology Partner for Retail */}
        <LogisticsPartner
          id="retail-partner"
          title={
            <>
              Your Strategic <span className="wk-logistics-pt__title-accent">Commerce Engineering Partner</span>
            </>
          }
          subtitle="From headless MACH architecture to high-concurrency flash sale performance, Webkorps delivers end-to-end retail software development."
          image={storefrontImg}
          capabilities={RETAIL_PARTNER_CAPABILITIES}
        />

        {/* SECTION 09: Commerce Delivery Process */}
        <ProvenDeliveryProcess />

        {/* SECTION 10: Measurable Commerce Outcomes */}
        <ServiceOutcomes
          id="retail-outcomes"
          title={
            <>
              Drive Conversions with <span className="wk-service-outcomes__title-accent">Ultra-Fast</span> Storefronts
            </>
          }
          subtitle="35% higher checkout conversions, 99.4% real-time inventory precision, and zero downtime during peak seasonal promotions."
          items={RETAIL_OUTCOMES}
        />

        {/* SECTION 11: Future-Ready Retail Tech Stack */}
        <TechnologyExpertise
          id="retail-tech-stack"
          titlePart1="Future-Ready"
          titlePart2="Retail Tech Stack"
          subtitle="We leverage headless GraphQL APIs, MACH architecture, and distributed CDN caching to ensure sub-second page loads."
        />

        {/* SECTION 12: Relevant Case Studies & Client Trust */}
        <BrandTrustStrip variant="services" />
        <ClientTestimonials />

        {/* SECTION 13: Frequently Asked Questions & Primary CTA */}
        <FAQ
          id="retail-faq"
          title={
            <>
              Retail Engineering <span className="wk-faq__title-accent">Questions Answered</span>
            </>
          }
          subtitle="Everything you need to know about building, scaling, and modernizing enterprise digital commerce platforms with Webkorps."
          items={RETAIL_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Ready to elevate your digital commerce experience?',
            desc: 'Schedule a technical consultation with our senior commerce architects. We analyze checkout drop-offs, review headless architectures, and deliver an engineering roadmap.',
            buttonText: 'Discuss Your Commerce Project',
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
