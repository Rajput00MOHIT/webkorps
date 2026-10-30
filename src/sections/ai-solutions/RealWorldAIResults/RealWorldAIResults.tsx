'use client';

import React from 'react';
import healthcareImg from '../../../assets/Real world ai result/AI health care.png';
import paymentImg from '../../../assets/Real world ai result/Ai payment solution.png';
import wellnessImg from '../../../assets/Real world ai result/AI mental welness.png';
import { getImgSrc } from '../../../utils/image';
import './RealWorldAIResults.css';

interface AIResultCard {
  id: string;
  titlePrefix: string;
  titleSuffix: string;
  description: string;
  image: any;
  alt: string;
  isHighlighted?: boolean;
}

const RESULT_CARDS: AIResultCard[] = [
  {
    id: 'ai-healthcare',
    titlePrefix: 'AI Healthcare',
    titleSuffix: 'Platform',
    description: 'Secure patient scheduling and clinical triage.',
    image: healthcareImg,
    alt: 'AI Healthcare Platform clinical records and stethoscope 3D illustration',
    isHighlighted: false,
  },
  {
    id: 'ai-payments',
    titlePrefix: 'AI Payment',
    titleSuffix: 'Solutions',
    description: 'Scalable payments with real-time fraud detection.',
    image: paymentImg,
    alt: 'AI Payment Solutions fraud detection money bag 3D illustration',
    isHighlighted: true,
  },
  {
    id: 'ai-mental-wellness',
    titlePrefix: 'AI Mental',
    titleSuffix: 'Wellness',
    description: 'Secure patient scheduling and clinical triage.',
    image: wellnessImg,
    alt: 'AI Mental Wellness geometric crystal blocks 3D illustration',
    isHighlighted: false,
  },
];

export const RealWorldAIResults: React.FC = () => {
  return (
    <section className="wk-ai-results" aria-labelledby="ai-results-heading">
      <div className="wk-ai-results__container">
        {/* Centered Section Header */}
        <div className="wk-ai-results__header">
          <h2 id="ai-results-heading" className="wk-ai-results__title">
            Real-World <span className="wk-ai-results__title-accent">AI Results</span>
          </h2>
          <p className="wk-ai-results__subtitle">
            Explore WebKorps’ secure, scalable AI solutions.
          </p>
        </div>

        {/* 3 Showcase Project Cards in a single horizontal row on desktop */}
        <div className="wk-ai-results__grid">
          {RESULT_CARDS.map((card) => (
            <div
              key={card.id}
              className={`wk-ai-results__card ${card.isHighlighted ? 'is-highlighted' : ''}`}
            >
              {/* Card Header: Title & Description */}
              <div className="wk-ai-results__card-header">
                <h3 className="wk-ai-results__card-title">
                  <span className="wk-ai-results__card-title-accent">{card.titlePrefix}</span>
                  <span className="wk-ai-results__card-title-text">{card.titleSuffix}</span>
                </h3>
                <p className="wk-ai-results__card-desc">{card.description}</p>
              </div>

              {/* Lower Visual Area: Real 3D Project Illustration */}
              <div className="wk-ai-results__visual-wrap">
                <img
                  src={getImgSrc(card.image)}
                  alt={card.alt}
                  className="wk-ai-results__img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
