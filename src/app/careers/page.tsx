import type { Metadata } from 'next';
import { CareersPage } from '../../views/Careers/CareersPage';

export const metadata: Metadata = {
  title: 'Careers | Webkorps - Build Your Future With Purpose',
  description:
    'Explore opportunities, grow your skills, and build impactful solutions with a team that values innovation. Join Webkorps to shape modern digital engineering.',
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers | Webkorps',
    description:
      'Explore opportunities, grow your skills, and build impactful solutions with a team that values innovation.',
    url: 'https://www.webkorps.com/careers',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <CareersPage />;
}
