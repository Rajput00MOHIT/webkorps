import React from 'react';
import { HeroCursor } from '../../about/AboutHero/HeroCursor';
import './ServicesHero.css';

/**
 * Services Landing Page Hero Section
 * Source of Truth: Figma node 2222-10618 & service.pdf
 * Reuses the same architectural grid guide background as About Us Hero
 */
export const ServicesHero: React.FC = () => {
  return (
    <section className="wk-services-hero" aria-labelledby="services-hero-heading">
      {/* Background Architectural Grid Lines (Exact About Hero Background) */}
      <div className="wk-about-hero__grid-bg" aria-hidden="true">
        <div className="wk-about-hero__columns">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="wk-about-hero__col-guide" />
          ))}
        </div>
        <div className="wk-about-hero__rows">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="wk-about-hero__row-guide" />
          ))}
        </div>
      </div>

      <div className="wk-services-hero__container">
        {/* Top Eyebrow Pill Badge */}
        <div className="wk-services-hero__badge-wrapper">
          <span className="wk-services-hero__badge">Services</span>
        </div>

        {/* Centered Main 3-Line Heading */}
        <h1
          id="services-hero-heading"
          className="wk-services-hero__title"
          aria-label="Powering your business with digital services built for growth and innovation"
        >
          <span className="wk-services-hero__title-line">
            Powering your business
            <span className="wk-services-hero__cursor-wrap" aria-hidden="true">
              <HeroCursor className="wk-services-hero__cursor-svg" />
            </span>
          </span>

          <span className="wk-services-hero__title-line">
            with digital services built
          </span>

          <span className="wk-services-hero__title-line">
            for <span className="wk-services-hero__growth-word">gr<span className="wk-services-hero__growth-arrow-wrap" aria-hidden="true">
              <svg
                viewBox="18.5 16 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wk-services-hero__growth-svg"
              >
                <circle cx="38.1211" cy="35.8788" r="18.5" fill="white" />
                <path
                  d="M45.2022 28.2199C45.0986 27.4528 44.3927 26.915 43.6256 27.0187L31.1256 28.7078C30.3586 28.8115 29.8208 29.5174 29.9244 30.2844C30.0281 31.0515 30.7339 31.5893 31.501 31.4856L42.6121 29.9841L44.1136 41.0953C44.2173 41.8623 44.9231 42.4001 45.6902 42.2965C46.4573 42.1928 46.9951 41.4869 46.8914 40.7199L45.2022 28.2199ZM32.4287 43.3499L33.5435 44.1992L44.9281 29.2569L43.8133 28.4075L42.6985 27.5582L31.3139 42.5005L32.4287 43.3499Z"
                  fill="#1A87C8"
                />
              </svg>
            </span>wth</span> and innovation
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="wk-services-hero__subtitle">
          Explore the milestones, achievements, and moments that{' '}
          <br className="wk-services-hero__br-desktop" />
          define the WebKorps journey.
        </p>
      </div>
    </section>
  );
};
