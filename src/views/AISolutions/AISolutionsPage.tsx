'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { AISolutionsHero } from '../../sections/ai-solutions/AISolutionsHero/AISolutionsHero';
import { EnterpriseAISolutions } from '../../sections/ai-solutions/EnterpriseAISolutions/EnterpriseAISolutions';
import { DomainSpecificAI } from '../../sections/ai-solutions/DomainSpecificAI';
import { RealWorldAIResults } from '../../sections/ai-solutions/RealWorldAIResults';
import { AppliedAIInsights } from '../../sections/ai-solutions/AppliedAIInsights';
import { EnterpriseAIStack } from '../../sections/ai-solutions/EnterpriseAIStack';
import { SmarterProjectsBanner } from '../../sections/ai-solutions/SmarterProjectsBanner';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { AIFAQSection } from '../../sections/ai-solutions/AIFAQSection';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import './AISolutionsPage.css';

export const AISolutionsPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Enterprise AI Solutions at Scale | Webkorps',
      description:
        'Build scalable, secure AI systems for enterprise growth: private LLMs, agentic workflows, predictive ML, and computer vision.',
      canonicalUrl: 'https://www.webkorps.com/ai-solutions',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-ai-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#ai-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area: Section 01 (Hero) & Section 02 (Enterprise AI Solutions at Scale) */}
      <main id="ai-main-content" tabIndex={-1} className="wk-ai-page__main">
        {/* Section 01: Hero */}
        <AISolutionsHero />

        {/* Section 02: Enterprise AI Solutions at Scale */}
        <EnterpriseAISolutions />

        {/* Section 03: Domain-Specific AI for Mission-Critical Sectors */}
        <DomainSpecificAI />

        {/* Section 04: Real-World AI Results */}
        <RealWorldAIResults />

        {/* Section 05: Applied AI Insights */}
        <AppliedAIInsights />

        {/* Section 06: Enterprise AI & Cloud Stack */}
        <EnterpriseAIStack />

        {/* Section 07: Smarter Projects Start with AI */}
        <SmarterProjectsBanner />

        {/* Section 08: Trusted by Fast-Growing Companies Around the World */}
        <BrandTrustStrip variant="default" />

        {/* Section 09: What Our Clients Say About Us */}
        <ClientTestimonials />

        {/* Section 10 & 11: Frequently Asked Questions & Still Have Questions? */}
        <AIFAQSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};
