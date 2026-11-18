import demoPlaceholder from '../../assets/services/logistics-software-development/logistics-demo-placeholder.png';
import tmsImg from '../../assets/industries/logistics/Transportation Management.png';
import wmsImg from '../../assets/industries/logistics/Warehouse Management.png';
import fleetImg from '../../assets/industries/logistics/Fleet Management Software.png';
import supplyChainImg from '../../assets/industries/logistics/Supply Chain Management.png';
import trackingImg from '../../assets/industries/logistics/Shipment Tracking.png';
import freightImg from '../../assets/industries/logistics/Freight Management.png';
import logisticsHeroImg from '../../assets/Logistic.png';
import type { CapabilityItem } from '../../components/ServiceCapabilities';
import type { OutcomeItem } from '../../components/ServiceOutcomes';
import type { DomainSolutionItem } from '../../components/DomainSpecificSolutions';
import type { SolutionCardItem } from '../../sections/custom-software/SoftwareForEveryBusiness/softwareForEveryBusinessData';
import type { FAQItemData } from '../../sections/home/FAQ/faqData';

/**
 * Centralized Demo Image Asset for Logistics Service Page
 * Following Phase 4 requirements: One consistent high-resolution demo asset across all placeholders,
 * allowing instant replacement later with specific tailored illustrations.
 */
export const LOGISTICS_DEMO_PLACEHOLDER = demoPlaceholder;
export const LOGISTICS_HERO_IMAGE = logisticsHeroImg;

/**
 * SECTION 02: Logistics Industry at a Glance (Verified Research-Based Statistics)
 * Sources: NITI Aayog, DPIIT (National Logistics Policy), Deloitte, NTT DATA 2025, OECD/McKinsey.
 */
export interface LogisticsStatItem {
  id: string;
  metric: string;
  title: string;
  description: string;
  source: string;
  year: string;
  region: 'India' | 'Global';
}

export const LOGISTICS_INDUSTRY_STATS: LogisticsStatItem[] = [
  {
    id: 'gdp-cost',
    metric: '13–14%',
    title: 'Logistics Cost as % of GDP',
    description:
      'Logistics historically accounts for 13–14% of India’s GDP compared to ~8% in mature global markets, prompting India’s National Logistics Policy to target a reduction below 10%.',
    source: 'NITI Aayog & DPIIT Framework Report',
    year: '2024',
    region: 'India',
  },
  {
    id: 'visibility-gap',
    metric: '73%',
    title: 'Supply Chain Visibility Blindspots',
    description:
      '73% of supply chain leaders report a lack of multi-tier end-to-end visibility between freight transit, multi-modal carriers, and regional distribution nodes.',
    source: 'Deloitte Global Supply Chain Study',
    year: '2025',
    region: 'Global',
  },
  {
    id: 'empty-miles',
    metric: '20–25%',
    title: 'Commercial Fleet Empty Deadhead Miles',
    description:
      'Up to one-quarter of commercial transit distance runs with empty load beds due to fragmented carrier networks, static scheduling, and unoptimized return loads.',
    source: 'NTT DATA 2025 Third-Party Logistics Study',
    year: '2025',
    region: 'Global',
  },
  {
    id: 'ai-impact',
    metric: '15–20%',
    title: 'Operational Cost Reduction with AI',
    description:
      'Logistics enterprises integrating dynamic route optimization, predictive maintenance, and automated demand slotting achieve 15–20% operational expense savings.',
    source: 'OECD AI in Logistics & McKinsey Analysis',
    year: '2024–2025',
    region: 'Global',
  },
];

/**
 * SECTION 03: How the Logistics Ecosystem Works
 * 7 Lifecycle stages showing the connected flow of goods and information.
 */
export interface LogisticsEcosystemStage {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  detail: string;
  dataFlow: string;
}

