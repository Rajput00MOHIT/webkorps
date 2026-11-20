import type { Metadata } from 'next';
import { IndustryDetailView } from '../../../views/IndustryTemplate/IndustryDetailView';
import { travelConfig } from '../../../views/IndustryTemplate/data/travelConfig';

export const metadata: Metadata = {
  title: 'Travel & Hospitality Software Development | Webkorps',
  description:
    'Build connected travel & hospitality software: booking engines, property management (PMS), dynamic pricing, and guest mobile experiences. Trusted by leading hotels, resorts, and travel brands.',
  alternates: {
    canonical: '/industries/travel-hospitality',
  },
  openGraph: {
    title: 'Travel & Hospitality Software Development | Webkorps',
    description:
      'Build connected travel & hospitality software: booking engines, property management (PMS), dynamic pricing, and guest mobile experiences.',
    url: 'https://www.webkorps.com/industries/travel-hospitality',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <IndustryDetailView config={travelConfig} />;
}
