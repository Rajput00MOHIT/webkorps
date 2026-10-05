import type { Metadata } from 'next';
import { InsightsPage } from '../../views/Insights/InsightsPage';

export const metadata: Metadata = {
  title: 'Featured Insights | Webkorps — Trends on Modern Technologies & Events',
  description:
    'Expert perspectives on AI, cloud, mobile, and enterprise technologies, plus upcoming industry summits, webinars, and networking events.',
  alternates: {
    canonical: 'https://www.webkorps.com/insights',
  },
  openGraph: {
    title: 'Featured Insights | Webkorps',
    description:
      'Expert perspectives on AI, cloud, mobile, and enterprise technologies, plus upcoming industry summits and webinars.',
    url: 'https://www.webkorps.com/insights',
    siteName: 'Webkorps',
  },
};

export default function Page() {
  return <InsightsPage />;
}
