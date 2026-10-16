'use client';

import React from 'react';
import { Container } from '../../../components/Container/Container';
import { AI_INSIGHTS_DATA } from '../../../data/aiSolutionsData';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

export const AIInsights: React.FC = () => {
  return (
    <section className="wk-ai-section wk-ai-insights" aria-labelledby="insights-heading">
      <Container size="normal">
        {/* Section Heading */}
        <div className="wk-ai-section__heading-block">
          <span className="wk-ai-section__kicker">Insights & Whitepapers</span>
          <h2 id="insights-heading" className="wk-ai-section__title">
            Engineering Perspectives on{' '}
            <span className="wk-ai-section__title-accent">Applied AI</span>
          </h2>
          <p className="wk-ai-section__subtitle">
            Read technical blueprints, architecture patterns, and executive briefs authored by Webkorps AI practice leaders.
          </p>
        </div>

        {/* Insights 3-column Grid */}
        <div className="wk-ai-insights__grid">
          {AI_INSIGHTS_DATA.map((item) => (
            <article key={item.id} className="wk-insight-card">
              <div className="wk-insight-card__meta">
                <span className="wk-insight-card__category">{item.category}</span>
                <span className="wk-insight-card__read-time">
                  <Clock className="wk-insight-card__clock" aria-hidden="true" />
                  {item.readTime}
                </span>
              </div>

              <h3 className="wk-insight-card__title">
                <a href="/#insights" className="wk-insight-card__link-title">
                  {item.title}
                </a>
              </h3>

              <p className="wk-insight-card__summary">{item.summary}</p>

              <div className="wk-insight-card__footer">
                <a href="/#insights" className="wk-insight-card__read-link">
                  <BookOpen className="wk-insight-card__book-icon" aria-hidden="true" />
                  <span>Read Full Article</span>
                  <ArrowRight className="wk-insight-card__arrow" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
