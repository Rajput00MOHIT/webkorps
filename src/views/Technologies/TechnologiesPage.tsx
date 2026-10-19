'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { TechnologiesHero } from '../../sections/technologies/TechnologiesHero/TechnologiesHero';
import { CoreTechnologies } from '../../sections/technologies/CoreTechnologies/CoreTechnologies';
import { DevelopmentApproach } from '../../sections/technologies/DevelopmentApproach/DevelopmentApproach';
import { OurOfferings } from '../../sections/technologies/OurOfferings/OurOfferings';
import { TechnologyExpertise } from '../../sections/technologies/TechnologyExpertise/TechnologyExpertise';
import { NeedPartnerCallout } from '../../sections/home/NeedPartnerCallout/NeedPartnerCallout';
import { ServicesIndustries } from '../../sections/services/ServicesIndustries/ServicesIndustries';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { FAQ } from '../../sections/home/FAQ/FAQ';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import './TechnologiesPage.css';

export const TechnologiesPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Modern Tech Stacks & Engineering Solutions | Webkorps',
      description:
        'Developing high-performance systems powered by modern tech stacks. End-to-end development from frontend to backend and cloud, built on scalable and maintainable architectures.',
      canonicalUrl: 'https://www.webkorps.com/technologies'
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-technologies-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#technologies-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main id="technologies-main-content" tabIndex={-1} className="wk-technologies-page__main">
        {/* Technologies Hero Section (Figma node 2253-1234) */}
        <TechnologiesHero />

        {/* Core Technologies We Work With (Figma node 2255-1410) */}
        <CoreTechnologies />

        {/* Development Approach (Phase 6) */}
        <DevelopmentApproach />

        {/* Our Offerings */}
        <OurOfferings />

        {/* Technology Expertise (Figma node 2262-1423) */}
        <TechnologyExpertise />

        {/* Big Ideas Deserve Better Technology Callout */}
        <NeedPartnerCallout />

        {/* Industries We Empower Section */}
        <ServicesIndustries />

        {/* Reused: Trusted by Fast Growing */}
        <BrandTrustStrip variant="services" />

        {/* Reused: What Our Clients Say About Us */}
        <ClientTestimonials />

        {/* Reused: FAQ & Still Have Questions */}
        <FAQ />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Bottom Mega-Menu Navigation */}
      <BottomNavigation />
    </div>
  );
};
