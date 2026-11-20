import type { Metadata } from 'next';
import { RetailEcommercePage } from '../../../views/RetailEcommerce';

export const metadata: Metadata = {
  title: 'Retail & E-Commerce Software Development | Webkorps',
  description:
    'Build high-converting headless digital commerce storefronts, distributed order management, AI product discovery, and omnichannel retail platforms. Trusted by leading retail brands and marketplaces.',
  alternates: {
    canonical: '/industries/retail-ecommerce',
  },
  openGraph: {
    title: 'Retail & E-Commerce Software Development | Webkorps',
    description:
      'Build high-converting headless digital commerce storefronts, distributed order management, AI product discovery, and omnichannel retail platforms.',
    url: 'https://www.webkorps.com/industries/retail-ecommerce',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <RetailEcommercePage />;
}
