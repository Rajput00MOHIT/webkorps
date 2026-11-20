import type { StaticImageData } from 'next/image';
import { getImgSrc } from '../../utils/image';

// FinTech 3D Ecosystem Assets
import ekycImg from '../../assets/industries/fintech/ecosystem/Digital Onboarding & eKYC.png';
import ledgerImg from '../../assets/industries/fintech/ecosystem/Core Account & Ledger.png';
import paymentsImg from '../../assets/industries/fintech/ecosystem/Real-Time Payments.png';
import fraudImg from '../../assets/industries/fintech/ecosystem/Fraud Detection & AML.png';
import wealthImg from '../../assets/industries/fintech/ecosystem/Wealth & Algorithmic Investment.png';
import openBankingImg from '../../assets/industries/fintech/ecosystem/Open Banking & Partner APIs.png';

// Shared visuals
import fintechHeroImg from '../../assets/industries/page img/Banking.png';
import banking3dHero from '../../assets/industries/fintech.png';
import aiPreviewImg from '../../assets/services/Custom software development /Enterprise software & platforms.png';
import partnerVisualImg from '../../assets/services/Custom software development /Cloud & DevOps solutions.png';

import type { CapabilityItem } from '../../components/ServiceCapabilities';
import type { OutcomeItem } from '../../components/ServiceOutcomes';
import type { DomainSolutionItem } from '../../components/DomainSpecificSolutions';
import type { FAQItemData } from '../../sections/home/FAQ/faqData';

export { fintechHeroImg, banking3dHero, aiPreviewImg, partnerVisualImg };

/**
 * 1. Market Intelligence & Verified Statistics
 */
export const FINTECH_STATS = {
  featured: {
    badge: 'GLOBAL BENCHMARK',
    value: '75%+',
    label: 'Digital Banking Adoption',
    description:
      'Over three-quarters of global consumers and enterprises now utilize digital-first neo-banking, algorithmic payment switches, and automated ledger infrastructure.',
    source: 'World FinTech Report & BIS Framework • 2024–2025',
  },
  secondary: [
    {
      id: 'settlement-speed',
      badge: 'LATENCY',
      value: '< 50ms',
      label: 'Sub-Second Payment Clearing',
      description: 'Modern real-time payment rails (FedNow, UPI, SEPA Instant) mandate end-to-end multi-bank settlement in sub-second SLA windows.',
      source: 'Global Payments Architecture Benchmark • 2025',
      chartType: 'trend' as const,
    },
    {
      id: 'fraud-reduction',
      badge: 'ACCURACY',
      value: '85–90%',
      label: 'Fraud Detection with Neural AI',
      description: 'Autonomous machine learning models intercept synthetic identity fraud, card-not-present fraud, and account takeover attempts in real time.',
      source: 'McKinsey Financial Security & Risk Review • 2025',
      chartType: 'donut' as const,
    },
    {
      id: 'api-adoption',
      badge: 'INTEROPERABILITY',
      value: '4.8x',
      label: 'Open Banking API Volume Surge',
      description: 'API-driven financial data sharing and embedded finance applications are accelerating ecosystem transaction velocity fourfold.',
      source: 'Open Banking Global Implementation Study • 2024–2025',
      chartType: 'bars' as const,
    },
  ],
};

/**
 * 2. 6-Stage FinTech Ecosystem Pipeline
 */
export interface EcosystemStage {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  image: string | StaticImageData;
}

