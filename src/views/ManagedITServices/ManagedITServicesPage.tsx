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
  MANAGED_IT_OUTCOMES,
  MANAGED_IT_CAPABILITIES,
  MANAGED_IT_SOLUTIONS,
  MANAGED_IT_DOMAINS,
  MANAGED_IT_FAQS,
} from './managedITServicesData';
import './ManagedITServicesPage.css';

export const ManagedITServicesPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Managed IT Services & 24/7 Infrastructure Support | Webkorps',
      description:
        'Proactive 24/7 IT management, cloud operations, network monitoring, helpdesk support, and cybersecurity defense to ensure uninterrupted business continuity.',
      canonicalUrl: 'https://www.webkorps.com/services/managed-it-services',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-managed-it-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#managed-it-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="managed-it-main-content"
        tabIndex={-1}
        className="wk-managed-it-page__main"
      >
        {/* Section 01: Hero Section */}
        <ServiceHero
          badge="Managed IT Services"
          titleLine1="24/7 Managed IT built for"
          titleLine2={
            <>
              total{' '}
              <span className="wk-service-hero__title-accent">uptime</span>{' '}
              & security
            </>
          }
          description="Proactive infrastructure monitoring, cloud operations management, round-the-clock helpdesk, and enterprise cybersecurity to keep your business running smoothly."
          ctaText="Explore Managed IT Plans"
          ctaHref="/contact-us"
        />

        {/* Section 02: Business Outcomes */}
        <ServiceOutcomes
          id="managed-it-outcomes"
          title={
            <>
              Why Organizations Rely on <span className="wk-service-outcomes__title-accent">Webkorps Managed IT</span>
            </>
          }
          subtitle="Eliminate IT fire drills, prevent costly downtime, and maintain continuous operational security."
          items={MANAGED_IT_OUTCOMES}
        />

        {/* Section 03: Core Capabilities */}
        <ServiceCapabilities
          id="managed-it-capabilities"
          title={
            <>
              Proactive <span className="wk-capabilities__title-accent">Managed IT Services</span>
            </>
          }
          subtitle="From 24/7 network monitoring to strategic vCIO roadmapping, we keep your technology infrastructure healthy."
          items={MANAGED_IT_CAPABILITIES}
        />

        {/* Section 04: Software for Every Business */}
        <SoftwareForEveryBusiness
          id="managed-it-every-business"
          titleAccent="Managed IT"
          titleRest="for Every Business."
          subtitle="Proactive infrastructure monitoring, cybersecurity, and 24/7 technical operations."
          items={MANAGED_IT_SOLUTIONS}
        />

        {/* Section 05: Proven Service Delivery Process */}
        <ProvenDeliveryProcess />

        {/* Section 06: Enterprise Platforms & Tools */}
        <TechnologyExpertise
          titlePart1="Supported"
          titlePart2="Platforms & Tools"
          subtitle="We monitor and manage industry-standard cloud providers, operating systems, and enterprise tools."
        />

        {/* Section 07: Real Businesses. Real Impact. */}
        <RealBusinessesRealImpact />

        {/* Section 08: Domain-Specific Solutions */}
        <DomainSpecificSolutions
          id="managed-it-domain-solutions"
          title={
            <>
              Managed IT Services for{' '}
              <span className="wk-domain-sol__title-accent">Regulated Sectors</span>
            </>
          }
          subtitle="We deliver proactive cybersecurity, network monitoring, and helpdesk operations customized to strict regulatory compliance standards."
          engineeringLabel="Webkorps IT Operations"
          domains={MANAGED_IT_DOMAINS}
        />

        {/* Section 09: Trusted by Fast-Growing Companies */}
        <BrandTrustStrip variant="services" />

        {/* Section 09: Client Testimonials */}
        <ClientTestimonials />

        {/* Section 10 & 11: Frequently Asked Questions & Still Have Questions? */}
        <FAQ
          id="managed-it-faq"
          title={
            <>
              Frequently Asked <span className="wk-faq__title-accent">Questions</span>
            </>
          }
          subtitle="Clear answers about coverage hours, response SLAs, co-managed options, and compliance support."
          items={MANAGED_IT_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Ready for hassle-free IT operations?',
            desc: "Let's review your current infrastructure health and recommend a tailored managed service plan.",
            buttonText: 'Book an IT Infrastructure Audit',
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

