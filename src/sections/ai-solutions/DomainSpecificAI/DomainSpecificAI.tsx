'use client';

import React, { useState } from 'react';
import './DomainSpecificAI.css';

interface IndustryDomain {
  id: string;
  name: string;
  badge: string;
  solutionTitle: string;
  challenge: string;
  engineering: string;
  bulletPoints: string[];
}

const DOMAINS: IndustryDomain[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    badge: 'HIPAA COMPLIANT',
    solutionTitle: 'Clinical Workflow Intelligence & Diagnostic Triaging',
    challenge:
      'Clinicians spend over 35% of their working hours on administrative documentation and patient query triaging, delaying patient care and driving physician burnout.',
    engineering:
      'Webkorps implements HIPAA-compliant clinical consultation platforms with ambient notes summarization, automated appointment triaging, and secure Electronic Health Record (EHR) query copilots.',
    bulletPoints: [
      'Built secure consultation infrastructure for Cigna partners.',
      'Reduced intake triage time by 45%.',
      'Ensured zero data retention and HIPAA/ISO 27001 compliance.',
    ],
  },
  {
    id: 'fintech',
    name: 'FinTech & Digital Payments',
    badge: 'PCI-DSS VALIDATED',
    solutionTitle: 'Real-Time Fraud Detection & Autonomous Reconciliation',
    challenge:
      'Payment platforms face escalating fraud risks and complex multi-currency manual reconciliation overheads that delay daily settlement.',
    engineering:
      'Webkorps develops low-latency transaction monitoring engines, automated multi-ledger reconciliation pipelines, and intelligent risk scoring models.',
    bulletPoints: [
      'Sub-50ms inference latency on high-volume transaction scoring.',
      'Automated discrepancy resolution and multi-ledger matching.',
      'Strict adherence to banking privacy and financial compliance standards.',
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    badge: 'SUPPLY CHAIN AI',
    solutionTitle: 'Predictive Fleet Dispatch & Dynamic Route Optimization',
    challenge:
      'Delivery bottlenecks, volatile shipping schedules, and manual warehouse dispatching increase operational costs and reduce delivery predictability.',
    engineering:
      'Webkorps engineers intelligent dispatch algorithms and predictive supply-chain forecasting systems to streamline dynamic multi-stop logistics.',
    bulletPoints: [
      'Dynamic routing taking into account real-time traffic and weather telemetry.',
      'Automated warehouse dock loading and dispatch schedules.',
      'End-to-end supply chain visibility and event monitoring.',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial IoT',
    badge: 'INDUSTRIAL IOT',
    solutionTitle: 'Predictive Maintenance & Visual Defect Inspection',
    challenge:
      'Unscheduled equipment downtime and manual assembly line QA result in high scrap rates and costly maintenance delays.',
    engineering:
      'Webkorps deploys telemetry anomaly forecasting and computer vision defect detection directly on edge-capable industrial gateways.',
    bulletPoints: [
      'Real-time anomaly detection from industrial sensor streams.',
      'Edge-deployed visual quality inspection models.',
      'Automated alerts and predictive maintenance scheduling.',
    ],
  },
  {
    id: 'saas',
    name: 'Enterprise SaaS Platforms',
    badge: 'SAAS COPILOTS',
    solutionTitle: 'Embedded Natural-Language Copilots & Semantic Search',
    challenge:
      'Navigating complex SaaS workflows and multi-dimensional reports creates friction and limits self-service customer adoption.',
    engineering:
      'Webkorps embeds secure natural-language query copilots and contextual retrieval-augmented generation directly into enterprise platforms.',
    bulletPoints: [
      'Natural-language data query and report synthesis.',
      'Tenant-isolated vector indexing with role-based access control.',
      'Contextual sidecars embedded into existing product workflows.',
    ],
  },
];

export const DomainSpecificAI: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('healthcare');

  const activeDomain = DOMAINS.find((d) => d.id === selectedId) || DOMAINS[0];

  return (
    <section className="wk-domain-ai" aria-labelledby="domain-ai-heading">
      <div className="wk-domain-ai__container">
        {/* Section Header */}
        <div className="wk-domain-ai__header">
          <h2 id="domain-ai-heading" className="wk-domain-ai__title">
            Domain-Specific{' '}
            <span className="wk-domain-ai__title-accent">AI for Mission-Critical</span>{' '}
            Sectors
          </h2>
          <p className="wk-domain-ai__subtitle">
            We build compliant, domain-specific AI solutions for secure, reliable business operations.
          </p>
        </div>

        {/* Main Two-Column Composition: ~55% Left, ~45% Right */}
        <div className="wk-domain-ai__layout">
          {/* Left Column: Interactive Industry Selector */}
          <div
            className="wk-domain-ai__selector"
            role="tablist"
            aria-label="Domain-Specific Industries"
          >
            {DOMAINS.map((domain) => {
              const isSelected = domain.id === selectedId;
              return (
                <button
                  key={domain.id}
                  type="button"
                  role="tab"
                  id={`tab-${domain.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${domain.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  className={`wk-domain-ai__item ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setSelectedId(domain.id)}
                >
                  <span className="wk-domain-ai__item-text">{domain.name}</span>
                  {isSelected ? (
                    <span className="wk-domain-ai__arrow-active" aria-hidden="true">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1887C9"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  ) : (
                    <span className="wk-domain-ai__arrow-box" aria-hidden="true">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0F172A"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Industry Solution Detail Panel */}
          <div
            id={`panel-${activeDomain.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeDomain.id}`}
            className="wk-domain-ai__panel"
          >
            {/* 1. Compliance Badge */}
            <div className="wk-domain-ai__badge-wrap">
              <span className="wk-domain-ai__badge">{activeDomain.badge}</span>
            </div>

            {/* 2. Main Solution Heading */}
            <h3 className="wk-domain-ai__panel-title">{activeDomain.solutionTitle}</h3>

            {/* 3. The Operational Challenge */}
            <div className="wk-domain-ai__section">
              <h4 className="wk-domain-ai__section-title">The Operational Challenge</h4>
              <p className="wk-domain-ai__section-desc">{activeDomain.challenge}</p>
            </div>

            {/* 4. Webkorps AI Engineering */}
            <div className="wk-domain-ai__section">
              <h4 className="wk-domain-ai__section-title">Webkorps AI Engineering</h4>
              <p className="wk-domain-ai__section-desc">{activeDomain.engineering}</p>
            </div>

            {/* 5. Key Points with Blue Outlined Check-Circle Icons */}
            <div className="wk-domain-ai__proof-list">
              {activeDomain.bulletPoints.map((point, index) => (
                <div key={index} className="wk-domain-ai__proof-item">
                  <svg
                    className="wk-domain-ai__proof-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1887C9"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" stroke="#1887C9" strokeWidth="1.8" />
                    <path
                      d="M8.5 12.5L11 15L15.5 9.5"
                      stroke="#1887C9"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="wk-domain-ai__proof-text">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
