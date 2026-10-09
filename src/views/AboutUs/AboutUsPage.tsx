'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { AboutHero } from '../../sections/about/AboutHero/AboutHero';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { AboutOverview } from '../../sections/about/AboutOverview/AboutOverview';
import { TrustedPartner } from '../../sections/about/TrustedPartner/TrustedPartner';
import { HowWeWork } from '../../sections/about/HowWeWork/HowWeWork';
import { AboutInsights } from '../../sections/about/AboutInsights/AboutInsights';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { FAQ } from '../../sections/home/FAQ/FAQ';
import { Milestones } from '../../sections/about/Milestones/Milestones';
import { OurValues } from '../../sections/about/OurValues/OurValues';
import { AboutCTA } from '../../sections/about/AboutCTA/AboutCTA';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import './AboutUsPage.css';

export const AboutUsPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'About Us | Webkorps - Engineering Digital Transformation',
      description: 'Explore the milestones, achievements, and moments that define the WebKorps journey. Turning technology into growth opportunities for your business.',
      canonicalUrl: 'https://www.webkorps.com/about-us'
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#about-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main id="about-main-content" tabIndex={-1} className="wk-about-page__main">
        {/* 1. About Us Hero */}
        <AboutHero />
        {/* 2. Trusted Technology Partner */}
        <TrustedPartner />
        {/* 3. About Webkorps Media Animation */}
        <AboutOverview />
        {/* 4. Interactive Milestones Timeline */}
        <Milestones />
        {/* 5. Ready to Build What's Next (Let's Talk CTA Card) */}
        <AboutCTA />
        {/* 6. Our Values, Our Foundation */}
        <OurValues />
        {/* 7. How We Work Interactive Wizard */}
        <HowWeWork />
        {/* 8. Our Insights */}
        <AboutInsights />
        {/* 9. Trusted Technology Brands Strip */}
        <BrandTrustStrip />
        {/* 10. Client Testimonials 3-Row Infinite Marquee */}
        <ClientTestimonials />
        {/* 11. Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Bottom Mega-Menu Navigation */}
      <BottomNavigation />
    </div>
  );
};
