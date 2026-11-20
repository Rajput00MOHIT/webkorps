import type { Metadata } from 'next';
import { IndustryDetailView } from '../../../views/IndustryTemplate/IndustryDetailView';
import { manufacturingConfig } from '../../../views/IndustryTemplate/data/manufacturingConfig';

export const metadata: Metadata = {
  title: 'Manufacturing Software Development & Smart Factory Solutions | Webkorps',
  description:
    'Engineer smart manufacturing software: MES platforms, industrial IoT telemetry, automated predictive maintenance, and supply chain ERP integration.',
  alternates: {
    canonical: '/industries/manufacturing',
  },
  openGraph: {
    title: 'Manufacturing Software Development & Smart Factory Solutions | Webkorps',
    description:
      'Engineer smart manufacturing software: MES platforms, industrial IoT telemetry, automated predictive maintenance, and supply chain ERP integration.',
    url: 'https://www.webkorps.com/industries/manufacturing',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <IndustryDetailView config={manufacturingConfig} />;
}
