'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeroBackground } from '../../../components/HeroBackground';
import './CareersHero.css';

/**
 * Careers Hero Section Component
 * Source of Truth: Figma node 2333-7004 & reference screenshot
 * Features:
 * - Shared architectural grid background from AboutHero
 * - Eyebrow pill badge: "Careers"
 * - Display heading with integrated Figma SVGs:
 *     - "Build Your F[briefcase]ture"
 *     - "With Purpose at"
 *     - "Webkorps [cursor]"
 * - Subtitle description
 * - Primary CTA: "Explore Opportunities"
 */
export const CareersHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const briefcaseRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // 1. Badge entrance
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.6 }
        );
      }

      // 2. Heading lines entrance
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75 },
          '-=0.3'
        );
      }

      // 3. Briefcase icon pop entrance
      if (briefcaseRef.current) {
        tl.fromTo(
          briefcaseRef.current,
          { scale: 0.6, opacity: 0, rotate: -10 },
          { scale: 1, opacity: 1, rotate: 0, duration: 0.5, ease: 'back.out(1.7)' },
          '-=0.4'
        );
      }

      // 4. Cursor badge entrance with slight float
      if (cursorRef.current) {
        tl.fromTo(
          cursorRef.current,
          { scale: 0.6, opacity: 0, y: 10 },
          { scale: 1, opacity: 1, y: 0, duration: 0.55, ease: 'back.out(1.8)' },
          '-=0.35'
        );

        // Subtle ambient cursor floating motion
        gsap.to(cursorRef.current, {
          y: -4,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: 0.2,
        });
      }

      // 5. Description entrance
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );
      }

      // 6. CTA entrance
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.25'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="wk-careers-hero"
      aria-labelledby="careers-hero-heading"
    >
      {/* Background Architectural Grid Lines (Exact Shared Background from About Hero) */}
      <HeroBackground />

      <div className="wk-careers-hero__container">
        {/* Top Eyebrow Pill Badge */}
        <div ref={badgeRef} className="wk-careers-hero__badge-wrapper">
          <span className="wk-careers-hero__badge">Careers</span>
        </div>

        {/* Centered Main 3-Line Display Heading */}
        <h1
          ref={titleRef}
          id="careers-hero-heading"
          className="wk-careers-hero__title"
          aria-label="Build Your Future With Purpose at Webkorps"
        >
          {/* Line 1: Build Your F[briefcase]ture */}
          <span className="wk-careers-hero__title-line">
            Build Your F
            <span
              ref={briefcaseRef}
              className="wk-careers-hero__briefcase-wrap"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="wk-careers-hero__briefcase-svg"
              >
                <rect width="40" height="40" rx="20" fill="white" />
                <path
                  d="M20.8318 29.8841H19.562C16.3149 29.8841 14.6918 29.8841 13.6828 28.8561C12.6738 27.8281 12.6738 26.1733 12.6738 22.8647C12.6738 19.556 12.6738 17.9012 13.6828 16.8732C14.6918 15.8452 16.3149 15.8452 19.562 15.8452H23.0065C26.2536 15.8452 27.8775 15.8452 28.8865 16.8732C29.6627 17.6639 29.8412 18.826 29.8828 20.8268"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                  stroke="#1A87C8"
                />
                <path
                  d="M25.6262 15.8452L25.5357 15.5644L25.5342 15.5597C25.0868 14.168 24.863 13.4717 24.3301 13.0736C23.7958 12.6751 23.0875 12.6751 21.6682 12.6751H21.43C20.0125 12.6751 19.3033 12.6751 18.7698 13.0736C18.236 13.4717 18.0122 14.168 17.5649 15.5598L17.5634 15.5644L17.4746 15.8452M26.6325 22.8692L26.6347 22.8671C26.8008 22.7145 26.8839 22.6382 26.9849 22.6382C27.0858 22.6382 27.1689 22.7145 27.335 22.8671L27.3372 22.8692L27.983 23.4643L27.9868 23.4677C28.0622 23.537 28.1006 23.5723 28.1478 23.5892C28.1967 23.6074 28.2493 23.6056 28.3561 23.601L29.2275 23.5666C29.4521 23.5575 29.5644 23.5539 29.6414 23.6182C29.7184 23.6825 29.7338 23.7939 29.7637 24.0168L29.8832 24.9098L29.8849 24.9216C29.8982 25.017 29.905 25.0655 29.9294 25.1091C29.9543 25.1517 29.994 25.1831 30.0725 25.245L30.077 25.2486L30.7799 25.8011L30.7854 25.8054C30.9556 25.9402 31.0409 26.0077 31.058 26.1045C31.075 26.2012 31.0176 26.2943 30.9043 26.4784L30.9004 26.4849L30.4239 27.2521C30.3696 27.3399 30.3424 27.3843 30.3334 27.4332C30.3243 27.4821 30.3352 27.5337 30.3569 27.6352L30.5462 28.521L30.548 28.5295C30.5921 28.7412 30.6144 28.8482 30.5652 28.934C30.5155 29.0208 30.4099 29.0552 30.1997 29.1238L30.1984 29.1242L29.3597 29.3968L29.3553 29.3983C29.2586 29.4299 29.2088 29.4462 29.1704 29.4784C29.1315 29.5119 29.107 29.559 29.059 29.6523L28.6496 30.4412C28.5454 30.6431 28.4929 30.7437 28.3978 30.7781C28.3032 30.8123 28.1996 30.7695 27.9916 30.6834L27.9884 30.6821L27.1841 30.3488L27.1757 30.3453C27.0826 30.3068 27.035 30.2872 26.9849 30.2872C26.9347 30.2872 26.8871 30.3068 26.794 30.3453L26.7856 30.3488L25.9813 30.6821L25.9781 30.6834C25.7701 30.7695 25.6665 30.8123 25.5719 30.7781C25.4768 30.7437 25.4243 30.6423 25.3202 30.4413L25.3201 30.4412L24.9107 29.6523L24.9038 29.639C24.8595 29.5544 24.8364 29.5103 24.7993 29.4793C24.7604 29.4467 24.7096 29.4294 24.61 29.3977L23.7713 29.1242L23.77 29.1238C23.5598 29.0552 23.4542 29.0208 23.4045 28.934C23.3547 28.8471 23.3773 28.7393 23.4235 28.521L23.6137 27.6352L23.6151 27.6283C23.635 27.5314 23.6452 27.4819 23.6363 27.4341C23.6178 27.3686 23.587 27.3071 23.5458 27.253L23.0703 26.4849C22.9525 26.2965 22.8945 26.2023 22.9118 26.1045C22.9289 26.0072 23.015 25.9395 23.187 25.8042L23.1898 25.802L23.8927 25.2495L23.9012 25.2426C23.9771 25.182 24.0158 25.151 24.0403 25.1082C24.0653 25.0644 24.0718 25.0145 24.085 24.9132L24.0856 24.9089L24.2061 24.0168C24.2359 23.7949 24.2513 23.6825 24.3283 23.6182C24.4053 23.5539 24.5176 23.5575 24.7422 23.5666L25.6145 23.601C25.7204 23.6056 25.773 23.6074 25.8219 23.5892C25.8699 23.5711 25.9088 23.5358 25.9867 23.4643L26.6325 22.8692Z"
                  strokeWidth="1.875"
                  stroke="#1A87C8"
                />
              </svg>
            </span>
            ture
          </span>

          {/* Line 2: With Purpose at */}
          <span className="wk-careers-hero__title-line">
            With Purpose at
          </span>

          {/* Line 3: Webkorps [cursor] */}
          <span className="wk-careers-hero__title-line">
            Webkorps
            <span
              ref={cursorRef}
              className="wk-careers-hero__cursor-wrap"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="50"
                viewBox="0 0 70 73"
                fill="none"
                className="wk-careers-hero__cursor-svg"
              >
                <circle cx="19" cy="19" r="19" fill="black" />
                <g filter="url(#careers_cursor_filter)">
                  <path
                    d="M31.1231 62.5755L22.7611 22.9035C22.593 22.1059 23.3985 21.453 24.1439 21.7826L62.3686 38.6819C63.2209 39.0587 63.14 40.2937 62.2458 40.556L42.7065 46.2882C42.4575 46.3612 42.2466 46.5282 42.1184 46.7539L32.9712 62.863C32.5165 63.6637 31.313 63.4764 31.1231 62.5755Z"
                    fill="black"
                    strokeWidth="3"
                    stroke="white"
                  />
                </g>
                <defs>
                  <filter
                    id="careers_cursor_filter"
                    x="17.2363"
                    y="20.1923"
                    width="51.2285"
                    height="52.6781"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1233_12733"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1233_12733"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
          </span>
        </h1>

        {/* Centered Supporting Subtitle */}
        <p ref={descRef} className="wk-careers-hero__desc">
          Explore opportunities, grow your skills, and build impactful solutions with a team that values innovation.
        </p>

        {/* Primary CTA Button */}
        <div ref={ctaRef} className="wk-careers-hero__cta-wrapper">
          <a
            href="#our-hiring-process"
            className="wk-careers-hero__cta-btn"
            aria-label="Explore Opportunities - View Our Hiring Process"
          >
            <span>Explore Opportunities</span>
            <svg
              className="wk-careers-hero__cta-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
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
    </section>
  );
};

export default CareersHero;
