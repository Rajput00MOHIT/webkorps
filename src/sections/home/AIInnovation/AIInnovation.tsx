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
}

const AI_CARDS_DATA: AICardItem[] = [
  {
    id: 'how-we-use-ai',
    title: 'How We Put AI to Work',
    description:
      'We turn data into direction, automate the everyday, and build intelligent digital products that solve real business challenges and unlock new possibilities.',
    image: aiHowWeUse,
    imageAlt: 'AI assistant prompt interface for analyzing data and automating tasks',
  },
  {
    id: 'how-ai-helps-business',
    title: 'How AI Helps Your Business/Making Every AI Move Count ',
    description:
      'Put AI to work where it matters most. Automate repetitive tasks, accelerate data-driven decisions, streamline operations, and create personalized customer experiences with intelligent solutions aligned with your business goals. ',
    image: aiHelpsBusiness,
    imageAlt:
      'AI business outcome flow connecting manual effort reduction, better decisions, efficiency gains, and improved customer experiences',
  },
  {
    id: 'ai-dlc-method',
    title: 'Our AI DLC Method',
    description:
      'We identify business challenges, leverage the right AI models, tools, and technologies, and build, integrate, and refine intelligent solutions that fit your workflows and support measurable business outcomes.',
    image: aiDlcMethod,
    imageAlt: 'AI DLC lifecycle diagram depicting Inception, Construction, and Operations stages',
  },
  {
    id: 'make-saas-smarter',
    title: 'Same SaaS. Smarter Moves with AI.',
    description:
      'Turn your SaaS into a more intelligent product with AI assistants, semantic search, personalized recommendations, and workflow automation. We help you identify high-impact use cases and build AI-powered experiences that deliver real value.',
    image: aiSaasSmarter,
    imageAlt: 'SaaS software application window highlighting AI search and assistant capabilities',
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
            AI That Gets<br />
            <span className="wk-ai-innovation__title-accent">Down to Business</span>
          </h2>
        </div>

        <div className="wk-ai-innovation__grid">
          {AI_CARDS_DATA.map((card, index) => (
            <article
              key={card.id}
              className="wk-ai-card"
              style={{ transitionDelay: `${index * 100}ms` }}
              tabIndex={0}
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
                <h3 className="wk-ai-card__heading">{card.title}</h3>
                <p className="wk-ai-card__description">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
