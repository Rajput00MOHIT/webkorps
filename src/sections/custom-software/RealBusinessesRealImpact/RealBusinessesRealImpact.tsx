'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  REAL_BUSINESS_CASE_STUDIES,
  IndustryCaseStudyItem,
} from './realBusinessesRealImpactData';
import './RealBusinessesRealImpact.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TAB_ROWS = [
  ['healthcare', 'fintech', 'retail', 'manufacturing', 'logistics'],
  ['education', 'real-estate', 'hospitality', 'automotive'],
];

export const RealBusinessesRealImpact: React.FC = () => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>('healthcare');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const caseStudyRef = useRef<HTMLDivElement>(null);

  const currentStudy: IndustryCaseStudyItem =
    REAL_BUSINESS_CASE_STUDIES.find((item) => item.id === activeIndustryId) ||
    REAL_BUSINESS_CASE_STUDIES[0];

  const handleTabChange = (id: string) => {
    if (id === activeIndustryId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndustryId(id);
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      // 1. Header reveal
      if (headerRef.current) {
        masterTl.fromTo(
          headerRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          }
        );
      }

      // 2. Tabs reveal
      if (tabsRef.current) {
        masterTl.fromTo(
          tabsRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          },
          '-=0.3'
        );
      }

      // 3. Case study initial entrance
      if (caseStudyRef.current) {
        masterTl.fromTo(
          caseStudyRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          },
          '-=0.2'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="real-businesses-real-impact"
      className="wk-real-impact"
      aria-labelledby="real-impact-heading"
    >
      <div className="wk-real-impact__container">
        {/* Section Header */}
        <div ref={headerRef} className="wk-real-impact__header">
          <h2 id="real-impact-heading" className="wk-real-impact__title">
            <span className="wk-real-impact__title-accent">Real Businesses.</span>{' '}
            Real Impact.
          </h2>
          <p className="wk-real-impact__subtitle">
            We build custom software that drives measurable business results.
          </p>
        </div>

        {/* Industry Navigation Tabs */}
        <div
          ref={tabsRef}
          className="wk-real-impact__tabs-wrapper"
          role="tablist"
          aria-label="Industry Case Studies"
        >
          {TAB_ROWS.map((row, rowIdx) => (
            <div key={`tab-row-${rowIdx}`} className="wk-real-impact__tabs-row">
              {row.map((tabId) => {
                const item = REAL_BUSINESS_CASE_STUDIES.find(
                  (s) => s.id === tabId
                );
                if (!item) return null;
                const isActive = activeIndustryId === item.id;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    id={`tab-${item.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${item.id}`}
                    tabIndex={isActive ? 0 : -1}
                    className={`wk-real-impact__tab-btn ${
                      isActive ? 'wk-real-impact__tab-btn--active' : ''
                    }`}
                    onClick={() => handleTabChange(item.id)}
                  >
                    {item.tabLabel}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Dynamic Two-Column Case Study Display */}
        <div
          ref={caseStudyRef}
          id={`panel-${currentStudy.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentStudy.id}`}
          className={`wk-real-impact__case-study ${
            isTransitioning ? 'wk-real-impact__case-study--transitioning' : ''
          }`}
        >
          {/* Left Column: Info, Tags & Metrics */}
          <div className="wk-real-impact__left-col">
            <div className="wk-real-impact__industry-badge">
              {currentStudy.industryName}
            </div>
            <h3 className="wk-real-impact__case-title">{currentStudy.title}</h3>
            <p className="wk-real-impact__case-desc">
              {currentStudy.description}
            </p>

            {/* Service Tags */}
            <div className="wk-real-impact__tags" aria-label="Service tags">
              {currentStudy.tags.map((tag) => (
                <span key={tag} className="wk-real-impact__tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Performance Metrics */}
            <div
              className="wk-real-impact__metrics"
              aria-label="Key Performance Metrics"
            >
              {currentStudy.metrics.map((metric, idx) => (
                <div key={idx} className="wk-real-impact__metric-item">
                  <div className="wk-real-impact__metric-val">
                    {metric.value}
                  </div>
                  <div className="wk-real-impact__metric-label">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Challenge, Solution, Impact Card */}
          <div className="wk-real-impact__right-col">
            {/* The Challenge */}
            <div className="wk-real-impact__block">
              <h4 className="wk-real-impact__block-title">The Challenge</h4>
              <ul className="wk-real-impact__bullet-list">
                {currentStudy.challenge.map((pt, i) => (
                  <li key={i} className="wk-real-impact__bullet-item">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Solution */}
            <div className="wk-real-impact__block">
              <h4 className="wk-real-impact__block-title">Our Solution</h4>
              <ul className="wk-real-impact__bullet-list">
                {currentStudy.solution.map((pt, i) => (
                  <li key={i} className="wk-real-impact__bullet-item">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* The Impact */}
            <div className="wk-real-impact__block">
              <h4 className="wk-real-impact__block-title">The Impact</h4>
              <ul className="wk-real-impact__bullet-list">
                {currentStudy.impact.map((pt, i) => (
                  <li key={i} className="wk-real-impact__bullet-item">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

