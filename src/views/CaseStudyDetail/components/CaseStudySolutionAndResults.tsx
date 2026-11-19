'use client';

import React, { useState } from 'react';
import { CaseStudyData, CaseStudySolutionFeature } from '../../../data/caseStudies/types';
import { Button } from '../../../components/Button/Button';
import './CaseStudyComponents.css';

interface CaseStudySolutionsProps {
  features: CaseStudySolutionFeature[];
}

export const CaseStudySolutions: React.FC<CaseStudySolutionsProps> = ({ features }) => {
  if (!features || features.length === 0) return null;

  return (
    <section id="solution" className="wk-cs-section wk-cs-solutions" aria-labelledby="solutions-heading">
      <div className="wk-cs-section__header">
        <span className="wk-cs-section-eyebrow">THE DELIVERED SOLUTION</span>
        <h2 id="solutions-heading" className="wk-cs-section-title">
          What Webkorps Built: Real-Time Event-Driven Architecture
        </h2>
        <p className="wk-cs-section-subtitle">
          Modular, synchronized software services transforming physical hub operations into a unified digital pipeline.
        </p>
      </div>

      <div className="wk-cs-solutions__list">
        {features.map((feat, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <article
              key={feat.number}
              className={`wk-cs-solution-row ${isReversed ? 'wk-cs-solution-row--reversed' : ''}`}
            >
              {/* Text Column */}
              <div className="wk-cs-solution-row__text-col">
                <div className="wk-cs-solution-row__badge-row">
                  <span className="wk-cs-solution-row__num">FEATURE {feat.number}</span>
                  <span className="wk-cs-solution-row__badge">{feat.badge}</span>
                </div>

                <h3 className="wk-cs-solution-row__title">{feat.title}</h3>

                <p className="wk-cs-body-text">{feat.description}</p>

                <div className="wk-cs-solution-row__impact-box">
                  <span className="wk-cs-solution-row__impact-label">Operational Workflow Improvement:</span>
                  <p className="wk-cs-solution-row__impact-text">{feat.workflowImprovement}</p>
                </div>

                <div className="wk-cs-solution-row__users">
                  <span className="wk-cs-solution-row__users-label">Primary Users: </span>
                  <span className="wk-cs-solution-row__users-val">{feat.targetUsers}</span>
                </div>

                {/* Technical Annotation Pills */}
                <div className="wk-cs-solution-row__annotations">
                  {feat.annotations.map((ann, aIdx) => (
                    <span key={aIdx} className="wk-cs-solution-row__pill">
                      ✓ {ann}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Presentation Column */}
              <div className="wk-cs-solution-row__visual-col">
                <div className="wk-cs-solution-preview">
                  <div className="wk-cs-solution-preview__header">
                    <div className="wk-cs-solution-preview__dots" aria-hidden="true">
                      <span className="dot dot--red" />
                      <span className="dot dot--yellow" />
                      <span className="dot dot--green" />
                    </div>
                    <span className="wk-cs-solution-preview__tag">{feat.visualLabel}</span>
                  </div>

                  <div className="wk-cs-solution-preview__body">
                    {/* Bespoke Technical Diagram / UI Representation */}
                    {feat.visualType === 'dashboard' && (
                      <div className="wk-cs-mock-ui wk-cs-mock-ui--dashboard">
                        <div className="wk-cs-mock-ui__top-stats">
                          <div className="mock-stat">
                            <span className="mock-label">Active Bay Slots</span>
                            <span className="mock-val">24 / 28 Occupied</span>
                          </div>
                          <div className="mock-stat">
                            <span className="mock-label">Avg Turnaround</span>
                            <span className="mock-val mock-val--green">45 mins</span>
                          </div>
                          <div className="mock-stat">
                            <span className="mock-label">Inbound Queue</span>
                            <span className="mock-val">6 Trucks (ETA &lt;15m)</span>
                          </div>
                        </div>
                        <div className="mock-table">
                          <div className="mock-table__row mock-table__row--head">
                            <span>Bay #</span>
                            <span>Truck #</span>
                            <span>Route</span>
                            <span>Seal Match</span>
                            <span>Status</span>
                          </div>
                          <div className="mock-table__row">
                            <span>Bay 04</span>
                            <span className="font-mono">DL-01-AX-4820</span>
                            <span>DEL &rarr; BOM</span>
                            <span className="status-tag status-tag--ok">VERIFIED</span>
                            <span className="status-tag status-tag--active">Unloading (78%)</span>
                          </div>
                          <div className="mock-table__row">
                            <span>Bay 05</span>
                            <span className="font-mono">MH-04-CZ-9102</span>
                            <span>MAA &rarr; BLR</span>
                            <span className="status-tag status-tag--ok">VERIFIED</span>
                            <span className="status-tag status-tag--done">Dispatched</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {feat.visualType === 'pipeline' && (
                      <div className="wk-cs-mock-ui wk-cs-mock-ui--pipeline">
                        <div className="telematics-map">
                          <div className="telematics-radar" />
                          <div className="telematics-node telematics-node--1" title="Delhi Gateway" />
                          <div className="telematics-line" />
                          <div className="telematics-node telematics-node--2" title="Jaipur Hub" />
                          <div className="telematics-line telematics-line--active" />
                          <div className="telematics-node telematics-node--truck" title="Truck Transit">
                            🚚 <span>Live: 72 km/h</span>
                          </div>
                          <div className="telematics-node telematics-node--3" title="Ahmedabad Terminal" />
                        </div>
                        <div className="telematics-feed">
                          <span className="ping-pill">LIVE KAFKA PING: Sub-Second (42ms)</span>
                          <span className="ping-pill ping-pill--blue">Temp: -18.4°C (Reefer OK)</span>
                          <span className="ping-pill ping-pill--green">Geofence: On Schedule</span>
                        </div>
                      </div>
                    )}

                    {feat.visualType === 'mobile' && (
                      <div className="wk-cs-mock-ui wk-cs-mock-ui--mobile">
                        <div className="mobile-frame">
                          <div className="mobile-header">
                            <span>ePOD Consignment Check</span>
                            <span className="battery">100%</span>
                          </div>
                          <div className="mobile-card">
                            <span className="mobile-badge">CONSIGNMENT #SFX-98402</span>
                            <h4>Safe-Express Express Cargo</h4>
                            <p>Destination: Bangalore Mega Gateway</p>
                            <div className="mobile-sig-box">
                              <span className="sig-label">Digital Signee Trace:</span>
                              <div className="sig-line">Verified Electronic Trace ✓</div>
                            </div>
                            <div className="mobile-timestamp">GPS Lat: 12.9716, 77.5946 | Time: 14:38 IST</div>
                            <button className="mobile-btn">Instant ERP Settlement Sync</button>
                          </div>
                        </div>
                      </div>
                    )}

                    {feat.visualType === 'portal' && (
                      <div className="wk-cs-mock-ui wk-cs-mock-ui--portal">
                        <div className="dispatch-optimizer">
                          <div className="optimizer-box">
                            <span className="opt-title">3D Load Volume Utilization</span>
                            <div className="opt-bar">
                              <div className="opt-bar__fill" style={{ width: '97.4%' }}>
                                97.4% Cube Density
                              </div>
                            </div>
                          </div>
                          <div className="optimizer-box">
                            <span className="opt-title">Regional Backhaul Match</span>
                            <span className="opt-tag">Return Deadhead: Reduced by 28%</span>
                          </div>
                          <div className="optimizer-matrix">
                            <div className="matrix-row">
                              <span>Lane: Mumbai &rarr; Delhi Linehaul</span>
                              <span className="matrix-val">Tender Rate: Tier 1 Locked</span>
                            </div>
                            <div className="matrix-row">
                              <span>Multi-Modal Routing</span>
                              <span className="matrix-val">Express Rail Link Activated</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export const CaseStudyTechDeepDive: React.FC<{
  techExecution?: CaseStudyData['technicalExecution'];
}> = ({ techExecution }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  if (!techExecution) return null;

  return (
    <section id="architecture" className="wk-cs-section wk-cs-deep-dive" aria-labelledby="deep-dive-heading">
      <div className="wk-cs-deep-dive__card">
        <div className="wk-cs-deep-dive__header">
          <div>
            <span className="wk-cs-section-eyebrow">FOR CTOS & ENGINEERING STAKEHOLDERS</span>
            <h2 id="deep-dive-heading" className="wk-cs-section-title">
              Technical Execution & Cloud Architecture
            </h2>
            <p className="wk-cs-section-subtitle">
              Detailed technical blueprint: event-driven data streaming, high availability, zero-trust security, and horizontal scalability.
            </p>
          </div>
          <button
            type="button"
            className="wk-cs-deep-dive__toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="technical-deep-dive-content"
          >
            {isOpen ? 'Collapse Technical Details ↑' : 'Expand Technical Details ↓'}
          </button>
        </div>

        {isOpen && (
          <div id="technical-deep-dive-content" className="wk-cs-deep-dive__body">
            <p className="wk-cs-body-text wk-cs-deep-dive__overview">
              {techExecution.overview}
            </p>

            <div className="wk-cs-deep-dive__grid">
              {techExecution.architecturePoints.map((pt, idx) => (
                <div key={idx} className="wk-cs-deep-dive__point">
                  <h3 className="wk-cs-deep-dive__point-title">{pt.title}</h3>
                  <p className="wk-cs-body-text">{pt.description}</p>
                </div>
              ))}
            </div>

            <div className="wk-cs-deep-dive__sub-row">
              <div className="wk-cs-deep-dive__sub-col">
                <h4 className="wk-cs-deep-dive__sub-title">Security & Governance</h4>
                <ul className="wk-cs-deep-dive__sub-list">
                  {techExecution.securityPoints.map((sec, idx) => (
                    <li key={idx}>🔒 {sec}</li>
                  ))}
                </ul>
              </div>

              <div className="wk-cs-deep-dive__sub-col">
                <h4 className="wk-cs-deep-dive__sub-title">SLA & Performance Benchmarks</h4>
                <ul className="wk-cs-deep-dive__sub-list">
                  {techExecution.performanceHighlights.map((perf, idx) => (
                    <li key={idx}>⚡ {perf}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export const CaseStudyResults: React.FC<{ results: CaseStudyData['results'] }> = ({
  results,
}) => {
  if (!results) return null;

  return (
    <section id="results" className="wk-cs-section wk-cs-results" aria-labelledby="results-heading">
      <div className="wk-cs-section__header">
        <span className="wk-cs-section-eyebrow">VERIFIED BUSINESS IMPACT</span>
        <h2 id="results-heading" className="wk-cs-section-title">
          {results.headline}
        </h2>
        <p className="wk-cs-section-subtitle">{results.description}</p>
      </div>

      {/* Metrics Cards Grid */}
      <div className="wk-cs-results__grid">
        {results.metrics.map((m, idx) => (
          <article key={idx} className="wk-cs-result-card">
            <div className="wk-cs-result-card__val-row">
              <span className="wk-cs-result-card__val">{m.value}</span>
              {m.unit && <span className="wk-cs-result-card__unit">{m.unit}</span>}
            </div>
            <h3 className="wk-cs-result-card__label">{m.label}</h3>

            <div className="wk-cs-result-card__meta">
              {m.baseline && (
                <div className="wk-cs-result-card__meta-item">
                  <span className="meta-label">Baseline:</span>
                  <span className="meta-val">{m.baseline}</span>
                </div>
              )}
              {m.timeframe && (
                <div className="wk-cs-result-card__meta-item">
                  <span className="meta-label">Timeframe:</span>
                  <span className="meta-val">{m.timeframe}</span>
                </div>
              )}
              {m.source && (
                <div className="wk-cs-result-card__meta-item">
                  <span className="meta-label">Evidence Source:</span>
                  <span className="meta-val meta-val--source">{m.source}</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Qualitative Business Transformations */}
      {results.qualitativeOutcomes && results.qualitativeOutcomes.length > 0 && (
        <div className="wk-cs-results__qualitative">
          <h3 className="wk-cs-results__qual-title">Qualitative Operational Transformations</h3>
          <ul className="wk-cs-results__qual-list">
            {results.qualitativeOutcomes.map((out, idx) => (
              <li key={idx} className="wk-cs-results__qual-item">
                <span className="qual-check" aria-hidden="true">✓</span>
                <span>{out}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contextual Mid-Page CTA */}
      <div className="wk-cs-results__cta-banner">
        <div className="wk-cs-results__cta-content">
          <h3 className="wk-cs-results__cta-title">Want to Achieve Similar Results in Your Operations?</h3>
          <p className="wk-cs-results__cta-desc">
            Let our technical architects analyze your existing bottlenecks and design an event-driven modernization roadmap.
          </p>
        </div>
        <Button href="#case-study-inquiry" variant="primary" size="lg">
          Book a 30-Minute Scoping Call
        </Button>
      </div>
    </section>
  );
};

export const CaseStudyTestimonial: React.FC<{
  testimonial?: CaseStudyData['testimonial'];
}> = ({ testimonial }) => {
  if (!testimonial || !testimonial.quote) return null;

  return (
    <section className="wk-cs-testimonial" aria-label="Client Testimonial">
      <div className="wk-cs-testimonial__container">
        <div className="wk-cs-testimonial__quote-mark" aria-hidden="true">“</div>
        <blockquote className="wk-cs-testimonial__quote">
          {testimonial.quote}
        </blockquote>
        <div className="wk-cs-testimonial__author-box">
          <div className="wk-cs-testimonial__author-info">
            <cite className="wk-cs-testimonial__author-name">{testimonial.author}</cite>
            <span className="wk-cs-testimonial__author-role">
              {testimonial.designation}, {testimonial.company}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
