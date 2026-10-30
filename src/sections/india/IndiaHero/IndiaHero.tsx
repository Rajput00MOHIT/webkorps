'use client';

import React from 'react';
import Link from 'next/link';
import { HeroBackground } from '../../../components/HeroBackground';
import { AssetPlaceholder } from '../../../components/AssetPlaceholder';
import './IndiaHero.css';

export const IndiaHero: React.FC = () => {
  return (
    <section className="wk-india-hero" aria-labelledby="india-hero-title">
      {/* Exact Hero Background from Technologies page */}
      <HeroBackground columnsCount={12} rowsCount={8} />

      <div className="wk-india-hero__container">
        {/* Eyebrow Badge */}
        <div className="wk-india-hero__badge-wrapper">
          <span className="wk-india-hero__badge">
            SOFTWARE ENGINEERING · DIGITAL PRODUCTS · BUSINESS TECHNOLOGY
          </span>
        </div>

        {/* H1 Heading */}
        <h1 id="india-hero-title" className="wk-india-hero__title">
          Technology That Moves Your{' '}
          <span className="wk-india-hero__title-accent">Business Forward.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="wk-india-hero__subtitle">
          Build a new product, improve the systems you already use, or automate the work
          slowing your team down. Webkorps helps turn business requirements into practical
          technology solutions.
        </p>

        {/* CTAs */}
        <div className="wk-india-hero__actions">
          <Link
            href="/contact-us"
            className="wk-india-hero__btn wk-india-hero__btn--primary"
            aria-label="Discuss Your Project with Webkorps"
          >
            <span>Discuss Your Project</span>
            <svg
              className="wk-india-hero__btn-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

          <a
            href="#relevant-work"
            className="wk-india-hero__btn wk-india-hero__btn--secondary"
            aria-label="Explore Our Work"
          >
            Explore Our Work
          </a>
        </div>

        {/* Hero Visual Mockup Composition */}
        <div className="wk-india-hero__visual-wrap">
          <div className="wk-india-hero__visual-frame">
            <div className="wk-india-hero__visual-topbar">
              <span className="wk-india-hero__dot wk-india-hero__dot--red" />
              <span className="wk-india-hero__dot wk-india-hero__dot--amber" />
              <span className="wk-india-hero__dot wk-india-hero__dot--green" />
              <span className="wk-india-hero__browser-title">Webkorps Unified Enterprise Platform</span>
            </div>

            <div className="wk-india-hero__visual-body">
              <AssetPlaceholder
                label="BUSINESS DASHBOARD VISUAL"
                sublabel="Interactive multi-platform product architecture, live metrics & analytics view"
                height="380px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

