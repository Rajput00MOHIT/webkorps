import type { Metadata } from 'next';
import { IndustryDetailView } from '../../../views/IndustryTemplate/IndustryDetailView';
import { educationConfig } from '../../../views/IndustryTemplate/data/educationConfig';

export const metadata: Metadata = {
  title: 'Education Software Development & EdTech Solutions | Webkorps',
  description:
    'Build next-generation EdTech platforms: LMS portals, interactive virtual classrooms, student information systems (SIS), and adaptive AI tutoring. Trusted by leading educational institutions.',
  alternates: {
    canonical: '/industries/education',
  },
  openGraph: {
    title: 'Education Software Development & EdTech Solutions | Webkorps',
    description:
      'Build next-generation EdTech platforms: LMS portals, interactive virtual classrooms, student information systems (SIS), and adaptive AI tutoring.',
    url: 'https://www.webkorps.com/industries/education',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <IndustryDetailView config={educationConfig} />;
}
