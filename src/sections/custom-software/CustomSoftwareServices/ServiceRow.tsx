'use client';

import React, { useRef, useState, useEffect } from 'react';
import { CustomSoftwareServiceItem } from './customSoftwareServicesData';
import { getImgSrc } from '../../../utils/image';

interface ServiceRowProps {
  item: CustomSoftwareServiceItem;
  isReversed: boolean;
  index: number;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({
  item,
  isReversed,
  index,
}) => {
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

  const floatDelay = `${(index % 3) * 0.8}s`;

  return (
    <div
      ref={rowRef}
      className={`wk-cs-services__row ${
        isReversed ? 'wk-cs-services__row--reversed' : ''
      } ${isVisible ? 'is-visible' : ''}`}
      data-row-index={index}
    >
      {/* Content Column */}
      <div className="wk-cs-services__content-col">
        <h3 className="wk-cs-services__row-title">
          <span className="wk-cs-services__row-num">{item.number}.</span>{' '}
          <span className="wk-cs-services__row-title-text">{item.title}</span>
        </h3>

        <p className="wk-cs-services__row-desc">{item.description}</p>

        <a
          href={item.ctaHref || '/contact-us'}
          className="wk-cs-services__btn"
          aria-label={`${item.ctaLabel || 'Know More'} about ${item.title}`}
        >
          <span>{item.ctaLabel || 'Know More'}</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="wk-cs-services__btn-icon"
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

      {/* Visual Illustration Column */}
      <div className="wk-cs-services__visual-col">
        <div className="wk-cs-services__visual-card">
          <img
            src={getImgSrc(item.image)}
            alt={item.imageAlt}
            className="wk-cs-services__visual-img"
            style={{ animationDelay: floatDelay }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

