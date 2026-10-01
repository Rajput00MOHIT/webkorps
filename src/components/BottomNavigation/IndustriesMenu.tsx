'use client';

import React from 'react';
import { INDUSTRIES_NAV_DATA } from './navigationData';
import industrySpotlightImg from '../../assets/industries/industry-spotlight.png';
import { getImgSrc } from '../../utils/image';

interface IndustriesMenuProps {
  onItemClick?: () => void;
}

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  logistic: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  'real-estate': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  healthcare: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  retail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  fintech: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  travel: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  ),
  warehouse: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
};

export const IndustriesMenu: React.FC<IndustriesMenuProps> = ({ onItemClick }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onItemClick) {
      onItemClick();
    }
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="wk-mega-menu__industries-layout">
      {/* Left: Compact 2-Column Industry Grid */}
      <div className="wk-mega-menu__industries-grid">
        {INDUSTRIES_NAV_DATA.map((industry, idx) => (
          <a
            key={industry.id}
            href={industry.href}
            className="wk-mega-menu__industry-card"
            onClick={(e) => handleLinkClick(e, industry.href)}
            style={{ '--item-stagger': `${idx * 30}ms` } as React.CSSProperties}
          >
            <div className="wk-mega-menu__industry-icon-box" aria-hidden="true">
              {INDUSTRY_ICONS[industry.id] || (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              )}
            </div>
            <div className="wk-mega-menu__industry-info">
              <span className="wk-mega-menu__industry-title">{industry.title}</span>
              <p className="wk-mega-menu__industry-desc">{industry.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Right: Aligned Industry Spotlight Card */}
      <aside className="wk-mega-menu__industry-spotlight" aria-label="Industry Spotlight">
        <img
          src={getImgSrc(industrySpotlightImg)}
          alt="Smart Tech in Modern Industries"
          className="wk-mega-menu__industry-spotlight-img"
          width={340}
          height={165}
          loading="eager"
        />
        <div className="wk-mega-menu__industry-spotlight-content">
          <span className="wk-mega-menu__industry-spotlight-badge">INDUSTRY SPOTLIGHT</span>
          <h4 className="wk-mega-menu__industry-spotlight-title">
            How Smart Tech is Transforming Modern Industries
          </h4>
          <p className="wk-mega-menu__industry-spotlight-desc">
            Discover how AI, automation, and cloud-first engineering are reshaping operations across logistics, healthcare, fintech, and retail.
          </p>
          <a
            href="#insights"
            className="wk-mega-menu__industry-spotlight-link"
            onClick={(e) => handleLinkClick(e, '#insights')}
          >
            <span>Read More</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </aside>
    </div>
  );
};
