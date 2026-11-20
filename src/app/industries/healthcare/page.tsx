import type { Metadata } from 'next';
import { HealthcarePage } from '../../../views/Healthcare';

export const metadata: Metadata = {
  title: 'Healthcare Software Development & HealthTech Solutions | Webkorps',
  description:
    'Engineer HIPAA-compliant healthcare software: EHR/EMR platforms, telemedicine portals, remote patient monitoring, and clinical AI diagnostics. Trusted by leading hospital networks and digital health providers.',
  alternates: {
    canonical: '/industries/healthcare',
  },
  openGraph: {
    title: 'Healthcare Software Development & HealthTech Solutions | Webkorps',
    description:
      'Engineer HIPAA-compliant healthcare software: EHR/EMR platforms, telemedicine portals, remote patient monitoring, and clinical AI diagnostics.',
    url: 'https://www.webkorps.com/industries/healthcare',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <HealthcarePage />;
}
