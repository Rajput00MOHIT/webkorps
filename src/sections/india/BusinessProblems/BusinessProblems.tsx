import React from 'react';
import './BusinessProblems.css';

interface ProblemItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PROBLEMS: ProblemItem[] = [
  {
    id: 'disconnected-systems',
    title: 'Disconnected Systems',
    description: 'Connect the tools and data your teams depend on to eliminate bottlenecks and data silos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    ),
  },
  {
    id: 'growing-requirements',
    title: 'Growing Business Requirements',
    description: 'Build software that supports changing products, scaling customer bases, and daily operations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    id: 'repetitive-manual-work',
    title: 'Repetitive Manual Work',
    description: 'Identify workflows and administrative friction that could benefit from automation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

export const BusinessProblems: React.FC = () => {
  return (
    <section className="wk-biz-problems" aria-labelledby="biz-problems-title">
      <div className="wk-biz-problems__container">
        <div className="wk-biz-problems__header">
          <h2 id="biz-problems-title" className="wk-biz-problems__title">
            When Your Business Needs More From Technology
          </h2>
          <p className="wk-biz-problems__subtitle">
            Disconnected tools, growing product requirements, and repetitive work can make it
            harder to move forward.
          </p>
        </div>

        <div className="wk-biz-problems__grid">
          {PROBLEMS.map((problem) => (
            <div key={problem.id} className="wk-biz-problems__card">
              <div className="wk-biz-problems__icon-box">
                {problem.icon}
              </div>
              <h3 className="wk-biz-problems__card-title">{problem.title}</h3>
              <p className="wk-biz-problems__card-desc">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

