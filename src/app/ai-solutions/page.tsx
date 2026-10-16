import type { Metadata } from 'next';
import { AISolutionsPage } from '../../views/AISolutions/AISolutionsPage';

export const metadata: Metadata = {
  title: 'AI Solutions & Enterprise AI Engineering | Webkorps',
  description:
    'Explore Webkorps enterprise AI capabilities: private Generative AI & LLMs, agentic workflow automation, and predictive machine learning built to ISO 27001 standards.',
  alternates: {
    canonical: '/ai-solutions',
  },
  openGraph: {
    title: 'AI Solutions & Enterprise AI Engineering | Webkorps',
    description:
      'We engineer domain-tuned LLM architectures, private RAG pipelines, and intelligent copilot agents that solve high-stakes business challenges with zero data leakage.',
    url: 'https://www.webkorps.com/ai-solutions',
    siteName: 'Webkorps',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Solutions & Enterprise AI Engineering | Webkorps',
    description:
      'We engineer domain-tuned LLM architectures, private RAG pipelines, and intelligent copilot agents that solve high-stakes business challenges with zero data leakage.',
  },
};

export default function Page() {
  return <AISolutionsPage />;
}
