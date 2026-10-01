'use client';

import React from 'react';
import { INDUSTRIES_NAV_DATA } from './navigationData';

interface IndustriesMenuProps {
  onItemClick?: () => void;
}

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
    <div className="wk-mega-menu__generic">
      <div className="wk-mega-menu__generic-grid wk-mega-menu__generic-grid--2col">
        {INDUSTRIES_NAV_DATA.map((industry, idx) => (
          <a
            key={industry.id}
            href={industry.href}
            className="wk-mega-menu__item wk-mega-menu__item--card"
            onClick={(e) => handleLinkClick(e, industry.href)}
            style={{ '--item-stagger': `${idx * 40}ms` } as React.CSSProperties}
          >
            <div className="wk-mega-menu__item-content">
              <span className="wk-mega-menu__item-title">{industry.title}</span>
              <p className="wk-mega-menu__item-desc">{industry.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
