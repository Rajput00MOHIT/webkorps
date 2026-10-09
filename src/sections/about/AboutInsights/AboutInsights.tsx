'use client';

import React from 'react';
import inclusiveCultureImg from '../../../assets/about/inclusive_culture.png';
import ourLeadershipImg from '../../../assets/about/Our_leadership.png';
import infrastructureImg from '../../../assets/about/infrastructre.png';
import corporateImg from '../../../assets/about/corporate.png';
import { getImgSrc } from '../../../utils/image';
import './AboutInsights.css';

const ArrowIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 29 29"
    fill="none"
    aria-hidden="true"
  >
    <g clipPath="url(#clip0_1233_9059)">
      <path
        d="M0 14.0968H22.7971L13.5186 23.3753L15.5009 25.3714L28.1935 12.6926L15.5009 0L13.5186 1.99613L22.7971 11.2747H0V14.0968Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1233_9059">
        <rect
          width="28.1935"
          height="28.1935"
          fill="white"
          transform="matrix(-1 0 0 1 28.1935 0)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const AboutInsights: React.FC = () => {
  return (
    <section className="wk-about-insights" aria-labelledby="about-insights-heading">
      <div className="site-container wk-about-insights__container">
        {/* Section Header */}
        <div className="wk-about-insights__header">
          <h2 id="about-insights-heading" className="wk-about-insights__title">
            Our <span className="wk-about-insights__title-accent">Insights</span>
          </h2>
          <p className="wk-about-insights__subtitle">
            Get to know who we are, what we do, and the journey that shapes our vision.
          </p>
        </div>

        {/* Asymmetrical 2-Row Grid */}
        <div className="wk-about-insights__grid">
          {/* Row 1: Inclusive Culture (39%) + Our Leadership (61%) */}
          <div className="wk-about-insights__row wk-about-insights__row--top">
            {/* Card 1: Inclusive Culture */}
            <article className="wk-about-insights__card wk-about-insights__card--culture">
              <div className="wk-about-insights__card-content">
                <h3 className="wk-about-insights__card-title">Inclusive Culture</h3>
                <p className="wk-about-insights__card-desc">
                  Every voice is valued, respected, and included.
                </p>
              </div>

              <div className="wk-about-insights__card-visual" aria-hidden="true">
                <img
                  src={getImgSrc(inclusiveCultureImg)}
                  alt="Inclusive Culture puzzle collaboration"
                  className="wk-about-insights__img wk-about-insights__img--culture"
                  loading="lazy"
                />
              </div>

              <a
                href="#culture"
                className="wk-about-insights__arrow-btn"
                aria-label="Explore Inclusive Culture"
              >
                <ArrowIcon />
              </a>
            </article>

            {/* Card 2: Our Leadership */}
            <article className="wk-about-insights__card wk-about-insights__card--leadership">
              <div className="wk-about-insights__card-content">
                <h3 className="wk-about-insights__card-title">Our Leadership</h3>
                <p className="wk-about-insights__card-desc">
                  Leadership That Drives Innovation short, professional, and modern.
                </p>
              </div>

              <div className="wk-about-insights__card-visual" aria-hidden="true">
                <img
                  src={getImgSrc(ourLeadershipImg)}
                  alt="Webkorps executive leadership team"
                  className="wk-about-insights__img wk-about-insights__img--leadership"
                  loading="lazy"
                />
              </div>

              <a
                href="#leadership"
                className="wk-about-insights__arrow-btn"
                aria-label="Explore Our Leadership"
              >
                <ArrowIcon />
              </a>
            </article>
          </div>

          {/* Row 2: Infrastructure (59%) + CSR (39%) */}
          <div className="wk-about-insights__row wk-about-insights__row--bottom">
            {/* Card 3: Infrastructure */}
            <article className="wk-about-insights__card wk-about-insights__card--infrastructure">
              <div className="wk-about-insights__card-content">
                <h3 className="wk-about-insights__card-title">Infrastructure</h3>
                <p className="wk-about-insights__card-desc">
                  Skilled developers and designers who understand real business needs.
                </p>
              </div>

              <div className="wk-about-insights__card-visual" aria-hidden="true">
                <img
                  src={getImgSrc(infrastructureImg)}
                  alt="Webkorps workspace infrastructure"
                  className="wk-about-insights__img wk-about-insights__img--infrastructure"
                  loading="lazy"
                />
              </div>

              <a
                href="#infrastructure"
                className="wk-about-insights__arrow-btn"
                aria-label="Explore Infrastructure"
              >
                <ArrowIcon />
              </a>
            </article>

            {/* Card 4: Corporate Social Responsibility */}
            <article className="wk-about-insights__card wk-about-insights__card--csr">
              <div className="wk-about-insights__card-content">
                <h3 className="wk-about-insights__card-title">Corporate Social Responsibility</h3>
                <p className="wk-about-insights__card-desc">
                  Committed to making a difference beyond business success.
                </p>
              </div>

              <div className="wk-about-insights__card-visual" aria-hidden="true">
                <img
                  src={getImgSrc(corporateImg)}
                  alt="Corporate Social Responsibility smile badge"
                  className="wk-about-insights__img wk-about-insights__img--csr"
                  loading="lazy"
                />
              </div>

              <a
                href="#csr"
                className="wk-about-insights__arrow-btn"
                aria-label="Explore Corporate Social Responsibility"
              >
                <ArrowIcon />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