export const FINTECH_ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    id: 'onboarding-ekyc',
    stepNumber: '01',
    title: 'Digital Onboarding & eKYC',
    description:
      'Sub-second biometric facial liveness verification, digital passport/ID OCR extraction, and automated global sanctions screening.',
    image: ekycImg,
  },
  {
    id: 'core-ledger',
    stepNumber: '02',
    title: 'Core Account & Ledger',
    description:
      'High-throughput double-entry ledgers, multi-currency wallet balances, automated reconciliation, and immutable audit trails.',
    image: ledgerImg,
  },
  {
    id: 'realtime-payments',
    stepNumber: '03',
    title: 'Real-Time Payments',
    description:
      'Unified payment orchestration routing transactions across card schemes, UPI, FedNow, and SEPA with instant clearing.',
    image: paymentsImg,
  },
  {
    id: 'fraud-compliance',
    stepNumber: '04',
    title: 'Fraud Detection & AML',
    description:
      'Neural network anomaly detection inspecting transaction graphs, device telemetry, and behavioral telemetry in sub-50 milliseconds.',
    image: fraudImg,
  },
  {
    id: 'wealth-investing',
    stepNumber: '05',
    title: 'Wealth & Algorithmic Investing',
    description:
      'Automated robo-advisory engines, fractional portfolio allocation, real-time market data streaming, and automated tax-loss rebalancing.',
    image: wealthImg,
  },
  {
    id: 'open-banking-apis',
    stepNumber: '06',
    title: 'Open Banking & Partner APIs',
    description:
      'Secure PSD2/Open Banking API gateways, granular OAuth scopes, developer sandboxes, and low-latency microservice interconnects.',
    image: openBankingImg,
  },
];

/**
 * 3. The Real Operational Challenges in FinTech
 */
export interface FinTechChallenge {
  number: string;
  title: string;
  description: string;
  impact: string;
}

export const FINTECH_CHALLENGES: FinTechChallenge[] = [
  {
    number: '01',
    title: 'Legacy Core Banking Lock-in & Tech Debt',
    description:
      'Monolithic legacy mainframes hinder new product launches, lack real-time API integrations, and require costly batch processing windows.',
    impact: 'Months to deploy basic payment features, high maintenance overhead, and delayed customer transaction visibility.',
  },
  {
    number: '02',
    title: 'High-Velocity Fraud & Account Takeover',
    description:
      'Sophisticated synthetic identities, SIM-swap attacks, and real-time transaction manipulation bypass traditional rule-based filters.',
    impact: 'Millions in direct financial loss, regulatory fines, and permanent damage to consumer trust.',
  },
  {
    number: '03',
    title: 'Strict Multi-Jurisdiction Regulatory Overhead',
    description:
      'Navigating fragmented compliance mandates across PCI-DSS 4.0, SOC 2 Type II, GDPR, AML6, and localized central bank directives.',
    impact: 'Excessive audit costs, slow international expansion, and severe penalties for compliance drift.',
  },
  {
    number: '04',
    title: 'Payment Gateway Downtime & High Latency',
    description:
      'Unreliable payment gateway failover and unoptimized routing cause dropped transactions during peak sales and salary credit periods.',
    impact: 'Cart abandonment rates exceeding 25% and lost interchange revenues.',
  },
  {
    number: '05',
    title: 'Disconnected Data Silos & Reconciliation Delays',
    description:
      'Transactions split across disparate clearinghouses, partner banks, and payment aggregators cause end-of-month accounting mismatches.',
    impact: 'Hundreds of manual spreadsheet hours re-keying ledgers and unresolved discrepancy queues.',
  },
  {
    number: '06',
    title: 'Lack of Scalable Microservice Architecture',
    description:
      'Sudden surges in retail consumer app usage cause database lock contention, API timeouts, and slow checkout authorization.',
    impact: 'Unplanned downtime during high-volume commercial events and degraded user ratings on app stores.',
  },
];

/**
 * 4. FinTech AI Capabilities
 */
export interface FinTechAIUseCase {
  id: string;
  number: string;
  title: string;
  problem: string;
  aiApproach: string;
  integrations: string;
  benefit: string;
}

