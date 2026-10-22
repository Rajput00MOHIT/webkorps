'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { CaseStudiesHero } from '../../sections/case-studies/CaseStudiesHero/CaseStudiesHero';
import { CaseStudiesGrid } from '../../sections/case-studies/CaseStudiesGrid/CaseStudiesGrid';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { FAQ } from '../../sections/home/FAQ/FAQ';
import { NeedPartnerCallout } from '../../sections/home/NeedPartnerCallout/NeedPartnerCallout';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import './CaseStudiesPage.css';

/**
 * Case Studies Page View
 * Source of Truth: Figma node 2310-6946 & Case Studies.pdf
 *
 * Sequence of Sections:
 * 1. Global Header
 * 2. Case Studies Hero (reusing exact Insights hero grid background)
 * 3. Case Studies Grid (with working Industry and App Type filters)
 * 4. Trusted by Fast-Growing Brands (reusing BrandTrustStrip with slightly enlarged logos)
 * 5. What Our Clients Say About Us (reusing ClientTestimonials)
 * 6. FAQ (reusing FAQ section)
 * 7. Still Have Questions? / Ready to get started (reusing NeedPartnerCallout)
 * 8. Closing Footer
 * 9. Floating Bottom Navigation
 */
export const CaseStudiesPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Case Studies of Digital Products | Webkorps',
      description:
        'Explore case studies of digital products that solve real business problems across Healthcare, Retail, Fintech, Supply Chain, and Enterprise systems.',
      canonicalUrl: 'https://www.webkorps.com/case-studies',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-case-studies-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#case-studies-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="case-studies-main-content"
        tabIndex={-1}
        className="wk-case-studies-page__main"
      >
        {/* Section 1: Hero */}
        <CaseStudiesHero />

        {/* Section 2: Case Studies Grid with Filter Controls */}
        <CaseStudiesGrid />

        {/* Section 3: Trusted by Fast-Growing Brands (Enlarged Logo Variant) */}
        <BrandTrustStrip variant="case-studies" />

        {/* Section 4: What Our Clients Say About Us */}
        <ClientTestimonials />

        {/* Section 5: FAQ */}
        <FAQ />

        {/* Section 6: Still Have Questions? (Callout CTA) */}
        <NeedPartnerCallout />
      </main>

      {/* Section 7: Footer */}
      <Footer />

      {/* Bottom Mega-Menu Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default CaseStudiesPage;
