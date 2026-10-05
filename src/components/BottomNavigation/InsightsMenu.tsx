'use client';

import React from 'react';
import trendsTechImg from '../../assets/insights/trends-tech.png';
import eventsWebinarsImg from '../../assets/insights/events-webinars.png';
import { FeaturedInsightCard } from '../../views/Insights/FeaturedInsightCard';
import { ImpactPanel } from '../../views/Insights/ImpactPanel';
import '../../views/Insights/InsightsPage.css';

interface InsightsMenuProps {
  onItemClick?: () => void;
}

export const InsightsMenu: React.FC<InsightsMenuProps> = ({ onItemClick }) => {
  const handleClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="wk-insights-page__grid" style={{ width: '100%' }} onClick={handleClick}>
      <div className="wk-insights-page__cards">
        <FeaturedInsightCard
          id="preview-trends-tech"
          badge="BLOGS"
          title="Trends on Modern Technologies"
          description="Expert perspectives on AI, cloud, mobile, and enterprise tech."
          image={trendsTechImg}
          imageAlt="Trends on Modern Technologies"
          ctaText="Explore Blogs"
          href="#blogs"
        />

        <FeaturedInsightCard
          id="preview-events-webinars"
          badge="EVENTS"
          title="Industry Events & Webinars"
          description="Stay updated with the latest tech summits, webinars, and networking events."
          image={eventsWebinarsImg}
          imageAlt="Industry Events & Webinars"
          ctaText="View Events"
          href="#events"
        />
      </div>

      <ImpactPanel />
    </div>
  );
};
