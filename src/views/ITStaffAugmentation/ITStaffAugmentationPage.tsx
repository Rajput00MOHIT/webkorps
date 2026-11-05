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
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { FAQ } from '../../sections/home/FAQ/FAQ';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import {
  IT_STAFF_OUTCOMES,
  IT_STAFF_CAPABILITIES,
  IT_STAFF_SOLUTIONS,
  IT_STAFF_FAQS,
} from './itStaffAugmentationData';
import './ITStaffAugmentationPage.css';

export const ITStaffAugmentationPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'IT Staff Augmentation Services | Hire Dedicated Developers | Webkorps',
      description:
        'Scale your engineering capacity instantly with pre-vetted senior software developers, QA engineers, and dedicated squads tailored to your tech stack.',
      canonicalUrl: 'https://www.webkorps.com/services/it-staff-augmentation',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-it-staff-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#it-staff-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="it-staff-main-content"
        tabIndex={-1}
        className="wk-it-staff-page__main"
      >
        {/* Section 01: Hero Section */}
        <ServiceHero
          badge="IT Staff Augmentation"
          titleLine1="Top engineering talent on demand"
          titleLine2={
            <>
              pre-vetted for{' '}
              <span className="wk-service-hero__title-accent">speed</span>{' '}
              & impact
            </>
          }
          description="Scale your engineering capacity instantly with pre-vetted, high-performing software engineers, tech leads, and dedicated cross-functional squads tailored to your tech stack."
          ctaText="Hire Dedicated Developers"
          ctaHref="/contact-us"
        />

        {/* Section 02: Business Outcomes */}
        <ServiceOutcomes
          id="it-staff-outcomes"
          title={
            <>
              Why Fast-Growing Companies <span className="wk-service-outcomes__title-accent">Augment with Webkorps</span>
            </>
          }
          subtitle="Skip lengthy recruiting cycles, eliminate hiring overhead, and onboard senior engineering talent in days."
          items={IT_STAFF_OUTCOMES}
        />

        {/* Section 03: Core Capabilities */}
        <ServiceCapabilities
          id="it-staff-capabilities"
          title={
            <>
              On-Demand <span className="wk-capabilities__title-accent">Talent Specializations</span>
            </>
          }
          subtitle="Access senior engineers across all modern technology stacks ready to integrate directly into your sprint cycles."
          items={IT_STAFF_CAPABILITIES}
        />

        {/* Section 04: Software for Every Business */}
        <SoftwareForEveryBusiness
          id="it-staff-every-business"
          titleAccent="Tech Talent"
          titleRest="for Every Business."
          subtitle="Flexible, high-caliber engineering talent to scale your technology teams on demand."
          items={IT_STAFF_SOLUTIONS}
        />

        {/* Section 05: Proven Onboarding Process */}
        <ProvenDeliveryProcess />

        {/* Section 06: Supported Technologies */}
        <TechnologyExpertise
          titlePart1="Supported"
          titlePart2="Technologies"
          subtitle="Our augmented developers possess verified commercial experience across leading enterprise languages, frameworks, and cloud platforms."
        />

        {/* Section 07: Real Businesses. Real Impact. */}
        <RealBusinessesRealImpact />

        {/* Section 08: Trusted by Fast-Growing Companies */}
        <BrandTrustStrip variant="services" />

        {/* Section 09: Client Testimonials */}
        <ClientTestimonials />

        {/* Section 10 & 11: Frequently Asked Questions & Still Have Questions? */}
        <FAQ
          id="it-staff-faq"
          title={
            <>
              Frequently Asked <span className="wk-faq__title-accent">Questions</span>
            </>
          }
          subtitle="Everything you need to know about vetting standards, onboarding timelines, IP ownership, and trials."
          items={IT_STAFF_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Need to scale your team quickly?',
            desc: "Tell us your required roles, tech stack, and timezone requirements—we will match top candidates within 48 hours.",
            buttonText: 'Request Developer Profiles',
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

