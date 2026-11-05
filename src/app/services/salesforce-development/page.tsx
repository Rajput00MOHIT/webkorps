import type { Metadata } from 'next';
import { SalesforceDevelopmentPage } from '../../../views/SalesforceDevelopment/SalesforceDevelopmentPage';

export const metadata: Metadata = {
  title: 'Custom Salesforce Development & CRM Integration Services | Webkorps',
  description:
    'Supercharge customer operations with bespoke Salesforce development, custom Apex & LWC components, AppExchange applications, and seamless enterprise ERP integrations.',
  alternates: {
    canonical: '/services/salesforce-development',
  },
  openGraph: {
    title: 'Custom Salesforce Development & CRM Integration Services | Webkorps',
    description:
      'Supercharge customer operations with bespoke Salesforce development, custom Apex & LWC components, AppExchange applications, and seamless enterprise ERP integrations.',
    url: 'https://www.webkorps.com/services/salesforce-development',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <SalesforceDevelopmentPage />;
}

