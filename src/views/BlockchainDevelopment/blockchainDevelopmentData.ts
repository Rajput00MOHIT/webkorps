import blockchainImg from '../../assets/services/services page/blockchain.png';
import serviceBlockchainImg from '../../assets/services/service-blockchain.png';
import customWebImg from '../../assets/services/Custom software development /Custom web applications.png';
import enterpriseImg from '../../assets/services/Custom software development /Enterprise software & platforms.png';
import integrationsImg from '../../assets/services/Custom software development /Integrations, APIs & legacy modernization.png';
import cloudDevopsImg from '../../assets/services/Custom software development /Cloud & DevOps solutions.png';

import automateImg from '../../assets/services/business-outcomes/automate-operations.png';
import smarterDecisionsImg from '../../assets/services/business-outcomes/smarter-decisions.png';
import seamlessExpImg from '../../assets/services/business-outcomes/seamless-experiences.png';
import scaleLimitsImg from '../../assets/services/business-outcomes/scale-without-limits.png';

import type { OutcomeItem } from '../../components/ServiceOutcomes';
import type { CapabilityItem } from '../../components/ServiceCapabilities';
import type { FAQItemData } from '../../sections/home/FAQ/faqData';
import type { SolutionCardItem } from '../../sections/custom-software/SoftwareForEveryBusiness';
import type { DomainSolutionItem } from '../../components/DomainSpecificSolutions';

export const BLOCKCHAIN_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'defi-banking',
    name: 'Decentralized Finance (DeFi) & Banking',
    badge: 'AUDITED PROTOCOLS',
    solutionTitle: 'Automated Market Makers & Institutional Liquidity Pools',
    challenge:
      'Financial institutions and Web3 startups face severe capital exposure risks from exploitable smart contracts and high gas transaction fees.',
    engineering:
      'Webkorps writes formally verified Solidity and Rust protocols with reentrancy protection, oracle TWAP price verification, and gas optimizations.',
    bulletPoints: [
      'Zero security incidents with comprehensive automated formal verification.',
      'Up to 45% reduction in protocol gas consumption using compact byte packing.',
      'Institutional non-custodial multi-sig vault management and timelocks.',
    ],
  },
  {
    id: 'supply-chain-provenance',
    name: 'Supply Chain Provenance',
    badge: 'IMMUTABLE LEDGER',
    solutionTitle: 'Anti-Counterfeiting & End-to-End Batch Tracing',
    challenge:
      'Global luxury and pharmaceutical supply chains lose billions to counterfeiting and lack verifiable proof of origin across jurisdictions.',
    engineering:
      'Webkorps deploys permissioned distributed ledgers tying physical NFC/RFID tags to immutable on-chain tokenized batch manifests.',
    bulletPoints: [
      'Instant consumer smartphone verification of authentic manufacturing origin.',
      'Tamper-evident custody handoffs recorded across international carriers.',
      'Complete regulatory compliance audit trail for pharmaceutical shipments.',
    ],
  },
  {
    id: 'rwa-tokenization',
    name: 'Real-World Asset (RWA) Tokenization',
    badge: 'COMPLIANT SECURITIES',
    solutionTitle: 'Fractional Real Estate & Commodity Tokenization',
    challenge:
      'Illiquid high-value assets like commercial real estate and carbon credits suffer from prohibitive entry barriers and slow paper settlement.',
    engineering:
      'Webkorps builds ERC-3643 and ERC-1400 compliant security token architectures with automated KYC/whitelist enforcement and dividend payouts.',
    bulletPoints: [
      'Compliant fractional ownership distribution to accredited global investors.',
      'Automated smart contract distribution of rental yields and royalty tokens.',
      'Integrated secondary market liquidity pools with legal whitelist restrictions.',
    ],
  },
  {
    id: 'healthcare-data-exchange',
    name: 'Healthcare Data Exchange',
    badge: 'PATIENT DATA SOVEREIGNTY',
    solutionTitle: 'Decentralized Patient Consent & Clinical Trial Records',
    challenge:
      'Sharing sensitive patient clinical trial records across research universities involves high data tampering risks and HIPAA consent disputes.',
    engineering:
      'Webkorps architects decentralized identity (DID) frameworks and zero-knowledge proof (ZKP) verification engines for patient consent.',
    bulletPoints: [
      'Cryptographically verifiable patient data access consent logs.',
      'Zero-knowledge proofs validating patient eligibility without revealing identity.',
      'Interoperable medical record hashing across multi-institution studies.',
    ],
  },
  {
    id: 'digital-identity',
    name: 'Digital Identity & Credentials',
    badge: 'W3C DID STANDARDS',
    solutionTitle: 'Self-Sovereign Identity (SSI) & Verifiable Credentials',
    challenge:
      'Centralized identity databases create catastrophic single points of failure, exposing millions of user credentials to data breaches.',
    engineering:
      'Webkorps creates W3C-compliant verifiable credential systems enabling instant identity checks without storing raw personal information.',
    bulletPoints: [
      'Sub-second credential cryptographic issuance and mobile wallet storage.',
      'Instant zero-knowledge identity verification for KYC onboarding.',
      'Total reduction in centralized identity data breach liability.',
    ],
  },
];

