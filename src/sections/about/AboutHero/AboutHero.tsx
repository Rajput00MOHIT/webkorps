'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { HeroCursor } from './HeroCursor';
import './AboutHero.css';

type ToggleState = 'off' | 'hover' | 'on';

export const AboutHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const trackRef = useRef<HTMLSpanElement>(null);
  const knobRef = useRef<HTMLSpanElement>(null);
  const turnHintRef = useRef<HTMLSpanElement>(null);
  const cursorWrapperRef = useRef<HTMLDivElement>(null);
  const cursorStartAnchorRef = useRef<HTMLSpanElement>(null);

  const [toggleState, setToggleState] = useState<ToggleState>('off');
  const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Calculate dynamic travel distance for the knob
  const getKnobTravelDistance = useCallback((): number => {
    if (!trackRef.current || !knobRef.current) return 72;
    const trackWidth = trackRef.current.clientWidth;
    const knobWidth = knobRef.current.clientWidth;
    return Math.max(trackWidth - knobWidth + 2, 40);
  }, []);

  // Update cursor position relative to current state and container
  const updateCursorPosition = useCallback(() => {
    if (!containerRef.current || !cursorWrapperRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();

    if (toggleState === 'on' && toggleBtnRef.current) {
      const toggleRect = toggleBtnRef.current.getBoundingClientRect();
      const finalX = toggleRect.right - containerRect.left + 12;
      const finalY = toggleRect.top - containerRect.top + toggleRect.height * 0.25;
      gsap.set(cursorWrapperRef.current, { x: finalX, y: finalY });
    } else if (cursorStartAnchorRef.current && !isAnimationComplete && !timelineRef.current?.isActive()) {
      const startRect = cursorStartAnchorRef.current.getBoundingClientRect();
      const startX = startRect.left - containerRect.left + 8;
      const startY = startRect.top - containerRect.top;
      gsap.set(cursorWrapperRef.current, { x: startX, y: startY });
    }
  }, [toggleState, isAnimationComplete]);

  // Master GSAP sequence on page load / refresh
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Immediate accessible reveal
      setToggleState('off');
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
      const knobEl = knobRef.current;
      const turnHintEl = turnHintRef.current;
      const cursorEl = cursorWrapperRef.current;

      if (!container || !startEl || !toggleEl || !knobEl || !turnHintEl || !cursorEl) {
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const startRect = startEl.getBoundingClientRect();
      const toggleRect = toggleEl.getBoundingClientRect();

      // Start coordinate (beside "your business" at bottom of headline)
      const startX = startRect.left - containerRect.left + 8;
      const startY = startRect.top - containerRect.top - 4;

      // Target coordinate (at the toggle knob on line 1)
      const targetX = toggleRect.left - containerRect.left + toggleRect.width * 0.32;
      const targetY = toggleRect.top - containerRect.top + toggleRect.height * 0.28;

      // Resting coordinate beside switch when ON
      const finalX = toggleRect.right - containerRect.left + 14;
      const finalY = toggleRect.top - containerRect.top + toggleRect.height * 0.25;

      const maxTravel = getKnobTravelDistance();

      // ========================================================
      // Phase A — Set Explicit Initial State
      // ========================================================
      gsap.set(badgeRef.current, { opacity: 0, y: -16 });
      headingLinesRef.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, y: 28 });
      });
      gsap.set(descriptionRef.current, { opacity: 0, y: 20 });
      gsap.set(knobEl, { x: 0 });
      gsap.set(turnHintEl, { opacity: 0, x: -10 });
      gsap.set(cursorEl, { x: startX, y: startY, opacity: 0, scale: 0.9 });

      // Create single controlled master timeline
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimationComplete(true);
        },
      });
      timelineRef.current = tl;

      // ========================================================
      // Phase B — Reveal Heading and Supporting Copy
      // ========================================================
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
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
            duration: 0.65,
            ease: 'power2.out',
          },
          '-=0.45'
        );

      // ========================================================
      // Phase C — Cursor Travels toward the Toggle Switch
      // ========================================================
      tl.to(
        cursorEl,
        {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          ease: 'power2.out',
        },
        '+=0.15'
      ).to(cursorEl, {
        x: targetX,
        y: targetY,
        duration: 1.35,
        ease: 'power2.inOut',
      });

      // ========================================================
      // Phase D — Hover and Reveal "Turn"
      // ========================================================
      tl.add(() => {
        setToggleState('hover');
      })
        .to(turnHintEl, {
          opacity: 1,
          x: 0,
          duration: 0.35,
          ease: 'power2.out',
        })
        .to(
          toggleEl,
          {
            scale: 1.04,
            duration: 0.25,
            ease: 'power1.out',
          },
          '<'
        )
        // Intentional pause so viewers clearly absorb the "Turn" interaction hint
        .to({}, { duration: 0.75 });

      // ========================================================
      // Phase E — Click to Turn ON
      // ========================================================
      // Subtle click press simulation on the cursor
      tl.to(cursorEl, {
        scale: 0.88,
        duration: 0.12,
        ease: 'power1.in',
      })
        .to(cursorEl, {
          scale: 1,
          duration: 0.14,
          ease: 'power1.out',
        })
        .add(() => {
          setToggleState('on');
        })
        // Smooth knob travel to ON position
        .to(
          knobEl,
          {
            x: maxTravel,
            duration: 0.55,
            ease: 'power2.inOut',
          },
          '<'
        )
        // Fade out "Turn" hint
        .to(
          turnHintEl,
          {
            opacity: 0,
            x: -8,
            duration: 0.3,
            ease: 'power2.in',
          },
          '<'
        )
        .to(
          toggleEl,
          {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          },
          '<'
        )
        // Cursor settles beside the switch
        .to(cursorEl, {
          x: finalX,
          y: finalY,
          duration: 0.45,
          ease: 'power2.out',
        });
    }, containerRef);

    // Window resize handler to maintain accurate positioning
    const handleResize = () => {
      updateCursorPosition();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [getKnobTravelDistance, updateCursorPosition]);

  // Handle genuine user click on toggle
  const handleToggleClick = () => {
    // Stop ongoing entrance timeline safely if user clicks during intro
    if (timelineRef.current && timelineRef.current.isActive()) {
      timelineRef.current.kill();
      setIsAnimationComplete(true);
    }

    const nextState: ToggleState = toggleState === 'on' ? 'off' : 'on';
    setToggleState(nextState);

    const maxTravel = getKnobTravelDistance();

    if (nextState === 'on') {
      // Animate knob to ON position
      gsap.to(knobRef.current, {
        x: maxTravel,
        duration: 0.45,
        ease: 'power2.inOut',
      });
      // Hide "Turn" hint
      gsap.to(turnHintRef.current, {
        opacity: 0,
        x: -8,
        duration: 0.25,
        ease: 'power2.in',
      });
      // Position cursor beside switch
      if (containerRef.current && toggleBtnRef.current && cursorWrapperRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const toggleRect = toggleBtnRef.current.getBoundingClientRect();
        gsap.to(cursorWrapperRef.current, {
          x: toggleRect.right - containerRect.left + 14,
          y: toggleRect.top - containerRect.top + toggleRect.height * 0.25,
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
        });
      }
    } else {
      // Return to OFF position
      gsap.to(knobRef.current, {
        x: 0,
        duration: 0.45,
        ease: 'power2.inOut',
      });
    }
  };

  // Real mouse hover handlers
  const handleMouseEnter = () => {
    if (toggleState === 'off') {
      setToggleState('hover');
      gsap.to(turnHintRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(toggleBtnRef.current, {
        scale: 1.04,
        duration: 0.2,
      });
    }
  };

  const handleMouseLeave = () => {
    if (toggleState === 'hover') {
      setToggleState('off');
      gsap.to(turnHintRef.current, {
        opacity: 0,
        x: -8,
        duration: 0.25,
        ease: 'power2.in',
      });
      gsap.to(toggleBtnRef.current, {
        scale: 1,
        duration: 0.2,
      });
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

        {/* Main Heading with Interactive 3-State Toggle & Custom SVG Cursor */}
        <h1 id="about-hero-heading" className="wk-about-hero__heading">
          <span
            ref={(el) => {
              headingLinesRef.current[0] = el;
            }}
            className="wk-about-hero__line"
          >
            We{' '}
            <span className="wk-about-hero__toggle-interactive-slot">
              {/* Accessible, Interactive 3-State Toggle Switch */}
              <button
                ref={toggleBtnRef}
                type="button"
                role="switch"
                aria-checked={toggleState === 'on'}
                aria-label="Turn on technology interaction"
                className={`wk-about-hero__toggle wk-about-hero__toggle--${toggleState}`}
                onClick={handleToggleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span ref={trackRef} className="wk-about-hero__toggle-track">
                  <span className="wk-about-hero__toggle-inner-track">
                    <span
                      ref={knobRef}
                      className="wk-about-hero__toggle-knob-wrapper"
                      aria-hidden="true"
                    >
                      <span className="wk-about-hero__toggle-knob-ring">
                        <span className="wk-about-hero__toggle-knob-blue" />
                      </span>
                    </span>
                  </span>
                </span>
              </button>

              {/* Interaction Hint: "Turn" */}
              <span
                ref={turnHintRef}
                className="wk-about-hero__turn-hint"
                aria-hidden="true"
              >
                Turn
              </span>
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
            {/* Start anchor for custom cursor path */}
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
