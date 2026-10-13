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

  // Stable slot and layers
  const slotRef = useRef<HTMLSpanElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const innerTrackRef = useRef<HTMLSpanElement>(null);
  const knobRef = useRef<HTMLSpanElement>(null);

  const turnWrapperRef = useRef<HTMLSpanElement>(null);
  const turnTextRef = useRef<HTMLSpanElement>(null);

  // Custom SVG cursor & start anchor
  const cursorWrapperRef = useRef<HTMLDivElement>(null);
  const cursorStartAnchorRef = useRef<HTMLSpanElement>(null);

  const [isOn, setIsOn] = useState<boolean>(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Calculate dynamic travel distance for switch knob (OFF: 0, ON: maxTravel)
  const getKnobTravelDistance = useCallback((): number => {
    if (!innerTrackRef.current || !knobRef.current) return 66;
    const trackWidth = innerTrackRef.current.clientWidth;
    const knobWidth = knobRef.current.clientWidth;
    return Math.max(trackWidth - knobWidth, 42);
  }, []);

  // Compute cursor tip offsets from SVG viewBox (arrow tip is at 25.2, 18.8 in 69x73)
  const getCursorTipOffsets = useCallback((): { x: number; y: number } => {
    if (!cursorWrapperRef.current) return { x: 25, y: 19 };
    const svgEl = cursorWrapperRef.current.querySelector('svg');
    const width = svgEl ? svgEl.clientWidth || 56 : 56;
    const scale = width / 69;
    return {
      x: 25.2 * scale,
      y: 18.8 * scale,
    };
  }, []);

  // Programmatic state updater shared with manual interaction
  const setToggleState = useCallback((nextState: boolean) => {
    setIsOn(nextState);
  }, []);

  // Window resize handler to maintain coordinate alignment
  const handleResize = useCallback(() => {
    if (!containerRef.current || !cursorWrapperRef.current || !cursorStartAnchorRef.current) return;
    if (!timelineRef.current?.isActive()) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const startRect = cursorStartAnchorRef.current.getBoundingClientRect();
      const tip = getCursorTipOffsets();
      const startX = startRect.left - containerRect.left + 4 - tip.x;
      const startY = startRect.top - containerRect.top + startRect.height * 0.3 - tip.y;
      gsap.set(cursorWrapperRef.current, { x: startX, y: startY });
    }
  }, [getCursorTipOffsets]);

  // Master GSAP Sequence — runs automatically once on every page load and refresh
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsOn(false);
      if (badgeRef.current) gsap.set(badgeRef.current, { opacity: 1, y: 0 });
      headingLinesRef.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 1, y: 0 });
      });
      if (descriptionRef.current) gsap.set(descriptionRef.current, { opacity: 1, y: 0 });
      if (cursorWrapperRef.current) gsap.set(cursorWrapperRef.current, { opacity: 0, display: 'none' });
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { opacity: 1, scale: 1, display: 'inline-flex' });
      if (knobRef.current) gsap.set(knobRef.current, { x: 0, yPercent: -50 });
      if (turnWrapperRef.current) gsap.set(turnWrapperRef.current, { opacity: 0, display: 'none' });
      return;
    }

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const startEl = cursorStartAnchorRef.current;
      const toggleBtn = toggleBtnRef.current;
      const knobEl = knobRef.current;
      const turnWrapper = turnWrapperRef.current;
      const turnText = turnTextRef.current;
      const cursorEl = cursorWrapperRef.current;

      if (!container || !startEl || !toggleBtn || !knobEl || !turnWrapper || !turnText || !cursorEl) {
        return;
      }

      // Compute element coordinates relative to container
      const containerRect = container.getBoundingClientRect();
      const startRect = startEl.getBoundingClientRect();
      const toggleRect = toggleBtn.getBoundingClientRect();
      const tip = getCursorTipOffsets();

      // Original starting position at the end of "your business"
      const startX = startRect.left - containerRect.left + 4 - tip.x;
      const startY = startRect.top - containerRect.top + startRect.height * 0.3 - tip.y;

      // Target position over the center of the toggle control
      const toggleTargetX = toggleRect.left - containerRect.left + toggleRect.width * 0.5 - tip.x;
      const toggleTargetY = toggleRect.top - containerRect.top + toggleRect.height * 0.5 - tip.y;

      // Clear waypoint for smooth curved trajectory in the open whitespace to the right of line 2
      const line2El = headingLinesRef.current[1];
      const line2Rect = line2El ? line2El.getBoundingClientRect() : startRect;
      const line2Right = line2Rect.right - containerRect.left;
      const midX = Math.max(line2Right + 36, startX + 54);
      const midY = startY - (startY - toggleTargetY) * 0.48;

      const maxTravel = getKnobTravelDistance();

      // ========================================================
      // Phase 1 — Initial State
      // ========================================================
      // Hero elements initial entrance offsets
      gsap.set(badgeRef.current, { opacity: 0, y: -16 });
      headingLinesRef.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, y: 22 });
      });
      gsap.set(descriptionRef.current, { opacity: 0, y: 16 });

      // Toggle starts visible in OFF state (knob at left x: 0)
      gsap.set(toggleBtn, { opacity: 1, scale: 1, display: 'inline-flex' });
      gsap.set(knobEl, { x: 0, scale: 1, opacity: 1 });

      // "Turn" text starts hidden
      gsap.set(turnWrapper, { opacity: 0, scale: 0.9, display: 'none' });
      gsap.set(turnText, { opacity: 0, y: 0, scale: 1 });

      // Cursor starts hidden at its original starting position
      gsap.set(cursorEl, { x: startX, y: startY, opacity: 0, scale: 1 });

      // Master coordinated timeline
      const tl = gsap.timeline();
      timelineRef.current = tl;

      // ========================================================
      // Phase 2 — Hero Entrance
      // ========================================================
      tl.addLabel('hero-enter')
        .to(badgeRef.current, {
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
            duration: 0.75,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
          },
          '-=0.35'
        );

      // ========================================================
      // Phase 3 — Cursor Travels to the OFF Toggle
      // ========================================================
      tl.addLabel('cursor-travel')
        // Cursor fades in at starting location
        .to(cursorEl, {
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
        })
        // Smooth curved trajectory that clears the heading text
        .to(cursorEl, {
          x: midX,
          y: midY,
          duration: 0.65,
          ease: 'power1.in',
        })
        .to(cursorEl, {
          x: toggleTargetX,
          y: toggleTargetY,
          duration: 0.75,
          ease: 'power1.out',
        })
        .addLabel('cursor-arrive')
        // Brief pause at toggle interactive area
        .to({}, { duration: 0.18 });

      // ========================================================
      // Phase 4 — Toggle Disappears & "Turn" is Revealed
      // ========================================================
      tl.addLabel('text-reveal')
        // Knob slides gently inward and fades
        .to(knobEl, {
          x: maxTravel * 0.3,
          scale: 0.5,
          opacity: 0,
          duration: 0.26,
          ease: 'power2.in',
        })
        // Toggle OFF layer exits with scale and opacity
        .to(
          toggleBtn,
          {
            scale: 0.86,
            opacity: 0,
            duration: 0.28,
            ease: 'power2.inOut',
            onComplete: () => {
              gsap.set(toggleBtn, { display: 'none' });
            },
          },
          '<'
        )
        // Reveal "Turn" text in the exact same inline area
        .set(turnWrapper, { display: 'inline-flex' }, '<+=0.12')
        .fromTo(
          turnWrapper,
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out', immediateRender: false },
          '<'
        )
        .fromTo(
          turnText,
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.26, ease: 'power2.out', immediateRender: false },
          '<+=0.04'
        );

      // ========================================================
      // Phase 5 — Wait Exactly One Second (1,000 ms)
      // ========================================================
      tl.addLabel('pause-one-sec').to({}, { duration: 1.0 });

      // ========================================================
      // Phase 6 — Cursor Automatically Clicks "Turn"
      // ========================================================
      tl.addLabel('click')
        // Cursor tip moves downward by a few pixels (press)
        .to(cursorEl, {
          y: toggleTargetY + 4,
          scale: 0.94,
          duration: 0.12,
          ease: 'power1.in',
        })
        // Subtle pressed state on "Turn"
        .to(
          turnText,
          {
            scale: 0.93,
            duration: 0.12,
            ease: 'power1.in',
          },
          '<'
        )
        // Cursor tip releases upward
        .to(cursorEl, {
          y: toggleTargetY,
          scale: 1,
          duration: 0.14,
          ease: 'power1.out',
        })
        .to(
          turnText,
          {
            scale: 1,
            duration: 0.14,
            ease: 'power1.out',
          },
          '<'
        )
        // Trigger actual toggle state change through shared logic
        .add(() => {
          setToggleState(true);
        });

      // ========================================================
      // Phase 7 — "Turn" Morphs into the ON Toggle
      // ========================================================
      tl.addLabel('toggle-morph')
        // "Turn" text compresses smoothly toward center and fades out
        .to(turnText, {
          scaleX: 0.5,
          scaleY: 0.7,
          opacity: 0,
          duration: 0.28,
          ease: 'power2.in',
        })
        .to(
          turnWrapper,
          {
            scale: 0.88,
            opacity: 0,
            duration: 0.28,
            ease: 'power2.in',
            onComplete: () => {
              gsap.set(turnWrapper, { display: 'none' });
            },
          },
          '<'
        )
        // Toggle track expands horizontally from the text area
        .set(toggleBtn, { display: 'inline-flex' }, '<+=0.08')
        .fromTo(
          toggleBtn,
          { opacity: 0, scaleX: 0.45, scaleY: 0.8 },
          { opacity: 1, scaleX: 1, scaleY: 1, duration: 0.42, ease: 'power2.out', immediateRender: false },
          '<'
        )
        // Knob reveals and slides from center to ON position on right
        .fromTo(
          knobEl,
          { x: maxTravel * 0.3, scale: 0.4, opacity: 0 },
          { x: maxTravel, scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out', immediateRender: false },
          '<+=0.04'
        );

      // ========================================================
      // Phase 8 — Cursor Returns to Original Starting Position
      // ========================================================
      tl.addLabel('cursor-return')
        // Pause after ON switch is fully formed
        .to({}, { duration: 0.25 })
        // Return journey along the smooth clear path
        .to(cursorEl, {
          x: midX,
          y: midY,
          duration: 0.65,
          ease: 'power1.in',
        })
        .to(cursorEl, {
          x: startX,
          y: startY,
          duration: 0.65,
          ease: 'power1.out',
        })
        // Fade out cursor near the end of return journey
        .to(
          cursorEl,
          {
            opacity: 0,
            duration: 0.35,
            ease: 'power2.out',
          },
          '-=0.35'
        );
    }, containerRef);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [getKnobTravelDistance, getCursorTipOffsets, setToggleState, handleResize]);

  // Genuine user click handler (interactive & reversible)
  const handleUserToggleClick = () => {
    // If user clicks while automatic timeline is playing, cancel it cleanly
    if (timelineRef.current && timelineRef.current.isActive()) {
      timelineRef.current.kill();
      if (cursorWrapperRef.current) gsap.set(cursorWrapperRef.current, { opacity: 0 });
      if (turnWrapperRef.current) gsap.set(turnWrapperRef.current, { display: 'none', opacity: 0 });
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { display: 'inline-flex', opacity: 1, scale: 1 });
    }

    const nextState = !isOn;
    setToggleState(nextState);

    const maxTravel = getKnobTravelDistance();

    if (nextState) {
      gsap.to(knobRef.current, {
        x: maxTravel,
        scale: 1,
        opacity: 1,
        duration: 0.38,
        ease: 'power2.out',
      });
    } else {
      gsap.to(knobRef.current, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.38,
        ease: 'power2.out',
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

        {/* Main Heading with Master GSAP Morphing Sequence */}
        <h1 id="about-hero-heading" className="wk-about-hero__heading">
          <span
            ref={(el) => {
              headingLinesRef.current[0] = el;
            }}
            className="wk-about-hero__line"
          >
            We{' '}
            {/* Stable Reserved Inline Slot (Guarantees Zero Layout Shift) */}
            <span ref={slotRef} className="wk-about-hero__slot">
              {/* Layer B: Real Accessible Toggle Component */}
              <button
                ref={toggleBtnRef}
                type="button"
                role="switch"
                aria-checked={isOn}
                aria-label={isOn ? 'Technology interaction enabled' : 'Turn on technology interaction'}
                className={`wk-about-hero__toggle ${isOn ? 'is-on' : 'is-off'}`}
                onClick={handleUserToggleClick}
              >
                <span className="wk-about-hero__toggle-track">
                  <span ref={innerTrackRef} className="wk-about-hero__toggle-inner-track">
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

              {/* Layer A: Exactly Aligned "Turn" Text Control */}
              <span
                ref={turnWrapperRef}
                className="wk-about-hero__turn-wrapper"
                aria-hidden="true"
              >
                <span ref={turnTextRef} className="wk-about-hero__turn-text">
                  Turn
                </span>
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
            {/* Design anchor for custom SVG cursor starting location */}
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
