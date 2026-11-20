import type { StaticImageData } from 'next/image';

// Retail 3D Ecosystem Assets
import storefrontImg from '../../assets/industries/retail/ecosystem/Omnichannel Storefront.png';
import catalogSearchImg from '../../assets/industries/retail/ecosystem/AI Smart Catalog Search.png';
import checkoutImg from '../../assets/industries/retail/ecosystem/Frictionless Checkout & Payments.png';
import fulfillmentImg from '../../assets/industries/retail/ecosystem/Multi-Hub Inventory Fulfillment.png';
import lastMileImg from '../../assets/industries/retail/ecosystem/Last-Mile Delivery & Dispatch.png';
import cartImg from '../../assets/industries/logistics/ecosystem_cart.png';
import retailHeroImg from '../../assets/industries/page img/Retail ecom.png';

import type { CapabilityItem } from '../../components/ServiceCapabilities';
import type { OutcomeItem } from '../../components/ServiceOutcomes';
import type { DomainSolutionItem } from '../../components/DomainSpecificSolutions';
import type { FAQItemData } from '../../sections/home/FAQ/faqData';

export { storefrontImg, catalogSearchImg, checkoutImg, fulfillmentImg, lastMileImg, cartImg, retailHeroImg };

/**
 * 1. Market Intelligence & Statistics
 */
export const RETAIL_STATS = {
  featured: {
    badge: 'OMNICHANNEL BENCHMARK',
    value: '73%+',
    label: 'Shoppers Use Multiple Channels',
    description:
      'Nearly three-quarters of global retail buyers interact across mobile storefronts, physical retail POS, and social commerce before completing an order.',
    source: 'National Retail Federation (NRF) & Harvard Business Review • 2024–2025',
  },
  secondary: [
    {
      id: 'checkout-speed',
      badge: 'CONVERSION',
      value: '35% Lift',
      label: '1-Click Checkout Conversion',
      description: 'Headless storefront architectures paired with digital wallet tokenization reduce checkout drop-off significantly.',
      source: 'Baymard Institute Checkout Usability Study • 2025',
      chartType: 'trend' as const,
    },
    {
      id: 'inventory-accuracy',
      badge: 'FULFILLMENT',
      value: '99.4%',
      label: 'Real-Time Inventory Precision',
      description: 'Distributed Order Management (DOM) unifies stock across distribution centers, dark stores, and retail outlets.',
      source: 'Retail Systems Research Inventory Accuracy Benchmark',
      chartType: 'donut' as const,
    },
    {
      id: 'search-relevance',
      badge: 'INTELLIGENCE',
      value: '4.2x',
      label: 'Search-to-Cart Conversion with AI',
      description: 'Semantic vector search and neural personalization engines predict shopper intent and recommend relevant items instantly.',
      source: 'Gartner Digital Commerce Technology Review • 2025',
      chartType: 'bar' as const,
    },
  ],
};

/**
 * 2. Retail Ecosystem Stages (Horizontal Scroll)
 */
export interface RetailEcosystemStage {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  image: StaticImageData | string;
}

export const RETAIL_ECOSYSTEM_STAGES: RetailEcosystemStage[] = [
  {
    id: 'omnichannel-storefront',
    stepNumber: '01',
    title: 'Omnichannel Storefront',
    description:
      'Lightning-fast headless PWA storefronts, mobile shopping apps, and social commerce channels providing unified branding and cart synchronization.',
    image: storefrontImg,
  },
  {
    id: 'smart-catalog-search',
    stepNumber: '02',
    title: 'AI Smart Catalog & Discovery',
    description:
      'Vector semantic search, visual image search, real-time facet filtering, and automated SKU categorization for millions of product variants.',
    image: catalogSearchImg,
  },
  {
    id: 'frictionless-checkout',
    stepNumber: '03',
    title: 'Frictionless 1-Click Checkout',
    description:
      'Global payment switches supporting Apple Pay, Google Pay, Buy Now Pay Later (BNPL), and automated sales tax calculation in milliseconds.',
    image: checkoutImg,
  },
  {
    id: 'multi-hub-fulfillment',
    stepNumber: '04',
    title: 'Multi-Hub Inventory & DOM',
    description:
      'Distributed Order Management (DOM) routing orders to the optimal warehouse, regional distribution hub, or local retail store for fulfillment.',
    image: fulfillmentImg,
  },
  {
    id: 'last-mile-dispatch',
    stepNumber: '05',
    title: 'Last-Mile Delivery & Tracking',
    description:
      'Carrier rate shopping, automated shipping label generation, live SMS/WhatsApp order tracking, and contactless electronic proof-of-delivery (ePOD).',
    image: lastMileImg,
  },
  {
    id: 'loyalty-retention',
    stepNumber: '06',
    title: 'Unified Loyalty & Retention',
    description:
      'Tiered rewards programs, personalized promotional coupons, automated cart-recovery push notifications, and lifetime customer analytics.',
    image: cartImg,
  },
];

