import React from 'react';
import './WhyWebkorps.css';

interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DIFFERENTIATORS: Differentiator[] = [
  {
    id: 'business-first',
    title: 'Business-First Thinking',
    description: 'Start with the requirement and desired outcome before choosing a technical approach.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 'connected-engineering',
    title: 'Connected Engineering',
    description: 'Consider the product, integrations, data, and existing systems together to prevent isolated solutions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    id: 'clear-collaboration',
    title: 'Clear Collaboration',
    description: 'Make scope, responsibilities, and communication expectations clear at every project phase.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'built-to-evolve',
    title: 'Built to Evolve',
    description: 'Consider maintainability, security, and future requirements from the very beginning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export const WhyWebkorps: React.FC = () => {
  return (
    <section className="wk-why-webkorps" aria-labelledby="why-webkorps-title">
      <div className="wk-why-webkorps__container">
        <div className="wk-why-webkorps__header">
          <span className="wk-why-webkorps__eyebrow">OUR ENGAGEMENT PHILOSOPHY</span>
          <h2 id="why-webkorps-title" className="wk-why-webkorps__title">
            A Technology Partner That Understands the{' '}
            <span className="wk-why-webkorps__title-accent">Bigger Picture</span>
          </h2>
        </div>

        <div className="wk-why-webkorps__grid">
          {DIFFERENTIATORS.map((diff) => (
            <div key={diff.id} className="wk-why-webkorps__card">
              <div className="wk-why-webkorps__icon-box">{diff.icon}</div>
              <h3 className="wk-why-webkorps__card-title">{diff.title}</h3>
              <p className="wk-why-webkorps__card-desc">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

