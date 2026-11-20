'use client';

import React, { useState, useRef, useEffect } from 'react';
import type { StaticImageData } from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LOGISTICS_DEMO_PLACEHOLDER } from '../logisticsSoftwareData';
import { getImgSrc } from '../../../utils/image';
import './LogisticsPartner.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface PartnerCapabilityRow {
  number: string;
  title: string;
  description: string;
  highlight?: string;
}

const PARTNER_CAPABILITIES: PartnerCapabilityRow[] = [
  {
    number: '01',
    title: 'Custom Development',
    description:
      'Engineered specifically around your operational rules, proprietary dispatch logic, and unique carrier contracts—without rigid third-party software constraints.',
    highlight: 'Tailored Dispatch Logic & Workflows',
  },
  {
    number: '02',
    title: 'Scalable Architecture',
    description:
      'High-throughput, event-driven cloud systems that ingest millions of IoT telemetry pings and process rapid order surges during peak seasons without lag.',
    highlight: 'Millions of IoT Telemetry Pings',
  },
  {
    number: '03',
    title: 'Seamless Integration',
    description:
      'Deep supply chain protocol expertise across EDI standards (204, 214, 856), IoT sensor streams, and bidirectional synchronization with SAP, Oracle, and legacy ERPs.',
    highlight: 'EDI Standards & ERP Sync',
  },
  {
    number: '04',
    title: 'Advanced Security',
    description:
      'Enterprise security by design: SOC 2 and ISO 27001 aligned architecture, TLS 1.3 telemetry encryption, strict role-based access control, and complete audit logging.',
    highlight: 'SOC 2 & TLS 1.3 Encryption',
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description:
      '24/7 proactive system monitoring, guaranteed response SLAs, and dedicated engineering sprints to continuously adapt your platform as your fleet and facilities grow.',
    highlight: '24/7 Proactive SLA Support',
  },
];

export interface LogisticsPartnerProps {
  id?: string;
  title?: React.ReactNode;
  subtitle?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  capabilities?: PartnerCapabilityRow[];
}

export const LogisticsPartner: React.FC<LogisticsPartnerProps> = ({
  id = 'logistics-partner',
  title = (
    <>
      Your Logistics <span className="wk-logistics-pt__title-accent">Technology Partner</span>
    </>
  ),
  subtitle = 'We build scalable, reliable logistics platforms backed by industry expertise.',
  image = LOGISTICS_DEMO_PLACEHOLDER,
  imageAlt = 'Technology partner architecture and control center',
  capabilities = PARTNER_CAPABILITIES,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowsContainerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualRef = useRef<HTMLDivElement>(null);
  const visualImgRef = useRef<HTMLImageElement>(null);

  const currentIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Entrance animation for Title & Subtitle
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 2. Entrance animation for the Right Visual Card
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 3. Staggered reveal for Capability Rows
      const validRows = rowRefs.current.filter(Boolean) as HTMLDivElement[];
      if (validRows.length > 0) {
        gsap.fromTo(
          validRows,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: rowsContainerRef.current || sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 4. Desktop-specific ScrollTrigger: link scroll position through rows to active capability highlight
      const mm = gsap.matchMedia();

      mm.add('(min-width: 961px)', () => {
        // Subtle image parallax effect inside sticky card
        if (visualImgRef.current && sectionRef.current) {
          gsap.fromTo(
            visualImgRef.current,
            { yPercent: -5, scale: 1.06 },
            {
              yPercent: 5,
              scale: 1.06,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            }
          );
        }

        // Trigger active capability highlight as each row crosses focal line
        validRows.forEach((row, i) => {
          ScrollTrigger.create({
            trigger: row,
            start: 'top 65%',
            end: 'bottom 45%',
            onEnter: () => setActiveIdx(i),
            onEnterBack: () => setActiveIdx(i),
          });
        });
      });
    }, sectionRef);

    // Refresh triggers once fonts and layouts stabilize
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="wk-logistics-pt"
      aria-label="Your Technology Partner"
    >
      <div className="wk-logistics-pt__container">
        {/* Editorial Split-Layout: Capabilities List on Left, Architectural Visual on Right */}
        <div className="wk-logistics-pt__split">
          {/* Left Column: Heading + Structured Rows */}
          <div className="wk-logistics-pt__content-col">
            <div ref={headerRef} className="wk-logistics-pt__header-wrap">
              <h2 className="wk-logistics-pt__title">{title}</h2>
              <p className="wk-logistics-pt__subtitle">{subtitle}</p>
            </div>

            {/* Capability Rows with Dividers & Scroll Activation */}
            <div ref={rowsContainerRef} className="wk-logistics-pt__rows">
              {capabilities.map((cap, index) => {
                const isHovered = hoveredIdx === index;
                const isActive = activeIdx === index;
                const isHighlighted = isHovered || (hoveredIdx === null && isActive);

                return (
                  <div
                    key={cap.number}
                    ref={(el) => {
                      rowRefs.current[index] = el;
                    }}
                    className={`wk-logistics-pt__row ${isHighlighted ? 'is-active' : ''}`}
                    onMouseEnter={() => setHoveredIdx(index)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => setActiveIdx(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Capability ${cap.number}: ${cap.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveIdx(index);
                      }
                    }}
                  >
                    <div className="wk-logistics-pt__row-num" aria-hidden="true">
                      {cap.number}
                    </div>
                    <div className="wk-logistics-pt__row-body">
                      <div className="wk-logistics-pt__row-header-inline">
                        <h3 className="wk-logistics-pt__row-title">{cap.title}</h3>
                      </div>
                      <p className="wk-logistics-pt__row-desc">{cap.description}</p>
                    </div>
                    <div className="wk-logistics-pt__row-indicator" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-End Architecture & Sticky Visual Card */}
          <div className="wk-logistics-pt__visual-col">
            <div ref={visualRef} className="wk-logistics-pt__visual-card">
              <div className="wk-logistics-pt__visual-img-wrap">
                <img
                  ref={visualImgRef}
                  src={getImgSrc(image)}
                  alt={imageAlt}
                  className="wk-logistics-pt__visual-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
