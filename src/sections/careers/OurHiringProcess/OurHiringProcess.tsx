'use client';

import React, { useState } from 'react';
import hiringIllustration from '../../../assets/Career /our_hiring.png';
import { getImgSrc } from '../../../utils/image';
import './OurHiringProcess.css';

interface HiringStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  tags: string[];
}

const HIRING_STEPS: HiringStep[] = [
  {
    id: 'application-review',
    stepNumber: 1,
    title: 'Application Review',
    description:
      'Submit your application along with your resume, portfolio, and relevant details. Our team carefully reviews every application to understand your experience, skills, and potential fit for the role.',
    tags: ['Relevant work experience', 'Technical and professional skills'],
  },
  {
    id: 'initial-screening',
    stepNumber: 2,
    title: 'Initial Screening',
    description:
      'A short conversation with our talent acquisition team to discuss your background, aspirations, role expectations, and alignment with our culture and values.',
    tags: ['Culture & values alignment', 'Role expectations & goals'],
  },
  {
    id: 'technical-assessment',
    stepNumber: 3,
    title: 'Technical/Skill Assessment',
    description:
      'A practical evaluation designed to understand your problem-solving approach, technical depth, and domain knowledge through real-world scenarios.',
    tags: ['Practical problem-solving', 'Technical depth & architecture'],
  },
  {
    id: 'interview-rounds',
    stepNumber: 4,
    title: 'Interview Rounds',
    description:
      'In-depth discussions with engineering leaders and cross-functional team members covering past projects, collaborative experience, and system design.',
    tags: ['Cross-functional discussions', 'Leadership & system design'],
  },
  {
    id: 'offer-onboarding',
    stepNumber: 5,
    title: 'Offer & Onboarding',
    description:
      'A formal offer followed by a structured onboarding plan to integrate you seamlessly into the team and set you up for long-term growth and success.',
    tags: ['Comprehensive offer package', 'Seamless team integration'],
  },
];

/**
 * Our Hiring Process Section Component
 * Source of Truth: Figma node 1233-12979 & reference screenshot
 * Features:
 * - Left-aligned header with "Hiring Process" highlighted in Webkorps blue (#1887C9)
 * - 2-column layout:
 *   - Left: Visual panel with dynamic "Step X" pill badge & 3D hiring asset
 *   - Right: 5-step accordion with smooth expand/collapse & tag pills
 * - Accessible accordion semantics and keyboard interaction
 * - Responsive desktop to mobile adaptations
 */
export const OurHiringProcess: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('application-review');

  const activeStep =
    HIRING_STEPS.find((step) => step.id === activeStepId) || HIRING_STEPS[0];

  const handleToggle = (stepId: string) => {
    setActiveStepId((prev) => (prev === stepId ? '' : stepId));
  };

  return (
    <section
      id="our-hiring-process"
      className="wk-hiring-process"
      aria-labelledby="hiring-process-heading"
    >
      <div className="wk-hiring-process__container">
        {/* Section Header */}
        <header className="wk-hiring-process__header">
          <h2 id="hiring-process-heading" className="wk-hiring-process__title">
            Our <span className="wk-hiring-process__title--accent">Hiring Process</span>
          </h2>
          <p className="wk-hiring-process__subtitle">
            At Webkorps, we follow a simple and transparent hiring process to find the right talent.
          </p>
        </header>

        {/* 2-Column Main Layout */}
        <div className="wk-hiring-process__layout">
          {/* Left Column: Visual Panel */}
          <div className="wk-hiring-process__visual-panel" aria-hidden="true">
            {/* Dynamic Step Pill Badge */}
            <div className="wk-hiring-process__step-badge">
              Step {activeStep ? activeStep.stepNumber : 1}
            </div>

            {/* Centered 3D Recruitment/Person Illustration */}
            <div className="wk-hiring-process__img-wrap">
              <img
                src={getImgSrc(hiringIllustration)}
                alt="Webkorps hiring process 3D illustration"
                className="wk-hiring-process__img"
                width={480}
                height={588}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Hiring Process Accordion */}
          <div
            className="wk-hiring-process__accordion"
            role="region"
            aria-label="Hiring Process Steps"
          >
            {HIRING_STEPS.map((step) => {
              const isExpanded = activeStepId === step.id;
              const contentId = `hiring-step-content-${step.id}`;
              const buttonId = `hiring-step-btn-${step.id}`;

              return (
                <div
                  key={step.id}
                  className={`wk-hiring-process__item ${
                    isExpanded ? 'wk-hiring-process__item--expanded' : ''
                  }`}
                >
                  {/* Step Trigger Button */}
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                    className="wk-hiring-process__trigger"
                    onClick={() => handleToggle(step.id)}
                  >
                    <span
                      className={`wk-hiring-process__item-title ${
                        isExpanded ? 'wk-hiring-process__item-title--active' : ''
                      }`}
                    >
                      {step.title}
                    </span>
                    <span
                      className="wk-hiring-process__icon"
                      aria-hidden="true"
                    >
                      {isExpanded ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 8H13"
                            stroke="#0F172A"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 3V13M3 8H13"
                            stroke="#0F172A"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Step Content */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`wk-hiring-process__content ${
                      isExpanded ? 'wk-hiring-process__content--open' : ''
                    }`}
                  >
                    <div className="wk-hiring-process__content-inner">
                      <p className="wk-hiring-process__desc">
                        {step.description}
                      </p>
                      {step.tags && step.tags.length > 0 && (
                        <div
                          className="wk-hiring-process__tags"
                          aria-label="Key evaluation focus"
                        >
                          {step.tags.map((tag) => (
                            <span key={tag} className="wk-hiring-process__tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHiringProcess;