/**
 * 3. The Real Challenges in Retail & E-Commerce
 */
export interface RetailChallenge {
  number: string;
  title: string;
  description: string;
  impact: string;
}

export const RETAIL_CHALLENGES: RetailChallenge[] = [
  {
    number: '01',
    title: 'High Cart Abandonment & Checkout Friction',
    description:
      'Multi-step checkout forms, surprise shipping fees, and slow payment authorization cause nearly 70% of online carts to be abandoned.',
    impact: 'Millions in lost revenue and wasted customer acquisition ad spend.',
  },
  {
    number: '02',
    title: 'Disconnected Omnichannel Inventory Silos',
    description:
      'Physical store registers and online warehouse platforms update on batch cycles, leading to overselling and canceled customer orders.',
    impact: 'Damaged customer reviews, expensive rush fulfillment, and inventory stockouts during holiday flash sales.',
  },
  {
    number: '03',
    title: 'Monolithic E-Commerce Platform Bottlenecks',
    description:
      'Legacy all-in-one e-commerce suites crash during high-traffic Black Friday traffic surges and hinder rapid frontend feature releases.',
    impact: 'Severe revenue downtime during peak commercial windows and high developer maintenance costs.',
  },
  {
    number: '04',
    title: 'Inefficient Order Routing & Rising Shipping Costs',
    description:
      'Splitting single customer orders across multiple remote warehouses increases packaging overhead and shipping expenses.',
    impact: 'Erosion of gross margins and delayed delivery windows that frustrate online shoppers.',
  },
  {
    number: '05',
    title: 'Irrelevant Product Search & Low Discovery Conversion',
    description:
      'Keyword-only search engines fail to understand natural language intent, synonyms, or misspelled search queries.',
    impact: 'High bounce rates as shoppers leave for competitor storefronts when they cannot find relevant products.',
  },
  {
    number: '06',
    title: 'Complex Cross-Border Currency & Tax Compliance',
    description:
      'Selling internationally requires handling localized checkout languages, dynamic currency conversion, VAT, and customs duties.',
    impact: 'High compliance fines, checkout abandonment from foreign shoppers, and delayed international expansion.',
  },
];

/**
 * 4. Retail AI Capabilities
 */
export interface RetailAIUseCase {
  id: string;
  number: string;
  title: string;
  problem: string;
  aiApproach: string;
  integrations: string;
  benefit: string;
}

