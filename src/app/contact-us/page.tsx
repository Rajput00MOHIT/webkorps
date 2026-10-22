import type { Metadata } from 'next';
import { ContactUsPage } from '../../views/Contact/ContactUsPage';

export const metadata: Metadata = {
  title: 'Contact Us | Webkorps - Connect With Our Experts',
  description:
    "Let's connect and explore how we can help transform your ideas into impactful digital solutions. Speak with Webkorps technology consultants and engineering leaders.",
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: 'Contact Us | Webkorps',
    description:
      "Let's connect and explore how we can help transform your ideas into impactful digital solutions.",
    url: 'https://www.webkorps.com/contact-us',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <ContactUsPage />;
}
