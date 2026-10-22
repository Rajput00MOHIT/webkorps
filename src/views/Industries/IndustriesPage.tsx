'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { IndustriesHero } from '../../sections/industries/IndustriesHero/IndustriesHero';
import { IndustriesList } from '../../sections/industries/IndustriesList/IndustriesList';
import { DevelopmentApproach } from '../../sections/technologies/DevelopmentApproach/DevelopmentApproach';
import { TechnologyExpertise } from '../../sections/technologies/TechnologyExpertise/TechnologyExpertise';
import { NeedPartnerCallout } from '../../sections/home/NeedPartnerCallout/NeedPartnerCallout';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import './IndustriesPage.css';

/**
 * Industries Page View
 * Source of Truth: Figma node 2326-6981 & reference screenshots
 * Layout:
 * 1. Global Header
 * 2. Industries Hero (with blueprint grid & interactive elements)
 * 3. Industries We Empower List (9 alternating rows)
 * 4. Development Approach (6-step process from Technologies page)
 * 5. Technology Expertise (interactive tech stack tabs from Technologies page)
 * 6. Big Ideas Deserve / CTA Card (NeedPartnerCallout)
 * 7. Closing Footer
 * 8. Floating Bottom Navigation
 */
export const IndustriesPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Industries | Webkorps - Tech Solutions Driving Transformation',
      description:
        'Explore how we have helped organizations innovate, optimize operations, and achieve growth through technology across Healthcare, Retail, Logistics, Manufacturing, and Fintech.',
      canonicalUrl: 'https://www.webkorps.com/industries',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-industries-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#industries-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="industries-main-content"
        tabIndex={-1}
        className="wk-industries-page__main"
      >
        <IndustriesHero />
        <IndustriesList />
        <DevelopmentApproach />
        <TechnologyExpertise />
        <NeedPartnerCallout />
      </main>

      {/* Closing Footer */}
      <Footer />

      {/* Bottom Mega-Menu Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default IndustriesPage;
