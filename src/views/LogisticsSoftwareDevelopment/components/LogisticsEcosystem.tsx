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
  impactMetric: string;
  tags: string[];
}

const ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    id: 'procurement',
    title: 'Procurement & Inbound',
    description:
      'Synchronize supplier purchase orders, delivery appointments, and automated advance shipping notices (ASNs) to prevent dock congestion.',
    impactMetric: 'Up to 40% reduction in dock wait times',
    tags: ['PO Synchronization', 'ASN Digitization', 'Dock Scheduling', 'Gate Automation'],
  },
  {
    id: 'warehousing',
    title: 'Warehouse & Inventory',
    description:
      'Optimize inventory with dynamic bin slotting, barcode/RFID scanning, cross-docking, and real-time stock balance across facilities.',
    impactMetric: '99.8% pick accuracy with automated verification',
    tags: ['Dynamic Pallet Slotting', 'RFID Continuous Scan', 'Cross-Dock Routing', 'Auto Cycle Counting'],
  },
  {
    id: 'order-processing',
    title: 'Order Processing',
    description:
      'Consolidate multi-channel B2B and D2C orders, validate stock availability, and trigger automated pick-and-pack fulfillment batches.',
    impactMetric: 'Sub-minute order validation & allocation',
    tags: ['Omnichannel Splitting', 'Wave & Batch Picking', 'Auto Manifesting', 'Pack Verification'],
  },
  {
    id: 'transportation',
    title: 'Freight & Transportation',
    description:
      'Consolidate loads algorithmically, benchmark carrier rates, plan multi-modal freight routes, and automate contract tendering.',
    impactMetric: '15–22% lower freight spend per ton-mile',
    tags: ['Multi-Carrier Tendering', '3D Load Optimization', 'eBOL Automation', 'Intermodal Routing'],
  },
  {
    id: 'shipment-tracking',
    title: 'Shipment Tracking',
    description:
      'Track vehicle telemetry with live GPS streams, monitor geofence entry and exit, and distribute automated transit alerts.',
    impactMetric: 'Zero deadband tracking across transit corridors',
    tags: ['Sub-Second Telematics', 'Cold-Chain IoT', 'Geofence Triggers', 'Dynamic Predictive ETA'],
  },
  {
    id: 'last-mile',
    title: 'Last-Mile & Delivery',
    description:
      'Sequence driver stops dynamically, provide accurate customer ETAs, and capture contactless electronic proof-of-delivery (ePOD).',
    impactMetric: '42% faster delivery turnaround with zero paperwork',
    tags: ['Dynamic Stop Sequencing', 'Contactless ePOD', 'Live Recipient Tracking', 'Reverse Logistics'],
  },
];

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
    const topY = 135; // Behind the 3D cart image
    const bottomY = 320; // Dips in the gaps between cards

    const firstCardRect = cards[0].getBoundingClientRect();
    const firstCardLeft = firstCardRect.left - trackRect.left;
    const points: { x: number; y: number }[] = [];

    // Starting point before Card 1
    points.push({
      x: Math.max(0, firstCardLeft - 100),
      y: (topY + bottomY) / 2,
    });

    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const centerX = cardRect.left - trackRect.left + cardRect.width / 2;

      // Peak behind the card
      points.push({ x: centerX, y: topY });

      // Valley in the gap to the next card
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
      x: lastCardRight + 100,
      y: (topY + bottomY) / 2,
    });

    // Generate smooth continuous cubic bezier curve
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const midX = (p0.x + p1.x) / 2;
      d += ` C ${midX} ${p0.y}, ${midX} ${p1.y}, ${p1.x} ${p1.y}`;
    }

    setCurveD(d);
  };

  useEffect(() => {
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

      // Initialize mask strokeDasharray and strokeDashoffset for smooth line draw
      if (maskPath) {
        const pathLength = maskPath.getTotalLength();
        if (pathLength > 0) {
          gsap.set(maskPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });
        }
      }

      // Generate card-aware snap positions
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

      // 2. Draw curved dashed line from left to right as the user scrolls
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

              {/* Faint guide dashed line */}
              <path
                d={curveD}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />

              {/* Active bright blue dashed line drawn on scroll */}
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
                  className="wk-logistics-eco__card-img"
                  priority
                />
              </div>

              {/* Card Title */}
              <h3 className="wk-logistics-eco__card-title">{stage.title}</h3>

              {/* Card Description */}
              <p className="wk-logistics-eco__card-desc">{stage.description}</p>

              {/* Capabilities Tags */}
              <div className="wk-logistics-eco__tags-list">
                {stage.tags.map((tag) => (
                  <span key={tag} className="wk-logistics-eco__tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Operational Impact Stat */}
              <div className="wk-logistics-eco__card-footer">
                <span className="wk-logistics-eco__stat-icon" aria-hidden="true">
                  ⚡
                </span>
                <span className="wk-logistics-eco__stat-text">{stage.impactMetric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
