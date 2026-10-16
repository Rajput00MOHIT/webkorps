import React from 'react';
import mainLogo from '../../../assets/main logo.png';
import { getImgSrc } from '../../../utils/image';
import { CTA } from '../../../components/CTA';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="wk-header" role="banner">
      <div className="site-container wk-header__inner">
        {/* Brand Logo */}
        <a href="/" className="wk-header__logo-link" aria-label="Webkorps Home">
          <img
            src={getImgSrc(mainLogo)}
            alt="Webkorps"
            className="wk-header__logo"
            width={160}
            height={40}
          />
        </a>

        {/* Primary Desktop Navigation */}
        <nav className="wk-header__nav" aria-label="Main Navigation">
          <ul className="wk-header__nav-list">
            <li>
              <a href="/about-us" className="wk-header__nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/ai-solutions" className="wk-header__nav-link">
                AI Solutions
              </a>
            </li>
            <li>
              <a href="/#case-studies" className="wk-header__nav-link">
                Case Studies
              </a>
            </li>
            <li>
              <a href="/#careers" className="wk-header__nav-link">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        {/* Header Right Action CTA */}
        <div className="wk-header__actions">
          <CTA
            href="#contact"
            variant="primary"
            size="sm"
            pill
            arrow="diagonal"
            aria-label="Contact us"
          >
            Contact us
          </CTA>
        </div>
      </div>
    </header>
  );
};
