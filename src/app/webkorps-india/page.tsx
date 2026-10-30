import type { Metadata } from 'next';
import { WebkorpsIndiaPage } from '../../views/WebkorpsIndia/WebkorpsIndiaPage';

export const metadata: Metadata = {
  title: 'Software Development & Technology Solutions | Webkorps',
  description:
    'Explore custom software, web and mobile development, AI solutions, cloud integration, and engineering services tailored to your business requirements.',
  alternates: {
    canonical: '/webkorps-india',
  },
  openGraph: {
    title: 'Software Development & Technology Solutions | Webkorps',
    description:
      'Explore custom software, web and mobile development, AI solutions, cloud integration, and engineering services tailored to your business requirements.',
    url: 'https://www.webkorps.com/webkorps-india',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <WebkorpsIndiaPage />;
}

