import type { Metadata } from 'next';
import { MobileAppDevelopmentPage } from '../../../views/MobileAppDevelopment/MobileAppDevelopmentPage';

export const metadata: Metadata = {
  title: 'Mobile App Development Services | iOS & Android Apps | Webkorps',
  description:
    'Deliver intuitive, high-performance mobile experiences across iOS and Android: native Swift & Kotlin, Flutter, React Native, and enterprise mobile solutions.',
  alternates: {
    canonical: '/services/mobile-app-development',
  },
  openGraph: {
    title: 'Mobile App Development Services | iOS & Android Apps | Webkorps',
    description:
      'Deliver intuitive, high-performance mobile experiences across iOS and Android: native Swift & Kotlin, Flutter, React Native, and enterprise mobile solutions.',
    url: 'https://www.webkorps.com/services/mobile-app-development',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <MobileAppDevelopmentPage />;
}

