'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LogisticsEcosystem.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface EcosystemStage {
  id: string;
  stepNumber: string;
  category: string;
  title: string;
  description: string;
  impactMetric: string;
  tags: string[];
  illustration: React.ReactNode;
}

const ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    id: 'procurement',
    stepNumber: '01',
    category: 'Supplier & Dock Operations',
    title: 'Procurement & Inbound',
    description:
      'Synchronize supplier purchase orders, advance shipping notices (ASNs), and dock appointments to eliminate yard congestion and manual gate checks.',
    impactMetric: 'Up to 40% reduction in dock wait times',
    tags: ['PO Synchronization', 'ASN Digitization', 'Dock Scheduling', 'Gate Automation'],
    illustration: (
      <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="wk-logistics-eco__illus-svg">
        <defs>
          <linearGradient id="eco-grad-dock" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1887C9" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="eco-blue-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1887C9" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>
        {/* Background Ground Plate & Dock Floor */}
        <rect x="20" y="140" width="280" height="20" rx="4" fill="#E2E8F0" />
        <line x1="20" y1="140" x2="300" y2="140" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6" />
        
        {/* Inbound Bay Door */}
        <rect x="40" y="45" width="90" height="95" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
        <rect x="48" y="55" width="74" height="12" rx="2" fill="#E2E8F0" />
        <rect x="48" y="73" width="74" height="12" rx="2" fill="#E2E8F0" />
        <rect x="48" y="91" width="74" height="12" rx="2" fill="#E2E8F0" />
        <rect x="48" y="109" width="74" height="25" rx="2" fill="url(#eco-blue-primary)" fillOpacity="0.15" stroke="#1887C9" strokeWidth="1.5" />
        <circle cx="85" cy="122" r="4" fill="#1887C9" />

        {/* Inbound Freight Truck */}
        <g transform="translate(145, 68)">
          {/* Cargo Container */}
          <rect x="0" y="8" width="95" height="52" rx="4" fill="#FFFFFF" stroke="#1887C9" strokeWidth="2" />
          <line x1="25" y1="8" x2="25" y2="60" stroke="#E2E8F0" strokeWidth="1.5" />
          <line x1="50" y1="8" x2="50" y2="60" stroke="#E2E8F0" strokeWidth="1.5" />
          <line x1="75" y1="8" x2="75" y2="60" stroke="#E2E8F0" strokeWidth="1.5" />
          
          {/* Truck Cab */}
          <path d="M95 24H120C123 24 126 27 127 30L133 46C134 48 134 50 134 52V60H95V24Z" fill="#1887C9" />
          <path d="M102 30H118L124 44H102V30Z" fill="#EAF4FE" />
          
          {/* Wheels */}
          <circle cx="20" cy="62" r="9" fill="#0F172A" />
          <circle cx="20" cy="62" r="4" fill="#FFFFFF" />
          <circle cx="78" cy="62" r="9" fill="#0F172A" />
          <circle cx="78" cy="62" r="4" fill="#FFFFFF" />
          <circle cx="118" cy="62" r="9" fill="#0F172A" />
          <circle cx="118" cy="62" r="4" fill="#FFFFFF" />
        </g>

        {/* PO & ASN Verification Badge */}
        <g transform="translate(195, 20)">
          <rect x="0" y="0" width="105" height="34" rx="8" fill="#FFFFFF" stroke="#1887C9" strokeWidth="1.5" filter="drop-shadow(0 4px 12px rgba(24,135,201,0.15))" />
          <circle cx="18" cy="17" r="9" fill="#10B981" fillOpacity="0.15" />
          <path d="M14 17L17 20L23 14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="34" y="15" fill="#0F172A" fontSize="9" fontWeight="700" fontFamily="sans-serif">ASN VERIFIED</text>
          <text x="34" y="26" fill="#64748B" fontSize="8" fontFamily="sans-serif">PO #84920 Gate 03</text>
        </g>

        {/* Radio Waves for Dock Telemetry */}
        <circle cx="120" cy="40" r="12" stroke="#1887C9" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="120" cy="40" r="22" stroke="#1887C9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 'warehousing',
    stepNumber: '02',
    category: 'Intralogistics & Storage',
    title: 'Warehouse & Inventory',
    description:
      'Optimize multi-tier facility capacity with dynamic slotting algorithms, RFID/barcode scanning, automated cross-docking, and multi-facility balancing.',
    impactMetric: '99.8% pick accuracy with automated verification',
    tags: ['Dynamic Pallet Slotting', 'RFID Continuous Scan', 'Cross-Dock Routing', 'Auto Cycle Counting'],
    illustration: (
      <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="wk-logistics-eco__illus-svg">
        {/* Warehouse Shelving Rack System */}
        <rect x="30" y="30" width="14" height="125" rx="3" fill="#334155" />
        <rect x="110" y="30" width="14" height="125" rx="3" fill="#334155" />
        <rect x="190" y="30" width="14" height="125" rx="3" fill="#334155" />

        {/* Shelving Beams */}
        <rect x="30" y="65" width="174" height="8" rx="2" fill="#64748B" />
        <rect x="30" y="105" width="174" height="8" rx="2" fill="#64748B" />
        <rect x="30" y="145" width="174" height="8" rx="2" fill="#64748B" />

        {/* Top Shelf Pallets & Bins */}
        <rect x="48" y="38" width="24" height="26" rx="3" fill="#1887C9" />
        <rect x="76" y="44" width="28" height="20" rx="3" fill="#BAE6FD" stroke="#1887C9" strokeWidth="1.5" />
        <rect x="128" y="36" width="26" height="28" rx="3" fill="#E2E8F0" />
        <rect x="158" y="42" width="26" height="22" rx="3" fill="#1887C9" fillOpacity="0.8" />

        {/* Middle Shelf Pallets */}
        <rect x="48" y="78" width="28" height="26" rx="3" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
        <rect x="80" y="74" width="24" height="30" rx="3" fill="#1887C9" />
        <rect x="128" y="78" width="56" height="26" rx="3" fill="#E0F2FE" stroke="#1887C9" strokeWidth="1.5" />

        {/* Lower Shelf Pallets */}
        <rect x="48" y="118" width="56" height="26" rx="3" fill="#BAE6FD" />
        <rect x="128" y="118" width="28" height="26" rx="3" fill="#1887C9" />
        <rect x="160" y="122" width="24" height="22" rx="3" fill="#E2E8F0" />

        {/* Automated Guided Vehicle / Robotic Shuttle */}
        <g transform="translate(215, 95)">
          <rect x="0" y="30" width="75" height="24" rx="6" fill="#0F172A" />
          <circle cx="15" cy="54" r="7" fill="#64748B" />
          <circle cx="15" cy="54" r="3" fill="#FFFFFF" />
          <circle cx="60" cy="54" r="7" fill="#64748B" />
          <circle cx="60" cy="54" r="3" fill="#FFFFFF" />
          
          {/* Pallet on Robot */}
          <rect x="12" y="8" width="50" height="22" rx="3" fill="#1887C9" />
          <rect x="18" y="14" width="38" height="5" rx="1" fill="#FFFFFF" fillOpacity="0.6" />
          
          {/* Lidar / Sensor Beam */}
          <polygon points="5,34 -30,20 -30,48 5,38" fill="#1887C9" fillOpacity="0.18" />
        </g>

        {/* Real-time Inventory Tag */}
        <g transform="translate(205, 20)">
          <rect x="0" y="0" width="100" height="34" rx="8" fill="#FFFFFF" stroke="#1887C9" strokeWidth="1.5" filter="drop-shadow(0 4px 12px rgba(24,135,201,0.15))" />
          <circle cx="18" cy="17" r="7" fill="#1887C9" />
          <text x="18" y="21" fill="#FFFFFF" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">✓</text>
          <text x="32" y="15" fill="#0F172A" fontSize="9" fontWeight="700" fontFamily="sans-serif">RFID LOC: A-14</text>
          <text x="32" y="26" fill="#1887C9" fontSize="8" fontWeight="600" fontFamily="sans-serif">Stock Sync: 100%</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'order-processing',
    stepNumber: '03',
    category: 'Fulfillment & Orchestration',
    title: 'Order Processing',
    description:
      'Consolidate omnichannel B2B and D2C customer orders, execute wave & batch picking algorithms, and automate export manifest validation in real-time.',
    impactMetric: 'Sub-minute order validation & allocation',
    tags: ['Omnichannel Splitting', 'Wave & Batch Picking', 'Auto Manifesting', 'Pack Verification'],
    illustration: (
      <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="wk-logistics-eco__illus-svg">
        {/* Conveyor Belt Framework */}
        <rect x="20" y="115" width="280" height="14" rx="3" fill="#334155" />
        <circle cx="35" cy="122" r="5" fill="#94A3B8" />
        <circle cx="85" cy="122" r="5" fill="#94A3B8" />
        <circle cx="135" cy="122" r="5" fill="#94A3B8" />
        <circle cx="185" cy="122" r="5" fill="#94A3B8" />
        <circle cx="235" cy="122" r="5" fill="#94A3B8" />
        <circle cx="285" cy="122" r="5" fill="#94A3B8" />
        <rect x="40" y="129" width="10" height="30" fill="#64748B" />
        <rect x="155" y="129" width="10" height="30" fill="#64748B" />
        <rect x="270" y="129" width="10" height="30" fill="#64748B" />

        {/* Parcels on Conveyor */}
        <rect x="40" y="75" width="38" height="38" rx="4" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="40" y1="94" x2="78" y2="94" stroke="#CBD5E1" strokeWidth="1.5" />

        {/* Center Smart Parcel (Being Scanned) */}
        <rect x="125" y="70" width="46" height="44" rx="5" fill="#1887C9" stroke="#0284C7" strokeWidth="2" />
        <line x1="125" y1="92" x2="171" y2="92" stroke="#BAE6FD" strokeWidth="1.5" />
        <rect x="135" y="78" width="14" height="8" rx="2" fill="#FFFFFF" fillOpacity="0.8" />

        {/* Right Sorted Parcel */}
        <rect x="225" y="77" width="36" height="36" rx="4" fill="#BAE6FD" stroke="#1887C9" strokeWidth="1.5" />
        <line x1="225" y1="95" x2="261" y2="95" stroke="#1887C9" strokeWidth="1.5" />

        {/* Optical Barcode Scanner Arch */}
        <path d="M110 115V45C110 40 114 36 119 36H177C182 36 186 40 186 45V115" stroke="#0F172A" strokeWidth="3" />
        <rect x="133" y="32" width="30" height="10" rx="3" fill="#1887C9" />
        
        {/* Laser Scanner Beam */}
        <polygon points="135,42 105,95 191,95 161,42" fill="#1887C9" fillOpacity="0.18" />
        <line x1="108" y1="95" x2="188" y2="95" stroke="#1887C9" strokeWidth="2" strokeDasharray="3 3" />

        {/* Order Orchestration Floating Card */}
        <g transform="translate(195, 20)">
          <rect x="0" y="0" width="110" height="38" rx="8" fill="#FFFFFF" stroke="#1887C9" strokeWidth="1.5" filter="drop-shadow(0 4px 12px rgba(24,135,201,0.15))" />
          <circle cx="18" cy="19" r="8" fill="#1887C9" fillOpacity="0.12" />
          <path d="M14 19L17 22L23 16" stroke="#1887C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="32" y="16" fill="#0F172A" fontSize="9" fontWeight="700" fontFamily="sans-serif">BATCH #4089</text>
          <text x="32" y="28" fill="#10B981" fontSize="8" fontWeight="600" fontFamily="sans-serif">96 Orders Dispatched</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'transportation',
    stepNumber: '04',
    category: 'Fleet & Intermodal Transit',
    title: 'Freight & Transportation',
    description:
      'Consolidate multi-drop freight loads, tender spot and contract carriers through dynamic rate matrices, and enforce digital eBOL waybills on every lane.',
    impactMetric: '15–22% lower freight spend per ton-mile',
    tags: ['Multi-Carrier Tendering', '3D Load Optimization', 'eBOL Automation', 'Intermodal Routing'],
    illustration: (
      <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="wk-logistics-eco__illus-svg">
        {/* Highway Curve */}
        <path d="M10 150C70 150 110 135 150 120C190 105 240 100 310 100" stroke="#CBD5E1" strokeWidth="32" strokeLinecap="round" />
        <path d="M10 150C70 150 110 135 150 120C190 105 240 100 310 100" stroke="#0F172A" strokeWidth="28" strokeLinecap="round" />
        <path d="M10 150C70 150 110 135 150 120C190 105 240 100 310 100" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="8 8" />

        {/* Long-Haul Freight Truck */}
        <g transform="translate(60, 75)">
          {/* Main Trailer */}
          <rect x="0" y="12" width="105" height="52" rx="4" fill="#FFFFFF" stroke="#1887C9" strokeWidth="2" />
          <rect x="6" y="18" width="93" height="40" rx="2" fill="#F0F9FF" />
          <path d="M15 28H45M15 36H60M15 44H35" stroke="#1887C9" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          
          {/* Aerodynamic Tractor Cab */}
          <path d="M105 30H135C139 30 142 33 144 37L152 52C154 55 154 58 154 61V64H105V30Z" fill="#1887C9" />
          <path d="M112 37H133L141 50H112V37Z" fill="#BAE6FD" />
          
          {/* Tires */}
          <circle cx="22" cy="66" r="9" fill="#0F172A" />
          <circle cx="22" cy="66" r="4" fill="#CBD5E1" />
          <circle cx="42" cy="66" r="9" fill="#0F172A" />
          <circle cx="42" cy="66" r="4" fill="#CBD5E1" />
          <circle cx="85" cy="66" r="9" fill="#0F172A" />
          <circle cx="85" cy="66" r="4" fill="#CBD5E1" />
          <circle cx="135" cy="66" r="9" fill="#0F172A" />
          <circle cx="135" cy="66" r="4" fill="#CBD5E1" />
        </g>

        {/* Route Optimization Telemetry Card */}
        <g transform="translate(180, 20)">
          <rect x="0" y="0" width="125" height="42" rx="8" fill="#FFFFFF" stroke="#1887C9" strokeWidth="1.5" filter="drop-shadow(0 4px 12px rgba(24,135,201,0.15))" />
          <circle cx="18" cy="21" r="9" fill="#1887C9" fillOpacity="0.12" />
          <path d="M14 21C14 21 16 16 18 16C20 16 22 21 22 21" stroke="#1887C9" strokeWidth="2" strokeLinecap="round" />
          <text x="34" y="17" fill="#0F172A" fontSize="9" fontWeight="700" fontFamily="sans-serif">CORRIDOR: CHI → DAL</text>
          <text x="34" y="28" fill="#10B981" fontSize="8" fontWeight="600" fontFamily="sans-serif">Load Factor: 97.4% (3D Optimal)</text>
          <text x="34" y="38" fill="#64748B" fontSize="7" fontFamily="sans-serif">eBOL Verified & Signed</text>
        </g>

        {/* GPS Waypoint Beacon */}
        <circle cx="250" cy="98" r="8" fill="#1887C9" fillOpacity="0.2" />
        <circle cx="250" cy="98" r="4" fill="#1887C9" />
      </svg>
    ),
  },
  {
    id: 'shipment-tracking',
    stepNumber: '05',
    category: 'Real-Time Visibility',
    title: 'Shipment Tracking',
    description:
      'Stream sub-second telematics with multi-carrier IoT integration, real-time geofence events, cold-chain sensor monitoring, and predictive dynamic ETAs.',
    impactMetric: 'Zero deadband tracking across transit corridors',
    tags: ['Sub-Second Telematics', 'Cold-Chain IoT', 'Geofence Triggers', 'Dynamic Predictive ETA'],
    illustration: (
      <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="wk-logistics-eco__illus-svg">
        {/* Radar Map Grid Background */}
        <rect x="25" y="25" width="270" height="135" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
        <line x1="25" y1="60" x2="295" y2="60" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="25" y1="95" x2="295" y2="95" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="25" y1="130" x2="295" y2="130" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="90" y1="25" x2="90" y2="160" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="160" y1="25" x2="160" y2="160" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="230" y1="25" x2="230" y2="160" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />

        {/* GPS Transit Path */}
        <path d="M50 125C90 120 110 85 155 85C200 85 220 55 265 55" stroke="#1887C9" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="125" r="5" fill="#64748B" />
        <circle cx="155" cy="85" r="5" fill="#64748B" />

        {/* Live Tracking Vehicle Pulse Node */}
        <circle cx="215" cy="68" r="16" fill="#1887C9" fillOpacity="0.18" />
        <circle cx="215" cy="68" r="8" fill="#1887C9" />
        <circle cx="215" cy="68" r="4" fill="#FFFFFF" />

        {/* Geofence Boundary Circle */}
        <circle cx="265" cy="55" r="22" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" fill="#10B981" fillOpacity="0.08" />
        <circle cx="265" cy="55" r="6" fill="#10B981" />

        {/* Satellite Beam Graphic */}
        <g transform="translate(60, 32)">
          <rect x="0" y="0" width="18" height="10" rx="2" fill="#334155" />
          <line x1="-8" y1="5" x2="26" y2="5" stroke="#1887C9" strokeWidth="2" />
          <circle cx="9" cy="5" r="2" fill="#FFFFFF" />
          {/* Signal Rays */}
          <path d="M9 14L15 28M9 14L3 28M9 14L9 30" stroke="#1887C9" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />
        </g>

        {/* Live Status Telemetry Pill */}
        <g transform="translate(35, 78)">
          <rect x="0" y="0" width="105" height="36" rx="8" fill="#FFFFFF" stroke="#1887C9" strokeWidth="1.5" filter="drop-shadow(0 4px 12px rgba(24,135,201,0.15))" />
          <circle cx="14" cy="18" r="5" fill="#10B981" />
          <text x="26" y="16" fill="#0F172A" fontSize="9" fontWeight="700" fontFamily="sans-serif">LIVE GPS: ON-TIME</text>
          <text x="26" y="27" fill="#1887C9" fontSize="8" fontWeight="600" fontFamily="sans-serif">Temp: -18.2°C (Reefer OK)</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'last-mile',
    stepNumber: '06',
    category: 'Customer Experience & Dispatch',
    title: 'Last-Mile & Delivery',
    description:
      'Dynamically sequence local delivery routes with live traffic AI, send customer WhatsApp/SMS tracking links, and capture verified contactless ePOD signatures.',
    impactMetric: '42% faster final-leg dispatch turnaround',
    tags: ['Dynamic Stop Sequencing', 'Contactless ePOD', 'Live Recipient Tracking', 'Reverse Logistics'],
    illustration: (
      <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="wk-logistics-eco__illus-svg">
        {/* City Street Road Surface */}
        <rect x="20" y="130" width="280" height="25" rx="4" fill="#0F172A" />
        <line x1="20" y1="142" x2="300" y2="142" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="8 8" />

        {/* Urban Delivery Sprinter Van */}
        <g transform="translate(45, 70)">
          {/* Van Body */}
          <path d="M0 16C0 12 3 9 7 9H70C74 9 77 12 78 15L84 32C85 34 87 36 90 36H105C108 36 110 38 110 41V60H0V16Z" fill="#1887C9" />
          <path d="M80 32H102L96 18H74L80 32Z" fill="#BAE6FD" />
          <rect x="12" y="18" width="50" height="34" rx="2" fill="#0284C7" />
          <text x="37" y="38" fill="#FFFFFF" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">EXPRESS</text>

          {/* Wheels */}
          <circle cx="24" cy="62" r="9" fill="#0F172A" />
          <circle cx="24" cy="62" r="4" fill="#CBD5E1" />
          <circle cx="86" cy="62" r="9" fill="#0F172A" />
          <circle cx="86" cy="62" r="4" fill="#CBD5E1" />
        </g>

        {/* Digital Proof of Delivery Tablet Graphic */}
        <g transform="translate(180, 22)">
          <rect x="0" y="0" width="118" height="92" rx="10" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" filter="drop-shadow(0 6px 16px rgba(15,23,42,0.12))" />
          <rect x="6" y="8" width="106" height="76" rx="6" fill="#F8FAFC" />
          
          {/* Tablet Header */}
          <circle cx="18" cy="20" r="5" fill="#10B981" />
          <text x="28" y="23" fill="#0F172A" fontSize="9" fontWeight="800" fontFamily="sans-serif">ePOD VERIFIED</text>
          <line x1="12" y1="32" x2="106" y2="32" stroke="#E2E8F0" strokeWidth="1" />

          {/* Customer Signature Trace */}
          <text x="12" y="44" fill="#64748B" fontSize="7" fontFamily="sans-serif">Recipient Signature:</text>
          <path d="M14 62C22 55 26 66 35 58C42 52 48 68 58 59C66 52 74 64 84 56" stroke="#1887C9" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="68" x2="88" y2="68" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />

          {/* Timestamp Badge */}
          <rect x="12" y="72" width="84" height="9" rx="2" fill="#EAF4FE" />
          <text x="16" y="79" fill="#1887C9" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">GPS Lat: 41.8781 | 14:32 EST</text>
        </g>

        {/* Customer Success Notification Pill */}
        <g transform="translate(120, 118)">
          <rect x="0" y="0" width="60" height="22" rx="11" fill="#10B981" />
          <text x="30" y="15" fill="#FFFFFF" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">DELIVERED</text>
        </g>
      </svg>
    ),
  },
];

export const LogisticsEcosystem: React.FC = () => {
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
        const trackScrollWidth = track.scrollWidth;
        const viewportWidth = viewport.clientWidth;
        // Allow enough travel so the final card is fully framed on screen
        return Math.max(0, trackScrollWidth - viewportWidth + 64);
      };

      gsap.set(track, { x: 0 });

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
          onUpdate: (self) => {
            if (progressFillRef.current) {
              progressFillRef.current.style.width = `${Math.min(100, Math.max(0, self.progress * 100)).toFixed(1)}%`;
            }
            const stageCount = ECOSYSTEM_STAGES.length;
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
      id="logistics-ecosystem"
      ref={sectionRef}
      className="wk-logistics-eco"
      aria-label="How the Logistics Ecosystem Works"
    >
      <div className="wk-logistics-eco__inner">
        {/* Header Block */}
        <div className="wk-logistics-eco__header">
          <div className="wk-logistics-eco__header-top">
            <span className="wk-logistics-eco__badge">Connected Supply Chain</span>
            <div className="wk-logistics-eco__indicator-group" aria-hidden="true">
              <span className="wk-logistics-eco__indicator-text">
                STAGE <strong className="wk-logistics-eco__indicator-num">{String(activeStageIndex + 1).padStart(2, '0')}</strong> OF 06
              </span>
              <div className="wk-logistics-eco__progress-track">
                <div ref={progressFillRef} className="wk-logistics-eco__progress-fill" />
              </div>
            </div>
          </div>

          <h2 className="wk-logistics-eco__title">
            How the Modern <span className="wk-logistics-eco__title-accent">Logistics Ecosystem</span> Works
          </h2>
          <p className="wk-logistics-eco__subtitle">
            An end-to-end operational pipeline connecting procurement, warehousing, transit, and delivery into one continuous data flow.
          </p>
        </div>

        {/* Viewport for Horizontal Track on Desktop */}
        <div ref={viewportRef} className="wk-logistics-eco__viewport">
          <div ref={trackRef} className="wk-logistics-eco__track">
            {ECOSYSTEM_STAGES.map((stage, idx) => (
              <div
                key={stage.id}
                className={`wk-logistics-eco__card ${idx === activeStageIndex ? 'is-active' : ''}`}
              >
                {/* Top Bar with Stage & Category */}
                <div className="wk-logistics-eco__card-header">
                  <div className="wk-logistics-eco__step-pill">
                    <span className="wk-logistics-eco__step-dot" />
                    <span>STAGE {stage.stepNumber}</span>
                  </div>
                  <span className="wk-logistics-eco__card-category">{stage.category}</span>
                </div>

                {/* Bespoke Illustration Area */}
                <div className="wk-logistics-eco__card-visual" aria-hidden="true">
                  {stage.illustration}
                </div>

                {/* Card Content */}
                <div className="wk-logistics-eco__card-body">
                  <h3 className="wk-logistics-eco__card-title">{stage.title}</h3>
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

                {/* Connecting Pipe / Indicator (Except Last Card) */}
                {idx < ECOSYSTEM_STAGES.length - 1 && (
                  <div className="wk-logistics-eco__connector" aria-hidden="true">
                    <div className="wk-logistics-eco__connector-line" />
                    <div className="wk-logistics-eco__connector-arrow">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
