'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import cignaAsset from '../../../assets/case-studies/Cigma.png';
import sonicHealthcareAsset from '../../../assets/case-studies/Sonic healthcare.png';
import paypalAsset from '../../../assets/case-studies/paypal.png';
import { getImgSrc } from '../../../utils/image';
import { Button } from '../../../components/Button/Button';
import './CaseStudyComponents.css';

interface CaseStudyRelatedAndCTAProps {
  currentSlug: string;
  industry: string;
  serviceCategory: string;
}

const RELATED_STUDIES = [
  {
    id: 'cigna',
    client: 'Cigna',
    title: 'Healthcare Platform Integration & Tele-Consultation Ecosystem',
    industry: 'Healthcare & Life Sciences',
    image: cignaAsset,
    imageAlt: 'Cigna telehealth platform on laptop',
    href: '/case-studies',
  },
  {
    id: 'sonic-healthcare',
    client: 'Sonic Healthcare',
    title: 'Global Diagnostics Workflow & Laboratory Logistics Orchestration',
    industry: 'Diagnostics & Supply Chain',
    image: sonicHealthcareAsset,
    imageAlt: 'Sonic Healthcare diagnostics platform on laptop',
    href: '/case-studies',
  },
  {
    id: 'paypal',
    client: 'PayPal',
    title: 'High-Throughput Payment Architecture & Fraud Resilience',
    industry: 'Fintech & Enterprise Retail',
    image: paypalAsset,
    imageAlt: 'PayPal payment checkout platform',
    href: '/case-studies',
  },
];

export const CaseStudyRelatedAndCTA: React.FC<CaseStudyRelatedAndCTAProps> = ({
  currentSlug,
  industry,
  serviceCategory,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid work email';
    }
    if (!formData.company.trim()) newErrors.company = 'Please enter your company';
    if (!formData.message.trim()) newErrors.message = 'Please tell us what you are trying to solve';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('submitting');
    // Simulated smooth submission
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <div className="wk-cs-bottom-wrap">
      {/* Related Case Studies Section */}
      <section className="wk-cs-section wk-cs-related" aria-labelledby="related-heading">
        <div className="wk-cs-section__header wk-cs-section__header--center">
          <span className="wk-cs-section-eyebrow">RELATED TRANSFORMATIONS</span>
          <h2 id="related-heading" className="wk-cs-section-title">
            Explore More Proven Enterprise Case Studies
          </h2>
          <p className="wk-cs-section-subtitle">
            See how Webkorps designs and engineers mission-critical digital products across global industries.
          </p>
        </div>

        <div className="wk-cs-related__grid">
          {RELATED_STUDIES.map((study) => (
            <article key={study.id} className="wk-cs-related-card">
              <div className="wk-cs-related-card__visual">
                <img
                  src={getImgSrc(study.image)}
                  alt={study.imageAlt}
                  className="wk-cs-related-card__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="wk-cs-related-card__body">
                <span className="wk-cs-related-card__ind">{study.industry}</span>
                <h3 className="wk-cs-related-card__client">{study.client}</h3>
                <p className="wk-cs-related-card__title">{study.title}</p>
                <Link href={study.href} className="wk-cs-related-card__link">
                  View Case Study &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final Conversion Section */}
      <section
        id="case-study-inquiry"
        className="wk-cs-final-cta"
        aria-labelledby="final-cta-heading"
      >
        <div className="wk-cs-final-cta__container">
          <div className="wk-cs-final-cta__split">
            {/* Left Column: Conversion Message */}
            <div className="wk-cs-final-cta__left">
              <span className="wk-cs-section-eyebrow">INITIATE A CONVERSATION</span>
              <h2 id="final-cta-heading" className="wk-cs-final-cta__title">
                Facing a Similar <span className="text-brand">Business Challenge?</span>
              </h2>
              <p className="wk-cs-final-cta__subtitle">
                Discuss your product architecture, operational bottlenecks, or digital transformation roadmap directly with our senior engineering architects.
              </p>

              <div className="wk-cs-final-cta__commitments">
                <div className="commitment-item">
                  <span className="commitment-icon">🛡️</span>
                  <div>
                    <strong>Mutual NDA Guaranteed</strong>
                    <p>Your technical blueprints and operational data remain strictly confidential.</p>
                  </div>
                </div>
                <div className="commitment-item">
                  <span className="commitment-icon">⏱️</span>
                  <div>
                    <strong>Response Within 24 Hours</strong>
                    <p>Direct contact with our technical solution leads, not high-pressure sales reps.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="wk-cs-final-cta__right">
              {status === 'success' ? (
                <div className="wk-cs-form-success" role="alert">
                  <span className="success-icon">✓</span>
                  <h3>Inquiry Received</h3>
                  <p>
                    Thank you. A senior technical architect specializing in {industry} will review your requirements and reach out within 24 business hours.
                  </p>
                </div>
              ) : (
                <form className="wk-cs-form" onSubmit={handleSubmit} noValidate>
                  {/* Contextual Hidden Fields */}
                  <input type="hidden" name="caseStudySlug" value={currentSlug} />
                  <input type="hidden" name="industry" value={industry} />
                  <input type="hidden" name="serviceCategory" value={serviceCategory} />

                  <div className="wk-cs-form__row">
                    <div className="wk-cs-form__field">
                      <label htmlFor="cs-form-name" className="wk-cs-form__label">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="cs-form-name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`wk-cs-form__input ${errors.fullName ? 'has-error' : ''}`}
                        aria-invalid={!!errors.fullName}
                      />
                      {errors.fullName && (
                        <span className="wk-cs-form__error">{errors.fullName}</span>
                      )}
                    </div>

                    <div className="wk-cs-form__field">
                      <label htmlFor="cs-form-email" className="wk-cs-form__label">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        id="cs-form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        className={`wk-cs-form__input ${errors.email ? 'has-error' : ''}`}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <span className="wk-cs-form__error">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="wk-cs-form__field">
                    <label htmlFor="cs-form-company" className="wk-cs-form__label">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      id="cs-form-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Logistics Enterprise Corp"
                      className={`wk-cs-form__input ${errors.company ? 'has-error' : ''}`}
                      aria-invalid={!!errors.company}
                    />
                    {errors.company && (
                      <span className="wk-cs-form__error">{errors.company}</span>
                    )}
                  </div>

                  <div className="wk-cs-form__field">
                    <label htmlFor="cs-form-message" className="wk-cs-form__label">
                      What Challenge Are You Trying to Solve? *
                    </label>
                    <textarea
                      id="cs-form-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your systems, current bottlenecks, or desired timeline..."
                      className={`wk-cs-form__textarea ${errors.message ? 'has-error' : ''}`}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <span className="wk-cs-form__error">{errors.message}</span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Project Inquiry →'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
