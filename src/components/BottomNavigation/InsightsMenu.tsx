'use client';

import React, { useState } from 'react';
import trendsTechImg from '../../assets/insights/trends-tech.png';
import eventsWebinarsImg from '../../assets/insights/events-webinars.png';
import { FeaturedInsightCard } from '../../views/Insights/FeaturedInsightCard';
import { ImpactPanel } from '../../views/Insights/ImpactPanel';
import {
  INSIGHTS_NAV_DATA,
  INSIGHT_EVENTS_DATA,
  CASE_STUDIES_NAV_DATA,
} from './navigationData';
import '../../views/Insights/InsightsPage.css';

interface InsightsMenuProps {
  onItemClick?: () => void;
}

type InsightCategoryTab = 'all' | 'case-study' | 'blogs' | 'events' | 'webinar';

const INSIGHT_CATEGORY_TABS: { id: InsightCategoryTab; label: string }[] = [
  { id: 'all', label: 'All Insights' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'events', label: 'Events' },
  { id: 'webinar', label: 'Webinar' },
];

export const InsightsMenu: React.FC<InsightsMenuProps> = ({ onItemClick }) => {
  const [activeTab, setActiveTab] = useState<InsightCategoryTab>('all');

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
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
    <div className="wk-insights-menu-wrapper" style={{ width: '100%' }}>
      {/* Category Tabs inside Floating Insights */}
      <div className="wk-insights-menu__tabs" role="tablist" aria-label="Insights category filter">
        {INSIGHT_CATEGORY_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`wk-insights-menu__tab-btn ${
              activeTab === tab.id ? 'wk-insights-menu__tab-btn--active' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab: ALL INSIGHTS */}
      {activeTab === 'all' && (
        <div className="wk-insights-page__grid">
          <div className="wk-insights-page__cards">
            <FeaturedInsightCard
              id="preview-trends-tech"
              badge="BLOGS"
              title="Trends on Modern Technologies"
              description="Expert perspectives on AI, cloud, mobile, and enterprise tech."
              image={trendsTechImg}
              imageAlt="Trends on Modern Technologies"
              ctaText="Explore Blogs"
              href="/insights"
              onClick={(e) => handleLinkClick(e, '/insights')}
            />

            <FeaturedInsightCard
              id="preview-events-webinars"
              badge="EVENTS"
              title="Industry Events & Webinars"
              description="Stay updated with the latest tech summits, webinars, and networking events."
              image={eventsWebinarsImg}
              imageAlt="Industry Events & Webinars"
              ctaText="View Events"
              href="/insights"
              onClick={(e) => handleLinkClick(e, '/insights')}
            />
          </div>

          <ImpactPanel />
        </div>
      )}

      {/* Tab: BLOGS & TECH TRENDS */}
      {activeTab === 'blogs' && (
        <div className="wk-insights-menu__tab-view">
          <div className="wk-insights-menu__featured-side">
            <FeaturedInsightCard
              id="preview-trends-tech-blogs"
              badge="FEATURED BLOG"
              title="Trends on Modern Technologies"
              description="Deep-dive analyses and engineering insights from our lead architects."
              image={trendsTechImg}
              imageAlt="Trends on Modern Technologies"
              ctaText="Read Latest Articles"
              href="/insights"
              onClick={(e) => handleLinkClick(e, '/insights')}
            />
          </div>

          <div className="wk-insights-menu__articles-list">
            {INSIGHTS_NAV_DATA.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="wk-mega-menu__item wk-mega-menu__item--card"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                <div className="wk-mega-menu__item-content">
                  <div className="wk-mega-menu__insight-meta">
                    <span className="wk-mega-menu__category-tag">{item.category}</span>
                    <span className="wk-mega-menu__read-time">{item.readTime}</span>
                  </div>
                  <span className="wk-mega-menu__item-title">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Tab: EVENTS */}
      {activeTab === 'events' && (
        <div className="wk-insights-menu__tab-view">
          <div className="wk-insights-menu__featured-side">
            <FeaturedInsightCard
              id="preview-events-tab"
              badge="EVENTS & SUMMITS"
              title="Industry Events & Summits"
              description="Connect with Webkorps thought leaders at upcoming summits and live workshops."
              image={eventsWebinarsImg}
              imageAlt="Industry Events & Summits"
              ctaText="Explore Calendar"
              href="/insights"
              onClick={(e) => handleLinkClick(e, '/insights')}
            />
          </div>

          <div className="wk-insights-menu__articles-list">
            {INSIGHT_EVENTS_DATA.filter((event) => event.badge !== 'WEBINAR').map((event) => (
              <a
                key={event.id}
                href={event.href}
                className="wk-mega-menu__item wk-mega-menu__item--card"
                onClick={(e) => handleLinkClick(e, event.href)}
              >
                <div className="wk-mega-menu__item-content">
                  <div className="wk-mega-menu__insight-meta">
                    <span className="wk-mega-menu__category-tag">{event.badge}</span>
                    <span className="wk-mega-menu__read-time" style={{ color: '#1887C9', fontWeight: 600 }}>
                      {event.date}
                    </span>
                  </div>
                  <span className="wk-mega-menu__item-title">{event.title}</span>
                  <p className="wk-mega-menu__item-desc">{event.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Tab: WEBINARS */}
      {activeTab === 'webinar' && (
        <div className="wk-insights-menu__tab-view">
          <div className="wk-insights-menu__featured-side">
            <FeaturedInsightCard
              id="preview-webinars-tab"
              badge="WEBINAR"
              title="Interactive Webinars & Tech Sessions"
              description="Live masterclasses and architectural deep dives hosted by Webkorps experts."
              image={eventsWebinarsImg}
              imageAlt="Webinars and Tech Sessions"
              ctaText="Join Next Webinar"
              href="/insights"
              onClick={(e) => handleLinkClick(e, '/insights')}
            />
          </div>

          <div className="wk-insights-menu__articles-list">
            {INSIGHT_EVENTS_DATA.filter((event) => event.badge === 'WEBINAR').map((event) => (
              <a
                key={event.id}
                href={event.href}
                className="wk-mega-menu__item wk-mega-menu__item--card"
                onClick={(e) => handleLinkClick(e, event.href)}
              >
                <div className="wk-mega-menu__item-content">
                  <div className="wk-mega-menu__insight-meta">
                    <span className="wk-mega-menu__category-tag">{event.badge}</span>
                    <span className="wk-mega-menu__read-time" style={{ color: '#1887C9', fontWeight: 600 }}>
                      {event.date}
                    </span>
                  </div>
                  <span className="wk-mega-menu__item-title">{event.title}</span>
                  <p className="wk-mega-menu__item-desc">{event.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Tab: CASE STUDY */}
      {activeTab === 'case-study' && (
        <div className="wk-insights-page__grid">
          <div className="wk-insights-menu__case-grid">
            {CASE_STUDIES_NAV_DATA.map((study) => (
              <a
                key={study.id}
                href={study.href}
                className="wk-mega-menu__item wk-mega-menu__item--card"
                onClick={(e) => handleLinkClick(e, study.href)}
              >
                <div className="wk-mega-menu__item-content">
                  <div className="wk-mega-menu__insight-meta">
                    <span className="wk-mega-menu__category-tag">{study.category}</span>
                    <span className="wk-mega-menu__read-time" style={{ color: '#1887C9', fontWeight: 600 }}>
                      {study.client}
                    </span>
                  </div>
                  <span className="wk-mega-menu__item-title">{study.title}</span>
                  <p className="wk-mega-menu__item-desc">{study.description}</p>
                </div>
              </a>
            ))}
          </div>

          <ImpactPanel />
        </div>
      )}

      {/* Direct Route Action to Full Insights Page */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a
          href="/insights"
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
          <span>Explore All Thought Leadership & Insights</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

