import type { Metadata } from 'next';
import { AISolutionsPage } from '../../views/AISolutions/AISolutionsPage';

export const metadata: Metadata = {
  title: 'Production-Ready AI Solutions & Engineering | Webkorps',
  description:
    'We build secure, scalable AI solutions that drive measurable business growth: private LLMs, agentic workflows, predictive ML, and computer vision.',
  alternates: {
    canonical: '/ai-solutions',
  },
  openGraph: {
    title: 'Production-Ready AI Solutions & Engineering | Webkorps',
    description:
      'We build secure, scalable AI solutions that drive measurable business growth: private LLMs, agentic workflows, predictive ML, and computer vision.',
    url: 'https://www.webkorps.com/ai-solutions',
    siteName: 'Webkorps',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Production-Ready AI Solutions & Engineering | Webkorps',
    description:
      'We build secure, scalable AI solutions that drive measurable business growth: private LLMs, agentic workflows, predictive ML, and computer vision.',
  },
};

export default function Page() {
  return <AISolutionsPage />;
}

