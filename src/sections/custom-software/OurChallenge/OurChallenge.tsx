'use client';

import React, { useRef, useState, useEffect } from 'react';
import automateImg from '../../../assets/services/business-outcomes/automate-operations.png';
import smarterDecisionsImg from '../../../assets/services/business-outcomes/smarter-decisions.png';
import seamlessExpImg from '../../../assets/services/business-outcomes/seamless-experiences.png';
import scaleLimitsImg from '../../../assets/services/business-outcomes/scale-without-limits.png';
import { getImgSrc } from '../../../utils/image';
import './OurChallenge.css';

interface BusinessOutcomeItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: any;
  imageAlt: string;
}

const BUSINESS_OUTCOMES: BusinessOutcomeItem[] = [
  {
    id: 'automate-operations',
    number: '01',
    title: 'Automate Operations',
    description: 'Eliminate repetitive tasks, streamline workflows, and improve operational efficiency.',
    image: automateImg,
    imageAlt: 'Automate operations with streamlined workflows and process automation 3D illustration',
  },
  {
    id: 'smarter-decisions',
    number: '02',
    title: 'Make Smarter Decisions',
    description: 'Turn business data into actionable insights for faster, more informed decisions.',
    image: smarterDecisionsImg,
    imageAlt: 'Make smarter decisions with actionable data insights 3D illustration',
  },
  {
    id: 'seamless-experiences',
    number: '03',
    title: 'Create Seamless Experiences',
    description: 'Connect systems, simplify interactions, and deliver better customer and employee experiences.',
    image: seamlessExpImg,
    imageAlt: 'Create seamless customer and employee experiences across connected systems 3D illustration',
  },
  {
    id: 'scale-without-limits',
    number: '04',
    title: 'Scale Without Limits',
    description: 'Build flexible technology that adapts to your evolving business needs.',
    image: scaleLimitsImg,
    imageAlt: 'Scale without limits using flexible, adaptable software architecture 3D illustration',
  },
];

export const OurChallenge: React.FC = () => {
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
      id="our-challenge"
      className={`wk-challenge ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="our-challenge-heading"
    >
      {/* Top Header Area with subtle light background */}
      <div className="wk-challenge__header-band">
        <div className="wk-challenge__container">
          <div className="wk-challenge__header">
            <h2 id="our-challenge-heading" className="wk-challenge__title">
              What the <span className="wk-challenge__title-accent">Right Software</span> Can Do for Your Business
            </h2>
            <p className="wk-challenge__subtitle">
              Transform the way your business operates, makes decisions, and grows with software built around your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Four-Column Business Outcome Cards Grid */}
      <div className="wk-challenge__cards-band">
        <div className="wk-challenge__container">
          <div className="wk-challenge__grid">
            {BUSINESS_OUTCOMES.map((item, index) => (
              <article
                key={item.id}
                className="wk-challenge__card"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Thin vertical blue separator */}
                <div
                  className="wk-challenge__separator"
                  style={{ transitionDelay: `${index * 120 + 80}ms` }}
                  aria-hidden="true"
                />

                <div className="wk-challenge__card-inner">
                  {/* Numerical Label */}
                  <div className="wk-challenge__number">{item.number}</div>

                  {/* 3D Visual Asset Area */}
                  <div className="wk-challenge__visual">
                    <img
                      src={getImgSrc(item.image)}
                      alt={item.imageAlt}
                      className={`wk-challenge__img wk-challenge__img--${item.id}`}
                      loading="lazy"
                    />
                  </div>

                  {/* Heading & Supporting Description */}
                  <div className="wk-challenge__content">
                    <h3 className="wk-challenge__card-title">{item.title}</h3>
                    <p className="wk-challenge__card-desc">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

