'use client';

import React from 'react';
import { Container } from '../../../components/Container/Container';
import { CTA } from '../../../components/CTA';
import { ShieldCheck, Award, Zap, Database } from 'lucide-react';

export const AISolutionsHero: React.FC = () => {
  return (
    <section className="wk-ai-hero" aria-labelledby="ai-solutions-hero-title">
      {/* Background Architectural Grid Pattern */}
      <div className="wk-ai-hero__grid-bg" aria-hidden="true">
        <div className="wk-ai-hero__glow-sphere wk-ai-hero__glow-sphere--primary" />
        <div className="wk-ai-hero__glow-sphere wk-ai-hero__glow-sphere--subtle" />
      </div>

      <Container size="normal">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="wk-ai-breadcrumb">
          <ol className="wk-ai-breadcrumb__list">
            <li className="wk-ai-breadcrumb__item">
              <a href="/" className="wk-ai-breadcrumb__link">Home</a>
            </li>
            <li className="wk-ai-breadcrumb__separator" aria-hidden="true">/</li>
            <li className="wk-ai-breadcrumb__item wk-ai-breadcrumb__item--active" aria-current="page">
              AI Solutions
            </li>
          </ol>
        </nav>

        {/* Hero Central Header */}
        <div className="wk-ai-hero__header">
          <div className="wk-ai-hero__eyebrow">
            <span className="wk-ai-hero__eyebrow-dot" />
            <span className="wk-ai-hero__eyebrow-text">Applied Intelligence & Enterprise AI Engineering</span>
          </div>

          <h1 id="ai-solutions-hero-title" className="wk-ai-hero__title">
            Engineering Production-Grade AI Solutions with{' '}
            <span className="wk-ai-hero__title-accent">Verifiable Enterprise ROI</span>
          </h1>

          <p className="wk-ai-hero__subtitle">
            We architect and deploy secure, private Generative AI systems, domain-tuned LLMs, autonomous agentic workflows, and predictive machine learning models that turn complex operations into measurable competitive advantage.
          </p>

          {/* Action CTAs */}
          <div className="wk-ai-hero__actions">
            <CTA
              href="#ai-enquiry"
              variant="primary"
              size="lg"
              pill
              arrow="diagonal"
              aria-label="Book an Enterprise AI Consultation"
            >
              Book an AI Discovery Call
            </CTA>
            <CTA
              href="#capabilities"
              variant="outline"
              size="lg"
              pill
              arrow="none"
              aria-label="Explore Webkorps AI Capabilities"
            >
              Explore Capabilities
            </CTA>
          </div>
        </div>

        {/* Evidence & Compliance Trust Bar */}
        <div className="wk-ai-hero__trust-bar">
          <div className="wk-ai-hero__trust-item">
            <div className="wk-ai-hero__trust-icon-wrap" aria-hidden="true">
              <ShieldCheck className="wk-ai-hero__trust-icon" />
            </div>
            <div className="wk-ai-hero__trust-text">
              <strong>ISO 27001 Certified</strong>
              <span>Zero-Retention Security Standards</span>
            </div>
          </div>

          <div className="wk-ai-hero__trust-item">
            <div className="wk-ai-hero__trust-icon-wrap" aria-hidden="true">
              <Award className="wk-ai-hero__trust-icon" />
            </div>
            <div className="wk-ai-hero__trust-text">
              <strong>CMMI Level 3</strong>
              <span>Rigorous Engineering Governance</span>
            </div>
          </div>

          <div className="wk-ai-hero__trust-item">
            <div className="wk-ai-hero__trust-icon-wrap" aria-hidden="true">
              <Zap className="wk-ai-hero__trust-icon" />
            </div>
            <div className="wk-ai-hero__trust-text">
              <strong>Sub-250ms Latency</strong>
              <span>Optimized Hybrid Inference</span>
            </div>
          </div>

          <div className="wk-ai-hero__trust-item">
            <div className="wk-ai-hero__trust-icon-wrap" aria-hidden="true">
              <Database className="wk-ai-hero__trust-icon" />
            </div>
            <div className="wk-ai-hero__trust-text">
              <strong>100% Data Sovereignty</strong>
              <span>Private VPC & On-Premise RAG</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
