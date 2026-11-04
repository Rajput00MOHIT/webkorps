'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Container } from '../../../components/Container/Container';
import { CaseStudyCard } from './CaseStudyCard';
import { CASE_STUDIES_DATA } from './caseStudiesData';
import './CaseStudies.css';

// Double the cards to create an infinite, seamless continuous carousel
const INFINITE_CASE_STUDIES = [...CASE_STUDIES_DATA, ...CASE_STUDIES_DATA];

export const CaseStudies: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(20);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // Animation refs for continuous subpixel precision
  const scrollPosRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const isInteractingRef = useRef<boolean>(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Update paused state ref whenever hover/focus changes
  useEffect(() => {
    isPausedRef.current = isHovered || isFocused || isInteractingRef.current;
  }, [isHovered, isFocused]);

  // Main continuous slow animation loop using requestAnimationFrame
  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lastTimestamp = performance.now();

    const step = (timestamp: number) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const track = trackRef.current;
      if (track && !isPausedRef.current) {
        const totalCards = INFINITE_CASE_STUDIES.length;
        const halfCards = totalCards / 2;
        const firstCard = track.children[0] as HTMLElement | undefined;
        const middleCard = track.children[halfCards] as HTMLElement | undefined;

        // Measure single set width accurately from DOM elements
        const singleSetWidth =
          middleCard && firstCard
            ? middleCard.offsetLeft - firstCard.offsetLeft
            : track.scrollWidth / 2;

        // Smooth continuous slow glide (~26px per second)
        const speed = (26 * delta) / 1000;
        scrollPosRef.current += speed;

        // Seamless wrap around when reaching the middle identical set
        if (singleSetWidth > 0 && scrollPosRef.current >= singleSetWidth) {
          scrollPosRef.current -= singleSetWidth;
        }

        track.scrollLeft = scrollPosRef.current;

        // Update progress bar smoothly (15% to 100%)
        if (singleSetWidth > 0) {
          const progress = Math.min(
            100,
            Math.max(15, ((scrollPosRef.current % singleSetWidth) / singleSetWidth) * 100)
          );
          setScrollProgress(progress);
        }
      }

      animFrameIdRef.current = requestAnimationFrame(step);
    };

    animFrameIdRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [isVisible]);

  // Manual scroll handler for Previous and Next arrow controls
  const handleScroll = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.children[0] as HTMLElement | undefined;
    const middleCard = track.children[CASE_STUDIES_DATA.length] as HTMLElement | undefined;
    const card = track.querySelector<HTMLElement>('.wk-case-study-card');
    const cardStep = card ? card.offsetWidth + 20 : 320;

    const singleSetWidth =
      middleCard && firstCard
        ? middleCard.offsetLeft - firstCard.offsetLeft
        : track.scrollWidth / 2;

    // Temporarily pause continuous auto-glide while manual navigation occurs
    isInteractingRef.current = true;
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    let current = track.scrollLeft;

    if (direction === 'right') {
      current += cardStep;
      if (current >= singleSetWidth * 2 - track.clientWidth) {
        current -= singleSetWidth;
        track.scrollLeft = current - cardStep;
      }
    } else {
      current -= cardStep;
      if (current < 0) {
        current += singleSetWidth;
        track.scrollLeft = current + cardStep;
      }
    }

    track.scrollTo({ left: current, behavior: 'smooth' });
    scrollPosRef.current = current;

    if (singleSetWidth > 0) {
      const progress = Math.min(
        100,
        Math.max(15, ((current % singleSetWidth) / singleSetWidth) * 100)
      );
      setScrollProgress(progress);
    }

    // Resume continuous gliding after 3 seconds of user inactivity
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
      if (!isHovered && !isFocused) {
        if (trackRef.current && singleSetWidth > 0) {
          scrollPosRef.current = trackRef.current.scrollLeft % singleSetWidth;
        }
        isPausedRef.current = false;
      }
    }, 3000);
  };

  // Sync scrollPosRef when user manually scrolls or touches the carousel
  const handleManualScroll = () => {
    if ((isHovered || isFocused) && trackRef.current) {
      scrollPosRef.current = trackRef.current.scrollLeft;
      const firstCard = trackRef.current.children[0] as HTMLElement | undefined;
      const middleCard = trackRef.current.children[CASE_STUDIES_DATA.length] as HTMLElement | undefined;
      const singleSetWidth =
        middleCard && firstCard
          ? middleCard.offsetLeft - firstCard.offsetLeft
          : trackRef.current.scrollWidth / 2;

      if (singleSetWidth > 0) {
        const progress = Math.min(
          100,
          Math.max(15, ((scrollPosRef.current % singleSetWidth) / singleSetWidth) * 100)
        );
        setScrollProgress(progress);
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className={`wk-case-studies ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="case-studies-heading"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Container size="wide">
        {/* Section Top / Heading & View All CTA */}
        <div className="wk-case-studies__top">
          <div className="wk-case-studies__heading-group">
            <h2 id="case-studies-heading" className="wk-case-studies__title">
              Industry-focused solutions for<br />
              <span className="wk-case-studies__title-accent">
                real business challenges
              </span>
            </h2>
          </div>

          <a
            href="/case-studies"
            className="wk-case-studies__view-all"
            aria-label="View all case studies"
          >
            View all
            <span className="wk-case-studies__view-all-arrow" aria-hidden="true">
              &gt;&gt;
            </span>
          </a>
        </div>

        {/* Case Study Cards Carousel/Grid (Infinite continuous glide, 4 visible on desktop) */}
        <div
          ref={trackRef}
          className="wk-case-studies__track"
          tabIndex={0}
          aria-label="Case studies list"
          onScroll={handleManualScroll}
          onFocusCapture={() => setIsFocused(true)}
          onBlurCapture={() => setIsFocused(false)}
        >
          {INFINITE_CASE_STUDIES.map((study, index) => (
            <CaseStudyCard
              key={`${study.id}-${index}`}
              caseStudy={study}
            />
          ))}
        </div>

        {/* Bottom Navigation Track Bar & Action Arrows */}
        <div className="wk-case-studies__bottom-nav" aria-hidden="false">
          <div
            className="wk-case-studies__progress-track"
            role="progressbar"
            aria-label="Case studies reading progress"
            aria-valuenow={Math.round(scrollProgress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="wk-case-studies__progress-fill"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <div className="wk-case-studies__nav-controls">
            <button
              type="button"
              className="wk-case-studies__nav-btn"
              onClick={() => handleScroll('left')}
              aria-label="Previous case study"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <button
              type="button"
              className="wk-case-studies__nav-btn"
              onClick={() => handleScroll('right')}
              aria-label="Next case study"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
