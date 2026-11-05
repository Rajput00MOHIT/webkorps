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
  WEB_DEV_OUTCOMES,
  WEB_DEV_CAPABILITIES,
  WEB_DEV_SOLUTIONS,
  WEB_DEV_DOMAINS,
  WEB_DEV_FAQS,
} from './webDevelopmentData';
import './WebDevelopmentPage.css';

export const WebDevelopmentPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Web Development Services | Custom Web Applications | Webkorps',
      description:
        'Build fast, secure, and scalable web applications tailored to your business goals: React, Next.js, enterprise portals, full-stack APIs, and cloud-native web platforms.',
      canonicalUrl: 'https://www.webkorps.com/services/web-development',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-web-dev-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#web-dev-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="web-dev-main-content"
        tabIndex={-1}
        className="wk-web-dev-page__main"
      >
        {/* Section 01: Hero Section */}
        <ServiceHero
          badge="Web Development"
          titleLine1="Web platforms that drive"
          titleLine2={
            <>
              real{' '}
              <span className="wk-service-hero__title-accent">business</span>{' '}
              growth
            </>
          }
          description="From modern responsive web applications to enterprise cloud portals, we architect high-performance web platforms tailored to your operational goals."
          ctaText="Discuss Your Web Project"
          ctaHref="/contact-us"
        />

        {/* Section 02: Business Outcomes */}
        <ServiceOutcomes
          id="web-dev-outcomes"
          title={
            <>
              What Modern <span className="wk-service-outcomes__title-accent">Web Engineering</span> Delivers
            </>
          }
          subtitle="Empower your brand with high-performance web architecture engineered for speed, conversions, and seamless scalability."
          items={WEB_DEV_OUTCOMES}
        />

        {/* Section 03: Core Capabilities */}
        <ServiceCapabilities
          id="web-dev-capabilities"
          title={
            <>
              Comprehensive <span className="wk-capabilities__title-accent">Web Development</span> Capabilities
            </>
          }
          subtitle="From concept to continuous deployment, we engineer resilient web platforms that scale with your growth."
          items={WEB_DEV_CAPABILITIES}
        />

        {/* Section 04: Software for Every Business */}
        <SoftwareForEveryBusiness
          id="web-solutions-every-business"
          titleAccent="Web Solutions"
          titleRest="for Every Business."
          subtitle="Tailored web platforms engineered for every business model and operational need."
          items={WEB_DEV_SOLUTIONS}
        />

        {/* Section 05: Proven Delivery Process */}
        <ProvenDeliveryProcess />

        {/* Section 06: Future-Ready Technology */}
        <TechnologyExpertise
          titlePart1="Future-Ready"
          titlePart2="Technology"
          subtitle="We use reliable, modern web frameworks and cloud infrastructure to build secure, scalable solutions."
        />

        {/* Section 07: Real Businesses. Real Impact. */}
        <RealBusinessesRealImpact />

        {/* Section 08: Domain-Specific Solutions */}
        <DomainSpecificSolutions
          id="web-domain-solutions"
          title={
            <>
              Web Solutions Built for{' '}
              <span className="wk-domain-sol__title-accent">Industry Requirements</span>
            </>
          }
          subtitle="We architect compliant, high-performance web applications tailored to the precise operational demands of each industry sector."
          engineeringLabel="Webkorps Web Engineering"
          domains={WEB_DEV_DOMAINS}
        />

        {/* Section 09: Trusted by Fast-Growing Companies */}
        <BrandTrustStrip variant="services" />

        {/* Section 10: Client Testimonials */}
        <ClientTestimonials />

        {/* Section 11 & 12: Frequently Asked Questions & Still Have Questions? */}
        <FAQ
          id="web-dev-faq"
          title={
            <>
              Frequently Asked <span className="wk-faq__title-accent">Questions</span>
            </>
          }
          subtitle="Got questions about web development? Here are clear answers to common inquiries."
          items={WEB_DEV_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Have a project in mind?',
            desc: "Let's discuss how our web development team can help bring your digital vision to life.",
            buttonText: 'Book a Consultation',
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

