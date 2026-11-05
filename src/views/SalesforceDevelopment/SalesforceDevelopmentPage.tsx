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
  SALESFORCE_OUTCOMES,
  SALESFORCE_CAPABILITIES,
  SALESFORCE_SOLUTIONS,
  SALESFORCE_DOMAINS,
  SALESFORCE_FAQS,
} from './salesforceDevelopmentData';
import './SalesforceDevelopmentPage.css';

export const SalesforceDevelopmentPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Custom Salesforce Development & CRM Integration Services | Webkorps',
      description:
        'Supercharge customer operations with bespoke Salesforce development, custom Apex & LWC components, AppExchange applications, and seamless enterprise ERP integrations.',
      canonicalUrl: 'https://www.webkorps.com/services/salesforce-development',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-salesforce-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#salesforce-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="salesforce-main-content"
        tabIndex={-1}
        className="wk-salesforce-page__main"
      >
        {/* Section 01: Hero Section */}
        <ServiceHero
          badge="Salesforce Solutions"
          titleLine1="Salesforce systems built for"
          titleLine2={
            <>
              revenue{' '}
              <span className="wk-service-hero__title-accent">velocity</span>{' '}
              & scale
            </>
          }
          description="Supercharge your sales, service, and customer operations with bespoke Salesforce development, custom Apex/LWC components, AppExchange apps, and deep ERP integrations."
          ctaText="Discuss Salesforce Needs"
          ctaHref="/contact-us"
        />

        {/* Section 02: Business Outcomes */}
        <ServiceOutcomes
          id="salesforce-outcomes"
          title={
            <>
              What Customized <span className="wk-service-outcomes__title-accent">Salesforce Architecture</span> Delivers
            </>
          }
          subtitle="Unlock higher conversion velocity, frictionless rep productivity, and connected enterprise clarity."
          items={SALESFORCE_OUTCOMES}
        />

        {/* Section 03: Core Capabilities */}
        <ServiceCapabilities
          id="salesforce-capabilities"
          title={
            <>
              End-to-End <span className="wk-capabilities__title-accent">Salesforce Development</span>
            </>
          }
          subtitle="From Lightning Web Components to AppExchange ISV launches, our certified developers engineer CRM solutions that scale."
          items={SALESFORCE_CAPABILITIES}
        />

        {/* Section 04: Software for Every Business */}
        <SoftwareForEveryBusiness
          id="salesforce-solutions-every-business"
          titleAccent="Salesforce Solutions"
          titleRest="for Every Business."
          subtitle="Tailored Salesforce ecosystems that accelerate sales velocity and customer retention."
          items={SALESFORCE_SOLUTIONS}
        />

        {/* Section 05: Proven Delivery Process */}
        <ProvenDeliveryProcess />

        {/* Section 06: Salesforce Ecosystem Tech */}
        <TechnologyExpertise
          titlePart1="Salesforce"
          titlePart2="Ecosystem"
          subtitle="We work across the entire Salesforce product suite, developer toolkits, and middleware connectors."
        />

        {/* Section 07: Real Businesses. Real Impact. */}
        <RealBusinessesRealImpact />

        {/* Section 08: Domain-Specific Solutions */}
        <DomainSpecificSolutions
          id="salesforce-domain-solutions"
          title={
            <>
              Salesforce Ecosystems{' '}
              <span className="wk-domain-sol__title-accent">Tailored to Industry Demands</span>
            </>
          }
          subtitle="We architect certified Salesforce CRM platforms engineered for deep industry compliance, high user adoption, and rapid sales velocity."
          engineeringLabel="Webkorps Salesforce Engineering"
          domains={SALESFORCE_DOMAINS}
        />

        {/* Section 09: Trusted by Fast-Growing Companies */}
        <BrandTrustStrip variant="services" />

        {/* Section 09: Client Testimonials */}
        <ClientTestimonials />

        {/* Section 10 & 11: Frequently Asked Questions & Still Have Questions? */}
        <FAQ
          id="salesforce-faq"
          title={
            <>
              Frequently Asked <span className="wk-faq__title-accent">Questions</span>
            </>
          }
          subtitle="Clear answers about developer certifications, governor limit design, migrations, and support."
          items={SALESFORCE_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Ready to optimize your Salesforce org?',
            desc: "Speak with our certified Salesforce architects to evaluate your customization and integration requirements.",
            buttonText: 'Book a Salesforce Consultation',
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

