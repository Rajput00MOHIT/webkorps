'use client';

import React, { useRef, useState, useEffect } from 'react';
import type { StaticImageData } from 'next/image';
import { getImgSrc } from '../../../utils/image';
import indiaGdpImg from '../../../assets/industries/logistics/indresties glance section/logistic cost gdp.png';
import visibilityImg from '../../../assets/industries/logistics/indresties glance section/supply chain.png';
import emptyMilesImg from '../../../assets/industries/logistics/indresties glance section/Commercial.png';
import aiCostImg from '../../../assets/industries/logistics/indresties glance section/opt cost.png';
import './LogisticsIndustryStats.css';

export interface StatMetricItem {
  badge: string;
  value: string;
  label: string;
  description: string;
  source: string;
  image?: StaticImageData | string;
}

export interface LogisticsIndustryStatsProps {
  id?: string;
  title?: React.ReactNode;
  subtitle?: string;
  featured?: StatMetricItem;
  items?: StatMetricItem[];
}

export const LogisticsIndustryStats: React.FC<LogisticsIndustryStatsProps> = ({
  id = 'logistics-industry-stats',
  title = (
    <>
      Logistics Industry <span className="wk-logistics-stats__title-accent">at a Glance</span>
    </>
  ),
  subtitle = 'Verified industry research highlights the critical operational need for digital supply chain modernization.',
  featured = {
    badge: 'INDIA',
    value: '13–14%',
    label: 'Logistics Cost as % of GDP',
    description:
      "Logistics historically accounts for 13–14% of India's GDP compared to ~8% in mature global markets, prompting India's National Logistics Policy to target a reduction below 10%.",
    source: 'NITI Aayog & DPIIT Framework Report · 2024',
    image: indiaGdpImg,
  },
  items = [
    {
      badge: 'GLOBAL',
      value: '73%',
      label: 'Supply Chain Visibility Blindspots',
      description:
        '73% of supply chain leaders report a lack of multi-tier end-to-end visibility between freight transit, multi-modal carriers, and regional distribution nodes.',
      source: 'Deloitte Global Supply Chain Study · 2025',
      image: visibilityImg,
    },
    {
      badge: 'GLOBAL',
      value: '20–25%',
      label: 'Commercial Fleet Empty Deadhead Miles',
      description:
        'Up to one-quarter of commercial transit distance runs with empty load beds due to fragmented carrier networks, static scheduling, and unoptimized return loads.',
      source: 'NTT DATA 2025 Third-Party Logistics Study · 2025',
      image: emptyMilesImg,
    },
    {
      badge: 'GLOBAL',
      value: '15–20%',
      label: 'Operational Cost Reduction with AI',
      description:
        'Logistics enterprises integrating dynamic route optimization, predictive maintenance, and automated demand slotting achieve 15–20% operational expense savings.',
      source: 'OECD AI in Logistics & McKinsey Analysis · 2024–2025',
      image: aiCostImg,
    },
  ],
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
      aria-label="Industry at a Glance"
    >
      <div className="wk-logistics-stats__container">
        {/* Section Header */}
        <div className="wk-logistics-stats__header">
          <h2 className="wk-logistics-stats__title">{title}</h2>
          <p className="wk-logistics-stats__subtitle">{subtitle}</p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="wk-logistics-stats__grid">
          {/* Left Column — Featured Statistic */}
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
                <span>{featured.badge}</span>
              </div>

              {/* Metric & Title */}
              <div className="wk-logistics-stats__india-metric">{featured.value}</div>
              <h3 className="wk-logistics-stats__india-title">{featured.label}</h3>
              <p className="wk-logistics-stats__india-desc">{featured.description}</p>
            </div>

            {/* Illustration Graphic at Bottom */}
            <div className="wk-logistics-stats__india-visual">
              <img
                src={getImgSrc(featured.image || indiaGdpImg)}
                alt={featured.label}
                className="wk-logistics-stats__india-img"
                loading="lazy"
              />
            </div>

            {/* Source Footer */}
            <div className="wk-logistics-stats__source wk-logistics-stats__source--india">
              <span className="wk-logistics-stats__source-dot" aria-hidden="true" />
              <span className="wk-logistics-stats__source-text">{featured.source}</span>
            </div>
          </div>

          {/* Right Column — Secondary Statistics */}
          <div className="wk-logistics-stats__global-column">
            {items.map((item, idx) => (
              <div key={idx} className="wk-logistics-stats__global-panel">
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
                      <span>{item.badge}</span>
                    </div>
                    <div className="wk-logistics-stats__global-metric">{item.value}</div>
                  </div>

                  {/* Info sub-column */}
                  <div className="wk-logistics-stats__global-info">
                    <h3 className="wk-logistics-stats__global-title">{item.label}</h3>
                    <p className="wk-logistics-stats__global-desc">{item.description}</p>
                  </div>

                  {/* Graphic sub-column */}
                  <div className="wk-logistics-stats__global-visual">
                    <img
                      src={getImgSrc(item.image || (idx === 0 ? visibilityImg : idx === 1 ? emptyMilesImg : aiCostImg))}
                      alt={item.label}
                      className="wk-logistics-stats__global-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Source footer */}
                <div className="wk-logistics-stats__source">
                  <span className="wk-logistics-stats__source-dot" aria-hidden="true" />
                  <span className="wk-logistics-stats__source-text">{item.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
