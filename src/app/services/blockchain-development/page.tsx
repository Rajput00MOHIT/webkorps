import type { Metadata } from 'next';
import { BlockchainDevelopmentPage } from '../../../views/BlockchainDevelopment/BlockchainDevelopmentPage';

export const metadata: Metadata = {
  title: 'Blockchain & Smart Contract Development Services | Webkorps',
  description:
    'Engineer enterprise Web3 applications, audited smart contracts, asset tokenization platforms, and private distributed ledger solutions built for scale and compliance.',
  alternates: {
    canonical: '/services/blockchain-development',
  },
  openGraph: {
    title: 'Blockchain & Smart Contract Development Services | Webkorps',
    description:
      'Engineer enterprise Web3 applications, audited smart contracts, asset tokenization platforms, and private distributed ledger solutions built for scale and compliance.',
    url: 'https://www.webkorps.com/services/blockchain-development',
    siteName: 'Webkorps',
    type: 'website',
  },
};

export default function Page() {
  return <BlockchainDevelopmentPage />;
}

