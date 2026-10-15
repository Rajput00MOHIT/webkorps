import React from 'react';
import { CTA } from '../../../components/CTA';

export const FAQCTA: React.FC = () => {
  return (
    <div className="wk-faq-cta">
      <h3 className="wk-faq-cta__title">Still have question?</h3>
      <p className="wk-faq-cta__desc">
        Can’t find what you’re looking for? Our team is here to help you with clear answers and quick guidance.
      </p>
      <CTA
        href="#contact"
        variant="primary"
        size="md"
        pill
        arrow="diagonal"
        className="wk-faq-cta__btn"
        aria-label="Book a Consultation with Webkorps"
      >
        Book a Consultation
      </CTA>
    </div>
  );
};
