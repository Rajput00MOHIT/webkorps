'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { HeroCursor } from './HeroCursor';
import './AboutHero.css';

export const AboutHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const trackRef = useRef<HTMLSpanElement>(null);
  const knobRef = useRef<HTMLSpanElement>(null);
  const turnTextRef = useRef<HTMLSpanElement>(null);
  const cursorWrapperRef = useRef<HTMLDivElement>(null);
  const cursorStartAnchorRef = useRef<HTMLSpanElement>(null);

  const [isOn, setIsOn] = useState<boolean>(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Dynamic travel distance for knob between OFF (0) and ON (maxTravel)
  const getKnobTravelDistance = useCallback((): number => {
    if (!toggleBtnRef.current || !knobRef.current) return 76;
    const btnWidth = toggleBtnRef.current.clientWidth;
    const knobWidth = knobRef.current.clientWidth;
    return Math.max(btnWidth - knobWidth + 2, 44);
  }, []);

  // Update cursor position relative to toggle and container on window resize
  const updateCursorPosition = useCallback(() => {
    if (!containerRef.current || !cursorWrapperRef.current || !toggleBtnRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const toggleRect = toggleBtnRef.current.getBoundingClientRect();

    if (isOn) {
      const finalX = toggleRect.right - containerRect.left + 14;
      const finalY = toggleRect.top - containerRect.top + toggleRect.height * 0.25;
      gsap.set(cursorWrapperRef.current, { x: finalX, y: finalY });
    } else if (cursorStartAnchorRef.current && !isAnimationComplete && !timelineRef.current?.isActive()) {
      const startRect = cursorStartAnchorRef.current.getBoundingClientRect();
      const startX = startRect.left - containerRect.left + 8;
      const startY = startRect.top - containerRect.top;
      gsap.set(cursorWrapperRef.current, { x: startX, y: startY });
    }
  }, [isOn, isAnimationComplete]);

  // Master GSAP Sequence — runs on initial mount & every full refresh
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsOn(false);
      setIsAnimationComplete(true);
      if (badgeRef.current) gsap.set(badgeRef.current, { opacity: 1, y: 0 });
      headingLinesRef.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 1, y: 0 });
      });
      if (descriptionRef.current) gsap.set(descriptionRef.current, { opacity: 1, y: 0 });
      if (cursorWrapperRef.current) gsap.set(cursorWrapperRef.current, { opacity: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const startEl = cursorStartAnchorRef.current;
      const toggleEl = toggleBtnRef.current;
      const trackEl = trackRef.current;
      const knobEl = knobRef.current;
      const turnTextEl = turnTextRef.current;
      const cursorEl = cursorWrapperRef.current;

      if (!container || !startEl || !toggleEl || !trackEl || !knobEl || !turnTextEl || !cursorEl) {
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const startRect = startEl.getBoundingClientRect();
      const toggleRect = toggleEl.getBoundingClientRect();

      // Coordinates
      const startX = startRect.left - containerRect.left + 8;
      const startY = startRect.top - containerRect.top - 4;

      const toggleCenterX = toggleRect.left - containerRect.left + toggleRect.width * 0.42;
      const toggleCenterY = toggleRect.top - containerRect.top + toggleRect.height * 0.3;

      const finalX = toggleRect.right - containerRect.left + 14;
      const finalY = toggleRect.top - containerRect.top + toggleRect.height * 0.25;

      const maxTravel = getKnobTravelDistance();

      // ========================================================
      // Phase 1 — Explicit Initial State (Toggle OFF, Cursor Hidden)
      // ========================================================
      gsap.set(badgeRef.current, { opacity: 0, y: -16 });
      headingLinesRef.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, y: 28 });
      });
      gsap.set(descriptionRef.current, { opacity: 0, y: 20 });
      gsap.set(trackEl, { width: '100%' });
      gsap.set(knobEl, { x: 0, scale: 1, opacity: 1 });
      gsap.set(turnTextEl, { opacity: 0, scale: 0.6 });
      gsap.set(cursorEl, { x: startX, y: startY, opacity: 0, scale: 0.9 });

      // Master coordinated timeline
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimationComplete(true);
        },
      });
      timelineRef.current = tl;

      // Heading and badge entrance
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power2.out',
      })
        .to(
          headingLinesRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.14,
            ease: 'power2.out',
          },
          '-=0.35'
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.45'
        );

      // ========================================================
      // Phase 2 — Cursor Approaches OFF Toggle
      // ========================================================
      tl.to(
        cursorEl,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        },
        '+=0.1'
      )
        .to(cursorEl, {
          x: toggleCenterX,
          y: toggleCenterY,
          duration: 1.15,
          ease: 'power2.inOut',
        })
        // Brief pause so interaction is clear and readable
        .to({}, { duration: 0.25 });

      // ========================================================
      // Phase 3 — Toggle Morphs into "Turn" Pill
      // ========================================================
      // 1. Knob slides toward center and shrinks
      tl.to(knobEl, {
        x: maxTravel * 0.45,
        scale: 0.2,
        opacity: 0,
        duration: 0.42,
        ease: 'power2.inOut',
      })
        // 2. Track smoothly contracts into compact text pill
        .to(
          trackEl,
          {
            width: '1.48em',
            duration: 0.42,
            ease: 'power2.inOut',
          },
          '<'
        )
        // 3. Word "Turn" fades and scales into view inside the resulting pill
        .to(
          turnTextEl,
          {
            opacity: 1,
            scale: 1,
            duration: 0.35,
            ease: 'power2.out',
          },
          '-=0.22'
        )
        // Cursor remains centered over the morphing text
        .to(
          cursorEl,
          {
            x: toggleCenterX,
            y: toggleCenterY,
            duration: 0.35,
            ease: 'power2.out',
          },
          '<'
        )
        // Pause briefly with "Turn" fully visible
        .to({}, { duration: 0.45 });

      // ========================================================
      // Phase 4 — Cursor Performs Click Automatically
      // ========================================================
      // Simulate natural mouse click on the "Turn" pill
      tl.to(cursorEl, {
        scale: 0.88,
        y: '+=3',
        duration: 0.12,
        ease: 'power1.in',
      })
        .to(
          toggleEl,
          {
            scale: 0.94,
            duration: 0.12,
            ease: 'power1.in',
          },
          '<'
        )
        .to(cursorEl, {
          scale: 1,
          y: '-=3',
          duration: 0.14,
          ease: 'power1.out',
        })
        .to(
          toggleEl,
          {
            scale: 1,
            duration: 0.14,
            ease: 'power1.out',
          },
          '<'
        )
        // Programmatic state update to ON
        .add(() => {
          setIsOn(true);
        })
        // Animate text pill back into toggle's ON appearance
        .to(
          turnTextEl,
          {
            opacity: 0,
            scale: 0.6,
            duration: 0.25,
            ease: 'power2.in',
          },
          '<'
        )
        .to(
          trackEl,
          {
            width: '100%',
            duration: 0.45,
            ease: 'power2.inOut',
          },
          '<'
        )
        // Move blue knob to ON position (right)
        .fromTo(
          knobEl,
          {
            x: maxTravel * 0.45,
            scale: 0.35,
            opacity: 0,
          },
          {
            x: maxTravel,
            scale: 1,
            opacity: 1,
            duration: 0.48,
            ease: 'power2.out',
          },
          '<+=0.06'
        )
        // Move cursor slightly away from the switch to final resting position
        .to(cursorEl, {
          x: finalX,
          y: finalY,
          duration: 0.4,
          ease: 'power2.out',
        });
    }, containerRef);

    const handleResize = () => {
      updateCursorPosition();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [getKnobTravelDistance, updateCursorPosition]);

  // Real user manual click handler (accessible & reversible)
  const handleToggleClick = () => {
    // If user clicks while initial animation is playing, safely interrupt
    if (timelineRef.current && timelineRef.current.isActive()) {
      timelineRef.current.kill();
      setIsAnimationComplete(true);
      if (trackRef.current) gsap.set(trackRef.current, { width: '100%' });
      if (turnTextRef.current) gsap.set(turnTextRef.current, { opacity: 0 });
    }

    const nextState = !isOn;
    setIsOn(nextState);

    const maxTravel = getKnobTravelDistance();

    if (nextState) {
      // Transition to ON
      gsap.to(knobRef.current, {
        x: maxTravel,
        scale: 1,
        opacity: 1,
        duration: 0.45,
        ease: 'power2.inOut',
      });
      if (trackRef.current) {
        gsap.to(trackRef.current, {
          width: '100%',
          duration: 0.35,
        });
      }
      if (turnTextRef.current) {
        gsap.to(turnTextRef.current, {
          opacity: 0,
          duration: 0.2,
        });
      }
      if (containerRef.current && toggleBtnRef.current && cursorWrapperRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const toggleRect = toggleBtnRef.current.getBoundingClientRect();
        gsap.to(cursorWrapperRef.current, {
          x: toggleRect.right - containerRect.left + 14,
          y: toggleRect.top - containerRect.top + toggleRect.height * 0.25,
          duration: 0.35,
          ease: 'power2.out',
        });
      }
    } else {
      // Transition to OFF
      gsap.to(knobRef.current, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.45,
        ease: 'power2.inOut',
      });
      if (trackRef.current) {
        gsap.to(trackRef.current, {
          width: '100%',
          duration: 0.35,
        });
      }
      if (turnTextRef.current) {
        gsap.to(turnTextRef.current, {
          opacity: 0,
          duration: 0.2,
        });
      }
    }
  };

  return (
    <section className="wk-about-hero" aria-labelledby="about-hero-heading">
      {/* Background Architectural Grid Lines */}
      <div className="wk-about-hero__grid-bg" aria-hidden="true">
        <div className="wk-about-hero__columns">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="wk-about-hero__col-guide" />
          ))}
        </div>
        <div className="wk-about-hero__rows">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="wk-about-hero__row-guide" />
          ))}
        </div>
      </div>

      <div ref={containerRef} className="site-container wk-about-hero__container">
        {/* Top Pill Badge */}
        <div ref={badgeRef} className="wk-about-hero__badge-wrapper">
          <span className="wk-about-hero__badge">About us</span>
        </div>

        {/* Main Heading with Interactive Toggle-to-Text Morph Animation */}
        <h1 id="about-hero-heading" className="wk-about-hero__heading">
          <span
            ref={(el) => {
              headingLinesRef.current[0] = el;
            }}
            className="wk-about-hero__line"
          >
            We{' '}
            {/* Stable bounding slot to prevent any heading reflow */}
            <span className="wk-about-hero__toggle-slot">
              <button
                ref={toggleBtnRef}
                type="button"
                role="switch"
                aria-checked={isOn}
                aria-label={isOn ? 'Technology interaction enabled' : 'Turn on technology interaction'}
                className={`wk-about-hero__toggle ${isOn ? 'is-on' : 'is-off'}`}
                onClick={handleToggleClick}
              >
                {/* Outer Morphable Gradient Track */}
                <span ref={trackRef} className="wk-about-hero__toggle-track">
                  {/* Recessed White Inner Track */}
                  <span className="wk-about-hero__toggle-inner-track">
                    {/* Blue Knob (Thumb) */}
                    <span
                      ref={knobRef}
                      className="wk-about-hero__toggle-knob-wrapper"
                      aria-hidden="true"
                    >
                      <span className="wk-about-hero__toggle-knob-ring">
                        <span className="wk-about-hero__toggle-knob-blue" />
                      </span>
                    </span>

                    {/* Morph Target Text: "Turn" */}
                    <span
                      ref={turnTextRef}
                      className="wk-about-hero__toggle-morph-text"
                      aria-hidden="true"
                    >
                      Turn
                    </span>
                  </span>
                </span>
              </button>
            </span>{' '}
            technology into
          </span>

          <span
            ref={(el) => {
              headingLinesRef.current[1] = el;
            }}
            className="wk-about-hero__line"
          >
            <span className="wk-about-hero__gradient-text">growth opportunities</span> for
          </span>

          <span
            ref={(el) => {
              headingLinesRef.current[2] = el;
            }}
            className="wk-about-hero__line"
          >
            your business
            {/* Design anchor for custom cursor starting position */}
            <span
              ref={cursorStartAnchorRef}
              className="wk-about-hero__cursor-anchor"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Supporting Copy */}
        <p ref={descriptionRef} className="wk-about-hero__description">
          Explore the milestones, achievements, and moments that define the WebKorps journey.
        </p>

        {/* GSAP-Controlled Custom SVG Cursor */}
        <div
          ref={cursorWrapperRef}
          className="wk-about-hero__animated-cursor"
          aria-hidden="true"
        >
          <HeroCursor className="wk-about-hero__cursor-svg" />
        </div>
      </div>
    </section>
  );
};
