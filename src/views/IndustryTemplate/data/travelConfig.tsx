import React from 'react';
import type { IndustryPageConfig } from '../IndustryDetailView';

import travelHeroImg from '../../../assets/industries/page img/Travel.png';
import stage1Img from '../../../assets/industries/travel-hospitality/ecosystem/stage-1.png';
import stage2Img from '../../../assets/industries/travel-hospitality/ecosystem/stage-2.png';
import stage3Img from '../../../assets/industries/travel-hospitality/ecosystem/stage-3.png';
import stage4Img from '../../../assets/industries/travel-hospitality/ecosystem/stage-4.png';
import stage5Img from '../../../assets/industries/travel-hospitality/ecosystem/stage-5.png';
import stage6Img from '../../../assets/industries/travel-hospitality/ecosystem/stage-6.png';

export const travelConfig: IndustryPageConfig = {
  seoTitle: 'Travel & Hospitality Software Development | Webkorps',
  seoDescription:
    'Build connected travel & hospitality software: booking engines, property management (PMS), dynamic pricing, and guest mobile experiences.',
  canonicalUrl: 'https://www.webkorps.com/industries/travel-hospitality',

  badge: 'Travel & Hospitality Solutions',
  heroFirstWordPrefix: 'Connected',
  heroFirstWordLetter: 'T',
  heroSvgPath: (
    <path
      d="M14 20L23.5 14L33 20M17 28H30M20 33H27"
      stroke="#1887C9"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  heroFirstWordSuffix: 'ravel for',
  heroTitleLine2: (
    <>
      Seamless <span className="wk-service-hero__title-accent">Guest Experiences</span>
    </>
  ),
  heroDescription:
    'Build connected travel & hospitality software: booking engines, property management (PMS), dynamic pricing, and guest mobile experiences.',
  ctaText: 'Discuss Your Hospitality Project',

  statsTitle: (
    <>
      Travel & Hospitality Tech <span className="wk-ind-stats__title-accent">at a Glance</span>
    </>
  ),
  statsSubtitle: 'Direct booking conversion rates, mobile guest adoption, and dynamic revenue benchmarks driving modern hospitality brands.',
  statsData: {
    featured: {
      badge: 'DIRECT BOOKING BENCHMARK',
      value: '68%+',
      label: 'Digital Direct Bookings',
      description: 'Over two-thirds of modern hotel and travel bookings now occur via mobile apps and direct digital web engines rather than third-party OTAs.',
      source: 'Phocuswright & Skift Global Travel Tech Report • 2024–2025',
    },
    secondary: [
      {
        id: 'revpar-lift',
        badge: 'REVENUE',
        value: '18% Lift',
        label: 'RevPAR with Dynamic AI Pricing',
        description: 'Machine learning algorithms continuously optimize room rates based on local flights, events, and seasonal demand.',
        source: 'Hospitality Technology Revenue Benchmark',
      },
      {
        id: 'checkin-speed',
        badge: 'GUEST EXPERIENCE',
        value: '< 60 sec',
        label: 'Contactless Mobile Check-In',
        description: 'Digital room keys on smartphones and automated payment authorizations eliminate front-desk queues.',
        source: 'American Hotel & Lodging Association (AHLA)',
      },
      {
        id: 'channel-sync',
        badge: 'INTEROPERABILITY',
        value: '100% Sync',
        label: 'Real-Time OTA Channel Management',
        description: 'Instant sub-second room rate and availability synchronization across Booking.com, Expedia, and Airbnb.',
        source: 'Global Hospitality Distribution Index • 2025',
      },
    ],
  },

  ecosystemTitle: (
    <>
      How the Modern <span className="wk-ind-eco__title-accent">Hospitality Ecosystem Works</span>
    </>
  ),
  ecosystemSubtitle: 'From personalized trip discovery and direct booking to digital room keys, in-stay concierge, and post-stay loyalty rewards.',
  ecosystemStages: [
    {
      id: 'trip-discovery-booking',
      stepNumber: '01',
      title: 'Direct Booking Engine & Discovery',
      description: 'High-converting responsive booking engines with room bundle add-ons, localized currencies, and instant payment authorizations.',
      image: stage1Img,
    },
    {
      id: 'channel-manager',
      stepNumber: '02',
      title: 'Global Distribution & Channel Sync',
      description: 'Two-way API synchronizers updating room inventory, blackout dates, and rates across GDS and global OTA channels simultaneously.',
      image: stage2Img,
    },
    {
      id: 'contactless-checkin',
      stepNumber: '03',
      title: 'Digital Key & Mobile Check-In',
      description: 'Guests verify ID, authorize incidentals, and receive encrypted Apple Wallet/Google Wallet digital room keys before arrival.',
      image: stage3Img,
    },
    {
      id: 'pms-operations',
      stepNumber: '04',
      title: 'Hotel PMS & Housekeeping Operations',
      description: 'Real-time room status tracking, automated housekeeping task assignment, and automated maintenance dispatching on staff mobile tablets.',
      image: stage4Img,
    },
    {
      id: 'in-stay-concierge',
      stepNumber: '05',
      title: 'In-Stay Concierge & POS Ordering',
      description: 'Digital room service dining ordering, spa booking, late check-out requests, and 24/7 AI concierge messaging via WhatsApp/SMS.',
      image: stage5Img,
    },
    {
      id: 'loyalty-guest-intelligence',
      stepNumber: '06',
      title: 'Guest Intelligence & Loyalty Engine',
      description: 'Centralized guest preference profiles (pillow type, room temperature), automated loyalty points, and personalized post-trip offers.',
      image: stage6Img,
    },
  ],

  challengesTitle: (
    <>
      Why Hospitality Systems <span className="wk-ind-ch__title-accent">Face Complexity</span>
    </>
  ),
  challengesSubtitle: 'High OTA commission fees, legacy on-premise PMS mainframes, and fragmented guest data across departments hinder profitability.',
  challenges: [
    {
      number: '01',
      title: 'High OTA Commission Fees & Lost Margins',
      description: 'Hotels forfeit 15% to 25% of their room revenue to online travel agencies (Booking.com/Expedia) due to unoptimized direct booking websites.',
      impact: 'Severely compressed operating margins and loss of direct customer relationships.',
    },
    {
      number: '02',
      title: 'Legacy On-Premise Hotel PMS Lock-In',
      description: 'Decades-old property management software lacks modern REST APIs and requires expensive local server hardware at every property.',
      impact: 'Slow check-in workflows, high IT maintenance overhead, and inability to launch mobile guest features.',
    },
    {
      number: '03',
      title: 'Channel Rate Parity Violations & Overbooking',
      description: 'Batch inventory updates cause delayed rate sync across OTAs, leading to accidental double-bookings during peak holidays.',
      impact: 'Angry guests, expensive re-booking accommodations at competitor hotels, and OTA penalty fines.',
    },
    {
      number: '04',
      title: 'Front-Desk Congestion & Staff Shortages',
      description: 'Long check-in lines during 3 PM arrival windows frustrate guests and overwhelm front-desk associates.',
      impact: 'Negative online TripAdvisor and Google reviews that damage property RevPAR ranking.',
    },
    {
      number: '05',
      title: 'Disconnected Guest Profiles & Missed Upsells',
      description: 'Restaurant POS, spa reservations, and room booking software do not share guest data, preventing personalized service.',
      impact: 'Missed on-property ancillary revenue opportunities and impersonal guest experiences.',
    },
    {
      number: '06',
      title: 'Complex Multi-Property Enterprise Reporting',
      description: 'Hotel management groups struggle to aggregate revenue and occupancy numbers across multiple hotel brands in different regions.',
      impact: 'Days of manual spreadsheet reconciliations to generate owner financial statements.',
    },
  ],

  capabilitiesTitle: (
    <>
      Engineered Software for{' '}
      <span className="wk-capabilities__title-accent">Leading Hospitality Brands</span>
    </>
  ),
  capabilitiesSubtitle: 'We build custom booking engines, PMS platforms, and contactless guest experience apps.',
  capabilities: [
    {
      id: 'direct-booking-engine',
      number: '01',
      title: 'Direct Hotel Booking Engines',
      description: 'High-converting responsive booking platforms with multi-currency checkouts, add-on packages, and automated loyalty tier discounts.',
      image: travelHeroImg,
      imageAlt: 'Direct booking engine 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'pms-cloud',
      number: '02',
      title: 'Cloud Property Management Systems (PMS)',
      description: 'Modern cloud PMS solutions unifying front desk, room reservations, night audit, and automated housekeeping task dispatch.',
      image: travelHeroImg,
      imageAlt: 'Cloud hotel PMS platform 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'channel-manager-api',
      number: '03',
      title: 'Real-Time OTA Channel Managers',
      description: 'Sub-second inventory and rate distribution connecting directly to Booking.com, Expedia, Agoda, and global GDS networks.',
      image: travelHeroImg,
      imageAlt: 'Channel manager and GDS interconnect 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'mobile-guest-app',
      number: '04',
      title: 'Contactless Mobile Guest Apps',
      description: 'Digital room keys via Bluetooth/NFC, mobile check-in/out, digital room service ordering, and integrated messaging concierge.',
      image: travelHeroImg,
      imageAlt: 'Mobile guest app and digital room key 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'dynamic-pricing-engine',
      number: '05',
      title: 'AI Revenue Management & Dynamic Pricing',
      description: 'Algorithmic room pricing that responds automatically to competitor rates, airport flight arrivals, and local event demand.',
      image: travelHeroImg,
      imageAlt: 'AI dynamic pricing and revenue management 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'hospitality-pos-spa',
      number: '06',
      title: 'Dining, Spa & Ancillary Booking POS',
      description: 'Unified billing systems allowing guests to charge restaurant dining, poolside cabanas, and spa treatments directly to their room.',
      image: travelHeroImg,
      imageAlt: 'Hospitality POS and ancillary booking 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
  ],

  aiTitle: (
    <>
      Smarter <span className="wk-ind-ai__title-accent">Hospitality with AI</span>
    </>
  ),
  aiSubtitle: 'AI optimizes room rates in real time, handles guest concierge requests 24/7, and forecasts seasonal occupancy.',
  aiImage: travelHeroImg,
  aiUseCases: [
    {
      id: 'ai-dynamic-room-pricing',
      number: '01',
      title: 'Real-Time RevPAR Dynamic Pricing',
      problem: 'Hotels leave thousands on the table when sudden concert announcements fill regional rooms without price adjustments.',
      aiApproach: 'Reinforcement learning algorithms monitor flight arrivals, local ticket sales, and competitor rates to adjust pricing.',
      integrations: 'OTA rate scrapers, flight arrival APIs, PMS reservation ledgers, and city event calendars.',
      benefit: '18% higher revenue per available room (RevPAR) and 95%+ peak weekend occupancy.',
    },
    {
      id: 'ai-virtual-concierge',
      number: '02',
      title: 'Multilingual GenAI Virtual Concierge',
      problem: 'Front desks are overwhelmed with repeat questions ("what is the WiFi password? where is the gym?") in foreign languages.',
      aiApproach: 'RAG-powered conversational agents answer guest queries instantly via WhatsApp, SMS, or in-room tablets in 30+ languages.',
      integrations: 'Hotel directory knowledge base, local tourist guide databases, and PMS guest booking records.',
      benefit: 'Deflects 65% of front-desk calls while boosting guest review scores.',
    },
    {
      id: 'ai-housekeeping-dispatch',
      number: '03',
      title: 'Predictive Housekeeping Route Optimization',
      problem: 'Housekeeping teams waste time walking between floors without knowing which guests have checked out early.',
      aiApproach: 'Optimization algorithms prioritize rooms based on guest check-out events and upcoming VIP arrivals.',
      integrations: 'Smart door lock checkout triggers, PMS room status tables, and housekeeping staff smart devices.',
      benefit: 'Reduces room turnaround time by 35%, enabling early check-in for premium loyalty members.',
    },
    {
      id: 'ai-guest-sentiment',
      number: '04',
      title: 'Autonomous In-Stay Sentiment Monitoring',
      problem: 'Dissatisfied guests leave negative online reviews after checkout without giving the hotel a chance to fix issues during the stay.',
      aiApproach: 'NLP models analyze in-app requests and chat sentiment, immediately alerting the duty manager to service recovery opportunities.',
      integrations: 'Guest messaging streams, room service ticket history, and manager mobile pagers.',
      benefit: 'Resolves 80% of guest complaints during the stay, converting potential 1-star reviews into positive ratings.',
    },
    {
      id: 'ai-food-waste-reduction',
      number: '05',
      title: 'Predictive Kitchen Prep & Waste Reduction',
      problem: 'Hotel banquet kitchens over-prep food for buffet breakfasts, throwing out expensive ingredients daily.',
      aiApproach: 'Time-series machine learning forecasts exact kitchen ingredient quantities based on confirmed room occupancy.',
      integrations: 'PMS guest count tables, kitchen POS order logs, and banquet event orders (BEO).',
      benefit: 'Cuts commercial kitchen food waste by 22%, saving thousands in monthly food costs.',
    },
    {
      id: 'ai-personalized-loyalty',
      number: '06',
      title: 'Hyper-Personalized Post-Stay Retargeting',
      problem: 'Generic marketing emails promoting ski trips to beach-goers result in low booking conversions.',
      aiApproach: 'Customer data platforms analyze past booking preferences to deliver tailored travel offers at the optimal booking cycle.',
      integrations: 'CRM customer profiles, email marketing platforms, and booking engine purchase histories.',
      benefit: '3.8x higher email click-to-book conversion compared to generic promotional blasts.',
    },
  ],

  domainsTitle: (
    <>
      Hospitality Platforms for{' '}
      <span className="wk-domain-sol__title-accent">Every Travel Business</span>
    </>
  ),
  domainsSubtitle: 'Tailored platforms for boutique hotels, multi-property resort chains, and tour booking operators.',
  domainsEngineeringLabel: 'Webkorps Hospitality Engineering',
  domains: [
    {
      id: 'boutique-hotels',
      name: 'Boutique Hotels & Luxury Resorts',
      badge: 'GUEST EXPERIENCES',
      solutionTitle: 'Bespoke Mobile Apps, Digital Keys & Concierge Portals',
      challenge: 'Boutique hotels compete on personalized service and need digital tools that elevate the high-touch luxury experience.',
      engineering: 'We develop custom branded mobile guest apps featuring digital room keys, in-app amenity reservations, and personal concierge messaging.',
      bulletPoints: [
        'Curated digital concierge itineraries tailored to guest preferences.',
        'Seamless smartphone room key access eliminating traditional plastic cards.',
        'High direct-booking conversion with zero OTA commission leakage.',
      ],
    },
    {
      id: 'hotel-chains',
      name: 'Multi-Property Hotel Chains',
      badge: 'ENTERPRISE PORTFOLIO',
      solutionTitle: 'Central Reservation Systems (CRS) & Channel Management',
      challenge: 'Multi-property operators require consolidated inventory management, unified loyalty points, and cross-property reporting.',
      engineering: 'Webkorps architects enterprise Central Reservation Systems with instant two-way OTA sync and enterprise revenue analytics.',
      bulletPoints: [
        'Real-time rate and room availability sync across thousands of rooms worldwide.',
        'Global loyalty rewards program integration allowing points earn and burn across all properties.',
        'Consolidated executive revenue dashboards displaying RevPAR, ADR, and occupancy per region.',
      ],
    },
    {
      id: 'tour-operators',
      name: 'Tour & Activity Operators',
      badge: 'EXPERIENCE BOOKINGS',
      solutionTitle: 'Real-Time Capacity Scheduling, Waivers & Dynamic Pricing',
      challenge: 'Excursion and activity providers face high seasonal demand, complex guide scheduling, and paper liability waivers.',
      engineering: 'We build digital activity booking engines with automated guide assignment, digital liability e-signatures, and weather rescheduling.',
      bulletPoints: [
        'Automated guide and equipment capacity scheduling preventing overbooking.',
        'Digital mobile liability waivers signed on smartphones prior to activity start.',
        'Instant automated weather rescheduling alerts with flexible credit vouchers.',
      ],
    },
  ],

  partnerTitle: (
    <>
      Your Travel & Hospitality{' '}
      <span className="wk-ind-pt__title-accent">Technology Partner</span>
    </>
  ),
  partnerSubtitle: 'We combine hospitality industry domain proficiency with modern cloud, mobile, and payment engineering.',
  partnerImage: travelHeroImg,
  partnerCapabilities: [
    {
      number: '01',
      title: 'Deep PMS & GDS Protocol Integration',
      description: 'Extensive experience integrating with Opera (Oracle Hospitality), Cloudbeds, Amadeus, Sabre, and major OTA channel managers.',
      highlight: 'Oracle Opera & GDS Certified Connect',
    },
    {
      number: '02',
      title: 'PCI-DSS & Global Payment Security',
      description: 'Bank-grade payment orchestration supporting multi-currency transactions, 3D-Secure 2.0, and automated incidental holds.',
      highlight: 'PCI-DSS Level 1 & 3DS 2.0 Compliance',
    },
    {
      number: '03',
      title: 'High-Concurrency Flash-Booking Scale',
      description: 'Cloud infrastructure engineered to withstand viral social media booking surges and holiday campaign traffic without lag.',
      highlight: 'Sub-Second Global Search Latency',
    },
    {
      number: '04',
      title: 'Mobile-First Guest UX Design',
      description: 'Intuitive, award-winning mobile interfaces designed for high traveler adoption and 5-star app store ratings.',
      highlight: 'Frictionless Direct Booking UX',
    },
    {
      number: '05',
      title: '24/7 Hospitality Support SLAs',
      description: 'Round-the-clock technical monitoring ensuring booking engines and digital keys function without interruption 365 days a year.',
      highlight: '99.99% Hospitality Uptime SLA',
    },
  ],

  outcomesTitle: (
    <>
      Boost Direct Bookings with <span className="wk-service-outcomes__title-accent">Connected Travel Tech</span>
    </>
  ),
  outcomesSubtitle: '68% more direct bookings, 18% higher RevPAR with AI pricing, and under 60-second mobile check-in.',
  outcomes: [
    {
      id: 'direct-bookings',
      number: '01',
      title: '68% Higher Direct Booking Volume',
      description: 'Lightning-fast mobile-optimized booking engines and direct-rate guarantees reduce expensive reliance on third-party OTAs.',
      image: travelHeroImg,
      imageAlt: 'Higher direct bookings outcome 3D illustration',
    },
    {
      id: 'revpar-growth',
      number: '02',
      title: '18% RevPAR Revenue Growth',
      description: 'Dynamic machine learning pricing models maximize room yield during high-demand events and protect baseline margins.',
      image: travelHeroImg,
      imageAlt: 'RevPAR growth outcome 3D illustration',
    },
    {
      id: 'contactless-speed',
      number: '03',
      title: 'Sub-60 Second Mobile Check-In',
      description: 'Smartphone digital keys and digital payment pre-authorizations eliminate front-desk lines and delight arriving guests.',
      image: travelHeroImg,
      imageAlt: 'Mobile check-in speed outcome 3D illustration',
    },
    {
      id: 'ancillary-spend',
      number: '04',
      title: '26% Higher In-Stay Ancillary Spend',
      description: 'Frictionless mobile dining orders, spa bookings, and room upgrades charged directly to room folios increase guest spend.',
      image: travelHeroImg,
      imageAlt: 'Ancillary spend outcome 3D illustration',
    },
  ],

  techStackTitle1: 'Future-Ready',
  techStackTitle2: 'Hospitality Stack',
  techStackSubtitle: 'We combine Next.js storefronts, cloud microservices, payment gateways, and Bluetooth door lock protocols to power seamless travel experiences.',

  faqTitle: (
    <>
      Hospitality Software <span className="wk-faq__title-accent">FAQs</span>
    </>
  ),
  faqSubtitle: 'Answers to common questions regarding PMS integrations, OTA channel managers, and mobile digital room keys.',
  faqs: [
    {
      id: 'faq-1',
      question: 'Can your custom booking engine connect with our existing hotel PMS (e.g., Opera)?',
      answer:
        'Yes. We build custom booking engines that connect directly with leading property management systems including Oracle Hospitality Opera, Cloudbeds, Mews, and Maestro. Room availability, rates, and guest reservations sync bidirectionally in real time.',
      isApproved: true,
    },
    {
      id: 'faq-2',
      question: 'How do mobile digital room keys work on guest smartphones?',
      answer:
        'We integrate with commercial digital lock manufacturers (Assa Abloy, Dormakaba, Salto) using encrypted Bluetooth Low Energy (BLE) or NFC technology. Once a guest completes online check-in, an encrypted digital key token is delivered securely to their smartphone or Apple/Google Wallet.',
      isApproved: true,
    },
    {
      id: 'faq-3',
      question: 'How does your channel manager prevent double-bookings across OTAs?',
      answer:
        'Our channel manager architecture utilizes event-driven webhooks and sub-second API queues. The moment a room is booked on your website or an OTA like Booking.com, inventory counts immediately drop across all other connected channels in under 500 milliseconds, preventing parity discrepancies or double-bookings.',
      isApproved: true,
    },
    {
      id: 'faq-4',
      question: 'What payment methods do your travel booking engines support?',
      answer:
        'We support all major global credit cards, Apple Pay, Google Pay, Alipay, WeChat Pay, and regional instant payment rails. We also integrate automated security authorization holds for incidentals and automated chargeback defense.',
      isApproved: true,
    },
    {
      id: 'faq-5',
      question: 'What is the typical timeframe to launch a custom hotel booking engine?',
      answer:
        'A custom direct booking platform with PMS integration, payment gateway configuration, and mobile check-in capabilities typically deploys in 10 to 14 weeks.',
      isApproved: true,
    },
  ],
  ctaTitle: 'Ready to Modernize Your Hospitality Experience?',
  ctaDesc: 'Increase direct bookings, delight guests with contactless mobile tech, and automate hotel operations with custom software.',
};
