'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { ServicesHero } from '../../sections/services/ServicesHero/ServicesHero';
import { ServicesGrid } from '../../sections/services/ServicesGrid/ServicesGrid';
import { AgileWorkflow } from '../../sections/services/AgileWorkflow/AgileWorkflow';
import { ServicesIndustries } from '../../sections/services/ServicesIndustries/ServicesIndustries';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { FAQ } from '../../sections/home/FAQ/FAQ';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Digital Services & Engineering Solutions | Webkorps',
      description:
        'Powering your business with digital services built for growth and innovation. Custom software, AI & ML, cloud applications, mobile and enterprise development.',
      canonicalUrl: 'https://www.webkorps.com/services'
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-services-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#services-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main id="services-main-content" tabIndex={-1} className="wk-services-page__main">
        {/* Phase 1: Services Hero Section */}
        <ServicesHero />
        {/* Phase 2: Services Grid Section */}
        <ServicesGrid />
        {/* Phase 3: Agile Workflows Section */}
        <AgileWorkflow />
        {/* Phase 4: Industries We Empower Section */}
        <ServicesIndustries />
        {/* Phase 4 Reused: Trusted By Fast Growing */}
        <BrandTrustStrip variant="services" />
        {/* Phase 4 Reused: What Our Clients Say About Us */}
        <ClientTestimonials />
        {/* Phase 4 Reused: FAQ & Still Have Questions */}
        <FAQ />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Bottom Mega-Menu Navigation */}
      <BottomNavigation />
    </div>
  );
};
