'use client';

import React from 'react';
import { HeroBackground } from '../../../components/HeroBackground';
import './CustomSoftwareHero.css';

/**
 * Custom Software Development Hero Section (Setup Phase)
 * Reuses the exact shared architectural grid HeroBackground from existing service detail pages
 */
export const CustomSoftwareHero: React.FC = () => {
  return (
    <section className="wk-custom-software-hero" aria-labelledby="custom-software-hero-title">
      {/* Reused Shared Hero Background (same as Services & AI Solutions) */}
      <HeroBackground />

      <div className="wk-custom-software-hero__container">
        {/* Minimal temporary setup marker for initialization phase */}
        <div className="wk-custom-software-hero__badge-wrap">
          <span className="wk-custom-software-hero__badge">Custom Software Development</span>
        </div>
        <h1 id="custom-software-hero-title" className="wk-custom-software-hero__setup-title">
          Custom Software Development
        </h1>
      </div>
    </section>
  );
};

