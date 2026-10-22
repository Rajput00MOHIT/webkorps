'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServicesIndustries.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface IndustryCardItem {
  id: string;
  titlePart1: string;
  titlePart2?: string;
  description: string;
}

const INDUSTRIES_DATA: IndustryCardItem[] = [
  {
    id: 'banking-finance',
    titlePart1: 'Banking &',
    titlePart2: 'Finance',
    description: 'Secure and scalable solutions for modern financial systems.',
  },
  {
    id: 'healthcare',
    titlePart1: 'Healthcare',
    description: 'Smart systems to improve care, efficiency, and data management.',
  },
  {
    id: 'retail-ecommerce',
    titlePart1: 'Retail &',
    titlePart2: 'E-Commerce',
    description: 'Digital commerce solutions that enhance sales and customer experience.',
  },
  {
    id: 'manufacturing',
    titlePart1: 'Manufacturing',
    description: 'Automation and systems to improve productivity and operations.',
  },
  {
    id: 'logistics-supply-chain',
    titlePart1: 'Logistics &',
    titlePart2: 'Supply Chain',
    description: 'Real-time tracking and smarter operational workflows.',
  },
  {
    id: 'education-elearning',
    titlePart1: 'Education &',
    titlePart2: 'E-Learning',
    description: 'Scalable platforms for modern digital learning experiences.',
  },
  {
    id: 'real-estate',
    titlePart1: 'Real Estate',
    description: 'Tech-driven platforms for better property management and sales.',
  },
  {
    id: 'travel-hospitality',
    titlePart1: 'Travel & Hospitality',
    description: 'Solutions that improve bookings, operations, and customer experience.',
  },
  {
    id: 'automotive-mobility',
    titlePart1: 'Automotive &',
    titlePart2: 'Mobility',
    description: 'Smart solutions for connected and efficient mobility systems.',
  },
];

export const ServicesIndustries: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // 1. Header Reveal
      if (headerRef.current) {
        const title = headerRef.current.querySelector('.wk-services-industries__title');
        const subtitle = headerRef.current.querySelector('.wk-services-industries__subtitle');

        gsap.fromTo(
          [title, subtitle],
          { opacity: 0, y: 10, filter: 'blur(5px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // 2. 9 Industry Cards Staggered Reveal
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 20, filter: 'blur(4px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            stagger: 0.06,
            ease: 'power3.out',
            clearProps: 'transform,filter',
            scrollTrigger: {
              trigger: validCards[0],
              start: 'top 82%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="wk-services-industries" aria-labelledby="services-industries-heading">
      <div className="wk-services-industries__container">
        {/* Section Heading */}
        <div ref={headerRef} className="wk-services-industries__header">
          <h2 id="services-industries-heading" className="wk-services-industries__title">
            <span className="wk-services-industries__title-blue">Industries</span> We Empower
          </h2>
          <p className="wk-services-industries__subtitle">
            We deliver industry-focused solutions that solve real business challenges.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="wk-services-industries__grid" role="list">
          {INDUSTRIES_DATA.map((industry, index) => (
            <article
              key={industry.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              role="listitem"
              className="wk-services-industries__card"
            >
              <h3 className="wk-services-industries__card-title">
                {industry.titlePart1}
                {industry.titlePart2 && (
                  <>
                    <br />
                    {industry.titlePart2}
                  </>
                )}
              </h3>
              <p className="wk-services-industries__card-desc">{industry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
