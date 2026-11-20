import type { Metadata } from 'next';
import { FintechPage } from '../../../views/Fintech';

export const metadata: Metadata = {
  title: 'FinTech Software Development & Banking Solutions | Webkorps',
  description:
    'Engineer secure, scalable financial software: neo-banking platforms, real-time payment switches, algorithmic wealth tech, and AI-driven fraud defense. Trusted by leading financial institutions.',
  alternates: {
    canonical: '/industries/fintech',
  },
  openGraph: {
    title: 'FinTech Software Development & Banking Solutions | Webkorps',
    description:
      'Engineer secure, scalable financial software: neo-banking platforms, real-time payment switches, algorithmic wealth tech, and AI-driven fraud defense.',
    url: 'https://www.webkorps.com/industries/fintech',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <FintechPage />;
}
