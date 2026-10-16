'use client';

import React from 'react';
import { Container } from '../../../components/Container/Container';
import { AI_PROCESS_STEPS } from '../../../data/aiSolutionsData';
import { Check, Clock, FileCheck } from 'lucide-react';

export const AIProcess: React.FC = () => {
  return (
    <section id="process" className="wk-ai-section wk-ai-process" aria-labelledby="process-heading">
      <Container size="normal">
        {/* Section Heading */}
        <div className="wk-ai-section__heading-block">
          <span className="wk-ai-section__kicker">Implementation Methodology</span>
          <h2 id="process-heading" className="wk-ai-section__title">
            The Webkorps{' '}
            <span className="wk-ai-section__title-accent">AI DLC Method</span>
          </h2>
          <p className="wk-ai-section__subtitle">
            A disciplined, 4-stage engineering lifecycle from initial feasibility assessment to hardened enterprise production and continuous MLOps telemetry.
          </p>
        </div>

        {/* Process Timeline / Cards */}
        <div className="wk-ai-process__timeline">
          {AI_PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} className="wk-process-card">
              <div className="wk-process-card__sidebar">
                <span className="wk-process-card__step-num">{step.step}</span>
                {idx < AI_PROCESS_STEPS.length - 1 && (
                  <div className="wk-process-card__connector" aria-hidden="true" />
                )}
              </div>

              <div className="wk-process-card__content">
                <div className="wk-process-card__meta">
                  <span className="wk-process-card__phase">{step.phase}</span>
                  <span className="wk-process-card__duration">
                    <Clock className="wk-process-card__clock-icon" aria-hidden="true" />
                    {step.duration}
                  </span>
                </div>

                <h3 className="wk-process-card__title">{step.title}</h3>
                <p className="wk-process-card__desc">{step.description}</p>

                <div className="wk-process-card__details-grid">
                  {/* Activities */}
                  <div className="wk-process-card__col">
                    <h4 className="wk-process-card__subheading">Core Engineering Activities:</h4>
                    <ul className="wk-process-card__list">
                      {step.activities.map((act, i) => (
                        <li key={i} className="wk-process-card__list-item">
                          <Check className="wk-process-card__check-icon" aria-hidden="true" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="wk-process-card__col wk-process-card__col--deliverables">
                    <h4 className="wk-process-card__subheading">Key Deliverables:</h4>
                    <ul className="wk-process-card__list">
                      {step.deliverables.map((del, i) => (
                        <li key={i} className="wk-process-card__list-item wk-process-card__list-item--deliv">
                          <FileCheck className="wk-process-card__deliv-icon" aria-hidden="true" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