export const LOGISTICS_ECOSYSTEM_STAGES: LogisticsEcosystemStage[] = [
  {
    id: 'procurement',
    number: '01',
    title: 'Procurement & Supplier Coordination',
    shortDesc: 'Inbound raw materials & purchase orders',
    detail:
      'Synchronize supplier purchase orders, inbound transit schedules, and automated ASN (Advance Shipping Notice) parsing to eliminate loading dock congestion.',
    dataFlow: 'Inbound EDI 850/856 data feeds directly into warehouse yard management.',
  },
  {
    id: 'warehousing',
    number: '02',
    title: 'Inventory & Warehouse Operations',
    shortDesc: 'Automated slotting & stock balancing',
    detail:
      'Dynamic bin assignment, RFID/barcode scanning, automated cross-docking, and real-time inventory synchronization across multi-facility networks.',
    dataFlow: 'Inventory levels auto-update in ERP and central multi-channel stock ledger.',
  },
  {
    id: 'order-processing',
    number: '03',
    title: 'Order Processing & Orchestration',
    shortDesc: 'Multi-channel validation & pick-pack routing',
    detail:
      'Consolidate B2B and D2C orders from multiple storefronts, validate inventory availability, and trigger optimized wave-picking workflows.',
    dataFlow: 'Validated orders pass to dispatch engines with priority-ranked SLA timers.',
  },
  {
    id: 'freight-planning',
    number: '04',
    title: 'Transportation & Freight Planning',
    shortDesc: 'Load consolidation & carrier selection',
    detail:
      'Algorithmic load consolidation, automated freight rate benchmarking, multi-modal routing, and electronic contract tendering for 3PL carriers.',
    dataFlow: 'EDI 204 tender requests automatically confirm carrier capacity.',
  },
  {
    id: 'dispatch-management',
    number: '05',
    title: 'Fleet & Shipment Dispatch Management',
    shortDesc: 'Live telematics & driver dispatching',
    detail:
      'Live AIS-140 and OBD-II vehicle telemetry tracking, turn-by-turn mobile dispatching, geofence trigger alerts, and fuel monitoring.',
    dataFlow: 'Sensor telemetry streams live GPS coordinates every 10 seconds to control tower.',
  },
  {
    id: 'last-mile',
    number: '06',
    title: 'Dynamic Last-Mile Delivery',
    shortDesc: 'Real-time ETAs & urban route adaptation',
    detail:
      'Customer SMS/WhatsApp milestone alerts, dynamic traffic re-routing, delivery time-window slotting, and real-time driver mobile sync.',
    dataFlow: 'Dynamic recalculation updates recipient ETA in real time upon route shifts.',
  },
  {
    id: 'epod-reporting',
    number: '07',
    title: 'Proof of Delivery & Real-Time Reporting',
    shortDesc: 'Digital signature, photo ePOD & instant billing',
    detail:
      'Contactless OTP, digital sign-on-glass, geo-tagged photo verification, instant dispute settlement, and automated freight invoice generation.',
    dataFlow: 'Signed ePOD triggers automated ERP billing and carrier invoice reconciliation.',
  },
];

/**
 * SECTION 04: The Real Challenges in Logistics: Why Logistics Operations Become Difficult to Manage
 */
export interface LogisticsChallengeItem {
  id: string;
  number: string;
  title: string;
  problem: string;
  impact: string;
}