export const FINTECH_AI_USE_CASES: FinTechAIUseCase[] = [
  {
    id: 'ai-fraud',
    number: '01',
    title: 'Real-Time Neural Fraud Detection',
    problem: 'Static rules fail to detect evolving synthetic identity rings and coordinated card-testing spikes.',
    aiApproach: 'Graph neural networks analyze payment telemetry, device fingerprints, and location jumps in sub-50ms.',
    integrations: 'Payment gateway webhooks, device telemetry SDKs, and threat intelligence feeds.',
    benefit: 'Over 88% reduction in unauthorized chargebacks and 95% decrease in false-positive declines.',
  },
  {
    id: 'credit-underwriting',
    number: '02',
    title: 'Algorithmic Credit Scoring & Risk Underwriting',
    problem: 'Traditional bureau credit scores exclude thin-file applicants and lack real-time financial health insight.',
    aiApproach: 'Gradient boosted decision trees assess cash flow velocity, open banking data, and utility payment consistency.',
    integrations: 'Account aggregator APIs, Plaid/Yodlee financial feeds, and credit bureau pipelines.',
    benefit: '35% higher loan approval rate with 22% lower default rates across underwritten portfolios.',
  },
  {
    id: 'automated-aml',
    number: '03',
    title: 'Autonomous AML Transaction Monitoring',
    problem: 'Manual compliance teams are overwhelmed with thousands of false-positive anti-money laundering alerts.',
    aiApproach: 'Unsupervised clustering models group suspicious layering behavior and auto-draft Suspicious Activity Reports (SAR).',
    integrations: 'Core banking ledgers, OFAC/PEP watchlists, and regulatory submission portals.',
    benefit: '70% reduction in manual alert review hours while ensuring 100% regulatory audit compliance.',
  },
  {
    id: 'robo-advisory',
    number: '04',
    title: 'Robo-Advisory & Algorithmic Portfolio Optimization',
    problem: 'Manual wealth management is cost-prohibitive for mass retail consumers seeking personalized investment guidance.',
    aiApproach: 'Modern portfolio theory algorithms continuously rebalance assets according to risk tolerance and tax impact.',
    integrations: 'Stock exchange market feeds, broker-dealer execution APIs, and custodian ledgers.',
    benefit: 'Automated fractional trading at scale with zero human portfolio rebalancing overhead.',
  },
  {
    id: 'smart-reconciliation',
    number: '05',
    title: 'Automated Multi-Rail Ledger Reconciliation',
    problem: 'Reconciling millions of transactions across bank partners and card networks requires tedious manual matching.',
    aiApproach: 'Machine learning fuzzy matching auto-resolves payment timing discrepancies and currency conversion margins.',
    integrations: 'SWIFT, FedNow, card scheme settlement files, and ERP accounts payable modules.',
    benefit: '99.7% automated first-pass reconciliation with instant exception flagging.',
  },
  {
    id: 'conversational-banking',
    number: '06',
    title: 'GenAI Financial Assistants & Co-Pilots',
    problem: 'Support call centers face high costs handling repetitive balance, dispute, and statement inquiries.',
    aiApproach: 'Fine-tuned LLMs with retrieval-augmented generation (RAG) provide personalized financial advice and instant dispute filing.',
    integrations: 'Customer CRM, core banking accounts, and secure in-app messaging interfaces.',
    benefit: '60% deflection of tier-1 support tickets and 24/7 instant financial assistance.',
  },
];

/**
 * 5. Domain-Specific Solutions for FinTech Business Models
 */
export const FINTECH_BUSINESS_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'neobanks-wallets',
    name: 'Neobanks & Digital Wallets',
    badge: 'MULTI-TENANT BANKING',
    solutionTitle: 'Digital Checking, Virtual Cards & Instant P2P Wallets',
    challenge:
      'Digital-first neo-banks must deliver instant account opening, high-availability mobile apps, and instant peer-to-peer transfers while managing banking-as-a-service (BaaS) sponsor partner requirements.',
    engineering:
      'Webkorps engineers cloud-native neobanking platforms featuring biometric onboarding, virtual Mastercard/Visa issuance, split payments, and direct ACH/FedNow clearing.',
    bulletPoints: [
      'Sub-minute account opening with automated biometric KYC verification.',
      'Instant virtual and physical card provisioning with Apple/Google Wallet tokenization.',
      '99.999% cloud uptime supporting millions of active daily mobile banking sessions.',
    ],
  },
  {
    id: 'payment-processors',
    name: 'Payment Orchestrators & Gateways',
    badge: 'SUB-SECOND SWITCHING',
    solutionTitle: 'Intelligent Multi-Rail Payment Gateways & POS Switches',
    challenge:
      'Merchants and payment processors lose revenue when single acquiring banks suffer outages or experience high transaction decline rates.',
    engineering:
      'We build fault-tolerant payment orchestrators with dynamic smart routing, automatic acquiring bank failover, 1-click tokenized checkout, and automated fee reconciliation.',
    bulletPoints: [
      '12% higher checkout authorization rates with dynamic intelligent routing.',
      'Zero-downtime multi-acquirer failover switching in under 20 milliseconds.',
      'PCI-DSS Level 1 compliant card vault tokenization protecting sensitive data.',
    ],
  },
  {
    id: 'wealthtech-lending',
    name: 'WealthTech & Digital Lending Platforms',
    badge: 'ALGORITHMIC ALLOCATION',
    solutionTitle: 'Automated Loan Origination & Fractional Investing',
    challenge:
      'Legacy lending platforms rely on manual paper document underwriting, creating days of turnaround friction and higher operational expense per loan.',
    engineering:
      'Webkorps develops end-to-end digital lending and wealth management engines with automated credit decisioning, e-signatures, automated portfolio rebalancing, and investor dashboards.',
    bulletPoints: [
      'Loan origination decisioning reduced from 3 business days to under 3 minutes.',
      'Automated fractional share trading and recurring investment deposit loops.',
      'Real-time regulatory compliance reporting across SEC, FINRA, and central bank frameworks.',
    ],
  },
];

