'use client';

import React from 'react';
import { Header } from '../../sections/home/Header/Header';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { AISolutionsHero } from './components/AISolutionsHero';
import { AICapabilitiesGrid } from './components/AICapabilitiesGrid';
import { AIIndustries } from './components/AIIndustries';
import { AIProcess } from './components/AIProcess';
import { AICaseStudies } from './components/AICaseStudies';
import { AITechStack } from './components/AITechStack';
import { AIInsights } from './components/AIInsights';
import { AIEnquiry } from './components/AIEnquiry';
import './AISolutionsPage.css';

export const AISolutionsPage: React.FC = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Webkorps AI Solutions & Enterprise AI Engineering',
    serviceType: 'Artificial Intelligence Consulting & Engineering',
    provider: {
      '@type': 'Organization',
      name: 'Webkorps',
      url: 'https://www.webkorps.com',
      logo: 'https://www.webkorps.com/favicon.svg',
    },
    description:
      'Enterprise AI engineering, private Generative AI & LLMs, agentic workflow automation, and predictive machine learning models built to ISO 27001 standards.',
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Solutions Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Generative AI & Enterprise LLMs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Agentic AI & Autonomous Workflows',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Predictive Analytics & Machine Learning',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Computer Vision & Multimodal AI',
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.webkorps.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Solutions',
        item: 'https://www.webkorps.com/ai-solutions',
      },
    ],
  };

  return (
    <div className="wk-ai-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <a href="#ai-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content */}
      <main id="ai-main-content" tabIndex={-1} className="wk-ai-page__main">
        {/* 1. Hero Section with Trust Metrics */}
        <AISolutionsHero />

        {/* 2. Core AI Capabilities Grid (with link to detail page) */}
        <AICapabilitiesGrid />

        {/* 3. Industry Specific Applications */}
        <AIIndustries />

        {/* 4. AI DLC Implementation Process */}
        <AIProcess />

        {/* 5. Verified Client Case Studies */}
        <AICaseStudies />

        {/* 6. AI Tech Stack & Ecosystem Integrations */}
        <AITechStack />

        {/* 7. Thought Leadership & Engineering Insights */}
        <AIInsights />

        {/* 8. Conversion Section with Functional Project Enquiry Flow */}
        <AIEnquiry />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Bottom Navigation for Mobile */}
      <BottomNavigation />
    </div>
  );
};
