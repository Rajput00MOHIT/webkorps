import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AICapabilityDetailPage } from '../../../views/AICapabilityDetail/AICapabilityDetailPage';
import { GENERATIVE_AI_DETAIL_DATA } from '../../../data/aiSolutionsData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: 'generative-ai-enterprise-llm' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === 'generative-ai-enterprise-llm') {
    return {
      title: GENERATIVE_AI_DETAIL_DATA.metaTitle,
      description: GENERATIVE_AI_DETAIL_DATA.metaDescription,
      alternates: {
        canonical: `/ai-solutions/${slug}`,
      },
      openGraph: {
        title: GENERATIVE_AI_DETAIL_DATA.metaTitle,
        description: GENERATIVE_AI_DETAIL_DATA.metaDescription,
        url: `https://www.webkorps.com/ai-solutions/${slug}`,
        siteName: 'Webkorps',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: GENERATIVE_AI_DETAIL_DATA.metaTitle,
        description: GENERATIVE_AI_DETAIL_DATA.metaDescription,
      },
    };
  }

  return {
    title: 'AI Capability Detail | Webkorps',
    description: 'Enterprise AI Engineering and Applied Intelligence by Webkorps.',
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (slug === 'generative-ai-enterprise-llm') {
    return <AICapabilityDetailPage data={GENERATIVE_AI_DETAIL_DATA} />;
  }

  notFound();
}
