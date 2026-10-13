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

  // Stable reserved slot
  const slotRef = useRef<HTMLSpanElement>(null);

  // Layer B: SVG Toggle Switch elements
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const innerTrackRef = useRef<SVGRectElement>(null);
  const knobRef = useRef<SVGGElement>(null);
  const knobCenterRef = useRef<SVGCircleElement>(null);

  // Layer A: "Turn" text control
  const turnWrapperRef = useRef<HTMLSpanElement>(null);
  const turnTextRef = useRef<HTMLSpanElement>(null);

  // Custom SVG cursor & start anchor
  const cursorWrapperRef = useRef<HTMLDivElement>(null);
  const cursorStartAnchorRef = useRef<HTMLSpanElement>(null);

  const [isOn, setIsOn] = useState<boolean>(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

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
      const startX = startRect.left - containerRect.left + 8 - tip.x;
      const startY = startRect.top - containerRect.top + startRect.height * 0.3 - tip.y;
      gsap.set(cursorWrapperRef.current, { x: startX, y: startY, opacity: 1 });
    }
  }, [getCursorTipOffsets]);

  // Master GSAP Sequence — runs automatically on page load and refresh
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
      if (knobRef.current) gsap.set(knobRef.current, { x: 0 });
      if (innerTrackRef.current) gsap.set(innerTrackRef.current, { x: 0 });
      if (knobCenterRef.current) gsap.set(knobCenterRef.current, { fill: '#C6C6C6' });
      if (turnWrapperRef.current) gsap.set(turnWrapperRef.current, { opacity: 0, display: 'none' });
      return;
    }

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const startEl = cursorStartAnchorRef.current;
      const slotEl = slotRef.current;
      const toggleBtn = toggleBtnRef.current;
      const innerTrack = innerTrackRef.current;
      const knobEl = knobRef.current;
      const knobCenter = knobCenterRef.current;
      const turnWrapper = turnWrapperRef.current;
      const turnText = turnTextRef.current;
      const cursorEl = cursorWrapperRef.current;

      if (
        !container ||
        !startEl ||
        !slotEl ||
        !toggleBtn ||
        !innerTrack ||
        !knobEl ||
        !knobCenter ||
        !turnWrapper ||
        !turnText ||
        !cursorEl
      ) {
        return;
      }

      // Compute element coordinates relative to container
      const containerRect = container.getBoundingClientRect();
      const startRect = startEl.getBoundingClientRect();
      const slotRect = slotEl.getBoundingClientRect();
      const toggleRect = toggleBtn.getBoundingClientRect();
      const tip = getCursorTipOffsets();

      // Original starting position at the right side of "your business"
      const startX = startRect.left - containerRect.left + 8 - tip.x;
      const startY = startRect.top - containerRect.top + startRect.height * 0.3 - tip.y;

      // Target position over the center of the toggle control
      const toggleTargetX = toggleRect.left - containerRect.left + toggleRect.width * 0.5 - tip.x;
      const toggleTargetY = toggleRect.top - containerRect.top + toggleRect.height * 0.5 - tip.y;

      // Left white space position so "Turn" text is completely visible and unobstructed
      const leftWhitespaceX = slotRect.left - containerRect.left - tip.x - 16;

      // Clear waypoint in the open whitespace to the right of line 2
      const line2El = headingLinesRef.current[1];
      const line2Rect = line2El ? line2El.getBoundingClientRect() : startRect;
      const line2Right = line2Rect.right - containerRect.left;
      const midX = Math.max(line2Right + 36, startX + 54);
      const midY = startY - (startY - toggleTargetY) * 0.48;

      // ========================================================
      // Phase 1 — Initial State
      // ========================================================
      // Hero elements entrance offsets
      gsap.set(badgeRef.current, { opacity: 0, y: -16 });
      headingLinesRef.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, y: 22 });
      });
      gsap.set(descriptionRef.current, { opacity: 0, y: 16 });

      // Toggle starts fully visible in OFF state (knob at left cx: 32, fill: #C6C6C6)
      gsap.set(toggleBtn, { opacity: 1, scale: 1, display: 'inline-flex' });
      gsap.set(knobEl, { x: 0, scale: 1, opacity: 1 });
      gsap.set(innerTrack, { x: 0 });
      gsap.set(knobCenter, { fill: '#C6C6C6' });

      // "Turn" text starts hidden
      gsap.set(turnWrapper, { opacity: 0, scale: 0.9, display: 'none' });
      gsap.set(turnText, { opacity: 0, y: 0, scale: 1 });

      // Cursor starts at its original starting position (visible beside "business")
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
        )
        // Cursor fades in at starting location
        .to(
          cursorEl,
          {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=0.25'
        );

      // ========================================================
      // Phase 3 — Cursor Travels to the OFF Toggle
      // ========================================================
      tl.addLabel('cursor-travel')
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
        .to({}, { duration: 0.15 });

      // ========================================================
      // Phase 4 — Toggle Disappears, "Turn" Reveals, Cursor to Left Space
      // ========================================================
      tl.addLabel('text-reveal')
        // Toggle OFF layer exits with scale and opacity
        .to(toggleBtn, {
          scale: 0.86,
          opacity: 0,
          duration: 0.28,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(toggleBtn, { display: 'none' });
          },
        })
        // Reveal "Turn" text in the exact same inline area
        .set(turnWrapper, { display: 'inline-flex' }, '<+=0.1')
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
        )
        // Cursor glides to the left white space so "Turn" text is completely visible!
        .to(
          cursorEl,
          {
            x: leftWhitespaceX,
            y: toggleTargetY,
            duration: 0.35,
            ease: 'power2.out',
          },
          '<+=0.06'
        );

      // ========================================================
      // Phase 5 — Wait Exactly One Second (1,000 ms) in Left Space
      // ========================================================
      tl.addLabel('pause-one-sec').to({}, { duration: 1.0 });

      // ========================================================
      // Phase 6 — Cursor Returns Over "Turn" and Clicks
      // ========================================================
      tl.addLabel('click')
        // Cursor glides back from the left white space directly over "Turn"
        .to(cursorEl, {
          x: toggleTargetX,
          y: toggleTargetY,
          duration: 0.3,
          ease: 'power2.inOut',
        })
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
        // Knob slides smoothly to the ON position on right (x: 98, fill: #1A87C8)
        .to(
          knobEl,
          { x: 98, duration: 0.48, ease: 'power2.out' },
          '<+=0.04'
        )
        // Inner track shifts to x: -18 (making room for knob on right)
        .to(
          innerTrack,
          { x: -18, duration: 0.48, ease: 'power2.out' },
          '<'
        )
        // Inner circle turns into Webkorps blue
        .to(
          knobCenter,
          { fill: '#1A87C8', duration: 0.48, ease: 'power2.out' },
          '<'
        );

      // ========================================================
      // Phase 8 — Cursor Returns Beside "business" & Stays Stable
      // ========================================================
      tl.addLabel('cursor-return')
        // Pause after ON switch is fully formed
        .to({}, { duration: 0.25 })
        // Return journey along the smooth clear path
        .to(cursorEl, {
          x: midX,
          y: midY,
          duration: 1,
          ease: 'power1.in',
        })
        .to(cursorEl, {
          x: startX,
          y: startY,
          duration: 1,
          ease: 'power1.out',
        })
        // Cursor stays stably placed and visible beside "business" (never disappears!)
        .set(cursorEl, { opacity: 1 });
    }, containerRef);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [getCursorTipOffsets, setToggleState, handleResize]);

  // Genuine user click handler (interactive & reversible)
  const handleUserToggleClick = () => {
    // If user clicks while automatic timeline is playing, cancel it cleanly
    if (timelineRef.current && timelineRef.current.isActive()) {
      timelineRef.current.kill();
      if (turnWrapperRef.current) gsap.set(turnWrapperRef.current, { display: 'none', opacity: 0 });
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { display: 'inline-flex', opacity: 1, scale: 1 });
    }

    const nextState = !isOn;
    setToggleState(nextState);

    if (nextState) {
      // Transition to ON
      if (knobRef.current) gsap.to(knobRef.current, { x: 98, duration: 0.38, ease: 'power2.out' });
      if (innerTrackRef.current) gsap.to(innerTrackRef.current, { x: -18, duration: 0.38, ease: 'power2.out' });
      if (knobCenterRef.current) gsap.to(knobCenterRef.current, { fill: '#1A87C8', duration: 0.38, ease: 'power2.out' });
    } else {
      // Transition to OFF
      if (knobRef.current) gsap.to(knobRef.current, { x: 0, duration: 0.38, ease: 'power2.out' });
      if (innerTrackRef.current) gsap.to(innerTrackRef.current, { x: 0, duration: 0.38, ease: 'power2.out' });
      if (knobCenterRef.current) gsap.to(knobCenterRef.current, { fill: '#C6C6C6', duration: 0.38, ease: 'power2.out' });
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
              {/* Layer B: Real Accessible Toggle Component with exact supplied SVGs */}
              <button
                ref={toggleBtnRef}
                type="button"
                role="switch"
                aria-checked={isOn}
                aria-label={isOn ? 'Technology interaction enabled' : 'Turn on technology interaction'}
                className={`wk-about-hero__toggle ${isOn ? 'is-on' : 'is-off'}`}
                onClick={handleUserToggleClick}
              >
                <svg
                  viewBox="0 0 170 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="wk-about-hero__toggle-svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="wk-paint-toggle-grad"
                      x1="2"
                      y1="25.5"
                      x2="170"
                      y2="28.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1887C9" />
                      <stop offset="1" stopColor="#E7F6FF" />
                    </linearGradient>

                    <filter
                      id="wk-filter-inner-shadow"
                      x="0"
                      y="0"
                      width="170"
                      height="68"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                    </filter>

                    <filter
                      id="wk-filter-knob-shadow"
                      x="-10"
                      y="-10"
                      width="190"
                      height="88"
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
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                  </defs>

                  {/* Outer Gradient Track */}
                  <rect x="2" width="166" height="65" rx="32.5" fill="url(#wk-paint-toggle-grad)" />

                  {/* Inner White Track with Inset Shadow */}
                  <g filter="url(#wk-filter-inner-shadow)">
                    <rect
                      ref={innerTrackRef}
                      x="29"
                      y="12"
                      width="127"
                      height="40"
                      rx="20"
                      fill="white"
                    />
                  </g>

                  {/* Movable Knob Group */}
                  <g ref={knobRef} filter="url(#wk-filter-knob-shadow)">
                    <circle cx="32" cy="32" r="28" fill="white" />
                    <circle
                      ref={knobCenterRef}
                      cx="31.5"
                      cy="32.5"
                      r="24.5"
                      fill="#C6C6C6"
                    />
                  </g>
                </svg>
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