export const RETAIL_AI_USE_CASES: RetailAIUseCase[] = [
  {
    id: 'ai-search-discovery',
    number: '01',
    title: 'Neural Semantic Search & Visual Lookup',
    problem: 'Keyword search engines return zero results for conversational queries like "red summer wedding guest dress".',
    aiApproach: 'Vector embeddings and CLIP multimodal neural models match product imagery and natural language descriptions.',
    integrations: 'Elasticsearch/Pinecone vector databases, PIM product catalogs, and storefront search APIs.',
    benefit: '42% reduction in zero-result searches and a 28% increase in search-to-cart conversions.',
  },
  {
    id: 'dynamic-pricing',
    number: '02',
    title: 'Algorithmic Dynamic Pricing & Margin Defense',
    problem: 'Static prices fail to react to competitor promotions, stock velocity, and changing supplier costs.',
    aiApproach: 'Reinforcement learning algorithms optimize prices dynamically within predefined gross-margin guardrails.',
    integrations: 'Competitor web scraping feeds, ERP inventory cost tables, and storefront checkout pricing engines.',
    benefit: '8.4% improvement in overall gross profit margins without sacrificing sales volume.',
  },
  {
    id: 'ai-demand-forecasting',
    number: '03',
    title: 'Predictive Regional Demand & Restocking',
    problem: 'Ordering too much inventory ties up working capital, while under-ordering causes costly out-of-stock spikes.',
    aiApproach: 'Time-series machine learning models forecast SKU demand by zip code factoring in seasonality and local trends.',
    integrations: 'WMS inventory ledgers, historical POS transactions, and regional marketing campaign calendars.',
    benefit: '26% reduction in excess safety stock holding costs and 98.8% SKU in-stock availability.',
  },
  {
    id: 'personalized-recommendations',
    number: '04',
    title: '1-to-1 Real-Time Hyper-Personalization',
    problem: 'Generic "You May Also Like" carousels show irrelevant products, failing to increase average order value (AOV).',
    aiApproach: 'Graph neural networks analyze clickstream sessions, past purchases, and real-time category dwell time.',
    integrations: 'Customer Data Platforms (CDP), Shopify/Magento storefronts, and email marketing engines.',
    benefit: '19% increase in Average Order Value (AOV) and 3.5x higher click-through on recommendation widgets.',
  },
  {
    id: 'automated-product-tagging',
    number: '05',
    title: 'Automated Catalog Enrichment & Copywriting',
    problem: 'Writing descriptions and assigning attributes for 50,000+ new SKUs manually requires massive copywriter teams.',
    aiApproach: 'Vision-language models automatically generate SEO-optimized product copy, bullet points, and category tags.',
    integrations: 'Product Information Management (PIM) systems, digital asset managers (DAM), and CMS engines.',
    benefit: 'Accelerates new seasonal catalog onboarding from 4 weeks to under 48 hours.',
  },
  {
    id: 'conversational-shopping-agent',
    number: '06',
    title: 'GenAI Shopping Concierge & Returns Assistant',
    problem: 'Customer service teams are buried under repetitive size inquiries, shipping status calls, and return requests.',
    aiApproach: 'Fine-tuned conversational shopping agents guide customers to the right product size and process returns.',
    integrations: 'Zendesk/Gorgias help desks, Shopify order APIs, and reverse logistics return portals.',
    benefit: '68% of routine support requests resolved autonomously with zero human agent escalation.',
  },
];

/**
 * 5. Domain-Specific Solutions for Retail Business Models
 */
export const RETAIL_BUSINESS_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'd2c-brands',
    name: 'Direct-to-Consumer (D2C) Brands',
    badge: 'HEADLESS COMMERCE',
    solutionTitle: 'High-Converting Next.js Storefronts & Subscription Engines',
    challenge:
      'Fast-growing D2C lifestyle brands face rising customer acquisition costs and need high-converting, lightning-fast storefronts that build brand loyalty.',
    engineering:
      'We engineer headless Next.js e-commerce storefronts paired with Shopify Plus or Commercelayer, featuring 1-click checkout, personalized bundles, and automated subscription billing.',
    bulletPoints: [
      'Sub-second page load times with 95+ Google Lighthouse Core Web Vitals score.',
      'Custom recurring subscription billing with recharge, Stripe Billing, and automated churn prevention.',
      'Integrated SMS and email marketing automation driven by real-time customer behavioral triggers.',
    ],
  },
  {
    id: 'b2b-wholesale',
    name: 'B2B Wholesale & Distributor Portals',
    badge: 'ENTERPRISE COMMERCE',
    solutionTitle: 'Self-Service B2B Ordering, Custom Pricing & Credit Terms',
    challenge:
      'Wholesalers and manufacturers still rely on manual email quotes, paper catalogs, and phone orders, causing high error rates and slow order turnaround.',
    engineering:
      'Webkorps develops custom B2B e-commerce portals with tiered customer pricing, net-payment credit terms, bulk CSV order uploads, and automated quote-to-order approval workflows.',
    bulletPoints: [
      'Customer-specific contract price books and volume discount tier management.',
      'PunchOut catalog integration (cXML / OCI) with enterprise procurement systems like SAP Ariba and Coupa.',
      'ERP bidirectional synchronization updating orders, invoices, and credit lines in real time.',
    ],
  },
  {
    id: 'marketplace-platforms',
    name: 'Multi-Vendor Marketplaces',
    badge: 'MULTI-TENANT COMMERCE',
    solutionTitle: 'Scalable Vendor Portals, Split Payments & Catalog Management',
    challenge:
      'Marketplace operators need to onboard thousands of independent sellers, automate multi-vendor order routing, and calculate seller commissions with zero reconciliation errors.',
    engineering:
      'We architect multi-tenant marketplace platforms featuring automated vendor onboarding, automated Stripe Connect split payments, dispute management, and central catalog moderation.',
    bulletPoints: [
      'Automated vendor payout calculations with dynamic marketplace commission deduction.',
      'Split order fulfillment routing shipments to individual sellers with consolidated customer tracking.',
      'Unified seller analytics dashboard displaying sales velocity, return rates, and customer reviews.',
    ],
  },
];

