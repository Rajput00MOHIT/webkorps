import type { Metadata } from 'next';
import { RetailEcommercePage } from '../../../views/RetailEcommerce';

export const metadata: Metadata = {
  title: 'Retail & Digital Commerce Software Development | Webkorps',
  description:
    'Headless digital commerce storefronts, distributed order management, and omnichannel retail platforms.',
  alternates: {
    canonical: '/industries/retail',
  },
};

export default function Page() {
  return <RetailEcommercePage />;
}