export const LOGISTICS_CHALLENGES: LogisticsChallengeItem[] = [
  {
    id: 'visibility',
    number: '01',
    title: 'Limited End-to-End Visibility',
    problem:
      'Logistics leaders manage shipments across fragmented carriers, sub-contractors, and transshipment hubs without centralized telemetry or single-pane control.',
    impact:
      'Teams cannot detect transit delays or temperature deviations early, resulting in missed delivery windows and customer dissatisfaction.',
  },
  {
    id: 'transport-costs',
    number: '02',
    title: 'Rising Transportation & Operating Costs',
    problem:
      'Fluctuating fuel prices, unoptimized routes, vehicle underutilization, and empty return miles consistently eat into paper-thin freight margins.',
    impact:
      'Companies lose up to 20% of their operational budget on avoidable mileage, idling fuel waste, and emergency spot-market carrier surcharges.',
  },
  {
    id: 'disconnected-systems',
    number: '03',
    title: 'Disconnected Systems & Data Silos',
    problem:
      'Legacy TMS, standalone WMS, ERP accounting systems, and carrier tracking tools operate independently with no standardized data sharing.',
    impact:
      'Operations teams waste hundreds of hours manually re-keying data between spreadsheets, producing data discrepancies, billing errors, and delayed billing.',
  },
  {
    id: 'manual-processes',
    number: '04',
    title: 'Manual Processes & Operational Errors',
    problem:
      'Paper consignment notes, manual driver dispatch phone calls, handwritten warehouse manifests, and manual proof-of-delivery paperwork.',
    impact:
      'High administrative overhead, missing delivery documents, slow dispute resolution cycles, and delayed cash collection for completed shipments.',
  },
  {
    id: 'last-mile-delays',
    number: '05',
    title: 'Delivery Delays & Last-Mile Complexity',
    problem:
      'Urban traffic congestion, difficult delivery locations, incorrect recipient addresses, and narrow commercial receiving windows.',
    impact:
      'Last-mile accounts for over 40% of total shipping cost, with failed delivery attempts and re-delivery charges eroding order profitability.',
  },
  {
    id: 'inventory-inaccuracy',
    number: '06',
    title: 'Inventory Inaccuracy & Poor Forecasting',
    problem:
      'Inaccurate stock tallies, delayed receipt scanning, and static seasonal forecasts fail to anticipate demand fluctuations across fulfillment hubs.',
    impact:
      'Costly stockouts of high-velocity items, expensive emergency replenishment freight, and tied-up capital in slow-moving overstock inventory.',
  },
];

/**
 * SECTION 05: End-to-End Logistics Software Solutions
 * Reusing ServiceCapabilities alternating layout with unified "Know More ↗" buttons.
 */
export const LOGISTICS_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'tms',
    number: '01',
    title: 'Transportation Management Systems (TMS)',
    description:
      'Comprehensive platforms for algorithmic route dispatching, multi-carrier rate benchmarking, automated freight tendering, and real-time transit status monitoring. Replaces manual dispatch spreadsheets with rule-based automation.',
    image: tmsImg,
    imageAlt: 'Transportation Management System 3D illustration and automated route dispatching platform',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'wms',
    number: '02',
    title: 'Warehouse Management Systems (WMS)',
    description:
      'Intelligent warehouse platforms supporting dynamic pallet slotting, barcode and RFID scanning, wave and batch picking, automated cross-docking, and real-time inventory synchronization across multi-facility distribution hubs.',
    image: wmsImg,
    imageAlt: 'Warehouse Management System 3D illustration showing smart inventory and automated pick-pack workflows',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'fleet-telematics',
    number: '03',
    title: 'Fleet Management Software',
    description:
      'Connected vehicle software integrating AIS-140 GPS, CAN-bus engine diagnostics, driver safety scorecards, fuel theft alerts, and predictive maintenance scheduling to extend asset lifecycles and reduce breakdown downtime.',
    image: fleetImg,
    imageAlt: 'Fleet Management Software 3D illustration with live vehicle GPS telematics and diagnostics',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'supply-chain-control',
    number: '04',
    title: 'Supply Chain Management',
    description:
      'Centralized operational control towers providing unified visibility across multi-tier supplier networks, manufacturing hubs, freight forwarders, and end customers with proactive milestone tracking and delay alerts.',
    image: supplyChainImg,
    imageAlt: 'Supply Chain Management 3D illustration with multi-modal cargo visibility and milestone alerts',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'shipment-tracking',
    number: '05',
    title: 'Shipment Tracking',
    description:
      'Consumer and B2B tracking platforms with live interactive maps, dynamic ETA recalculation, geofence entry/exit triggers, and automated notification updates sent via SMS, email, and WhatsApp.',
    image: trackingImg,
    imageAlt: 'Shipment Tracking 3D illustration with live geofenced map and dynamic ETA monitoring',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'freight-carrier',
    number: '06',
    title: 'Freight Management',
    description:
      'Digital freight marketplaces and contract management platforms featuring instant spot-rate bidding, automated electronic bill of lading (eBOL) generation, carrier performance scoring, and freight audit automation.',
    image: freightImg,
    imageAlt: 'Freight Management 3D illustration with spot-rate bidding and automated digital manifest handling',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

