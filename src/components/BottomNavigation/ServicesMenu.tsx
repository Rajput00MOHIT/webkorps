'use client';

import React, { useState } from 'react';
import { SERVICES_DATA, IMPACT_DATA } from './navigationData';

interface ServicesMenuProps {
  onItemClick?: () => void;
}

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
      {/* Desktop 3-Column Layout */}
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
          <div className="wk-mega-menu__impact-inner">
            <span className="wk-mega-menu__impact-badge">{IMPACT_DATA.title}</span>
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
