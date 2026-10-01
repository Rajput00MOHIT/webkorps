'use client';

import React, { useState, useEffect, useRef } from 'react';
import mainLogo from '../../assets/main logo.png';
import { getImgSrc } from '../../utils/image';
import type { ActiveMenuType } from './navigationData';
import { NavigationTrigger } from './NavigationTrigger';
import { ConversationCTA } from './ConversationCTA';
import { MegaMenu } from './MegaMenu';
import { AIAssistantModal } from '../AIAssistant';
import './BottomNavigation.css';

export const BottomNavigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<ActiveMenuType>(null);
  const [isAiOpen, setIsAiOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menu: NonNullable<ActiveMenuType>) => {
    // If AI is open, close it when opening a navigation menu
    if (isAiOpen) {
      setIsAiOpen(false);
    }
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const toggleAiAssistant = () => {
    // If a mega-menu is open, close it
    if (activeMenu) {
      setActiveMenu(null);
    }
    setIsAiOpen((prev) => !prev);
  };

  const closeAiAssistant = () => {
    setIsAiOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        closeMenu();
        closeAiAssistant();
      }
    };

    if (activeMenu || isAiOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [activeMenu, isAiOpen]);

  return (
    <div
      ref={containerRef}
      className={`wk-bottom-nav-root ${activeMenu || isAiOpen ? 'wk-bottom-nav-root--open' : ''}`}
      role="region"
      aria-label="Floating Navigation Dock"
    >
      {/* Expanded Mega Menu Panel */}
      <MegaMenu activeMenu={activeMenu} onClose={closeMenu} />

      {/* Webkorps AI Assistant Modal */}
      <AIAssistantModal isOpen={isAiOpen} onClose={closeAiAssistant} />

      {/* Primary Floating Rounded Bar */}
      <nav
        className="wk-bottom-nav"
        aria-label="Bottom Quick Navigation"
      >
        <div className="wk-bottom-nav__inner">
          {/* Webkorps Logo */}
          <a
            href="/"
            className="wk-bottom-nav__brand"
            aria-label="Webkorps Home"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                closeMenu();
                closeAiAssistant();
              }
            }}
          >
            <img
              src={getImgSrc(mainLogo)}
              alt="Webkorps"
              className="wk-bottom-nav__logo"
              width={130}
              height={32}
            />
          </a>

          {/* Navigation Triggers */}
          <div className="wk-bottom-nav__triggers" role="menubar">
            <NavigationTrigger
              id="trigger-services"
              label="Services"
              isOpen={activeMenu === 'services'}
              controlsId="mega-menu-services"
              onClick={() => toggleMenu('services')}
            />

            <NavigationTrigger
              id="trigger-industries"
              label="Industries"
              isOpen={activeMenu === 'industries'}
              controlsId="mega-menu-industries"
              onClick={() => toggleMenu('industries')}
            />

            <NavigationTrigger
              id="trigger-case-studies"
              label="Case Studies"
              isOpen={activeMenu === 'case-studies'}
              controlsId="mega-menu-case-studies"
              onClick={() => toggleMenu('case-studies')}
            />

            <NavigationTrigger
              id="trigger-technologies"
              label="Technologies"
              isOpen={activeMenu === 'technologies'}
              controlsId="mega-menu-technologies"
              onClick={() => toggleMenu('technologies')}
            />

            <NavigationTrigger
              id="trigger-insights"
              label="Insights"
              isOpen={activeMenu === 'insights'}
              controlsId="mega-menu-insights"
              onClick={() => toggleMenu('insights')}
            />
          </div>

          {/* Start the Conversation / AI Assistant CTA */}
          <div className="wk-bottom-nav__action">
            <ConversationCTA
              isOpen={isAiOpen}
              onClick={toggleAiAssistant}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
