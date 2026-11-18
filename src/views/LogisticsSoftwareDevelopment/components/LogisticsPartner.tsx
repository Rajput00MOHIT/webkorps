'use client';

import React, { useState } from 'react';
import { LOGISTICS_DEMO_PLACEHOLDER } from '../logisticsSoftwareData';
import { getImgSrc } from '../../../utils/image';
import './LogisticsPartner.css';

interface CapabilityRow {
  number: string;
  title: string;
  description: string;
}

const PARTNER_CAPABILITIES: CapabilityRow[] = [
  {
    number: '01',
    title: 'Custom Development',
    description:
      'Engineered specifically around your operational rules, proprietary dispatch logic, and unique carrier contracts—without rigid third-party software constraints.',
  },
  {
    number: '02',
    title: 'Scalable Architecture',
    description:
      'High-throughput, event-driven cloud systems that ingest millions of IoT telemetry pings and process rapid order surges during peak seasons without lag.',
  },
  {
    number: '03',
    title: 'Seamless Integration',
    description:
      'Deep supply chain protocol expertise across EDI standards (204, 214, 856), IoT sensor streams, and bidirectional synchronization with SAP, Oracle, and legacy ERPs.',
  },
  {
    number: '04',
    title: 'Advanced Security',
    description:
      'Enterprise security by design: SOC 2 and ISO 27001 aligned architecture, TLS 1.3 telemetry encryption, strict role-based access control, and complete audit logging.',
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description:
      '24/7 proactive system monitoring, guaranteed response SLAs, and dedicated engineering sprints to continuously adapt your platform as your fleet and facilities grow.',
  },
];

export const LogisticsPartner: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="logistics-partner" className="wk-logistics-pt" aria-label="Your Technology Partner for Smarter Logistics">
      <div className="wk-logistics-pt__container">
        {/* Editorial Split-Layout: Capabilities List on Left, Architectural Visual on Right */}
        <div className="wk-logistics-pt__split">
          {/* Left Column: Heading + 5 Structured Rows (No Cards) */}
          <div className="wk-logistics-pt__content-col">
            <span className="wk-logistics-pt__badge">Engineering Excellence</span>
            <h2 className="wk-logistics-pt__title">
              Your Dedicated Engineering Partner for{' '}
              <span className="wk-logistics-pt__title-accent">Smarter Logistics</span>
            </h2>
            <p className="wk-logistics-pt__subtitle">
              We combine deep logistics domain knowledge with high-performance software engineering to deliver scalable, resilient supply chain platforms.
            </p>

            {/* 5 Capability Rows with Dividers */}
            <div className="wk-logistics-pt__rows">
              {PARTNER_CAPABILITIES.map((cap, index) => {
                const isHovered = hoveredIdx === index;
                return (
                  <div
                    key={cap.number}
                    className={`wk-logistics-pt__row ${isHovered ? 'is-hovered' : ''}`}
                    onMouseEnter={() => setHoveredIdx(index)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <div className="wk-logistics-pt__row-num" aria-hidden="true">
                      {cap.number}
                    </div>
                    <div className="wk-logistics-pt__row-body">
                      <h3 className="wk-logistics-pt__row-title">{cap.title}</h3>
                      <p className="wk-logistics-pt__row-desc">{cap.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-End Architecture & Workspace Visual */}
          <div className="wk-logistics-pt__visual-col">
            <div className="wk-logistics-pt__visual-card">
              <img
                src={getImgSrc(LOGISTICS_DEMO_PLACEHOLDER)}
                alt="Webkorps logistics engineering architecture and control center"
                className="wk-logistics-pt__visual-img"
                loading="lazy"
              />
              <div className="wk-logistics-pt__visual-badge">
                <span className="wk-logistics-pt__visual-dot" aria-hidden="true" />
                <span>Enterprise Supply Chain Engineering</span>
              </div>
            </div>

            {/* Engineering Trust Metrics */}
            <div className="wk-logistics-pt__trust-strip">
              <div className="wk-logistics-pt__trust-item">
                <span className="wk-logistics-pt__trust-value">10+ Years</span>
                <span className="wk-logistics-pt__trust-label">Enterprise Engineering</span>
              </div>
              <div className="wk-logistics-pt__trust-divider" aria-hidden="true" />
              <div className="wk-logistics-pt__trust-item">
                <span className="wk-logistics-pt__trust-value">99.9%</span>
                <span className="wk-logistics-pt__trust-label">Uptime Architecture</span>
              </div>
              <div className="wk-logistics-pt__trust-divider" aria-hidden="true" />
              <div className="wk-logistics-pt__trust-item">
                <span className="wk-logistics-pt__trust-value">24/7</span>
                <span className="wk-logistics-pt__trust-label">Mission-Critical Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