/**
 * SECTION 06: How AI Is Transforming Logistics
 * Practical machine learning use cases detailing Problem, AI Approach, Integrations, and Benefit.
 */
export interface LogisticsAIUseCase {
  id: string;
  number: string;
  title: string;
  problem: string;
  aiApproach: string;
  integrations: string;
  benefit: string;
}

export const LOGISTICS_AI_USE_CASES: LogisticsAIUseCase[] = [
  {
    id: 'ai-route-opt',
    number: '01',
    title: 'AI-Powered Dynamic Route Optimization',
    problem:
      'Static routing ignores real-time traffic jams, unexpected road closures, weather fluctuations, urban truck-entry time bans, and loading dock bottlenecks.',
    aiApproach:
      'Machine learning graph optimization algorithms evaluate millions of permutation routes in seconds, factoring in historical speeds, vehicle axle weights, and delivery time-windows.',
    integrations:
      'Google Maps Platform / HERE Routing APIs, live telematics GPS streams, and traffic feeds.',
    benefit:
      'Up to 18% reduction in total transit mileage, 20% lower fuel consumption, and higher on-time deliveries.',
  },
  {
    id: 'demand-forecasting',
    number: '02',
    title: 'Predictive Demand & Inventory Forecasting',
    problem:
      'Spreadsheet-based forecasts fail to anticipate regional sales spikes, seasonal variations, and supplier lead-time fluctuations.',
    aiApproach:
      'Time-series forecasting models (deep neural networks and gradient boosting) evaluate past order velocity, localized events, seasonality, and promotional calendars.',
    integrations:
      'ERP historical transaction logs, e-commerce sales feeds, and external market signals.',
    benefit:
      '30–45% increase in forecast accuracy, reducing stockouts while preventing capital lockup in dead inventory.',
  },
  {
    id: 'predictive-maintenance',
    number: '03',
    title: 'Predictive Fleet Maintenance & Asset Health',
    problem:
      'Unplanned vehicle breakdowns on long-haul highway routes cause severe delivery SLA penalties, driver downtime, and expensive emergency repairs.',
    aiApproach:
      'IoT sensor telemetry anomaly detection models monitor engine temperature, battery voltage, brake wear, and tire pressure in real time.',
    integrations:
      'CAN-bus telemetry, OBD-II diagnostic ports, and workshop maintenance management databases.',
    benefit:
      'Up to 30% reduction in roadside vehicle breakdowns and 15% extended lifespan of fleet assets.',
  },
  {
    id: 'shipment-eta',
    number: '04',
    title: 'Intelligent Shipment Monitoring & ETA Prediction',
    problem:
      'Static distance-over-speed calculations produce inaccurate arrival estimates, leaving warehouse docks unready and customers frustrated.',
    aiApproach:
      'Predictive regression algorithms calculate dynamic ETAs by modeling driver rest habits, toll booth queues, border check wait times, and weather patterns.',
    integrations:
      'Active GPS streams, national toll transponder (FASTag) events, and port gate APIs.',
    benefit:
      '95%+ accurate delivery arrival windows, minimizing truck turnaround time at warehouse loading bays.',
  },
  {
    id: 'warehouse-intelligence',
    number: '05',
    title: 'Warehouse Intelligence & Automated Slotting',
    problem:
      'Suboptimal inventory slotting forces warehouse pickers to walk excessive distances, creating severe fulfillment bottlenecks during peak volume periods.',
    aiApproach:
      'Unsupervised clustering algorithms dynamically rearrange SKU placement based on product affinity, seasonal velocity, and ergonomic bin heights.',
    integrations:
      'WMS pick-pack transaction history, SKU physical dimensions, and Automated Guided Vehicle (AGV) telemetry.',
    benefit:
      'Up to 28% increase in order picking speed and reduced worker fatigue across distribution centers.',
  },
  {
    id: 'anomaly-analytics',
    number: '06',
    title: 'AI-Powered Freight Audit & Fraud Detection',
    problem:
      'Manual freight invoice audits overlook subtle carrier billing discrepancies, duplicate accessorial charges, and fuel theft.',
    aiApproach:
      'Automated OCR document parsing paired with anomaly detection algorithms cross-references GPS routes, fuel receipt logs, and contract rate matrices.',
    integrations:
      'Telematics fuel sensors, carrier electronic invoices, and ERP accounts payable modules.',
    benefit:
      'Elimination of up to 90% of freight billing disputes and prevention of fuel pilferage.',
  },
];

