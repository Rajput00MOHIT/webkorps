'use client';

import React from 'react';
import { CaseStudyData } from '../../../data/caseStudies/types';
import './CaseStudyComponents.css';

export const CaseStudyContext: React.FC<{ data: CaseStudyData }> = ({ data }) => {
  const { clientContext, client } = data;
  if (!clientContext) return null;

  return (
    <section id="overview" className="wk-cs-section wk-cs-context" aria-labelledby="context-heading">
      <div className="wk-cs-section__header">
        <span className="wk-cs-section-eyebrow">CLIENT & BUSINESS CONTEXT</span>
        <h2 id="context-heading" className="wk-cs-section-title">
          Scale and Operational Velocity of {client}
        </h2>
      </div>

      <div className="wk-cs-context__content">
        <div className="wk-cs-context__paragraphs">
          {clientContext.paragraphs.map((para, idx) => (
            <p key={idx} className="wk-cs-body-text">
              {para}
            </p>
          ))}
        </div>

        {clientContext.operatingStats && clientContext.operatingStats.length > 0 && (
          <div className="wk-cs-context__stats-strip">
            {clientContext.operatingStats.map((stat, idx) => (
              <div key={idx} className="wk-cs-context__stat-box">
                <span className="wk-cs-context__stat-val">{stat.value}</span>
                <span className="wk-cs-context__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export const CaseStudyChallenges: React.FC<{ data: CaseStudyData }> = ({ data }) => {
  const { challenges } = data;
  if (!challenges || challenges.length === 0) return null;

  return (
    <section id="challenge" className="wk-cs-section wk-cs-challenges" aria-labelledby="challenges-heading">
      <div className="wk-cs-section__header">
        <span className="wk-cs-section-eyebrow">THE OPERATIONAL BOTTLENECKS</span>
        <h2 id="challenges-heading" className="wk-cs-section-title">
          Why Legacy Hub Systems Broke Down at Scale
        </h2>
        <p className="wk-cs-section-subtitle">
          Critical operational obstacles that degraded cross-dock turnaround and created consignment visibility blindspots across transit corridors.
        </p>
      </div>

      <div className="wk-cs-challenges__list">
        {challenges.map((ch) => (
          <article key={ch.number} className="wk-cs-challenge-row">
            <div className="wk-cs-challenge-row__num-col">
              <span className="wk-cs-challenge-row__num">{ch.number}</span>
            </div>
            <div className="wk-cs-challenge-row__content">
              <h3 className="wk-cs-challenge-row__heading">{ch.heading}</h3>
              <p className="wk-cs-body-text">{ch.description}</p>
              {ch.consequences && ch.consequences.length > 0 && (
                <div className="wk-cs-challenge-row__consequences">
                  <span className="wk-cs-challenge-row__cons-label">Business Consequences:</span>
                  <ul className="wk-cs-challenge-row__cons-list">
                    {ch.consequences.map((cons, idx) => (
                      <li key={idx} className="wk-cs-challenge-row__cons-item">
                        {cons}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export const CaseStudyGoals: React.FC<{ data: CaseStudyData }> = ({ data }) => {
  const { goals } = data;
  if (!goals || goals.length === 0) return null;

  return (
    <section className="wk-cs-section wk-cs-goals" aria-labelledby="goals-heading">
      <div className="wk-cs-section__header">
        <span className="wk-cs-section-eyebrow">SUCCESS CRITERIA</span>
        <h2 id="goals-heading" className="wk-cs-section-title">
          Project Goals and Verifiable Objectives
        </h2>
        <p className="wk-cs-section-subtitle">
          Directly mapping business requirements to quantifiable engineering metrics.
        </p>
      </div>

      <div className="wk-cs-goals__table-wrap">
        <table className="wk-cs-goals__table">
          <thead>
            <tr>
              <th scope="col" className="wk-cs-goals__th">Project Goal</th>
              <th scope="col" className="wk-cs-goals__th">Measurement Criterion</th>
              <th scope="col" className="wk-cs-goals__th">Verified Engineering Result</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((g, idx) => (
              <tr key={idx} className="wk-cs-goals__tr">
                <td className="wk-cs-goals__td wk-cs-goals__td--goal">
                  <strong>{g.goal}</strong>
                </td>
                <td className="wk-cs-goals__td wk-cs-goals__td--measure">
                  {g.measurement}
                </td>
                <td className="wk-cs-goals__td wk-cs-goals__td--result">
                  <span className="wk-cs-goals__badge">✓ {g.result}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export const CaseStudyDecisions: React.FC<{ data: CaseStudyData }> = ({ data }) => {
  const { decisions } = data;
  if (!decisions || decisions.length === 0) return null;

  return (
    <section id="approach" className="wk-cs-section wk-cs-decisions" aria-labelledby="decisions-heading">
      <div className="wk-cs-section__header">
        <span className="wk-cs-section-eyebrow">OUR APPROACH & ARCHITECTURAL DECISIONS</span>
        <h2 id="decisions-heading" className="wk-cs-section-title">
          How Webkorps Engineered the Solution
        </h2>
        <p className="wk-cs-section-subtitle">
          Evidence-driven engineering choices evaluating trade-offs, managing technical risks, and ensuring zero downtime.
        </p>
      </div>

      <div className="wk-cs-decisions__grid">
        {decisions.map((dec) => (
          <article key={dec.number} className="wk-cs-decision-card">
            <div className="wk-cs-decision-card__header">
              <span className="wk-cs-decision-card__step">DECISION {dec.number}</span>
              <h3 className="wk-cs-decision-card__title">{dec.decision}</h3>
            </div>

            <div className="wk-cs-decision-card__body">
              <div className="wk-cs-decision-card__row">
                <span className="wk-cs-decision-card__label">Alternatives Evaluated:</span>
                <p className="wk-cs-decision-card__text">{dec.alternativesConsidered}</p>
              </div>

              <div className="wk-cs-decision-card__row">
                <span className="wk-cs-decision-card__label">Why Webkorps Selected This Approach:</span>
                <p className="wk-cs-decision-card__text">{dec.whyChosen}</p>
              </div>

              <div className="wk-cs-decision-card__row wk-cs-decision-card__row--impact">
                <span className="wk-cs-decision-card__label">Observed Production Impact:</span>
                <p className="wk-cs-decision-card__text wk-cs-decision-card__text--highlight">
                  ⚡ {dec.observedImpact}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
