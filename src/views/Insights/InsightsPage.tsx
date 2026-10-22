'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { InsightsHero } from '../../sections/insights/InsightsHero/InsightsHero';
import { FeaturedArticle } from '../../sections/insights/FeaturedArticle/FeaturedArticle';
import { OurInsights } from '../../sections/insights/OurInsights/OurInsights';
import { WomenInLeadership } from '../../sections/insights/WomenInLeadership/WomenInLeadership';
import { InsightsQuote } from '../../sections/insights/InsightsQuote/InsightsQuote';
import { RecentEvent } from '../../sections/insights/RecentEvent/RecentEvent';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import './InsightsPage.css';

/**
 * Insights Landing Page Component
 * Source of Truth: Insights.pdf (9-Section Strict Structural Sequence)
 *
 * Section Sequence:
 * 1. Insights Hero — "Thought Leadership & Industry Insights"
 * 2. Featured Article — "A Practical AI Operations Framework"
 * 3. Our Insights — Inclusive Culture, Our Leadership, Infrastructure, CSR
 * 4. Women in Leadership — "Women in Leadership at Webkorps"
 * 5. Quote — "Data is only valuable when it drives decisions insights make that possible."
 * 6. Recent Event — "We are part of CES 2026 Webkorps"
 * 7. Trusted by Fast-Growing Companies (Reused: BrandTrustStrip variant="services")
 * 8. What Our Clients Say About Us (Reused: ClientTestimonials)
 * 9. Existing Closing CTA & Footer (Reused: Footer)
 * + Global Header & BottomNavigation
 */
export const InsightsPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Thought Leadership & Industry Insights | Webkorps',
      description:
        'Explore industry trends, expert perspectives, and innovative ideas shaping the future of business. Practical frameworks, leadership insights, and technology solutions.',
      canonicalUrl: 'https://www.webkorps.com/insights',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-insights-page-wrapper">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      {/* Accessible skip link */}
      <a href="#insights-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area — Strict 9-Section Sequence per Insights.pdf */}
      <main id="insights-main-content" tabIndex={-1} className="wk-insights-page__main">
        {/* Section 1: Insights Hero */}
        <InsightsHero />

        {/* Section 2: Featured Article */}
        <FeaturedArticle />

        {/* Section 3: Our Insights */}
        <OurInsights />

        {/* Section 4: Women in Leadership */}
        <WomenInLeadership />

        {/* Section 5: Quote */}
        <InsightsQuote />

        {/* Section 6: Recent Event */}
        <RecentEvent />

        {/* Section 7: Trusted by Fast-Growing Companies (Shared Component) */}
        <BrandTrustStrip variant="services" />

        {/* Section 8: What Our Clients Say About Us (Shared Component) */}
        <ClientTestimonials />
      </main>

      {/* Section 9: Closing CTA, Directory Navigation, Locations & Legal (Shared Component) */}
      <Footer />

      {/* Bottom Mega-Menu Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default InsightsPage;
