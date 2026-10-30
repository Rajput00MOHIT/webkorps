import React from 'react';
import Link from 'next/link';
import leftRing from '../../../assets/about/left_ring_circle.png';
import rightRing from '../../../assets/about/Right_ring_circle.png';
import { getImgSrc } from '../../../utils/image';
import './FinalConversion.css';

export const FinalConversion: React.FC = () => {
  return (
    <section className="wk-final-conv" aria-labelledby="final-conv-heading">
      <div className="site-container wk-final-conv__container">
        <div className="wk-final-conv__card">
          {/* Decorative Rings */}
          <div className="wk-final-conv__ring wk-final-conv__ring--left" aria-hidden="true">
            <img
              src={getImgSrc(rightRing)}
              alt=""
              className="wk-final-conv__ring-img"
              loading="lazy"
            />
          </div>
          <div className="wk-final-conv__ring wk-final-conv__ring--right" aria-hidden="true">
            <img
              src={getImgSrc(leftRing)}
              alt=""
              className="wk-final-conv__ring-img"
              loading="lazy"
            />
          </div>

          {/* Foreground Content */}
          <div className="wk-final-conv__content">
            <h2 id="final-conv-heading" className="wk-final-conv__title">
              Have a Project in Mind? Let’s Talk.
            </h2>

            <p className="wk-final-conv__description">
              Tell us what you’re building, improving, or trying to solve. We’ll discuss your
              requirements and the right next step.
            </p>

            <div className="wk-final-conv__actions">
              <Link
                href="/contact-us"
                className="wk-final-conv__btn wk-final-conv__btn--primary"
                aria-label="Discuss Your Project - Contact Webkorps"
              >
                <span>Discuss Your Project</span>
                <svg
                  className="wk-final-conv__btn-icon"
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

              <Link
                href="/contact-us"
                className="wk-final-conv__btn wk-final-conv__btn--outline"
                aria-label="Contact Webkorps"
              >
                Contact Webkorps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

