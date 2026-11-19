'use client';

import React from 'react';
import Link from 'next/link';
import { CaseStudyData } from '../../../data/caseStudies/types';
import { getImgSrc } from '../../../utils/image';
import { Button } from '../../../components/Button/Button';
import './CaseStudyComponents.css';

interface CaseStudyHeroProps {
  data: CaseStudyData;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ data }) => {
  return (
    <section className="wk-cs-hero" aria-label="Case Study Hero">
      <div className="wk-cs-hero__container">
        {/* Breadcrumb Navigation */}
        <nav className="wk-cs-hero__breadcrumb" aria-label="Breadcrumb">
          <ol className="wk-cs-hero__breadcrumb-list">
            <li className="wk-cs-hero__breadcrumb-item">
              <Link href="/" className="wk-cs-hero__breadcrumb-link">
                Home
              </Link>
            </li>
            <li className="wk-cs-hero__breadcrumb-sep" aria-hidden="true">
              /
            </li>
            <li className="wk-cs-hero__breadcrumb-item">
              <Link href="/case-studies" className="wk-cs-hero__breadcrumb-link">
                Case Studies
              </Link>
            </li>
            <li className="wk-cs-hero__breadcrumb-sep" aria-hidden="true">
              /
            </li>
            <li className="wk-cs-hero__breadcrumb-item wk-cs-hero__breadcrumb-item--current" aria-current="page">
              {data.client}
            </li>
          </ol>
        </nav>

        {/* Split Hero Composition */}
        <div className="wk-cs-hero__split">
          {/* Left Column: Text & Outcomes */}
          <div className="wk-cs-hero__content">
            <div className="wk-cs-hero__eyebrow-row">
              <span className="wk-cs-hero__eyebrow">{data.serviceCategory}</span>
              {data.clientLogo && (
                <div className="wk-cs-hero__client-logo-box">
                  <img
                    src={getImgSrc(data.clientLogo)}
                    alt={data.clientLogoAlt || `${data.client} logo`}
                    className="wk-cs-hero__client-logo"
                  />
                </div>
              )}
            </div>

            <h1 className="wk-cs-hero__title">{data.outcomeHeadline}</h1>

            <p className="wk-cs-hero__subtitle">{data.subtitle}</p>

            {/* Verified Headline Metrics */}
            {data.heroMetrics && data.heroMetrics.length > 0 && (
              <div className="wk-cs-hero__metrics-grid">
                {data.heroMetrics.map((metric, idx) => (
                  <div key={idx} className="wk-cs-hero__metric-card">
                    <span className="wk-cs-hero__metric-val">{metric.value}</span>
                    <span className="wk-cs-hero__metric-label">{metric.label}</span>
                    {metric.baseline && (
                      <span className="wk-cs-hero__metric-baseline">{metric.baseline}</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Hero CTAs */}
            <div className="wk-cs-hero__actions">
              <Button href="#case-study-inquiry" variant="primary" size="lg">
                Discuss a Similar Project
              </Button>
              <Button href="#results" variant="outline" size="lg">
                See the Results ↓
              </Button>
            </div>
          </div>

          {/* Right Column: Device Mockup Visual */}
          <div className="wk-cs-hero__visual-col">
            <div className="wk-cs-hero__mockup-frame">
              <div className="wk-cs-hero__mockup-bar" aria-hidden="true">
                <span className="wk-cs-hero__mockup-dot" />
                <span className="wk-cs-hero__mockup-dot" />
                <span className="wk-cs-hero__mockup-dot" />
                <span className="wk-cs-hero__mockup-url">safexpress.portal.internal</span>
              </div>
              <div className="wk-cs-hero__image-wrap">
                <img
                  src={getImgSrc(data.heroImage)}
                  alt={data.heroImageAlt}
                  className="wk-cs-hero__img"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
