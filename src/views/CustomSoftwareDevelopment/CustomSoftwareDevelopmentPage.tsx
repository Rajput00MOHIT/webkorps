'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { CustomSoftwareHero } from '../../sections/custom-software/CustomSoftwareHero';
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
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Bottom Mega-Menu Navigation */}
      <BottomNavigation />
    </div>
  );
};

