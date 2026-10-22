'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroElementImg from '../../../assets/case-studies/hero element.png';
import { getImgSrc } from '../../../utils/image';
import { HeroBackground } from '../../../components/HeroBackground';
import './CaseStudiesHero.css';

/**
 * Case Studies Landing Page Hero Section
 * Source of Truth: Figma node 2310-6946 & Case Studies.pdf
 * Features:
 * - Reuses the exact same architectural grid background as Insights Hero (.wk-about-hero__grid-bg)
 * - Top "Case Studies" pill eyebrow badge
 * - "Case Studies of Digital [hero element.png]"
 * - "Products That Solve Real"
 * - "B<icon>siness Problems [cursor]" with custom SVG icon replacing "u"
 * - Centered supporting subtitle
 * - GSAP entrance animations matching Insights Hero standard
 */
export const CaseStudiesHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const cursorWrapRef = useRef<HTMLSpanElement>(null);
  const cursorSvgRef = useRef<SVGSVGElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([badgeRef.current, wordsRef.current, subtitleRef.current], {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        });
        if (cursorSvgRef.current) {
          gsap.set(cursorSvgRef.current, { opacity: 1, x: 0 });
        }
        return;
      }

      // Initial states
      gsap.set(badgeRef.current, { opacity: 0, y: 10 });
      gsap.set(wordsRef.current, {
        opacity: 0,
        y: 10,
        filter: 'blur(6px)',
      });
      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 10,
        filter: 'blur(6px)',
      });

      // Prepare cursor slide-in from right
      if (cursorWrapRef.current && cursorSvgRef.current) {
        const wrapRect = cursorWrapRef.current.getBoundingClientRect();
        const initialOffset = window.innerWidth - wrapRect.left + 80;
        gsap.set(cursorSvgRef.current, {
          x: Math.max(initialOffset, 300),
          opacity: 0,
        });
      }

      // Master entrance timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        delay: 0.15,
      });

      // 1. Badge reveal
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      });

      // 2. Words reveal with stagger
      tl.to(
        wordsRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.55,
          stagger: 0.04,
          ease: 'power2.out',
        },
        '-=0.2'
      );

      // 3. Cursor slides smoothly in from right
      if (cursorSvgRef.current) {
        tl.to(
          cursorSvgRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.45'
        );
      }

      // 4. Subtitle blur-to-clear reveal
      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.65,
          ease: 'power2.out',
        },
        '-=0.3'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addWordRef = (el: HTMLSpanElement | null) => {
    if (el && !wordsRef.current.includes(el)) {
      wordsRef.current.push(el);
    }
  };

  return (
    <section
      ref={heroRef}
      className="wk-case-studies-hero"
      aria-labelledby="case-studies-hero-heading"
    >
      {/* Background Architectural Grid Lines (Exact Shared Background from About Hero) */}
      <HeroBackground />

      <div className="wk-case-studies-hero__container">
        {/* Top Eyebrow Pill Badge */}
        <div ref={badgeRef} className="wk-case-studies-hero__badge-wrapper">
          <span className="wk-case-studies-hero__badge">Case Studies</span>
        </div>

        {/* Centered Main 3-Line Display Heading */}
        <h1
          id="case-studies-hero-heading"
          className="wk-case-studies-hero__title"
          aria-label="Case Studies of Digital Products That Solve Real Business Problems"
        >
          {/* Line 1: Case Studies of Digital [hero element.png] */}
          <span className="wk-case-studies-hero__title-line">
            <span ref={addWordRef}>Case</span>{' '}
            <span ref={addWordRef}>Studies</span>{' '}
            <span ref={addWordRef}>of</span>{' '}
            <span ref={addWordRef}>Digital</span>
            <span
              ref={addWordRef}
              className="wk-case-studies-hero__element-wrap"
              aria-hidden="true"
            >
              <img
                src={getImgSrc(heroElementImg)}
                alt=""
                className="wk-case-studies-hero__element-img"
                width={72}
                height={72}
                loading="eager"
              />
            </span>
          </span>

          {/* Line 2: Products That Solve Real */}
          <span className="wk-case-studies-hero__title-line">
            <span ref={addWordRef}>Products</span>{' '}
            <span ref={addWordRef}>That</span>{' '}
            <span ref={addWordRef}>Solve</span>{' '}
            <span ref={addWordRef}>Real</span>
          </span>

          {/* Line 3: Business Problems [cursor] */}
          <span className="wk-case-studies-hero__title-line">
            <span ref={addWordRef} className="wk-case-studies-hero__business-word">
              B
              <span
                className="wk-case-studies-hero__u-icon-wrap"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  className="wk-case-studies-hero__u-icon"
                >
                  <rect width="43" height="43" rx="21.5" fill="white" />
                  <path
                    d="M32.671 18.051C34.0767 16.6452 33.4357 15.0033 32.671 14.2048L29.2971 10.831C27.8801 9.42521 26.2494 10.0662 25.451 10.831L23.5391 12.7541H20.6264C18.4896 12.7541 17.2525 13.8787 16.6227 15.172L11.6295 20.1653V24.6637L10.831 25.451C9.42521 26.868 10.0662 28.4987 10.831 29.2971L14.2048 32.671C14.8121 33.2783 15.4644 33.5032 16.0829 33.5032C16.8814 33.5032 17.6124 33.1096 18.051 32.671L21.0875 29.6233H25.1248C27.0367 29.6233 28.0038 28.4312 28.3525 27.2616C29.6233 26.9242 30.3205 25.957 30.6017 25.0124C32.3448 24.5625 32.9971 22.9093 32.9971 21.751V18.3771H32.3336L32.671 18.051ZM30.7479 21.751C30.7479 22.2571 30.5342 22.8756 29.6233 22.8756H28.4987V24.0002C28.4987 24.5063 28.285 25.1248 27.374 25.1248H26.2494V26.2494C26.2494 26.7555 26.0358 27.374 25.1248 27.374H20.1653L16.4765 31.0628C16.1279 31.3889 15.9255 31.1977 15.8018 31.074L12.4392 27.7227C12.113 27.374 12.3042 27.1716 12.4279 27.0479L13.8787 25.5859V21.0875L16.1279 18.8382V20.6264C16.1279 21.9871 17.0276 24.0002 19.5018 24.0002C21.9759 24.0002 22.8756 21.9871 22.8756 20.6264H30.7479V21.751ZM31.074 16.454L29.1622 18.3771H20.6264V20.6264C20.6264 21.1324 20.4127 21.751 19.5018 21.751C18.5908 21.751 18.3771 21.1324 18.3771 20.6264V17.2525C18.3771 16.7352 18.5683 15.0033 20.6264 15.0033H24.4613L27.0254 12.4392C27.374 12.113 27.5765 12.3042 27.7002 12.4279L31.0628 15.7793C31.3889 16.1279 31.1977 16.3303 31.074 16.454Z"
                    fill="#1887C9"
                  />
                </svg>
              </span>
              siness
            </span>{' '}
            <span ref={addWordRef}>Problems</span>
            {/* Black Circular Pointer Cursor */}
            <span
              ref={cursorWrapRef}
              className="wk-case-studies-hero__cursor-wrap"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="73" viewBox="0 0 70 73" fill="none">
                <circle cx="19" cy="19" r="19" fill="black" />
                <g filter="url(#filter0_d_1233_11509)">
                  <path d="M31.1231 62.5755L22.7611 22.9035C22.593 22.1059 23.3985 21.453 24.1439 21.7826L62.3686 38.6819C63.2209 39.0587 63.14 40.2937 62.2458 40.556L42.7065 46.2882C42.4575 46.3612 42.2466 46.5282 42.1184 46.7539L32.9712 62.863C32.5165 63.6637 31.313 63.4764 31.1231 62.5755Z" fill="black" stroke-width="3" stroke="white" />
                </g>
                <defs>
                  <filter id="filter0_d_1233_11509" x="17.2373" y="20.1923" width="51.2275" height="52.6781" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1233_11509" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1233_11509" result="shape" />
                  </filter>
                </defs>
              </svg>
            </span>
          </span>
        </h1>

        {/* Centered Subtitle */}
        <p ref={subtitleRef} className="wk-case-studies-hero__subtitle">
          Explore industry trends, expert perspectives, and innovative ideas shaping the future of business.
        </p>
      </div>
    </section>
  );
}; 
