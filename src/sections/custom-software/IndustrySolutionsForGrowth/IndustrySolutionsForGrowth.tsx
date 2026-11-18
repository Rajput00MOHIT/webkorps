'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  INDUSTRY_SOLUTIONS_DATA,
} from './industrySolutionsData';
import { getImgSrc } from '../../../utils/image';
import './IndustrySolutionsForGrowth.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const IndustrySolutionsForGrowth: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Continuous floating virtual track progress (0.0 = Healthcare, 1.0 = Logistics, etc.)
  const trackObj = useRef({ progress: 0 });
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  /**
   * Depth-Based 3D Transform Function (Hidden Offscreen Track)
   *
   * Rules:
   * - Only the active image (d = 0) is centered and visible.
   * - Upcoming images (d >= 1) stay outside the right viewport boundary (x >= 125%, opacity: 0).
   * - Previous images (d <= -1) stay outside the left viewport boundary (x <= -125%, opacity: 0).
   * - During transitions (-1 < d < 1):
   *     - Right to Center (d: 1 -> 0): enters from right (125% -> 0%), scales up from 0.75 -> 1.0, z: -220px -> 0px.
   *     - Center to Left (d: 0 -> -1): moves left (0% -> -125%), scales up to 1.22, exits completely.
   */
  const applyTrackPosition = useCallback((progress: number) => {
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const d = i - progress;

      // Completely offscreen left (previous items)
      if (d <= -1.0) {
        const extra = Math.abs(d) - 1.0;
        const xPercent = -125 - extra * 40;
        el.style.transform = `translate3d(${xPercent}%, 0, 100px) scale(1.22)`;
        el.style.opacity = '0';
        el.style.filter = 'blur(6px)';
        el.style.visibility = 'hidden';
        el.style.zIndex = '5';
        return;
      }

      // Completely offscreen right (upcoming items)
      if (d >= 1.0) {
        const extra = d - 1.0;
        const xPercent = 125 + extra * 40;
        el.style.transform = `translate3d(${xPercent}%, 0, -220px) scale(0.75)`;
        el.style.opacity = '0';
        el.style.filter = 'blur(6px)';
        el.style.visibility = 'hidden';
        el.style.zIndex = '5';
        return;
      }

      // Active Center/Front (d = 0)
      if (Math.abs(d) < 0.001) {
        el.style.transform = 'translate3d(0%, 0, 0px) scale(1)';
        el.style.opacity = '1';
        el.style.filter = 'none';
        el.style.visibility = 'visible';
        el.style.zIndex = '30';
        return;
      }

      // Transitioning: Right to Center (0 < d < 1.0)
      if (d > 0) {
        const xPercent = d * 125; // 125% down to 0%
        const z = -d * 220; // -220px in depth up to 0px
        const scale = 1 - d * 0.25; // 0.75 up to 1.0
        const opacity = Math.max(0, 1 - d * 1.1); // fades in as d -> 0
        const blur = d * 6; // clears blur as it approaches center

        el.style.transform = `translate3d(${xPercent}%, 0, ${z}px) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.filter = blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : 'none';
        el.style.visibility = opacity <= 0.01 ? 'hidden' : 'visible';
        el.style.zIndex = '15';
        return;
      }

      // Transitioning: Center to Left ( -1.0 < d < 0)
      const absD = Math.abs(d);
      const xPercent = d * 125; // 0% down to -125%
      const z = absD * 100; // comes forward towards viewer
      const scale = 1 + absD * 0.22; // scales up to 1.22
      const opacity = Math.max(0, 1 - absD * 1.2); // fades out as it exits
      const blur = absD * 6; // motion blur on exit

      el.style.transform = `translate3d(${xPercent}%, 0, ${z}px) scale(${scale})`;
      el.style.opacity = `${opacity}`;
      el.style.filter = blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : 'none';
      el.style.visibility = opacity <= 0.01 ? 'hidden' : 'visible';
      el.style.zIndex = '25';
    });
  }, []);

  /**
   * Handle Industry Click (Sequential or Direct Skip)
   */
  const handleSelectIndustry = (targetIndex: number) => {
    if (targetIndex === activeIndex) return;

    setActiveIndex(targetIndex);

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      trackObj.current.progress = targetIndex;
      applyTrackPosition(targetIndex);
      return;
    }

    const currentProgress = trackObj.current.progress;
    const delta = Math.abs(targetIndex - currentProgress);
    // Smooth dynamic duration: 0.65s for adjacent, scaling up to ~1.15s for multi-item skips
    const duration = Math.min(0.65 + delta * 0.11, 1.15);

    if (tweenRef.current) {
      tweenRef.current.kill();
    }

    tweenRef.current = gsap.to(trackObj.current, {
      progress: targetIndex,
      duration,
      ease: 'power3.inOut',
      onUpdate: () => {
        applyTrackPosition(trackObj.current.progress);
      },
      onComplete: () => {
        applyTrackPosition(targetIndex);
      },
    });
  };

  /**
   * Initial Setup & Viewport Scroll Reveal
   */
  useEffect(() => {
    if (!sectionRef.current) return;

    // Set initial position: Healthcare centered (0), all others hidden outside viewport
    trackObj.current.progress = 0;
    applyTrackPosition(0);

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header entrance animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
      ctx.revert();
    };
  }, [applyTrackPosition]);

  return (
    <section
      ref={sectionRef}
      id="industry-solutions-growth"
      className="wk-ind-sol"
      aria-labelledby="ind-sol-heading"
    >
      <div className="wk-ind-sol__container">
        {/* Section Heading Area (Left-Aligned per Figma Reference) */}
        <div ref={headerRef} className="wk-ind-sol__header">
          <h2 id="ind-sol-heading" className="wk-ind-sol__title">
            Industry Solutions{' '}
            <span className="wk-ind-sol__title-accent">for Growth.</span>
          </h2>
          <p className="wk-ind-sol__subtitle">
            We combine deep industry understanding with technology expertise to
            build solutions that solve real challenges and create lasting impact.
          </p>
        </div>

        {/* Two-Column Body */}
        <div className="wk-ind-sol__body">
          {/* Left Column: 6-Industry Accordion */}
          <div
            className="wk-ind-sol__accordion"
            role="tablist"
            aria-label="Industry Solutions Accordion"
          >
            {INDUSTRY_SOLUTIONS_DATA.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  className={`wk-ind-sol__accordion-item ${
                    isActive ? 'wk-ind-sol__accordion-item--active' : ''
                  }`}
                >
                  <button
                    type="button"
                    role="tab"
                    id={`accordion-header-${item.id}`}
                    aria-selected={isActive}
                    aria-expanded={isActive}
                    aria-controls={`accordion-panel-${item.id}`}
                    className="wk-ind-sol__accordion-btn"
                    onClick={() => handleSelectIndustry(index)}
                  >
                    <span className="wk-ind-sol__item-title">{item.name}</span>
                    <span className="wk-ind-sol__toggle-icon" aria-hidden="true">
                      {isActive ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Accordion Content Panel */}
                  <div
                    id={`accordion-panel-${item.id}`}
                    role="tabpanel"
                    aria-labelledby={`accordion-header-${item.id}`}
                    className="wk-ind-sol__item-content"
                    style={{
                      maxHeight: isActive ? '180px' : '0px',
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <p className="wk-ind-sol__item-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Viewport with Hidden 3D Offscreen Track */}
          <div className="wk-ind-sol__visual-col">
            <div className="wk-ind-sol__viewport" aria-hidden="true">
              {INDUSTRY_SOLUTIONS_DATA.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="wk-ind-sol__track-item"
                  data-index={index}
                >
                  <img
                    src={getImgSrc(item.image)}
                    alt={item.imageAlt}
                    className="wk-ind-sol__image"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
