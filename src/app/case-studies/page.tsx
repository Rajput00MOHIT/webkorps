import type { Metadata } from 'next';
import { CaseStudiesPage } from '../../views/CaseStudies/CaseStudiesPage';

export const metadata: Metadata = {
  title: 'Case Studies of Digital Products That Solve Real Business Problems | Webkorps',
  description:
    'Explore case studies of digital products that solve real business problems across Healthcare, Retail, Fintech, Supply Chain, and Enterprise systems.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'Case Studies | Webkorps',
    description:
      'Explore case studies of digital products that solve real business problems across Healthcare, Retail, Fintech, Supply Chain, and Enterprise systems.',
    url: 'https://www.webkorps.com/case-studies',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
