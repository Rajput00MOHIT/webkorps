'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SOFTWARE_FOR_EVERY_BUSINESS_ITEMS,
  SolutionCardItem,
} from './softwareForEveryBusinessData';
import { SolutionCard } from './SolutionCard';
import './SoftwareForEveryBusiness.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface SoftwareForEveryBusinessProps {
  id?: string;
  titleAccent?: string;
  titleRest?: string;
  subtitle?: string;
  items?: SolutionCardItem[];
}

export const SoftwareForEveryBusiness: React.FC<SoftwareForEveryBusinessProps> = ({
  id = 'software-for-every-business',
  titleAccent = 'Software',
  titleRest = 'for Every Business.',
  subtitle = 'Custom software solutions for every industry and need.',
  items = SOFTWARE_FOR_EVERY_BUSINESS_ITEMS,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // 2. Staggered Cards reveal
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: validCards[0],
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id={id}
      className="wk-software-business"
      aria-labelledby={`${id}-heading`}
    >
      {/* 1. Section Heading */}
      <div ref={headerRef} className="wk-software-business__header">
        <h2
          id={`${id}-heading`}
          className="wk-software-business__title"
        >
          <span className="wk-software-business__title-accent">{titleAccent}</span>{' '}
          {titleRest}
        </h2>
        <p className="wk-software-business__subtitle">
          {subtitle}
        </p>
      </div>

      {/* 2. Six Solution Cards (3x2 Grid) */}
      <div className="wk-software-business__container">
        <div className="wk-software-business__grid">
          {items.map((item, index) => (
            <SolutionCard
              key={item.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

