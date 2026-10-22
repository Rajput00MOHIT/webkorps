'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeroBackground } from '../../../components/HeroBackground';
import './ContactHero.css';

/**
 * Contact Us Page Hero Section Component
 * Source of Truth: Figma node 1233-13323 & reference screenshot
 * Features:
 * - Reuses the exact architectural grid background from About Hero (.wk-about-hero__grid-bg)
 * - Eyebrow pill badge: "Contact Us"
 * - Centered 2-line display heading:
 *   Line 1: "Conn[phone icon]ct With Our"
 *   Line 2: "Experts [cursor pointer]"
 * - Micro-interactive cursor pointer
 * - Centered supporting subtitle
 * - GSAP entrance animation with prefers-reduced-motion support
 */
export const ContactHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const phoneIconRef = useRef<HTMLSpanElement>(null);
  const cursorSvgRef = useRef<SVGSVGElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [badgeRef.current, titleLine1Ref.current, titleLine2Ref.current, subtitleRef.current],
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }
        );
        if (cursorSvgRef.current) {
          gsap.set(cursorSvgRef.current, { opacity: 1, x: 0 });
        }
        return;
      }

      // Initial state
      gsap.set(badgeRef.current, { opacity: 0, y: -12 });
      gsap.set([titleLine1Ref.current, titleLine2Ref.current], {
        opacity: 0,
        y: 16,
        filter: 'blur(6px)',
      });
      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 12,
        filter: 'blur(4px)',
      });
      if (cursorSvgRef.current) {
        gsap.set(cursorSvgRef.current, { opacity: 0, x: -16, y: -10 });
      }

      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      })
        .to(
          [titleLine1Ref.current, titleLine2Ref.current],
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.65,
            stagger: 0.12,
          },
          '-=0.25'
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.6,
          },
          '-=0.35'
        );

      if (cursorSvgRef.current) {
        tl.to(
          cursorSvgRef.current,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.8)',
          },
          '-=0.25'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="wk-contact-hero" aria-labelledby="contact-hero-heading">
      {/* Background Architectural Grid Lines (Exact Shared Background from About Hero) */}
      <HeroBackground />

      <div className="wk-contact-hero__container">
        {/* Top Eyebrow Pill Badge */}
        <div ref={badgeRef} className="wk-contact-hero__badge-wrapper">
          <span className="wk-contact-hero__badge">Contact Us</span>
        </div>

        {/* Centered Main 2-Line Display Heading */}
        <h1
          id="contact-hero-heading"
          className="wk-contact-hero__title"
          aria-label="Connect With Our Experts"
        >
          {/* Line 1: Connect With Our */}
          <span ref={titleLine1Ref} className="wk-contact-hero__title-line">
            <span className="wk-contact-hero__connect-word">
              Conn
              <span
                ref={phoneIconRef}
                className="wk-contact-hero__phone-icon-wrap"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 38 38"
                  fill="none"
                  className="wk-contact-hero__phone-icon"
                >
                  <rect width="38" height="38" rx="19" fill="white" />
                  <path
                    d="M14 7.75C14.625 7.75 17.125 13.375 17.125 14C17.125 15.25 15.25 16.5 14.625 17.75C14 19 15.25 20.25 16.5 21.5C16.9875 21.9875 19 24 20.25 23.375C21.5 22.75 22.75 20.875 24 20.875C24.625 20.875 30.25 23.375 30.25 24C30.25 26.5 28.375 28.375 26.5 29C24.625 29.625 23.375 29.625 20.875 29C18.375 28.375 16.5 27.75 13.375 24.625C10.25 21.5 9.625 19.625 9 17.125C8.375 14.625 8.375 13.375 9 11.5C9.625 9.625 11.5 7.75 14 7.75Z"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#1A87C8"
                  />
                </svg>
              </span>
              ct
            </span>
            <span className="wk-contact-hero__with-word">With</span>
            <span className="wk-contact-hero__our-word">Our</span>
          </span>

          {/* Line 2: Experts + Cursor Pointer */}
          <span ref={titleLine2Ref} className="wk-contact-hero__title-line wk-contact-hero__title-line--second">
            <span className="wk-contact-hero__experts-word">
              Experts
              <span className="wk-contact-hero__cursor-wrap" aria-hidden="true">
                <svg
                  ref={cursorSvgRef}
                  viewBox="0 0 70 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="wk-contact-hero__cursor-svg"
                >
                  <circle cx="19" cy="19" r="19" fill="black" />
                  <g filter="url(#filter0_d_contact_cursor)">
                    <path
                      d="M31.1231 62.5755L22.7611 22.9035C22.593 22.1059 23.3985 21.453 24.1439 21.7826L62.3686 38.6819C63.2209 39.0587 63.14 40.2937 62.2458 40.556L42.7065 46.2882C42.4575 46.3612 42.2466 46.5282 42.1184 46.7539L32.9712 62.863C32.5165 63.6637 31.313 63.4764 31.1231 62.5755Z"
                      fill="black"
                      strokeWidth="3"
                      stroke="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_contact_cursor"
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
                        result="effect1_dropShadow_contact"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_contact"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </span>
          </span>
        </h1>

        {/* Supporting Subtitle */}
        <p ref={subtitleRef} className="wk-contact-hero__subtitle">
          Let&apos;s connect and explore how we can help transform your ideas into impactful digital solutions.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
