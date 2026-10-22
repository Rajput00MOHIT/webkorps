'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhatWeValueMost.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ValueCardItem {
  id: string;
  headingLine1: string;
  headingLine2: string;
  supportingLine: string;
  description: string;
  number: string;
}

const VALUE_CARDS: ValueCardItem[] = [
  {
    id: 'positive-mindset',
    headingLine1: 'Positive',
    headingLine2: 'Mindset',
    supportingLine: 'Grow Together, Succeed Together',
    description: 'A positive attitude drives growth and success.',
    number: '01',
  },
  {
    id: 'collaborative-spirit',
    headingLine1: 'Collaborative',
    headingLine2: 'Spirit',
    supportingLine: 'Great Teams Build Great Things',
    description: 'Collaboration and trust lead to better outcomes.',
    number: '02',
  },
  {
    id: 'leadership-ownership',
    headingLine1: 'Leadership &',
    headingLine2: 'Ownership',
    supportingLine: 'Lead with Confidence',
    description: 'Take ownership and make a meaningful impact.',
    number: '03',
  },
];

/**
 * What We Value Most Section Component
 * Source of Truth: Figma node 1233-12945 & reference screenshot
 * Features:
 * - Left-aligned header with highlighted "Value Most" in Webkorps blue
 * - 3 equal-width value cards with rounded top corners
 * - Large decorative numbers (01, 02, 03) partially cropped at the card bottom
 * - Smooth scroll entrance animation respecting reduced-motion
 */
export const WhatWeValueMost: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // 2. Cards staggered upward entrance
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.14,
            ease: 'power2.out',
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
    <section
      ref={sectionRef}
      className="wk-value-most"
      aria-labelledby="value-most-heading"
    >
      <div className="wk-value-most__container">
        {/* Left-Aligned Section Header */}
        <div ref={headerRef} className="wk-value-most__header">
          <h2 id="value-most-heading" className="wk-value-most__title">
            What We <span className="wk-value-most__title--accent">Value Most</span>
          </h2>
          <p className="wk-value-most__desc">
            We look beyond skills and experience to ensure alignment with our culture, values, and collaborative way of working.
          </p>
        </div>

        {/* 3 Value Cards Row */}
        <div className="wk-value-most__grid" role="list">
          {VALUE_CARDS.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="wk-value-card"
              role="listitem"
            >
              {/* Card Text Content */}
              <div className="wk-value-card__content">
                <h3 className="wk-value-card__title">
                  <span className="wk-value-card__title-line">{card.headingLine1}</span>
                  <span className="wk-value-card__title-line">{card.headingLine2}</span>
                </h3>
                <p className="wk-value-card__supporting">{card.supportingLine}</p>
                <p className="wk-value-card__desc">{card.description}</p>
              </div>

              {/* Large Decorative Number (Bottom-aligned & Partially Cropped) */}
              <div className="wk-value-card__number-wrap" aria-hidden="true">
                <span className="wk-value-card__number">{card.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeValueMost;
