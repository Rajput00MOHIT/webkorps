'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../../../components/Container/Container';
import aiHowWeUse from '../../../assets/ai/ai-how-we-use.png';
import aiHelpsBusiness from '../../../assets/ai/ai-helps-business.png';
import aiDlcMethod from '../../../assets/ai/ai-dlc-method.png';
import aiSaasSmarter from '../../../assets/ai/ai-saas-smarter.png';
import { getImgSrc } from '../../../utils/image';
import './AIInnovation.css';

interface AICardItem {
  id: string;
  title: string;
  description: string;
  image: string | any;
  imageAlt: string;
  href?: string;
  ctaText?: string;
}

const AI_CARDS_DATA: AICardItem[] = [
  {
    id: 'how-we-use-ai',
    title: 'How We Use AI',
    description:
      'We use AI to automate tasks, analyze data, and build smarter digital experiences tailored to business needs.',
    image: aiHowWeUse,
    imageAlt: 'AI assistant prompt interface for analyzing data and automating tasks',
    href: '/ai-solutions',
    ctaText: 'Explore AI Solutions',
  },
  {
    id: 'how-ai-helps-business',
    title: 'How AI Helps Your Business',
    description:
      'AI helps reduce manual effort, improve decisions, increase efficiency, and create better customer experiences.',
    image: aiHelpsBusiness,
    imageAlt:
      'AI business outcome flow connecting manual effort reduction, better decisions, efficiency gains, and improved customer experiences',
    href: '/ai-solutions#business-impact',
    ctaText: 'See Business Impact',
  },
  {
    id: 'ai-dlc-method',
    title: 'Our AI DLC Method',
    description:
      'Discover opportunities, leverage the right AI, and create smarter solutions that deliver real business value.',
    image: aiDlcMethod,
    imageAlt: 'AI DLC lifecycle diagram depicting Inception, Construction, and Operations stages',
    href: '/ai-solutions#process',
    ctaText: 'View AI Lifecycle',
  },
  {
    id: 'make-saas-smarter',
    title: 'Make Your SaaS Smarter With AI',
    description:
      'We identify the right AI opportunities for your SaaS from AI assistants and smart search to automation, recommendations.',
    image: aiSaasSmarter,
    imageAlt: 'SaaS software application window highlighting AI search and assistant capabilities',
    href: '/ai-solutions/generative-ai-enterprise-llm',
    ctaText: 'Explore SaaS AI',
  },
];

export const AIInnovation: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`wk-ai-innovation ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="ai-heading"
    >
      <Container>
        <div className="wk-ai-innovation__header">
          <h2 id="ai-heading" className="wk-ai-innovation__title">
            AI-Powered Innovation<br />
            <span className="wk-ai-innovation__title-accent">for Your Business</span>
          </h2>
        </div>

        <div className="wk-ai-innovation__grid">
          {AI_CARDS_DATA.map((card, index) => {
            const isClickable = Boolean(card.href);
            const CardWrapper = isClickable ? 'a' : 'article';
            const wrapperProps = isClickable
              ? {
                  href: card.href,
                  'aria-label': `${card.title} - ${card.ctaText || 'Learn more'}`,
                }
              : {
                  tabIndex: 0,
                };

            return (
              <CardWrapper
                key={card.id}
                className={`wk-ai-card ${isClickable ? 'wk-ai-card--clickable' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                {...wrapperProps}
              >
                <div className="wk-ai-card__visual">
                  <img
                    src={getImgSrc(card.image)}
                    alt={card.imageAlt}
                    className="wk-ai-card__image"
                    loading="lazy"
                    width="661"
                    height="391"
                  />
                </div>
                <div className="wk-ai-card__content">
                  <div className="wk-ai-card__title-row">
                    <h3 className="wk-ai-card__heading">{card.title}</h3>
                    {isClickable && (
                      <span className="wk-ai-card__arrow-badge" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <p className="wk-ai-card__description">{card.description}</p>
                  {isClickable && card.ctaText && (
                    <div className="wk-ai-card__footer">
                      <span className="wk-ai-card__cta-label">
                        {card.ctaText}
                        <span className="wk-ai-card__cta-arrow">→</span>
                      </span>
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