/**
 * 6. Core Capabilities
 */
export const FINTECH_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'core-banking',
    number: '01',
    title: 'Core Banking & Ledger Systems',
    description: 'Cloud-native multi-currency double-entry accounting ledgers capable of handling 50,000+ financial transactions per second.',
    image: ledgerImg,
    imageAlt: 'Core banking and double-entry ledger platform 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'payment-orchestration',
    number: '02',
    title: 'Payment Switch & Orchestration',
    description: 'Low-latency multi-rail payment engines supporting card schemes, FedNow, UPI, SEPA, and cross-border SWIFT messaging.',
    image: paymentsImg,
    imageAlt: 'Real-time payment switch and orchestration 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'biometric-ekyc',
    number: '03',
    title: 'Biometric Onboarding & eKYC',
    description: 'Instant facial liveness detection, automated passport/ID OCR parsing, and real-time sanctions list screening.',
    image: ekycImg,
    imageAlt: 'Digital customer onboarding and biometric eKYC 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'ai-fraud-defense',
    number: '04',
    title: 'AI Real-Time Fraud Defense',
    description: 'Machine learning transaction scoring detecting synthetic identities, card testing, and account takeover in under 50ms.',
    image: fraudImg,
    imageAlt: 'AI real-time fraud detection and AML compliance 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'wealth-investing',
    number: '05',
    title: 'Wealth & Algorithmic Investing',
    description: 'Automated robo-advisory engines, fractional portfolio allocation, real-time market feeds, and algorithmic rebalancing.',
    image: wealthImg,
    imageAlt: 'Wealth management and algorithmic portfolio investing 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'open-banking',
    number: '06',
    title: 'Open Banking & BaaS Gateways',
    description: 'PSD2 compliant API architecture, granular token scopes, and webhook infrastructures for seamless partner integrations.',
    image: openBankingImg,
    imageAlt: 'Open banking APIs and banking-as-a-service 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

/**
 * 7. Partner Capabilities
 */
export const FINTECH_PARTNER_CAPABILITIES = [
  {
    number: '01',
    title: 'Bank-Grade Security Architecture',
    description:
      'Engineered from day one for PCI-DSS Level 1, SOC 2 Type II, and ISO 27001 compliance with hardware-backed key encryption and zero-trust controls.',
    highlight: 'PCI-DSS Level 1 & SOC 2 Type II',
  },
  {
    number: '02',
    title: 'High-Throughput, Low-Latency Switching',
    description:
      'Event-driven architectures using Apache Kafka, Redis clustering, and distributed databases to process tens of thousands of payment events per second.',
    highlight: '50,000+ Transactions Per Second',
  },
  {
    number: '03',
    title: 'Multi-Rail Payment Protocol Expertise',
    description:
      'Deep domain proficiency integrating directly with ISO 20022 messaging, ACH, FedNow, SWIFT, card network tokenization, and regional switches.',
    highlight: 'ISO 20022 & FedNow Interconnect',
  },
  {
    number: '04',
    title: 'Legacy Core Banking Modernization',
    description:
      'Strangler-fig migration patterns enabling seamless, zero-downtime transition away from legacy mainframes to modern microservice platforms.',
    highlight: 'Zero-Downtime Core Migration',
  },
  {
    number: '05',
    title: '24/7 Mission-Critical SLA & SecOps',
    description:
      'Round-the-clock proactive monitoring, automated anomaly detection alerts, and dedicated financial engineering pods to support peak volume spikes.',
    highlight: '99.999% SLA & 24/7 SecOps Support',
  },
];

