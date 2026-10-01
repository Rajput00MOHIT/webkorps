'use client';

import React, { useState } from 'react';
import { SERVICES_DATA, IMPACT_DATA } from './navigationData';

interface ServicesMenuProps {
  onItemClick?: () => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'web-dev': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  'custom-software': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'ecommerce': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  'enterprise-software': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="21" x2="21" y2="21" />
      <line x1="6" y1="18" x2="6" y2="9" />
      <line x1="10" y1="18" x2="10" y2="9" />
      <line x1="14" y1="18" x2="14" y2="9" />
      <line x1="18" y1="18" x2="18" y2="9" />
      <polygon points="12 2 2 7 22 7" />
    </svg>
  ),
  'cloud-app': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  'staff-aug': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  'managed-it': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  'ai-ml': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  'blockchain': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  'iot': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  ),
  'salesforce': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
};

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onItemClick }) => {
  // Mobile accordion state for sub-categories
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'web-mobile': true,
    'enterprise-cloud': true,
    'emerging-tech': true,
  });

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
    <div className="wk-mega-menu__services">
      {/* Desktop 3-Column + 1 Impact Layout */}
      <div className="wk-mega-menu__services-grid">
        {SERVICES_DATA.map((category, colIdx) => (
          <div
            key={category.id}
            className="wk-mega-menu__col"
            style={{ '--col-stagger': `${(colIdx + 1) * 60}ms` } as React.CSSProperties}
          >
            {/* Desktop Category Title */}
            <div className="wk-mega-menu__col-header">
              <h3 className="wk-mega-menu__col-title">{category.name}</h3>
            </div>

            {/* Mobile Category Accordion Trigger */}
            <button
              type="button"
              className="wk-mega-menu__mobile-cat-trigger"
              onClick={() => toggleCategory(category.id)}
              aria-expanded={openCategories[category.id] ?? false}
            >
              <span>{category.name}</span>
              <svg
                className={`wk-mega-menu__cat-chevron ${
                  openCategories[category.id] ? 'wk-mega-menu__cat-chevron--open' : ''
                }`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Items List */}
            <div
              className={`wk-mega-menu__items-list ${
                openCategories[category.id] ? 'wk-mega-menu__items-list--open' : ''
              }`}
            >
              {category.items.map((item, itemIdx) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="wk-mega-menu__item"
                  onClick={(e) => handleLinkClick(e, item.href)}
                  style={{ '--item-stagger': `${colIdx * 40 + itemIdx * 35}ms` } as React.CSSProperties}
                >
                  <div className="wk-mega-menu__service-icon-box" aria-hidden="true">
                    {SERVICE_ICONS[item.id] || (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    )}
                  </div>
                  <div className="wk-mega-menu__item-content">
                    <span className="wk-mega-menu__item-title">{item.title}</span>
                    <p className="wk-mega-menu__item-desc">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Right-Side Impact Panel */}
        <aside className="wk-mega-menu__impact-panel" aria-label="Webkorps Impact Highlights">
          <div className="wk-mega-menu__col-header">
            <h3 className="wk-mega-menu__col-title wk-mega-menu__col-title--impact">{IMPACT_DATA.title}</h3>
          </div>

          <div className="wk-mega-menu__impact-inner">
            <div className="wk-mega-menu__impact-emblem" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75" />
                <path d="M7 10.5l2.5 4.5L12 11.5l2.5 3.5L17 10.5" />
              </svg>
            </div>

            <h4 className="wk-mega-menu__impact-headline">{IMPACT_DATA.highlight}</h4>
            <p className="wk-mega-menu__impact-desc">{IMPACT_DATA.description}</p>

            <div className="wk-mega-menu__impact-stats">
              {IMPACT_DATA.stats.map((stat, sIdx) => (
                <div key={sIdx} className="wk-mega-menu__impact-stat-item">
                  <div className="wk-mega-menu__impact-stat-val">{stat.value}</div>
                  <div className="wk-mega-menu__impact-stat-lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

