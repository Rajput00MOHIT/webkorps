'use client';

import React from 'react';
import { INSIGHTS_NAV_DATA } from './navigationData';

interface InsightsMenuProps {
  onItemClick?: () => void;
}

export const InsightsMenu: React.FC<InsightsMenuProps> = ({ onItemClick }) => {
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
    <div className="wk-mega-menu__generic">
      <div className="wk-mega-menu__generic-grid wk-mega-menu__generic-grid--3col">
        {INSIGHTS_NAV_DATA.map((item, idx) => (
          <a
            key={item.id}
            href={item.href}
            className="wk-mega-menu__item wk-mega-menu__item--card"
            onClick={(e) => handleLinkClick(e, item.href)}
            style={{ '--item-stagger': `${idx * 40}ms` } as React.CSSProperties}
          >
            <div className="wk-mega-menu__item-content">
              <div className="wk-mega-menu__insight-meta">
                <span className="wk-mega-menu__category-tag">{item.category}</span>
                <span className="wk-mega-menu__read-time">{item.readTime}</span>
              </div>
              <span className="wk-mega-menu__item-title wk-mega-menu__item-title--insight">
                {item.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
