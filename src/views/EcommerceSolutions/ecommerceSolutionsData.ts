import ecomImg from '../../assets/services/indrusties /e-com.png';
import customWebImg from '../../assets/services/Custom software development /Custom web applications.png';
import integrationsImg from '../../assets/services/Custom software development /Integrations, APIs & legacy modernization.png';
import enterpriseImg from '../../assets/services/Custom software development /Enterprise software & platforms.png';
import cloudDevopsImg from '../../assets/services/Custom software development /Cloud & DevOps solutions.png';
import discoveryImg from '../../assets/services/Custom software development /Product discovery & strategy.png';

import automateImg from '../../assets/services/business-outcomes/automate-operations.png';
import smarterDecisionsImg from '../../assets/services/business-outcomes/smarter-decisions.png';
import seamlessExpImg from '../../assets/services/business-outcomes/seamless-experiences.png';
import scaleLimitsImg from '../../assets/services/business-outcomes/scale-without-limits.png';

import type { OutcomeItem } from '../../components/ServiceOutcomes';
import type { CapabilityItem } from '../../components/ServiceCapabilities';
import type { FAQItemData } from '../../sections/home/FAQ/faqData';
import type { SolutionCardItem } from '../../sections/custom-software/SoftwareForEveryBusiness';
import type { DomainSolutionItem } from '../../components/DomainSpecificSolutions';

export const ECOMMERCE_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'b2b-manufacturing',
    name: 'B2B Wholesale & Manufacturing',
    badge: 'B2B COMMERCE',
    solutionTitle: 'Wholesale Portals with Custom Tiers & Net Terms',
    challenge:
      'B2B distributors waste hours handling manual PDF purchase orders, negotiating custom price lists, and calculating multi-warehouse freight.',
    engineering:
      'Webkorps builds enterprise B2B portals with account-level contracted pricing, quote-to-order workflows, line-item approvals, and ERP integrations.',
    bulletPoints: [
      'Account-specific price book indexing with instant real-time pricing.',
      'Automated net 30/60 term invoicing and punchout catalog support.',
      '45% reduction in manual customer service order entry overhead.',
    ],
  },
  {
    id: 'd2c-brands',
    name: 'Direct-to-Consumer (D2C) Brands',
    badge: 'HEADLESS COMMERCE',
    solutionTitle: 'Headless Storefronts & Frictionless 1-Click Checkout',
    challenge:
      'Rising customer acquisition costs and slow mobile web stores erode D2C margins through high cart abandonment and slow page loads.',
    engineering:
      'Webkorps creates headless Next.js commerce storefronts integrated with Shopify Plus, Klaviyo personalization, and instant payment methods.',
    bulletPoints: [
      'Sub-second mobile page loads driving a 28% increase in mobile conversion.',
      'Integrated Apple Pay, Google Pay, and Shop Pay frictionless checkouts.',
      'Dynamic product bundling and upsells increasing Average Order Value (AOV).',
    ],
  },
  {
    id: 'fashion-apparel',
    name: 'Fashion & Apparel',
    badge: 'OMNICHANNEL RETAIL',
    solutionTitle: 'Visual Merchandising & Returns Management Portals',
    challenge:
      'Apparel retailers suffer from high product return rates, chaotic stockouts, and disjointed online-to-offline customer experiences.',
    engineering:
      'Webkorps integrates interactive 3D product previews, accurate fit calculators, and automated omnichannel buy-online-return-in-store (BORIS).',
    bulletPoints: [
      'Interactive size and fit guidance reducing apparel returns by 18%.',
      'Real-time unified store inventory preventing out-of-stock orders.',
      'Automated self-service customer exchange and returns portal.',
    ],
  },
  {
    id: 'fmcg-grocery',
    name: 'FMCG & Grocery Delivery',
    badge: 'SCHEDULED LOGISTICS',
    solutionTitle: 'Time-Slot Delivery & Cold-Chain Inventory Engines',
    challenge:
      'Perishable grocery commerce requires rapid inventory turnover, strict delivery time-slot windows, and localized warehouse fulfillment.',
    engineering:
      'Webkorps deploys micro-fulfillment ordering platforms with route-optimized delivery slots, variable-weight billing, and real-time stock sync.',
    bulletPoints: [
      'Intelligent delivery slot reservation algorithms avoiding delivery delays.',
      'Dynamic variable-weight item checkout adjustments and refunds.',
      'Store-level picking app integration optimizing item pack times by 30%.',
    ],
  },
  {
    id: 'subscriptions-digital',
    name: 'Subscriptions & Digital Goods',
    badge: 'RECURRING BILLING',
    solutionTitle: 'Recurring Subscription Billing & Member Portals',
    challenge:
      'Subscription businesses struggle with high involuntary churn caused by expired cards and clunky customer subscription modification flows.',
    engineering:
      'Webkorps develops subscription commerce engines with smart dunning automation, pause/skip controls, and tiered digital entitlement access.',
    bulletPoints: [
      'Automated smart dunning recovering up to 60% of failed subscription renewals.',
      'Self-service customer portal allowing easy plan swaps, pauses, and add-ons.',
      'Instant access token provisioning for gated digital content and services.',
    ],
  },
];

