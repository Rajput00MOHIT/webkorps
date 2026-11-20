import type { Metadata } from 'next';
import { IndustryDetailView } from '../../../views/IndustryTemplate/IndustryDetailView';
import { realEstateConfig } from '../../../views/IndustryTemplate/data/realEstateConfig';

export const metadata: Metadata = {
  title: 'Real Estate Software Development & PropTech Solutions | Webkorps',
  description:
    'Build modern PropTech solutions: property management platforms, automated tenant portals, 3D digital twins, and AI real estate valuation. Trusted by leading asset managers and REITs.',
  alternates: {
    canonical: '/industries/real-estate',
  },
  openGraph: {
    title: 'Real Estate Software Development & PropTech Solutions | Webkorps',
    description:
      'Build modern PropTech solutions: property management platforms, automated tenant portals, 3D digital twins, and AI real estate valuation.',
    url: 'https://www.webkorps.com/industries/real-estate',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <IndustryDetailView config={realEstateConfig} />;
}
