'use client';

import React from 'react';
import Link from 'next/link';
import { CASE_STUDIES_NAV_DATA } from './navigationData';

interface CaseStudiesMenuProps {
  onItemClick?: () => void;
}

export const CaseStudiesMenu: React.FC<CaseStudiesMenuProps> = ({ onItemClick }) => {
  return (
    <div className="wk-mega-menu__generic">
      <div className="wk-mega-menu__generic-grid wk-mega-menu__generic-grid--2col">
        {CASE_STUDIES_NAV_DATA.map((study, idx) => (
          <Link
            key={study.id}
            href={study.href || '/case-studies'}
            className="wk-mega-menu__item wk-mega-menu__item--card"
            onClick={onItemClick}
            style={{ '--item-stagger': `${idx * 40}ms` } as React.CSSProperties}
          >
            <div className="wk-mega-menu__item-content">
              <div className="wk-mega-menu__insight-meta">
                <span className="wk-mega-menu__category-tag">{study.category}</span>
                <span className="wk-mega-menu__read-time" style={{ color: '#0066FF', fontWeight: 600 }}>
                  {study.client}
                </span>
              </div>
              <span className="wk-mega-menu__item-title">{study.title}</span>
              <p className="wk-mega-menu__item-desc">{study.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link
          href="/case-studies"
          onClick={onItemClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#1887C9',
            fontWeight: 600,
            fontSize: '14.5px',
            textDecoration: 'none',
          }}
        >
          <span>Explore All Case Studies</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};
