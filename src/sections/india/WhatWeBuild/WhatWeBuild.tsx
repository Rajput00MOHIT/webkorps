import React from 'react';
import Link from 'next/link';
import { AssetPlaceholder } from '../../../components/AssetPlaceholder';
import './WhatWeBuild.css';

interface ServicePanel {
  id: string;
  title: string;
  description: string;
  visualLabel: string;
  visualSublabel: string;
  linkHref: string;
  linkText: string;
}

const PANELS: ServicePanel[] = [
  {
    id: 'custom-software',
    title: 'Custom Software and Enterprise Applications',
    description:
      'Build business applications tailored to your proprietary workflows, sensitive business data, and complex operational requirements.',
    visualLabel: 'CUSTOM SOFTWARE PRODUCT VISUAL',
    visualSublabel: 'Role-based portals, modular business architecture & enterprise system tools',
    linkHref: '/services',
    linkText: 'Explore Software Services',
  },
  {
    id: 'web-mobile',
    title: 'Web and Mobile Products',
    description:
      'Create high-performance digital products engineered for your customers, end-users, and distributed internal teams across web and native mobile platforms.',
    visualLabel: 'WEB AND MOBILE APP VISUAL',
    visualSublabel: 'Cross-platform mobile apps, customer dashboards & responsive web experiences',
    linkHref: '/services',
    linkText: 'Explore Product Engineering',
  },
  {
    id: 'ai-automation',
    title: 'AI, Data, and Automation',
    description:
      'Explore practical, high-ROI ways to integrate machine learning, intelligent data analytics, and workflow automation within your daily business processes.',
    visualLabel: 'AI AND ANALYTICS VISUAL',
    visualSublabel: 'Intelligent decision pipelines, automated operations & interactive analytics',
    linkHref: '/services/ai-ml-development',
    linkText: 'Explore AI & Automation',
  },
  {
    id: 'cloud-integration',
    title: 'Cloud, Integration, and Engineering Support',
    description:
      'Connect fragmented systems, modernize legacy architectures, and extend your dedicated engineering capacity with reliable technical governance.',
    visualLabel: 'CLOUD AND INTEGRATION VISUAL',
    visualSublabel: 'API gateways, resilient cloud architectures & secure system bridges',
    linkHref: '/technologies',
    linkText: 'Explore Cloud & Stacks',
  },
];

export const WhatWeBuild: React.FC = () => {
  return (
    <section className="wk-what-we-build" aria-labelledby="what-we-build-title">
      <div className="wk-what-we-build__container">
        <div className="wk-what-we-build__header">
          <span className="wk-what-we-build__eyebrow">COMPREHENSIVE CAPABILITIES</span>
          <h2 id="what-we-build-title" className="wk-what-we-build__title">
            The Technology Your Business Needs,{' '}
            <span className="wk-what-we-build__title-accent">in One Place</span>
          </h2>
          <p className="wk-what-we-build__subtitle">
            From core digital infrastructure to user-facing applications, we engineer cohesive solutions
            designed to scale with your organization.
          </p>
        </div>

        <div className="wk-what-we-build__panels">
          {PANELS.map((panel, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={panel.id}
                className={`wk-what-we-build__panel ${isReversed ? 'is-reversed' : ''}`}
              >
                <div className="wk-what-we-build__panel-content">
                  <span className="wk-what-we-build__panel-num">{`0${idx + 1}`}</span>
                  <h3 className="wk-what-we-build__panel-title">{panel.title}</h3>
                  <p className="wk-what-we-build__panel-desc">{panel.description}</p>
                  <Link
                    href={panel.linkHref}
                    className="wk-what-we-build__panel-link"
                    aria-label={`${panel.linkText} - ${panel.title}`}
                  >
                    <span>{panel.linkText}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>

                <div className="wk-what-we-build__panel-visual">
                  <AssetPlaceholder
                    label={panel.visualLabel}
                    sublabel={panel.visualSublabel}
                    height="260px"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