/**
 * SECTION 07: Software Solutions for Different Logistics Business Models
 * Reusing DomainSpecificSolutions component.
 */
export const LOGISTICS_BUSINESS_DOMAINS: DomainSolutionItem[] = [
  {
    id: '3pl-providers',
    name: '3PL & 4PL Logistics Providers',
    badge: 'Multi-Tenant Architecture',
    solutionTitle: 'Multi-Tenant Portals, Automated Billing & Client Ledgers',
    challenge:
      'Third-party logistics providers juggle hundreds of customer accounts, disparate billing agreements, custom SLAs, and multi-warehouse inventories on disconnected spreadsheets.',
    engineering:
      'Webkorps engineers multi-tenant logistics platforms with granular tenant isolation, automated activity-based billing engines, customer self-service tracking portals, and unified inventory reporting.',
    bulletPoints: [
      '40% faster monthly client billing cycle with zero manual calculations.',
      'Unified multi-client inventory visibility across all regional hubs.',
      'Self-service customer portals reducing inbound support inquiries by 60%.',
    ],
  },
  {
    id: 'freight-forwarders',
    name: 'Freight Forwarders & Brokers',
    badge: 'Multimodal EDI & Spot Engine',
    solutionTitle: 'Spot Freight Engines, Digital Manifests & Carrier Audits',
    challenge:
      'Managing multimodal ocean, air, and highway shipments involves tedious rate negotiations, manual customs document collation, and opaque multi-carrier handoffs.',
    engineering:
      'We build digital freight brokerage platforms with instant spot-rate quoting engines, automated Bill of Lading (eBOL) processing, carrier compliance scoring, and customs document digital filing.',
    bulletPoints: [
      'Sub-second spot freight quote generation across carrier networks.',
      'Automated OCR document processing eliminating paper manifest errors.',
      'End-to-end container milestone visibility from port origin to destination.',
    ],
  },
  {
    id: 'fleet-operators',
    name: 'Transportation & Fleet Operators',
    badge: 'AIS-140 & Telematics Sync',
    solutionTitle: 'Telematics Control Towers, Driver Apps & Fuel Audits',
    challenge:
      'Commercial fleet owners struggle with high fuel expenses, unauthorized vehicle detours, unverified driver hours, and strict government telematics mandates (e.g. AIS-140).',
    engineering:
      'Webkorps creates telematics-connected fleet management systems with live geofencing, driver safety scorecards, automated trip fuel reconciliation, and scheduled preventative maintenance workflows.',
    bulletPoints: [
      '14% verifiable reduction in fleet fuel consumption through speed and idle controls.',
      '100% regulatory compliance with government-mandated vehicle tracking standards.',
      'Automated driver trip expense and fuel card settlement workflows.',
    ],
  },
  {
    id: 'warehousing-fulfillment',
    name: 'Warehousing & Fulfillment Centers',
    badge: 'Smart Slotting & WMS',
    solutionTitle: 'Barcode / RFID WMS, Wave Picking & Yard Management',
    challenge:
      'Distribution centers face labor shortages, slow wave-picking throughput, inventory count discrepancies, and bottlenecked loading docks during peak fulfillment seasons.',
    engineering:
      'We build cloud-native WMS solutions with barcode and RFID mobile integration, dynamic SKU slotting, automated cross-dock scheduling, and direct ERP inventory synchronization.',
    bulletPoints: [
      '99.8% order picking accuracy with digital barcode validation.',
      '3x faster inventory receiving and put-away turnaround time.',
      'Real-time dock appointment scheduling eliminating truck yard congestion.',
    ],
  },
  {
    id: 'ecommerce-retail',
    name: 'E-commerce & Retail Logistics',
    badge: 'Multi-Carrier Shipping Engine',
    solutionTitle: 'Distributed Order Routing & Last-Mile Delivery Sync',
    challenge:
      'Retail brands face demanding customer expectations for rapid delivery, cart abandonment driven by slow shipping estimates, and costly reverse logistics for product returns.',
    engineering:
      'Webkorps builds distributed order routing engines that auto-select the lowest-cost, fastest carrier for each zip code, complete with branded tracking pages and automated return initiation.',
    bulletPoints: [
      '25% reduction in last-mile courier shipping expenses.',
      'Branded real-time tracking pages driving customer re-engagement.',
      'Frictionless automated return initiation and reverse-pickup coordination.',
    ],
  },
  {
    id: 'manufacturing-distribution',
    name: 'Manufacturing & Distribution',
    badge: 'Just-in-Time Yard Management',
    solutionTitle: 'Inbound Supplier Portals, Gate Passes & ERP Sync',
    challenge:
      'Assembly plant lines risk costly shutdowns when raw material freight is delayed, while uncoordinated plant truck arrivals generate thousands of dollars in detention fees.',
    engineering:
      'We develop vendor portal platforms with advance shipping notice (ASN) validation, digital gate passes, automated yard management, and bidirectional SAP/Oracle ERP integration.',
    bulletPoints: [
      '45% reduction in plant truck detention charges and gate queue delays.',
      'Zero production line halts due to synchronized inbound freight schedules.',
      'Automated vendor compliance scorecards tracking on-time delivery adherence.',
    ],
  },
];

