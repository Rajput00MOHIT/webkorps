'use client';

import React from 'react';
import Link from 'next/link';
import talkToUseImg from '../../../assets/AI solution/talk to use.png';
import { getImgSrc } from '../../../utils/image';
import './SmarterProjectsBanner.css';

export const SmarterProjectsBanner: React.FC = () => {
  return (
    <section className="wk-smarter-ai" aria-labelledby="smarter-ai-heading">
      <div className="wk-smarter-ai__container">
        <div className="wk-smarter-ai__banner">
          <div className="wk-smarter-ai__grid">
            {/* Left Content Area */}
            <div className="wk-smarter-ai__content">
              <h2 id="smarter-ai-heading" className="wk-smarter-ai__title">
                <span className="wk-smarter-ai__title-line">Smarter Projects</span>
                <span className="wk-smarter-ai__title-line">Start with AI</span>
              </h2>

              <p className="wk-smarter-ai__subtitle">
                Explore the AI tools powering our design,<br className="wk-smarter-ai__br" /> development, testing, and delivery workflows.
              </p>

              <div className="wk-smarter-ai__action">
                <Link
                  href="/contact-us"
                  className="wk-smarter-ai__btn"
                  aria-label="Let's Talk - Start your AI project with Webkorps"
                >
                  <span className="wk-smarter-ai__btn-text">Let’s Talk</span>
                  <svg
                    className="wk-smarter-ai__btn-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#107BC7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Decorative 3D Sparkle Composition */}
            <div className="wk-smarter-ai__visual" aria-hidden="true">
              <img
                src={getImgSrc(talkToUseImg)}
                alt="Decorative AI Sparkles"
                className="wk-smarter-ai__sparkles-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
