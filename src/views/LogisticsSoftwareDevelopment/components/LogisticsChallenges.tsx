'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LOGISTICS_CHALLENGES } from '../logisticsSoftwareData';
import './LogisticsChallenges.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface LogisticsChallengeItem {
  id?: string;
  number: string;
  title: string;
  problem?: string;
  description?: string;
  impact: string;
}

export interface LogisticsChallengesProps {
  id?: string;
  title?: React.ReactNode;
  subtitle?: string;
  items?: LogisticsChallengeItem[];
}

export const LogisticsChallenges: React.FC<LogisticsChallengesProps> = ({
  id = 'logistics-challenges',
  title = (
    <>
      Why Logistics <span className="wk-logistics-ch__title-accent">Gets Complex</span>
    </>
  ),
  subtitle = 'As freight volumes grow and carrier networks expand, legacy spreadsheets and disconnected software tools break down—creating blindspots, delays, and runaway operational expenses.',
  items = LOGISTICS_CHALLENGES,
}) => {
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

      const dist = getDistance();
      if (dist <= 10) return;

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
  }, [items]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="wk-logistics-ch"
      aria-label="Industry Operational Challenges"
    >
      <div className="wk-logistics-ch__container">
        {/* Editorial Two-Column Split Layout */}
        <div className="wk-logistics-ch__layout">
          {/* Left Column: Contextual Brief (Stationary) */}
          <div className="wk-logistics-ch__left">
            <h2 className="wk-logistics-ch__title">{title}</h2>
            <p className="wk-logistics-ch__subtitle">{subtitle}</p>
          </div>

          {/* Right Column: Clipped Viewport Area with Scrolling Track */}
          <div className="wk-logistics-ch__right">
            <div ref={viewportRef} className="wk-logistics-ch__viewport">
              <div ref={trackRef} className="wk-logistics-ch__track">
                {items.map((item) => {
                  const itemId = item.id || item.number;
                  const isHovered = hoveredId === itemId;
                  return (
                    <div
                      key={itemId}
                      className={`wk-logistics-ch__row ${isHovered ? 'is-hovered' : ''}`}
                      onMouseEnter={() => setHoveredId(itemId)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className="wk-logistics-ch__row-num">{item.number}</div>
                      <div className="wk-logistics-ch__row-body">
                        <h3 className="wk-logistics-ch__row-title">{item.title}</h3>
                        <p className="wk-logistics-ch__row-desc">{item.problem || item.description}</p>
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