/**
 * SECTION 08: Connected Logistics Technology & Integrations
 */
export interface LogisticsIntegrationCategory {
  id: string;
  category: string;
  description: string;
  systems: string[];
}

export const LOGISTICS_INTEGRATIONS: LogisticsIntegrationCategory[] = [
  {
    id: 'erp-systems',
    category: 'Enterprise ERP & Finance',
    description: 'Bi-directional synchronization of purchase orders, item masters, invoices, and accounting entries.',
    systems: ['SAP S/4HANA', 'Oracle NetSuite', 'Microsoft Dynamics 365', 'Tally Prime'],
  },
  {
    id: 'telematics-iot',
    category: 'GPS, Telematics & IoT Hardware',
    description: 'Direct ingestion of real-time sensor streams, diagnostic codes, and location telemetry.',
    systems: ['AIS-140 GPS Devices', 'OBD-II & CAN-Bus', 'Teltonika', 'BLE Temperature Beacons'],
  },
  {
    id: 'carrier-apis',
    category: 'Carrier & Multi-Modal Networks',
    description: 'Automated booking, label generation, manifest exchange, and milestone tracking.',
    systems: ['FedEx', 'DHL Express', 'BlueDart', 'Delhivery', 'Maersk / Ocean APIs'],
  },
  {
    id: 'ecommerce-channels',
    category: 'E-Commerce & Marketplaces',
    description: 'Instant order import, inventory allocation, and fulfillment status updates.',
    systems: ['Shopify Plus', 'Magento Commerce', 'WooCommerce', 'Amazon SP-API'],
  },
  {
    id: 'maps-routing',
    category: 'Maps, Geocoding & Routing',
    description: 'High-precision routing engines, reverse geocoding, and traffic matrix lookups.',
    systems: ['Google Maps Platform', 'Mapbox', 'HERE Technologies', 'OpenStreetMap'],
  },
  {
    id: 'edi-standards',
    category: 'EDI & Supply Chain Protocols',
    description: 'Enterprise message translation and automated compliance with global freight protocols.',
    systems: ['EDI 204 (Load Tender)', 'EDI 214 (Status Msg)', 'EDI 856 (Ship Notice)', 'REST & MQTT'],
  },
];

/**
 * SECTION 11: Business Outcomes
 * Reusing ServiceOutcomes component.
 */
