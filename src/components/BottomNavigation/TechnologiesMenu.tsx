'use client';

import React from 'react';
import techSpotlightImg from '../../assets/technologies/tech-spotlight.png';
import { getImgSrc } from '../../utils/image';

interface TechnologiesMenuProps {
  onItemClick?: () => void;
}

interface TechnologyCardItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

const TECHNOLOGIES_LIST: TechnologyCardItem[] = [
  {
    id: 'dotnet',
    title: '.NET',
    description: 'Building scalable and robust enterprise web solutions',
    href: '#integrations',
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Powering AI, data science, and web applications',
    href: '#integrations',
  },
  {
    id: 'java',
    title: 'Java',
    description: 'Secure, high-performance applications for diverse platforms',
    href: '#integrations',
  },
  {
    id: 'dotnet-enterprise',
    title: '.NET Enterprise',
    description: 'Custom enterprise solutions built on the .NET framework',
    href: '#integrations',
  },
  {
    id: 'android',
    title: 'Android',
    description: 'Creating seamless mobile experiences for Android users',
    href: '#integrations',
  },
  {
    id: 'react-native',
    title: 'React Native',
    description: 'High-quality cross-platform mobile apps from a single codebase',
    href: '#integrations',
  },
  {
    id: 'ios',
    title: 'IOS',
    description: 'Innovative iOS solutions for Apple devices',
    href: '#integrations',
  },
  {
    id: 'php',
    title: 'PHP',
    description: 'Reliable and scalable web applications for global reach',
    href: '#integrations',
  },
];

function renderTechIcon(id: string) {
  switch (id) {
    case 'dotnet':
    case 'dotnet-enterprise':
      return (
        <span
          style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#1887C9',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          .NET
        </span>
      );
    case 'python':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2c-3.3 0-5 1.7-5 4v2h5v1H5c-2.3 0-4 1.7-4 5s1.7 5 4 5h2v-2.5c0-1.9 1.6-3.5 3.5-3.5h5c1.4 0 2.5-1.1 2.5-2.5V6c0-2.3-1.7-4-6-4z" />
          <circle cx="9" cy="5" r="0.75" fill="currentColor" />
          <path d="M12 22c3.3 0 5-1.7 5-4v-2h-5v-1h7c2.3 0 4-1.7 4-5s-1.7-5-4-5h-2v2.5c0 1.9-1.6 3.5-3.5 3.5h-5c-1.4 0-2.5 1.1-2.5 2.5V18c0 2.3 1.7 4 6 4z" />
          <circle cx="15" cy="19" r="0.75" fill="currentColor" />
        </svg>
      );
    case 'java':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      );
    case 'android':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 10v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
          <path d="M8 19v3" />
          <path d="M16 19v3" />
          <path d="M6 10a6 6 0 0 1 12 0" />
          <circle cx="9" cy="8" r="1" fill="currentColor" />
          <circle cx="15" cy="8" r="1" fill="currentColor" />
          <line x1="7" y1="4" x2="5" y2="2" />
          <line x1="17" y1="4" x2="19" y2="2" />
        </svg>
      );
    case 'react-native':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'ios':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 20.94c1.88 0 3.05-.88 4.31-.88 1.25 0 2.29.88 4.19.88 1.63 0 3.25-1.12 4.31-2.69-2.25-1.31-2.5-4.44-.25-5.94-1.25-1.81-3.13-2.06-4.25-2.06-1.56 0-2.88.88-3.75.88-.94 0-2.19-.88-3.69-.88-2.69 0-5.19 2.19-5.19 6.25 0 3.88 2.38 8.44 4.32 8.44z" />
          <path d="M15.5 5.5c.69-.88 1.13-2.06.94-3.25-1.06.06-2.31.75-3 1.56-.63.75-1.19 1.94-.94 3.13 1.19.06 2.31-.56 3-1.44z" />
        </svg>
      );
    case 'php':
      return (
        <span
          style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#1887C9',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            textTransform: 'uppercase',
          }}
        >
          PHP
        </span>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
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
    <div className="wk-mega-menu__tech-layout">
      {/* Left: 2-Column Technology Grid (8 Cards) */}
      <div className="wk-mega-menu__tech-grid">
        {TECHNOLOGIES_LIST.map((tech, idx) => (
          <a
            key={tech.id}
            href={tech.href}
            className="wk-mega-menu__tech-card"
            onClick={(e) => handleLinkClick(e, tech.href)}
            style={{ '--item-stagger': `${idx * 25}ms` } as React.CSSProperties}
          >
            <div className="wk-mega-menu__tech-icon-box" aria-hidden="true">
              {renderTechIcon(tech.id)}
            </div>
            <div className="wk-mega-menu__tech-info">
              <span className="wk-mega-menu__tech-title">{tech.title}</span>
              <p className="wk-mega-menu__tech-desc">{tech.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Right: Tech Spotlight Card */}
      <aside className="wk-mega-menu__tech-spotlight" aria-label="Tech Spotlight">
        <img
          src={getImgSrc(techSpotlightImg)}
          alt="Cutting-Edge Technologies Powering Future Business"
          className="wk-mega-menu__tech-spotlight-img"
          width={340}
          height={165}
          loading="eager"
        />
        <div className="wk-mega-menu__tech-spotlight-content">
          <span className="wk-mega-menu__tech-spotlight-badge">TECH SPOTLIGHT</span>
          <h4 className="wk-mega-menu__tech-spotlight-title">
            Cutting-Edge Technologies Powering Future Business
          </h4>
          <p className="wk-mega-menu__tech-spotlight-desc">
            Discover how our stack enabling AI, cloud-first engineering, and secure mobile solutions is reshaping global industries.
          </p>
          <a
            href="#integrations"
            className="wk-mega-menu__tech-spotlight-link"
            onClick={(e) => handleLinkClick(e, '#integrations')}
          >
            <span>Read More</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </aside>
    </div>
  );
};
