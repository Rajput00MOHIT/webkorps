'use client';

import React, { useState } from 'react';
import './DomainSpecificSolutions.css';

export interface DomainSolutionItem {
  id: string;
  name: string;
  badge?: string;
  solutionTitle: string;
  challenge: string;
  engineering: string;
  bulletPoints: string[];
}

export interface DomainSpecificSolutionsProps {
  id?: string;
  title: React.ReactNode;
  subtitle: string;
  engineeringLabel?: string;
  domains: DomainSolutionItem[];
}

export const DomainSpecificSolutions: React.FC<DomainSpecificSolutionsProps> = ({
  id = 'domain-specific-solutions',
  title,
  subtitle,
  engineeringLabel = 'Webkorps Engineering',
  domains,
}) => {
  const [selectedId, setSelectedId] = useState<string>(
    domains.length > 0 ? domains[0].id : ''
  );

  const activeDomain =
    domains.find((d) => d.id === selectedId) || domains[0];

  if (!domains || domains.length === 0 || !activeDomain) {
    return null;
  }

  return (
    <section id={id} className="wk-domain-sol" aria-labelledby={`${id}-heading`}>
      <div className="wk-domain-sol__container">
        {/* Section Header */}
        <div className="wk-domain-sol__header">
          <h2 id={`${id}-heading`} className="wk-domain-sol__title">
            {title}
          </h2>
          <p className="wk-domain-sol__subtitle">{subtitle}</p>
        </div>

        {/* Main Two-Column Composition: ~55% Left, ~45% Right */}
        <div className="wk-domain-sol__layout">
          {/* Left Column: Interactive Industry Selector */}
          <div
            className="wk-domain-sol__selector"
            role="tablist"
            aria-label="Industry Categories"
          >
            {domains.map((domain) => {
              const isSelected = domain.id === activeDomain.id;
              return (
                <button
                  key={domain.id}
                  type="button"
                  role="tab"
                  id={`tab-${domain.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${domain.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  className={`wk-domain-sol__item ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setSelectedId(domain.id)}
                >
                  <span className="wk-domain-sol__item-text">{domain.name}</span>
                  {isSelected ? (
                    <span className="wk-domain-sol__arrow-active" aria-hidden="true">
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
                    <span className="wk-domain-sol__arrow-box" aria-hidden="true">
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
            className="wk-domain-sol__panel"
          >
            {/* 1. Compliance Badge (Only when provided) */}



            {/* 2. Main Solution Heading */}
            <h3 className="wk-domain-sol__panel-title">{activeDomain.solutionTitle}</h3>

            {/* 3. The Operational Challenge */}
            <div className="wk-domain-sol__section">
              <h4 className="wk-domain-sol__section-title">The Operational Challenge</h4>
              <p className="wk-domain-sol__section-desc">{activeDomain.challenge}</p>
            </div>

            {/* 4. Engineering Section */}
            <div className="wk-domain-sol__section">
              <h4 className="wk-domain-sol__section-title">{engineeringLabel}</h4>
              <p className="wk-domain-sol__section-desc">{activeDomain.engineering}</p>
            </div>

            {/* 5. Key Points with Blue Outlined Check-Circle Icons */}
            {activeDomain.bulletPoints && activeDomain.bulletPoints.length > 0 && (
              <div className="wk-domain-sol__proof-list">
                {activeDomain.bulletPoints.map((point, index) => (
                  <div key={index} className="wk-domain-sol__proof-item">
                    <svg
                      className="wk-domain-sol__proof-icon"
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
                    <span className="wk-domain-sol__proof-text">{point}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

