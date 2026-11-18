import type { Metadata } from 'next';
import { LogisticsSoftwareDevelopmentPage } from '../../../views/LogisticsSoftwareDevelopment';

export const metadata: Metadata = {
  title: 'Logistics Technology & Supply Chain Solutions | Webkorps Industries',
  description:
    'Build smarter logistics operations with custom software, real-time tracking, connected systems, and intelligent automation. Trusted by leading freight and enterprise logistics operators.',
  alternates: {
    canonical: '/industries/logistics',
  },
  openGraph: {
    title: 'Logistics Technology & Supply Chain Solutions | Webkorps',
    description:
      'Build smarter logistics operations with custom software, real-time tracking, connected systems, and intelligent automation. Trusted by leading freight and enterprise logistics operators.',
    url: 'https://www.webkorps.com/industries/logistics',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <LogisticsSoftwareDevelopmentPage />;
}
