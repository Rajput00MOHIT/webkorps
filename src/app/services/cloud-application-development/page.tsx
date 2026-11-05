import type { Metadata } from 'next';
import { CloudApplicationDevelopmentPage } from '../../../views/CloudApplicationDevelopment/CloudApplicationDevelopmentPage';

export const metadata: Metadata = {
  title: 'Cloud Application Development & DevOps Services | Webkorps',
  description:
    'Modernize infrastructure, automate continuous delivery, and engineer elastic, secure cloud-native architectures across AWS, Azure, and Google Cloud.',
  alternates: {
    canonical: '/services/cloud-application-development',
  },
  openGraph: {
    title: 'Cloud Application Development & DevOps Services | Webkorps',
    description:
      'Modernize infrastructure, automate continuous delivery, and engineer elastic, secure cloud-native architectures across AWS, Azure, and Google Cloud.',
    url: 'https://www.webkorps.com/services/cloud-application-development',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <CloudApplicationDevelopmentPage />;
}

