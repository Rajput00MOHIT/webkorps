'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { ContactHero } from '../../sections/contact/ContactHero/ContactHero';
import { ContactForms } from '../../sections/contact/ContactForms/ContactForms';
import { GlobalPresence } from '../../sections/contact/GlobalPresence/GlobalPresence';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { FAQ } from '../../sections/home/FAQ/FAQ';
import { CONTACT_FAQ_DATA } from './contactFaqData';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import './ContactUsPage.css';

/**
 * Contact Us Page View
 * Source of Truth: Figma node 1233-13323 & reference screenshot
 * Layout:
 * 1. Global Header
 * 2. Contact Hero (with exact About hero architectural grid background)
 * 3. Closing Footer
 * 4. Floating Bottom Navigation
 */
export const ContactUsPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Contact Us | Webkorps - Connect With Our Experts',
      description:
        "Let's connect and explore how we can help transform your ideas into impactful digital solutions. Speak with Webkorps technology consultants and engineering leaders.",
      canonicalUrl: 'https://www.webkorps.com/contact-us',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-contact-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#contact-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main id="contact-main-content" tabIndex={-1} className="wk-contact-page__main">
        <ContactHero />
        <ContactForms />
        <GlobalPresence />

        {/* 1. Trusted Technology Partners */}
        <BrandTrustStrip variant="services" />

        {/* 2. What Our Clients Say About Us */}
        <ClientTestimonials />

        {/* 3. Frequently Asked Questions with CTA Card */}
        <FAQ
          id="contact-faq"
          subtitle="Got questions? We've answered the most common ones to help you move forward with confidence."
          items={CONTACT_FAQ_DATA}
          ctaProps={{
            title: 'Still have question?',
            desc: "Can't find what you're looking for? Our team is here to help you with clear answers and quick guidance.",
            buttonText: 'Book a Consultation',
            buttonHref: '#contact-forms',
            buttonAriaLabel: 'Book a Consultation with Webkorps',
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

export default ContactUsPage;
