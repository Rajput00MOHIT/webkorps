'use client';

import React from 'react';
import {
  DomainSpecificSolutions,
  DomainSolutionItem,
} from '../../../components/DomainSpecificSolutions';

const DOMAINS: DomainSolutionItem[] = [
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
  return (
    <DomainSpecificSolutions
      id="domain-ai"
      title={
        <>
          Domain-Specific{' '}
          <span className="wk-domain-sol__title-accent">AI for Mission-Critical</span>{' '}
          Sectors
        </>
      }
      subtitle="We build compliant, domain-specific AI solutions for secure, reliable business operations."
      engineeringLabel="Webkorps AI Engineering"
      domains={DOMAINS}
    />
  );
};
