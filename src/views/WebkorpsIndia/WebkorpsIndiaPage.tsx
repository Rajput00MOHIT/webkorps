'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { IndiaHero } from '../../sections/india/IndiaHero/IndiaHero';
import { BusinessProblems } from '../../sections/india/BusinessProblems/BusinessProblems';
import { WhatWeBuild } from '../../sections/india/WhatWeBuild/WhatWeBuild';
import { RelevantWork } from '../../sections/india/RelevantWork/RelevantWork';
import { WhyWebkorps } from '../../sections/india/WhyWebkorps/WhyWebkorps';
import { ProjectStarts } from '../../sections/india/ProjectStarts/ProjectStarts';
import { FinalConversion } from '../../sections/india/FinalConversion/FinalConversion';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import './WebkorpsIndiaPage.css';

export const WebkorpsIndiaPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Software Development & Technology Solutions | Webkorps',
      description:
        'Explore custom software, web and mobile development, AI solutions, cloud integration, and engineering services tailored to your business requirements.',
      canonicalUrl: 'https://www.webkorps.com/webkorps-india',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-india-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#india-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Existing Global Header (preserved unmodified) */}
      <Header />

      {/* Main Content Area */}
      <main id="india-main-content" tabIndex={-1} className="wk-india-page__main">
        {/* Section 1: Hero */}
        <IndiaHero />

        {/* Section 2: Business Problems */}
        <BusinessProblems />

        {/* Section 3: What Webkorps Can Help You Build */}
        <WhatWeBuild />

        {/* Section 4: Relevant Work */}
        <RelevantWork />

        {/* Section 5: Why Webkorps */}
        <WhyWebkorps />

        {/* Section 6: How a Project Starts */}
        <ProjectStarts />

        {/* Section 7: Final Conversion */}
        <FinalConversion />
      </main>

      {/* Existing Global Footer (preserved unmodified) */}
      <Footer />

      {/* Existing Floating Bottom Mega-Menu Navigation (preserved unmodified) */}
      <BottomNavigation />
    </div>
  );
};

