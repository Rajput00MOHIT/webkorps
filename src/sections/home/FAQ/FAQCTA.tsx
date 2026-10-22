import React from 'react';

export interface FAQCTAProps {
  title?: string;
  desc?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonAriaLabel?: string;
}

export const FAQCTA: React.FC<FAQCTAProps> = ({
  title = 'Curious What the Right Tech Can Do?',
  desc = 'Have a challenge to solve or an idea to explore? Connect with our experts for practical insights, tailored recommendations, and a clearer path to your next milestone.',
  buttonText = 'Talk to Our Experts',
  buttonHref = '/contact-us',
  buttonAriaLabel = 'Talk to Our Experts - Webkorps Consultation',
}) => {
  return (
    <div className="wk-faq-cta">
      <h3 className="wk-faq-cta__title">{title}</h3>
      <p className="wk-faq-cta__desc">{desc}</p>
      <a
        href={buttonHref}
        className="wk-faq-cta__btn"
        aria-label={buttonAriaLabel}
      >
        <span>{buttonText}</span>
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

export default FAQCTA;
