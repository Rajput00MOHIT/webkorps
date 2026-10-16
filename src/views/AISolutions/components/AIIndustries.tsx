'use client';

import React, { useState } from 'react';
import { Container } from '../../../components/Container/Container';
import { AI_INDUSTRIES_DATA } from '../../../data/aiSolutionsData';
import { Activity, CreditCard, Truck, Cpu, Layout, CheckCircle2 } from 'lucide-react';

function getIndustryIcon(icon: string) {
  switch (icon) {
    case 'activity':
      return <Activity className="wk-ind-tab__icon" aria-hidden="true" />;
    case 'credit-card':
      return <CreditCard className="wk-ind-tab__icon" aria-hidden="true" />;
    case 'truck':
      return <Truck className="wk-ind-tab__icon" aria-hidden="true" />;
    case 'cpu':
      return <Cpu className="wk-ind-tab__icon" aria-hidden="true" />;
    case 'layout':
      return <Layout className="wk-ind-tab__icon" aria-hidden="true" />;
    default:
      return <Activity className="wk-ind-tab__icon" aria-hidden="true" />;
  }
}

export const AIIndustries: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(AI_INDUSTRIES_DATA[0].id);
  const activeIndustry = AI_INDUSTRIES_DATA.find((i) => i.id === activeTab) || AI_INDUSTRIES_DATA[0];

  return (
    <section id="business-impact" className="wk-ai-section wk-ai-industries" aria-labelledby="industries-heading">
      <Container size="normal">
        {/* Section Heading */}
        <div className="wk-ai-section__heading-block">
          <span className="wk-ai-section__kicker">Industry Applications</span>
          <h2 id="industries-heading" className="wk-ai-section__title">
            Domain-Specific AI for{' '}
            <span className="wk-ai-section__title-accent">Mission-Critical Sectors</span>
          </h2>
          <p className="wk-ai-section__subtitle">
            Generic AI models fail in regulated sectors. We build domain-adapted solutions engineered for strict compliance, zero data loss, and seamless operational continuity.
          </p>
        </div>

        {/* Industry Tabs Bar */}
        <div className="wk-ai-industries__tabs" role="tablist" aria-label="Industries">
          {AI_INDUSTRIES_DATA.map((ind) => {
            const isSelected = ind.id === activeTab;
            return (
              <button
                key={ind.id}
                role="tab"
                id={`tab-${ind.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${ind.id}`}
                className={`wk-ind-tab ${isSelected ? 'wk-ind-tab--active' : ''}`}
                onClick={() => setActiveTab(ind.id)}
              >
                {getIndustryIcon(ind.icon)}
                <span className="wk-ind-tab__label">{ind.industry}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Panel */}
        <div
          id={`panel-${activeIndustry.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeIndustry.id}`}
          className="wk-ind-panel"
        >
          <div className="wk-ind-panel__top">
            <div className="wk-ind-panel__badge-wrap">
              <span className="wk-ind-panel__badge">{activeIndustry.badge}</span>
              <span className="wk-ind-panel__industry-label">{activeIndustry.industry}</span>
            </div>
            <h3 className="wk-ind-panel__headline">{activeIndustry.title}</h3>
          </div>

          <div className="wk-ind-panel__content-grid">
            <div className="wk-ind-panel__col wk-ind-panel__col--challenge">
              <h4 className="wk-ind-panel__col-title">The Operational Challenge</h4>
              <p className="wk-ind-panel__col-text">{activeIndustry.challenge}</p>
            </div>

            <div className="wk-ind-panel__col wk-ind-panel__col--solution">
              <h4 className="wk-ind-panel__col-title">Webkorps AI Engineering</h4>
              <p className="wk-ind-panel__col-text">{activeIndustry.solution}</p>
            </div>
          </div>

          <div className="wk-ind-panel__outcomes">
            <h4 className="wk-ind-panel__outcomes-title">Verified Implementation Outcomes:</h4>
            <div className="wk-ind-panel__outcomes-grid">
              {activeIndustry.verifiedOutcomes.map((item, idx) => (
                <div key={idx} className="wk-ind-outcome-card">
                  <CheckCircle2 className="wk-ind-outcome-card__icon" aria-hidden="true" />
                  <p className="wk-ind-outcome-card__text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
