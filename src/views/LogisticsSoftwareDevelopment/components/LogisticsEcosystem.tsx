'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LogisticsEcosystem.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface EcosystemStage {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  keyHighlight: string;
  tags: string[];
  illustration: React.ReactNode;
}

const ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    id: 'procurement',
    stepNumber: '01',
    title: 'Procurement & Inbound',
    description:
      'Synchronize supplier purchase orders, delivery appointments, and automated advance shipping notices (ASNs) to prevent dock congestion.',
    keyHighlight: 'Automated supplier order validation and inbound dock coordination.',
    tags: ['PO Synchronization', 'ASN Digitization', 'Dock Scheduling', 'Gate Automation'],
    illustration: (
      <svg viewBox="0 0 240 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="wk-logistics-eco__illus-svg">
        <defs>
          <linearGradient id="eco-grad-dock" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {/* Subtle Canvas Base */}
        <rect x="0" y="0" width="240" height="130" rx="10" fill="#F8FAFC" />
        <line x1="20" y1="105" x2="220" y2="105" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Dock Bay Gate Frame */}
        <rect x="32" y="32" width="68" height="73" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
        <rect x="38" y="40" width="56" height="10" rx="2" fill="#F1F5F9" />
        <rect x="38" y="54" width="56" height="10" rx="2" fill="#F1F5F9" />
        <rect x="38" y="68" width="56" height="10" rx="2" fill="#F1F5F9" />
        <rect x="38" y="82" width="56" height="23" rx="2" fill="url(#eco-grad-dock)" stroke="#0EA5E9" strokeWidth="1.2" />

        {/* Freight Cargo Container & Tractor Unit */}
        <g transform="translate(112, 48)">
          <rect x="0" y="8" width="70" height="42" rx="3" fill="#FFFFFF" stroke="#334155" strokeWidth="1.5" />
          <line x1="20" y1="8" x2="20" y2="50" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="40" y1="8" x2="40" y2="50" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="60" y1="8" x2="60" y2="50" stroke="#E2E8F0" strokeWidth="1" />

          {/* Cab */}
          <path d="M70 20H88C90 20 92 22 93 25L98 38C99 40 99 42 99 44V50H70V20Z" fill="#1E293B" />
          <path d="M74 25H86L91 36H74V25Z" fill="#F0F9FF" />

          {/* Wheels */}
          <circle cx="16" cy="52" r="7" fill="#0F172A" />
          <circle cx="16" cy="52" r="3" fill="#FFFFFF" />
          <circle cx="56" cy="52" r="7" fill="#0F172A" />
          <circle cx="56" cy="52" r="3" fill="#FFFFFF" />
          <circle cx="86" cy="52" r="7" fill="#0F172A" />
          <circle cx="86" cy="52" r="3" fill="#FFFFFF" />
        </g>

        {/* Digital Verification Status Tag */}
        <g transform="translate(132, 16)">
          <rect x="0" y="0" width="88" height="24" rx="5" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3.5" fill="#0EA5E9" />
          <text x="22" y="15" fill="#0F172A" fontSize="8" fontWeight="700" fontFamily="sans-serif">GATE 03 • ASN OK</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'warehousing',
    stepNumber: '02',
    title: 'Warehouse & Inventory',
    description:
      'Optimize inventory with dynamic bin slotting, barcode/RFID scanning, cross-docking, and real-time stock balance across facilities.',
    keyHighlight: 'Real-time inventory synchronization and intelligent dynamic slotting.',
    tags: ['Dynamic Pallet Slotting', 'RFID Continuous Scan', 'Cross-Dock Routing', 'Auto Cycle Counting'],
    illustration: (
      <svg viewBox="0 0 240 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="wk-logistics-eco__illus-svg">
        <rect x="0" y="0" width="240" height="130" rx="10" fill="#F8FAFC" />

        {/* High-Bay Shelving Uprights */}
        <rect x="28" y="24" width="8" height="92" rx="2" fill="#334155" />
        <rect x="90" y="24" width="8" height="92" rx="2" fill="#334155" />
        <rect x="152" y="24" width="8" height="92" rx="2" fill="#334155" />

        {/* Horizontal Storage Beams */}
        <rect x="28" y="52" width="132" height="6" rx="1.5" fill="#64748B" />
        <rect x="28" y="82" width="132" height="6" rx="1.5" fill="#64748B" />
        <rect x="28" y="112" width="132" height="6" rx="1.5" fill="#64748B" />

        {/* Stored Pallet Units */}
        <rect x="42" y="32" width="20" height="20" rx="2" fill="#0EA5E9" />
        <rect x="66" y="36" width="20" height="16" rx="2" fill="#E2E8F0" />
        <rect x="104" y="30" width="22" height="22" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />
        <rect x="130" y="34" width="18" height="18" rx="2" fill="#0284C7" />

        <rect x="42" y="62" width="44" height="20" rx="2" fill="#E2E8F0" />
        <rect x="104" y="60" width="44" height="22" rx="2" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="1.2" />

        {/* Vertical Optical RFID Scan Ray */}
        <line x1="126" y1="20" x2="126" y2="114" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="126" cy="42" r="3" fill="#0EA5E9" />

        {/* Automated Guided Shuttle / Tag */}
        <g transform="translate(170, 68)">
          <rect x="0" y="18" width="50" height="18" rx="4" fill="#0F172A" />
          <circle cx="12" cy="38" r="5" fill="#64748B" />
          <circle cx="38" cy="38" r="5" fill="#64748B" />
          <rect x="8" y="2" width="34" height="16" rx="2" fill="#0EA5E9" />
        </g>

        {/* Status Tag */}
        <g transform="translate(136, 14)">
          <rect x="0" y="0" width="86" height="24" rx="5" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3.5" fill="#0EA5E9" />
          <text x="22" y="15" fill="#0F172A" fontSize="8" fontWeight="700" fontFamily="sans-serif">RFID SYNC • 100%</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'order-processing',
    stepNumber: '03',
    title: 'Order Processing',
    description:
      'Consolidate multi-channel B2B and D2C orders, validate stock availability, and trigger automated pick-and-pack fulfillment batches.',
    keyHighlight: 'Fast order validation and intelligent omnichannel allocation.',
    tags: ['Omnichannel Splitting', 'Wave & Batch Picking', 'Auto Manifesting', 'Pack Verification'],
    illustration: (
      <svg viewBox="0 0 240 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="wk-logistics-eco__illus-svg">
        <rect x="0" y="0" width="240" height="130" rx="10" fill="#F8FAFC" />

        {/* Automated Conveyor Track */}
        <rect x="24" y="86" width="192" height="10" rx="3" fill="#334155" />
        <circle cx="36" cy="91" r="3.5" fill="#94A3B8" />
        <circle cx="74" cy="91" r="3.5" fill="#94A3B8" />
        <circle cx="112" cy="91" r="3.5" fill="#94A3B8" />
        <circle cx="150" cy="91" r="3.5" fill="#94A3B8" />
        <circle cx="188" cy="91" r="3.5" fill="#94A3B8" />
        <rect x="42" y="96" width="8" height="20" fill="#64748B" />
        <rect x="170" y="96" width="8" height="20" fill="#64748B" />

        {/* Moving Package 1 */}
        <rect x="36" y="56" width="28" height="30" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.2" />
        <line x1="36" y1="70" x2="64" y2="70" stroke="#E2E8F0" strokeWidth="1" />

        {/* Center Smart Parcel (Scan Arch) */}
        <rect x="96" y="50" width="36" height="36" rx="4" fill="#0EA5E9" />
        <line x1="96" y1="68" x2="132" y2="68" stroke="#BAE6FD" strokeWidth="1.2" />
        <rect x="104" y="56" width="10" height="6" rx="1.5" fill="#FFFFFF" />

        {/* Package 3 Sorted */}
        <rect x="162" y="58" width="26" height="28" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.2" />

        {/* Scanner Overhead Arch */}
        <path d="M86 86V38C86 35 88 33 91 33H137C140 33 142 35 142 38V86" stroke="#0F172A" strokeWidth="2.5" />
        <polygon points="104,38 88,74 140,74 124,38" fill="#0EA5E9" fillOpacity="0.14" />
        <line x1="88" y1="74" x2="140" y2="74" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Status Tag */}
        <g transform="translate(136, 14)">
          <rect x="0" y="0" width="86" height="24" rx="5" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3.5" fill="#0EA5E9" />
          <text x="22" y="15" fill="#0F172A" fontSize="8" fontWeight="700" fontFamily="sans-serif">BATCH #4089 • OK</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'transportation',
    stepNumber: '04',
    title: 'Freight & Transportation',
    description:
      'Consolidate loads algorithmically, benchmark carrier rates, plan multi-modal freight routes, and automate contract tendering.',
    keyHighlight: 'Dynamic carrier selection and multi-modal route optimization.',
    tags: ['Multi-Carrier Tendering', '3D Load Optimization', 'eBOL Automation', 'Intermodal Routing'],
    illustration: (
      <svg viewBox="0 0 240 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="wk-logistics-eco__illus-svg">
        <rect x="0" y="0" width="240" height="130" rx="10" fill="#F8FAFC" />

        {/* Highway Curve */}
        <path d="M15 110C65 110 95 98 125 88C155 78 190 74 230 74" stroke="#0F172A" strokeWidth="18" strokeLinecap="round" />
        <path d="M15 110C65 110 95 98 125 88C155 78 190 74 230 74" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="6 6" />

        {/* Modern Freight Trailer Unit */}
        <g transform="translate(50, 52)">
          <rect x="0" y="8" width="76" height="38" rx="3" fill="#FFFFFF" stroke="#334155" strokeWidth="1.5" />
          <rect x="4" y="12" width="68" height="30" rx="2" fill="#F8FAFC" />
          <line x1="12" y1="20" x2="36" y2="20" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="26" x2="48" y2="26" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />

          {/* Aerodynamic Tractor Unit */}
          <path d="M76 22H98C101 22 103 24 104 27L110 38C111 40 111 42 111 44V46H76V22Z" fill="#0EA5E9" />
          <path d="M81 27H96L102 36H81V27Z" fill="#F0F9FF" />

          {/* Wheels */}
          <circle cx="16" cy="48" r="6" fill="#0F172A" />
          <circle cx="16" cy="48" r="2.5" fill="#CBD5E1" />
          <circle cx="32" cy="48" r="6" fill="#0F172A" />
          <circle cx="32" cy="48" r="2.5" fill="#CBD5E1" />
          <circle cx="62" cy="48" r="6" fill="#0F172A" />
          <circle cx="62" cy="48" r="2.5" fill="#CBD5E1" />
          <circle cx="98" cy="48" r="6" fill="#0F172A" />
          <circle cx="98" cy="48" r="2.5" fill="#CBD5E1" />
        </g>

        {/* Status Tag */}
        <g transform="translate(136, 14)">
          <rect x="0" y="0" width="86" height="24" rx="5" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3.5" fill="#0EA5E9" />
          <text x="22" y="15" fill="#0F172A" fontSize="8" fontWeight="700" fontFamily="sans-serif">LANE • 97% LOAD</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'shipment-tracking',
    stepNumber: '05',
    title: 'Shipment Tracking & Delivery',
    description:
      'Track vehicle telemetry with live GPS streams, monitor geofence entry and exit, and capture contactless electronic proof-of-delivery (ePOD).',
    keyHighlight: 'Live shipment visibility, dynamic route tracking, and verified proof of delivery.',
    tags: ['Sub-Second Telematics', 'Cold-Chain IoT', 'Dynamic Predictive ETA', 'Contactless ePOD'],
    illustration: (
      <svg viewBox="0 0 240 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="wk-logistics-eco__illus-svg">
        <rect x="0" y="0" width="240" height="130" rx="10" fill="#F8FAFC" />

        {/* Telematics Radar Grid */}
        <rect x="18" y="18" width="204" height="94" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
        <line x1="18" y1="48" x2="222" y2="48" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="18" y1="78" x2="222" y2="78" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="72" y1="18" x2="72" y2="112" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="130" y1="18" x2="130" y2="112" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="182" y1="18" x2="182" y2="112" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />

        {/* GPS Vector Transit Path */}
        <path d="M38 90C68 86 86 62 120 62C154 62 170 42 202 42" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="38" cy="90" r="4" fill="#64748B" />
        <circle cx="120" cy="62" r="4" fill="#64748B" />

        {/* Live GPS Telematics Beacon Ping */}
        <circle cx="160" cy="51" r="12" fill="#0EA5E9" fillOpacity="0.16" />
        <circle cx="160" cy="51" r="6" fill="#0EA5E9" />
        <circle cx="160" cy="51" r="2.5" fill="#FFFFFF" />

        {/* Geofence Delivery Destination */}
        <circle cx="202" cy="42" r="14" stroke="#10B981" strokeWidth="1.2" strokeDasharray="3 3" fill="#10B981" fillOpacity="0.08" />
        <circle cx="202" cy="42" r="4" fill="#10B981" />

        {/* Satellite Node Graphic */}
        <g transform="translate(36, 26)">
          <rect x="0" y="0" width="14" height="8" rx="1.5" fill="#334155" />
          <line x1="-5" y1="4" x2="19" y2="4" stroke="#0EA5E9" strokeWidth="1.5" />
          <circle cx="7" cy="4" r="1.5" fill="#FFFFFF" />
          <line x1="7" y1="8" x2="15" y2="22" stroke="#0EA5E9" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
        </g>

        {/* Status Tag */}
        <g transform="translate(136, 14)">
          <rect x="0" y="0" width="86" height="24" rx="5" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3.5" fill="#0EA5E9" />
          <text x="22" y="15" fill="#0F172A" fontSize="8" fontWeight="700" fontFamily="sans-serif">LIVE GPS • ON-TIME</text>
        </g>
      </svg>
    ),
  },
];