export const BLOCKCHAIN_SOLUTIONS: SolutionCardItem[] = [
  {
    id: 'smart-contracts-protocols',
    number: '01',
    title: 'Smart contracts & custom protocols',
    description: 'Audited Solidity, Rust, and Move contracts engineered for security and gas efficiency.',
  },
  {
    id: 'dapps-web3-apps',
    number: '02',
    title: 'Decentralized applications (dApps)',
    description: 'High-speed Web3 applications with seamless wallet connect and decentralized storage.',
  },
  {
    id: 'rwa-tokenization',
    number: '03',
    title: 'Real-world asset (RWA) tokenization',
    description: 'Compliant digital representation of real estate, securities, commodities, and credits.',
  },
  {
    id: 'private-permissioned-ledgers',
    number: '04',
    title: 'Private & permissioned blockchains',
    description: 'Hyperledger Fabric and Polygon CDK private networks for enterprise consortiums.',
  },
  {
    id: 'crypto-wallets-gateways',
    number: '05',
    title: 'Crypto wallets & payment rails',
    description: 'Non-custodial crypto checkout gateways, multi-sig vaults, and fiat on/off ramps.',
  },
  {
    id: 'smart-contract-audits',
    number: '06',
    title: 'Smart contract security audits',
    description: 'Formal verification, reentrancy analysis, threat modeling, and vulnerability remediation.',
  },
];

export const BLOCKCHAIN_OUTCOMES: OutcomeItem[] = [
  {
    id: 'cryptographic-trust',
    number: '01',
    title: 'Immutable Trust',
    description: 'Eliminate counterparty risk and third-party intermediaries with tamper-proof distributed ledgers.',
    image: automateImg,
    imageAlt: 'Immutable cryptographic blockchain trust 3D illustration',
  },
  {
    id: 'autonomous-execution',
    number: '02',
    title: 'Autonomous Smart Contracts',
    description: 'Automate multi-party agreements, settlements, and escrow workflows with deterministic code execution.',
    image: smarterDecisionsImg,
    imageAlt: 'Autonomous smart contract execution 3D illustration',
  },
  {
    id: 'asset-tokenization',
    number: '03',
    title: 'Real-World Asset Tokenization',
    description: 'Fractionalize high-value physical assets, securities, and loyalty rewards into compliant digital tokens.',
    image: seamlessExpImg,
    imageAlt: 'Real world asset tokenization 3D illustration',
  },
  {
    id: 'audited-security',
    number: '04',
    title: 'Audited Smart Security',
    description: 'Protect on-chain capital through rigorous formal verification, reentrancy defense, and third-party audits.',
    image: scaleLimitsImg,
    imageAlt: 'Audited smart contract security 3D illustration',
  },
];

