import type { Metadata } from 'next';
import { FintechPage } from '../../../views/Fintech';

export const metadata: Metadata = {
  title: 'Banking & Financial Software Development | Webkorps',
  description:
    'Secure, resilient banking software: core banking platforms, payment gateways, eKYC, and AI risk scoring.',
  alternates: {
    canonical: '/industries/banking-finance',
  },
};

export default function Page() {
  return <FintechPage />;
}
