'use client';

import React from 'react';
import turnImg from '../../../assets/about/turn_image.png';
import cursorImg from '../../../assets/about/cursor-circle.png';
import { getImgSrc } from '../../../utils/image';
import './AboutHero.css';

export const AboutHero: React.FC = () => {
  return (
    <section className="wk-about-hero" aria-labelledby="about-hero-heading">
      {/* Background Architectural Grid Lines */}
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

      <div className="site-container wk-about-hero__container">
        {/* Top Pill Badge */}
        <div className="wk-about-hero__badge-wrapper">
          <span className="wk-about-hero__badge">
            About us
          </span>
        </div>

        {/* Main Heading with Inline Interactive Graphic & Cursor */}
        <h1 id="about-hero-heading" className="wk-about-hero__heading">
          <span className="wk-about-hero__line">
            We{' '}
            <span className="wk-about-hero__toggle-wrapper" aria-hidden="true">
              <img
                src={getImgSrc(turnImg)}
                alt=""
                className="wk-about-hero__toggle-img"
              />
            </span>{' '}
            technology into
          </span>
          <span className="wk-about-hero__line">
            <span className="wk-about-hero__gradient-text">growth opportunities</span> for
          </span>
          <span className="wk-about-hero__line">
            your business
            <span className="wk-about-hero__cursor-wrapper" aria-hidden="true">
              <img
                src={getImgSrc(cursorImg)}
                alt=""
                className="wk-about-hero__cursor-img"
              />
            </span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="wk-about-hero__description">
          Explore the milestones, achievements, and moments that define the WebKorps journey.
        </p>
      </div>
    </section>
  );
};
