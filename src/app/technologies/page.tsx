import type { Metadata } from 'next';
import { TechnologiesPage } from '../../views/Technologies/TechnologiesPage';

export const metadata: Metadata = {
  title: 'Modern Tech Stacks & Engineering Solutions | Webkorps',
  description:
    'Developing high-performance systems powered by modern tech stacks. End-to-end development from frontend to backend and cloud, built on scalable and maintainable architectures.',
  alternates: {
    canonical: '/technologies',
  },
  openGraph: {
    title: 'Technologies | Webkorps',
    description:
      'Developing high-performance systems powered by modern tech stacks.',
    url: 'https://www.webkorps.com/technologies',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <TechnologiesPage />;
}
