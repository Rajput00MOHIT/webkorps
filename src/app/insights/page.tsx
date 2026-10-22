import type { Metadata } from 'next';
import { InsightsPage } from '../../views/Insights/InsightsPage';

export const metadata: Metadata = {
  title: 'Thought Leadership & Industry Insights | Webkorps',
  description:
    'Explore industry trends, expert perspectives, and innovative ideas shaping the future of business. Practical frameworks, leadership insights, and technology solutions.',
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    title: 'Insights | Webkorps',
    description:
      'Explore industry trends, expert perspectives, and innovative ideas shaping the future of business.',
    url: 'https://www.webkorps.com/insights',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <InsightsPage />;
}
