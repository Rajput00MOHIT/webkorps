'use client';

import React from 'react';
import { Container } from '../../../components/Container/Container';
import { AI_CAPABILITIES_DATA } from '../../../data/aiSolutionsData';
import { Sparkles, Bot, TrendingUp, Eye, Layers, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react';

function getCapabilityIcon(icon: string) {
  switch (icon) {
    case 'sparkles':
      return <Sparkles className="wk-cap-card__icon-svg" aria-hidden="true" />;
    case 'bot':
      return <Bot className="wk-cap-card__icon-svg" aria-hidden="true" />;
    case 'trending-up':
      return <TrendingUp className="wk-cap-card__icon-svg" aria-hidden="true" />;
    case 'eye':
      return <Eye className="wk-cap-card__icon-svg" aria-hidden="true" />;
    case 'layers':
      return <Layers className="wk-cap-card__icon-svg" aria-hidden="true" />;
    case 'shield-check':
      return <ShieldCheck className="wk-cap-card__icon-svg" aria-hidden="true" />;
    default:
      return <Sparkles className="wk-cap-card__icon-svg" aria-hidden="true" />;
  }
}

export const AICapabilitiesGrid: React.FC = () => {
  return (
    <section id="capabilities" className="wk-ai-section wk-ai-capabilities" aria-labelledby="capabilities-heading">
      <Container size="normal">
        {/* Section Heading */}
        <div className="wk-ai-section__heading-block">
          <span className="wk-ai-section__kicker">Core Capabilities</span>
          <h2 id="capabilities-heading" className="wk-ai-section__title">
            Enterprise AI Systems Designed for{' '}
            <span className="wk-ai-section__title-accent">Production Scale</span>
          </h2>
          <p className="wk-ai-section__subtitle">
            From private Retrieval-Augmented Generation to multi-agent workflow orchestration, explore our verified engineering competencies.
          </p>
        </div>

        {/* Capabilities 3x2 Grid */}
        <div className="wk-ai-capabilities__grid">
          {AI_CAPABILITIES_DATA.map((cap) => {
            const detailHref = cap.hasDetailPage
              ? `/ai-solutions/${cap.slug}`
              : `#ai-enquiry`;

            return (
              <article
                key={cap.id}
                className={`wk-cap-card ${cap.hasDetailPage ? 'wk-cap-card--featured' : ''}`}
              >
                {cap.hasDetailPage && (
                  <div className="wk-cap-card__featured-badge">
                    <span>Featured Detail Page</span>
                  </div>
                )}

                <div className="wk-cap-card__header">
                  <div className="wk-cap-card__icon-box">
                    {getCapabilityIcon(cap.icon)}
                  </div>
                  <div className="wk-cap-card__badges">
                    {cap.badges.map((badge) => (
                      <span key={badge} className="wk-cap-card__badge-pill">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="wk-cap-card__body">
                  <h3 className="wk-cap-card__title">
                    <a href={detailHref} className="wk-cap-card__title-link">
                      {cap.title}
                    </a>
                  </h3>
                  <p className="wk-cap-card__tagline">{cap.tagline}</p>
                  <p className="wk-cap-card__desc">{cap.description}</p>

                  <div className="wk-cap-card__outcomes">
                    <h4 className="wk-cap-card__outcomes-title">Key Engineering Outcomes:</h4>
                    <ul className="wk-cap-card__outcomes-list">
                      {cap.keyOutcomes.map((outcome, idx) => (
                        <li key={idx} className="wk-cap-card__outcome-item">
                          <span className="wk-cap-card__check" aria-hidden="true">✓</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="wk-cap-card__footer">
                  <a
                    href={detailHref}
                    className="wk-cap-card__action-link"
                    aria-label={`Learn more about ${cap.title}`}
                  >
                    <span>{cap.hasDetailPage ? 'Explore Capability Deep Dive' : 'Consult on this Solution'}</span>
                    {cap.hasDetailPage ? (
                      <ArrowUpRight className="wk-cap-card__arrow" aria-hidden="true" />
                    ) : (
                      <ArrowRight className="wk-cap-card__arrow" aria-hidden="true" />
                    )}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
