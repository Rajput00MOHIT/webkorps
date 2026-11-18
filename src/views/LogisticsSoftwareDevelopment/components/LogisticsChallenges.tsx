'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LOGISTICS_CHALLENGES } from '../logisticsSoftwareData';
import './LogisticsChallenges.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const LogisticsChallenges: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (
      prefersReducedMotion ||
      !sectionRef.current ||
      !viewportRef.current ||
      !trackRef.current
    ) {
      return;
    }

    const mm = gsap.matchMedia();

    mm.add('(min-width: 961px)', () => {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!section || !viewport || !track) return;

      const getDistance = () => {
        const trackHeight = track.scrollHeight;
        const viewportHeight = viewport.clientHeight;
        return Math.max(0, trackHeight - viewportHeight);
      };

      // Ensure initial track position is zero
      gsap.set(track, { y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      tl.to(track, {
        y: () => -getDistance(),
        ease: 'none',
      });

      return () => {
        tl.kill();
      };
    });

    // Refresh ScrollTrigger after font loading and layout settle
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="logistics-challenges"
      ref={sectionRef}
      className="wk-logistics-ch"
      aria-label="The Real Challenges in Logistics"
    >
      <div className="wk-logistics-ch__container">
        {/* Editorial Two-Column Split Layout */}
        <div className="wk-logistics-ch__layout">
          {/* Left Column: Contextual Brief (Stationary) */}
          <div className="wk-logistics-ch__left">
            <span className="wk-logistics-ch__badge">Operational Bottlenecks</span>
            <h2 className="wk-logistics-ch__title">
              Why Logistics Operations Become{' '}
              <span className="wk-logistics-ch__title-accent">Difficult to Manage</span>
            </h2>
            <p className="wk-logistics-ch__subtitle">
              As freight volumes grow and carrier networks expand, legacy spreadsheets and disconnected software tools break down—creating blindspots, delays, and runaway operational expenses.
            </p>

            <div className="wk-logistics-ch__highlight-box">
              <span className="wk-logistics-ch__highlight-title">The Core Bottleneck</span>
              <p className="wk-logistics-ch__highlight-desc">
                When logistics data is trapped in silos between dispatch, warehouse, and accounting teams, proactive intervention becomes impossible.
              </p>
            </div>
          </div>

          {/* Right Column: Clipped Viewport Area with Scrolling Track */}
          <div className="wk-logistics-ch__right">
            <div ref={viewportRef} className="wk-logistics-ch__viewport">
              <div ref={trackRef} className="wk-logistics-ch__track">
                {LOGISTICS_CHALLENGES.map((item) => {
                  const isHovered = hoveredId === item.id;
                  return (
                    <div
                      key={item.id}
                      className={`wk-logistics-ch__row ${isHovered ? 'is-hovered' : ''}`}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className="wk-logistics-ch__row-num">{item.number}</div>
                      <div className="wk-logistics-ch__row-body">
                        <h3 className="wk-logistics-ch__row-title">{item.title}</h3>
                        <p className="wk-logistics-ch__row-desc">{item.problem}</p>
                        <div className="wk-logistics-ch__impact-line">
                          <span className="wk-logistics-ch__impact-label">Impact:</span>
                          <span className="wk-logistics-ch__impact-text">{item.impact}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
