import type { Metadata } from 'next';
import { ServicesPage } from '../../views/Services/ServicesPage';

export const metadata: Metadata = {
  title: 'Digital Services & Engineering Solutions | Webkorps',
  description:
    'Powering your business with digital services built for growth and innovation. Custom software, AI & ML, cloud applications, mobile and enterprise development.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | Webkorps',
    description:
      'Powering your business with digital services built for growth and innovation.',
    url: 'https://www.webkorps.com/services',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <ServicesPage />;
}
