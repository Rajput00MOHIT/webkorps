import type { Metadata } from 'next';
import { AISolutionsPage } from '../../../views/AISolutions/AISolutionsPage';

export const metadata: Metadata = {
  title: 'AI & ML Development Services | Webkorps',
  description:
    'We build secure, scalable AI solutions that drive measurable business growth: private LLMs, agentic workflows, predictive ML, and computer vision.',
  alternates: {
    canonical: '/services/ai-ml-development',
  },
  openGraph: {
    title: 'AI & ML Development Services | Webkorps',
    description:
      'We build secure, scalable AI solutions that drive measurable business growth: private LLMs, agentic workflows, predictive ML, and computer vision.',
    url: 'https://www.webkorps.com/services/ai-ml-development',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <AISolutionsPage />;
}

