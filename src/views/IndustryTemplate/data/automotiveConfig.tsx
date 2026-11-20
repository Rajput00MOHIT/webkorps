import React from 'react';
import type { IndustryPageConfig } from '../IndustryDetailView';

import automotiveHeroImg from '../../../assets/industries/page img/Automation.png';
import stage1Img from '../../../assets/industries/automotive/ecosystem/stage-1.png';
import stage2Img from '../../../assets/industries/automotive/ecosystem/stage-2.png';
import stage3Img from '../../../assets/industries/automotive/ecosystem/stage-3.png';
import stage4Img from '../../../assets/industries/automotive/ecosystem/stage-4.png';
import stage5Img from '../../../assets/industries/automotive/ecosystem/stage-5.png';
import stage6Img from '../../../assets/industries/automotive/ecosystem/stage-6.png';

export const automotiveConfig: IndustryPageConfig = {
  seoTitle: 'Automotive Software Development & Connected Mobility | Webkorps',
  seoDescription:
    'Engineer connected automotive software: EV fleet telematics, dealership management systems (DMS), in-vehicle IVI software, and predictive maintenance.',
  canonicalUrl: 'https://www.webkorps.com/industries/automotive',

  badge: 'Automotive & Mobility Solutions',
  heroFirstWordPrefix: 'Connected',
  heroFirstWordLetter: 'A',
  heroSvgPath: (
    <path
      d="M14 26L18 16H29L33 26M14 26H33M14 26V31H18V28M33 26V31H29V28"
      stroke="#1887C9"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  heroFirstWordSuffix: 'utomotive for',
  heroTitleLine2: (
    <>
      Next-Gen <span className="wk-service-hero__title-accent">Connected Mobility</span>
    </>
  ),
  heroDescription:
    'Engineer connected automotive software: EV fleet telematics, dealership management systems (DMS), in-vehicle IVI software, and predictive maintenance.',
  ctaText: 'Discuss Your Automotive Project',

  statsTitle: (
    <>
      Automotive & Connected Mobility <span className="wk-ind-stats__title-accent">at a Glance</span>
    </>
  ),
  statsSubtitle: 'Connected vehicle telemetry benchmarks, EV battery analytics, and dealership digital retail adoption driving modern mobility.',
  statsData: {
    featured: {
      badge: 'CONNECTED VEHICLE BENCHMARK',
      value: '85%+',
      label: 'New Vehicles Connected by 2026',
      description: 'Over 85% of newly manufactured passenger and commercial vehicles now feature embedded cellular telematics and OTA firmware update capabilities.',
      source: 'McKinsey & Automotive News Connected Mobility Index • 2024–2025',
    },
    secondary: [
      {
        id: 'telematics-latency',
        badge: 'IOT TELEMETRY',
        value: '< 100ms',
        label: 'CAN-Bus Sensor Stream Latency',
        description: 'High-frequency telemetry ingestion processing thousands of vehicle diagnostic sensor pings per second with MQTT brokers.',
        source: 'Automotive IoT Architecture Benchmark',
      },
      {
        id: 'battery-efficiency',
        badge: 'EV INTELLIGENCE',
        value: '15% Lift',
        label: 'EV Battery Range Optimization',
        description: 'Predictive thermal management and regenerative braking telemetry algorithms extend real-world electric vehicle driving range.',
        source: 'Global Electric Vehicle Association (GEVA)',
      },
      {
        id: 'dms-velocity',
        badge: 'DIGITAL RETAIL',
        value: '3x Faster',
        label: 'Dealership Purchase & Financing',
        description: 'Omnichannel digital dealership tools let buyers configure cars, approve financing, and sign contracts online in under 30 minutes.',
        source: 'National Automobile Dealers Association (NADA) Report',
      },
    ],
  },

  ecosystemTitle: (
    <>
      How the Modern <span className="wk-ind-eco__title-accent">Connected Mobility Ecosystem Works</span>
    </>
  ),
  ecosystemSubtitle: 'From in-vehicle CAN-bus telemetry and cloud data lakes to digital dealership retailing, EV charging networks, and predictive fleet maintenance.',
  ecosystemStages: [
    {
      id: 'can-bus-edge',
      stepNumber: '01',
      title: 'In-Vehicle Telematics & CAN-Bus',
      description: 'OBD-II, AIS-140, and J1939 edge computing hardware parsing live engine speed, tire pressure, accelerometer, and battery telemetry.',
      image: stage1Img,
    },
    {
      id: 'ota-firmware',
      stepNumber: '02',
      title: 'Over-The-Air (OTA) Updates & Security',
      description: 'Cryptographically signed firmware updates (FOTA) and software patches (SOTA) deployed securely to ECU clusters without dealership visits.',
      image: stage2Img,
    },
    {
      id: 'ev-charging-telemetry',
      stepNumber: '03',
      title: 'EV Battery Analytics & Charging Hubs',
      description: 'Real-time state of health (SoH) monitoring, intelligent battery pre-heating, and OCPP 2.0.1 compliant charging station integration.',
      image: stage3Img,
    },
    {
      id: 'predictive-fleet-cmms',
      stepNumber: '04',
      title: 'Predictive Fleet Diagnostics',
      description: 'Anomaly detection models flagging brake pad wear, transmission friction, and alternator failure before highway breakdowns occur.',
      image: stage4Img,
    },
    {
      id: 'dealership-management',
      stepNumber: '05',
      title: 'Dealership Management Systems (DMS)',
      description: 'Cloud showroom platforms unifying new/used vehicle inventory, trade-in valuations, lender financing credit pools, and service bay scheduling.',
      image: stage5Img,
    },
    {
      id: 'autonomous-adas-vision',
      stepNumber: '06',
      title: 'ADAS & Driver Safety Intelligence',
      description: 'Computer vision camera streams monitoring driver fatigue, lane departures, and road sign recognition for commercial driver safety scoring.',
      image: stage6Img,
    },
  ],

  challengesTitle: (
    <>
      Why Automotive Tech <span className="wk-ind-ch__title-accent">Faces Complexity</span>
    </>
  ),
  challengesSubtitle: 'Rigid OEM legacy architectures, complex multi-ECU communications, and massive IoT telemetry ingest pipelines burden engineering teams.',
  challenges: [
    {
      number: '01',
      title: 'Fragmented ECU Hardware & Protocol Silos',
      description: 'Modern vehicles contain over 100 disparate Electronic Control Units (ECUs) from different tier-1 suppliers, making unified software difficult.',
      impact: 'Slow time-to-market for in-car software features and high integration verification testing costs.',
    },
    {
      number: '02',
      title: 'High Ingest Telemetry Costs & Data Overload',
      description: 'Connected vehicle fleets generate gigabytes of raw CAN-bus sensor data daily, overwhelming unoptimized cloud databases.',
      impact: 'Runaway cloud infrastructure bills and delayed real-time vehicle anomaly alerts.',
    },
    {
      number: '03',
      title: 'Strict Automotive Cyber Security Regulations',
      description: 'Complying with UNECE WP.29 R155/R156 and ISO/SAE 21434 vehicle cybersecurity mandates is complex and labor-intensive.',
      impact: 'Risk of vehicle software vulnerabilities, regulatory sales bans, and expensive vehicle recalls.',
    },
    {
      number: '04',
      title: 'EV Range Anxiety & Battery Degradation',
      description: 'Unpredictable battery range drops in cold weather and rapid DC fast-charging degrade battery life prematurely.',
      impact: 'Consumer hesitation to adopt EVs and high warranty replacement costs for automakers.',
    },
    {
      number: '05',
      title: 'Disconnected Dealership Sales & Service Silos',
      description: 'Car buyers must spend 4 hours in physical dealerships filling out redundant paper finance forms and warranty paperwork.',
      impact: 'High customer drop-off during the car purchasing journey and low post-sale service retention.',
    },
    {
      number: '06',
      title: 'Commercial Fleet Downtime & Fuel Inefficiencies',
      description: 'Heavy truck operators lose thousands when unexpected mechanical breakdowns strand freight loads on interstate corridors.',
      impact: 'Missed customer delivery SLAs, towing expenses, and high driver turnover.',
    },
  ],

  capabilitiesTitle: (
    <>
      Advanced Software for{' '}
      <span className="wk-capabilities__title-accent">Next-Generation Mobility</span>
    </>
  ),
  capabilitiesSubtitle: 'We engineer connected vehicle software, EV charging platforms, and digital dealership tools.',
  capabilities: [
    {
      id: 'fleet-telematics',
      number: '01',
      title: 'Commercial Fleet Telematics & IoT',
      description: 'Real-time vehicle GPS tracking, CAN-bus sensor ingestion, fuel theft detection, and automated driver safety scorecards.',
      image: automotiveHeroImg,
      imageAlt: 'Commercial fleet telematics and IoT 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'ev-battery-platform',
      number: '02',
      title: 'EV Battery Telemetry & Charging Platforms',
      description: 'Cloud systems monitoring battery State of Charge (SoC), State of Health (SoH), and OCPP-compliant charging station billing.',
      image: automotiveHeroImg,
      imageAlt: 'EV battery analytics and charging platform 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'ota-firmware-management',
      number: '03',
      title: 'Over-The-Air (OTA) Firmware Management',
      description: 'Secure, differential FOTA/SOTA deployment pipelines with automated rollback protection adhering to ISO 24089 standards.',
      image: automotiveHeroImg,
      imageAlt: 'Over-the-air firmware updates 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'dms-dealership',
      number: '04',
      title: 'Dealership Management & Digital Showroom',
      description: 'End-to-end automotive digital retailing with 3D vehicle configurators, instant loan pre-approvals, and online trade-in appraisals.',
      image: automotiveHeroImg,
      imageAlt: 'Dealership management and digital showroom 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'predictive-vehicle-maintenance',
      number: '05',
      title: 'Predictive Vehicle Maintenance & Diagnostics',
      description: 'Neural network anomaly detection forecasting brake pad wear, transmission overheating, and battery degradation.',
      image: automotiveHeroImg,
      imageAlt: 'Predictive vehicle maintenance 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'in-vehicle-infotainment',
      number: '06',
      title: 'In-Vehicle Infotainment (IVI) & Connected Apps',
      description: 'Android Automotive OS (AAOS) and QNX dashboard apps delivering navigation, media streaming, and vehicle status controls.',
      image: automotiveHeroImg,
      imageAlt: 'In-vehicle infotainment and cockpit software 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
  ],

  aiTitle: (
    <>
      Smarter <span className="wk-ind-ai__title-accent">Automotive with AI</span>
    </>
  ),
  aiSubtitle: 'AI predicts battery degradation, monitors commercial driver fatigue, and automates vehicle loan underwriting.',
  aiImage: automotiveHeroImg,
  aiUseCases: [
    {
      id: 'ai-ev-range-prediction',
      number: '01',
      title: 'Predictive EV Range & Thermal Optimization',
      problem: 'Simple battery percentage indicators mislead EV drivers when driving uphill in sub-zero winter temperatures.',
      aiApproach: 'Machine learning factors in elevation change, ambient temperature, cabin HVAC demand, and driving style.',
      integrations: 'Battery Management System (BMS) sensors, GPS terrain elevation maps, and weather feeds.',
      benefit: 'Delivers 98.5% accurate range estimates, eliminating driver range anxiety.',
    },
    {
      id: 'ai-driver-fatigue-vision',
      number: '02',
      title: 'Edge Computer Vision Driver Safety Monitoring',
      problem: 'Drowsy and distracted commercial truck drivers cause thousands of severe highway accidents annually.',
      aiApproach: 'Edge infrared cameras track eye blink duration, yawning frequency, and smartphone gaze distraction in real time.',
      integrations: 'In-cabin IR camera modules, driver audio alert speakers, and fleet safety manager portals.',
      benefit: 'Reduces fatigue-related commercial driving accidents by 65%.',
    },
    {
      id: 'ai-predictive-component-failure',
      number: '03',
      title: 'Acoustic & Vibration Engine Diagnostics',
      problem: 'Internal bearing failures in electric drive units destroy motors if not detected early.',
      aiApproach: 'FFT spectral analysis models identify microscopic harmonic changes in motor whine long before failure.',
      integrations: 'CAN-bus motor vibration telemetry, fleet maintenance logs, and OEM parts ordering APIs.',
      benefit: 'Prevents catastrophic powertrain breakdowns, saving over $8,000 per vehicle in repair costs.',
    },
    {
      id: 'ai-dealership-valuation',
      number: '04',
      title: 'Automated Vehicle Trade-In Valuation & Damage Scanner',
      problem: 'Appraising used car trade-ins takes hours of manual inspection and often misses repainted panels or dents.',
      aiApproach: 'Computer vision scans 360-degree vehicle photos, identifying scratch depths, panel alignment, and tire tread depth.',
      integrations: 'Mobile camera appraisal apps, Manheim/Black Book auction data, and dealership DMS trade-in tables.',
      benefit: 'Generates guaranteed trade-in offers in under 5 minutes with 99.2% appraisal pricing accuracy.',
    },
    {
      id: 'ai-smart-charging-schedule',
      number: '05',
      title: 'Autonomous Fleet EV Smart Charging',
      problem: 'Plugging in 100 electric delivery vans simultaneously at 6 PM triggers massive peak electricity demand charges.',
      aiApproach: 'Dynamic scheduling algorithms stagger charging based on next-day route distance and real-time utility rates.',
      integrations: 'Depot electrical transformer meters, dynamic utility tariff APIs, and dispatch route schedules.',
      benefit: 'Cuts commercial EV fleet depot electrical utility bills by 32%.',
    },
    {
      id: 'ai-automotive-support-copilot',
      number: '06',
      title: 'GenAI Vehicle Owner Manual Co-Pilot',
      problem: 'Car owners ignore 600-page printed glovebox manuals and call dealerships with basic questions about dashboard warning lights.',
      aiApproach: 'Conversational mobile AI lets owners ask natural questions or snap photos of dashboard icons for instant guidance.',
      integrations: 'Vehicle OEM digital service manuals, mobile owner apps, and dealership service appointment schedulers.',
      benefit: 'Provides instant self-service guidance and books service appointments directly for genuine warning faults.',
    },
  ],

  domainsTitle: (
    <>
      Mobility Platforms for{' '}
      <span className="wk-domain-sol__title-accent">Every Automotive Sector</span>
    </>
  ),
  domainsSubtitle: 'Tailored platforms for commercial fleets, automotive dealerships, and EV charging network operators.',
  domainsEngineeringLabel: 'Webkorps Automotive Engineering',
  domains: [
    {
      id: 'commercial-fleets',
      name: 'Commercial Freight & Service Fleets',
      badge: 'FLEET LOGISTICS',
      solutionTitle: 'ELD Compliance, Fuel Telematics & Driver Safety Scoring',
      challenge: 'Fleet operators manage hundreds of trucks and must ensure FMCSA ELD compliance and lower fuel burn.',
      engineering: 'We engineer telematics platforms with automated Hours of Service (HOS) logging, route optimization, and driver safety gamification.',
      bulletPoints: [
        '100% compliant FMCSA certified electronic logging device (ELD) tracking.',
        'Real-time fuel theft and excessive idling alerts cutting annual fleet fuel expense by 12%.',
        'Automated preventative maintenance scheduling based on actual odometer and engine hour telemetry.',
      ],
    },
    {
      id: 'dealership-groups',
      name: 'Automotive Dealership Groups',
      badge: 'DIGITAL RETAIL',
      solutionTitle: 'Omnichannel Car Buying, Digital Finance & Service Bay CRM',
      challenge: 'Auto dealer groups lose sales when online shoppers cannot configure real lease payments and trade-in values.',
      engineering: 'Webkorps builds white-label digital dealership portals with 1-click credit pre-qualification, e-signatures, and service scheduling.',
      bulletPoints: [
        'Real-time inventory syndication across multiple dealer rooftops and third-party car portals.',
        'Online financing approval integrating with major captive and regional automotive lenders.',
        'Automated service bay scheduling with SMS progress updates and mobile invoice payments.',
      ],
    },
    {
      id: 'ev-charging-networks',
      name: 'EV Charging Operators (CPOs)',
      badge: 'EV INFRASTRUCTURE',
      solutionTitle: 'OCPP 2.0.1 Charging Network Management & Driver Mobile Apps',
      challenge: 'Charging point operators (CPOs) face unreliable charger uptime, payment terminal faults, and complex grid tariffs.',
      engineering: 'We develop cloud-native EV charging management platforms (EVSE) with real-time OCPP telemetry, dynamic pricing, and driver apps.',
      bulletPoints: [
        '99.9% charging station network uptime with automated remote charger rebooting.',
        'Driver mobile apps with live charger availability, turn-by-turn navigation, and in-app RFID activation.',
        'Open Charge Point Protocol (OCPP 1.6J and 2.0.1) compliance supporting multi-vendor chargers.',
      ],
    },
  ],

  partnerTitle: (
    <>
      Your Automotive{' '}
      <span className="wk-ind-pt__title-accent">Technology Partner</span>
    </>
  ),
  partnerSubtitle: 'We combine embedded vehicle protocol knowledge with high-scale cloud telematics and automotive cyber security.',
  partnerImage: automotiveHeroImg,
  partnerCapabilities: [
    {
      number: '01',
      title: 'Automotive Cyber Security & Compliance',
      description: 'Adhering to ISO/SAE 21434 and UNECE WP.29 R155/R156 standards for Threat Analysis and Risk Assessment (TARA).',
      highlight: 'ISO/SAE 21434 Cybersecurity Aligned',
    },
    {
      number: '02',
      title: 'Embedded CAN & Vehicle Protocol Expertise',
      description: 'Deep engineering experience across J1939, OBD-II, UDS (ISO 14229), and Android Automotive OS (AAOS) integrations.',
      highlight: 'J1939 & UDS Protocol Certified',
    },
    {
      number: '03',
      title: 'Massive Telemetry Scale Cloud Ingestion',
      description: 'High-throughput time-series architectures ingesting millions of telemetry pings per second with sub-second alerting.',
      highlight: 'Sub-100ms CAN-Bus Telemetry Streams',
    },
    {
      number: '04',
      title: 'Certified OEM & DMS Connectors',
      description: 'Pre-built bidirectional integration with major automotive dealership software including CDK Global, Reynolds & Reynolds, and Dealertrack.',
      highlight: 'CDK & Reynolds Direct DMS Integration',
    },
    {
      number: '05',
      title: '24/7 Mission-Critical Vehicle Fleet SLAs',
      description: 'Around-the-clock site reliability engineering guaranteeing uninterrupted emergency telematics and remote vehicle commands.',
      highlight: '99.999% Telematics Command Uptime',
    },
  ],

  outcomesTitle: (
    <>
      Accelerate Mobility with <span className="wk-service-outcomes__title-accent">Connected Automotive Tech</span>
    </>
  ),
  outcomesSubtitle: 'Sub-100ms telemetry streams, 15% longer EV battery range, and 3x faster digital dealership retail purchasing.',
  outcomes: [
    {
      id: 'telematics-latency',
      number: '01',
      title: 'Sub-100ms Live Telemetry Ingest',
      description: 'Process millions of vehicle diagnostic sensor pings continuously with zero database bottleneck or dropped packet events.',
      image: automotiveHeroImg,
      imageAlt: 'Low latency vehicle telemetry outcome 3D illustration',
    },
    {
      id: 'ev-range-optimization',
      number: '02',
      title: '15% Extended EV Battery Range',
      description: 'Predictive thermal management and intelligent route charging guidance optimize real-world electric vehicle mileage.',
      image: automotiveHeroImg,
      imageAlt: 'Extended EV range outcome 3D illustration',
    },
    {
      id: 'dms-sales-speed',
      number: '03',
      title: '3x Faster Dealership Car Buying',
      description: 'Online financing pre-qualification, digital trade-in appraisals, and e-signatures cut showroom paperwork time to 30 minutes.',
      image: automotiveHeroImg,
      imageAlt: 'Faster car dealership purchasing outcome 3D illustration',
    },
    {
      id: 'fleet-downtime-reduction',
      number: '04',
      title: '40% Reduction in Unplanned Fleet Breakdowns',
      description: 'Predictive component telemetry alerts allow commercial mechanics to service vehicles before highway failures occur.',
      image: automotiveHeroImg,
      imageAlt: 'Fleet downtime reduction outcome 3D illustration',
    },
  ],

  techStackTitle1: 'Future-Ready',
  techStackTitle2: 'Mobility Stack',
  techStackSubtitle: 'We combine embedded C++/Rust, MQTT edge brokers, time-series cloud storage, and Android Automotive OS to build connected mobility solutions.',

  faqTitle: (
    <>
      Automotive Software <span className="wk-faq__title-accent">FAQs</span>
    </>
  ),
  faqSubtitle: 'Answers to common questions regarding CAN-bus telematics, EV charging protocols, and dealership management system (DMS) integrations.',
  faqs: [
    {
      id: 'faq-1',
      question: 'How do you collect and ingest data from in-vehicle CAN-bus networks?',
      answer:
        'We interface with on-board vehicle diagnostic ports (OBD-II, J1939, or direct CAN transceivers) using edge telematics units (TCUs). The edge unit parses diagnostic trouble codes (DTCs) and sensor PIDs, filters noise locally, and streams structured JSON/protobuf payloads to the cloud via lightweight encrypted MQTT over cellular networks.',
      isApproved: true,
    },
    {
      id: 'faq-2',
      question: 'Does your EV platform support the Open Charge Point Protocol (OCPP)?',
      answer:
        'Yes. We build charging station management software (CSMS) fully compliant with both OCPP 1.6-JSON and modern OCPP 2.0.1 standards, supporting remote start/stop, smart charging profile schedules, and automated billing integration.',
      isApproved: true,
    },
    {
      id: 'faq-3',
      question: 'How do you secure Over-The-Air (OTA) firmware updates against tampering?',
      answer:
        'All OTA update binaries are cryptographically signed using asymmetric hardware security module (HSM) keys. Vehicle ECUs verify the digital signature before flashing. Updates deploy in a dual-partition A/B scheme, allowing instant automated rollback if any checksum or boot verification test fails.',
      isApproved: true,
    },
    {
      id: 'faq-4',
      question: 'Can your dealership software integrate with CDK Global or Reynolds & Reynolds?',
      answer:
        'Yes. We have direct experience building certified integrations with major automotive Dealership Management Systems including CDK Global, Reynolds & Reynolds, and Dealertrack, synchronizing vehicle inventory, finance deals, and service repair orders in real time.',
      isApproved: true,
    },
    {
      id: 'faq-5',
      question: 'What is the typical timeframe to deploy a connected fleet telematics platform?',
      answer:
        'A custom commercial fleet telematics platform with live GPS tracking, CAN-bus sensor dashboards, and geofence alerting typically deploys in 10 to 14 weeks, followed by hardware bench testing and field validation.',
      isApproved: true,
    },
  ],
  ctaTitle: 'Ready to Engineer Modern Automotive Software?',
  ctaDesc: 'Connect your vehicle fleet, power EV charging networks, and modernize digital dealership retailing with custom automotive software.',
};