export const LOGISTICS_OUTCOMES: OutcomeItem[] = [
  {
    id: 'faster-deliveries',
    number: '01',
    title: 'Faster Deliveries & On-Time Performance',
    description:
      'Algorithmic load dispatching and dynamic re-routing around congestion help logistics operators meet stringent delivery SLAs and build customer trust.',
    image: LOGISTICS_DEMO_PLACEHOLDER,
    imageAlt: 'Faster deliveries and on-time performance 3D illustration',
  },
  {
    id: 'cost-control',
    number: '02',
    title: 'Better Cost Control & Fuel Efficiency',
    description:
      'Eliminate empty return miles, maximize vehicle volume utilization, and stop fuel theft with real-time telematics and automated freight billing audits.',
    image: LOGISTICS_DEMO_PLACEHOLDER,
    imageAlt: 'Better cost control and fuel efficiency 3D illustration',
  },
  {
    id: 'operational-visibility',
    number: '03',
    title: 'End-to-End Operational Visibility',
    description:
      'Empower dispatchers, warehouse managers, and clients with live map tracking, predictive ETAs, and instant geofence arrival alerts.',
    image: LOGISTICS_DEMO_PLACEHOLDER,
    imageAlt: 'End-to-end operational visibility 3D illustration',
  },
  {
    id: 'smarter-decisions',
    number: '04',
    title: 'Data-Driven Business Decisions',
    description:
      'Replace guesswork with real-time control tower dashboards, carrier performance metrics, and predictive demand analytics.',
    image: LOGISTICS_DEMO_PLACEHOLDER,
    imageAlt: 'Smarter logistics decisions with data analytics 3D illustration',
  },
];

/**
 * SECTION 04 / 09 helper: Logistics Software Capabilities (for SoftwareForEveryBusiness card grid)
 */
export const LOGISTICS_SOLUTIONS_FOR_BUSINESS: SolutionCardItem[] = [
  {
    id: 'dispatch-automation',
    number: '01',
    title: 'Automated Dispatch Engines',
    description: 'Assign shipments to available fleet assets and carriers automatically using distance, capacity, and cost rules.',
  },
  {
    id: 'warehouse-slotting',
    number: '02',
    title: 'Smart Warehouse Operations',
    description: 'Accelerate order picking and put-away with barcode scanning, wave-picking workflows, and cross-docking.',
  },
  {
    id: 'cold-chain-tracking',
    number: '03',
    title: 'Cold-Chain & Sensor Telemetry',
    description: 'Monitor temperature, humidity, and shock conditions in real time for perishable food and pharma shipments.',
  },
  {
    id: 'customer-tracking-portal',
    number: '04',
    title: 'Customer Self-Service Portals',
    description: 'Provide shippers and recipients with self-service tracking, document downloads, and instant milestone alerts.',
  },
  {
    id: 'freight-billing-audit',
    number: '05',
    title: 'Freight Invoicing & Audit',
    description: 'Automate invoice matching against signed ePODs, contracted tariff tables, and verified transit mileage.',
  },
  {
    id: 'multi-carrier-integration',
    number: '06',
    title: 'Carrier & 3PL Integrations',
    description: 'Connect with regional and global carriers through standardized APIs and EDI for unified booking and tracking.',
  },
];

/**
 * SECTION 14: Logistics FAQs
 */
