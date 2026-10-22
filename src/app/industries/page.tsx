import type { Metadata } from 'next';
import { IndustriesPage } from '../../views/Industries/IndustriesPage';

export const metadata: Metadata = {
  title: 'Industries | Webkorps - Tech Solutions Driving Transformation',
  description:
    'Explore how we have helped organizations innovate, optimize operations, and achieve growth through technology across Healthcare, Retail, Logistics, Manufacturing, and Fintech.',
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Industries | Webkorps',
    description:
      'Explore how we have helped organizations innovate, optimize operations, and achieve growth through technology.',
    url: 'https://www.webkorps.com/industries',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <IndustriesPage />;
}