/**
 * 6. Core Capabilities
 */
export const RETAIL_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'headless-commerce',
    number: '01',
    title: 'Headless E-Commerce Architecture',
    description:
      'Decoupled frontend PWAs powered by Next.js and React that deliver sub-second page loads and seamless cross-device shopping experiences.',
    image: storefrontImg,
    imageAlt: 'Headless e-commerce architecture and modern web storefront 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'dom-inventory',
    number: '02',
    title: 'Distributed Order Management (DOM)',
    description:
      'Intelligent routing engines synchronizing real-time inventory across distribution centers, physical retail stores, and dark stores.',
    image: fulfillmentImg,
    imageAlt: 'Distributed order management and multi-hub inventory 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'checkout-payments',
    number: '03',
    title: 'Frictionless 1-Click Payments',
    description:
      'Global payment switches integrating Apple Pay, Google Pay, Klarna BNPL, and local payment methods with PCI-DSS tokenization.',
    image: checkoutImg,
    imageAlt: 'Frictionless 1-click checkout and mobile wallet payments 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'ai-search-rec',
    number: '04',
    title: 'AI Search & Personalization Engines',
    description:
      'Vector semantic search, visual lookup, dynamic product bundles, and personalized recommendation widgets that lift average order value.',
    image: catalogSearchImg,
    imageAlt: 'AI semantic search and personalized product discovery 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'last-mile-logistics',
    number: '05',
    title: 'Shipping, Tracking & Returns Automation',
    description:
      'Multi-carrier rate shopping, automated return portal generation, and live SMS/WhatsApp transit updates for uninterrupted post-purchase peace of mind.',
    image: lastMileImg,
    imageAlt: 'Last-mile delivery and automated returns portal 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'loyalty-retention-tech',
    number: '06',
    title: 'Omnichannel Loyalty & Customer Retention',
    description:
      'Tiered rewards programs, points redemption engines, automated abandoned-cart recovery, and unified Customer Data Platforms (CDP).',
    image: cartImg,
    imageAlt: 'Omnichannel customer loyalty and retention engine 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

/**
 * 7. Partner Capabilities
 */
export const RETAIL_PARTNER_CAPABILITIES = [
  {
    number: '01',
    title: 'High-Concurrence Peak Traffic Scaling',
    description:
      'Cloud-native autoscaling infrastructure engineered to handle 100x traffic surges during Black Friday, Cyber Monday, and product drop events without slowdown.',
    highlight: '100x Traffic Surge Resilience',
  },
  {
    number: '02',
    title: 'Unified Omnichannel Architecture',
    description:
      'Seamless bidirectional synchronization between physical in-store POS (Square, Clover, Shopify POS), e-commerce storefronts, and enterprise ERPs.',
    highlight: 'Real-Time Store & Digital Sync',
  },
  {
    number: '03',
    title: 'Conversion Rate Optimization (CRO)',
    description:
      'Data-driven UX design and rapid A/B testing frameworks engineered to eliminate checkout friction, boost add-to-cart rates, and maximize lifetime customer value.',
    highlight: 'Data-Driven Conversion Engineering',
  },
  {
    number: '04',
    title: 'Enterprise ERP & Supply Chain Integrations',
    description:
      'Deep domain proficiency integrating directly with SAP, NetSuite, Microsoft Dynamics, and major third-party logistics (3PL) carrier APIs.',
    highlight: 'ERP & 3PL Carrier Connect',
  },
  {
    number: '05',
    title: '24/7 Peak Season SRE Support',
    description:
      'Dedicated engineering pods actively monitoring system health, payment gateway latency, and database query throughput during critical holiday retail events.',
    highlight: '99.99% Guaranteed Peak Uptime',
  },
];

