'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { ServiceHero } from '../../components/ServiceHero';
import { ServiceOutcomes } from '../../components/ServiceOutcomes';
import { ServiceCapabilities } from '../../components/ServiceCapabilities';
import { SoftwareForEveryBusiness } from '../../sections/custom-software/SoftwareForEveryBusiness';
import { ProvenDeliveryProcess } from '../../sections/custom-software/ProvenDeliveryProcess';
import { TechnologyExpertise } from '../../sections/technologies/TechnologyExpertise/TechnologyExpertise';
import { RealBusinessesRealImpact } from '../../sections/custom-software/RealBusinessesRealImpact';
import { DomainSpecificSolutions } from '../../components/DomainSpecificSolutions';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { FAQ } from '../../sections/home/FAQ/FAQ';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import {
  ECOMMERCE_OUTCOMES,
  ECOMMERCE_CAPABILITIES,
  ECOMMERCE_SOLUTIONS,
  ECOMMERCE_DOMAINS,
  ECOMMERCE_FAQS,
} from './ecommerceSolutionsData';
import './EcommerceSolutionsPage.css';

export const EcommerceSolutionsPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'E-Commerce Development & Headless Storefront Solutions | Webkorps',
      description:
        'Engineer high-converting digital shopping experiences: headless composable commerce, custom Shopify Plus & Magento development, and omnichannel ERP integrations.',
      canonicalUrl: 'https://www.webkorps.com/services/ecommerce-solutions',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-ecommerce-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#ecommerce-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="ecommerce-main-content"
        tabIndex={-1}
        className="wk-ecommerce-page__main"
      >
        {/* Section 01: Hero Section */}
        <ServiceHero
          badge="E-Commerce Solutions"
          titleLine1="Digital storefronts built for"
          titleLine2={
            <>
              higher{' '}
              <span className="wk-service-hero__title-accent">conversions</span>{' '}
              & scale
            </>
          }
          description="Engineer high-converting digital shopping experiences: composable headless commerce, custom Shopify Plus & Magento engineering, seamless checkout flows, and omnichannel ERP sync."
          ctaText="Discuss E-Commerce Store"
          ctaHref="/contact-us"
        />

        {/* Section 02: Business Outcomes */}
        <ServiceOutcomes
          id="ecommerce-outcomes"
          title={
            <>
              What Modern <span className="wk-service-outcomes__title-accent">E-Commerce Architecture</span> Delivers
            </>
          }
          subtitle="Empower your online business with lightning-fast load times, higher checkout conversions, and seamless catalog management."
          items={ECOMMERCE_OUTCOMES}
        />

        {/* Section 03: Core Capabilities */}
        <ServiceCapabilities
          id="ecommerce-capabilities"
          title={
            <>
              Full-Spectrum <span className="wk-capabilities__title-accent">E-Commerce Development</span>
            </>
          }
          subtitle="From headless storefronts to ERP warehouse synchronization, we engineer shopping experiences that scale effortlessly."
          items={ECOMMERCE_CAPABILITIES}
        />

        {/* Section 04: Software for Every Business */}
        <SoftwareForEveryBusiness
          id="ecommerce-solutions-every-business"
          titleAccent="Commerce Solutions"
          titleRest="for Every Business."
          subtitle="Scalable digital commerce platforms built for conversion, speed, and seamless customer journeys."
          items={ECOMMERCE_SOLUTIONS}
        />

        {/* Section 05: Proven Delivery Process */}
        <ProvenDeliveryProcess />

        {/* Section 06: E-Commerce Tech Ecosystem */}
        <TechnologyExpertise
          titlePart1="E-Commerce"
          titlePart2="Technology Stack"
          subtitle="We engineer storefronts utilizing proven commerce engines, headless frameworks, and payment gateways."
        />

        {/* Section 07: Real Businesses. Real Impact. */}
        <RealBusinessesRealImpact />

        {/* Section 08: Domain-Specific Solutions */}
        <DomainSpecificSolutions
          id="ecommerce-domain-solutions"
          title={
            <>
              Digital Commerce Built for{' '}
              <span className="wk-domain-sol__title-accent">Specific Verticals</span>
            </>
          }
          subtitle="We engineer tailored digital commerce engines designed around the specific purchasing behaviors and supply chain mechanics of your vertical."
          engineeringLabel="Webkorps Commerce Engineering"
          domains={ECOMMERCE_DOMAINS}
        />

        {/* Section 09: Trusted by Fast-Growing Companies */}
        <BrandTrustStrip variant="services" />

        {/* Section 10: Client Testimonials */}
        <ClientTestimonials />

        {/* Section 11 & 12: Frequently Asked Questions & Still Have Questions? */}
        <FAQ
          id="ecommerce-faq"
          title={
            <>
              Frequently Asked <span className="wk-faq__title-accent">Questions</span>
            </>
          }
          subtitle="Clear answers about headless advantages, platform choices, B2B workflows, and PCI compliance."
          items={ECOMMERCE_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Ready to elevate your online store?',
            desc: "Let's review your store performance, UX friction points, and discuss a tailored development plan.",
            buttonText: 'Book an E-Commerce Consultation',
            buttonHref: '/contact-us',
          }}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Bottom Mega-Menu Navigation */}
      <BottomNavigation />
    </div>
  );
};

