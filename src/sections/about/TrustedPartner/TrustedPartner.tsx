'use client';

import React, { useState, useEffect, useRef } from 'react';
import mapImg from '../../../assets/Map_image.png';
import logoIcon from '../../../assets/about/logo_icon.png';
import { getImgSrc } from '../../../utils/image';
import './TrustedPartner.css';

interface StatConfig {
  id: string;
  target: number;
  suffix: string;
  label: string;
  delayMs: number;
}

const STATS_DATA: StatConfig[] = [
  {
    id: 'years',
    target: 10,
    suffix: '+',
    label: 'Years\nin Business',
    delayMs: 0,
  },
  {
    id: 'projects',
    target: 500,
    suffix: '+',
    label: 'Projects\nDelivered',
    delayMs: 140,
  },
  {
    id: 'countries',
    target: 30,
    suffix: '+',
    label: 'Countries\nServed',
    delayMs: 280,
  },
  {
    id: 'team',
    target: 250,
    suffix: '+',
    label: 'Professional\nDevelopment Team',
    delayMs: 420,
  },
];

export const TrustedPartner: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  // Viewport trigger
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Odometer-style signature counter animation
  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCounts(STATS_DATA.map((s) => s.target));
      return;
    }

    const duration = 1600; // ms total duration
    const startTime = performance.now();
    let animationFrameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;

      const newCounts = STATS_DATA.map((stat) => {
        const itemElapsed = Math.max(0, elapsed - stat.delayMs);
        if (itemElapsed <= 0) return 0;

        const progress = Math.min(itemElapsed / (duration - stat.delayMs), 1);
        // Eased progression: rapid initial count, smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3.5);
        return Math.round(stat.target * easeOut);
      });

      setCounts(newCounts);

      if (elapsed < duration + 420) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        setCounts(STATS_DATA.map((s) => s.target));
      }
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`wk-stats-partner ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="partner-stats-heading"
    >
      <div className="site-container wk-stats-partner__container">
        {/* Section Header */}
        <div className="wk-stats-partner__header">
          <h2 id="partner-stats-heading" className="wk-stats-partner__title">
            Trusted Technology Partner
          </h2>
          <p className="wk-stats-partner__subtitle">
            We Are A trusted Technology &amp; Services Partner Supporting Businesses{' '}
            <span className="wk-stats-partner__highlight">Across The Globe</span>
          </p>
        </div>

        {/* World Map Background & Statistics Card Wrapper */}
        <div className="wk-stats-partner__card-wrapper">
          {/* Subtle Dotted World Map Graphic */}
          <div className="wk-stats-partner__map-bg" aria-hidden="true">
            <img
              src={getImgSrc(mapImg)}
              alt=""
              className="wk-stats-partner__map-img"
            />
          </div>

          {/* Elevated Statistics Card */}
          <div className="wk-stats-partner__card">
            {/* Central Webkorps Floating Logo Badge */}
            <div className="wk-stats-partner__badge" aria-hidden="true">
              <img
                src={getImgSrc(logoIcon)}
                alt="Webkorps"
                className="wk-stats-partner__badge-icon"
              />
            </div>

            {/* 4 Statistics Metrics */}
            <div className="wk-stats-partner__grid" role="list">
              {STATS_DATA.map((stat, index) => (
                <div
                  key={stat.id}
                  className="wk-stats-partner__item"
                  role="listitem"
                  style={{ animationDelay: `${stat.delayMs}ms` }}
                >
                  <div
                    className="wk-stats-partner__number"
                    aria-label={`${stat.target}${stat.suffix}`}
                  >
                    <span className="wk-stats-partner__digit">
                      {counts[index]}
                    </span>
                    <span className="wk-stats-partner__suffix">{stat.suffix}</span>
                  </div>
                  <div className="wk-stats-partner__label">
                    {stat.label.split('\n').map((line, i) => (
                      <span key={i} className="wk-stats-partner__label-line">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Signature Blue Line Accent */}
            <div className="wk-stats-partner__line-accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};
