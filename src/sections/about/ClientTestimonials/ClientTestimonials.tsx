'use client';

import React from 'react';
import holypayLogo from '../../../assets/about/holypay.png';
import safeexpressLogo from '../../../assets/about/safeexpress.png';
import deepakLogo from '../../../assets/about/deepakfertilizers.png';
import { getImgSrc } from '../../../utils/image';
import './ClientTestimonials.css';

export interface TestimonialItem {
  id: string;
  companyName: string;
  category: string;
  quote: string;
  logoSrc?: string | any;
  badgeBg?: string;
  badgeColor?: string;
  badgeIcon?: React.ReactNode;
}

const TESTIMONIALS_ROW_1: TestimonialItem[] = [
  {
    id: 'holypay-1',
    companyName: 'Holypay',
    category: 'Religious Application',
    quote:
      'WebKorps helped us create a smooth and user-friendly religious application that makes donations, bookings, and devotional services easier for users.',
    logoSrc: holypayLogo,
  },
  {
    id: 'safexpress-1',
    companyName: 'Safexpress Pvt. Ltd.',
    category: 'Logistics Company',
    quote:
      'Helping Safexpress improve operational visibility, streamline workflows, and deliver a smoother digital experience across logistics processes.',
    logoSrc: safeexpressLogo,
  },
  {
    id: 'deepak-1',
    companyName: 'Deepak Fertilisers',
    category: 'Chemicals and Fertilizers',
    quote:
      'WebKorps simplified our RCA and MEP workflows with a smart, easy-to-use solution that improved visibility, accountability, and team collaboration.',
    logoSrc: deepakLogo,
  },
  {
    id: 'puravankara-1',
    companyName: 'Puravankara Limited',
    category: 'Real Estate Developer',
    quote:
      'The modern digital architecture transformed property discovery, buyer management, and automated booking workflows with impressive reliability.',
    badgeBg: '#EFF6FF',
    badgeColor: '#2563EB',
    badgeIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const TESTIMONIALS_ROW_2: TestimonialItem[] = [
  {
    id: 'holypay-2',
    companyName: 'Holypay',
    category: 'Religious Application',
    quote:
      'WebKorps helped us create a smooth and user-friendly religious application that makes donations, bookings, and devotional services easier for users.',
    logoSrc: holypayLogo,
  },
  {
    id: 'safexpress-2',
    companyName: 'Safexpress Pvt. Ltd.',
    category: 'Logistics Company',
    quote:
      'Helping Safexpress improve operational visibility, streamline workflows, and deliver a smoother digital experience across logistics processes.',
    logoSrc: safeexpressLogo,
  },
  {
    id: 'deepak-2',
    companyName: 'Deepak Fertilisers',
    category: 'Chemicals and Fertilizers',
    quote:
      'WebKorps simplified our RCA and MEP workflows with a smart, easy-to-use solution that improved visibility, accountability, and team collaboration.',
    logoSrc: deepakLogo,
  },
  {
    id: 'cryoport-2',
    companyName: 'Cryoport Systems',
    category: 'Supply Chain Logistics',
    quote:
      'WebKorps engineered dependable tracking integrations and telemetry dashboards that ensured complete compliance and 24/7 visibility.',
    badgeBg: '#F0F9FF',
    badgeColor: '#0284C7',
    badgeIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const TESTIMONIALS_ROW_3: TestimonialItem[] = [
  {
    id: 'holypay-3',
    companyName: 'Holypay',
    category: 'Religious Application',
    quote:
      'WebKorps helped us create a smooth and user-friendly religious application that makes donations, bookings, and devotional services easier for users.',
    logoSrc: holypayLogo,
  },
  {
    id: 'safexpress-3',
    companyName: 'Safexpress Pvt. Ltd.',
    category: 'Logistics Company',
    quote:
      'Helping Safexpress improve operational visibility, streamline workflows, and deliver a smoother digital experience across logistics processes.',
    logoSrc: safeexpressLogo,
  },
  {
    id: 'deepak-3',
    companyName: 'Deepak Fertilisers',
    category: 'Chemicals and Fertilizers',
    quote:
      'WebKorps simplified our RCA and MEP workflows with a smart, easy-to-use solution that improved visibility, accountability, and team collaboration.',
    logoSrc: deepakLogo,
  },
  {
    id: 'acima-3',
    companyName: 'Acima Credit',
    category: 'Fintech Solutions',
    quote:
      'Exceptional development speed and technical execution in delivering highly responsive, compliant fintech customer checkout journeys.',
    badgeBg: '#F5F3FF',
    badgeColor: '#7C3AED',
    badgeIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
];

interface MarqueeRowProps {
  items: TestimonialItem[];
  direction: 'left' | 'right';
  durationClass: string;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction, durationClass }) => {
  // Duplicate items twice for a 100% seamless infinite loop
  const repeatedItems = [...items, ...items];

  return (
    <div className={`wk-testimonials__marquee-viewport wk-testimonials__marquee-viewport--${direction}`}>
      <div className={`wk-testimonials__track wk-testimonials__track--${direction} ${durationClass}`}>
        {repeatedItems.map((item, idx) => (
          <article
            key={`${item.id}-${idx}`}
            className="wk-testimonials__card"
            aria-hidden={idx >= items.length ? 'true' : undefined}
          >
            {/* Card Header: Brand Badge / Logo + Company Info */}
            <div className="wk-testimonials__card-header">
              <div
                className="wk-testimonials__badge"
                style={{
                  backgroundColor: item.logoSrc ? '#FFFFFF' : item.badgeBg || '#F1F5F9',
                  color: item.badgeColor || '#0F172A',
                }}
                aria-hidden="true"
              >
                {item.logoSrc ? (
                  <img
                    src={getImgSrc(item.logoSrc)}
                    alt=""
                    className="wk-testimonials__badge-img"
                    loading="lazy"
                  />
                ) : (
                  item.badgeIcon
                )}
              </div>
              <div className="wk-testimonials__meta">
                <h3 className="wk-testimonials__company-name">{item.companyName}</h3>
                <span className="wk-testimonials__category">{item.category}</span>
              </div>
            </div>

            {/* Card Quote */}
            <p className="wk-testimonials__quote">{item.quote}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export const ClientTestimonials: React.FC = () => {
  return (
    <section className="wk-testimonials" aria-labelledby="client-testimonials-heading">
      {/* Centered Section Header */}
      <div className="site-container wk-testimonials__header-container">
        <div className="wk-testimonials__header">
          <h2 id="client-testimonials-heading" className="wk-testimonials__title">
            What <span className="wk-testimonials__title-accent">Our Clients</span> Say About Us
          </h2>
          <p className="wk-testimonials__subtitle">
            Hear from our clients about their experience, trust, and success with our services.
          </p>
        </div>
      </div>

      {/* 3 Continuous Moving Infinite Marquee Rows */}
      <div className="wk-testimonials__tracks-wrapper">
        {/* Row 1: Right to Left */}
        <MarqueeRow
          items={TESTIMONIALS_ROW_1}
          direction="left"
          durationClass="wk-testimonials__track--speed-1"
        />

        {/* Row 2: Left to Right */}
        <MarqueeRow
          items={TESTIMONIALS_ROW_2}
          direction="right"
          durationClass="wk-testimonials__track--speed-2"
        />

        {/* Row 3: Right to Left */}
        <MarqueeRow
          items={TESTIMONIALS_ROW_3}
          direction="left"
          durationClass="wk-testimonials__track--speed-3"
        />
      </div>
    </section>
  );
};