export const BLOCKCHAIN_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'smart-contract-engineering',
    number: '01',
    title: 'Smart Contract Architecture & Audits',
    description:
      'We write gas-optimized, bug-free smart contracts in Solidity and Rust across EVM, Solana, and Substrate networks, backed by rigorous static analysis and penetration testing.',
    image: blockchainImg,
    imageAlt: 'Smart contract architecture and auditing 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'enterprise-dlt-hyperledger',
    number: '02',
    title: 'Enterprise Distributed Ledgers (DLT)',
    description:
      'Design private permissioned consortium blockchains using Hyperledger Fabric and ConsenSys Quorum for supply chain traceability, cross-border payments, and healthcare records.',
    image: serviceBlockchainImg,
    imageAlt: 'Enterprise permissioned distributed ledger 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'web3-dapp-development',
    number: '03',
    title: 'Web3 dApps & Wallet Integration',
    description:
      'Deliver seamless user-friendly decentralized web apps with Wagmi, Ethers.js, and RainbowKit, offering social logins, account abstraction (ERC-4337), and gasless transactions.',
    image: customWebImg,
    imageAlt: 'Web3 decentralized application dApp development 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'rwa-tokenization-platforms',
    number: '04',
    title: 'RWA & Tokenization Platforms',
    description:
      'Tokenize real estate, invoices, carbon credits, and private credit into compliant ERC-3643 / ERC-1400 security tokens with automated on-chain KYC/AML verification.',
    image: enterpriseImg,
    imageAlt: 'Real world asset tokenization platform 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'layer2-scaling-bridges',
    number: '05',
    title: 'Layer-2 Rollups & Cross-Chain Bridges',
    description:
      'Scale your transaction throughput to thousands of TPS using Arbitrum, Optimism, and Polygon zkEVM while maintaining Ethereum layer-1 security guarantees.',
    image: integrationsImg,
    imageAlt: 'Layer 2 scaling and cross chain bridge engineering 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'oracles-decentralized-storage',
    number: '06',
    title: 'Chainlink Oracles & Decentralized Data',
    description:
      'Connect on-chain smart contracts to real-world financial price feeds via Chainlink and store persistent asset metadata across decentralized IPFS and Arweave networks.',
    image: cloudDevopsImg,
    imageAlt: 'Chainlink oracles and decentralized storage 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

export const BLOCKCHAIN_FAQS: FAQItemData[] = [
  {
    id: 'chain-blockchains-supported',
    question: 'Which blockchain networks and ecosystems do you develop for?',
    answer:
      'We develop on Ethereum, Polygon, Arbitrum, Solana, Avalanche, BNB Chain, and enterprise permissioned ledgers such as Hyperledger Fabric and ConsenSys Quorum.',
    isApproved: true,
  },
  {
    id: 'chain-security-auditing',
    question: 'How do you ensure smart contracts are secure against exploits?',
    answer:
      'We employ comprehensive unit tests, fuzzing, static analysis with Slither and Mythril, and formal mathematical verification before submitting contracts for external third-party security audits.',
    isApproved: true,
  },
  {
    id: 'chain-gas-optimization',
    question: 'Can you optimize smart contracts to reduce high gas fees?',
    answer:
      'Yes, we practice advanced EVM bytecode optimization, storage slot packing, minimal proxy clones, and off-chain signature verification (EIP-712) to minimize transaction execution costs.',
    isApproved: true,
  },
  {
    id: 'chain-private-vs-public',
    question: 'When should an enterprise use a private blockchain versus a public one?',
    answer:
      'Private/consortium chains (Hyperledger) are ideal when data confidentiality, high TPS, and strict participant governance are legally mandated. Public chains (Ethereum/Layer-2s) are best for transparent, liquid, and universally accessible ecosystems.',
    isApproved: true,
  },
  {
    id: 'chain-compliance-kyc',
    question: 'How do you handle compliance and regulatory requirements for tokenization?',
    answer:
      'We incorporate permissioned security token standards (ERC-3643/ERC-1400) that enforce on-chain whitelist checks, accredited investor restrictions, and automated KYC/AML verification.',
    isApproved: true,
  },
];

