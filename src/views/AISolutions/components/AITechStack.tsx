'use client';

import React from 'react';
import { Container } from '../../../components/Container/Container';
import { AI_TECH_CATEGORIES } from '../../../data/aiSolutionsData';
import { Cpu, Database, Network, Cloud } from 'lucide-react';

function getCategoryIcon(idx: number) {
  switch (idx) {
    case 0:
      return <Cpu className="wk-tech-card__icon" aria-hidden="true" />;
    case 1:
      return <Database className="wk-tech-card__icon" aria-hidden="true" />;
    case 2:
      return <Network className="wk-tech-card__icon" aria-hidden="true" />;
    case 3:
      return <Cloud className="wk-tech-card__icon" aria-hidden="true" />;
    default:
      return <Cpu className="wk-tech-card__icon" aria-hidden="true" />;
  }
}

export const AITechStack: React.FC = () => {
  return (
    <section className="wk-ai-section wk-ai-tech-stack" aria-labelledby="tech-heading">
      <Container size="normal">
        {/* Section Heading */}
        <div className="wk-ai-section__heading-block">
          <span className="wk-ai-section__kicker">Ecosystem & Integrations</span>
          <h2 id="tech-heading" className="wk-ai-section__title">
            Enterprise AI Stack &{' '}
            <span className="wk-ai-section__title-accent">Cloud Infrastructure</span>
          </h2>
          <p className="wk-ai-section__subtitle">
            We partner with and deploy leading AI model providers, vector engines, and enterprise cloud frameworks to ensure maximum performance, security, and portability.
          </p>
        </div>

        {/* Tech Categories 2x2 Grid */}
        <div className="wk-ai-tech-stack__grid">
          {AI_TECH_CATEGORIES.map((cat, idx) => (
            <div key={cat.category} className="wk-tech-card">
              <div className="wk-tech-card__header">
                <div className="wk-tech-card__icon-box">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="wk-tech-card__title">{cat.category}</h3>
                  <p className="wk-tech-card__desc">{cat.description}</p>
                </div>
              </div>

              <div className="wk-tech-card__body">
                <div className="wk-tech-card__items-grid">
                  {cat.technologies.map((tech) => (
                    <div key={tech.name} className="wk-tech-badge">
                      <span className="wk-tech-badge__name">{tech.name}</span>
                      <span className="wk-tech-badge__type">{tech.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
