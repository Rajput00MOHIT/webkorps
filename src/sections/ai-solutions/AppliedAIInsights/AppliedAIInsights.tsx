'use client';

import React from 'react';
import './AppliedAIInsights.css';

interface AIInsightItem {
  id: string;
  category: string;
  title: string;
  description: string;
}

const INSIGHTS: AIInsightItem[] = [
  {
    id: 'iot-pilots',
    category: 'AI-ML DEVELOPMENT',
    title: 'Why Industrial IoT Pilots Fail',
    description: 'Why Predictive Maintenance Pilots Fail at Scale',
  },
  {
    id: 'enterprise-rag',
    category: 'GENERATIVE AI',
    title: 'Secure Enterprise RAG',
    description: 'Secure enterprise document search with AI data protection.',
  },
  {
    id: 'agentic-ai',
    category: 'AGENTIC AI',
    title: 'Agentic AI Guide',
    description: 'Automate complex workflows with autonomous AI agents.',
  },
];

export const AppliedAIInsights: React.FC = () => {
  return (
    <section className="wk-applied-insights" aria-labelledby="applied-insights-heading">
      <div className="wk-applied-insights__container">
        {/* Centered Section Header */}
        <div className="wk-applied-insights__header">
          <h2 id="applied-insights-heading" className="wk-applied-insights__title">
            Applied <span className="wk-applied-insights__title-accent">AI Insights</span>
          </h2>
          <p className="wk-applied-insights__subtitle">
            Explore AI insights, architecture guides, and expert perspectives from WebKorps.
          </p>
        </div>

        {/* 3 Insight Cards in a single horizontal row on desktop */}
        <div className="wk-applied-insights__grid">
          {INSIGHTS.map((item) => (
            <article key={item.id} className="wk-applied-insights__card">
              {/* Category Pill */}
              <div className="wk-applied-insights__badge-wrap">
                <span className="wk-applied-insights__badge">{item.category}</span>
              </div>

              {/* Title */}
              <h3 className="wk-applied-insights__card-title">{item.title}</h3>

              {/* Description */}
              <p className="wk-applied-insights__card-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
