import type { Metadata } from 'next';
import { CustomSoftwareDevelopmentPage } from '../../../views/CustomSoftwareDevelopment/CustomSoftwareDevelopmentPage';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | Webkorps',
  description:
    'From idea to development, we build tailored software solutions that help you scale, streamline operations, and create new business opportunities.',
  alternates: {
    canonical: '/services/custom-software-development',
  },
  openGraph: {
    title: 'Custom Software Development Services | Webkorps',
    description:
      'From idea to development, we build tailored software solutions that help you scale, streamline operations, and create new business opportunities.',
    url: 'https://www.webkorps.com/services/custom-software-development',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <CustomSoftwareDevelopmentPage />;
}

