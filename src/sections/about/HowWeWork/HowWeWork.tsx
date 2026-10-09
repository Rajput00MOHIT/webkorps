'use client';

import React, { useState } from 'react';
import {
  UnderstandIcon,
  PlanIcon,
  DesignIcon,
  BuildIcon,
  TestIcon,
  DeliverIcon,
} from './HowWeWorkIcons';
import { HowWeWorkPreview, WizardState } from './HowWeWorkPreview';
import './HowWeWork.css';

interface StepConfig {
  step: number;
  label: string;
  badge: string;
  title: string;
  description: string;
  field: keyof Omit<WizardState, 'currentStep' | 'isComplete'>;
  options: string[];
}

const STEPS: StepConfig[] = [
  {
    step: 1,
    label: 'Understand',
    badge: 'Step 1: Understand',
    title: 'What do you want to build?',
    description: 'Choose one idea. The empty product box will convert into that product base.',
    field: 'productType',
    options: ['Website', 'Mobile App', 'AI Tool', 'Enterprise Software'],
  },
  {
    step: 2,
    label: 'Plan',
    badge: 'Step 2: Plan',
    title: 'What core feature should we plan first?',
    description: 'Your selected feature will create visible structure inside the product.',
    field: 'coreFeature',
    options: ['Dashboard', 'Login', 'Payment', 'Reports'],
  },
  {
    step: 3,
    label: 'Design',
    badge: 'Step 3: Design',
    title: 'Choose your design direction',
    description: 'Your product will visually change with color, spacing, typography, and UI style.',
    field: 'designDirection',
    options: ['Minimal', 'Modern', 'Bold', 'Enterprise'],
  },
  {
    step: 4,
    label: 'Build',
    badge: 'Step 4: Build',
    title: 'Which development layer should we add?',
    description: 'Each layer creates a different technical action around the product.',
    field: 'developmentLayer',
    options: ['Frontend', 'Backend', 'Database', 'API'],
  },
  {
    step: 5,
    label: 'Test',
    badge: 'Step 5: Test',
    title: 'Which quality check should we run?',
    description: 'Each check runs a visible validation effect on your product.',
    field: 'qualityCheck',
    options: ['Speed', 'Security', 'Usability', 'Responsive'],
  },
  {
    step: 6,
    label: 'Deliver',
    badge: 'Step 6: Deliver',
    title: 'How should we grow after launch?',
    description: 'Your final selection adds a live improvement effect after launch.',
    field: 'growthApproach',
    options: ['Monitor', 'Optimize', 'Scale', 'Support'],
  },
];

