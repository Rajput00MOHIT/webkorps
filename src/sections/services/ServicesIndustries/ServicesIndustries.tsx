'use client';

import React from 'react';
import './ServicesIndustries.css';

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
  return (
    <section className="wk-services-industries" aria-labelledby="services-industries-heading">
      <div className="wk-services-industries__container">
        {/* Section Heading */}
        <div className="wk-services-industries__header">
          <h2 id="services-industries-heading" className="wk-services-industries__title">
            <span className="wk-services-industries__title-blue">Industries</span> We Empower
          </h2>
          <p className="wk-services-industries__subtitle">
            We deliver industry-focused solutions that solve real business challenges.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="wk-services-industries__grid" role="list">
          {INDUSTRIES_DATA.map((industry) => (
            <article
              key={industry.id}
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
