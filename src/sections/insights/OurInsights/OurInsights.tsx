import React from 'react';
import { AboutInsights } from '../../about/AboutInsights/AboutInsights';

export interface OurInsightsProps {
  id?: string;
}

/**
 * Our Insights Section Component
 * Source of Truth: Insights Page Section 3 / About Page Insights Section / Careers Page
 *
 * Reuses the existing About page Insights section implementation:
 * - Title: "Our Insights" with "Insights" accented in Webkorps blue (#1887C9)
 * - Subtitle: "Get to know who we are, what we do, and the journey that shapes our vision."
 * - 4-card asymmetric layout:
 *   1. Inclusive Culture (39% width)
 *   2. Our Leadership (61% width)
 *   3. Infrastructure (59% width)
 *   4. Corporate Social Responsibility (41% width)
 * - Complete original card images, hover animations, arrow buttons, and responsive grid
 */
export const OurInsights: React.FC<OurInsightsProps> = ({ id = 'our-insights' }) => {
  return <AboutInsights id={id} />;
};

export default OurInsights;