export const HowWeWork: React.FC = () => {
  const [wizardState, setWizardState] = useState<WizardState>({
    currentStep: 1,
    productType: null,
    coreFeature: null,
    designDirection: null,
    developmentLayer: null,
    qualityCheck: null,
    growthApproach: null,
    isComplete: false,
  });

  const activeStepConfig = STEPS[wizardState.currentStep - 1] || STEPS[0];
  const selectedOption = wizardState[activeStepConfig.field];
  const canContinue = !!selectedOption;

  // Handle option selection
  const handleSelectOption = (option: string) => {
    setWizardState((prev) => ({
      ...prev,
      [activeStepConfig.field]: option,
    }));
  };

  // Step advancement
  const handleContinue = () => {
    if (!canContinue) return;

    if (wizardState.currentStep < 6) {
      setWizardState((prev) => ({
        ...prev,
        currentStep: prev.currentStep + 1,
      }));
    } else {
      setWizardState((prev) => ({
        ...prev,
        isComplete: true,
      }));
    }
  };

  // Step back
  const handleBack = () => {
    if (wizardState.currentStep > 1) {
      setWizardState((prev) => ({
        ...prev,
        currentStep: prev.currentStep - 1,
        isComplete: false,
      }));
    }
  };

  // Step tracker direct jump
  const handleJumpToStep = (targetStep: number) => {
    // Only allow navigating to past completed steps or current step
    if (targetStep <= wizardState.currentStep || wizardState.isComplete) {
      setWizardState((prev) => ({
        ...prev,
        currentStep: targetStep,
      }));
    }
  };

  // Render Step Icon in Progress Tracker
  const renderStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <UnderstandIcon />;
      case 2:
        return <PlanIcon />;
      case 3:
        return <DesignIcon />;
      case 4:
        return <BuildIcon />;
      case 5:
        return <TestIcon />;
      case 6:
        return <DeliverIcon />;
      default:
        return null;
    }
  };

  return (
    <section className="wk-how-we-work" aria-labelledby="how-we-work-heading">
      <div className="site-container wk-how-we-work__container">
        {/* Section Header */}
        <div className="wk-how-we-work__header">
          <h2 id="how-we-work-heading" className="wk-how-we-work__title">
            How <span className="wk-how-we-work__title-accent">We Work</span>
          </h2>
          <p className="wk-how-we-work__subtitle">
            Explore Each Step of Our Process and See How We Build Your Digital Product
          </p>
        </div>

        {/* Six-Step Horizontal Progress Tracker */}
        <div
          className="wk-how-we-work__tracker"
          role="tablist"
          aria-label="How We Work Progress Steps"
        >
          <div className="wk-how-we-work__tracker-track">
            {STEPS.map((s) => {
              const isCompleted = s.step < wizardState.currentStep || wizardState.isComplete;
              const isActive = s.step === wizardState.currentStep && !wizardState.isComplete;
              const isClickable = s.step <= wizardState.currentStep || wizardState.isComplete;

              return (
                <button
                  key={s.step}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Step ${s.step}: ${s.label}`}
                  disabled={!isClickable}
                  onClick={() => handleJumpToStep(s.step)}
                  className={`wk-how-we-work__tracker-btn ${
                    isCompleted ? 'is-completed' : ''
                  } ${isActive ? 'is-active' : ''}`}
                >
                  <div className="wk-how-we-work__tracker-icon-circle">
                    {renderStepIcon(s.step)}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Two-Column Wizard Area */}
        <div className="wk-how-we-work__wizard-grid">
          {/* Left Column: Interactive Step Controls */}
          <div className="wk-how-we-work__controls-col">
            {/* Step Badge */}
            <div className="wk-how-we-work__badge">{activeStepConfig.badge}</div>

            {/* Step Heading */}
            <h3 className="wk-how-we-work__step-title">{activeStepConfig.title}</h3>

            {/* Step Description */}
            <p className="wk-how-we-work__step-desc">{activeStepConfig.description}</p>

            {/* Option Pills */}
            <div
              className="wk-how-we-work__options-list"
              role="radiogroup"
              aria-label={activeStepConfig.title}
            >
              {activeStepConfig.options.map((option) => {
                const isSelected = selectedOption === option;

                return (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectOption(option)}
                    className={`wk-how-we-work__option-btn ${isSelected ? 'is-selected' : ''}`}
                  >
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Actions */}
            <div className="wk-how-we-work__nav-actions">
              {wizardState.currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="wk-how-we-work__back-btn"
                  aria-label="Go back to previous step"
                >
                  ← Back
                </button>
              )}

              <button
                type="button"
                disabled={!canContinue}
                onClick={handleContinue}
                className="wk-how-we-work__continue-btn"
                aria-label={
                  wizardState.currentStep === 6
                    ? 'Complete My Plan'
                    : 'Look this Step and Continue'
                }
              >
                <span>
                  {wizardState.currentStep === 6
                    ? 'Complete My Plan'
                    : 'Look this Step & Continue'}
                </span>
                <span className="wk-how-we-work__btn-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Synchronized Browser Preview */}
          <div className="wk-how-we-work__preview-col">
            <HowWeWorkPreview state={wizardState} />
          </div>
        </div>
      </div>
    </section>
  );
};
