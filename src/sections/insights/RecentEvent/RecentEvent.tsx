'use client';

import React, { useState } from 'react';
import cesEventPhoto from '../../../assets/insights/ces_event_photo.png';
import cesLogo from '../../../assets/insights/ces_logo.png';
import { getImgSrc } from '../../../utils/image';
import './RecentEvent.css';

/**
 * Recent Event Section Component
 * Source of Truth: Figma node 1233-11204 & reference screenshot
 *
 * Content Structure:
 * - Heading: "We are part of CES 2026 Webkorps" with "CES 2026 Webkorps" highlighted in blue
 * - Upper-Right Circular Badge with official CES 2026 logo
 * - Left Media Column:
 *   - Large photographic card of the Webkorps team at their CES 2026 booth
 *   - 5-position pagination indicator with interactive bullet selection
 * - Right Content Column:
 *   - Light blue badge: "Recent Event"
 *   - Event description
 *   - Blue rounded CTA button: "Know More ↗"
 */
export const RecentEvent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="recent-event"
      className="wk-recent-event"
      aria-labelledby="recent-event-heading"
    >
      <div className="wk-recent-event__container">
        {/* Header Row: Title & Circular CES Logo */}
        <div className="wk-recent-event__header">
          <h2 id="recent-event-heading" className="wk-recent-event__title">
            We are part of{' '}
            <span className="wk-recent-event__title-accent">CES</span>
            <br />
            <span className="wk-recent-event__title-accent">2026 Webkorps</span>
          </h2>

          <div
            className="wk-recent-event__logo-badge"
            aria-label="Official CES 2026 event participant badge"
          >
            <img
              src={getImgSrc(cesLogo)}
              alt="CES 2026 Logo"
              className="wk-recent-event__logo-img"
              width={116}
              height={29}
              loading="eager"
            />
          </div>
        </div>

        {/* Main Grid: Media & Event Information */}
        <div className="wk-recent-event__grid">
          {/* Left Media Column */}
          <div className="wk-recent-event__media-col">
            <div className="wk-recent-event__image-card">
              <img
                src={getImgSrc(cesEventPhoto)}
                alt="Webkorps booth and executive team showcasing solutions at CES 2026 in Las Vegas"
                className="wk-recent-event__img"
                width={538}
                height={362}
                loading="eager"
              />
            </div>

            {/* 5-Position Pagination Indicator */}
            <div
              className="wk-recent-event__pagination"
              role="tablist"
              aria-label="Event slides pagination"
            >
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Event slide ${index + 1} of 5`}
                  className={`wk-recent-event__dot ${activeIndex === index ? 'wk-recent-event__dot--active' : ''
                    }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Content Column */}
          <div className="wk-recent-event__content-col">
            <span className="wk-recent-event__badge">Recent Event</span>

            <p className="wk-recent-event__desc">
              Webkorps is showcasing its next-generation digital and technology
              solutions at CES 2026 in Las Vegas. At this global innovation stage,
              we will present our expertise in AI, cloud, software development,
              mobile apps, web development, cybersecurity, and data analytics.
            </p>

            <a
              href="/contact-us"
              className="wk-recent-event__cta"
              aria-label="Know more about Webkorps at CES 2026"
            >
              <span>Know More</span>
              <span className="wk-recent-event__cta-arrow" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M0.707031 15L1.41414 15.7071L15.4141 1.70711L14.707 1L13.9999 0.292893L-7.55191e-05 14.2929L0.707031 15ZM15.707 0.999999C15.707 0.447715 15.2593 -2.87362e-07 14.707 -5.40243e-07L5.70703 2.60547e-07C5.15475 -7.66277e-08 4.70703 0.447715 4.70703 1C4.70703 1.55228 5.15475 2 5.70703 2L13.707 2L13.707 10C13.707 10.5523 14.1547 11 14.707 11C15.2593 11 15.707 10.5523 15.707 10L15.707 0.999999Z" fill="white" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
