'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { CustomSoftwareHero } from '../../sections/custom-software/CustomSoftwareHero';
import { OurChallenge } from '../../sections/custom-software/OurChallenge';
import { CustomSoftwareServices } from '../../sections/custom-software/CustomSoftwareServices';
import { SoftwareForEveryBusiness } from '../../sections/custom-software/SoftwareForEveryBusiness';
import { ProvenDeliveryProcess } from '../../sections/custom-software/ProvenDeliveryProcess';
import { TechnologyExpertise } from '../../sections/technologies/TechnologyExpertise/TechnologyExpertise';
import { RealBusinessesRealImpact } from '../../sections/custom-software/RealBusinessesRealImpact';
import { IndustrySolutionsForGrowth } from '../../sections/custom-software/IndustrySolutionsForGrowth';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { CustomSoftwareFAQ } from '../../sections/custom-software/CustomSoftwareFAQ';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import './CustomSoftwareDevelopmentPage.css';

export const CustomSoftwareDevelopmentPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Custom Software Development Services | Webkorps',
      description:
        'From idea to development, we build tailored software solutions that help you scale, streamline operations, and create new business opportunities.',
      canonicalUrl: 'https://www.webkorps.com/services/custom-software-development',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-custom-software-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#custom-software-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="custom-software-main-content"
        tabIndex={-1}
        className="wk-custom-software-page__main"
      >
        {/* Hero Section with Reused HeroBackground */}
        <CustomSoftwareHero />

        {/* Section 02: Our Challenge */}
        <OurChallenge />

        {/* Section 03: Custom Software Development Services */}
        <CustomSoftwareServices />

        {/* Section 04: Software for Every Business */}
        <SoftwareForEveryBusiness />

        {/* Section 05: A Proven Delivery Process */}
        <ProvenDeliveryProcess />

        {/* Section 06: Future-Ready Technology */}
        <TechnologyExpertise
          titlePart1="Future-Ready"
          titlePart2="Technology"
          subtitle="We use reliable, modern technologies to build secure, scalable software."
        />

        {/* Section 07: Real Businesses. Real Impact. */}
        <RealBusinessesRealImpact />

        {/* Section 08: Industry Solutions for Growth */}
        <IndustrySolutionsForGrowth />

        {/* Section 09: Trusted by Fast-Growing Companies Around the World */}
        <BrandTrustStrip variant="services" />

        {/* Section 10: What Our Clients Say About Us */}
        <ClientTestimonials />

        {/* Section 11 & 12: Frequently Asked Questions & Still Have Questions? */}
        <CustomSoftwareFAQ />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Bottom Mega-Menu Navigation */}
      <BottomNavigation />
    </div>
  );
};

