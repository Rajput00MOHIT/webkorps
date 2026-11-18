'use client';

import React, { useRef, useState, useEffect } from 'react';
import { getImgSrc } from '../../../utils/image';
import indiaGdpImg from '../../../assets/industries/logistics/indresties glance section/logistic cost gdp.png';
import visibilityImg from '../../../assets/industries/logistics/indresties glance section/supply chain.png';
import emptyMilesImg from '../../../assets/industries/logistics/indresties glance section/Commercial.png';
import aiCostImg from '../../../assets/industries/logistics/indresties glance section/opt cost.png';
import './LogisticsIndustryStats.css';

export interface LogisticsIndustryStatsProps {
  id?: string;
}

export const LogisticsIndustryStats: React.FC<LogisticsIndustryStatsProps> = ({
  id = 'logistics-industry-stats',
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`wk-logistics-stats ${isVisible ? 'is-visible' : ''}`}
      aria-label="Logistics Industry at a Glance"
    >
      <div className="wk-logistics-stats__container">
        {/* Section Header */}
        <div className="wk-logistics-stats__header">
          <span className="wk-logistics-stats__badge">MARKET INTELLIGENCE</span>
          <h2 className="wk-logistics-stats__title">
            Logistics Industry <span className="wk-logistics-stats__title-accent">at a Glance</span>
          </h2>
          <p className="wk-logistics-stats__subtitle">
            Verified industry research highlights the critical operational need for digital supply chain modernization.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="wk-logistics-stats__grid">
          {/* Left Column — Featured India Statistic */}
          <div className="wk-logistics-stats__india-card">
            <div className="wk-logistics-stats__india-content">
              {/* Location Badge */}
              <div className="wk-logistics-stats__location">
                <svg
                  className="wk-logistics-stats__pin-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1887C9"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>INDIA</span>
              </div>

              {/* Metric & Title */}
              <div className="wk-logistics-stats__india-metric">13–14%</div>
              <h3 className="wk-logistics-stats__india-title">Logistics Cost as % of GDP</h3>
              <p className="wk-logistics-stats__india-desc">
                Logistics historically accounts for 13–14% of India&apos;s GDP compared to ~8% in mature global markets, prompting India&apos;s National Logistics Policy to target a reduction below 10%.
              </p>
            </div>

            {/* Illustration Graphic at Bottom */}
            <div className="wk-logistics-stats__india-visual">
              <img
                src={getImgSrc(indiaGdpImg)}
                alt="Logistics Cost as percentage of GDP in India showing freight transit and infrastructure"
                className="wk-logistics-stats__india-img"
                loading="lazy"
              />
            </div>

            {/* Source Footer */}
            <div className="wk-logistics-stats__source wk-logistics-stats__source--india">
              <span className="wk-logistics-stats__source-dot" aria-hidden="true" />
              <span className="wk-logistics-stats__source-text">
                NITI Aayog &amp; DPIIT Framework Report · 2024
              </span>
            </div>
          </div>

          {/* Right Column — Three Global Statistics */}
          <div className="wk-logistics-stats__global-column">
            {/* Panel 1 */}
            <div className="wk-logistics-stats__global-panel">
              <div className="wk-logistics-stats__global-body">
                {/* Metric sub-column */}
                <div className="wk-logistics-stats__global-metric-wrap">
                  <div className="wk-logistics-stats__location">
                    <svg
                      className="wk-logistics-stats__pin-icon"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1887C9"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>GLOBAL</span>
                  </div>
                  <div className="wk-logistics-stats__global-metric">73%</div>
                </div>

                {/* Info sub-column */}
                <div className="wk-logistics-stats__global-info">
                  <h3 className="wk-logistics-stats__global-title">
                    Supply Chain Visibility Blindspots
                  </h3>
                  <p className="wk-logistics-stats__global-desc">
                    73% of supply chain leaders report a lack of multi-tier end-to-end visibility between freight transit, multi-modal carriers, and regional distribution nodes.
                  </p>
                </div>

                {/* Graphic sub-column */}
                <div className="wk-logistics-stats__global-visual">
                  <img
                    src={getImgSrc(visibilityImg)}
                    alt="Supply chain visibility route curve chart"
                    className="wk-logistics-stats__global-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Source footer */}
              <div className="wk-logistics-stats__source">
                <span className="wk-logistics-stats__source-dot" aria-hidden="true" />
                <span className="wk-logistics-stats__source-text">
                  Deloitte Global Supply Chain Study · 2025
                </span>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="wk-logistics-stats__global-panel">
              <div className="wk-logistics-stats__global-body">
                {/* Metric sub-column */}
                <div className="wk-logistics-stats__global-metric-wrap">
                  <div className="wk-logistics-stats__location">
                    <svg
                      className="wk-logistics-stats__pin-icon"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1887C9"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>GLOBAL</span>
                  </div>
                  <div className="wk-logistics-stats__global-metric">20–25%</div>
                </div>

                {/* Info sub-column */}
                <div className="wk-logistics-stats__global-info">
                  <h3 className="wk-logistics-stats__global-title">
                    Commercial Fleet Empty Deadhead Miles
                  </h3>
                  <p className="wk-logistics-stats__global-desc">
                    Up to one-quarter of commercial transit distance runs with empty load beds due to fragmented carrier networks, static scheduling, and unoptimized return loads.
                  </p>
                </div>

                {/* Graphic sub-column */}
                <div className="wk-logistics-stats__global-visual">
                  <img
                    src={getImgSrc(emptyMilesImg)}
                    alt="Commercial fleet circular progress with truck"
                    className="wk-logistics-stats__global-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Source footer */}
              <div className="wk-logistics-stats__source">
                <span className="wk-logistics-stats__source-dot" aria-hidden="true" />
                <span className="wk-logistics-stats__source-text">
                  NTT DATA 2025 Third-Party Logistics Study · 2025
                </span>
              </div>
            </div>

            {/* Panel 3 */}
            <div className="wk-logistics-stats__global-panel">
              <div className="wk-logistics-stats__global-body">
                {/* Metric sub-column */}
                <div className="wk-logistics-stats__global-metric-wrap">
                  <div className="wk-logistics-stats__location">
                    <svg
                      className="wk-logistics-stats__pin-icon"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1887C9"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>GLOBAL</span>
                  </div>
                  <div className="wk-logistics-stats__global-metric">15–20%</div>
                </div>

                {/* Info sub-column */}
                <div className="wk-logistics-stats__global-info">
                  <h3 className="wk-logistics-stats__global-title">
                    Operational Cost Reduction with AI
                  </h3>
                  <p className="wk-logistics-stats__global-desc">
                    Logistics enterprises integrating dynamic route optimization, predictive maintenance, and automated demand slotting achieve 15–20% operational expense savings.
                  </p>
                </div>

                {/* Graphic sub-column */}
                <div className="wk-logistics-stats__global-visual">
                  <img
                    src={getImgSrc(aiCostImg)}
                    alt="Operational cost reduction upward bar chart"
                    className="wk-logistics-stats__global-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Source footer */}
              <div className="wk-logistics-stats__source">
                <span className="wk-logistics-stats__source-dot" aria-hidden="true" />
                <span className="wk-logistics-stats__source-text">
                  OECD AI in Logistics &amp; McKinsey Analysis · 2024–2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
