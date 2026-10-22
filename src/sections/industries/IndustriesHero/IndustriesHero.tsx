'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroIndElementImg from '../../../assets/industries/hero ind element.png';
import techBulbImg from '../../../assets/industries/tech_bulb_clean.png';
import { getImgSrc } from '../../../utils/image';
import { HeroBackground } from '../../../components/HeroBackground';
import './IndustriesHero.css';

/**
 * Industries Landing Page Hero Section
 * Source of Truth: Figma node 2326-6981 & attached visual reference
 * Features:
 * - Shared blueprint architectural grid background (.wk-about-hero__grid-bg)
 * - Top "Industries" eyebrow pill badge
 * - Main 3-line heading:
 *   Line 1: "T[bulb]ch solutions driving"
 *   Line 2: "transformation across"
 *   Line 3: "[hero ind element.png] industries [cursor]"
 * - Supporting text: "Explore how we've helped organizations innovate, optimize operations, and achieve growth through technology."
 * - Subtle GSAP entrance animation (10px upward + blur-to-clear) with prefers-reduced-motion check
 */
export const IndustriesHero: React.FC = () => {
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

      // Initial state with subtle 10px offset
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

      // 3. Cursor slides in smoothly
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
      className="wk-industries-hero"
      aria-labelledby="industries-hero-heading"
    >
      {/* Background Architectural Grid Lines (Exact Shared Background from About Hero) */}
      <HeroBackground />

      <div className="wk-industries-hero__container">
        {/* Top Eyebrow Pill Badge */}
        <div ref={badgeRef} className="wk-industries-hero__badge-wrapper">
          <span className="wk-industries-hero__badge">Industries</span>
        </div>

        {/* Centered Main 3-Line Display Heading */}
        <h1
          id="industries-hero-heading"
          className="wk-industries-hero__title"
          aria-label="Tech solutions driving transformation across industries"
        >
          {/* Line 1: T[bulb]ch solutions driving */}
          <span className="wk-industries-hero__title-line">
            <span ref={addWordRef} className="wk-industries-hero__tech-word">
              T
              <span className="wk-industries-hero__bulb-wrap" aria-hidden="true">
                <svg className="wk-industries-hero__bulb-img" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 41 41" fill="none">
                  <rect width="40.6465" height="40.6465" rx="20.3232" fill="white" />
                  <path d="M13.9727 28.9727C14.079 29.7385 14.1895 30.4354 14.2817 30.986C14.4126 31.7606 14.906 32.3826 15.6042 32.5001C16.152 32.5931 16.913 32.6732 17.9071 32.6732C18.8525 32.6732 19.6292 32.6007 20.2206 32.5142C21.0502 32.3926 21.6316 31.6221 21.7217 30.6938L21.8898 28.9622" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#1A87C8" />
                  <path d="M26.6088 7.3037C26.654 7.21176 26.7204 7.13505 26.8012 7.08162C26.882 7.02819 26.9742 7 27.0682 7C27.1621 7 27.2543 7.02819 27.3351 7.08162C27.4159 7.13505 27.4824 7.21176 27.5275 7.3037L28.5708 9.43275C28.8592 10.0213 29.2927 10.5051 29.82 10.827L31.7275 11.9915C31.8099 12.0418 31.8786 12.116 31.9265 12.2062C31.9744 12.2964 31.9996 12.3993 31.9996 12.5042C31.9996 12.609 31.9744 12.7119 31.9265 12.8021C31.8786 12.8923 31.8099 12.9665 31.7275 13.0168L29.82 14.1813C29.2927 14.5032 28.8592 14.9871 28.5708 15.5756L27.5275 17.7046C27.4824 17.7966 27.4159 17.8733 27.3351 17.9267C27.2543 17.9801 27.1621 18.0083 27.0682 18.0083C26.9742 18.0083 26.882 17.9801 26.8012 17.9267C26.7204 17.8733 26.654 17.7966 26.6088 17.7046L25.5655 15.5756C25.2771 14.9871 24.8436 14.5032 24.3163 14.1813L22.4088 13.0168C22.3264 12.9665 22.2577 12.8923 22.2098 12.8021C22.162 12.7119 22.1367 12.609 22.1367 12.5042C22.1367 12.3993 22.162 12.2964 22.2098 12.2062C22.2577 12.116 22.3264 12.0418 22.4088 11.9915L24.3163 10.827C24.8436 10.5051 25.2771 10.0213 25.5655 9.43275L26.6088 7.3037Z" stroke-width="2" stroke="#1A87C8" />
                  <path d="M21.3083 8.87224C20.2287 8.37464 19.0719 8.119 17.9039 8.11988C12.9863 8.11988 9 12.5691 9 18.0578C9 21.2338 10.3351 24.0621 12.4128 25.8813C12.5659 26.5644 12.7355 27.2428 12.9214 27.9156C13.0822 28.4991 13.5164 28.9229 14.0606 28.9866C14.7902 29.0714 16.0205 29.1649 17.9039 29.1649C19.7873 29.1649 21.0176 29.0714 21.7472 28.9866C22.2914 28.9229 22.7256 28.4991 22.8859 27.9151C23.0362 27.3696 23.2263 26.6407 23.395 25.8813C24.717 24.7249 25.7199 23.1757 26.2882 21.4116" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#1A87C8" />
                </svg>
              </span>
              ch
            </span>{' '}
            <span ref={addWordRef}>solutions</span>{' '}
            <span ref={addWordRef}>driving</span>
          </span>

          {/* Line 2: transformation across */}
          <span className="wk-industries-hero__title-line">
            <span ref={addWordRef}>transformation</span>{' '}
            <span ref={addWordRef}>across</span>
          </span>

          {/* Line 3: [hero ind element.png] industries [cursor] */}
          <span className="wk-industries-hero__title-line">
            <span
              ref={addWordRef}
              className="wk-industries-hero__element-wrap"
              aria-hidden="true"
            >
              <img
                src={getImgSrc(heroIndElementImg)}
                alt=""
                className="wk-industries-hero__element-img"
                width={70}
                height={52}
                loading="eager"
              />
            </span>{' '}
            <span ref={addWordRef}>industries</span>
            {/* Black Circular Pointer Cursor */}
            <span
              ref={cursorWrapRef}
              className="wk-industries-hero__cursor-wrap"
              aria-hidden="true"
            >
              <svg
                ref={cursorSvgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="73"
                viewBox="0 0 70 73"
                fill="none"
                className="wk-industries-hero__cursor-svg"
              >
                <circle cx="19" cy="19" r="19" fill="black" />
                <g filter="url(#filter0_d_ind_cursor)">
                  <path
                    d="M31.1231 62.5755L22.7611 22.9035C22.593 22.1059 23.3985 21.453 24.1439 21.7826L62.3686 38.6819C63.2209 39.0587 63.14 40.2937 62.2458 40.556L42.7065 46.2882C42.4575 46.3612 42.2466 46.5282 42.1184 46.7539L32.9712 62.863C32.5165 63.6637 31.313 63.4764 31.1231 62.5755Z"
                    fill="black"
                    strokeWidth="3"
                    stroke="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_ind_cursor"
                    x="17.2373"
                    y="20.1923"
                    width="51.2275"
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
                      result="effect1_dropShadow_ind_cursor"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_ind_cursor"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
          </span>
        </h1>

        {/* Centered Subtitle */}
        <p ref={subtitleRef} className="wk-industries-hero__subtitle">
          Explore how we've helped organizations innovate, optimize operations, and achieve growth through technology.
        </p>
      </div>
    </section>
  );
};
