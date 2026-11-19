import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from '../../../data/caseStudies';
import { CaseStudyDetailPage } from '../../../views/CaseStudyDetail/CaseStudyDetailPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getCaseStudyBySlug(slug);

  if (!data) {
    return {
      title: 'Case Study Not Found | Webkorps',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${data.seo.metaTitle}`,
    description: data.seo.metaDescription,
    alternates: {
      canonical: data.seo.canonicalUrl,
    },
    openGraph: {
      title: data.seo.metaTitle,
      description: data.seo.metaDescription,
      url: data.seo.canonicalUrl,
      siteName: 'Webkorps',
      type: 'article',
      publishedTime: data.seo.publishedAt,
      modifiedTime: data.seo.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seo.metaTitle,
      description: data.seo.metaDescription,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const data = getCaseStudyBySlug(slug);

  if (!data) {
    notFound();
  }

  // Generate Structured Data (JSON-LD)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.outcomeHeadline,
    description: data.inShort,
    datePublished: data.seo.publishedAt,
    dateModified: data.seo.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.seo.canonicalUrl,
    },
    author: {
      '@type': 'Organization',
      name: 'Webkorps',
      url: 'https://www.webkorps.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Webkorps',
      url: 'https://www.webkorps.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.webkorps.com/logo.png',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.webkorps.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Case Studies',
        item: 'https://www.webkorps.com/case-studies',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.client,
        item: data.seo.canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudyDetailPage data={data} />
    </>
  );
}
