'use client';

import React, { useRef, useState, useEffect } from 'react';
import { getImgSrc } from '../../utils/image';
import './ServiceOutcomes.css';

export interface OutcomeItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: any;
  imageAlt: string;
}

export interface ServiceOutcomesProps {
  id?: string;
  title: React.ReactNode;
  subtitle: string;
  items: OutcomeItem[];
}

export const ServiceOutcomes: React.FC<ServiceOutcomesProps> = ({
  id = 'service-outcomes',
  title,
  subtitle,
  items,
}) => {
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
      id={id}
      className={`wk-service-outcomes ${isVisible ? 'is-visible' : ''}`}
      aria-label="Service Outcomes"
    >
      {/* Top Header Area with light border */}
      <div className="wk-service-outcomes__header-band">
        <div className="wk-service-outcomes__container">
          <div className="wk-service-outcomes__header">
            <h2 className="wk-service-outcomes__title">{title}</h2>
            <p className="wk-service-outcomes__subtitle">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Four-Column Business Outcome Cards Grid */}
      <div className="wk-service-outcomes__cards-band">
        <div className="wk-service-outcomes__container">
          <div className="wk-service-outcomes__grid">
            {items.map((item, index) => (
              <article
                key={item.id}
                className="wk-service-outcomes__card"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Thin vertical blue separator */}
                <div
                  className="wk-service-outcomes__separator"
                  style={{ transitionDelay: `${index * 120 + 80}ms` }}
                  aria-hidden="true"
                />

                <div className="wk-service-outcomes__card-inner">
                  {/* Numerical Label */}
                  <div className="wk-service-outcomes__number">{item.number}</div>

                  {/* 3D Visual Asset Area */}
                  <div className="wk-service-outcomes__visual">
                    <img
                      src={getImgSrc(item.image)}
                      alt={item.imageAlt}
                      className="wk-service-outcomes__img"
                      style={{ animationDelay: `${index * 0.6}s` }}
                      loading="lazy"
                    />
                  </div>

                  {/* Heading & Supporting Description - Top-aligned with identical baselines */}
                  <div className="wk-service-outcomes__content">
                    <h3 className="wk-service-outcomes__card-title">{item.title}</h3>
                    <p className="wk-service-outcomes__card-desc">{item.description}</p>
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

