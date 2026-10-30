'use client';

import React, { useState } from 'react';
import chatgptImg from '../../../assets/AI solution/AI cloud stack/image 399.png';
import claudeImg from '../../../assets/AI solution/AI cloud stack/image 400.png';
import perplexityImg from '../../../assets/AI solution/AI cloud stack/image 401.png';
import notebooklmImg from '../../../assets/AI solution/AI cloud stack/image 402.png';
import { getImgSrc } from '../../../utils/image';
import './EnterpriseAIStack.css';

const STAGES = [
  'Gathering & Research',
  'UI/UX Design',
  'Frontend & Backend Dev',
  'QA & Testing',
  'DevOps & Deployment',
  'Project Management',
  'Graphics & Creative Production',
  'SEO & Content Delivery',
];

interface AIModelLogo {
  id: string;
  name: string;
  image: any;
  alt: string;
}

const AI_MODELS: AIModelLogo[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    image: chatgptImg,
    alt: 'ChatGPT logo',
  },
  {
    id: 'claude',
    name: 'Claude',
    image: claudeImg,
    alt: 'Claude logo',
  },
  {
    id: 'perplexity',
    name: 'perplexity',
    image: perplexityImg,
    alt: 'perplexity logo',
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    image: notebooklmImg,
    alt: 'NotebookLM logo',
  },
];

export const EnterpriseAIStack: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>('Gathering & Research');

  return (
    <section className="wk-ai-stack" aria-labelledby="ai-stack-heading">
      <div className="wk-ai-stack__container">
        {/* Section Header */}
        <div className="wk-ai-stack__header">
          <h2 id="ai-stack-heading" className="wk-ai-stack__title">
            Enterprise AI <span className="wk-ai-stack__title-accent">& Cloud Stack</span>
          </h2>
          <p className="wk-ai-stack__subtitle">
            Deploy leading AI and cloud technologies for secure, scalable performance.
          </p>
        </div>

        {/* Stage Process Pills (as depicted in reference PDF) */}
        <div className="wk-ai-stack__stages" role="tablist" aria-label="Development Stages">
          {STAGES.map((stage) => {
            const isActive = stage === activeStage;
            return (
              <button
                key={stage}
                type="button"
                className={`wk-ai-stack__stage-pill ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveStage(stage)}
                role="tab"
                aria-selected={isActive}
              >
                {stage}
              </button>
            );
          })}
        </div>

        {/* Divider separator */}
        <div className="wk-ai-stack__divider" />

        {/* Primary AI Ecosystem Row: ChatGPT, Claude, Perplexity, NotebookLM */}
        <div
          className="wk-ai-stack__logos-row"
          role="region"
          aria-label="Supported AI Foundation Platforms"
        >
          {AI_MODELS.map((model) => (
            <div key={model.id} className="wk-ai-stack__logo-cell">
              <img
                src={getImgSrc(model.image)}
                alt={model.alt}
                className={`wk-ai-stack__logo-img wk-ai-stack__logo-img--${model.id}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
