import type { Metadata } from 'next';
import { IoTApplicationDevelopmentPage } from '../../../views/IoTApplicationDevelopment/IoTApplicationDevelopmentPage';

export const metadata: Metadata = {
  title: 'IoT Application Development & Smart Device Solutions | Webkorps',
  description:
    'Connect smart devices, analyze real-time telemetry at the edge, and engineer secure, scalable IoT ecosystems across industrial and consumer platforms.',
  alternates: {
    canonical: '/services/iot-application-development',
  },
  openGraph: {
    title: 'IoT Application Development & Smart Device Solutions | Webkorps',
    description:
      'Connect smart devices, analyze real-time telemetry at the edge, and engineer secure, scalable IoT ecosystems across industrial and consumer platforms.',
    url: 'https://www.webkorps.com/services/iot-application-development',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <IoTApplicationDevelopmentPage />;
}

