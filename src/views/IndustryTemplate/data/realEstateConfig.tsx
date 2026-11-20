import React from 'react';
import type { IndustryPageConfig } from '../IndustryDetailView';

import realEstateHeroImg from '../../../assets/industries/page img/Real state.png';
import realEstate3dImg from '../../../assets/industries/realestate.png';
import stage1Img from '../../../assets/industries/real-estate/ecosystem/stage-1.png';
import stage2Img from '../../../assets/industries/real-estate/ecosystem/stage-2.png';
import stage3Img from '../../../assets/industries/real-estate/ecosystem/stage-3.png';
import stage4Img from '../../../assets/industries/real-estate/ecosystem/stage-4.png';
import stage5Img from '../../../assets/industries/real-estate/ecosystem/stage-5.png';
import stage6Img from '../../../assets/industries/real-estate/ecosystem/stage-6.png';

export const realEstateConfig: IndustryPageConfig = {
  seoTitle: 'Real Estate Software Development & PropTech Solutions | Webkorps',
  seoDescription:
    'Build modern PropTech solutions: property management platforms, automated tenant portals, 3D digital twins, and AI real estate valuation.',
  canonicalUrl: 'https://www.webkorps.com/industries/real-estate',

  badge: 'Real Estate & PropTech Solutions',
  heroFirstWordPrefix: 'Smart',
  heroFirstWordLetter: 'P',
  heroSvgPath: (
    <path
      d="M14 20L23.5 13L33 20V33H14V20Z"
      stroke="#1887C9"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  heroFirstWordSuffix: 'ropTech for',
  heroTitleLine2: (
    <>
      Connected <span className="wk-service-hero__title-accent">Real Estate Portfolios</span>
    </>
  ),
  heroDescription:
    'Build modern PropTech solutions: property management platforms, automated tenant portals, 3D digital twins, and AI real estate valuation.',
  ctaText: 'Discuss Your PropTech Project',

  statsTitle: (
    <>
      Real Estate & PropTech <span className="wk-ind-stats__title-accent">at a Glance</span>
    </>
  ),
  statsSubtitle: 'Critical metrics, automated leasing velocity, and occupancy optimization reshaping commercial and residential real estate.',
  statsData: {
    featured: {
      badge: 'PROPTECH ADOPTION',
      value: '72%+',
      label: 'Digital Property Management',
      description: 'Over 72% of commercial and multi-family property asset managers utilize digital leasing portals and connected smart building IoT.',
      source: 'Urban Land Institute & JLL Global PropTech Outlook',
    },
    secondary: [
      {
        id: 'lease-speed',
        badge: 'VELOCITY',
        value: '4x Faster',
        label: 'Digital Lease Signing Cycle',
        description: 'Automated tenant screening and digital lease execution compress closing times from weeks to under 48 hours.',
        source: 'National Multifamily Housing Council (NMHC)',
      },
      {
        id: 'energy-reduction',
        badge: 'SUSTAINABILITY',
        value: '24% Saved',
        label: 'HVAC Energy Cost Reduction',
        description: 'Smart building sensor networks dynamically regulate heating, cooling, and lighting based on live foot-traffic density.',
        source: 'US Green Building Council (USGBC) Report',
      },
      {
        id: 'rent-collection',
        badge: 'CASH FLOW',
        value: '99.1%',
        label: 'On-Time Rent Collection Rate',
        description: 'Automated ACH payment auto-drafts and SMS rent reminders eliminate manual checks and overdue receivable queues.',
        source: 'PropTech Financial Benchmark • 2025',
      },
    ],
  },

  ecosystemTitle: (
    <>
      How the Modern <span className="wk-ind-eco__title-accent">PropTech Ecosystem Works</span>
    </>
  ),
  ecosystemSubtitle: 'From automated virtual tours and tenant screening to smart lease contracts, maintenance dispatch, and utility telemetry.',
  ecosystemStages: [
    {
      id: 'digital-listing-tours',
      stepNumber: '01',
      title: 'Digital Listings & 3D Virtual Tours',
      description: 'Photorealistic WebGL 3D property walkthroughs, floor plan configurators, and automated syndication across Zillow and MLS feeds.',
      image: stage1Img,
    },
    {
      id: 'automated-screening',
      stepNumber: '02',
      title: 'AI Tenant Screening & Approval',
      description: 'Instant credit bureau verification, automated employment income checks, and criminal background reporting in under 3 minutes.',
      image: stage2Img,
    },
    {
      id: 'digital-leasing',
      stepNumber: '03',
      title: 'Digital Leases & e-Signatures',
      description: 'Compliant lease drafting with dynamic municipal addendums, instant DocuSign/HelloSign integration, and automated deposit escrow.',
      image: stage3Img,
    },
    {
      id: 'tenant-portal-payments',
      stepNumber: '04',
      title: 'Tenant Portal & Rent Collection',
      description: 'Mobile apps for monthly ACH auto-pay, amenity room reservations, parcel delivery notifications, and concierge messaging.',
      image: stage4Img,
    },
    {
      id: 'maintenance-dispatch',
      stepNumber: '05',
      title: 'Smart Maintenance Work Orders',
      description: 'Photo-based maintenance ticketing, automated vendor dispatch, quote approval workflows, and digital invoicing.',
      image: stage5Img,
    },
    {
      id: 'smart-building-iot',
      stepNumber: '06',
      title: 'Smart Building IoT & Telemetry',
      description: 'Connected smart thermostats, keyless RFID door access, water leak sensors, and automated energy sub-metering.',
      image: stage6Img,
    },
  ],

  challengesTitle: (
    <>
      Why Property Portfolios <span className="wk-ind-ch__title-accent">Get Complex</span>
    </>
  ),
  challengesSubtitle: 'Disconnected property management software, paper leases, and uncoordinated maintenance contractors create high vacancy rates and slow rent reconciliation.',
  challenges: [
    {
      number: '01',
      title: 'Fragmented Property Management Systems',
      description: 'Asset managers juggle disconnected platforms for accounting (Yardi/RealPage), CRM, and maintenance, creating data blindspots.',
      impact: 'Delayed monthly financial reporting, duplicate data entry, and inaccurate occupancy metrics.',
    },
    {
      number: '02',
      title: 'Slow Lease Turnaround & High Vacancy Costs',
      description: 'Manual paper application reviews and slow back-and-forth email communications cause prospective tenants to lease elsewhere.',
      impact: 'Extended vacant unit days, lost monthly rental income, and inflated tenant acquisition costs.',
    },
    {
      number: '03',
      title: 'Delayed Maintenance & Expensive Water Damage',
      description: 'Undetected plumbing leaks and slow maintenance contractor dispatch result in extensive structural damage and tenant disputes.',
      impact: 'Thousands in emergency remediation bills and high tenant turnover due to poor service ratings.',
    },
    {
      number: '04',
      title: 'Rising Building Energy Costs & ESG Mandates',
      description: 'Unoptimized commercial HVAC systems run on empty office floors, violating local city carbon emission regulations.',
      impact: 'Heavy municipal non-compliance penalty fines and inflated building operating expenses.',
    },
    {
      number: '05',
      title: 'Manual Rent Reconciliation & Payment Delays',
      description: 'Paper checks and mismatched wire transfers require property managers to spend days manually balancing ledgers each month.',
      impact: 'High delinquency rates and delayed distributions to property fund investors.',
    },
    {
      number: '06',
      title: 'Lack of Real-Time Portfolio Analytics',
      description: 'Real estate investment trusts (REITs) cannot forecast regional rent yields or maintenance CAPEX without tedious manual modeling.',
      impact: 'Suboptimal acquisition decisions and missed opportunities to optimize rental yields.',
    },
  ],

  capabilitiesTitle: (
    <>
      Comprehensive Software for{' '}
      <span className="wk-capabilities__title-accent">Modern Real Estate Enterprises</span>
    </>
  ),
  capabilitiesSubtitle: 'We engineer modular PropTech platforms for property management, tenant experience, and automated lease administration.',
  capabilities: [
    {
      id: 'property-management',
      number: '01',
      title: 'Property Management Platforms (PMS)',
      description: 'Cloud platforms unifying tenant accounting, rent collection, lease administration, and owner disbursement reporting.',
      image: realEstateHeroImg,
      imageAlt: 'Property management system 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'tenant-experience',
      number: '02',
      title: 'Tenant Experience & Resident Apps',
      description: 'White-label iOS/Android apps for keyless smart door entry, rent auto-pay, amenity booking, and community messaging.',
      image: realEstate3dImg,
      imageAlt: 'Resident and tenant experience app 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: '3d-virtual-tours',
      number: '03',
      title: 'Interactive 3D Virtual Tours & Twins',
      description: 'WebGL-powered interactive 3D digital floor plans, space planning tools, and immersive virtual unit walkthroughs.',
      image: realEstateHeroImg,
      imageAlt: '3D virtual tour and digital twin 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'smart-building-iot',
      number: '04',
      title: 'Smart Building IoT & Telemetry',
      description: 'Sensors monitoring water leaks, indoor air quality (CO2/VOC), smart thermostat scheduling, and access control.',
      image: realEstate3dImg,
      imageAlt: 'Smart building IoT and sensor integration 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'commercial-leasing',
      number: '05',
      title: 'Commercial Lease & Asset Management',
      description: 'Tools for commercial lease comps, tenant stacking plans, CAM reconciliations, and debt amortization schedules.',
      image: realEstateHeroImg,
      imageAlt: 'Commercial lease and asset management 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'ai-valuation',
      number: '06',
      title: 'AI Automated Valuation Models (AVM)',
      description: 'Machine learning algorithms forecasting property valuations, rental yields, and neighborhood gentrification trends.',
      image: realEstate3dImg,
      imageAlt: 'AI automated valuation models 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
  ],

  aiTitle: (
    <>
      Smarter <span className="wk-ind-ai__title-accent">Real Estate with AI</span>
    </>
  ),
  aiSubtitle: 'AI predicts property valuations, automates tenant inquiries 24/7, and optimizes building energy efficiency.',
  aiImage: realEstateHeroImg,
  aiUseCases: [
    {
      id: 'ai-avm-valuation',
      number: '01',
      title: 'Predictive Automated Valuation (AVM)',
      problem: 'Manual property appraisal comps take weeks and miss hyper-local micro-market price shifts.',
      aiApproach: 'Gradient boosted algorithms evaluate neighborhood comps, school ratings, transit proximity, and market velocity.',
      integrations: 'MLS transaction feeds, county tax assessor records, and GIS mapping layers.',
      benefit: 'Delivers property valuations with under 2.8% median error in seconds.',
    },
    {
      id: 'ai-leasing-assistant',
      number: '02',
      title: '24/7 AI Leasing Agent & Tour Booking',
      problem: 'Over 55% of apartment listing inquiries arrive after business hours and go unanswered.',
      aiApproach: 'Conversational AI answers tenant questions regarding pet policies and parking, instantly scheduling tours.',
      integrations: 'Property CRM calendars, SMS messaging, and Zillow/Apartments.com inquiry webhooks.',
      benefit: 'Engages 100% of after-hours leads and books 3x more confirmed property tours.',
    },
    {
      id: 'ai-hvac-optimization',
      number: '03',
      title: 'Autonomous Building HVAC Optimization',
      problem: 'Commercial HVAC systems run at full capacity on empty floors, driving up carbon emissions and utility bills.',
      aiApproach: 'Reinforcement learning balances weather forecasts, occupancy badge swipes, and solar heat gain.',
      integrations: 'BMS building automation systems, smart thermostats, and weather forecast APIs.',
      benefit: 'Reduces total building energy consumption by 24% without sacrificing tenant comfort.',
    },
    {
      id: 'ai-maintenance-triage',
      number: '04',
      title: 'Visual Maintenance Triage & Dispatch',
      problem: 'Vague resident repair descriptions ("my sink is broken") lead to incorrect replacement parts and repeat truck rolls.',
      aiApproach: 'Computer vision classifies uploaded resident photos, identifying pipe models and required repair tools.',
      integrations: 'Resident mobile portal, plumbing supply catalogs, and contractor dispatch dispatchers.',
      benefit: '82% first-time maintenance fix rate, eliminating unnecessary contractor visits.',
    },
    {
      id: 'ai-rent-optimization',
      number: '05',
      title: 'Dynamic Rental Yield Optimization',
      problem: 'Static lease pricing results in vacant units during slow seasons and underpriced renewals during peak demand.',
      aiApproach: 'Dynamic pricing models recalculate optimal asking rents daily based on submarket vacancy rates.',
      integrations: 'Regional competitor vacancy scrapers, current portfolio rent rolls, and seasonal lease expirations.',
      benefit: '6.5% average increase in net operating income (NOI) across multi-family portfolios.',
    },
    {
      id: 'ai-lease-abstraction',
      number: '06',
      title: 'Automated Commercial Lease Abstraction',
      problem: 'Acquiring an office building requires manually reading hundreds of 80-page commercial lease contracts.',
      aiApproach: 'Specialized legal LLMs extract key lease dates, termination clauses, CAM caps, and renewal rights in minutes.',
      integrations: 'PDF lease archives, OCR document extractors, and Yardi/RealPage accounting software.',
      benefit: 'Reduces commercial lease review due diligence time from 3 weeks to under 4 hours.',
    },
  ],

  domainsTitle: (
    <>
      PropTech Platforms for{' '}
      <span className="wk-domain-sol__title-accent">Every Real Estate Sector</span>
    </>
  ),
  domainsSubtitle: 'Tailored solutions for multi-family residential, commercial office, and real estate investment funds.',
  domainsEngineeringLabel: 'Webkorps PropTech Engineering',
  domains: [
    {
      id: 'multifamily-residential',
      name: 'Multi-Family Residential Portals',
      badge: 'RESIDENTIAL COMMUNITIES',
      solutionTitle: 'Digital Leasing, Resident Experience & Rent Collection',
      challenge: 'Property managers handling hundreds of apartment units face high tenant turnover and administrative phone calls.',
      engineering: 'We develop branded tenant portals with instant digital lease signing, automated ACH rent collection, and package lockers.',
      bulletPoints: [
        '98%+ digital rent collection via automated ACH and debit card auto-draft.',
        'Instant background and credit screening reducing application turnaround to under 5 minutes.',
        'Smart package locker integrations with automated resident pickup SMS PINs.',
      ],
    },
    {
      id: 'commercial-office',
      name: 'Commercial & Mixed-Use Properties',
      badge: 'OFFICE & RETAIL ASSETS',
      solutionTitle: 'Visitor Badging, Space Utilization & Energy Management',
      challenge: 'Hybrid work patterns require flexible desk booking, tenant billing for after-hours HVAC, and seamless visitor badges.',
      engineering: 'Webkorps builds connected commercial workplace apps with digital mobile keycards, room booking, and sub-metered billing.',
      bulletPoints: [
        'Smartphone NFC/Bluetooth door access eliminating plastic RFID keycards.',
        'Real-time desk and meeting room occupancy sensors optimizing office square footage.',
        'Automated tenant utility chargebacks based on actual after-hours energy usage.',
      ],
    },
    {
      id: 'reit-investment',
      name: 'REITs & Real Estate Investment Funds',
      badge: 'PORTFOLIO INTELLIGENCE',
      solutionTitle: 'Investor Portals, Capital Call Distribution & Asset Modeling',
      challenge: 'Real estate private equity funds require secure investor dashboards, automated K-1 tax distribution, and portfolio yield metrics.',
      engineering: 'We architect investor relations portals featuring automated distribution waterfall calculators, interactive portfolio maps, and compliance vaults.',
      bulletPoints: [
        'Automated distribution waterfalls calculating LP/GP split returns accurately.',
        'Secure digital document rooms for quarterly investor reports and audited financials.',
        'Real-time portfolio IRR and cash-on-cash yield tracking across multi-city assets.',
      ],
    },
  ],

  partnerTitle: (
    <>
      Your PropTech{' '}
      <span className="wk-ind-pt__title-accent">Technology Partner</span>
    </>
  ),
  partnerSubtitle: 'We combine real estate domain knowledge with modern cloud, mobile, and IoT engineering.',
  partnerImage: realEstateHeroImg,
  partnerCapabilities: [
    {
      number: '01',
      title: 'Seamless PMS & Accounting Integration',
      description: 'Deep bidirectional API connectors with industry systems including Yardi Voyager, RealPage, Entrata, and AppFolio.',
      highlight: 'Yardi, RealPage & Entrata Direct API',
    },
    {
      number: '02',
      title: 'Bank-Grade Payment Security',
      description: 'PCI-DSS Level 1 compliant digital rent collection supporting NACHA ACH verification, tokenized cards, and escrow accounts.',
      highlight: 'PCI-DSS & NACHA Compliant Payments',
    },
    {
      number: '03',
      title: 'Smart Building Hardware Agnostic',
      description: 'Integrates with leading smart lock manufacturers (Salto, Brivo, Latch), thermostats (Honeywell, ecobee), and leak detectors.',
      highlight: 'Open IoT Hardware Interoperability',
    },
    {
      number: '04',
      title: 'Mobile-First Resident Design',
      description: 'Award-winning user interfaces engineered specifically to delight residents and achieve 90%+ daily active adoption.',
      highlight: '4.8+ Star App Store Rated UIs',
    },
    {
      number: '05',
      title: '24/7 Cloud Uptime & Resident SLAs',
      description: 'High-availability infrastructure ensuring residents can always unlock doors, report emergencies, and pay rent on time.',
      highlight: '99.99% Uptime SLA for Smart Access',
    },
  ],

  outcomesTitle: (
    <>
      Scale Portfolio Returns with <span className="wk-service-outcomes__title-accent">Connected PropTech</span>
    </>
  ),
  outcomesSubtitle: '4x faster leasing cycles, 24% lower energy utility overhead, and 99.1% on-time automated rent collection.',
  outcomes: [
    {
      id: 'faster-leasing',
      number: '01',
      title: '4x Faster Digital Lease Execution',
      description: 'Instant mobile applications, automated credit checks, and e-signatures compress unit turnaround from weeks to hours.',
      image: realEstateHeroImg,
      imageAlt: 'Faster digital leasing outcome 3D illustration',
    },
    {
      id: 'energy-savings',
      number: '02',
      title: '24% Building Energy Cost Reduction',
      description: 'Automated thermostat schedules and smart sensor setback policies lower monthly electrical and natural gas bills.',
      image: realEstate3dImg,
      imageAlt: 'Building energy savings 3D illustration',
    },
    {
      id: 'rent-reconciliation',
      number: '03',
      title: '99.1% On-Time Rent Collection',
      description: 'Automated ACH auto-pay and instant digital payment reminders eliminate manual paper check processing delays.',
      image: realEstateHeroImg,
      imageAlt: 'On-time rent collection outcome 3D illustration',
    },
    {
      id: 'tenant-retention',
      number: '04',
      title: '18% Higher Resident Lease Renewals',
      description: 'Delightful mobile resident apps and responsive digital maintenance ticketing improve resident satisfaction scores.',
      image: realEstate3dImg,
      imageAlt: 'Higher resident renewal outcome 3D illustration',
    },
  ],

  techStackTitle1: 'Future-Ready',
  techStackTitle2: 'PropTech Stack',
  techStackSubtitle: 'We combine mobile frameworks (React Native/Flutter), cloud microservices, and smart building IoT protocols to build resilient real estate software.',

  faqTitle: (
    <>
      PropTech Software <span className="wk-faq__title-accent">FAQs</span>
    </>
  ),
  faqSubtitle: 'Answers to common questions regarding Yardi/RealPage integrations, smart lock connectivity, and deployment timelines.',
  faqs: [
    {
      id: 'faq-1',
      question: 'Can your custom resident app integrate with our existing Yardi or RealPage accounting?',
      answer:
        'Yes. We have extensive experience integrating custom tenant-facing mobile apps with core property accounting systems like Yardi Voyager, RealPage, and Entrata. Rent balances, lease agreements, and payment records synchronize in real time via secure API connectors.',
      isApproved: true,
    },
    {
      id: 'faq-2',
      question: 'How do you connect smart door locks and thermostats to the platform?',
      answer:
        'We integrate with leading commercial access control and smart building hubs using standard protocols including Zigbee, Z-Wave, and direct cloud-to-cloud APIs (Brivo, Salto, Latch, Honeywell). Residents can unlock building doors and adjust apartment temperatures seamlessly from their mobile app.',
      isApproved: true,
    },
    {
      id: 'faq-3',
      question: 'How does your automated tenant screening process work?',
      answer:
        'When an applicant submits an online rental form, our system triggers secure API calls to credit bureaus (TransUnion/Experian) and national criminal registries. Income is verified via Plaid instant bank account analysis, returning an automated approval decision within 3 minutes.',
      isApproved: true,
    },
    {
      id: 'faq-4',
      question: 'Is digital rent collection secure and compliant with banking laws?',
      answer:
        'Yes. All payment processing is PCI-DSS Level 1 compliant and follows NACHA banking rules for ACH debit transactions. Sensitive bank details and card numbers are tokenized so raw financial data is never stored on application servers.',
      isApproved: true,
    },
    {
      id: 'faq-5',
      question: 'What is the typical timeframe to deploy a custom property portal?',
      answer:
        'A custom branded resident portal with digital lease signing, rent payments, and maintenance dispatch typically deploys in 8 to 12 weeks, including complete synchronization with your back-office property accounting system.',
      isApproved: true,
    },
  ],
  ctaTitle: 'Ready to Modernize Your Real Estate Operations?',
  ctaDesc: 'Streamline property leasing, delight residents, and automate building management with custom PropTech engineering.',
};
