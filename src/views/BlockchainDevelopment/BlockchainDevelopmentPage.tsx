'use client';

import React, { useEffect } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { ServiceHero } from '../../components/ServiceHero';
import { ServiceOutcomes } from '../../components/ServiceOutcomes';
import { ServiceCapabilities } from '../../components/ServiceCapabilities';
import { SoftwareForEveryBusiness } from '../../sections/custom-software/SoftwareForEveryBusiness';
import { ProvenDeliveryProcess } from '../../sections/custom-software/ProvenDeliveryProcess';
import { TechnologyExpertise } from '../../sections/technologies/TechnologyExpertise/TechnologyExpertise';
import { RealBusinessesRealImpact } from '../../sections/custom-software/RealBusinessesRealImpact';
import { DomainSpecificSolutions } from '../../components/DomainSpecificSolutions';
import { BrandTrustStrip } from '../../sections/about/BrandTrustStrip/BrandTrustStrip';
import { ClientTestimonials } from '../../sections/about/ClientTestimonials/ClientTestimonials';
import { FAQ } from '../../sections/home/FAQ/FAQ';
import { updateSEOMetadata } from '../../lib/seo/meta';
import { getOrganizationSchema, getWebSiteSchema } from '../../lib/structured-data/schema';
import {
  BLOCKCHAIN_OUTCOMES,
  BLOCKCHAIN_CAPABILITIES,
  BLOCKCHAIN_SOLUTIONS,
  BLOCKCHAIN_DOMAINS,
  BLOCKCHAIN_FAQS,
} from './blockchainDevelopmentData';
import './BlockchainDevelopmentPage.css';

export const BlockchainDevelopmentPage: React.FC = () => {
  useEffect(() => {
    updateSEOMetadata({
      title: 'Blockchain & Smart Contract Development Services | Webkorps',
      description:
        'Engineer enterprise Web3 applications, audited smart contracts, asset tokenization platforms, and private distributed ledger solutions built for scale and compliance.',
      canonicalUrl: 'https://www.webkorps.com/services/blockchain-development',
    });
  }, []);

  const orgSchema = JSON.stringify(getOrganizationSchema());
  const websiteSchema = JSON.stringify(getWebSiteSchema());

  return (
    <div className="wk-blockchain-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />

      <a href="#blockchain-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="blockchain-main-content"
        tabIndex={-1}
        className="wk-blockchain-page__main"
      >
        {/* Section 01: Hero Section */}
        <ServiceHero
          badge="Blockchain Solutions"
          titleLine1="Decentralized systems built for"
          titleLine2={
            <>
              verified{' '}
              <span className="wk-service-hero__title-accent">trust</span>{' '}
              & scale
            </>
          }
          description="Engineer enterprise Web3 applications, audited smart contracts, decentralized finance protocols, and private distributed ledger solutions built for regulatory compliance."
          ctaText="Discuss Blockchain Architecture"
          ctaHref="/contact-us"
        />

        {/* Section 02: Business Outcomes */}
        <ServiceOutcomes
          id="blockchain-outcomes"
          title={
            <>
              What Enterprise <span className="wk-service-outcomes__title-accent">Blockchain Architecture</span> Delivers
            </>
          }
          subtitle="Unlock immutable trust, autonomous smart contracts, and liquid asset tokenization with audited security."
          items={BLOCKCHAIN_OUTCOMES}
        />

        {/* Section 03: Core Capabilities */}
        <ServiceCapabilities
          id="blockchain-capabilities"
          title={
            <>
              Comprehensive <span className="wk-capabilities__title-accent">Blockchain Engineering</span>
            </>
          }
          subtitle="From audited smart contracts to enterprise consortium DLT networks, we engineer secure Web3 infrastructure."
          items={BLOCKCHAIN_CAPABILITIES}
        />

        {/* Section 04: Software for Every Business */}
        <SoftwareForEveryBusiness
          id="blockchain-solutions-every-business"
          titleAccent="Web3 & Blockchain"
          titleRest="for Every Business."
          subtitle="Secure decentralized applications, smart contract protocols, and tokenized enterprise ecosystems."
          items={BLOCKCHAIN_SOLUTIONS}
        />

        {/* Section 05: Proven Delivery Process */}
        <ProvenDeliveryProcess />

        {/* Section 06: Blockchain Tech Stack */}
        <TechnologyExpertise
          titlePart1="Blockchain & Web3"
          titlePart2="Technology Stack"
          subtitle="We engineer solutions utilizing proven smart contract languages, EVM protocols, and enterprise DLT frameworks."
        />

        {/* Section 07: Real Businesses. Real Impact. */}
        <RealBusinessesRealImpact />

        {/* Section 08: Domain-Specific Solutions */}
        <DomainSpecificSolutions
          id="blockchain-domain-solutions"
          title={
            <>
              Web3 & Blockchain for{' '}
              <span className="wk-domain-sol__title-accent">Industry Use Cases</span>
            </>
          }
          subtitle="We engineer deterministic smart contract protocols and decentralized ledgers designed for verified transparency and compliance."
          engineeringLabel="Webkorps Web3 Engineering"
          domains={BLOCKCHAIN_DOMAINS}
        />

        {/* Section 09: Trusted by Fast-Growing Companies */}
        <BrandTrustStrip variant="services" />

        {/* Section 10: Client Testimonials */}
        <ClientTestimonials />

        {/* Section 11 & 12: Frequently Asked Questions & Still Have Questions? */}
        <FAQ
          id="blockchain-faq"
          title={
            <>
              Frequently Asked <span className="wk-faq__title-accent">Questions</span>
            </>
          }
          subtitle="Clear answers about networks supported, security auditing, gas optimizations, and tokenization compliance."
          items={BLOCKCHAIN_FAQS}
          showCta={true}
          ctaProps={{
            title: 'Have a blockchain or Web3 concept?',
            desc: "Let's review your smart contract specs, token economics, and determine the optimal chain architecture.",
            buttonText: 'Book a Blockchain Consultation',
            buttonHref: '/contact-us',
          }}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Bottom Mega-Menu Navigation */}
      <BottomNavigation />
    </div>
  );
};