/**
 * 8. Business Outcomes
 */
export const FINTECH_OUTCOMES: OutcomeItem[] = [
  {
    id: 'out-1',
    number: '01',
    title: 'Sub-Second Payment Clearing',
    description: 'Ultra-low latency transaction processing for instant mobile checkouts and real-time card clearing across global payment rails.',
    image: paymentsImg,
    imageAlt: 'Sub-second real-time payment settlement 3D illustration',
  },
  {
    id: 'out-2',
    number: '02',
    title: '88%+ Fraud Loss Prevention',
    description: 'Autonomous neural network inspection eliminates card testing attacks, account takeovers, and synthetic identities with near-zero false decline friction.',
    image: fraudImg,
    imageAlt: 'Fraud loss prevention and transaction security 3D illustration',
  },
  {
    id: 'out-3',
    number: '03',
    title: '99.999% Uptime Resilience',
    description: 'Multi-region active-active cloud architecture ensuring continuous banking operations 24/7/365 with zero downtime.',
    image: ledgerImg,
    imageAlt: 'Bank-grade high availability and ledger resilience 3D illustration',
  },
  {
    id: 'out-4',
    number: '04',
    title: '3x Faster Product Launches',
    description: 'Modular microservice APIs and automated CI/CD pipelines accelerating time-to-market for new checking, card, and lending products.',
    image: openBankingImg,
    imageAlt: 'Rapid time to market for fintech products 3D illustration',
  },
];

/**
 * 9. FinTech FAQs
 */
export const FINTECH_FAQS: FAQItemData[] = [
  {
    id: 'faq-1',
    question: 'How do you ensure PCI-DSS Level 1 compliance during development?',
    answer:
      'All our payment architectures are engineered following strict PCI-DSS Level 1 requirements. We implement tokenization to ensure raw primary account numbers (PAN) never touch application databases, enforce TLS 1.3 encryption in transit, utilize hardware security modules (HSM) for key management, and maintain automated tamper-proof audit trails.',
    isApproved: true,
  },
  {
    id: 'faq-2',
    question: 'Can you migrate our legacy core banking system without downtime?',
    answer:
      'Yes. We employ the Strangler Fig migration design pattern, creating an event-driven abstraction layer around your existing core. New financial features and modern API endpoints are routed through the new platform while data syncs bidirectionally with the legacy mainframe until complete retirement, guaranteeing zero consumer downtime.',
    isApproved: true,
  },
  {
    id: 'faq-3',
    question: 'What payment rails and protocols do you support?',
    answer:
      'We support all modern global payment rails and standards, including ISO 20022 financial messaging, FedNow, ACH, SEPA Instant, UPI, SWIFT cross-border payments, Visa/Mastercard direct tokenization, and digital wallets (Apple Pay, Google Pay).',
    isApproved: true,
  },
  {
    id: 'faq-4',
    question: 'How does your AI fraud detection model handle false positives?',
    answer:
      'Our models combine unsupervised graph neural networks with localized behavioral baselines. Instead of crude binary blocking, transactions receive dynamic risk scores. Low-friction step-up biometric challenges are triggered only for borderline anomalies, reducing false-positive declines by up to 95%.',
    isApproved: true,
  },
  {
    id: 'faq-5',
    question: 'What is the typical timeline for deploying a custom neobanking platform?',
    answer:
      'A production-grade MVP featuring biometric onboarding, core account ledgers, and virtual card issuance typically ships in 12 to 16 weeks, backed by automated compliance validation and sponsor bank sandbox integrations.',
    isApproved: true,
  },
];
