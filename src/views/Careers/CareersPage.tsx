'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { CareersHero } from '../../sections/careers/CareersHero/CareersHero';
import { WhatWeValueMost } from '../../sections/careers/WhatWeValueMost/WhatWeValueMost';
import { InsightsQuote } from '../../sections/insights/InsightsQuote/InsightsQuote';
import { OurHiringProcess } from '../../sections/careers/OurHiringProcess/OurHiringProcess';
import { WhyWebkorps } from '../../sections/careers/WhyWebkorps/WhyWebkorps';
import { WomenInLeadership } from '../../sections/insights/WomenInLeadership/WomenInLeadership';
import businessImg from '../../assets/Career /busniess.png';
import { OurInsights } from '../../sections/insights/OurInsights/OurInsights';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { FAQ } from '../../sections/home/FAQ/FAQ';
import { FAQ_DATA } from '../../sections/home/FAQ/faqData';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import './CareersPage.css';

// Approved company-focused FAQs relevant to candidates (excluding unrelated client service FAQs)
const CAREERS_FAQ_DATA = FAQ_DATA.filter((item) =>
  ['founded', 'locations', 'mission', 'team-size'].includes(item.id)
);

/**
 * Careers Page View
 * Source of Truth: Figma node 2333-7004, node 1233-12945, node 1233-12971, node 1233-12979, node 1233-13051, node 1233-13094 & reference screenshots
 * Layout:
 * 1. Global Header
 * 2. Careers Hero (with architectural blueprint grid and Figma display elements)
 * 3. What We Value Most (3 value cards with large decorative numbers)
 * 4. Careers Quote (reused from InsightsQuote with custom text)
 * 5. Our Hiring Process (2-column layout with 3D illustration and interactive 5-step accordion)
 * 6. Why Webkorps (5 cards with geometric wireframe SVGs)
 * 7. Be Part of Something Bigger (Reused from Insights WomenInLeadership with handshake image)
 * 8. Our Insights (Reused exact 4-card grid from Insights page)
 * 9. Trusted Companies (Reused BrandTrustStrip)
 * 10. Client Testimonials (Reused ClientTestimonials)
 * 11. Careers FAQ & Still Have Questions? CTA (Reused FAQ + FAQCTA)
 * 12. Closing Footer
 * 13. Floating Bottom Navigation
 */
export const CareersPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Careers | Webkorps - Build Your Future With Purpose',
      description:
        'Explore opportunities, grow your skills, and build impactful solutions with a team that values innovation. Join Webkorps to shape modern digital engineering.',
      canonicalUrl: 'https://www.webkorps.com/careers',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-careers-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#careers-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="careers-main-content"
        tabIndex={-1}
        className="wk-careers-page__main"
      >
        <CareersHero />
        <WhatWeValueMost />
        <InsightsQuote
          id="careers-quote"
          ariaLabel="Careers Quote"
          quote={
            <>
              <span className="wk-insights-quote__highlight">Join a team</span> where your ideas matter,{' '}
              <br className="wk-insights-quote__br" />
              your growth is valued, and{' '}
              <br className="wk-insights-quote__br" />
              <span className="wk-insights-quote__highlight">your impact is celebrated.</span>
            </>
          }
        />
        <OurHiringProcess />
        <WhyWebkorps />
        <WomenInLeadership
          id="be-part-of-something-bigger"
          headingId="be-part-of-something-bigger-heading"
          imageSrc={businessImg}
          imageAlt="Business professionals shaking hands in agreement"
          imageWidth={2908}
          imageHeight={3220}
          title={
            <>
              Be Part of
              <br />
              <span className="wk-women-lead__title-blue">Something Bigger</span>
            </>
          }
          body="At Webkorps, you'll do more than just build products—you'll create solutions that make a real impact. Work alongside talented professionals, tackle meaningful challenges, and contribute to innovative projects that drive growth for businesses around the world. Here, every idea matters, every contribution is valued, and every team member has the opportunity to grow and succeed."
        />
        <OurInsights id="careers-insights" />
        <BrandTrustStrip variant="services" />
        <ClientTestimonials />
        <FAQ
          id="careers-faq"
          items={CAREERS_FAQ_DATA}
          ctaProps={{
            title: 'Still Have Questions?',
            desc: 'Have questions about open roles, our hiring process, or career opportunities at Webkorps? Connect with our talent acquisition team.',
            buttonText: 'Get in Touch',
            buttonHref: '/contact-us',
            buttonAriaLabel: 'Get in Touch with Webkorps Talent Acquisition',
          }}
        />
      </main>

      {/* Closing Footer */}
      <Footer />

      {/* Floating Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default CareersPage;
