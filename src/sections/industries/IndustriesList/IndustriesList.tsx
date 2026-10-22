'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getImgSrc } from '../../../utils/image';

// 9 High-Resolution 3D Visuals from src/assets/industries/page img/
import bankingImg from '../../../assets/industries/page img/Banking.png';
import healthcareImg from '../../../assets/industries/page img/Healthcare.png';
import retailImg from '../../../assets/industries/page img/Retail ecom.png';
import manufacturingImg from '../../../assets/industries/page img/Manufacturing.png';
import logisticsImg from '../../../assets/industries/page img/Logistic.png';
import educationImg from '../../../assets/industries/page img/Education.png';
import realEstateImg from '../../../assets/industries/page img/Real state.png';
import travelImg from '../../../assets/industries/page img/Travel.png';
import automotiveImg from '../../../assets/industries/page img/Automation.png';

import './IndustriesList.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface IndustryItem {
  id: string;
  name: string;
  description: string;
  image: any;
  imageAlt: string;
  href: string;
}

const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'banking-finance',
    name: 'Banking & Finance',
    description: 'Secure and scalable solutions for modern financial systems.',
    image: bankingImg,
    imageAlt: '3D upward crystal blue chart arrow representing Banking and Finance solutions',
    href: '/case-studies',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Smart systems to improve care, efficiency, and data management.',
    image: healthcareImg,
    imageAlt: '3D translucent blue medical wave curve representing Healthcare technology',
    href: '/case-studies',
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-Commerce',
    description: 'Digital commerce solutions that enhance sales and customer experience.',
    image: retailImg,
    imageAlt: '3D modern digital storefront with sales charts representing Retail and E-Commerce',
    href: '/case-studies',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Automation and systems to improve productivity and operations.',
    image: manufacturingImg,
    imageAlt: '3D automated digital production cubes representing Manufacturing systems',
    href: '/case-studies',
  },
  {
    id: 'logistics-supply-chain',
    name: 'Logistics & Supply Chain',
    description: 'Real-time tracking and smarter operational workflows.',
    image: logisticsImg,
    imageAlt: '3D real-time tracking interface dial representing Logistics and Supply Chain',
    href: '/case-studies',
  },
  {
    id: 'education-elearning',
    name: 'Education & E-Learning',
    description: 'Scalable platforms for modern digital learning experiences.',
    image: educationImg,
    imageAlt: '3D digital curriculum documents on glowing platform representing Education and E-Learning',
    href: '/case-studies',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Tech-driven platforms for better property management and sales.',
    image: realEstateImg,
    imageAlt: '3D architectural digital screen on circular pedestal representing Real Estate technology',
    href: '/case-studies',
  },
  {
    id: 'travel-hospitality',
    name: 'Travel & Hospitality',
    description: 'Solutions that improve bookings, operations, and customer experience.',
    image: travelImg,
    imageAlt: '3D structural architectural steps with glass accents representing Travel and Hospitality',
    href: '/case-studies',
  },
  {
    id: 'automotive-mobility',
    name: 'Automotive & Mobility',
    description: 'Smart solutions for connected and efficient mobility systems.',
    image: automotiveImg,
    imageAlt: '3D glowing stacked blue modular cubes representing Automotive and Mobility',
    href: '/case-studies',
  },
];

export const IndustriesList: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Section header entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Alternating row scroll entrances
      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const isEven = index % 2 === 1; // 0-based: index 0 is text left / image right; index 1 is image left / text right
        const textBlock = row.querySelector('.wk-industries-row__text');
        const visualBlock = row.querySelector('.wk-industries-row__visual');

        if (!textBlock || !visualBlock) return;

        // Inward entrance: left element enters from left (-30px), right element from right (+30px)
        const leftTarget = isEven ? visualBlock : textBlock;
        const rightTarget = isEven ? textBlock : visualBlock;

        gsap.fromTo(
          leftTarget,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              once: true,
            },
          }
        );

        gsap.fromTo(
          rightTarget,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="wk-industries-list"
      aria-labelledby="industries-list-heading"
    >
      <div className="wk-industries-list__container">
        {/* Section Header */}
        <div ref={headerRef} className="wk-industries-list__header">
          <h2 id="industries-list-heading" className="wk-industries-list__title">
            <span className="wk-industries-list__title--blue">Industries</span> We Empower
          </h2>
          <p className="wk-industries-list__subtitle">
            We deliver industry-focused solutions that solve real business challenges.
          </p>
        </div>

        {/* 9 Alternating Industry Rows */}
        <div className="wk-industries-list__rows" role="list">
          {INDUSTRIES_DATA.map((industry, index) => {
            const isReversed = index % 2 === 1; // Even-indexed (0, 2, 4...) = Text Left, Image Right. Odd-indexed (1, 3, 5...) = Image Left, Text Right.

            return (
              <div
                key={industry.id}
                ref={(el) => {
                  rowRefs.current[index] = el;
                }}
                className={`wk-industries-row ${isReversed ? 'wk-industries-row--reversed' : ''
                  }`}
                role="listitem"
              >
                {/* Text Content Block */}
                <div className="wk-industries-row__text">
                  <h3 className="wk-industries-row__title">{industry.name}</h3>
                  <p className="wk-industries-row__desc">{industry.description}</p>
                  <Link
                    href={industry.href}
                    className="wk-industries-row__btn"
                    aria-label={`Know more about ${industry.name} solutions`}
                  >
                    <span>Know More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M0.707031 15L1.41414 15.7071L15.4141 1.70711L14.707 1L13.9999 0.292893L-7.55191e-05 14.2929L0.707031 15ZM15.707 0.999999C15.707 0.447715 15.2593 -2.87362e-07 14.707 -5.40243e-07L5.70703 2.60547e-07C5.15475 -7.66277e-08 4.70703 0.447715 4.70703 1C4.70703 1.55228 5.15475 2 5.70703 2L13.707 2L13.707 10C13.707 10.5523 14.1547 11 14.707 11C15.2593 11 15.707 10.5523 15.707 10L15.707 0.999999Z" fill="white" />
                    </svg>
                  </Link>
                </div>

                {/* 3D Visual Block */}
                <div className="wk-industries-row__visual">
                  <div className="wk-industries-row__img-wrap">
                    <img
                      src={getImgSrc(industry.image)}
                      alt={industry.imageAlt}
                      className="wk-industries-row__img"
                      loading={index < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesList;
