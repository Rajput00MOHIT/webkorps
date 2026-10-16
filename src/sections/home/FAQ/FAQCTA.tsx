import React from 'react';

export const FAQCTA: React.FC = () => {
  return (
    <div className="wk-faq-cta">
      <h3 className="wk-faq-cta__title">Curious What the Right Tech Can Do?</h3>
      <p className="wk-faq-cta__desc">
        Have a challenge to solve or an idea to explore? Connect with our experts for practical insights, tailored recommendations, and a clearer path to your next milestone.
      </p>
      <a
        href="#contact"
        className="wk-faq-cta__btn"
        aria-label="Talk to Our Experts - Webkorps Consultation"
      >
        <span>Talk to Our Experts</span>
        <svg
          className="wk-faq-cta__btn-arrow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </a>
    </div>
  );
};
