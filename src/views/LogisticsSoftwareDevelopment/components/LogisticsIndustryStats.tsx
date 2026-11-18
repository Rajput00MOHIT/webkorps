'use client';

import React, { useRef, useState, useEffect } from 'react';
import { LOGISTICS_INDUSTRY_STATS, LogisticsStatItem } from '../logisticsSoftwareData';
import './LogisticsIndustryStats.css';

export interface LogisticsIndustryStatsProps {
  id?: string;
  stats?: LogisticsStatItem[];
}

export const LogisticsIndustryStats: React.FC<LogisticsIndustryStatsProps> = ({
  id = 'logistics-industry-stats',
  stats = LOGISTICS_INDUSTRY_STATS,
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
        {/* Editorial Section Header */}
        <div className="wk-logistics-stats__header">
          <span className="wk-logistics-stats__badge">Market Intelligence</span>
          <h2 className="wk-logistics-stats__title">
            Logistics Industry <span className="wk-logistics-stats__title-accent">at a Glance</span>
          </h2>
          <p className="wk-logistics-stats__subtitle">
            Verified industry research highlights the critical operational need for digital supply chain modernization.
          </p>
        </div>

        {/* Enterprise Data Dashboard Strip */}
        <div className="wk-logistics-stats__dashboard">
          <div className="wk-logistics-stats__strip">
            {stats.map((item, index) => (
              <div key={item.id} className="wk-logistics-stats__cell" data-stat-index={index}>
                <div className="wk-logistics-stats__cell-indicator" aria-hidden="true">
                  <span className="wk-logistics-stats__indicator-bar" />
                  <span className="wk-logistics-stats__region-pill">{item.region}</span>
                </div>

                <div className="wk-logistics-stats__metric-row">
                  <span className="wk-logistics-stats__metric">{item.metric}</span>
                </div>

                <h3 className="wk-logistics-stats__item-title">{item.title}</h3>
                <p className="wk-logistics-stats__item-desc">{item.description}</p>

                <div className="wk-logistics-stats__source">
                  <span className="wk-logistics-stats__source-bullet" aria-hidden="true" />
                  <span className="wk-logistics-stats__source-text">
                    {item.source} · {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
