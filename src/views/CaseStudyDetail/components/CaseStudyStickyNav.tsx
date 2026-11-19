'use client';

import React, { useEffect, useState } from 'react';
import './CaseStudyComponents.css';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'approach', label: 'Approach' },
  { id: 'solution', label: 'Solution' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'results', label: 'Results' },
  { id: 'technology', label: 'Technology' },
  { id: 'faq', label: 'FAQ' },
];

export const CaseStudyStickyNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Determine active section
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
        Boolean
      ) as HTMLElement[];

      const scrollPos = scrollY + 160;
      let current = activeSection;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          current = sec.id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 90;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <aside className="wk-cs-nav-rail" aria-label="Case Study In-Page Navigation">
      <div className="wk-cs-nav-rail__inner">
        {/* Reading Progress Indicator */}
        <div className="wk-cs-nav-rail__progress-wrap" aria-hidden="true">
          <div className="wk-cs-nav-rail__progress-bar">
            <div
              className="wk-cs-nav-rail__progress-fill"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <span className="wk-cs-nav-rail__progress-text">
            {Math.round(scrollProgress)}% Read
          </span>
        </div>

        {/* Anchor Links */}
        <nav className="wk-cs-nav-rail__list-nav">
          <ul className="wk-cs-nav-rail__list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="wk-cs-nav-rail__item">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`wk-cs-nav-rail__link ${
                      isActive ? 'wk-cs-nav-rail__link--active' : ''
                    }`}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    <span className="wk-cs-nav-rail__dot" aria-hidden="true" />
                    <span className="wk-cs-nav-rail__label">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contextual Action */}
        <div className="wk-cs-nav-rail__action">
          <a href="#case-study-inquiry" className="wk-cs-nav-rail__btn">
            Book a Scoping Call
          </a>
        </div>
      </div>
    </aside>
  );
};
