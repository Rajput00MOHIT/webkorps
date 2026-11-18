'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cartIllustration from '@/assets/industries/logistics/ecosystem_cart.png';
import './LogisticsEcosystem.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface EcosystemStage {
  id: string;
  title: string;
  description: string;
  keyHighlight: string;
  tags: string[];
}

const ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    id: 'procurement',
    title: 'Procurement & Inbound',
    description:
      'Synchronize supplier purchase orders, delivery appointments, and automated advance shipping notices (ASNs) to prevent dock congestion.',
    keyHighlight: 'Automated supplier order validation and inbound dock coordination.',
    tags: ['PO Synchronization', 'ASN Digitization', 'Dock Scheduling', 'Gate Automation'],
  },
  {
    id: 'warehousing',
    title: 'Warehouse & Inventory',
    description:
      'Optimize inventory with dynamic bin slotting, barcode/RFID scanning, cross-docking, and real-time stock balance across facilities.',
    keyHighlight: 'Real-time inventory synchronization and intelligent dynamic slotting.',
    tags: ['Dynamic Pallet Slotting', 'RFID Continuous Scan', 'Cross-Dock Routing', 'Auto Cycle Counting'],
  },
  {
    id: 'order-processing',
    title: 'Order Processing',
    description:
      'Consolidate multi-channel B2B and D2C orders, validate stock availability, and trigger automated pick-and-pack fulfillment batches.',
    keyHighlight: 'Fast order validation and intelligent omnichannel allocation.',
    tags: ['Omnichannel Splitting', 'Wave & Batch Picking', 'Auto Manifesting', 'Pack Verification'],
  },
  {
    id: 'transportation',
    title: 'Freight & Transportation',
    description:
      'Consolidate loads algorithmically, benchmark carrier rates, plan multi-modal freight routes, and automate contract tendering.',
    keyHighlight: 'Dynamic carrier selection and multi-modal route optimization.',
    tags: ['Multi-Carrier Tendering', '3D Load Optimization', 'eBOL Automation', 'Intermodal Routing'],
  },
  {
    id: 'shipment-tracking',
    title: 'Shipment Tracking',
    description:
      'Track vehicle telemetry with live GPS streams, monitor geofence entry and exit, and distribute automated transit alerts.',
    keyHighlight: 'Live shipment visibility and proactive route exception detection.',
    tags: ['Sub-Second Telematics', 'Cold-Chain IoT', 'Geofence Triggers', 'Dynamic Predictive ETA'],
  },
  {
    id: 'last-mile',
    title: 'Last-Mile & Delivery',
    description:
      'Sequence driver stops dynamically, provide accurate customer ETAs, and capture contactless electronic proof-of-delivery (ePOD).',
    keyHighlight: 'Intelligent delivery assignment and verified proof of delivery.',
    tags: ['Dynamic Stop Sequencing', 'Contactless ePOD', 'Live Recipient Tracking', 'Reverse Logistics'],
  },
];

