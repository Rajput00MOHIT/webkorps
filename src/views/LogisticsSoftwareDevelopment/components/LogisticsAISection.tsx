'use client';

import React, { useState } from 'react';
import type { StaticImageData } from 'next/image';
import { LOGISTICS_DEMO_PLACEHOLDER } from '../logisticsSoftwareData';
import { getImgSrc } from '../../../utils/image';
import './LogisticsAISection.css';

export interface AIUseCaseBrief {
  id: string;
  number: string;
  title: string;
  problem: string;
  aiSolution?: string;
  aiApproach?: string;
  dataFeeds?: string;
  integrations?: string;
  benefit?: string;
}

const AI_USE_CASES: AIUseCaseBrief[] = [
  {
    id: 'route-optimization',
    number: '01',
    title: 'AI Route Optimization',
    problem: 'Static routes ignore live traffic jams, weather, and entry time restrictions.',
    aiSolution: 'Neural network graph optimization recalculates multi-stop routes dynamically.',
    dataFeeds: 'Live GPS, Google Maps/HERE APIs & traffic feeds',
  },
  {
    id: 'demand-forecasting',
    number: '02',
    title: 'Predictive Demand Forecasting',
    problem: 'Spreadsheet models fail to anticipate seasonal demand and regional order spikes.',
    aiSolution: 'Time-series predictive models evaluate order velocity, weather, and market signals.',
    dataFeeds: 'Historical ERP transactions & storefront orders',
  },
  {
    id: 'predictive-maintenance',
    number: '03',
    title: 'Predictive Fleet Maintenance',
    problem: 'Unexpected breakdowns on long-haul routes cause severe delays and towing costs.',
    aiSolution: 'Anomaly detection models analyze engine temperature, battery, and vibration telemetry.',
    dataFeeds: 'CAN-bus engine diagnostics & OBD-II sensors',
  },
  {
    id: 'shipment-monitoring',
    number: '04',
    title: 'Intelligent Shipment Monitoring',
    problem: 'Static distance calculations produce inaccurate arrival times and warehouse dock congestion.',
    aiSolution: 'Machine learning factors in toll queues, rest stops, and terminal dwell to predict arrival.',
    dataFeeds: 'FASTag transponders, port gates & active telematics',
  },
  {
    id: 'warehouse-intelligence',
    number: '05',
    title: 'Warehouse Intelligence',
    problem: 'Suboptimal SKU placement forces warehouse pickers to walk excessive distances.',
    aiSolution: 'Clustering algorithms dynamically rearrange bins by product velocity and affinity.',
    dataFeeds: 'WMS pick-pack history & SKU dimension databases',
  },
  {
    id: 'ai-analytics',
    number: '06',
    title: 'AI-Powered Analytics',
    problem: 'Manual freight invoice audits miss duplicate charges, tariff errors, and fuel theft.',
    aiSolution: 'Automated OCR document parsing paired with anomaly detection reconciles bills instantly.',
    dataFeeds: 'Fuel sensor logs, carrier invoices & GPS records',
  },
];

export interface LogisticsAISectionProps {
  id?: string;
  title?: React.ReactNode;
  subtitle?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  useCases?: AIUseCaseBrief[];
}

export const LogisticsAISection: React.FC<LogisticsAISectionProps> = ({
  id = 'logistics-ai',
  title = (
    <>
      Smarter <span className="wk-logistics-ai__title-accent">Logistics with AI</span>
    </>
  ),
  subtitle = 'AI predicts delays, optimizes inventory, and protects freight margins.',
  image = LOGISTICS_DEMO_PLACEHOLDER,
  imageAlt = 'AI operations and predictive analytics 3D display',
  useCases = AI_USE_CASES,
}) => {
  const [activeId, setActiveId] = useState<string>(useCases[0]?.id || '');

  React.useEffect(() => {
    if (useCases && useCases.length > 0) {
      setActiveId(useCases[0].id);
    }
  }, [useCases]);

  const activeCase = useCases.find((c) => c.id === activeId) || useCases[0];

  if (!activeCase) return null;

  return (
    <section id={id} className="wk-logistics-ai" aria-label="Smarter Operations with AI">
      <div className="wk-logistics-ai__container">
        {/* Section Header */}
        <div className="wk-logistics-ai__header">
          <h2 className="wk-logistics-ai__title">{title}</h2>
          <p className="wk-logistics-ai__subtitle">{subtitle}</p>
        </div>

        {/* Visual-and-Content Split Composition */}
        <div className="wk-logistics-ai__split">
          {/* Left Side: Tabs on Top, 3D Image Card Below */}
          <div className="wk-logistics-ai__left-col">
            {/* 2-Column Tabs Grid */}
            <div className="wk-logistics-ai__tabs" role="tablist" aria-label="AI Capabilities">
              {useCases.map((uc) => {
                const isSelected = uc.id === activeId;
                return (
                  <button
                    key={uc.id}
                    role="tab"
                    id={`tab-ai-${uc.id}`}
                    aria-selected={isSelected}
                    aria-controls={`panel-ai-${uc.id}`}
                    className={`wk-logistics-ai__tab-btn ${isSelected ? 'is-active' : ''}`}
                    onClick={() => setActiveId(uc.id)}
                  >
                    <span className="wk-logistics-ai__tab-num">{uc.number}</span>
                    <span className="wk-logistics-ai__tab-text">{uc.title}</span>
                  </button>
                );
              })}
            </div>

            {/* 3D Illustration Graphic Card */}
            <div className="wk-logistics-ai__image-card">
              <img
                src={getImgSrc(image)}
                alt={imageAlt}
                className="wk-logistics-ai__image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side: Clean Active Use-Case Detail Panel */}
          <div
            id={`panel-ai-${activeCase.id}`}
            role="tabpanel"
            aria-labelledby={`tab-ai-${activeCase.id}`}
            className="wk-logistics-ai__detail-panel"
          >
            <div className="wk-logistics-ai__panel-header">
              <span className="wk-logistics-ai__panel-badge">USE CASE {activeCase.number}</span>
              <h3 className="wk-logistics-ai__panel-title">{activeCase.title}</h3>
            </div>

            <div className="wk-logistics-ai__panel-content">
              {/* Challenge Box */}
              <div className="wk-logistics-ai__point">
                <span className="wk-logistics-ai__point-label">THE OPERATIONAL CHALLENGE</span>
                <p className="wk-logistics-ai__point-desc">{activeCase.problem}</p>
              </div>

              {/* Solution Box */}
              <div className="wk-logistics-ai__point">
                <span className="wk-logistics-ai__point-label">HOW APPLIED AI SOLVES IT</span>
                <p className="wk-logistics-ai__point-desc">{activeCase.aiSolution || activeCase.aiApproach}</p>
              </div>

              {/* Data Ingestion Box */}
              <div className="wk-logistics-ai__point">
                <span className="wk-logistics-ai__point-label">KEY DATA INTEGRATIONS</span>
                <p className="wk-logistics-ai__point-desc">{activeCase.dataFeeds || activeCase.integrations}</p>
              </div>

              {/* Optional Benefit Box */}
              {activeCase.benefit && (
                <div className="wk-logistics-ai__point is-benefit">
                  <span className="wk-logistics-ai__point-label">MEASURABLE VALUE</span>
                  <p className="wk-logistics-ai__point-desc">{activeCase.benefit}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
