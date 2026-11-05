import type { Metadata } from 'next';
import { ITStaffAugmentationPage } from '../../../views/ITStaffAugmentation/ITStaffAugmentationPage';

export const metadata: Metadata = {
  title: 'IT Staff Augmentation Services | Hire Dedicated Developers | Webkorps',
  description:
    'Scale your engineering capacity instantly with pre-vetted senior software developers, QA engineers, and dedicated squads tailored to your tech stack.',
  alternates: {
    canonical: '/services/it-staff-augmentation',
  },
  openGraph: {
    title: 'IT Staff Augmentation Services | Hire Dedicated Developers | Webkorps',
    description:
      'Scale your engineering capacity instantly with pre-vetted senior software developers, QA engineers, and dedicated squads tailored to your tech stack.',
    url: 'https://www.webkorps.com/services/it-staff-augmentation',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <ITStaffAugmentationPage />;
}

