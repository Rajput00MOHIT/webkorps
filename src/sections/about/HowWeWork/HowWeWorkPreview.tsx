'use client';

import React from 'react';

export interface WizardState {
  currentStep: number;
  productType: string | null;
  coreFeature: string | null;
  designDirection: string | null;
  developmentLayer: string | null;
  qualityCheck: string | null;
  growthApproach: string | null;
  isComplete: boolean;
}

interface HowWeWorkPreviewProps {
  state: WizardState;
}

export const HowWeWorkPreview: React.FC<HowWeWorkPreviewProps> = ({ state }) => {
  const {
    currentStep,
    productType,
    coreFeature,
    designDirection,
    developmentLayer,
    qualityCheck,
    growthApproach,
    isComplete,
  } = state;

  // Title in the browser navigation bar
  const getBrowserUrl = () => {
    if (!productType) return 'webkorps.app';
    const slug = productType.toLowerCase().replace(/\s+/g, '-');
    return `webkorps.app/${slug}`;
  };

  return (
    <div
      className={`wk-how-preview wk-how-preview--theme-${designDirection?.toLowerCase() || 'modern'}`}
      aria-live="polite"
    >
      {/* Outer Browser Window Frame */}
      <div className="wk-how-preview__frame">
        {/* Browser Top Navigation Bar */}
        <div className="wk-how-preview__header">
          <div className="wk-how-preview__dots" aria-hidden="true">
            <span className="wk-how-preview__dot wk-how-preview__dot--red" />
            <span className="wk-how-preview__dot wk-how-preview__dot--yellow" />
            <span className="wk-how-preview__dot wk-how-preview__dot--green" />
          </div>

          <div className="wk-how-preview__url-pill">
            <span className="wk-how-preview__url-lock" aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <span className="wk-how-preview__url-text">{getBrowserUrl()}</span>
          </div>

          <div className="wk-how-preview__header-actions" aria-hidden="true">
            <span className="wk-how-preview__step-badge">
              {isComplete ? 'Ready to Build' : `Step ${currentStep}`}
            </span>
          </div>
        </div>

        {/* Dynamic Canvas Area */}
        <div className="wk-how-preview__canvas">
          {/* 1. Empty State (Step 1 without selection) */}
          {!productType && (
            <div className="wk-how-preview__empty">
              <div className="wk-how-preview__empty-icon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.75">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M9 3v18" />
                  <path d="M3 9h18" />
                </svg>
              </div>
              <p className="wk-how-preview__empty-text">
                Select what you want to build on the left to see your product base.
              </p>
            </div>
          )}

          {/* 2. Active Product Canvas */}
          {productType && (
            <div className="wk-how-preview__product-body">
              {/* Product Base Header */}
              <div className="wk-how-preview__mock-nav">
                <div className="wk-how-preview__mock-logo" />
                <div className="wk-how-preview__mock-nav-links">
                  <span className="wk-how-preview__mock-link" />
                  <span className="wk-how-preview__mock-link" />
                  <span className="wk-how-preview__mock-link" />
                </div>
                <div className="wk-how-preview__mock-btn" />
              </div>

              {/* Product Type Specific Base Layout */}
              <div className="wk-how-preview__product-view">
                {productType === 'Website' && (
                  <div className="wk-how-preview__website-layout">
                    <div className="wk-how-preview__hero-banner">
                      <div className="wk-how-preview__line wk-how-preview__line--title" />
                      <div className="wk-how-preview__line wk-how-preview__line--desc" />
                      <div className="wk-how-preview__pill-btn" />
                    </div>
                    <div className="wk-how-preview__grid-3">
                      <div className="wk-how-preview__card" />
                      <div className="wk-how-preview__card" />
                      <div className="wk-how-preview__card" />
                    </div>
                  </div>
                )}

                {productType === 'Mobile App' && (
                  <div className="wk-how-preview__mobile-layout">
                    <div className="wk-how-preview__phone-screen">
                      <div className="wk-how-preview__phone-notch" />
                      <div className="wk-how-preview__phone-hero" />
                      <div className="wk-how-preview__phone-grid">
                        <div className="wk-how-preview__phone-card" />
                        <div className="wk-how-preview__phone-card" />
                      </div>
                      <div className="wk-how-preview__phone-tabs" />
                    </div>
                  </div>
                )}

                {productType === 'AI Tool' && (
                  <div className="wk-how-preview__ai-layout">
                    <div className="wk-how-preview__chat-bubble wk-how-preview__chat-bubble--user">
                      <span>Analyze our system performance</span>
                    </div>
                    <div className="wk-how-preview__chat-bubble wk-how-preview__chat-bubble--bot">
                      <div className="wk-how-preview__sparkle-icon" />
                      <span>Optimizing data pipelines and cloud microservices.</span>
                    </div>
                    <div className="wk-how-preview__chat-input">
                      <span className="wk-how-preview__input-placeholder">Ask Webkorps AI...</span>
                      <span className="wk-how-preview__send-btn" />
                    </div>
                  </div>
                )}

                {productType === 'Enterprise Software' && (
                  <div className="wk-how-preview__saas-layout">
                    <div className="wk-how-preview__saas-sidebar">
                      <div className="wk-how-preview__sidebar-item is-active" />
                      <div className="wk-how-preview__sidebar-item" />
                      <div className="wk-how-preview__sidebar-item" />
                    </div>
                    <div className="wk-how-preview__saas-content">
                      <div className="wk-how-preview__saas-stats">
                        <div className="wk-how-preview__stat-box" />
                        <div className="wk-how-preview__stat-box" />
                      </div>
                      <div className="wk-how-preview__saas-table" />
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2 Feature Layer Overlay */}
              {coreFeature && (
                <div className={`wk-how-preview__feature-badge is-${coreFeature.toLowerCase()}`}>
                  <span className="wk-how-preview__badge-icon">✓</span>
                  <span className="wk-how-preview__badge-text">Feature: {coreFeature}</span>
                </div>
              )}

              {/* Step 4 Development Layer Overlay */}
              {developmentLayer && (
                <div className={`wk-how-preview__tech-layer is-${developmentLayer.toLowerCase()}`}>
                  <span className="wk-how-preview__tech-dot" />
                  <span>Layer: {developmentLayer} Active</span>
                </div>
              )}

              {/* Step 5 Quality Check Overlay */}
              {qualityCheck && (
                <div className={`wk-how-preview__qa-badge is-${qualityCheck.toLowerCase()}`}>
                  <span className="wk-how-preview__qa-score">99/100</span>
                  <span className="wk-how-preview__qa-label">{qualityCheck} Verified</span>
                </div>
              )}

              {/* Step 6 Growth / Completion Overlay */}
              {growthApproach && (
                <div className={`wk-how-preview__growth-badge is-${growthApproach.toLowerCase()}`}>
                  <span className="wk-how-preview__growth-pulse" />
                  <span>Scale: {growthApproach} Enabled</span>
                </div>
              )}

              {/* Final Summary Card on Completion */}
              {isComplete && (
                <div className="wk-how-preview__complete-card">
                  <div className="wk-how-preview__complete-check">✓</div>
                  <h4>Your Product Blueprint is Ready!</h4>
                  <p>
                    {productType} • {coreFeature} • {designDirection} Design • {developmentLayer} Stack • {qualityCheck} QA • {growthApproach} Post-Launch
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
