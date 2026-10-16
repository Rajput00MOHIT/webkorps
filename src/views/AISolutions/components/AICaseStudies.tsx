'use client';

import React from 'react';
import { Container } from '../../../components/Container/Container';
import { AI_CASE_STUDIES_DATA } from '../../../data/aiSolutionsData';
import { Building2, ArrowRight } from 'lucide-react';

export const AICaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="wk-ai-section wk-ai-case-studies" aria-labelledby="cases-heading">
      <Container size="normal">
        {/* Section Heading */}
        <div className="wk-ai-section__heading-block">
          <span className="wk-ai-section__kicker">Verified Client Evidence</span>
          <h2 id="cases-heading" className="wk-ai-section__title">
            Proven Outcomes from{' '}
            <span className="wk-ai-section__title-accent">Real Deployments</span>
          </h2>
          <p className="wk-ai-section__subtitle">
            Explore how Webkorps engineers production AI and high-concurrency digital platforms that withstand rigorous compliance and enterprise scale.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="wk-ai-case-studies__grid">
          {AI_CASE_STUDIES_DATA.map((cs) => (
            <article key={cs.id} className="wk-ai-cs-card">
              <div className="wk-ai-cs-card__header">
                <div className="wk-ai-cs-card__client-row">
                  <span className="wk-ai-cs-card__industry">{cs.industry}</span>
                </div>
                <h3 className="wk-ai-cs-card__title">{cs.title}</h3>
                <div className="wk-ai-cs-card__client-tag">
                  <Building2 className="wk-ai-cs-card__building-icon" aria-hidden="true" />
                  <span>{cs.client}</span>
                </div>
              </div>

              <div className="wk-ai-cs-card__body">
                <div className="wk-ai-cs-card__narrative">
                  <h4 className="wk-ai-cs-card__label">The Business Challenge:</h4>
                  <p className="wk-ai-cs-card__text">{cs.challenge}</p>
                </div>

                <div className="wk-ai-cs-card__narrative">
                  <h4 className="wk-ai-cs-card__label">Webkorps Solution:</h4>
                  <p className="wk-ai-cs-card__text">{cs.solution}</p>
                </div>

                {/* Quantitative Impact Metrics */}
                <div className="wk-ai-cs-card__metrics">
                  <h4 className="wk-ai-cs-card__metrics-title">Verified Impact:</h4>
                  <div className="wk-ai-cs-card__metrics-grid">
                    {cs.impactMetrics.map((metric, idx) => (
                      <div key={idx} className="wk-ai-cs-metric">
                        <span className="wk-ai-cs-metric__value">{metric.value}</span>
                        <span className="wk-ai-cs-metric__label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="wk-ai-cs-card__tech">
                  {cs.techStack.map((tech) => (
                    <span key={tech} className="wk-ai-cs-card__tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="wk-ai-cs-card__footer">
                <a href="#ai-enquiry" className="wk-ai-cs-card__link">
                  <span>Inquire About Similar Architectures</span>
                  <ArrowRight className="wk-ai-cs-card__arrow" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