export const ECOMMERCE_SOLUTIONS: SolutionCardItem[] = [
  {
    id: 'b2b-wholesale-portals',
    number: '01',
    title: 'B2B & wholesale commerce portals',
    description: 'Tiered pricing, bulk ordering, quote management, custom approval workflows, and net terms.',
  },
  {
    id: 'd2c-storefronts',
    number: '02',
    title: 'High-converting D2C storefronts',
    description: 'Mobile-first shopping experiences, frictionless checkouts, and hyper-personalized recommendations.',
  },
  {
    id: 'headless-composable-commerce',
    number: '03',
    title: 'Headless & composable commerce',
    description: 'Decoupled storefront frontends powered by Shopify Plus, Commerce Layer, and Next.js.',
  },
  {
    id: 'multi-vendor-marketplaces',
    number: '04',
    title: 'Multi-vendor marketplaces',
    description: 'Vendor onboarding, automated commission splitting, multi-storefront catalogs, and payouts.',
  },
  {
    id: 'subscription-recurring-billing',
    number: '05',
    title: 'Subscription & recurring billing',
    description: 'Automated subscription renewals, dunning management, and customer self-service portals.',
  },
  {
    id: 'omnichannel-pos-inventory',
    number: '06',
    title: 'Omnichannel inventory & POS sync',
    description: 'Unified inventory management connecting online stores with physical POS and ERP systems.',
  },
];

export const ECOMMERCE_OUTCOMES: OutcomeItem[] = [
  {
    id: 'conversion-acceleration',
    number: '01',
    title: 'High-Converting Checkout',
    description: 'Eliminate cart friction with sub-second page loads, streamlined 1-click checkouts, and mobile-optimized payments.',
    image: automateImg,
    imageAlt: 'High converting ecommerce checkout flow 3D illustration',
  },
  {
    id: 'omnichannel-sync',
    number: '02',
    title: 'Omnichannel Inventory',
    description: 'Synchronize stock levels, orders, and customer profiles in real time across online stores, marketplaces, and POS.',
    image: smarterDecisionsImg,
    imageAlt: 'Omnichannel ecommerce inventory synchronization 3D illustration',
  },
  {
    id: 'flash-sale-scale',
    number: '03',
    title: 'Flash Sale Elasticity',
    description: 'Architect resilient serverless and edge infrastructure engineered to withstand viral traffic spikes without crashing.',
    image: seamlessExpImg,
    imageAlt: 'Scalable ecommerce infrastructure for flash sales 3D illustration',
  },
  {
    id: 'global-commerce',
    number: '04',
    title: 'Global Localization',
    description: 'Expand seamlessly worldwide with multi-currency pricing, international tax calculation, and multi-language support.',
    image: scaleLimitsImg,
    imageAlt: 'Global localized ecommerce expansion 3D illustration',
  },
];

