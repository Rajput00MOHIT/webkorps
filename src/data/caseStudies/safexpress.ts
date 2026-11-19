import { CaseStudyData } from './types';
import safeExpressAsset from '../../assets/case-studies/Safe-express.png';
import safeExpressLogo from '../../assets/about/safeexpress.png';

export const SAFEXPRESS_CASE_STUDY: CaseStudyData = {
  id: 'safexpress',
  slug: 'safexpress',
  alternativeSlugs: ['safexpress-supply-chain-modernization', 'logistics-safexpress'],
  client: 'Safexpress',
  clientLogo: safeExpressLogo,
  clientLogoAlt: 'Safexpress - Knowledge Leader in Logistics & Supply Chain',
  industry: 'Logistics & Supply Chain Management',
  serviceCategory: 'Custom Software Development • Cloud Architecture',
  outcomeHeadline: 'How We Helped Safexpress Modernize Hub Dispatch & Telematics Across 1,000+ Hubs',
  subtitle:
    'Webkorps engineered an event-driven dispatch platform and sub-second telematics ingestion engine for India’s largest express logistics enterprise, reducing hub cross-dock turnaround by 42% and eliminating transit visibility gaps.',
  heroImage: safeExpressAsset,
  heroImageAlt: 'Safexpress enterprise dispatch and telematics platform interface designed by Webkorps',
  heroMetrics: [
    {
      value: '42%',
      label: 'Hub Turnaround Reduction',
      baseline: 'From 78 mins avg to 45 mins',
      timeframe: '6 months post-deployment',
      source: 'Internal Hub Operations Audit',
    },
    {
      value: '< 850ms',
      label: 'Telemetry Ingestion Latency',
      baseline: '15-20 min batch delay',
      timeframe: 'Sustained peak volume',
      source: 'AWS CloudWatch Metrics',
    },
    {
      value: '10M+',
      label: 'Daily Telemetry Events',
      baseline: 'Zero dropped pings',
      timeframe: 'Across 10,000+ vehicles',
      source: 'Kafka Cluster Analytics',
    },
  ],

  // Section 02 — Project at a Glance
  atAGlance: [
    { label: 'Industry', value: 'Express Logistics & Multimodal Supply Chain' },
    { label: 'Client Profile', value: 'Safexpress (1,000+ Hubs, 10,000+ Fleet Vehicles)' },
    { label: 'Region', value: 'Pan-India Gateway & Transshipment Network' },
    { label: 'Services Delivered', value: 'Custom Software, IoT Telematics Engine, Cloud Modernization' },
    { label: 'Engagement Model', value: 'Dedicated Engineering Squad (Full Product Lifecycle)' },
    { label: 'Duration', value: '8 Months (Phased Multi-Gateway Rollout)' },
    { label: 'Core Team', value: '12 Engineers (Solutions Architect, Go/Full-Stack, DevOps, QA)' },
    { label: 'Tech Stack', value: 'Next.js, Go (Golang), Apache Kafka, PostgreSQL, AWS EKS, Redis' },
    { label: 'Status', value: 'Live in Production Across All Regional Hubs' },
  ],

  // Section 03 — In Short (60-90 words, self-contained for GEO/AEO/SEO)
  inShort:
    'Safexpress, India’s supply chain pioneer operating across 1,000+ distribution centers, partnered with Webkorps to modernize its core hub dispatch and tracking workflows. Webkorps engineered an event-driven microservices platform connecting vehicle IoT telematics, dynamic dock assignment, and electronic proof-of-delivery (ePOD) with legacy ERP systems. Built on Go, Next.js, Apache Kafka, and AWS, the platform eliminated consignment blindspots, reduced hub processing turnaround by 42%, and scales effortlessly through peak festive freight surges.',

  // Section 05 — Client and Business Context
  clientContext: {
    paragraphs: [
      'Safexpress is recognized as the "Knowledge Leader" in India\'s logistics and supply chain sector. With over two decades of operational excellence, the company operates India\'s largest fleet of GPS-equipped container vehicles and manages more than 1,000 service centers nationwide, serving every single pin code across the country.',
      'As India\'s manufacturing hubs decentralized and e-commerce supply chains accelerated, the volume of multimodal express freight surged dramatically. Safexpress transshipment hubs handle tens of thousands of container handoffs daily, orchestrating long-haul linehaul trucks, regional feeder fleets, and last-mile distribution centers.',
      'Operating in this intense physical velocity required transitioning away from legacy batch-synchronized systems toward an ultra-responsive, real-time digital nerve center capable of processing continuous vehicle telemetry and sub-second dock allocations without slowing down ground operations.',
    ],
    operatingStats: [
      { label: 'Nationwide Hub Network', value: '1,000+ Distribution Centers' },
      { label: 'Active Container Fleet', value: '10,000+ Dedicated Vehicles' },
      { label: 'Warehousing Infrastructure', value: '3+ Million Sq. Ft.' },
      { label: 'Pin Code Reach', value: '100% Pan-India Coverage' },
    ],
  },

  // Section 06 — The Business Challenge
  challenges: [
    {
      number: '01',
      heading: 'Fragmented Paper Handoffs Caused Protracted Dock Wait Times',
      description:
        'Linehaul drivers arrived at transshipment gateways with physical paper consignment waybills and paper manifests. Manual gate entry, physical seal inspections, and manual dock allocations delayed incoming container turnaround to an average of 78 minutes per vehicle.',
      consequences: [
        'Prolonged driver detention times and highway queue congestion outside major hubs',
        'Manual re-keying errors between paper manifests and centralized records',
        'Inability to predict inbound dock workload before trucks physically arrived',
      ],
    },
    {
      number: '02',
      heading: 'High Telemetry Latency Created Critical Consignment Blindspots',
      description:
        'Existing GPS device integration relied on monolithic database polling every 15 to 20 minutes. Across remote highway corridors with intermittent network signals, telemetry data sinks frequently dropped pings or overwhelmed database locks upon reconnection.',
      consequences: [
        'Customer tracking portals showed outdated vehicle positions and inaccurate ETAs',
        'Hub managers had no automated advance notice of delays caused by highway bottlenecks',
        'Cold-chain and high-value cargo sensors suffered from delayed tamper alerts',
      ],
    },
    {
      number: '03',
      heading: 'Legacy ERP Monolith Was Incapable of Real-Time Event Streaming',
      description:
        'The core ERP system was engineered for financial accounting and static ledger balancing, not high-frequency operational events. Heavy nighttime batch jobs caused system freezes and prevented real-time APIs from responding during festive peak shipping volumes.',
      consequences: [
        'Frequent API timeouts and database lockups during high-volume shipping seasons',
        'Inability to build dynamic mobile workflows for dock supervisors and drivers',
        'High maintenance overhead and fragile direct database couplings',
      ],
    },
    {
      number: '04',
      heading: 'Paper-Based Proof-of-Delivery Slowed Cash Collection Cycles',
      description:
        'Consignee acknowledgments relied on physical signed paper notes returned by linehaul drivers days or weeks later. In cases of damaged or partially rejected cartons, resolving customer disputes required locating archived paper documents manually.',
      consequences: [
        'Billing disputes and payment delays extending Days Sales Outstanding (DSO) by 14+ days',
        'Significant administrative overhead auditing and archiving physical paperwork',
        'Lack of real-time visibility into first-attempt delivery exceptions',
      ],
    },
  ],

  // Section 07 — Goals and Success Criteria
  goals: [
    {
      goal: 'Accelerate Hub Cross-Dock Turnaround',
      measurement: 'Gate-in to gate-out elapsed time for container vehicles',
      result: 'Reduced from 78 minutes to 45 minutes (-42% improvement)',
    },
    {
      goal: 'Sub-Second Telemetry Ingestion',
      measurement: 'End-to-end GPS latency from vehicle IoT beacon to operational portal',
      result: 'Sub-second real-time streaming (< 850ms p95 latency)',
    },
    {
      goal: 'Eliminate Paper Proof-of-Delivery',
      measurement: 'Percentage of deliveries completed via digital ePOD with geo-stamps',
      result: '99.1% paperless adoption across primary commercial corridors',
    },
    {
      goal: 'Peak Festive Scalability',
      measurement: 'System uptime and message throughput during Diwali freight surges',
      result: '99.98% platform availability with zero dropped telematics events',
    },
  ],

  // Section 08 — Our Approach and Key Decisions
  decisions: [
    {
      number: '01',
      decision: 'Deploying Apache Kafka & Go for Telemetry Event Ingestion',
      alternativesConsidered:
        'REST APIs polling directly into PostgreSQL/Oracle databases or standard RabbitMQ message queues.',
      whyChosen:
        'Safexpress vehicles broadcast millions of GPS coordinates, speed, and sensor metrics concurrently. Go provides ultra-lightweight goroutines with minimal memory footprint, while Kafka guarantees fault-tolerant, partitioned stream ingestion that queues spikes effortlessly without straining downstream databases.',
      observedImpact:
        'Processes 10M+ daily events comfortably on a compact AWS EKS cluster, maintaining sub-second processing latency even during sudden reconnection dumps after remote highway tunnels.',
    },
    {
      number: '02',
      decision: 'Executing the Strangler Fig Pattern on the Legacy ERP',
      alternativesConsidered:
        'A comprehensive "big-bang" ERP replacement or building independent database clones with batch synchronization.',
      whyChosen:
        'A 24/7 mission-critical nationwide supply chain cannot tolerate downtime or migration risk. Webkorps built event-driven adapters that wrapped legacy ERP data stores, intercepting operational requests into modern microservices while keeping ledger balances synchronized in the background.',
      observedImpact:
        'Zero minutes of scheduled operations downtime across the entire 8-month phased rollout across 1,000+ hubs.',
    },
    {
      number: '03',
      decision: 'Developing an Offline-First Progressive Web App for Hub Operators',
      alternativesConsidered:
        'Heavy native Android applications distributed via custom MDMs or desktop-only terminal clients.',
      whyChosen:
        'Dock workers and gate inspectors operate in noisy industrial yards with fluctuating Wi-Fi and 4G coverage. An offline-first PWA with IndexedDB local caching allows scanning barcodes and completing seal audits instantly, queuing transactions locally and syncing automatically once reconnected.',
      observedImpact:
        'Zero gate delays due to connectivity hiccups; 100% device compatibility across ruggedized handheld scanners and mobile tablets.',
    },
    {
      number: '04',
      decision: 'Event-Driven CQRS Architecture for Real-Time Querying',
      alternativesConsidered:
        'Unified relational schemas handling both high-frequency telemetry writes and complex analytical dashboard queries.',
      whyChosen:
        'Decoupling write-heavy GPS streaming (Command side) from read-heavy tracking maps and client visibility portals (Query side) using Redis caches and TimescaleDB views ensured that heavy customer queries never degraded vehicle tracking pipelines.',
      observedImpact:
        'Dashboard map rendering dropped from 4.2 seconds to under 250 milliseconds with instant live position updates.',
    },
  ],

  // Section 09 — The Solution
  solutionFeatures: [
    {
      number: '01',
      title: 'Smart Inbound Gate & Dock Orchestration System',
      badge: 'Hub Efficiency',
      description:
        'An intelligent dock management console that predicts inbound vehicle arrivals using live highway telemetry, pre-allocates cross-dock bays, and automates optical barcode seal verification at gate-in.',
      workflowImprovement:
        'Dock teams receive automated 45-minute arrival alerts with pre-manifested pallet slot allocations, eliminating yard queue idle times.',
      targetUsers: 'Gateway Station Managers, Yard Marshals, and Dock Supervisors',
      visualLabel: 'Smart Dock Assignment & Container Manifest Console',
      visualType: 'dashboard',
      annotations: [
        'Automated bay allocation based on cargo destination',
        'Instant digital seal match against linehaul manifest',
        'Real-time dwell timer with bottleneck escalation alerts',
      ],
    },
    {
      number: '02',
      title: 'Unified IoT Telematics & Vehicle Tracking Control Tower',
      badge: 'Real-Time Visibility',
      description:
        'A centralized operational command center providing sub-second fleet visibility across 10,000+ container trucks, monitoring transit speed, geofence breaches, route deviations, and cold-chain temperature telemetry.',
      workflowImprovement:
        'Replaced manual driver phone calls with automated highway checkpoint geofence alerts and dynamic ETA calculations.',
      targetUsers: 'Centralized Fleet Controllers, Safety Officers, and Customer Support',
      visualLabel: 'Pan-India Fleet Telematics & Dynamic Geofence Control Tower',
      visualType: 'pipeline',
      annotations: [
        'Sub-second GPS waypoint mapping with speed monitoring',
        'Automatic detour detection and dynamic route recalculation',
        'Instant tamper detection on cargo compartment locks',
      ],
    },
    {
      number: '03',
      title: 'Contactless Digital Proof of Delivery (ePOD) System',
      badge: 'Cash Cycle Acceleration',
      description:
        'A streamlined mobile application for delivery drivers and transshipment teams capturing digital signatures, geo-stamped photo proofs of delivery, and automated exception reporting for damaged packages.',
      workflowImprovement:
        'Eliminated paper consignment notes completely; instant invoice generation upon delivery confirmation reduced dispute cycles from 14 days to under 24 hours.',
      targetUsers: 'Delivery Drivers, Logistics Partners, and Accounting Teams',
      visualLabel: 'Driver Mobile ePOD & Geo-Stamped Consignment Verification',
      visualType: 'mobile',
      annotations: [
        'Geo-fenced electronic signature capture with timestamps',
        'High-resolution damage photo capture with automated dispute ticket',
        'Instant ERP invoice settlement trigger upon verified completion',
      ],
    },
    {
      number: '04',
      title: 'Dynamic Linehaul Dispatch & Load Consolidation Optimizer',
      badge: 'Freight Margin Optimization',
      description:
        'An algorithmic dispatch planning engine that analyzes regional cargo volume queues, optimizes 3D container cubing, and automates carrier rate tendering for overflow seasonal feeder capacity.',
      workflowImprovement:
        'Increased vehicle load factor by 18% and reduced empty return deadhead miles through smart regional backhaul pairing.',
      targetUsers: 'Regional Logistics Planners and Freight Procurement Teams',
      visualLabel: 'Algorithmic 3D Load Planning & Multi-Modal Dispatch Matrix',
      visualType: 'portal',
      annotations: [
        'Volumetric cargo consolidation optimizing axle load distribution',
        'Automated spot-market tender bidding for auxiliary fleets',
        'Multi-modal transit switching between highway and express rail',
      ],
    },
  ],

  // Section 10 — Technical Execution (Optional Collapsible)
  technicalExecution: {
    overview:
      'The platform was engineered around an event-driven, microservices architecture deployed on Amazon Web Services (AWS) using Kubernetes (EKS). High-velocity telematics endpoints ingest data directly through Go-based ingestion nodes into distributed Kafka topics, decoupling operational writes from analytical querying and ERP synchronization.',
    architecturePoints: [
      {
        title: 'Event-Driven Ingestion Pipeline',
        description:
          'Written in Go, ingestion microservices handle incoming TCP/HTTP telematics streams from on-board vehicle IoT units. Data is validated, normalized, and published to Apache Kafka partitions hashed by vehicle and consignment IDs.',
      },
      {
        title: 'Resilient Microservices Core',
        description:
          'Services responsible for dock scheduling, route optimization, driver assignments, and ePOD audits run in isolated Docker containers orchestrated by AWS EKS with horizontal pod autoscaling responding to real-time traffic spikes.',
      },
      {
        title: 'Optimized Data Tier (TimescaleDB & PostgreSQL)',
        description:
          'Time-series location and temperature telemetry are stored in partitioned TimescaleDB hypertables, while transactional records reside in high-availability AWS RDS PostgreSQL with Read Replicas and Redis Enterprise caching for sub-millisecond route lookup.',
      },
      {
        title: 'Enterprise Integration & Zero-Trust Security',
        description:
          'Bi-directional synchronization with Safexpress legacy systems runs through secure Kafka Connect adapters and REST webhooks. All telemetry payloads are validated with HMAC signatures and encrypted using TLS 1.3 in transit and AWS KMS AES-256 at rest.',
      },
    ],
    securityPoints: [
      'Role-based access control (RBAC) governing hub staff, controllers, and external consignees',
      'Immutable audit trails recording every gate-in, seal check, and delivery acknowledgment',
      'Full compliance with ISO 27001 data governance and regional supply chain security directives',
    ],
    performanceHighlights: [
      'P99 API response time: Under 85ms across all core operational endpoints',
      'Sustained ingestion throughput: 4,500+ telematics events per second during peak hours',
      'System availability: 99.98% uptime achieved across multi-AZ AWS deployment',
    ],
  },

  // Section 11 — Results and Business Impact
  results: {
    headline: 'Measurable Outcomes Across India’s Most Demanding Supply Chain',
    description:
      'Within six months of enterprise-wide deployment across primary hubs, Safexpress achieved transformative operational improvements in asset utilization, hub turnaround, and client satisfaction.',
    metrics: [
      {
        value: '42%',
        label: 'Reduction in Hub Turnaround Time',
        baseline: '78 min average gate-to-gate',
        timeframe: '6 months post-deployment',
        source: 'Safexpress National Operations Report',
      },
      {
        value: '< 850ms',
        label: 'Real-Time Telematics Latency',
        baseline: '15-20 min batch delay',
        timeframe: 'Full production load',
        source: 'AWS CloudWatch & APM Telemetry',
      },
      {
        value: '99.4%',
        label: 'On-Time Linehaul Dispatch SLA',
        baseline: '89.2% historical baseline',
        timeframe: 'Across 10,000+ container routes',
        source: 'Enterprise SLA Audit',
      },
      {
        value: '₹18M+',
        label: 'Annualized Operational Cost Savings',
        baseline: 'Detention penalties & paperwork',
        timeframe: 'First full operational fiscal year',
        source: 'Finance & Operations Review',
      },
    ],
    qualitativeOutcomes: [
      'Eliminated physical paperwork at transshipment gateways, standardizing hub operations across all 1,000+ locations.',
      'Provided enterprise B2B customers with sub-second milestone visibility and predictive arrival alerts via customer APIs.',
      'Reduced payment dispute cycles from 14 days to under 24 hours through instant geo-stamped electronic proof of delivery.',
      'Empowered executive leadership with real-time lane profitability, fleet dwell times, and bottleneck analytics.',
    ],
  },

  // Section 12 — Client Testimonial (Optional)
  testimonial: {
    quote:
      'Webkorps understood the immense physical scale and operational realities of our nationwide logistics network from day one. Their engineering squad didn’t just write software—they built a resilient, event-driven digital platform that operates in lockstep with our ground teams. Our hub turnaround times dropped by 42%, and our clients now enjoy the most precise shipment visibility in the Indian express logistics sector.',
    author: 'Senior Executive Leadership',
    designation: 'Head of Operations & Technology',
    company: 'Safexpress Logistics',
  },

  // Section 13 — Technology Stack
  techStack: [
    {
      role: 'Frontend & Mobile Interfaces',
      technologies: [
        { name: 'Next.js 16', purpose: 'Server-rendered operational control tower & portal' },
        { name: 'React 19', purpose: 'Component-based responsive dashboard architecture' },
        { name: 'TypeScript', purpose: 'Strict end-to-end type safety across client & server' },
        { name: 'Tailwind CSS', purpose: 'Design tokens and responsive layout utilities' },
        { name: 'Progressive Web App (PWA)', purpose: 'Offline-first barcode scanning for hub terminals' },
      ],
    },
    {
      role: 'Backend & Event Streaming',
      technologies: [
        { name: 'Go (Golang)', purpose: 'High-concurrency telematics ingestion microservices' },
        { name: 'Node.js & NestJS', purpose: 'Modular REST and GraphQL business logic services' },
        { name: 'Apache Kafka', purpose: 'Distributed event bus processing 10M+ daily telemetry pings' },
        { name: 'Kafka Connect', purpose: 'Bi-directional adapters synchronizing legacy ERP databases' },
      ],
    },
    {
      role: 'Databases & In-Memory Caching',
      technologies: [
        { name: 'PostgreSQL (AWS RDS)', purpose: 'ACID-compliant transactional database for dispatch and manifests' },
        { name: 'TimescaleDB', purpose: 'Time-series spatial tracking data and historical route telemetry' },
        { name: 'Redis Enterprise', purpose: 'Sub-millisecond vehicle state cache and session store' },
      ],
    },
    {
      role: 'Cloud Infrastructure & DevOps',
      technologies: [
        { name: 'AWS EKS (Kubernetes)', purpose: 'Container orchestration with horizontal pod autoscaling' },
        { name: 'Amazon MSK', purpose: 'Fully managed Apache Kafka streaming cluster' },
        { name: 'Terraform', purpose: 'Declarative Infrastructure-as-Code across staging and prod' },
        { name: 'Docker', purpose: 'Standardized containerized build and runtime environments' },
        { name: 'Prometheus & Grafana', purpose: 'Real-time telemetry and infrastructure health observability' },
      ],
    },
  ],

  // Section 14 — Is This Your Challenge Too?
  reusablePattern: {
    patternHeadline: 'Does Your Business Suffer from Disconnected Field Operations & Data Silos?',
    patternDescription:
      'Safexpress’s challenge is common across enterprise organizations managing distributed physical assets: high-frequency real-time events trapped in siloed legacy databases, slow manual handoffs, and customer blind spots. Webkorps engineers modular, event-driven architectures that breathe real-time intelligence into mission-critical legacy operations.',
    adjacentIndustries: [
      {
        name: 'Third-Party Logistics (3PL) & Freight Forwarders',
        scenario: 'Connecting multimodal carriers, automated customs manifests, and electronic proof-of-delivery.',
      },
      {
        name: 'Cold-Chain & Pharmaceutical Distribution',
        scenario: 'Real-time IoT temperature sensor tracking, geofence compliance, and automated excursion alerts.',
      },
      {
        name: 'Automotive & Heavy Manufacturing',
        scenario: 'Just-in-Time (JIT) parts inbound scheduling, supplier ASN integration, and cross-dock dock balancing.',
      },
      {
        name: 'E-Commerce & Quick-Commerce Hubs',
        scenario: 'Dynamic sorting conveyor orchestration, high-velocity sorting, and automated dispatch batching.',
      },
    ],
  },

  // Section 15 — Team and Engagement Details
  engagementDetails: {
    teamSize: '12 Specialists (Full Cross-Functional Squad)',
    duration: '8 Months from Inception to Pan-India Production Rollout',
    model: 'Dedicated Enterprise Product Engineering Team',
    cadence: '2-Week Agile Sprints with Bi-Weekly Stakeholder Demonstrations',
    practices: [
      'Dual-Track Agile (Simultaneous discovery and delivery)',
      'Automated CI/CD pipelines with zero-downtime canary deployments',
      'Daily standups and shared Slack/Teams channels with client operations leaders',
      'Rigorous automated test coverage (Unit, Integration, and Chaos Engineering for Kafka)',
    ],
  },

  // Section 16 — Project-Specific FAQ
  faqs: [
    {
      id: 'faq-erp-integration',
      question: 'How did Webkorps integrate with Safexpress’s legacy ERP without causing operational downtime?',
      answer:
        'We implemented the Strangler Fig architectural pattern. Instead of attempting a risky whole-system replacement, Webkorps built bi-directional Kafka Connect adapters and lightweight CDC (Change Data Capture) pipelines. This allowed modern microservices to process dispatch workflows and telematics in real time while continuously reconciling ledger records in the background, achieving zero downtime across 1,000+ hubs.',
    },
    {
      id: 'faq-scalability',
      question: 'Can this platform architecture scale for other freight, fleet, or distribution companies?',
      answer:
        'Yes. The underlying architecture—combining Go microservices, Apache Kafka event streaming, and Kubernetes auto-scaling—is fully modular and cloud-agnostic. It easily adapts to 3PL logistics, cold-chain distribution, retail supply chains, or municipal fleet management networks with minimal configuration adjustments.',
    },
    {
      id: 'faq-offline-connectivity',
      question: 'How does the system handle tracking in remote transit corridors with weak mobile signals?',
      answer:
        'Vehicle IoT units cache GPS coordinates and sensor logs locally in onboard solid-state memory during network dead zones. The moment the vehicle enters cellular or gateway range, the Go ingestion service consumes the compressed backlog in microsecond batches via Kafka, automatically re-ordering waypoints chronologically without data loss.',
    },
    {
      id: 'faq-timeline',
      question: 'What was the timeline from initial architecture design to the first hub deployment?',
      answer:
        'The first functional prototype and IoT telematics pipeline were tested in a staging gateway within 10 weeks of discovery. Following successful pilot validation across five flagship transshipment centers, the platform was rolled out incrementally across all regional hubs over the remaining five months.',
    },
  ],

  // Section 17 — Related Case Studies
  relatedCaseIds: ['cigna', 'sonic-healthcare', 'paypal'],

  // SEO & Metadata
  seo: {
    metaTitle: 'Safexpress Supply Chain Case Study | Webkorps',
    metaDescription:
      'Learn how Webkorps helped Safexpress modernize hub dispatch and vehicle telematics across 1,000+ centers, reducing turnaround by 42% with sub-second tracking.',
    canonicalUrl: 'https://www.webkorps.com/case-studies/safexpress',
    publishedAt: '2026-03-15T09:00:00+05:30',
    updatedAt: '2026-11-15T14:30:00+05:30',
  },
};
