'use client';

import React from 'react';
import cardImage from '../../../assets/cardimage.png';
import { getImgSrc } from '../../../utils/image';
import './Hero.css';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Fast, scalable web solutions.',
    href: '#services-web',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="3" />
        <path d="M6 8h.01M10 8h.01M14 8h.01" />
        <path d="m9 15-2-2 2-2M15 11l2 2-2 2" />
      </svg>
    )
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Seamless apps for every platform.',
    href: '#services-mobile',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
        <path d="M8 5h8" />
      </svg>
    )
  },
  {
    id: 'ai-ml',
    title: 'AI & ML Development',
    description: 'Smart solutions powered by AI.',
    href: '#services-ai-ml',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software',
    description: 'Scalable solutions for complex needs.',
    href: '#services-enterprise',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Secure, scalable cloud infrastructure.',
    href: '#services-cloud',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    )
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Digital experiences built to convert.',
    href: '#services-ecommerce',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    )
  }
];

export const Hero: React.FC = () => {
  return (
    <section className="wk-hero" aria-labelledby="hero-heading">
      <div className="site-container">
        {/* Centered Top Value Proposition */}
        <div className="wk-hero__content">
          <h1 id="hero-heading" className="wk-hero__title">
            Building Digital Products
            <br />
            That <span className="wk-hero__title-accent">Drive Real Impact</span>
          </h1>

          <p className="wk-hero__subtitle">
            We design, build, and scale digital solutions that help businesses{' '}
            <br className="wk-hero__br-desktop" />
            innovate, grow, and stay ahead.
          </p>

          <div className="wk-hero__actions">
            <button
              type="button"
              className="wk-hero__btn-secondary"
              onClick={() => {
                const el = document.getElementById('about');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Watch how it works
            </button>

            <a href="#contact" className="wk-hero__btn-primary">
              <span>Start a Project</span>
              <span className="wk-hero__btn-icon-circle" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="#1887C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Feature Explorer Card */}
        <div className="wk-hero__card" role="region" aria-label="Explore Services Feature">
          {/* Left Column: Visual Acrylic Puzzle Image */}
          <div className="wk-hero__card-visual">
            <img
              src={getImgSrc(cardImage)}
              alt="Hands connecting precision blue puzzle pieces representing collaborative digital engineering"
              className="wk-hero__card-image"
              width={420}
              height={380}
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Right Column: Services Directory Grid */}
          <div className="wk-hero__card-content">
            <div className="wk-hero__card-header">
              <h2 className="wk-hero__card-title">Explore services</h2>
              <a href="#services" className="wk-hero__card-explore-all">
                <span>Explore all services</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="wk-hero__services-grid">
              {SERVICES.map((service) => (
                <a
                  key={service.id}
                  href={service.href}
                  className="wk-hero__service-item"
                >
                  <div className="wk-hero__service-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 className="wk-hero__service-name">{service.title}</h3>
                  <p className="wk-hero__service-desc">{service.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
