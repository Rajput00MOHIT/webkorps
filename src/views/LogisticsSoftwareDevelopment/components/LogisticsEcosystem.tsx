'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cartIllustration from '../../../assets/industries/logistics/ecosystem_cart.png';
import './LogisticsEcosystem.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface EcosystemStage {
  id: string;
  title: string;
  description: string;
}

const ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    id: 'procurement',
    title: 'Procurement & Inbound',
    description:
      'Synchronize supplier purchase orders, delivery appointments, and automated advance shipping notices (ASNs) to prevent dock congestion.',
  },
  {
    id: 'warehousing',
    title: 'Warehouse & Inventory',
    description:
      'Optimize inventory with dynamic bin slotting, barcode/RFID scanning, cross-docking, and real-time stock balance across facilities.',
  },
  {
    id: 'order-processing',
    title: 'Order Processing',
    description:
      'Consolidate multi-channel B2B and D2C orders, validate stock availability, and trigger automated pick-and-pack fulfillment batches.',
  },
  {
    id: 'transportation',
    title: 'Freight & Transportation',
    description:
      'Consolidate loads algorithmically, benchmark carrier rates, plan multi-modal freight routes, and automate contract tendering.',
  },
  {
    id: 'shipment-tracking',
    title: 'Shipment Tracking',
    description:
      'Track vehicle telemetry with live GPS streams, monitor geofence entry and exit, and distribute automated transit alerts.',
  },
  {
    id: 'last-mile',
    title: 'Last-Mile Delivery',
    description:
      'Sequence driver stops dynamically, provide accurate customer ETAs, and capture contactless electronic proof-of-delivery (ePOD).',
  },
];

export const LogisticsEcosystem: React.FC = () => {
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
        return Math.max(0, track.scrollWidth - viewport.clientWidth);
      };

      gsap.set(track, { x: 0 });

      const cards = Array.from(track.children) as HTMLElement[];
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

      tl.to(track, {
        x: () => -getDistance(),
        ease: 'none',
      });

      return () => {
        tl.kill();
      };
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      mm.revert();
    };
  }, []);

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

              {/* Stage Title */}
              <h3 className="wk-logistics-eco__card-title">{stage.title}</h3>

              {/* Stage Description */}
              <p className="wk-logistics-eco__card-desc">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
