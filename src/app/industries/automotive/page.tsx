import type { Metadata } from 'next';
import { IndustryDetailView } from '../../../views/IndustryTemplate/IndustryDetailView';
import { automotiveConfig } from '../../../views/IndustryTemplate/data/automotiveConfig';

export const metadata: Metadata = {
  title: 'Automotive Software Development & Connected Mobility | Webkorps',
  description:
    'Engineer connected automotive software: EV fleet telematics, dealership management systems (DMS), in-vehicle IVI software, and predictive maintenance. Trusted by leading automotive operators.',
  alternates: {
    canonical: '/industries/automotive',
  },
  openGraph: {
    title: 'Automotive Software Development & Connected Mobility | Webkorps',
    description:
      'Engineer connected automotive software: EV fleet telematics, dealership management systems (DMS), in-vehicle IVI software, and predictive maintenance.',
    url: 'https://www.webkorps.com/industries/automotive',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <IndustryDetailView config={automotiveConfig} />;
}