// Generates a smooth cubic bezier S-curve path connecting points
function generateCurvedPath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return '';
  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const dx = p1.x - p0.x;
    const cp1x = p0.x + dx * 0.5;
    const cp1y = p0.y;
    const cp2x = p0.x + dx * 0.5;
    const cp2y = p1.y;
    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`;
  }
  return d;
}

export const LogisticsEcosystem: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const maskPathRef = useRef<SVGPathElement>(null);
  const [curveD, setCurveD] = useState<string>('');

  // Dynamically compute the curved zigzag line through all cards
  const calculateCurvedPath = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>('.wk-logistics-eco__card');
    if (cards.length === 0) return;

    const trackRect = track.getBoundingClientRect();
    const topY = 120; // Behind the 3D cart illustration
    const bottomY = 320; // Lower bend in the gap between cards

    const firstCardRect = cards[0].getBoundingClientRect();
    const firstCardLeft = firstCardRect.left - trackRect.left;
    const points: { x: number; y: number }[] = [];

    // Starting point before Card 1
    points.push({
      x: Math.max(0, firstCardLeft - 80),
      y: (topY + bottomY) / 2,
    });

    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const centerX = cardRect.left - trackRect.left + cardRect.width / 2;

      // Crest behind the card
      points.push({ x: centerX, y: topY });

      // Trough in the gap between cards
      if (idx < cards.length - 1) {
        const nextCardRect = cards[idx + 1].getBoundingClientRect();
        const gapCenterX =
          (cardRect.right - trackRect.left + (nextCardRect.left - trackRect.left)) / 2;
        points.push({ x: gapCenterX, y: bottomY });
      }
    });

    // Exit point past the final card
    const lastCard = cards[cards.length - 1];
    const lastCardRect = lastCard.getBoundingClientRect();
    const lastCardRight = lastCardRect.right - trackRect.left;
    points.push({
      x: lastCardRight + 80,
      y: (topY + bottomY) / 2,
    });

    setCurveD(generateCurvedPath(points));
  };

  useEffect(() => {
    // Initial path calculation after DOM layout settle
    calculateCurvedPath();
  }, []);

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
      const maskPath = maskPathRef.current;
      if (!section || !viewport || !track) return;

      const getDistance = () => {
        return Math.max(0, track.scrollWidth - viewport.clientWidth);
      };

      gsap.set(track, { x: 0 });

      // Setup SVG mask stroke dash for progressive scroll-driven reveal
      if (maskPath) {
        try {
          const pathLength = maskPath.getTotalLength();
          gsap.set(maskPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });
        } catch {
          // Fallback if SVG not rendered yet
        }
      }

      // Card-aware snap positions
      const cards = Array.from(track.querySelectorAll<HTMLElement>('.wk-logistics-eco__card'));
      const totalDist = getDistance();
      const trackPaddingLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;

      const snapPoints =
        totalDist > 0
          ? cards.map((card) => {
              const cardOffset = card.offsetLeft - trackPaddingLeft;
              return Math.min(1, Math.max(0, cardOffset / totalDist));
            })
          : [0];

      if (!snapPoints.includes(0)) snapPoints.unshift(0);
      if (!snapPoints.includes(1)) snapPoints.push(1);
      const uniqueSnaps = Array.from(new Set(snapPoints)).sort((a, b) => a - b);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${Math.max(window.innerHeight * 1.5, getDistance())}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          snap: {
            snapTo: uniqueSnaps,
            duration: { min: 0.15, max: 0.35 },
            delay: 0.1,
            ease: 'power1.out',
          },
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // 1. Move track horizontally from right to left
      tl.to(
        track,
        {
          x: () => -getDistance(),
          ease: 'none',
        },
        0
      );

      // 2. Draw curved dashed line progressively from left to right
      if (maskPath) {
        tl.to(
          maskPath,
          {
            strokeDashoffset: 0,
            ease: 'none',
          },
          0
        );
      }

      return () => {
        tl.kill();
      };
    });

    const handleResize = () => {
      calculateCurvedPath();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => {
        calculateCurvedPath();
        ScrollTrigger.refresh();
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      mm.revert();
    };
  }, [curveD]);

  return (
    <section
      id="logistics-ecosystem"
      ref={sectionRef}
      className="wk-logistics-eco"
      aria-label="How the Modern Logistics Ecosystem Works"
    >
      {/* Centered Section Header */}
      <div className="wk-logistics-eco__header">
        <span className="wk-logistics-eco__badge">Connected Supply Chain</span>
        <h2 className="wk-logistics-eco__title">
          How the Modern <span className="wk-logistics-eco__title-accent">Logistics Ecosystem</span> Works
        </h2>
        <p className="wk-logistics-eco__subtitle">
          An end-to-end operational pipeline connecting procurement, warehousing, transit, and delivery into one continuous data flow.
        </p>
      </div>

      {/* Full-Width Horizontal Card Viewport */}
      <div ref={viewportRef} className="wk-logistics-eco__viewport">
        <div ref={trackRef} className="wk-logistics-eco__track">
          {/* Animated Curved Zigzag Dashed Connecting Line behind cards */}
          {curveD && (
            <svg
              className="wk-logistics-eco__line-svg"
              aria-hidden="true"
            >
              <defs>
                <mask id="eco-curved-line-mask">
                  <path
                    ref={maskPathRef}
                    d={curveD}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </mask>
              </defs>

              {/* Faint roadmap guide dashed line */}
              <path
                d={curveD}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />

              {/* Active Webkorps blue dashed line drawn on scroll */}
              <path
                d={curveD}
                fill="none"
                stroke="#1887C9"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
                mask="url(#eco-curved-line-mask)"
              />
            </svg>
          )}

          {ECOSYSTEM_STAGES.map((stage) => (
            <div key={stage.id} className="wk-logistics-eco__card">
              {/* 3D Shopping Cart Illustration from Figma */}
              <div className="wk-logistics-eco__card-img-wrap">
                <Image
                  src={cartIllustration}
                  alt={stage.title}
                  width={140}
                  height={108}
                  style={{ width: 'auto', height: '108px' }}
                  className="wk-logistics-eco__card-img"
                  priority
                />
              </div>

              {/* Card Title */}
              <h3 className="wk-logistics-eco__card-title">{stage.title}</h3>

              {/* Card Description */}
              <p className="wk-logistics-eco__card-desc">{stage.description}</p>

              {/* Integrated Capability Tags */}
              <div className="wk-logistics-eco__tags-list">
                {stage.tags.map((tag) => (
                  <span key={tag} className="wk-logistics-eco__tag">
                    <span className="wk-logistics-eco__tag-dot" aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Distinctive Key Capability Highlight Statement */}
              <div className="wk-logistics-eco__highlight">
                <div className="wk-logistics-eco__highlight-accent" aria-hidden="true" />
                <div className="wk-logistics-eco__highlight-content">
                  <span className="wk-logistics-eco__highlight-label">KEY CAPABILITY</span>
                  <p className="wk-logistics-eco__highlight-text">{stage.keyHighlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
