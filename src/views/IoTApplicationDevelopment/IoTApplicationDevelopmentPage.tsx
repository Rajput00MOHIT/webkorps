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
  IOT_APP_OUTCOMES,
  IOT_APP_CAPABILITIES,
  IOT_APP_SOLUTIONS,
  IOT_APP_DOMAINS,
  IOT_APP_FAQS,
} from './iotApplicationDevelopmentData';
import './IoTApplicationDevelopmentPage.css';

export const IoTApplicationDevelopmentPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'IoT Application Development & Smart Device Solutions | Webkorps',
      description:
        'Connect smart devices, analyze real-time telemetry at the edge, and engineer secure, scalable IoT ecosystems across industrial and consumer platforms.',
      canonicalUrl: 'https://www.webkorps.com/services/iot-application-development',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-iot-app-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#iot-app-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="iot-app-main-content"
        tabIndex={-1}
        className="wk-iot-app-page__main"
      >
        {/* Section 01: Hero Section */}
        <ServiceHero
          badge="IoT Solutions"
          titleLine1="IoT ecosystems built for"
          titleLine2={
            <>
              connected{' '}
              <span className="wk-service-hero__title-accent">intelligence</span>{' '}
              & scale
            </>
          }
          description="Connect smart devices, analyze real-time telemetry at the edge, and engineer secure, scalable IoT ecosystems that transform physical operations into digital intelligence."
          ctaText="Discuss IoT Architecture"
          ctaHref="/contact-us"
        />

        {/* Section 02: Business Outcomes */}
        <ServiceOutcomes
          id="iot-app-outcomes"
          title={
            <>
              What the <span className="wk-service-outcomes__title-accent">Right IoT Solution</span> Unlocks
            </>
          }
          subtitle="Turn raw sensor signals into actionable operational clarity, predictive maintenance, and autonomous efficiency."
          items={IOT_APP_OUTCOMES}
        />

        {/* Section 03: Core Capabilities */}
        <ServiceCapabilities
          id="iot-app-capabilities"
          title={
            <>
              Comprehensive <span className="wk-capabilities__title-accent">IoT Engineering</span> Capabilities
            </>
          }
          subtitle="From embedded edge firmware to cloud telemetry data pipelines, we engineer complete IoT ecosystems."
          items={IOT_APP_CAPABILITIES}
        />

        {/* Section 04: Software for Every Business */}
        <SoftwareForEveryBusiness
          id="iot-solutions-every-business"
          titleAccent="IoT Systems"
          titleRest="for Every Business."
          subtitle="Connected device ecosystems, edge computing, and real-time telemetry platforms."
          items={IOT_APP_SOLUTIONS}
        />

        {/* Section 05: Proven Delivery Process */}
        <ProvenDeliveryProcess />

        {/* Section 06: Future-Ready IoT Stack */}
        <TechnologyExpertise
          titlePart1="IoT & Edge"
          titlePart2="Technology Stack"
          subtitle="We engineer connected solutions utilizing proven IoT protocols, cloud brokers, and time-series engines."
        />

        {/* Section 07: Real Businesses. Real Impact. */}
        <RealBusinessesRealImpact />

        {/* Section 08: Domain-Specific Solutions */}
        <DomainSpecificSolutions
          id="iot-domain-solutions"
          title={
            <>
              Connected IoT Solutions{' '}
              <span className="wk-domain-sol__title-accent">Across Industries</span>
            </>
          }
          subtitle="From factory shop-floors to smart hospital wards, we deploy resilient IoT architectures tailored to industrial operating environments."
          engineeringLabel="Webkorps IoT Engineering"
          domains={IOT_APP_DOMAINS}
        />

        {/* Section 09: Trusted by Fast-Growing Companies */}
        <BrandTrustStrip variant="services" />

        {/* Section 10: Client Testimonials */}
        <ClientTestimonials />

        {/* Section 11 & 12: Frequently Asked Questions & Still Have Questions? */}
        <FAQ
          id="iot-app-faq"
          title={
            <>
              Frequently Asked <span className="wk-faq__title-accent">Questions</span>
            </>
          }
          subtitle="Learn more about our IoT hardware protocols, cloud architectures, device security, and PoC delivery."
          items={IOT_APP_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Have an IoT hardware or software idea?',
            desc: "Let's review your device specs and outline a secure, scalable connected architecture.",
            buttonText: 'Book an IoT Strategy Session',
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

