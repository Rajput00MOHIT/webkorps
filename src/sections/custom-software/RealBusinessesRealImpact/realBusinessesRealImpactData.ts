export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface IndustryCaseStudyItem {
  id: string;
  industryName: string;
  tabLabel: string;
  title: string;
  description: string;
  tags: string[];
  metrics: CaseStudyMetric[];
  challenge: string[];
  solution: string[];
  impact: string[];
}

export const REAL_BUSINESS_CASE_STUDIES: IndustryCaseStudyItem[] = [
  {
    id: 'healthcare',
    industryName: 'Healthcare',
    tabLabel: 'Healthcare',
    title: 'A connected patient experience platform',
    description:
      'We built a unified healthcare platform that connects patients, providers and care teams simplifying appointments, medical records and communication.',
    tags: ['Patient Portal', 'EHR Integration', 'Telehealth'],
    metrics: [
      { value: '32%', label: 'Fewer missed Appointments' },
      { value: '2.1x', label: 'Faster access patients records' },
      { value: '40%', label: 'Reduction in routine calls' },
    ],
    challenge: [
      'Fragmented patient data across multiple systems',
      'Manual appointment scheduling and follow-ups',
      'Limited patient communication and engagement',
      'Difficulty in accessing medical history during consultations',
    ],
    solution: [
      'A unified patient portal with EHR integration',
      'Smart scheduling and automated reminders',
      'Secure messaging between patients and care teams',
      'Telehealth consultation and digital prescriptions',
    ],
    impact: [
      'Better access to information for patients and providers',
      'Smoother care coordination across departments',
      'Higher patient engagement and satisfaction',
      'More efficient and scalable healthcare operations',
    ],
  },
  {
    id: 'fintech',
    industryName: 'Fintech',
    tabLabel: 'Fintech',
    title: 'Scalable digital payments & checkout infrastructure',
    description:
      'Partnered to enhance enterprise payment platform with friction-free checkout, high-throughput card processing, and compliant transaction architecture.',
    tags: ['Payment Platform', 'Checkout Experience', 'API Integration'],
    metrics: [
      { value: '99.99%', label: 'Payment gateway uptime' },
      { value: '2.4x', label: 'Faster transaction speeds' },
      { value: '35%', label: 'Checkout drop-off reduction' },
    ],
    challenge: [
      'Complex multi-step checkout causing cart abandonment',
      'Strict multi-regional compliance and security risks',
      'High latency bottlenecks during peak volume spikes',
      'Disparate banking APIs and legacy gateway integrations',
    ],
    solution: [
      'Streamlined checkout with smart multi-currency routing',
      'Resilient microservices payment processing pipeline',
      'Multi-factor tokenization and real-time fraud defense',
      'Unified merchant analytics and reconciliation portal',
    ],
    impact: [
      'Seamless, reliable global transaction processing',
      'Higher payment success and user conversion rates',
      'Significant reduction in transaction authorization latency',
      'Enterprise-grade security and full regulatory compliance',
    ],
  },
  {
    id: 'retail',
    industryName: 'Retail',
    tabLabel: 'Retail',
    title: 'Omnichannel commerce & inventory intelligence',
    description:
      'Engineered a unified digital commerce ecosystem connecting brick-and-mortar store inventory, mobile storefronts, and automated order fulfillment.',
    tags: ['E-Commerce', 'Inventory Sync', 'POS Integration'],
    metrics: [
      { value: '45%', label: 'Faster order fulfillment' },
      { value: '3.2x', label: 'Online sales conversion growth' },
      { value: '28%', label: 'Operational cost reduction' },
    ],
    challenge: [
      'Disconnected online catalogs and store inventory counts',
      'Slow mobile page loading impacting customer conversion',
      'Manual order routing across regional fulfillment centers',
      'Rigid legacy systems unable to handle holiday traffic surges',
    ],
    solution: [
      'Real-time unified inventory tracking across all channels',
      'Headless modern storefront built for sub-second speeds',
      'Intelligent automated order routing and dispatch engine',
      'Integrated loyalty programs and personalized recommendations',
    ],
    impact: [
      'Accurate real-time stock visibility for staff and buyers',
      'Drastic uplift in mobile conversions and basket size',
      'Streamlined warehouse dispatch and reduced delivery errors',
      'Elevated repeat customer retention and lifetime value',
    ],
  },
  {
    id: 'manufacturing',
    industryName: 'Manufacturing',
    tabLabel: 'Manufacturing',
    title: 'Smart plant RCA & MEP operational workflows',
    description:
      'Webkorps simplified RCA and MEP workflows with a smart, centralized digital solution that improved visibility, accountability, and team collaboration.',
    tags: ['Workflow Automation', 'Plant Operations', 'Predictive Maintenance'],
    metrics: [
      { value: '50%', label: 'RCA resolution cycle time' },
      { value: '100%', label: 'Audit compliance trail' },
      { value: '34%', label: 'Downtime event reduction' },
    ],
    challenge: [
      'Manual, paper-based incident logging and root-cause reporting',
      'Lack of real-time visibility across engineering and plant teams',
      'Unscheduled equipment breakdowns causing costly production halts',
      'Disjointed compliance audit documentation across shifts',
    ],
    solution: [
      'Centralized digital RCA incident logging and action tracking',
      'Automated MEP maintenance workflows and inspection checklists',
      'Real-time equipment performance telemetry and health alerts',
      'Role-based operational accountability and digital audit logs',
    ],
    impact: [
      'Complete operational visibility and cross-team alignment',
      'Proactive preventative maintenance reducing machine outages',
      'Audit-ready compliance reporting with zero paper lag',
      'Substantial operational savings and prolonged asset lifespan',
    ],
  },
  {
    id: 'logistics',
    industryName: 'Logistics',
    tabLabel: 'Logistics',
    title: 'Centralized fleet dispatch & supply chain hub',
    description:
      'Manage bookings, deliveries, vehicle reporting, and hub activities seamlessly through one centralized platform built for nationwide freight operations.',
    tags: ['Fleet Tracking', 'Hub Management', 'Supply Chain'],
    metrics: [
      { value: '42%', label: 'Hub turnaround improvement' },
      { value: '98.7%', label: 'On-time delivery accuracy' },
      { value: '25%', label: 'Fuel & route efficiency savings' },
    ],
    challenge: [
      'Disparate legacy software across dozens of regional distribution hubs',
      'Lack of live tracking on vehicle transit and delivery milestones',
      'Manual consignment booking and paperwork reconciliation delays',
      'Slow exception handling for misplaced or damaged shipments',
    ],
    solution: [
      'Unified enterprise hub and vehicle management platform',
      'Live GPS telemetry tracking with automated dispatch algorithms',
      'Digital barcode scanning and electronic proof of delivery',
      'Real-time automated alerts for transit delays and exceptions',
    ],
    impact: [
      'Single pane of glass across the entire freight network',
      'Drastic reduction in vehicle dwell and turnaround times',
      'Complete shipment transparency for end clients and partners',
      'Optimized route dispatch reducing overall fuel consumption',
    ],
  },
  {
    id: 'education',
    industryName: 'Education',
    tabLabel: 'Education',
    title: 'Adaptive digital learning & student lifecycle portal',
    description:
      'Constructed a modern virtual learning environment integrating interactive course delivery, live virtual classrooms, and automated academic assessment.',
    tags: ['EdTech LMS', 'Virtual Classroom', 'Student Analytics'],
    metrics: [
      { value: '65%', label: 'Student engagement increase' },
      { value: '3x', label: 'Course completion growth' },
      { value: '50%', label: 'Grading workflow time saved' },
    ],
    challenge: [
      'Low course completion and student drop-off in remote setups',
      'Disjointed third-party tools for assignments, lectures, and exams',
      'Lack of early identification for struggling academic learners',
      'Infrastructure crashing during semester exam submission peaks',
    ],
    solution: [
      'Unified learning management system with multimedia modules',
      'Interactive virtual classroom with integrated breakout rooms',
      'Automated grading workflows and real-time student analytics',
      'Auto-scaling cloud architecture designed for high exam loads',
    ],
    impact: [
      'Higher student course engagement and graduation rates',
      'Reduced administrative grading burden on faculty members',
      'Proactive academic interventions before course completion fails',
      'Flawless platform stability during critical assessment windows',
    ],
  },
  {
    id: 'real-estate',
    industryName: 'Real Estate',
    tabLabel: 'Real Estate',
    title: 'Digital property portfolio & automated leasing platform',
    description:
      'Built a comprehensive property management and tenant engagement ecosystem with virtual tours, digital lease execution, and automated maintenance tracking.',
    tags: ['PropTech', 'Virtual Tours', 'Lease Automation'],
    metrics: [
      { value: '38%', label: 'Leasing cycle time reduction' },
      { value: '85%', label: 'Digital contract execution' },
      { value: '2.5x', label: 'Tenant lead conversion uplift' },
    ],
    challenge: [
      'Fragmented property listings and slow brokerage lead follow-up',
      'Manual paperwork delaying lease contracts and payment receipts',
      'Difficulty coordinating and tracking physical viewing appointments',
      'Delayed tenant maintenance resolution causing resident churn',
    ],
    solution: [
      'Centralized property portfolio portal with 3D virtual tours',
      'Paperless tenant onboarding and digital lease signing',
      'Automated rent invoicing, payment gateways, and recurring debits',
      'In-app tenant portal for maintenance tickets and direct updates',
    ],
    impact: [
      'Rapid tenant placement and minimized vacant rental days',
      'Automated on-time cash collections with zero manual ledgering',
      'Elevated resident satisfaction and faster renewal cycles',
      'Comprehensive real-time asset yields and occupancy reporting',
    ],
  },
  {
    id: 'hospitality',
    industryName: 'Hospitality',
    tabLabel: 'Hospitality',
    title: 'Contactless guest journey & direct booking engine',
    description:
      'Engineered an end-to-end guest experience platform with direct online reservations, mobile contactless check-in, and smart concierge ordering.',
    tags: ['Hospitality Tech', 'Booking Engine', 'Contactless Stay'],
    metrics: [
      { value: '60%', label: 'Direct booking revenue growth' },
      { value: '4.8/5', label: 'Guest check-in satisfaction' },
      { value: '30%', label: 'Front-desk queue reduction' },
    ],
    challenge: [
      'Heavy reliance on third-party OTAs eating into profit margins',
      'Long front-desk arrival queues causing guest frustration',
      'Disconnected hotel PMS systems causing double-booking issues',
      'Missed cross-selling opportunities for on-premise amenities',
    ],
    solution: [
      'High-conversion direct booking engine with dynamic pricing rules',
      'Self-service mobile check-in and keyless digital room entry',
      'Seamless two-way PMS synchronization and housekeeping dispatch',
      'In-stay mobile concierge for dining, spa, and experience bookings',
    ],
    impact: [
      'Significant shift to high-margin direct channel reservations',
      'Frictionless arrival experience boosting hotel review ratings',
      'Real-time room status visibility for operational cleaning staff',
      'Substantial increase in ancillary guest spend during their stay',
    ],
  },
  {
    id: 'automotive',
    industryName: 'Automotive',
    tabLabel: 'Automotive',
    title: 'Connected vehicle telematics & dealer service suite',
    description:
      'Delivered an enterprise IoT vehicle telematics platform providing real-time fleet diagnostics, predictive failure warnings, and automated dealer service scheduling.',
    tags: ['Connected Vehicles', 'IoT Telematics', 'Dealer Network'],
    metrics: [
      { value: '40%', label: 'Fewer unscheduled breakdowns' },
      { value: '2.2x', label: 'Service appointment retention' },
      { value: '99.2%', label: 'Sensor telemetry ingest accuracy' },
    ],
    challenge: [
      'Inability to analyze streaming ECU sensor data in real-time',
      'Reactive vehicle maintenance causing costly roadside failures',
      'Disjointed communication between drivers and authorized workshops',
      'Slow parts procurement and service bay scheduling bottlenecks',
    ],
    solution: [
      'High-throughput IoT streaming pipeline for CAN-bus telemetry',
      'Predictive fault algorithms triggering proactive service alerts',
      'Driver mobile app with automated diagnostic booking capabilities',
      'Integrated dealership workshop scheduler and parts inventory',
    ],
    impact: [
      'Proactive maintenance preventing high-cost component damage',
      'Increased recurring workshop customer retention for dealers',
      'Enhanced fleet safety, driver confidence, and vehicle longevity',
      'Valuable real-world telemetry feedback for automotive engineers',
    ],
  },
];

