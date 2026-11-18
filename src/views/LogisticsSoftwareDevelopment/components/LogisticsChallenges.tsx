'use client';

import React, { useState } from 'react';
import { LOGISTICS_CHALLENGES } from '../logisticsSoftwareData';
import './LogisticsChallenges.css';

export const LogisticsChallenges: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="logistics-challenges" className="wk-logistics-ch" aria-label="The Real Challenges in Logistics">
      <div className="wk-logistics-ch__container">
        {/* Editorial Two-Column Split Layout */}
        <div className="wk-logistics-ch__layout">
          {/* Left Column: Contextual Brief */}
          <div className="wk-logistics-ch__left">
            <span className="wk-logistics-ch__badge">Operational Bottlenecks</span>
            <h2 className="wk-logistics-ch__title">
              Why Logistics Operations Become{' '}
              <span className="wk-logistics-ch__title-accent">Difficult to Manage</span>
            </h2>
            <p className="wk-logistics-ch__subtitle">
              As freight volumes grow and carrier networks expand, legacy spreadsheets and disconnected software tools break down—creating blindspots, delays, and runaway operational expenses.
            </p>

            <div className="wk-logistics-ch__highlight-box">
              <span className="wk-logistics-ch__highlight-title">The Core Bottleneck</span>
              <p className="wk-logistics-ch__highlight-desc">
                When logistics data is trapped in silos between dispatch, warehouse, and accounting teams, proactive intervention becomes impossible.
              </p>
            </div>
          </div>

          {/* Right Column: Structured Numbered Editorial List */}
          <div className="wk-logistics-ch__right">
            <div className="wk-logistics-ch__list">
              {LOGISTICS_CHALLENGES.map((item) => {
                const isHovered = hoveredId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`wk-logistics-ch__row ${isHovered ? 'is-hovered' : ''}`}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="wk-logistics-ch__row-num">{item.number}</div>
                    <div className="wk-logistics-ch__row-body">
                      <h3 className="wk-logistics-ch__row-title">{item.title}</h3>
                      <p className="wk-logistics-ch__row-desc">{item.problem}</p>
                      <div className="wk-logistics-ch__impact-line">
                        <span className="wk-logistics-ch__impact-label">Impact:</span>
                        <span className="wk-logistics-ch__impact-text">{item.impact}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
