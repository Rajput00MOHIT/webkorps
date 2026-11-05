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
  CLOUD_APP_OUTCOMES,
  CLOUD_APP_CAPABILITIES,
  CLOUD_APP_SOLUTIONS,
  CLOUD_APP_DOMAINS,
  CLOUD_APP_FAQS,
} from './cloudApplicationDevelopmentData';
import './CloudApplicationDevelopmentPage.css';

export const CloudApplicationDevelopmentPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Cloud Application Development & DevOps Services | Webkorps',
      description:
        'Modernize infrastructure, automate continuous delivery, and engineer elastic, secure cloud-native architectures across AWS, Azure, and Google Cloud.',
      canonicalUrl: 'https://www.webkorps.com/services/cloud-application-development',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-cloud-app-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#cloud-app-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="cloud-app-main-content"
        tabIndex={-1}
        className="wk-cloud-app-page__main"
      >
        {/* Section 01: Hero Section */}
        <ServiceHero
          badge="Cloud Solutions"
          titleLine1="Cloud platforms built for"
          titleLine2={
            <>
              maximum{' '}
              <span className="wk-service-hero__title-accent">resilience</span>{' '}
              & scale
            </>
          }
          description="Modernize legacy infrastructure, automate continuous delivery, and engineer elastic, secure cloud-native architectures across AWS, Azure, and Google Cloud."
          ctaText="Discuss Cloud Strategy"
          ctaHref="/contact-us"
        />

        {/* Section 02: Business Outcomes */}
        <ServiceOutcomes
          id="cloud-app-outcomes"
          title={
            <>
              What Modern <span className="wk-service-outcomes__title-accent">Cloud Architecture</span> Delivers
            </>
          }
          subtitle="Empower your systems with elasticity, enterprise security, and continuous deployment velocity."
          items={CLOUD_APP_OUTCOMES}
        />

        {/* Section 03: Core Capabilities */}
        <ServiceCapabilities
          id="cloud-app-capabilities"
          title={
            <>
              End-to-End <span className="wk-capabilities__title-accent">Cloud & DevOps</span> Capabilities
            </>
          }
          subtitle="From cloud migration to Kubernetes orchestration, we engineer modern cloud environments built to perform."
          items={CLOUD_APP_CAPABILITIES}
        />

        {/* Section 04: Software for Every Business */}
        <SoftwareForEveryBusiness
          id="cloud-solutions-every-business"
          titleAccent="Cloud Solutions"
          titleRest="for Every Business."
          subtitle="Scalable cloud-native architectures engineered for performance, security, and global reach."
          items={CLOUD_APP_SOLUTIONS}
        />

        {/* Section 05: Proven Delivery Process */}
        <ProvenDeliveryProcess />

        {/* Section 06: Future-Ready Cloud Stack */}
        <TechnologyExpertise
          titlePart1="Cloud & DevOps"
          titlePart2="Ecosystem"
          subtitle="We partner with leading cloud providers and leverage industry-standard infrastructure-as-code tools."
        />

        {/* Section 07: Real Businesses. Real Impact. */}
        <RealBusinessesRealImpact />

        {/* Section 08: Domain-Specific Solutions */}
        <DomainSpecificSolutions
          id="cloud-domain-solutions"
          title={
            <>
              Cloud Infrastructure for{' '}
              <span className="wk-domain-sol__title-accent">Industry-Specific Workloads</span>
            </>
          }
          subtitle="We engineer secure, compliant cloud architectures built to meet strict industry regulations and operational performance goals."
          engineeringLabel="Webkorps Cloud Engineering"
          domains={CLOUD_APP_DOMAINS}
        />

        {/* Section 09: Trusted by Fast-Growing Companies */}
        <BrandTrustStrip variant="services" />

        {/* Section 09: Client Testimonials */}
        <ClientTestimonials />

        {/* Section 10 & 11: Frequently Asked Questions & Still Have Questions? */}
        <FAQ
          id="cloud-app-faq"
          title={
            <>
              Frequently Asked <span className="wk-faq__title-accent">Questions</span>
            </>
          }
          subtitle="Clear answers about cloud migration, security architectures, cost optimization, and SLAs."
          items={CLOUD_APP_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Ready to modernize your cloud?',
            desc: "Let's review your current infrastructure and outline a clear modernization roadmap.",
            buttonText: 'Book a Cloud Consultation',
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

