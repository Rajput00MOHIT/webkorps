import type { Metadata } from 'next';
import { EnterpriseSoftwareDevelopmentPage } from '../../../views/EnterpriseSoftwareDevelopment/EnterpriseSoftwareDevelopmentPage';

export const metadata: Metadata = {
  title: 'Enterprise Software Development Services | Webkorps',
  description:
    'Streamline mission-critical workflows, unify distributed systems, and build scalable digital infrastructure tailored to complex enterprise demands.',
  alternates: {
    canonical: '/services/enterprise-software-development',
  },
  openGraph: {
    title: 'Enterprise Software Development Services | Webkorps',
    description:
      'Streamline mission-critical workflows, unify distributed systems, and build scalable digital infrastructure tailored to complex enterprise demands.',
    url: 'https://www.webkorps.com/services/enterprise-software-development',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <EnterpriseSoftwareDevelopmentPage />;
}

