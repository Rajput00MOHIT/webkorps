'use client';

import React from 'react';
import './LogisticsEcosystem.css';

interface EcosystemStage {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    id: 'procurement',
    number: '01',
    title: 'Procurement & Inbound',
    description: 'Synchronize supplier purchase orders, delivery appointments, and automated advance shipping notices (ASNs) to prevent dock congestion.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'warehousing',
    number: '02',
    title: 'Warehouse & Inventory',
    description: 'Optimize inventory with dynamic bin slotting, barcode/RFID scanning, cross-docking, and real-time stock balance across facilities.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'order-processing',
    number: '03',
    title: 'Order Processing',
    description: 'Consolidate multi-channel B2B and D2C orders, validate stock availability, and trigger automated pick-and-pack fulfillment batches.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'transportation',
    number: '04',
    title: 'Freight & Transportation',
    description: 'Consolidate loads algorithmically, benchmark carrier rates, plan multi-modal freight routes, and automate contract tendering.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 'shipment-tracking',
    number: '05',
    title: 'Shipment Tracking',
    description: 'Track vehicle telemetry with live GPS streams, monitor geofence entry and exit, and distribute automated transit alerts.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'last-mile',
    number: '06',
    title: 'Last-Mile & Delivery',
    description: 'Sequence driver stops dynamically, provide accurate customer ETAs, and capture contactless electronic proof-of-delivery (ePOD).',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export const LogisticsEcosystem: React.FC = () => {
  return (
    <section id="logistics-ecosystem" className="wk-logistics-eco" aria-label="How the Logistics Ecosystem Works">
      <div className="wk-logistics-eco__container">
        <div className="wk-logistics-eco__header">
          <span className="wk-logistics-eco__badge">Connected Supply Chain</span>
          <h2 className="wk-logistics-eco__title">
            How the Modern <span className="wk-logistics-eco__title-accent">Logistics Ecosystem</span> Works
          </h2>
          <p className="wk-logistics-eco__subtitle">
            An end-to-end operational pipeline connecting procurement, warehousing, transit, and delivery into one continuous data flow.
          </p>
        </div>

        {/* Structured Non-Scrollable Connected Grid */}
        <div className="wk-logistics-eco__grid">
          {ECOSYSTEM_STAGES.map((stage, idx) => (
            <div key={stage.id} className="wk-logistics-eco__card">
              <div className="wk-logistics-eco__card-top">
                <div className="wk-logistics-eco__icon-box" aria-hidden="true">
                  {stage.icon}
                </div>
                <div className="wk-logistics-eco__meta">
                  <span className="wk-logistics-eco__num">{stage.number}</span>
                  {idx < ECOSYSTEM_STAGES.length - 1 && (
                    <span className="wk-logistics-eco__flow-arrow" aria-hidden="true">→</span>
                  )}
                </div>
              </div>

              <h3 className="wk-logistics-eco__card-title">{stage.title}</h3>
              <p className="wk-logistics-eco__card-desc">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
