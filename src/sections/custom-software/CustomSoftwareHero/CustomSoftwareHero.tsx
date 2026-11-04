'use client';

import React from 'react';
import { HeroBackground } from '../../../components/HeroBackground';
import { HeroCursor } from '../../about/AboutHero/HeroCursor';
import './CustomSoftwareHero.css';

/**
 * Custom Software Development Hero Section
 * Source of Truth: Figma node 2501-10078 & Reference Screenshot
 */
export const CustomSoftwareHero: React.FC = () => {
  return (
    <section className="wk-custom-software-hero" aria-labelledby="custom-software-hero-title">
      {/* Reused Shared Architectural Grid Background */}
      <HeroBackground />

      <div className="wk-custom-software-hero__container">
        {/* Category Pill Badge */}
        <div className="wk-custom-software-hero__badge-wrap">
          <span className="wk-custom-software-hero__badge">
            Custom Software Development
          </span>
        </div>

        {/* Main Display 2-Line Heading */}
        <h1
          id="custom-software-hero-title"
          className="wk-custom-software-hero__title"
          aria-label="Software that solve real business problem"
        >
          <span className="wk-custom-software-hero__title-line">
            S
            <span className="wk-custom-software-hero__o-wrap" aria-hidden="true">
              <span className="wk-custom-software-hero__o-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  className="wk-custom-software-hero__o-icon"
                >
                  <path
                    d="M19.25 17.875H17.875C17.875 17.0583 18.2717 16.4938 18.6209 15.9967C18.9585 15.5169 19.25 15.103 19.25 14.4375C19.25 13.3004 18.3246 12.375 17.1875 12.375C16.0504 12.375 15.125 13.3004 15.125 14.4375C15.125 15.1023 15.4165 15.5169 15.7541 15.9967C16.1033 16.4931 16.5 17.0583 16.5 17.875H15.125C15.125 17.5106 14.9462 17.2377 14.6286 16.7874C14.2381 16.2305 13.75 15.5375 13.75 14.4375C13.75 12.5421 15.2921 11 17.1875 11C19.0829 11 20.625 12.5421 20.625 14.4375C20.625 15.5375 20.1376 16.2305 19.7464 16.7874C19.4288 17.2377 19.25 17.5106 19.25 17.875ZM19.25 19.25H15.125V20.625H19.25V19.25ZM2.75 16.5H12.375V17.875H2.75C2.38533 17.875 2.03559 17.7301 1.77773 17.4723C1.51987 17.2144 1.375 16.8647 1.375 16.5V2.75C1.375 2.38533 1.51987 2.03559 1.77773 1.77773C2.03559 1.51987 2.38533 1.375 2.75 1.375H17.875C18.2397 1.375 18.5894 1.51987 18.8473 1.77773C19.1051 2.03559 19.25 2.38533 19.25 2.75V9.625H17.875V6.1875H2.75V16.5ZM2.75 4.8125H17.875V2.75H2.75V4.8125ZM4.125 8.9375H7.5625V7.5625H4.125V8.9375ZM8.9375 8.9375H12.375V7.5625H8.9375V8.9375ZM4.125 11.6875H7.5625V10.3125H4.125V11.6875ZM8.9375 11.6875H12.375V10.3125H8.9375V11.6875ZM4.125 14.4375H7.5625V13.0625H4.125V14.4375ZM8.9375 14.4375H12.375V13.0625H8.9375V14.4375Z"
                    fill="#1A87C8"
                  />
                </svg>
              </span>
            </span>
            ftware that solve
          </span>

          <span className="wk-custom-software-hero__title-line">
            real{' '}
            <span className="wk-custom-software-hero__title-accent">
              business
            </span>{' '}
            problem
            <span className="wk-custom-software-hero__cursor-wrap" aria-hidden="true">
              <HeroCursor className="wk-custom-software-hero__cursor" />
            </span>
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="wk-custom-software-hero__desc">
          From idea to development, we build tailored software solutions that help you scale,
          streamline and create new opportunities.
        </p>

        {/* Primary CTA */}
        <div className="wk-custom-software-hero__cta-wrap">
          <a
            href="/contact-us"
            className="wk-custom-software-hero__btn"
            aria-label="Discuss Your Project with Webkorps"
          >
            <span>Discuss Your Project</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="wk-custom-software-hero__btn-icon"
            >
              <path
                d="M3.33331 12.6667L12.6666 3.33334M12.6666 3.33334H5.33331M12.6666 3.33334V10.6667"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
