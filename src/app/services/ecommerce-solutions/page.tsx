import type { Metadata } from 'next';
import { EcommerceSolutionsPage } from '../../../views/EcommerceSolutions/EcommerceSolutionsPage';

export const metadata: Metadata = {
  title: 'E-Commerce Development & Headless Storefront Solutions | Webkorps',
  description:
    'Engineer high-converting digital shopping experiences: headless composable commerce, custom Shopify Plus & Magento development, and omnichannel ERP integrations.',
  alternates: {
    canonical: '/services/ecommerce-solutions',
  },
  openGraph: {
    title: 'E-Commerce Development & Headless Storefront Solutions | Webkorps',
    description:
      'Engineer high-converting digital shopping experiences: headless composable commerce, custom Shopify Plus & Magento development, and omnichannel ERP integrations.',
    url: 'https://www.webkorps.com/services/ecommerce-solutions',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <EcommerceSolutionsPage />;
}