/**
 * 8. Measurable Business Outcomes
 */
export const RETAIL_OUTCOMES: OutcomeItem[] = [
  {
    id: 'conversion-lift',
    number: '01',
    title: '35% Higher Checkout Conversions',
    description:
      'Sub-second page speeds, frictionless 1-click wallet payments, and transparent shipping costs slash cart abandonment rates.',
    image: checkoutImg,
    imageAlt: 'Checkout conversion lift 3D illustration',
  },
  {
    id: 'inventory-precision',
    number: '02',
    title: '99.4% Real-Time Inventory Accuracy',
    description:
      'Unified distributed order management prevents costly stockouts and accidental overselling across all physical and online sales channels.',
    image: fulfillmentImg,
    imageAlt: 'Real-time inventory accuracy 3D illustration',
  },
  {
    id: 'search-revenue',
    number: '03',
    title: '4.2x Search-to-Cart Conversion',
    description:
      'AI semantic vector search understands shopper intent, surfacing relevant products and personalized bundles that increase order value.',
    image: catalogSearchImg,
    imageAlt: 'AI search and product recommendation lift 3D illustration',
  },
  {
    id: 'peak-resilience',
    number: '04',
    title: 'Zero Downtime During Flash Sales',
    description:
      'Serverless auto-scaling cloud architecture handles massive sudden spikes during viral marketing campaigns and holiday flash sales.',
    image: storefrontImg,
    imageAlt: 'Zero downtime and high scalability 3D illustration',
  },
];

/**
 * 9. Frequently Asked Questions
 */
export const RETAIL_FAQS: FAQItemData[] = [
  {
    id: 'faq-1',
    question: 'What is headless commerce and why is it beneficial for retail brands?',
    answer:
      'Headless commerce decouples the frontend digital storefront (built with Next.js/React) from the backend commerce and inventory engine. This gives brands complete creative control over user experience, delivers sub-second page loads, enables seamless omnichannel updates across mobile and web, and improves Google Core Web Vitals scores without being limited by monolithic template constraints.',
    isApproved: true,
  },
  {
    id: 'faq-2',
    question: 'Can your platform connect to our existing ERP and warehouse systems?',
    answer:
      'Yes. We specialize in building robust bidirectional API integrations with enterprise ERPs (SAP, NetSuite, Microsoft Dynamics), Warehouse Management Systems (Manhattan, Infor, custom WMS), and physical Point-of-Sale (POS) systems to ensure real-time inventory and order synchronization.',
    isApproved: true,
  },
  {
    id: 'faq-3',
    question: 'How do you handle sudden traffic spikes during Black Friday or flash sales?',
    answer:
      'We architect cloud-native serverless systems using AWS/GCP auto-scaling groups, edge CDN caching (Cloudflare/Fastly), distributed Redis caching, and asynchronous order queuing with Apache Kafka or AWS SQS. This guarantees that your checkout process remains responsive even when concurrent user traffic surges by 100x.',
    isApproved: true,
  },
  {
    id: 'faq-4',
    question: 'What payment methods and gateways do you support?',
    answer:
      'We integrate all major global and regional payment rails, including Stripe, Adyen, PayPal, Apple Pay, Google Pay, Buy Now Pay Later services (Klarna, Afterpay, Affirm), and regional payment switches, complete with automated chargeback defense and PCI-DSS Level 1 tokenization.',
    isApproved: true,
  },
  {
    id: 'faq-5',
    question: 'What is the typical timeline to launch a custom retail e-commerce platform?',
    answer:
      'A production-grade headless e-commerce storefront with custom payment integrations, PIM catalog setup, and ERP inventory sync typically launches in 10 to 14 weeks, followed by comprehensive load testing before launch.',
    isApproved: true,
  },
];
