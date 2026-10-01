'use client';

import React from 'react';
import { TECHNOLOGIES_NAV_DATA } from './navigationData';

interface TechnologiesMenuProps {
  onItemClick?: () => void;
}

export const TechnologiesMenu: React.FC<TechnologiesMenuProps> = ({ onItemClick }) => {
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
        {TECHNOLOGIES_NAV_DATA.map((tech, idx) => (
          <a
            key={tech.id}
            href={tech.href}
            className="wk-mega-menu__item wk-mega-menu__item--card"
            onClick={(e) => handleLinkClick(e, tech.href)}
            style={{ '--item-stagger': `${idx * 40}ms` } as React.CSSProperties}
          >
            <div className="wk-mega-menu__item-content">
              <span className="wk-mega-menu__category-tag">{tech.category}</span>
              <span className="wk-mega-menu__item-title">{tech.title}</span>
              <p className="wk-mega-menu__item-desc">{tech.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
