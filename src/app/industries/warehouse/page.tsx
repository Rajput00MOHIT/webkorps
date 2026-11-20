import type { Metadata } from 'next';
import { IndustryDetailView } from '../../../views/IndustryTemplate/IndustryDetailView';
import { warehouseConfig } from '../../../views/IndustryTemplate/data/warehouseConfig';

export const metadata: Metadata = {
  title: 'Warehouse Management Software & Automation Solutions | Webkorps',
  description:
    'Engineer intelligent warehouse software: custom WMS platforms, automated AGV/AMR robotic dispatch, dynamic bin slotting, and real-time inventory tracking.',
  alternates: {
    canonical: '/industries/warehouse',
  },
  openGraph: {
    title: 'Warehouse Management Software & Automation Solutions | Webkorps',
    description:
      'Engineer intelligent warehouse software: custom WMS platforms, automated AGV/AMR robotic dispatch, dynamic bin slotting, and real-time inventory tracking.',
    url: 'https://www.webkorps.com/industries/warehouse',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <IndustryDetailView config={warehouseConfig} />;
}
