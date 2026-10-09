'use client';

import React from 'react';
import leftRing from '../../../assets/about/left_ring_circle.png';
import rightRing from '../../../assets/about/Right_ring_circle.png';
import { getImgSrc } from '../../../utils/image';
import './AboutCTA.css';

export const AboutCTA: React.FC = () => {
  return (
    <section className="wk-about-cta" aria-labelledby="about-cta-heading">
      <div className="site-container wk-about-cta__container">
        <div className="wk-about-cta__card">
          {/* Left Decorative Ring Circle */}
          <div className="wk-about-cta__ring wk-about-cta__ring--left" aria-hidden="true">
            <img
              src={getImgSrc(rightRing)}
              alt=""
              className="wk-about-cta__ring-img"
              loading="lazy"
            />
          </div>

          {/* Right Decorative Ring Circle */}
          <div className="wk-about-cta__ring wk-about-cta__ring--right" aria-hidden="true">
            <img
              src={getImgSrc(leftRing)}
              alt=""
              className="wk-about-cta__ring-img"
              loading="lazy"
            />
          </div>

          {/* Foreground Content */}
          <div className="wk-about-cta__content">
            <h2 id="about-cta-heading" className="wk-about-cta__title">
              Ready to Build What’s Next?
            </h2>

            <p className="wk-about-cta__description">
              Partner with WebKorps to turn your ideas into scalable, reliable, and future-ready
              digital solutions.
            </p>

            <div className="wk-about-cta__action">
              <a
                href="#contact"
                className="wk-about-cta__btn"
                aria-label="Let's Talk - Contact Webkorps"
              >
                <span>Let’s Talk</span>
                <svg
                  className="wk-about-cta__btn-icon"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
