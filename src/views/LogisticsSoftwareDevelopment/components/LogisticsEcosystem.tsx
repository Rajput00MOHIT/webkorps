'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { StaticImageData } from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getImgSrc } from '../../../utils/image';
import procurementImg from '../../../assets/industries/logistics/logistic eco system/Procurement & Inbound.png';
import warehouseImg from '../../../assets/industries/logistics/logistic eco system/Warehouse & Inventory.png';
import orderImg from '../../../assets/industries/logistics/logistic eco system/Order Processing.png';
import freightImg from '../../../assets/industries/logistics/logistic eco system/Freight & Transportation.png';
import trackingImg from '../../../assets/industries/logistics/logistic eco system/Shipment Tracking.png';
import lastMileImg from '../../../assets/industries/logistics/logistic eco system/Last-Mile Delivery.png';
import './LogisticsEcosystem.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface EcosystemStage {
  id: string;
  stepNumber?: string;
  title: string;
  description: string;
  image: string | StaticImageData;
}

const ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    id: 'procurement',
    stepNumber: '01',
    title: 'Procurement & Inbound',
    description:
      'Synchronize supplier purchase orders, delivery appointments, and automated advance shipping notices (ASNs) to prevent dock congestion.',
    image: procurementImg,
  },
  {
    id: 'warehousing',
    stepNumber: '02',
    title: 'Warehouse & Inventory',
    description:
      'Optimize inventory with dynamic bin slotting, barcode/RFID scanning, cross-docking, and real-time stock balance across facilities.',
    image: warehouseImg,
  },
  {
    id: 'order-processing',
    stepNumber: '03',
    title: 'Order Processing',
    description:
      'Consolidate multi-channel B2B and D2C orders, validate stock availability, and trigger automated pick-and-pack fulfillment batches.',
    image: orderImg,
  },
  {
    id: 'transportation',
    stepNumber: '04',
    title: 'Freight & Transportation',
    description:
      'Consolidate loads algorithmically, benchmark carrier rates, plan multi-modal freight routes, and automate contract tendering.',
    image: freightImg,
  },
  {
    id: 'shipment-tracking',
    stepNumber: '05',
    title: 'Shipment Tracking',
    description:
      'Stream real-time GPS telemetry, monitor cold-chain sensor alerts, trigger geofence notifications, and predict dynamic arrival windows.',
    image: trackingImg,
  },
  {
    id: 'last-mile',
    stepNumber: '06',
    title: 'Last-Mile Delivery',
    description:
      'Sequence multi-drop urban stops dynamically, deliver live recipient tracking links, and capture contactless verified proof-of-delivery (ePOD).',
    image: lastMileImg,
  },
];

export interface LogisticsEcosystemProps {
  id?: string;
  title?: React.ReactNode;
  subtitle?: string;
  stages?: EcosystemStage[];
}

export const LogisticsEcosystem: React.FC<LogisticsEcosystemProps> = ({
  id = 'logistics-ecosystem',
  title = (
    <>
      How the Modern <span className="wk-logistics-eco__title-accent">Logistics Ecosystem</span> Works
    </>
  ),
  subtitle = 'An end-to-end operational pipeline connecting procurement, warehousing, transit, and delivery into one continuous data flow.',
  stages = ECOSYSTEM_STAGES,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

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
        // Precise scroll distance: total scroll width minus visible client width
        return Math.max(0, track.scrollWidth - viewport.clientWidth);
      };

      gsap.set(track, { x: 0 });

      // Generate card-aware snap positions so stops align with card boundaries
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
          onUpdate: (self) => {
            const stageCount = stages.length;
            if (progressFillRef.current) {
              const baseWidth = stageCount > 0 ? (1 / stageCount) * 100 : 16.6;
              const fillWidth = Math.min(
                100,
                baseWidth + self.progress * (100 - baseWidth)
              );
              progressFillRef.current.style.width = `${fillWidth.toFixed(1)}%`;
            }
            const currentIdx = Math.min(
              stageCount - 1,
              Math.floor(self.progress * stageCount)
            );
            setActiveStageIndex(currentIdx);
          },
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
  }, [stages]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="wk-logistics-eco"
      aria-label="How the Ecosystem Works"
    >
      {/* Centered Section Header Container */}
      <div className="wk-logistics-eco__header-container">
        <h2 className="wk-logistics-eco__title">{title}</h2>
        <p className="wk-logistics-eco__subtitle">{subtitle}</p>

        <div className="wk-logistics-eco__indicator-wrap" aria-hidden="true">
          <span className="wk-logistics-eco__indicator-text">
            STAGE <span className="wk-logistics-eco__indicator-num">0{activeStageIndex + 1}</span> / 0{stages.length}
          </span>
          <div className="wk-logistics-eco__progress-track">
            <div ref={progressFillRef} className="wk-logistics-eco__progress-fill" />
          </div>
        </div>
      </div>

      {/* Full-Width Horizontal Card Viewport */}
      <div ref={viewportRef} className="wk-logistics-eco__viewport">
        <div ref={trackRef} className="wk-logistics-eco__track">
          {stages.map((stage, idx) => (
            <div
              key={stage.id}
              className={`wk-logistics-eco__card ${idx === activeStageIndex ? 'is-active' : ''}`}
            >
              {/* 3D Render Image Asset Area */}
              <div className="wk-logistics-eco__card-img-wrap">
                <img
                  src={getImgSrc(stage.image)}
                  alt={stage.title}
                  className="wk-logistics-eco__card-img"
                  loading="lazy"
                />
              </div>

              {/* Centered Content */}
              <h3 className="wk-logistics-eco__card-title">{stage.title}</h3>
              <p className="wk-logistics-eco__card-desc">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
