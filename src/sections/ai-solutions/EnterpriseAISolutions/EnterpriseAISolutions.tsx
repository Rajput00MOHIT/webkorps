'use client';

import React from 'react';
import Link from 'next/link';
import genAiImg from '../../../assets/AI solution/Generative AI & Enterprise LLMs.png';
import agenticImg from '../../../assets/AI solution/Agentic AI & Autonomous.png';
import predictiveImg from '../../../assets/AI solution/Predictive Analytics & Machine Learning.png';
import visionImg from '../../../assets/AI solution/Computer Vision & Multimodal AI.png';
import saasImg from '../../../assets/AI solution/SaaS AI Modernization & Copilots.png';
import governanceImg from '../../../assets/AI solution/Enterprise AI Governance & MLOps.png';
import { getImgSrc } from '../../../utils/image';
import './EnterpriseAISolutions.css';

interface AISolutionItem {
  id: string;
  title: string;
  tags: string[];
  description: string;
  image: any;
  imageAlt: string;
}

const SOLUTIONS: AISolutionItem[] = [
  {
    id: 'generative-ai',
    title: 'Generative AI &\nEnterprise LLMs',
    tags: ['Enterprise RAG', 'Private LLMs', 'Guardrails'],
    description:
      'Build secure, private LLMs and AI copilots with reliable RAG pipelines and strict data protection.',
    image: genAiImg,
    imageAlt: '3D isometric AI neural processor chip and document RAG pipeline illustration',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI &\nAutonomous',
    tags: ['Human-in-the-Loop', 'Autonomous Agents', 'Tool Calling'],
    description:
      'Build autonomous AI agents to automate complex workflows with secure integrations and human oversight.',
    image: agenticImg,
    imageAlt: '3D futuristic AI robot head assistant with speech bubbles on glowing round platform',
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics\n& Machine Learning',
    tags: ['Time-Series', 'Risk Scoring', 'Anomaly Detection'],
    description:
      'Develop predictive AI models for forecasting, fraud detection, demand planning, and customer value optimization.',
    image: predictiveImg,
    imageAlt: '3D robot displaying glowing dynamic data analytics chart in hands',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision &\nMultimodal AI',
    tags: ['Edge Vision', 'Document OCR', 'Visual QA'],
    description:
      'Deploy scalable AI vision solutions for defect detection, document processing, and spatial intelligence.',
    image: visionImg,
    imageAlt: '3D futuristic laptop displaying computer vision analytics and document OCR interface',
  },
  {
    id: 'saas-modernization',
    title: 'SaaS AI Modernization\n& Copilots',
    tags: ['Copilot Sidecars', 'NL-to-SQL', 'Multi-Tenant AI'],
    description:
      'Integrate AI search, smart assistants, and natural-language data queries into existing SaaS platforms.',
    image: saasImg,
    imageAlt: '3D floating SaaS application interface window with smart chat assistants and graphs',
  },
  {
    id: 'ai-governance',
    title: 'Enterprise AI\nGovernance & MLOps',
    tags: ['Copilot Sidecars', 'NL-to-SQL', 'Multi-Tenant AI'],
    description:
      'Automate AI testing, cost monitoring, data privacy, and compliance across the AI lifecycle.',
    image: governanceImg,
    imageAlt: '3D AI assistant standing on open hand surrounded by enterprise governance telemetry nodes',
  },
];

export const EnterpriseAISolutions: React.FC = () => {
  return (
    <section
      id="enterprise-ai-solutions"
      className="wk-ent-ai"
      aria-labelledby="enterprise-ai-heading"
    >
      <div className="wk-ent-ai__container">
        {/* Centered Section Heading */}
        <div className="wk-ent-ai__header">
          <h2 id="enterprise-ai-heading" className="wk-ent-ai__title">
            Enterprise <span className="wk-ent-ai__title-accent">AI Solutions</span> at Scale
          </h2>
          <p className="wk-ent-ai__subtitle">
            Build scalable, secure AI systems for enterprise growth.
          </p>
        </div>

        {/* 6 Alternating Solution Blocks */}
        <div className="wk-ent-ai__blocks">
          {SOLUTIONS.map((sol, index) => {
            const isReversed = index % 2 === 1; // odd index has image on left, text on right
            return (
              <div
                key={sol.id}
                className={`wk-ent-ai__row ${isReversed ? 'is-reversed' : ''}`}
              >
                {/* Content Side */}
                <div className="wk-ent-ai__content">
                  <h3 className="wk-ent-ai__row-title">
                    {sol.title.split('\n').map((line, i) => (
                      <span key={i} className="wk-ent-ai__row-title-line">
                        {line}
                      </span>
                    ))}
                  </h3>

                  {/* Capability Tags */}
                  <div className="wk-ent-ai__tags">
                    {sol.tags.map((tag) => (
                      <span key={tag} className="wk-ent-ai__tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="wk-ent-ai__desc">{sol.description}</p>

                  {/* Consultation CTA Button */}
                  <Link
                    href="/contact-us"
                    className="wk-ent-ai__btn"
                    aria-label={`Consult on this Solution: ${sol.title.replace('\n', ' ')}`}
                  >
                    <span>Consult on this Solution</span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>

                {/* Visual Side */}
                <div className="wk-ent-ai__visual">
                  <div className="wk-ent-ai__img-wrap">
                    <img
                      src={getImgSrc(sol.image)}
                      alt={sol.imageAlt}
                      className="wk-ent-ai__img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
