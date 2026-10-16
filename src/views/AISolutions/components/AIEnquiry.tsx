'use client';

import React, { useState } from 'react';
import { Container } from '../../../components/Container/Container';
import { CTA } from '../../../components/CTA';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

interface AIEnquiryValues {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  capability: string;
  timeline: string;
  message: string;
}

interface AIEnquiryErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  capability?: string;
  timeline?: string;
  message?: string;
}

export const AIEnquiry: React.FC = () => {
  const [values, setValues] = useState<AIEnquiryValues>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    capability: 'Generative AI & Enterprise LLMs',
    timeline: '1-3 months',
    message: '',
  });

  const [errors, setErrors] = useState<AIEnquiryErrors>({});
  const [touched, setTouched] = useState<Record<keyof AIEnquiryValues, boolean>>({
    fullName: false,
    email: false,
    phone: false,
    company: false,
    capability: false,
    timeline: false,
    message: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateField = (name: keyof AIEnquiryValues, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Please enter your full name.';
        if (value.trim().length < 2) return 'Full name must be at least 2 characters.';
        return undefined;

      case 'email':
        if (!value.trim()) return 'Please enter your corporate email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())) {
          return 'Please provide a valid work email address.';
        }
        return undefined;

      case 'phone': {
        if (!value.trim()) return 'Please enter your phone number.';
        const digits = value.replace(/\D/g, '');
        if (digits.length < 7 || digits.length > 18) {
          return 'Please enter a valid phone number (minimum 7 digits).';
        }
        return undefined;
      }

      case 'company':
        if (!value.trim()) return 'Please enter your company or organization name.';
        return undefined;

      case 'capability':
        if (!value) return 'Please select an AI capability of interest.';
        return undefined;

      case 'message':
        if (!value.trim()) return 'Please describe your project scope or challenge.';
        if (value.trim().length < 10) return 'Please provide at least 10 characters describing your project.';
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof AIEnquiryValues;
    setValues((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof AIEnquiryValues;
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allTouched: Record<keyof AIEnquiryValues, boolean> = {
      fullName: true,
      email: true,
      phone: true,
      company: true,
      capability: true,
      timeline: true,
      message: true,
    };
    setTouched(allTouched);

    const newErrors: AIEnquiryErrors = {};
    (Object.keys(values) as Array<keyof AIEnquiryValues>).forEach((field) => {
      const err = validateField(field, values[field]);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstField = Object.keys(newErrors)[0];
      const el = document.getElementById(`ai-enquiry-${firstField}`);
      if (el) el.focus();
      return;
    }

    setStatus('submitting');

    try {
      // Simulate client-side validation handshake
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus('success');
      setValues({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        capability: 'Generative AI & Enterprise LLMs',
        timeline: '1-3 months',
        message: '',
      });
      setTouched({
        fullName: false,
        email: false,
        phone: false,
        company: false,
        capability: false,
        timeline: false,
        message: false,
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="ai-enquiry" className="wk-ai-section wk-ai-enquiry-section" aria-labelledby="enquiry-heading">
      <Container size="normal">
        <div className="wk-ai-enquiry-grid">
          {/* Left Column: Direct Consultation Pitch & Contacts */}
          <div className="wk-ai-enquiry-info">
            <span className="wk-ai-section__kicker">Start Your AI Initiative</span>
            <h2 id="enquiry-heading" className="wk-ai-enquiry-info__title">
              Let’s Architect Your{' '}
              <span className="wk-ai-enquiry-info__title-accent">AI Roadmap</span>
            </h2>
            <p className="wk-ai-enquiry-info__text">
              Speak directly with a Webkorps AI Solution Architect. We review your data readiness, evaluate model feasibility, and prepare a preliminary technical blueprint within 48 hours.
            </p>

            <div className="wk-ai-enquiry-highlights">
              <div className="wk-ai-enquiry-highlight-item">
                <Sparkles className="wk-ai-enquiry-highlight-icon" aria-hidden="true" />
                <div>
                  <strong>NDA & Data Privacy Guaranteed</strong>
                  <p>Strict confidentiality from day one. ISO 27001 accredited workflows.</p>
                </div>
              </div>

              <div className="wk-ai-enquiry-highlight-item">
                <CheckCircle className="wk-ai-enquiry-highlight-icon" aria-hidden="true" />
                <div>
                  <strong>Preliminary Feasibility Audit</strong>
                  <p>Initial assessment of data availability, latency SLAs, and token budgets.</p>
                </div>
              </div>
            </div>

            {/* Direct Contacts Card */}
            <div className="wk-ai-enquiry-contacts">
              <div className="wk-ai-enquiry-contact-row">
                <Mail className="wk-ai-enquiry-contact-icon" aria-hidden="true" />
                <div>
                  <span className="wk-ai-enquiry-contact-label">Email AI Practice Leaders</span>
                  <a href="mailto:contact@webkorps.com" className="wk-ai-enquiry-contact-value">
                    contact@webkorps.com
                  </a>
                </div>
              </div>

              <div className="wk-ai-enquiry-contact-row">
                <Phone className="wk-ai-enquiry-contact-icon" aria-hidden="true" />
                <div>
                  <span className="wk-ai-enquiry-contact-label">US & Global Inquiries</span>
                  <a href="tel:+14158002930" className="wk-ai-enquiry-contact-value">
                    +1 (415) 800-2930
                  </a>
                </div>
              </div>

              <div className="wk-ai-enquiry-contact-row">
                <MapPin className="wk-ai-enquiry-contact-icon" aria-hidden="true" />
                <div>
                  <span className="wk-ai-enquiry-contact-label">Global Engineering Delivery</span>
                  <span className="wk-ai-enquiry-contact-value">
                    Frisco (TX) • Indore • Pune • Bengaluru
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Interactive Form */}
          <div className="wk-ai-enquiry-card">
            {status === 'success' ? (
              <div className="wk-ai-enquiry-success" role="status" aria-live="polite">
                <div className="wk-ai-enquiry-success__icon" aria-hidden="true">
                  <CheckCircle size={44} />
                </div>
                <h3 className="wk-ai-enquiry-success__title">AI Project Inquiry Received!</h3>
                <p className="wk-ai-enquiry-success__desc">
                  Thank you for reaching out. A Senior Webkorps AI Solution Architect will review your technical requirements and respond within 24 business hours with an initial consultation briefing.
                </p>
                <button
                  type="button"
                  className="wk-ai-enquiry-reset-btn"
                  onClick={() => setStatus('idle')}
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form
                className="wk-ai-form"
                noValidate
                onSubmit={handleSubmit}
                aria-label="Enterprise AI Consultation and Project Inquiry Form"
              >
                <h3 className="wk-ai-form__title">Schedule Technical Discovery</h3>

                {/* Name & Email Row */}
                <div className="wk-ai-form__row">
                  <div className={`wk-ai-form__field ${errors.fullName && touched.fullName ? 'wk-ai-form__field--error' : ''}`}>
                    <label htmlFor="ai-enquiry-fullName" className="wk-ai-form__label">
                      Full Name <span className="wk-ai-form__required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="ai-enquiry-fullName"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Sarah Jenkins"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={Boolean(errors.fullName && touched.fullName)}
                      aria-describedby={errors.fullName && touched.fullName ? 'ai-enquiry-fullName-err' : undefined}
                      className="wk-ai-form__input"
                    />
                    {errors.fullName && touched.fullName && (
                      <span id="ai-enquiry-fullName-err" className="wk-ai-form__error" role="alert">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className={`wk-ai-form__field ${errors.email && touched.email ? 'wk-ai-form__field--error' : ''}`}>
                    <label htmlFor="ai-enquiry-email" className="wk-ai-form__label">
                      Work Email <span className="wk-ai-form__required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="ai-enquiry-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="sarah@company.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={Boolean(errors.email && touched.email)}
                      aria-describedby={errors.email && touched.email ? 'ai-enquiry-email-err' : undefined}
                      className="wk-ai-form__input"
                    />
                    {errors.email && touched.email && (
                      <span id="ai-enquiry-email-err" className="wk-ai-form__error" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Company & Phone Row */}
                <div className="wk-ai-form__row">
                  <div className={`wk-ai-form__field ${errors.company && touched.company ? 'wk-ai-form__field--error' : ''}`}>
                    <label htmlFor="ai-enquiry-company" className="wk-ai-form__label">
                      Company / Organization <span className="wk-ai-form__required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="ai-enquiry-company"
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Company Name"
                      value={values.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={Boolean(errors.company && touched.company)}
                      aria-describedby={errors.company && touched.company ? 'ai-enquiry-company-err' : undefined}
                      className="wk-ai-form__input"
                    />
                    {errors.company && touched.company && (
                      <span id="ai-enquiry-company-err" className="wk-ai-form__error" role="alert">
                        {errors.company}
                      </span>
                    )}
                  </div>

                  <div className={`wk-ai-form__field ${errors.phone && touched.phone ? 'wk-ai-form__field--error' : ''}`}>
                    <label htmlFor="ai-enquiry-phone" className="wk-ai-form__label">
                      Phone Number <span className="wk-ai-form__required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="ai-enquiry-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={Boolean(errors.phone && touched.phone)}
                      aria-describedby={errors.phone && touched.phone ? 'ai-enquiry-phone-err' : undefined}
                      className="wk-ai-form__input"
                    />
                    {errors.phone && touched.phone && (
                      <span id="ai-enquiry-phone-err" className="wk-ai-form__error" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Capability & Timeline Row */}
                <div className="wk-ai-form__row">
                  <div className="wk-ai-form__field">
                    <label htmlFor="ai-enquiry-capability" className="wk-ai-form__label">
                      Primary AI Interest
                    </label>
                    <select
                      id="ai-enquiry-capability"
                      name="capability"
                      value={values.capability}
                      onChange={handleChange}
                      className="wk-ai-form__select"
                    >
                      <option value="Generative AI & Enterprise LLMs">Generative AI & Enterprise LLMs (RAG)</option>
                      <option value="Agentic AI & Autonomous Workflows">Agentic AI & Workflow Automation</option>
                      <option value="Predictive Analytics & Machine Learning">Predictive Analytics & Machine Learning</option>
                      <option value="Computer Vision & Multimodal AI">Computer Vision & Multimodal AI</option>
                      <option value="SaaS AI Modernization">SaaS AI Modernization & Copilots</option>
                      <option value="AI Governance & MLOps">AI Governance & Enterprise MLOps</option>
                    </select>
                  </div>

                  <div className="wk-ai-form__field">
                    <label htmlFor="ai-enquiry-timeline" className="wk-ai-form__label">
                      Target Project Timeline
                    </label>
                    <select
                      id="ai-enquiry-timeline"
                      name="timeline"
                      value={values.timeline}
                      onChange={handleChange}
                      className="wk-ai-form__select"
                    >
                      <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                      <option value="1-3 months">1 to 3 months</option>
                      <option value="3-6 months">3 to 6 months</option>
                      <option value="Exploring / Planning">Exploring / R&amp;D Planning</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className={`wk-ai-form__field ${errors.message && touched.message ? 'wk-ai-form__field--error' : ''}`}>
                  <label htmlFor="ai-enquiry-message" className="wk-ai-form__label">
                    Project Goals / Data Scope <span className="wk-ai-form__required" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="ai-enquiry-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Briefly describe your business challenge, existing data sources, or intended use cases..."
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-invalid={Boolean(errors.message && touched.message)}
                    aria-describedby={errors.message && touched.message ? 'ai-enquiry-message-err' : undefined}
                    className="wk-ai-form__textarea"
                  />
                  {errors.message && touched.message && (
                    <span id="ai-enquiry-message-err" className="wk-ai-form__error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Error Banner if submission fails */}
                {status === 'error' && (
                  <div className="wk-ai-form__alert-error" role="alert">
                    <AlertCircle size={18} />
                    <span>An error occurred while submitting. Please email contact@webkorps.com directly.</span>
                  </div>
                )}

                {/* Submission CTA Button */}
                <div className="wk-ai-form__actions">
                  <CTA
                    type="submit"
                    variant="primary"
                    size="lg"
                    pill
                    arrow="diagonal"
                    loading={status === 'submitting'}
                    disabled={status === 'submitting'}
                    fullWidth
                    aria-label="Submit AI Project Consultation Request"
                  >
                    {status === 'submitting' ? 'Submitting Inquiry...' : 'Submit AI Project Inquiry'}
                  </CTA>
                </div>

                {/* Frontend configuration disclosure */}
                <p className="wk-ai-form__note">
                  🔒 Strictly confidential. Webkorps signs mutual NDAs before reviewing proprietary data. ISO 27001 Certified.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
