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
  ENTERPRISE_SOFTWARE_OUTCOMES,
  ENTERPRISE_SOFTWARE_CAPABILITIES,
  ENTERPRISE_SOFTWARE_SOLUTIONS,
  ENTERPRISE_SOFTWARE_DOMAINS,
  ENTERPRISE_SOFTWARE_FAQS,
} from './enterpriseSoftwareData';
import './EnterpriseSoftwareDevelopmentPage.css';

export const EnterpriseSoftwareDevelopmentPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Enterprise Software Development Services | Webkorps',
      description:
        'Streamline mission-critical workflows, unify distributed systems, and build scalable digital infrastructure tailored to complex enterprise demands.',
      canonicalUrl: 'https://www.webkorps.com/services/enterprise-software-development',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-enterprise-software-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#enterprise-software-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="enterprise-software-main-content"
        tabIndex={-1}
        className="wk-enterprise-software-page__main"
      >
        {/* Section 01: Hero Section */}
        <ServiceHero
          badge="Enterprise Software"
          titleLine1="Enterprise platforms built for"
          titleLine2={
            <>
              complex{' '}
              <span className="wk-service-hero__title-accent">operations</span>{' '}
              & scale
            </>
          }
          description="Streamline mission-critical workflows, unify distributed systems, and build scalable digital infrastructure tailored to complex enterprise demands."
          ctaText="Discuss Enterprise Needs"
          ctaHref="/contact-us"
        />

        {/* Section 02: Business Outcomes */}
        <ServiceOutcomes
          id="enterprise-outcomes"
          title={
            <>
              What the <span className="wk-service-outcomes__title-accent">Right Enterprise Software</span> Delivers
            </>
          }
          subtitle="Empower large-scale organizations with unified visibility, automated operations, and resilient technology."
          items={ENTERPRISE_SOFTWARE_OUTCOMES}
        />

        {/* Section 03: Core Capabilities */}
        <ServiceCapabilities
          id="enterprise-capabilities"
          title={
            <>
              Enterprise-Grade <span className="wk-capabilities__title-accent">Software Engineering</span>
            </>
          }
          subtitle="From bespoke ERP platforms to legacy modernization, we engineer high-performance systems for global enterprises."
          items={ENTERPRISE_SOFTWARE_CAPABILITIES}
        />

        {/* Section 04: Software for Every Business */}
        <SoftwareForEveryBusiness
          id="enterprise-systems-every-business"
          titleAccent="Enterprise Systems"
          titleRest="for Every Business."
          subtitle="Mission-critical software engines engineered to unify operations, data, and global enterprise teams."
          items={ENTERPRISE_SOFTWARE_SOLUTIONS}
        />

        {/* Section 05: Proven Delivery Process */}
        <ProvenDeliveryProcess />

        {/* Section 06: Future-Ready Enterprise Tech */}
        <TechnologyExpertise
          titlePart1="Future-Ready"
          titlePart2="Enterprise Stack"
          subtitle="We engineer solutions with proven enterprise frameworks, distributed databases, and high-security standards."
        />

        {/* Section 07: Real Businesses. Real Impact. */}
        <RealBusinessesRealImpact />

        {/* Section 08: Domain-Specific Solutions */}
        <DomainSpecificSolutions
          id="enterprise-domain-solutions"
          title={
            <>
              Enterprise Platforms for{' '}
              <span className="wk-domain-sol__title-accent">Sector-Specific Operations</span>
            </>
          }
          subtitle="We engineer mission-critical enterprise systems designed to unify complex industrial workflows, data governance, and regulatory requirements."
          engineeringLabel="Webkorps Enterprise Engineering"
          domains={ENTERPRISE_SOFTWARE_DOMAINS}
        />

        {/* Section 09: Trusted by Fast-Growing Companies */}
        <BrandTrustStrip variant="services" />

        {/* Section 10: Client Testimonials */}
        <ClientTestimonials />

        {/* Section 11 & 12: Frequently Asked Questions & Still Have Questions? */}
        <FAQ
          id="enterprise-software-faq"
          title={
            <>
              Frequently Asked <span className="wk-faq__title-accent">Questions</span>
            </>
          }
          subtitle="Everything you need to know about enterprise architecture, integrations, security, and SLAs."
          items={ENTERPRISE_SOFTWARE_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Need a custom enterprise solution?',
            desc: "Speak with our enterprise architects to explore how we can optimize your operational infrastructure.",
            buttonText: 'Book an Architecture Session',
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

