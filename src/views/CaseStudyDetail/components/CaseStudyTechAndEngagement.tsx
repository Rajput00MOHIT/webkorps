'use client';

import React, { useState } from 'react';
import { CaseStudyData, CaseStudyFAQItem } from '../../../data/caseStudies/types';
import { Button } from '../../../components/Button/Button';
import './CaseStudyComponents.css';

export const CaseStudyTechStack: React.FC<{ techStack: CaseStudyData['techStack'] }> = ({
  techStack,
}) => {
  if (!techStack || techStack.length === 0) return null;

  return (
    <section id="technology" className="wk-cs-section wk-cs-tech-stack" aria-labelledby="tech-stack-heading">
      <div className="wk-cs-section__header">
        <span className="wk-cs-section-eyebrow">TECHNOLOGY & ARCHITECTURE</span>
        <h2 id="tech-stack-heading" className="wk-cs-section-title">
          Production Technology Stack
        </h2>
        <p className="wk-cs-section-subtitle">
          Grouped by functional role across client interfaces, real-time event streaming, persistent storage, and cloud infrastructure.
        </p>
      </div>

      <div className="wk-cs-tech-stack__grid">
        {techStack.map((cat, idx) => (
          <div key={idx} className="wk-cs-tech-cat">
            <h3 className="wk-cs-tech-cat__title">{cat.role}</h3>
            <ul className="wk-cs-tech-cat__list">
              {cat.technologies.map((t, tIdx) => (
                <li key={tIdx} className="wk-cs-tech-item">
                  <div className="wk-cs-tech-item__top">
                    <span className="wk-cs-tech-item__name">{t.name}</span>
                  </div>
                  <span className="wk-cs-tech-item__purpose">{t.purpose}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export const CaseStudyChallengeToo: React.FC<{
  reusablePattern: CaseStudyData['reusablePattern'];
}> = ({ reusablePattern }) => {
  if (!reusablePattern) return null;

  return (
    <section className="wk-cs-section wk-cs-challenge-too" aria-labelledby="challenge-too-heading">
      <div className="wk-cs-challenge-too__card">
        <div className="wk-cs-challenge-too__split">
          {/* Left Column: Solution Pattern */}
          <div className="wk-cs-challenge-too__left">
            <span className="wk-cs-section-eyebrow">REUSABLE INDUSTRY PATTERN</span>
            <h2 id="challenge-too-heading" className="wk-cs-challenge-too__title">
              {reusablePattern.patternHeadline}
            </h2>
            <p className="wk-cs-body-text">{reusablePattern.patternDescription}</p>
            <div className="wk-cs-challenge-too__action">
              <Button href="#case-study-inquiry" variant="primary" size="md">
                Schedule an Architecture Review
              </Button>
            </div>
          </div>

          {/* Right Column: Adjacent Use Cases */}
          <div className="wk-cs-challenge-too__right">
            <h3 className="wk-cs-challenge-too__sub-title">Applicable Across High-Volume Industries:</h3>
            <div className="wk-cs-challenge-too__scenarios">
              {reusablePattern.adjacentIndustries.map((adj, idx) => (
                <div key={idx} className="wk-cs-scenario-card">
                  <h4 className="wk-cs-scenario-card__name">{adj.name}</h4>
                  <p className="wk-cs-scenario-card__desc">{adj.scenario}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CaseStudyEngagement: React.FC<{
  engagementDetails?: CaseStudyData['engagementDetails'];
}> = ({ engagementDetails }) => {
  if (!engagementDetails) return null;

  return (
    <section className="wk-cs-section wk-cs-engagement" aria-labelledby="engagement-heading">
      <div className="wk-cs-section__header">
        <span className="wk-cs-section-eyebrow">DELIVERY & GOVERNANCE</span>
        <h2 id="engagement-heading" className="wk-cs-section-title">
          Engagement Model & Agile Delivery
        </h2>
        <p className="wk-cs-section-subtitle">
          How Webkorps collaborated with internal stakeholders to guarantee high-velocity, risk-mitigated delivery.
        </p>
      </div>

      <div className="wk-cs-engagement__grid">
        <div className="wk-cs-eng-stat">
          <span className="wk-cs-eng-stat__label">Dedicated Squad</span>
          <span className="wk-cs-eng-stat__val">{engagementDetails.teamSize}</span>
        </div>
        <div className="wk-cs-eng-stat">
          <span className="wk-cs-eng-stat__label">Project Duration</span>
          <span className="wk-cs-eng-stat__val">{engagementDetails.duration}</span>
        </div>
        <div className="wk-cs-eng-stat">
          <span className="wk-cs-eng-stat__label">Engagement Structure</span>
          <span className="wk-cs-eng-stat__val">{engagementDetails.model}</span>
        </div>
        <div className="wk-cs-eng-stat">
          <span className="wk-cs-eng-stat__label">Sprint Cadence</span>
          <span className="wk-cs-eng-stat__val">{engagementDetails.cadence}</span>
        </div>
      </div>

      {engagementDetails.practices && (
        <div className="wk-cs-engagement__practices">
          <h3 className="wk-cs-eng-prac-title">Engineering & Quality Practices</h3>
          <ul className="wk-cs-eng-prac-list">
            {engagementDetails.practices.map((pr, idx) => (
              <li key={idx} className="wk-cs-eng-prac-item">
                <span className="prac-icon">✓</span>
                <span>{pr}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export const CaseStudyFAQ: React.FC<{ faqs?: CaseStudyFAQItem[] }> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(faqs && faqs.length > 0 ? faqs[0].id : null);
  if (!faqs || faqs.length === 0) return null;

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="wk-cs-section wk-cs-faq" aria-labelledby="faq-heading">
      <div className="wk-cs-section__header">
        <span className="wk-cs-section-eyebrow">COMMON QUESTIONS</span>
        <h2 id="faq-heading" className="wk-cs-section-title">
          Project-Specific Frequently Asked Questions
        </h2>
        <p className="wk-cs-section-subtitle">
          Direct, technical insights on integration challenges, scalability, and deployment timelines.
        </p>
      </div>

      <div className="wk-cs-faq__accordion">
        {faqs.map((f) => {
          const isOpen = openId === f.id;
          return (
            <div key={f.id} className={`wk-cs-faq__item ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="wk-cs-faq__trigger"
                onClick={() => toggle(f.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${f.id}`}
              >
                <span className="wk-cs-faq__question">{f.question}</span>
                <span className="wk-cs-faq__icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div
                id={`faq-answer-${f.id}`}
                className="wk-cs-faq__panel"
                hidden={!isOpen}
              >
                <p className="wk-cs-faq__answer">{f.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
