'use client';

import React, { useState } from 'react';
import { Header } from '../../sections/home/Header/Header';
import { Footer } from '../../sections/home/Footer/Footer';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Container } from '../../components/Container/Container';
import { CTA } from '../../components/CTA';
import { AICapabilityDetail } from '../../data/aiSolutionsData';
import {
  ShieldAlert,
  ShieldCheck,
  Database,
  Cpu,
  Shield,
  Layout,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Building2,
  Sparkles,
  Check,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import './AICapabilityDetailPage.css';

interface AICapabilityDetailPageProps {
  data: AICapabilityDetail;
}

export const AICapabilityDetailPage: React.FC<AICapabilityDetailPageProps> = ({ data }) => {
  // Accordion state for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form state
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formTouched, setFormTouched] = useState<Record<string, boolean>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Please enter your full name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Please enter your work email.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())) {
          return 'Please provide a valid business email.';
        }
        return undefined;
      case 'company':
        if (!value.trim()) return 'Please enter your company name.';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Please enter your project goals.';
        if (value.trim().length < 10) return 'Please provide at least 10 characters.';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (formTouched[name]) {
      const err = validateField(name, value);
      setFormErrors((prev) => ({ ...prev, [name]: err || '' }));
    }
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: err || '' }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { fullName: true, email: true, company: true, phone: true, message: true };
    setFormTouched(allTouched);

    const newErrors: Record<string, string> = {};
    Object.keys(formValues).forEach((key) => {
      const err = validateField(key, (formValues as any)[key]);
      if (err) newErrors[key] = err;
    });

    setFormErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstKey = Object.keys(newErrors)[0];
      const el = document.getElementById(`cap-enquiry-${firstKey}`);
      if (el) el.focus();
      return;
    }

    setFormStatus('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 550));
      setFormStatus('success');
      setFormValues({ fullName: '', email: '', company: '', phone: '', message: '' });
      setFormTouched({});
    } catch {
      setFormStatus('error');
    }
  };

  // Structured Data Schema for Capability Detail Page
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    serviceType: 'Enterprise Artificial Intelligence Engineering',
    provider: {
      '@type': 'Organization',
      name: 'Webkorps',
      url: 'https://www.webkorps.com',
    },
    description: data.metaDescription,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: data.name,
      itemListElement: data.useCases.map((uc) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: uc.title,
          description: uc.description,
        },
      })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.webkorps.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Solutions',
        item: 'https://www.webkorps.com/ai-solutions',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.name,
        item: `https://www.webkorps.com/ai-solutions/${data.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="wk-cap-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <a href="#cap-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      <main id="cap-main-content" tabIndex={-1} className="wk-cap-detail-page__main">
        {/* 1. HERO BLOCK */}
        <section className="wk-cap-hero" aria-labelledby="cap-hero-title">
          <div className="wk-cap-hero__bg-grid" aria-hidden="true" />
          <Container size="normal">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="wk-ai-breadcrumb">
              <ol className="wk-ai-breadcrumb__list">
                <li className="wk-ai-breadcrumb__item">
                  <a href="/" className="wk-ai-breadcrumb__link">Home</a>
                </li>
                <li className="wk-ai-breadcrumb__separator" aria-hidden="true">/</li>
                <li className="wk-ai-breadcrumb__item">
                  <a href="/ai-solutions" className="wk-ai-breadcrumb__link">AI Solutions</a>
                </li>
                <li className="wk-ai-breadcrumb__separator" aria-hidden="true">/</li>
                <li className="wk-ai-breadcrumb__item wk-ai-breadcrumb__item--active" aria-current="page">
                  {data.name}
                </li>
              </ol>
            </nav>

            <div className="wk-cap-hero__content">
              <div className="wk-cap-hero__badge">
                <Sparkles size={14} className="wk-cap-hero__badge-icon" />
                <span>{data.badge}</span>
              </div>

              <h1 id="cap-hero-title" className="wk-cap-hero__title">
                {data.heroHeadline}
              </h1>

              <p className="wk-cap-hero__subtitle">{data.heroSubtitle}</p>

              <div className="wk-cap-hero__actions">
                <CTA
                  href="#capability-enquiry"
                  variant="primary"
                  size="lg"
                  pill
                  arrow="diagonal"
                  aria-label={`Discuss Your ${data.name} Initiative`}
                >
                  Discuss Your Architecture
                </CTA>
                <CTA
                  href="#architecture"
                  variant="outline"
                  size="lg"
                  pill
                  arrow="none"
                  aria-label="View Technical Architecture"
                >
                  View Architecture
                </CTA>
              </div>

              {/* Stats Bar */}
              <div className="wk-cap-hero__stats">
                {data.stats.map((st, i) => (
                  <div key={i} className="wk-cap-hero__stat-card">
                    <span className="wk-cap-hero__stat-val">{st.value}</span>
                    <span className="wk-cap-hero__stat-lbl">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* 2. PROBLEM & OUTCOMES SPLIT */}
        <section className="wk-cap-section wk-cap-section--split" aria-labelledby="problem-outcomes-heading">
          <Container size="normal">
            <h2 id="problem-outcomes-heading" className="sr-only">
              Business Challenge and Expected Outcomes
            </h2>
            <div className="wk-cap-split-grid">
              {/* Problem Column */}
              <div className="wk-cap-split-card wk-cap-split-card--problem">
                <div className="wk-cap-split-card__header">
                  <div className="wk-cap-split-card__icon-box wk-cap-split-card__icon-box--problem">
                    <ShieldAlert size={24} />
                  </div>
                  <div>
                    <span className="wk-cap-split-card__kicker">The Obstacle</span>
                    <h3 className="wk-cap-split-card__title">{data.problem.title}</h3>
                  </div>
                </div>
                <p className="wk-cap-split-card__desc">{data.problem.description}</p>
                <ul className="wk-cap-split-card__list">
                  {data.problem.painPoints.map((pt, i) => (
                    <li key={i} className="wk-cap-split-card__list-item wk-cap-split-card__list-item--problem">
                      <span className="wk-cap-split-card__bullet wk-cap-split-card__bullet--problem">✕</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome Column */}
              <div className="wk-cap-split-card wk-cap-split-card--outcome">
                <div className="wk-cap-split-card__header">
                  <div className="wk-cap-split-card__icon-box wk-cap-split-card__icon-box--outcome">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <span className="wk-cap-split-card__kicker wk-cap-split-card__kicker--outcome">The Solution</span>
                    <h3 className="wk-cap-split-card__title">{data.outcomes.title}</h3>
                  </div>
                </div>
                <p className="wk-cap-split-card__desc">{data.outcomes.description}</p>
                <ul className="wk-cap-split-card__list">
                  {data.outcomes.benefits.map((bf, i) => (
                    <li key={i} className="wk-cap-split-card__list-item wk-cap-split-card__list-item--outcome">
                      <span className="wk-cap-split-card__bullet wk-cap-split-card__bullet--outcome">✓</span>
                      <span>{bf}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. WHAT THE SOLUTION DOES / PILLARS */}
        <section className="wk-cap-section wk-cap-pillars-section" aria-labelledby="pillars-heading">
          <Container size="normal">
            <div className="wk-ai-section__heading-block">
              <span className="wk-ai-section__kicker">Core Capabilities</span>
              <h2 id="pillars-heading" className="wk-ai-section__title">
                {data.whatItDoes.headline}
              </h2>
              <p className="wk-ai-section__subtitle">{data.whatItDoes.description}</p>
            </div>

            <div className="wk-cap-pillars-grid">
              {data.whatItDoes.pillars.map((pil, idx) => (
                <div key={idx} className="wk-cap-pillar-card">
                  <div className="wk-cap-pillar-card__icon">
                    {idx === 0 && <Database size={24} />}
                    {idx === 1 && <Cpu size={24} />}
                    {idx === 2 && <Shield size={24} />}
                    {idx === 3 && <Layout size={24} />}
                  </div>
                  <h3 className="wk-cap-pillar-card__title">{pil.title}</h3>
                  <p className="wk-cap-pillar-card__desc">{pil.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. RELEVANT ENTERPRISE USE CASES */}
        <section className="wk-cap-section wk-cap-use-cases-section" aria-labelledby="usecases-heading">
          <Container size="normal">
            <div className="wk-ai-section__heading-block">
              <span className="wk-ai-section__kicker">Practical Application</span>
              <h2 id="usecases-heading" className="wk-ai-section__title">
                High-Impact Enterprise{' '}
                <span className="wk-ai-section__title-accent">Use Cases</span>
              </h2>
              <p className="wk-ai-section__subtitle">
                Explore real business implementations delivering measurable efficiency gains across enterprise departments.
              </p>
            </div>

            <div className="wk-cap-usecases-grid">
              {data.useCases.map((uc, i) => (
                <article key={i} className="wk-cap-uc-card">
                  <div className="wk-cap-uc-card__number">0{i + 1}</div>
                  <h3 className="wk-cap-uc-card__title">{uc.title}</h3>
                  <p className="wk-cap-uc-card__desc">{uc.description}</p>

                  <div className="wk-cap-uc-card__meta">
                    <div className="wk-cap-uc-card__meta-item">
                      <strong>Target Teams:</strong>
                      <span>{uc.targetPersona}</span>
                    </div>
                    <div className="wk-cap-uc-card__meta-item wk-cap-uc-card__meta-item--impact">
                      <strong>Business Impact:</strong>
                      <span>{uc.businessImpact}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. IMPLEMENTATION APPROACH & ARCHITECTURE */}
        <section id="architecture" className="wk-cap-section wk-cap-arch-section" aria-labelledby="arch-heading">
          <Container size="normal">
            <div className="wk-ai-section__heading-block">
              <span className="wk-ai-section__kicker">Engineering Blueprint</span>
              <h2 id="arch-heading" className="wk-ai-section__title">
                Multi-Layer Technical{' '}
                <span className="wk-ai-section__title-accent">Architecture</span>
              </h2>
              <p className="wk-ai-section__subtitle">{data.architecture.overview}</p>
            </div>

            <div className="wk-cap-arch-flow">
              {data.architecture.steps.map((st, i) => (
                <div key={i} className="wk-cap-arch-step">
                  <div className="wk-cap-arch-step__sidebar">
                    <span className="wk-cap-arch-step__badge">0{i + 1}</span>
                    {i < data.architecture.steps.length - 1 && (
                      <div className="wk-cap-arch-step__line" aria-hidden="true" />
                    )}
                  </div>

                  <div className="wk-cap-arch-step__content">
                    <span className="wk-cap-arch-step__layer">{st.layer}</span>
                    <h3 className="wk-cap-arch-step__title">{st.name}</h3>
                    <p className="wk-cap-arch-step__details">{st.details}</p>

                    <div className="wk-cap-arch-step__tech-wrap">
                      <span className="wk-cap-arch-step__tech-label">Technologies:</span>
                      <div className="wk-cap-arch-step__tech-tags">
                        {st.tech.map((t) => (
                          <span key={t} className="wk-cap-arch-step__pill">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. TECHNOLOGIES & INTEGRATIONS */}
        <section className="wk-cap-section wk-cap-tech-section" aria-labelledby="cap-tech-heading">
          <Container size="normal">
            <div className="wk-ai-section__heading-block">
              <span className="wk-ai-section__kicker">Technology Stack</span>
              <h2 id="cap-tech-heading" className="wk-ai-section__title">
                Supported Frameworks &{' '}
                <span className="wk-ai-section__title-accent">Model Integrations</span>
              </h2>
              <p className="wk-ai-section__subtitle">
                Vendor-agnostic integration with leading frontier models, private vector engines, and enterprise cloud frameworks.
              </p>
            </div>

            <div className="wk-cap-tech-grid">
              {data.technologies.map((tc, i) => (
                <div key={i} className="wk-cap-tech-col">
                  <h3 className="wk-cap-tech-col__title">{tc.category}</h3>
                  <ul className="wk-cap-tech-col__list">
                    {tc.items.map((item) => (
                      <li key={item} className="wk-cap-tech-col__item">
                        <Check size={16} className="wk-cap-tech-col__check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 7. VERIFIED EVIDENCE & CASE STUDY */}
        <section className="wk-cap-section wk-cap-case-section" aria-labelledby="cap-case-heading">
          <Container size="normal">
            <div className="wk-cap-case-card">
              <div className="wk-cap-case-card__header">
                <span className="wk-cap-case-card__kicker">Verified Client Evidence</span>
                <h2 id="cap-case-heading" className="wk-cap-case-card__title">
                  {data.caseStudy.clientContext}
                </h2>
                <div className="wk-cap-case-card__industry-tag">
                  <Building2 size={16} />
                  <span>{data.caseStudy.industry}</span>
                </div>
              </div>

              <div className="wk-cap-case-card__grid">
                <div className="wk-cap-case-card__col">
                  <h3 className="wk-cap-case-card__subtitle">The Challenge:</h3>
                  <p className="wk-cap-case-card__text">{data.caseStudy.challenge}</p>
                </div>
                <div className="wk-cap-case-card__col">
                  <h3 className="wk-cap-case-card__subtitle">Webkorps Implementation:</h3>
                  <p className="wk-cap-case-card__text">{data.caseStudy.implementation}</p>
                </div>
              </div>

              <div className="wk-cap-case-card__outcomes">
                <h3 className="wk-cap-case-card__outcomes-title">Quantifiable Outcomes:</h3>
                <div className="wk-cap-case-card__metrics-grid">
                  {data.caseStudy.outcomes.map((oc, i) => (
                    <div key={i} className="wk-cap-case-metric">
                      <span className="wk-cap-case-metric__val">{oc.value}</span>
                      <span className="wk-cap-case-metric__lbl">{oc.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 8. RELEVANT FAQS */}
        <section className="wk-cap-section wk-cap-faq-section" aria-labelledby="faq-heading">
          <Container size="normal">
            <div className="wk-ai-section__heading-block">
              <span className="wk-ai-section__kicker">Frequently Asked Questions</span>
              <h2 id="faq-heading" className="wk-ai-section__title">
                Enterprise AI FAQs &{' '}
                <span className="wk-ai-section__title-accent">Security Standards</span>
              </h2>
              <p className="wk-ai-section__subtitle">
                Clear, transparent answers regarding enterprise data privacy, model training boundaries, and operational integration.
              </p>
            </div>

            <div className="wk-cap-faq-list" role="region" aria-label="Frequently Asked Questions">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className={`wk-cap-faq-item ${isOpen ? 'wk-cap-faq-item--open' : ''}`}>
                    <button
                      type="button"
                      className="wk-cap-faq-btn"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="wk-cap-faq-question">{faq.question}</span>
                      <ChevronDown
                        className={`wk-cap-faq-chevron ${isOpen ? 'wk-cap-faq-chevron--open' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div id={`faq-answer-${idx}`} className="wk-cap-faq-body">
                        <p className="wk-cap-faq-answer">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 9. RELATED SERVICES & INDUSTRIES */}
        <section className="wk-cap-section wk-cap-related-section" aria-labelledby="related-heading">
          <Container size="normal">
            <div className="wk-cap-related-grid">
              {/* Related Services */}
              <div className="wk-cap-related-block">
                <h2 id="related-heading" className="wk-cap-related-title">
                  Related Engineering Services
                </h2>
                <div className="wk-cap-related-cards">
                  {data.relatedServices.map((srv) => (
                    <a key={srv.title} href={srv.href} className="wk-cap-rel-card">
                      <h3 className="wk-cap-rel-card__title">{srv.title}</h3>
                      <p className="wk-cap-rel-card__desc">{srv.desc}</p>
                      <span className="wk-cap-rel-card__arrow">Explore service →</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Related Industries */}
              <div className="wk-cap-related-block">
                <h2 className="wk-cap-related-title">Related Industry Verticals</h2>
                <div className="wk-cap-related-pills">
                  {data.relatedIndustries.map((ind) => (
                    <a key={ind.name} href={ind.href} className="wk-cap-ind-pill">
                      <span>{ind.name}</span>
                      <ArrowRight size={14} className="wk-cap-ind-pill__arrow" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 10. CONTEXTUAL PROJECT ENQUIRY FORM */}
        <section id="capability-enquiry" className="wk-cap-section wk-cap-enquiry-section" aria-labelledby="cap-enquiry-title">
          <Container size="normal">
            <div className="wk-cap-enquiry-card">
              <div className="wk-cap-enquiry-header">
                <span className="wk-ai-section__kicker">Initiate Project Discovery</span>
                <h2 id="cap-enquiry-title" className="wk-cap-enquiry-title">
                  Consult on Your{' '}
                  <span className="wk-ai-section__title-accent">{data.name}</span> Initiative
                </h2>
                <p className="wk-cap-enquiry-subtitle">
                  Our senior engineering leaders will assess your data sources, privacy constraints, and delivery milestones.
                </p>
              </div>

              {formStatus === 'success' ? (
                <div className="wk-ai-enquiry-success" role="status" aria-live="polite">
                  <CheckCircle2 size={48} className="wk-ai-enquiry-success__icon" />
                  <h3 className="wk-ai-enquiry-success__title">Inquiry Successfully Submitted!</h3>
                  <p className="wk-ai-enquiry-success__desc">
                    Thank you. A specialized Webkorps AI Architect has received your request and will reach out with a technical consultation plan within 24 business hours.
                  </p>
                  <button
                    type="button"
                    className="wk-ai-enquiry-reset-btn"
                    onClick={() => setFormStatus('idle')}
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form
                  className="wk-cap-enquiry-form"
                  noValidate
                  onSubmit={handleFormSubmit}
                  aria-label={`Project Inquiry Form for ${data.name}`}
                >
                  <div className="wk-ai-form__row">
                    <div className={`wk-ai-form__field ${formErrors.fullName && formTouched.fullName ? 'wk-ai-form__field--error' : ''}`}>
                      <label htmlFor="cap-enquiry-fullName" className="wk-ai-form__label">
                        Full Name <span className="wk-ai-form__required">*</span>
                      </label>
                      <input
                        id="cap-enquiry-fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formValues.fullName}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className="wk-ai-form__input"
                      />
                      {formErrors.fullName && formTouched.fullName && (
                        <span className="wk-ai-form__error">{formErrors.fullName}</span>
                      )}
                    </div>

                    <div className={`wk-ai-form__field ${formErrors.email && formTouched.email ? 'wk-ai-form__field--error' : ''}`}>
                      <label htmlFor="cap-enquiry-email" className="wk-ai-form__label">
                        Work Email <span className="wk-ai-form__required">*</span>
                      </label>
                      <input
                        id="cap-enquiry-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formValues.email}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className="wk-ai-form__input"
                      />
                      {formErrors.email && formTouched.email && (
                        <span className="wk-ai-form__error">{formErrors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="wk-ai-form__row">
                    <div className={`wk-ai-form__field ${formErrors.company && formTouched.company ? 'wk-ai-form__field--error' : ''}`}>
                      <label htmlFor="cap-enquiry-company" className="wk-ai-form__label">
                        Company Name <span className="wk-ai-form__required">*</span>
                      </label>
                      <input
                        id="cap-enquiry-company"
                        name="company"
                        type="text"
                        required
                        placeholder="Company or Organization"
                        value={formValues.company}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className="wk-ai-form__input"
                      />
                      {formErrors.company && formTouched.company && (
                        <span className="wk-ai-form__error">{formErrors.company}</span>
                      )}
                    </div>

                    <div className="wk-ai-form__field">
                      <label htmlFor="cap-enquiry-phone" className="wk-ai-form__label">
                        Phone Number
                      </label>
                      <input
                        id="cap-enquiry-phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        className="wk-ai-form__input"
                      />
                    </div>
                  </div>

                  <div className={`wk-ai-form__field ${formErrors.message && formTouched.message ? 'wk-ai-form__field--error' : ''}`}>
                    <label htmlFor="cap-enquiry-message" className="wk-ai-form__label">
                      Technical Scope &amp; Current Infrastructure <span className="wk-ai-form__required">*</span>
                    </label>
                    <textarea
                      id="cap-enquiry-message"
                      name="message"
                      rows={4}
                      required
                      placeholder={`Tell us about your ${data.name} objectives, data volume, and security requirements...`}
                      value={formValues.message}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className="wk-ai-form__textarea"
                    />
                    {formErrors.message && formTouched.message && (
                      <span className="wk-ai-form__error">{formErrors.message}</span>
                    )}
                  </div>

                  {formStatus === 'error' && (
                    <div className="wk-ai-form__alert-error">
                      <AlertCircle size={18} />
                      <span>An error occurred. Please contact contact@webkorps.com directly.</span>
                    </div>
                  )}

                  <div className="wk-cap-enquiry-form__actions">
                    <CTA
                      type="submit"
                      variant="primary"
                      size="lg"
                      pill
                      arrow="diagonal"
                      loading={formStatus === 'submitting'}
                      disabled={formStatus === 'submitting'}
                      aria-label="Submit Technical Consultation Request"
                    >
                      {formStatus === 'submitting' ? 'Submitting Discovery Request...' : 'Schedule Technical Discovery'}
                    </CTA>
                  </div>
                </form>
              )}
            </div>
          </Container>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};
