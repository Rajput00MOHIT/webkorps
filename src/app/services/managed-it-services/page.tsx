import type { Metadata } from 'next';
import { ManagedITServicesPage } from '../../../views/ManagedITServices/ManagedITServicesPage';

export const metadata: Metadata = {
  title: 'Managed IT Services & 24/7 Infrastructure Support | Webkorps',
  description:
    'Proactive 24/7 IT management, cloud operations, network monitoring, helpdesk support, and cybersecurity defense to ensure uninterrupted business continuity.',
  alternates: {
    canonical: '/services/managed-it-services',
  },
  openGraph: {
    title: 'Managed IT Services & 24/7 Infrastructure Support | Webkorps',
    description:
      'Proactive 24/7 IT management, cloud operations, network monitoring, helpdesk support, and cybersecurity defense to ensure uninterrupted business continuity.',
    url: 'https://www.webkorps.com/services/managed-it-services',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <ManagedITServicesPage />;
}