export const ECOMMERCE_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'headless-composable-commerce',
    number: '01',
    title: 'Headless & Composable Commerce',
    description:
      'Decouple your storefront UI from backend commerce engines using Next.js Commerce and modern APIs for blazing 100/100 Google PageSpeed scores and bespoke visual branding.',
    image: ecomImg,
    imageAlt: 'Headless composable ecommerce architecture 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'shopify-plus-magento',
    number: '02',
    title: 'Shopify Plus & Enterprise Platforms',
    description:
      'We engineer bespoke Shopify Plus themes, custom checkout extensions, private apps, and scalable Magento/Adobe Commerce stores built for high annual gross merchandise volume.',
    image: customWebImg,
    imageAlt: 'Shopify Plus and enterprise ecommerce development 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'b2b-wholesale-portals',
    number: '03',
    title: 'B2B Wholesale & Distributor Portals',
    description:
      'Empower corporate buyers with self-service ordering, custom tier-based pricing contracts, bulk quote requests, credit limits, and purchase order approval workflows.',
    image: enterpriseImg,
    imageAlt: 'B2B wholesale ecommerce portal 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'erp-wms-integrations',
    number: '04',
    title: 'ERP, WMS & Fulfillment Integrations',
    description:
      'Connect storefronts directly to NetSuite, SAP, ShipStation, and 3PL fulfillment warehouses to automate inventory counts, label generation, and tracking alerts.',
    image: integrationsImg,
    imageAlt: 'Ecommerce ERP and logistics warehouse integration 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'payment-gateways-fraud',
    number: '05',
    title: 'Payment Gateways & BNPL Integration',
    description:
      'Seamlessly integrate Stripe, PayPal, Adyen, Apple Pay, Google Pay, and Buy-Now-Pay-Later (Klarna, Affirm) services equipped with automated AI fraud detection.',
    image: discoveryImg,
    imageAlt: 'Payment gateway and checkout optimization 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'cro-personalization',
    number: '06',
    title: 'CRO & Algorithmic Personalization',
    description:
      'Maximize customer lifetime value with automated product recommendations, smart search with Algolia, A/B conversion experimentation, and dynamic cart triggers.',
    image: cloudDevopsImg,
    imageAlt: 'Ecommerce conversion rate optimization 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

export const ECOMMERCE_FAQS: FAQItemData[] = [
  {
    id: 'ecom-headless-advantages',
    question: 'Why should we consider headless commerce over traditional monolithic platforms?',
    answer:
      'Headless commerce separates the frontend presentation layer from backend logic, resulting in sub-second page loads, limitless design flexibility, superior mobile conversion rates, and omnichannel delivery.',
    isApproved: true,
  },
  {
    id: 'ecom-platforms-supported',
    question: 'Which e-commerce platforms and engines do you work with?',
    answer:
      'We build across Shopify Plus, Magento / Adobe Commerce, BigCommerce, MedusaJS, WooCommerce, and completely custom headless architectures paired with Next.js.',
    isApproved: true,
  },
  {
    id: 'ecom-b2b-capabilities',
    question: 'Can you handle complex B2B commerce workflows alongside B2C?',
    answer:
      'Yes, we engineer hybrid B2B/B2C stores with company hierarchy accounts, custom contract pricing tables, minimum order quantities, purchase order terms, and quick-order CSV uploads.',
    isApproved: true,
  },
  {
    id: 'ecom-checkout-security',
    question: 'How do you guarantee payment security and PCI compliance?',
    answer:
      'All payment processing is tokenized directly via Level 1 PCI-DSS certified payment processors (Stripe, Adyen, PayPal), ensuring no raw credit card data touches your servers.',
    isApproved: true,
  },
  {
    id: 'ecom-migration-process',
    question: 'Can you migrate our store, products, and customer data from an old platform?',
    answer:
      'Yes, we provide safe data migration covering product catalogs, customer histories, past orders, and URL 301 redirects to preserve your historical SEO rankings and customer credentials.',
    isApproved: true,
  },
];

