'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeroCursor } from '../../about/AboutHero/HeroCursor';
import { HeroBackground } from '../../../components/HeroBackground';
import './ServicesHero.css';

/**
 * Services Landing Page Hero Section
 * Source of Truth: Figma node 2222-10618 & service.pdf
 * Reuses the same architectural grid guide background as About Us Hero
 * Features GSAP page-load reveal: word-by-word blur+10px heading reveal,
 * supporting copy blur+10px reveal, and cursor graphic entrance from the right.
 */
export const ServicesHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const cursorWrapRef = useRef<HTMLSpanElement>(null);
  const cursorSvgRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Accessibility: show all elements instantly with zero motion
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

      // Initial state
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

      // Calculate offscreen distance for cursor graphic
      let cursorStartX = 600;
      if (cursorWrapRef.current) {
        const wrapRect = cursorWrapRef.current.getBoundingClientRect();
        cursorStartX = Math.max(window.innerWidth - wrapRect.left + 80, 500);
      }
      if (cursorSvgRef.current) {
        gsap.set(cursorSvgRef.current, {
          x: cursorStartX,
          opacity: 0,
        });
      }

      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
      });

      // 1. Badge reveals first
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.45,
      });

      // 2. Heading: Word-by-word staggered reveal (from y: 10, blur: 6px)
      tl.to(
        wordsRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.55,
          stagger: 0.045,
          ease: 'power2.out',
        },
        '-=0.2'
      );

      // 3. Cursor Graphic: Enters horizontally from right to exact position
      if (cursorSvgRef.current) {
        tl.to(
          cursorSvgRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.95,
            ease: 'power3.out',
            clearProps: 'transform', // Preserves CSS hover translation on complete
          },
          0.35 // Starts smoothly as the first line of heading finishes
        );
      }

      // 4. Supporting text: blur-to-clear transition with 10px upward movement
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
    <section ref={heroRef} className="wk-services-hero" aria-labelledby="services-hero-heading">
      {/* Background Architectural Grid Lines (Exact About Hero Background) */}
      <HeroBackground />

      <div className="wk-services-hero__container">
        {/* Top Eyebrow Pill Badge */}
        <div ref={badgeRef} className="wk-services-hero__badge-wrapper">
          <span className="wk-services-hero__badge">Services</span>
        </div>

        {/* Centered Main 3-Line Heading */}
        <h1
          id="services-hero-heading"
          className="wk-services-hero__title"
          aria-label="Powering your business with digital services built for growth and innovation"
        >
          <span className="wk-services-hero__title-line">
            <span ref={addWordRef} className="wk-services-hero__word">
              Powering
            </span>{' '}
            <span ref={addWordRef} className="wk-services-hero__word">
              your
            </span>{' '}
            <span ref={addWordRef} className="wk-services-hero__word">
              business
            </span>
            <span ref={cursorWrapRef} className="wk-services-hero__cursor-wrap" aria-hidden="true">
              <span ref={cursorSvgRef} className="wk-services-hero__cursor-anim">
                <HeroCursor className="wk-services-hero__cursor-svg" />
              </span>
            </span>
          </span>

          <span className="wk-services-hero__title-line">
            <span ref={addWordRef} className="wk-services-hero__word">
              with
            </span>{' '}
            <span ref={addWordRef} className="wk-services-hero__word">
              digital
            </span>{' '}
            <span ref={addWordRef} className="wk-services-hero__word">
              services
            </span>{' '}
            <span ref={addWordRef} className="wk-services-hero__word">
              built
            </span>
          </span>

          <span className="wk-services-hero__title-line">
            <span ref={addWordRef} className="wk-services-hero__word">
              for
            </span>{' '}
            <span
              ref={addWordRef}
              className="wk-services-hero__word wk-services-hero__growth-word"
            >
              gr
              <span className="wk-services-hero__growth-arrow-wrap" aria-hidden="true">
                <svg
                  viewBox="18.5 16 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="wk-services-hero__growth-svg"
                >
                  <circle cx="38.1211" cy="35.8788" r="18.5" fill="white" />
                  <path
                    d="M45.2022 28.2199C45.0986 27.4528 44.3927 26.915 43.6256 27.0187L31.1256 28.7078C30.3586 28.8115 29.8208 29.5174 29.9244 30.2844C30.0281 31.0515 30.7339 31.5893 31.501 31.4856L42.6121 29.9841L44.1136 41.0953C44.2173 41.8623 44.9231 42.4001 45.6902 42.2965C46.4573 42.1928 46.9951 41.4869 46.8914 40.7199L45.2022 28.2199ZM32.4287 43.3499L33.5435 44.1992L44.9281 29.2569L43.8133 28.4075L42.6985 27.5582L31.3139 42.5005L32.4287 43.3499Z"
                    fill="#1A87C8"
                  />
                </svg>
              </span>
              wth
            </span>{' '}
            <span ref={addWordRef} className="wk-services-hero__word">
              and
            </span>{' '}
            <span ref={addWordRef} className="wk-services-hero__word">
              innovation
            </span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p ref={subtitleRef} className="wk-services-hero__subtitle">
          Explore the milestones, achievements, and moments that{' '}
          <br className="wk-services-hero__br-desktop" />
          define the WebKorps journey.
        </p>
      </div>
    </section>
  );
};