export const LogisticsEcosystem: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (
      prefersReducedMotion ||
      !wrapperRef.current ||
      !sectionRef.current ||
      !viewportRef.current ||
      !trackRef.current
    ) {
      return;
    }

    const mm = gsap.matchMedia();

    mm.add('(min-width: 961px)', () => {
      const wrapper = wrapperRef.current;
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!wrapper || !section || !viewport || !track) return;

      const getDistance = () => {
        return Math.max(0, track.scrollWidth - viewport.clientWidth);
      };

      gsap.set(track, { x: 0 });

      // Precise scroll distance: horizontal translation + dwell pause + overlap reveal
      const horizontalDist = getDistance();
      const dwellDist = 200; // Brief dwell so final card is comfortably framed
      const overlapDist = Math.max(300, window.innerHeight * 0.5); // Smooth upward layer overlap
      const totalScroll = horizontalDist + dwellDist + overlapDist;

      // Dynamically configure wrapper height to govern sticky duration
      wrapper.style.height = `${window.innerHeight + totalScroll}px`;

      const horizontalRatio = horizontalDist / totalScroll;
      const dwellRatio = (horizontalDist + dwellDist) / totalScroll;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Move track horizontally from right to left
      tl.to(
        track,
        {
          x: -horizontalDist,
          ease: 'none',
          duration: horizontalRatio,
        },
        0
      );

      // 2. Section recedes with subtle depth as next section overlaps upward
      tl.to(
        section,
        {
          opacity: 0.92,
          scale: 0.985,
          ease: 'power1.in',
          duration: 1 - dwellRatio,
        },
        dwellRatio
      );

      return () => {
        tl.kill();
        if (wrapper) wrapper.style.height = '';
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
    <div ref={wrapperRef} className="wk-logistics-eco-wrapper">
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
                {/* Stage Header */}
                <div className="wk-logistics-eco__card-meta">
                  <span className="wk-logistics-eco__step-tag">STAGE {stage.stepNumber}</span>
                </div>

                {/* Modern Technical Vector Illustration */}
                <div className="wk-logistics-eco__card-visual" aria-hidden="true">
                  {stage.illustration}
                </div>

                {/* Card Title */}
                <h3 className="wk-logistics-eco__card-title">{stage.title}</h3>

                {/* Card Description */}
                <p className="wk-logistics-eco__card-desc">{stage.description}</p>

                {/* Simplified Capability Tags (Restrained, Light, Non-Heavy) */}
                <div className="wk-logistics-eco__tags-list">
                  {stage.tags.map((tag) => (
                    <span key={tag} className="wk-logistics-eco__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Elegant Minimal Key Capability Statement */}
                <div className="wk-logistics-eco__key-cap">
                  <span className="wk-logistics-eco__key-cap-label">KEY CAPABILITY</span>
                  <p className="wk-logistics-eco__key-cap-text">{stage.keyHighlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
