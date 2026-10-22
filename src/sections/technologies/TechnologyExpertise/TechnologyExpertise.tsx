'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TECHNOLOGY_CATEGORIES, TechCategory } from './technologyData';
import './TechnologyExpertise.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Technology Expertise Section Component
 * Source of Truth: Figma node 2262-1423 & attached visual reference
 */
export const TechnologyExpertise: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('frontend');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const catButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef<boolean>(true);

  const activeCategory: TechCategory =
    TECHNOLOGY_CATEGORIES.find((cat) => cat.id === activeCategoryId) ||
    TECHNOLOGY_CATEGORIES[0];

  // 1. Section Entrance Animation (ScrollTrigger)
  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      // 1A. Section Header reveal
      if (headerRef.current) {
        const title = headerRef.current.querySelector('.wk-tech-exp__title');
        const subtitle = headerRef.current.querySelector('.wk-tech-exp__subtitle');

        masterTl.fromTo(
          [title, subtitle],
          { opacity: 0, y: 10, filter: 'blur(5px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          }
        );
      }

      // 1B. Left-Side Category Tabs: Animate upward from 22px below with stagger
      const validButtons = catButtonsRef.current.filter(Boolean);
      if (validButtons.length > 0) {
        masterTl.fromTo(
          validButtons,
          {
            y: 22,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.04,
            ease: 'power2.out',
            clearProps: 'transform',
          },
          '-=0.3'
        );
      }

      // 1C. Right-Side Technology Panel Entrance: heading -> description -> logo tiles
      if (panelRef.current) {
        const panelTitle = panelRef.current.querySelector('.wk-tech-exp__panel-title');
        const panelDesc = panelRef.current.querySelector('.wk-tech-exp__panel-desc');
        const tiles = panelRef.current.querySelectorAll('.wk-tech-exp__tile');

        masterTl.fromTo(
          [panelTitle, panelDesc],
          {
            opacity: 0,
            y: 10,
            filter: 'blur(4px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            clearProps: 'transform,filter',
          },
          '-=0.2'
        );

        if (tiles.length > 0) {
          masterTl.fromTo(
            tiles,
            {
              opacity: 0,
              y: 14,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.05,
              ease: 'power2.out',
              clearProps: 'transform',
            },
            '-=0.25'
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 2. Tab Selection Smooth Transition: Only animate the right panel content when category changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !panelRef.current) return;

    const panelHeader = panelRef.current.querySelector('.wk-tech-exp__panel-header');
    const panelGrid = panelRef.current.querySelector('.wk-tech-exp__grid');

    if (panelHeader && panelGrid) {
      gsap.fromTo(
        [panelHeader, panelGrid],
        {
          opacity: 0,
          y: 8,
          filter: 'blur(3px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.3,
          stagger: 0.06,
          ease: 'power2.out',
          clearProps: 'transform,filter',
        }
      );
    }
  }, [activeCategoryId]);

  return (
    <section ref={sectionRef} className="wk-tech-exp" aria-labelledby="tech-expertise-heading">
      <div className="wk-tech-exp__container">
        {/* Section Header (Centered) */}
        <header ref={headerRef} className="wk-tech-exp__header">
          <h2 id="tech-expertise-heading" className="wk-tech-exp__title">
            <span className="wk-tech-exp__title-blue">Technology</span>{' '}
            <span className="wk-tech-exp__title-dark">Expertise</span>
          </h2>
          <p className="wk-tech-exp__subtitle">
            A diverse technology stack powering innovative web, mobile, and enterprise applications.
          </p>
        </header>

        {/* Two-Column Layout */}
        <div className="wk-tech-exp__body">
          {/* Left Column — 9 Categories */}
          <div
            className="wk-tech-exp__categories"
            role="tablist"
            aria-label="Technology Categories"
          >
            {TECHNOLOGY_CATEGORIES.map((category, index) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  ref={(el) => {
                    catButtonsRef.current[index] = el;
                  }}
                  role="tab"
                  id={`tab-${category.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`wk-tech-exp__cat-btn ${
                    isActive ? 'wk-tech-exp__cat-btn--active' : ''
                  }`}
                  onClick={() => setActiveCategoryId(category.id)}
                >
                  <span className="wk-tech-exp__cat-btn-text">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column — Selected Category Panel */}
          <div
            ref={panelRef}
            className="wk-tech-exp__panel"
            role="tabpanel"
            id={`panel-${activeCategory.id}`}
            aria-labelledby={`tab-${activeCategory.id}`}
          >
            <div className="wk-tech-exp__panel-header">
              <h3 className="wk-tech-exp__panel-title">
                {activeCategory.panelTitle}
              </h3>
              <p className="wk-tech-exp__panel-desc">
                {activeCategory.description}
              </p>
            </div>

            {/* 3×2 Grid of Technology Tiles */}
            <div className="wk-tech-exp__grid" role="list">
              {activeCategory.technologies.map((tech) => (
                <div
                  key={tech.id}
                  role="listitem"
                  className="wk-tech-exp__tile"
                  title={tech.name}
                >
                  {tech.label && (
                    <span className="wk-tech-exp__tile-label">
                      {tech.label}
                    </span>
                  )}
                  <div className="wk-tech-exp__tile-icon" aria-hidden="true">
                    {tech.icon}
                  </div>
                  <span className="sr-only">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
