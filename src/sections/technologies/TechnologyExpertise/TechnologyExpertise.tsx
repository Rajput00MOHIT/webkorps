'use client';

import React, { useState } from 'react';
import { TECHNOLOGY_CATEGORIES, TechCategory } from './technologyData';
import './TechnologyExpertise.css';

/**
 * Technology Expertise Section Component
 * Source of Truth: Figma node 2262-1423 & attached visual reference
 */
export const TechnologyExpertise: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('frontend');

  const activeCategory: TechCategory =
    TECHNOLOGY_CATEGORIES.find((cat) => cat.id === activeCategoryId) ||
    TECHNOLOGY_CATEGORIES[0];

  return (
    <section className="wk-tech-exp" aria-labelledby="tech-expertise-heading">
      <div className="wk-tech-exp__container">
        {/* Section Header (Centered) */}
        <header className="wk-tech-exp__header">
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
            {TECHNOLOGY_CATEGORIES.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
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