export const LOGISTICS_FAQS: FAQItemData[] = [
  {
    id: 'faq-1',
    question: 'What is logistics management software and why do businesses need custom development?',
    answer:
      'Logistics management software coordinates the digital and physical flow of goods, vehicles, and information across supply chains—including dispatch, warehouse operations, freight planning, and delivery verification. Off-the-shelf software often forces businesses to compromise their unique operational workflows, carrier contracts, and custom ERP setups. Custom logistics software is engineered specifically around your operating rules, integrates seamlessly with legacy infrastructure, and eliminates costly recurring per-vehicle SaaS licensing fees.',
    isApproved: true,
  },
  {
    id: 'faq-2',
    question: 'What types of logistics software can Webkorps develop?',
    answer:
      'Webkorps engineers end-to-end logistics solutions, including Transportation Management Systems (TMS), Warehouse Management Systems (WMS), Fleet Telematics and Driver Management, Real-Time Shipment Tracking Portals, Digital Freight Brokerage Engines, Last-Mile Delivery Apps with digital ePOD, Cold-Chain Temperature Monitoring Systems, and Centralized Supply Chain Control Towers.',
    isApproved: true,
  },
  {
    id: 'faq-3',
    question: 'Can you build a custom Transportation Management System (TMS)?',
    answer:
      'Yes. We build custom TMS solutions featuring automated load consolidation, multi-carrier rate comparison, algorithmic route planning, electronic load tendering (EDI 204), real-time driver dispatching, and automated freight invoice audits. The system can be configured for private fleet operators, 3PL providers, or freight brokers.',
    isApproved: true,
  },
  {
    id: 'faq-4',
    question: 'How does your logistics software provide real-time shipment tracking?',
    answer:
      'We integrate data directly from vehicle AIS-140 GPS trackers, OBD-II telemetry, mobile driver apps, and toll transponders (such as FASTag). Our platform processes high-velocity telemetry streams through real-time message brokers like Apache Kafka, calculates dynamic ETAs based on live traffic, and triggers automated geofencing milestone alerts to dispatchers and end customers.',
    isApproved: true,
  },
  {
    id: 'faq-5',
    question: 'How can artificial intelligence improve logistics operations?',
    answer:
      'AI delivers practical business advantages across logistics by optimizing multi-stop routes around live traffic and axle restrictions, forecasting seasonal demand spikes to optimize warehouse stock levels, detecting vehicle mechanical anomalies before breakdowns occur, and automating invoice audits by matching OCR-parsed delivery slips with contracted rates.',
    isApproved: true,
  },
  {
    id: 'faq-6',
    question: 'Can you integrate custom logistics software with our existing ERP and WMS?',
    answer:
      'Yes. We have deep experience integrating with enterprise ERPs (SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics), standalone warehouse systems (Manhattan Associates, Infor), accounting platforms, and standardized supply chain EDI protocols (EDI 204, 214, 856). All integrations are built with bidirectional validation and automated error retry queues.',
    isApproved: true,
  },
  {
    id: 'faq-7',
    question: 'Can you build mobile apps for drivers and delivery teams?',
    answer:
      'Yes. We develop cross-platform (Flutter, React Native) and native (iOS, Android) mobile apps for drivers, warehouse workers, and delivery agents. Features include offline-first capability for remote highway areas, turn-by-turn route navigation, electronic Proof of Delivery (ePOD) with barcode scanning, OTP verification, photo capture, and digital signatures.',
    isApproved: true,
  },
  {
    id: 'faq-8',
    question: 'Can you modernize an existing legacy logistics platform?',
    answer:
      'Yes. We regularly modernize legacy green-screen or monolithic logistics systems. Using an incremental strangler-fig pattern, we can decouple legacy databases, build modern microservices, and deploy intuitive web and mobile interfaces without disrupting your ongoing day-to-day fleet dispatches or warehouse operations.',
    isApproved: true,
  },
  {
    id: 'faq-9',
    question: 'How do you ensure data security and compliance for logistics telemetry?',
    answer:
      'We follow stringent enterprise security practices, including TLS 1.3 encryption for telemetry in transit, AES-256 for data at rest, role-based access control (RBAC), multi-factor authentication, and compliance with SOC 2, ISO 27001, and Indian AIS-140 server security guidelines. We also ensure audit logging for every dispatch and rate modification.',
    isApproved: true,
  },
  {
    id: 'faq-10',
    question: 'How long does it take to develop custom logistics software?',
    answer:
      'Timelines vary based on scope. An initial Minimum Viable Product (MVP)—such as a real-time tracking portal or custom dispatch mobile app—can typically be designed, built, and launched in 8 to 12 weeks. Comprehensive enterprise platforms like a full TMS or multi-facility WMS typically range from 4 to 6 months using agile, sprint-based delivery.',
    isApproved: true,
  },
];
