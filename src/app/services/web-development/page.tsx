import type { Metadata } from 'next';
import { WebDevelopmentPage } from '../../../views/WebDevelopment/WebDevelopmentPage';

export const metadata: Metadata = {
  title: 'Web Development Services | Custom Web Applications | Webkorps',
  description:
    'Build fast, secure, and scalable web applications tailored to your business goals: React, Next.js, enterprise portals, full-stack APIs, and cloud-native web platforms.',
  alternates: {
    canonical: '/services/web-development',
  },
  openGraph: {
    title: 'Web Development Services | Custom Web Applications | Webkorps',
    description:
      'Build fast, secure, and scalable web applications tailored to your business goals: React, Next.js, enterprise portals, full-stack APIs, and cloud-native web platforms.',
    url: 'https://www.webkorps.com/services/web-development',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <WebDevelopmentPage />;
}

