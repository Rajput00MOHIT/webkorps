'use client';

import React from 'react';
import { HeroBackground } from '../HeroBackground';
import { HeroCursor } from '../../sections/about/AboutHero/HeroCursor';
import './ServiceHero.css';

export interface ServiceHeroProps {
  badge: string;
  titleLine1: React.ReactNode;
  titleLine2: React.ReactNode;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  showCursor?: boolean;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  badge,
  titleLine1,
  titleLine2,
  description,
  ctaText = 'Discuss Your Project',
  ctaHref = '/contact-us',
  showCursor = true,
}) => {
  return (
    <section className="wk-service-hero" aria-label={`${badge} Hero`}>
      {/* Reused Shared Architectural Grid Background */}
      <HeroBackground />

      <div className="wk-service-hero__container">
        {/* Category Pill Badge */}
        <div className="wk-service-hero__badge-wrap">
          <span className="wk-service-hero__badge">{badge}</span>
        </div>

        {/* Main Display 2-Line Heading */}
        <h1 className="wk-service-hero__title">
          <span className="wk-service-hero__title-line">{titleLine1}</span>
          <span className="wk-service-hero__title-line">
            {titleLine2}
            {showCursor && (
              <span className="wk-service-hero__cursor-wrap" aria-hidden="true">
                <HeroCursor className="wk-service-hero__cursor" />
              </span>
            )}
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="wk-service-hero__desc">{description}</p>

        {/* Primary CTA */}
        <div className="wk-service-hero__cta-wrap">
          <a
            href={ctaHref}
            className="wk-service-hero__btn"
            aria-label={`${ctaText} with Webkorps`}
          >
            <span>{ctaText}</span>
            <svg
              className="wk-service-hero__btn-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3.5 10.5L10.5 3.5M10.5 3.5H4.66667M10.5 3.5V9.33333"
                stroke="currentColor"
                strokeWidth="1.75"
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

