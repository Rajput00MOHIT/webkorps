import type { Metadata } from 'next';
import { AboutUsPage } from '../../views/AboutUs/AboutUsPage';

export const metadata: Metadata = {
  title: 'About Us | Webkorps - Engineering Digital Transformation',
  description: 'Explore the milestones, achievements, and moments that define the WebKorps journey. Turning technology into growth opportunities for your business.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Us | Webkorps',
    description: 'Explore the milestones, achievements, and moments that define the WebKorps journey.',
    url: 'https://www.webkorps.com/about-us',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <AboutUsPage />;
}
