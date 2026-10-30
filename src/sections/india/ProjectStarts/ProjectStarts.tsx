import React from 'react';
import './ProjectStarts.css';

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Discuss your goals, requirements, users, and existing systems.',
  },
  {
    number: '02',
    title: 'Define',
    description: 'Clarify scope, priorities, technical direction, and feasibility.',
  },
  {
    number: '03',
    title: 'Plan the Work',
    description: 'Agree on responsibilities, delivery approach, and next steps.',
  },
  {
    number: '04',
    title: 'Build and Validate',
    description: 'Develop and test the solution according to the agreed scope.',
  },
];

export const ProjectStarts: React.FC = () => {
  return (
    <section className="wk-project-starts" aria-labelledby="project-starts-title">
      <div className="wk-project-starts__container">
        <div className="wk-project-starts__header">
          <span className="wk-project-starts__eyebrow">CLEAR & STRUCTURED ENGAGEMENT</span>
          <h2 id="project-starts-title" className="wk-project-starts__title">
            From First Conversation to a{' '}
            <span className="wk-project-starts__title-accent">Clear Next Step</span>
          </h2>
          <p className="wk-project-starts__subtitle">
            A transparent, low-risk process designed to align technical delivery directly with your commercial goals.
          </p>
        </div>

        <div className="wk-project-starts__timeline">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="wk-project-starts__step">
              <div className="wk-project-starts__indicator">
                <span className="wk-project-starts__num">{step.number}</span>
                {idx < STEPS.length - 1 && (
                  <div className="wk-project-starts__connector" aria-hidden="true" />
                )}
              </div>
              <div className="wk-project-starts__details">
                <h3 className="wk-project-starts__step-title">{step.title}</h3>
                <p className="wk-project-starts__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

