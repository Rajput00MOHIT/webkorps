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
  MOBILE_DEV_OUTCOMES,
  MOBILE_DEV_CAPABILITIES,
  MOBILE_DEV_SOLUTIONS,
  MOBILE_DEV_DOMAINS,
  MOBILE_DEV_FAQS,
} from './mobileAppDevelopmentData';
import './MobileAppDevelopmentPage.css';

export const MobileAppDevelopmentPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Mobile App Development Services | iOS & Android Apps | Webkorps',
      description:
        'Deliver intuitive, high-performance mobile experiences across iOS and Android: native Swift & Kotlin, Flutter, React Native, and enterprise mobile solutions.',
      canonicalUrl: 'https://www.webkorps.com/services/mobile-app-development',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-mobile-dev-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#mobile-dev-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="mobile-dev-main-content"
        tabIndex={-1}
        className="wk-mobile-dev-page__main"
      >
        {/* Section 01: Hero Section */}
        <ServiceHero
          badge="Mobile App Development"
          titleLine1="Mobile apps built for"
          titleLine2={
            <>
              deep{' '}
              <span className="wk-service-hero__title-accent">engagement</span>{' '}
              & scale
            </>
          }
          description="Deliver intuitive mobile experiences that captivate users, streamline operations, and connect seamlessly across iOS, Android, and cross-platform ecosystems."
          ctaText="Discuss Your App Project"
          ctaHref="/contact-us"
        />

        {/* Section 02: Business Outcomes */}
        <ServiceOutcomes
          id="mobile-dev-outcomes"
          title={
            <>
              What the <span className="wk-service-outcomes__title-accent">Right Mobile App</span> Delivers
            </>
          }
          subtitle="Transform user engagement, operational mobility, and digital growth with software built for the mobile-first era."
          items={MOBILE_DEV_OUTCOMES}
        />

        {/* Section 03: Core Capabilities */}
        <ServiceCapabilities
          id="mobile-dev-capabilities"
          title={
            <>
              Full-Lifecycle <span className="wk-capabilities__title-accent">Mobile Engineering</span> Capabilities
            </>
          }
          subtitle="From concept and UX design to native coding and App Store deployment, we build apps that stand out."
          items={MOBILE_DEV_CAPABILITIES}
        />

        {/* Section 04: Software for Every Business */}
        <SoftwareForEveryBusiness
          id="mobile-solutions-every-business"
          titleAccent="Mobile Apps"
          titleRest="for Every Business."
          subtitle="Native and cross-platform mobile solutions built to engage users on iOS and Android."
          items={MOBILE_DEV_SOLUTIONS}
        />

        {/* Section 05: Proven Delivery Process */}
        <ProvenDeliveryProcess />

        {/* Section 06: Future-Ready Technology */}
        <TechnologyExpertise
          titlePart1="Future-Ready"
          titlePart2="Mobile Stack"
          subtitle="We leverage native SDKs, modern cross-platform frameworks, and resilient cloud backends."
        />

        {/* Section 07: Real Businesses. Real Impact. */}
        <RealBusinessesRealImpact />

        {/* Section 08: Domain-Specific Solutions */}
        <DomainSpecificSolutions
          id="mobile-domain-solutions"
          title={
            <>
              Mobile Experiences{' '}
              <span className="wk-domain-sol__title-accent">Across Industries</span>
            </>
          }
          subtitle="We craft intuitive, secure mobile applications tailored to industry-specific workflows on iOS and Android."
          engineeringLabel="Webkorps Mobile Engineering"
          domains={MOBILE_DEV_DOMAINS}
        />

        {/* Section 09: Trusted by Fast-Growing Companies */}
        <BrandTrustStrip variant="services" />

        {/* Section 10: Client Testimonials */}
        <ClientTestimonials />

        {/* Section 11 & 12: Frequently Asked Questions & Still Have Questions? */}
        <FAQ
          id="mobile-dev-faq"
          title={
            <>
              Frequently Asked <span className="wk-faq__title-accent">Questions</span>
            </>
          }
          subtitle="Everything you need to know about our mobile development process, platforms, and security."
          items={MOBILE_DEV_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Ready to build your mobile app?',
            desc: "Let's turn your vision into an App Store success with a tailored strategy session.",
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

