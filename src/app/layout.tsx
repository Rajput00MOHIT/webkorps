import type { Metadata, Viewport } from 'next';
import React from 'react';

// Design Tokens & Base Styles
import '../styles/tokens.css';
import '../styles/globals.css';
import '../styles/utilities.css';

// Component Styles
import '../components/Badge/Badge.css';
import '../components/Button/Button.css';
import '../components/Card/Card.css';
import '../components/Container/Container.css';
import '../components/SectionHeading/SectionHeading.css';
import '../components/BottomNavigation/BottomNavigation.css';
import '../components/AIAssistant/AIAssistant.css';

// Section Styles in Strict Visual Order
import '../sections/home/Header/Header.css';
import '../sections/home/Hero/Hero.css';
import '../sections/home/LeadingBrands/LeadingBrands.css';
import '../sections/home/Stats/Stats.css';
import '../sections/home/AIInnovation/AIInnovation.css';
import '../sections/home/Services/Services.css';
import '../sections/home/Industries/Industries.css';
import '../sections/home/Integrations/Integrations.css';
import '../sections/home/Leadership/Leadership.css';
import '../sections/home/CaseStudies/CaseStudies.css';
import '../sections/home/TrustedOEMPartners/TrustedOEMPartners.css';
import '../sections/home/NeedPartnerCallout/NeedPartnerCallout.css';
import '../sections/home/Insights/Insights.css';
import '../sections/home/FAQ/FAQ.css';
import '../sections/home/Contact/Contact.css';
import '../sections/home/Footer/Footer.css';
import '../sections/about/AboutHero/AboutHero.css';
import '../sections/about/BrandTrustStrip/BrandTrustStrip.css';
import '../sections/about/AboutOverview/AboutOverview.css';
import '../sections/about/TrustedPartner/TrustedPartner.css';
import '../sections/about/HowWeWork/HowWeWork.css';
import '../sections/about/AboutInsights/AboutInsights.css';
import '../sections/about/Milestones/Milestones.css';
import '../sections/about/OurValues/OurValues.css';
import '../sections/about/AboutCTA/AboutCTA.css';
import '../sections/about/ClientTestimonials/ClientTestimonials.css';
import '../sections/services/ServicesHero/ServicesHero.css';
import '../sections/services/ServicesGrid/ServicesGrid.css';
import '../sections/services/AgileWorkflow/AgileWorkflow.css';
import '../sections/services/ServicesIndustries/ServicesIndustries.css';
import '../sections/technologies/TechnologiesHero/TechnologiesHero.css';
import '../sections/technologies/CoreTechnologies/CoreTechnologies.css';
import '../sections/technologies/DevelopmentApproach/DevelopmentApproach.css';
import '../sections/technologies/OurOfferings/OurOfferings.css';
import '../sections/technologies/TechnologyExpertise/TechnologyExpertise.css';
import '../sections/insights/InsightsHero/InsightsHero.css';
import '../sections/insights/FeaturedArticle/FeaturedArticle.css';
import '../sections/insights/WomenInLeadership/WomenInLeadership.css';
import '../sections/insights/InsightsQuote/InsightsQuote.css';
import '../sections/insights/RecentEvent/RecentEvent.css';
import '../sections/case-studies/CaseStudiesHero/CaseStudiesHero.css';
import '../sections/case-studies/CaseStudiesGrid/CaseStudiesGrid.css';
import '../sections/industries/IndustriesHero/IndustriesHero.css';
import '../sections/industries/IndustriesList/IndustriesList.css';
import '../sections/careers/CareersHero/CareersHero.css';
import '../sections/careers/WhatWeValueMost/WhatWeValueMost.css';
import '../sections/careers/OurHiringProcess/OurHiringProcess.css';
import '../sections/careers/WhyWebkorps/WhyWebkorps.css';
import '../sections/contact/ContactHero/ContactHero.css';
import '../sections/contact/ContactForms/ContactForms.css';
import '../sections/contact/GlobalPresence/GlobalPresence.css';
import '../views/Home/HomePage.css';
import '../views/AboutUs/AboutUsPage.css';
import '../views/Services/ServicesPage.css';
import '../views/Technologies/TechnologiesPage.css';
import '../views/CaseStudies/CaseStudiesPage.css';
import '../views/Industries/IndustriesPage.css';
import '../views/Careers/CareersPage.css';
import '../views/Contact/ContactUsPage.css';

export const metadata: Metadata = {
  title: 'Webkorps | Digital Engineering, AI Innovation & Enterprise Software Solutions',
  description: 'Webkorps designs, builds, and scales digital products, AI solutions, and enterprise software that drive real business impact. Certified ISO 27001, CMMI Level 3.',
  metadataBase: new URL('https://www.webkorps.com/'),
  alternates: {
    canonical: 'https://www.webkorps.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.webkorps.com/',
    title: 'Webkorps | Digital Engineering, AI Innovation & Enterprise Software Solutions',
    description: 'We design, build, and scale digital products and AI solutions that help businesses innovate, grow, and stay ahead.',
    siteName: 'Webkorps',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webkorps | Digital Engineering, AI Innovation & Enterprise Software Solutions',
    description: 'We design, build, and scale digital products and AI solutions that help businesses innovate, grow, and stay ahead.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
