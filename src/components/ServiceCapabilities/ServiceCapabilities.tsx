'use client';

import React, { useRef, useState, useEffect } from 'react';
import { getImgSrc } from '../../utils/image';
import './ServiceCapabilities.css';

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: any;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ServiceCapabilitiesProps {
  id?: string;
  title: React.ReactNode;
  subtitle: string;
  items: CapabilityItem[];
}

interface CapabilityRowProps {
  item: CapabilityItem;
  isReversed: boolean;
  index: number;
}

const CapabilityRow: React.FC<CapabilityRowProps> = ({ item, isReversed, index }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className={`wk-capabilities__row ${isReversed ? 'wk-capabilities__row--reversed' : ''} ${
        isVisible ? 'is-visible' : ''
      }`}
      data-row-index={index}
    >
      {/* Content Column */}
      <div className="wk-capabilities__content-col">
        <h3 className="wk-capabilities__row-title">
          <span className="wk-capabilities__row-num">{item.number}.</span>{' '}
          <span className="wk-capabilities__row-title-text">{item.title}</span>
        </h3>

        <p className="wk-capabilities__row-desc">{item.description}</p>

        {/* Solid Blue Pill CTA Button ("Know More ↗") */}
        <a
          href={item.ctaHref || '/contact-us'}
          className="wk-capabilities__btn"
          aria-label={`${item.ctaLabel || 'Know More'} about ${item.title}`}
        >
          <span>{item.ctaLabel || 'Know More'}</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="wk-capabilities__btn-icon"
            aria-hidden="true"
          >
            <path
              d="M3.5 10.5L10.5 3.5M10.5 3.5H4.66667M10.5 3.5V9.33333"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Visual Illustration Column with Rounded Card Frame */}
      <div className="wk-capabilities__visual-col">
        <div className="wk-capabilities__visual-card">
          <img
            src={getImgSrc(item.image)}
            alt={item.imageAlt}
            className="wk-capabilities__visual-img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export const ServiceCapabilities: React.FC<ServiceCapabilitiesProps> = ({
  id = 'service-capabilities',
  title,
  subtitle,
  items,
}) => {
  return (
    <section id={id} className="wk-capabilities" aria-label="Core Capabilities">
      {/* Header Band */}
      <div className="wk-capabilities__header-band">
        <div className="wk-capabilities__header-inner">
          <h2 className="wk-capabilities__title">{title}</h2>
          <p className="wk-capabilities__subtitle">{subtitle}</p>
        </div>
      </div>

      {/* Alternating Service Rows */}
      <div className="wk-capabilities__body">
        <div className="wk-capabilities__container">
          {items.map((item, index) => (
            <CapabilityRow
              key={item.id}
              item={item}
              isReversed={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
