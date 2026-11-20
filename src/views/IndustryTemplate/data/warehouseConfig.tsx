import React from 'react';
import type { IndustryPageConfig } from '../IndustryDetailView';

import warehouseHeroImg from '../../../assets/industries/logistics/Warehouse Management.png';
import stage1Img from '../../../assets/industries/warehouse/ecosystem/stage-1.png';
import stage2Img from '../../../assets/industries/warehouse/ecosystem/stage-2.png';
import stage3Img from '../../../assets/industries/warehouse/ecosystem/stage-3.png';
import stage4Img from '../../../assets/industries/warehouse/ecosystem/stage-4.png';
import stage5Img from '../../../assets/industries/warehouse/ecosystem/stage-5.png';
import stage6Img from '../../../assets/industries/warehouse/ecosystem/stage-6.png';

export const warehouseConfig: IndustryPageConfig = {
  seoTitle: 'Warehouse Management Software & Automation Solutions | Webkorps',
  seoDescription:
    'Engineer intelligent warehouse software: custom WMS platforms, automated AGV/AMR robotic dispatch, dynamic bin slotting, and real-time inventory tracking.',
  canonicalUrl: 'https://www.webkorps.com/industries/warehouse',

  badge: 'Warehouse & Fulfillment Solutions',
  heroFirstWordPrefix: 'Intelligent',
  heroFirstWordLetter: 'W',
  heroSvgPath: (
    <path
      d="M14 18L23.5 13L33 18V29L23.5 34L14 29V18ZM23.5 13V34M14 18L33 29M33 18L14 29"
      stroke="#1887C9"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  heroFirstWordSuffix: 'arehouse for',
  heroTitleLine2: (
    <>
      Automated <span className="wk-service-hero__title-accent">Fulfillment Operations</span>
    </>
  ),
  heroDescription:
    'Engineer intelligent warehouse software: custom WMS platforms, automated AGV/AMR robotic dispatch, dynamic bin slotting, and real-time inventory tracking.',
  ctaText: 'Discuss Your Warehouse Project',

  statsTitle: (
    <>
      Smart Warehousing &amp; Fulfillment <span className="wk-ind-stats__title-accent">at a Glance</span>
    </>
  ),
  statsSubtitle: 'Real-time inventory precision, pick-and-pack velocity, and warehouse space optimization metrics driving modern supply chains.',
  statsData: {
    featured: {
      badge: 'FULFILLMENT BENCHMARK',
      value: '99.8%+',
      label: 'Inventory Accuracy with Modern WMS',
      description: 'Automated RFID scanning, dynamic slotting, and real-time ERP reconciliation eliminate ghost stock and mis-picks across distribution centers.',
      source: 'Warehousing Education & Research Council (WERC) • 2024–2025',
    },
    secondary: [
      {
        id: 'picking-speed',
        badge: 'VELOCITY',
        value: '4x Faster',
        label: 'Pick-and-Pack Fulfillment Speed',
        description: 'Optimized wave picking routes and automated mobile robot guidance cut travel distance by more than 60%.',
        source: 'Supply Chain Management Review Benchmark',
      },
      {
        id: 'dock-cycle',
        badge: 'EFFICIENCY',
        value: '< 45 min',
        label: 'Dock-to-Stock Inbound Cycle Time',
        description: 'Automated ASN barcode verification and automated cross-dock staging accelerate putaway into active inventory.',
        source: 'Council of Supply Chain Management Professionals',
      },
      {
        id: 'space-utilization',
        badge: 'STORAGE DENSITY',
        value: '30% Lift',
        label: 'Cubic Storage Space Utilization',
        description: 'AI dynamic 3D slotting algorithms maximize volumetric storage capacity without expanding warehouse footprint.',
        source: 'Modern Materials Handling Annual Survey • 2025',
      },
    ],
  },

  ecosystemTitle: (
    <>
      How the Modern <span className="wk-ind-eco__title-accent">Warehouse Ecosystem Works</span>
    </>
  ),
  ecosystemSubtitle: 'From dock appointment scheduling and barcode receiving to dynamic bin slotting, robotic wave picking, and outbound shipping.',
  ecosystemStages: [
    {
      id: 'inbound-receiving',
      stepNumber: '01',
      title: 'Inbound Receiving & ASN Verification',
      description: 'Automated dock appointment verification, instant PO validation, barcode pallet scanning, and real-time receipt generation.',
      image: stage1Img,
    },
    {
      id: 'dynamic-slotting',
      stepNumber: '02',
      title: 'Dynamic Bin Slotting & Putaway',
      description: 'Algorithmic bin assignment based on SKU velocity, weight distribution, seasonal affinity, and ergonomic pick heights.',
      image: stage2Img,
    },
    {
      id: 'wave-picking',
      stepNumber: '03',
      title: 'Batch, Zone & Wave Pick Routing',
      description: 'Shortest-path traveling salesman route optimization for warehouse associates, voice-directed picking, and batch consolidation.',
      image: stage3Img,
    },
    {
      id: 'amr-robotics',
      stepNumber: '04',
      title: 'AGV & AMR Robotic Fleet Dispatch',
      description: 'Centralized fleet orchestration coordinating automated guided vehicles, goods-to-person shuttles, and conveyor systems.',
      image: stage4Img,
    },
    {
      id: 'inventory-cycle-audit',
      stepNumber: '05',
      title: 'Real-Time Inventory & Cycle Counts',
      description: 'Perpetual inventory tracking, drone-assisted high-bay RFID scans, and discrepancy alerts without shutting down warehouse shifts.',
      image: stage5Img,
    },
    {
      id: 'outbound-manifest',
      stepNumber: '06',
      title: 'Packing, Staging & Cross-Dock Dispatch',
      description: 'Automated cartonization, carrier rate-shopping, high-speed shipping label generation, and carrier trailer loading manifests.',
      image: stage6Img,
    },
  ],

  challengesTitle: (
    <>
      Why Warehouse Operations <span className="wk-ind-ch__title-accent">Face Complexity</span>
    </>
  ),
  challengesSubtitle: 'Manual paperwork, uncoordinated dock schedules, ghost inventory, and disconnected legacy ERPs cause costly throughput bottlenecks.',
  challenges: [
    {
      number: '01',
      title: 'Excessive Travel Distance & Inefficient Pick Paths',
      description: 'Pickers spend up to 60% of their shift walking between distant warehouse aisles due to static, unoptimized slotting configurations.',
      impact: 'Dramatically inflated labor costs and delayed outbound cutoffs for same-day and next-day customer delivery promises.',
    },
    {
      number: '02',
      title: 'Ghost Inventory & Discrepancies Between Physical Stock and WMS',
      description: 'Damaged goods, misplaced bins, and delayed manual data entry cause systemic discrepancies between ERP records and floor shelves.',
      impact: 'Backorders, cancelled orders, and expensive emergency stock replenishments that erode warehouse operational margins.',
    },
    {
      number: '03',
      title: 'Dock Congestion & Stagnant Turnaround Times',
      description: 'Uncoordinated carrier truck arrivals lead to yard gridlock, driver detention fee penalties, and delayed inbound intake.',
      impact: 'Production lines stall waiting on raw parts while distribution nodes miss outbound carrier dispatch windows.',
    },
    {
      number: '04',
      title: 'Peak Season Throughput Surges & Labor Churn',
      description: 'Holiday sales spikes require onboarding seasonal temporary staff who struggle with convoluted, non-intuitive legacy green-screen terminals.',
      impact: 'Surging pick error rates, customer returns, and high overtime expenditures during critical revenue periods.',
    },
  ],

  capabilitiesTitle: (
    <>
      Warehouse Software Solutions Engineered for{' '}
      <span className="wk-capabilities__title-accent">Maximum Throughput</span>
    </>
  ),
  capabilitiesSubtitle: 'We architect custom, cloud-native warehouse management software tailored to your specific facility layouts, racking systems, and material handling workflows.',
  capabilities: [
    {
      id: 'cloud-wms',
      number: '01',
      title: 'Custom Cloud WMS Platforms',
      description: 'Full-featured warehouse management systems engineered for multi-site visibility, lot tracking, expiration management, and audit logs.',
      image: warehouseHeroImg,
      imageAlt: 'Custom Cloud WMS platform dashboard 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'amr-fleet-control',
      number: '02',
      title: 'Robotics & AMR Fleet Orchestration',
      description: 'Software integrations for autonomous mobile robots, automated storage and retrieval systems (ASRS), and sorter conveyors.',
      image: stage4Img,
      imageAlt: 'Warehouse robotic AMR fleet orchestration 3D display',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'barcode-rfid',
      number: '03',
      title: 'Barcode, QR & RFID Gate Systems',
      description: 'High-speed handheld scanner applications, automated tunnel scanners, and RFID dock doors with instant error validation.',
      image: stage1Img,
      imageAlt: 'High-speed RFID gate scanning systems',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'yard-dock-management',
      number: '04',
      title: 'Dock Appointment & Yard Management (YMS)',
      description: 'Self-service driver check-in kiosks, automated dock door scheduling, trailer spotter dispatching, and detention prevention.',
      image: stage6Img,
      imageAlt: 'Dock appointment and yard management system display',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'multi-hub-visibility',
      number: '05',
      title: 'Multi-Facility Inventory Synchronization',
      description: 'Unified real-time stock balances across regional distribution centers, 3PL partner facilities, and micro-fulfillment nodes.',
      image: stage2Img,
      imageAlt: 'Multi-hub inventory network synchronization 3D display',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'carrier-manifest-integration',
      number: '06',
      title: 'Multi-Carrier Rate Shopping & Manifesting',
      description: 'Sub-second shipping label generation, automated packing slip creation, and automated carrier tender through FedEx, UPS, DHL, and regional LTLs.',
      image: stage3Img,
      imageAlt: 'Multi-carrier rate shopping and manifesting system display',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
  ],

  aiTitle: (
    <>
      Smarter Warehousing <span className="wk-ind-ai__title-accent">with AI</span>
    </>
  ),
  aiSubtitle: 'Applied machine learning optimizes bin placement, predicts labor requirements, and balances order batches dynamically.',
  aiImage: stage4Img,
  aiUseCases: [
    {
      id: 'dynamic-slotting-ai',
      number: '01',
      title: 'AI Dynamic Slotting Optimization',
      problem: 'Static SKU placement ignores fast-moving seasonal velocity changes, causing associates to walk miles of extra distance.',
      aiApproach: 'Machine learning models analyze order frequency and SKU affinity matrices to continuously recommend optimal bin moves.',
      integrations: 'Historical WMS transactions, ERP sales velocity feeds, and physical rack geometry models.',
      benefit: 'Up to 35% reduction in total associate travel distance and 22% higher hourly pick rates.',
    },
    {
      id: 'vision-parcel-audit',
      number: '02',
      title: 'Computer Vision Carton & Weight Audit',
      problem: 'Incorrectly packaged cartons lead to customer returns, damaged fragile items, and dimensional carrier freight upcharges.',
      aiApproach: 'Overhead camera inspection models calculate exact 3D volumetric dimensions and identify open flaps or crushed packaging in milliseconds.',
      integrations: 'Conveyor cameras, automated inline scales, and carrier EDI shipping label printers.',
      benefit: '99.9% dimensional weight precision and elimination of carrier freight chargeback adjustments.',
    },
    {
      id: 'predictive-labor-scheduling',
      number: '03',
      title: 'Predictive Labor & Shift Scheduling',
      problem: 'Inflexible shift scheduling leads to expensive warehouse overtime during unexpected order spikes and idle staff during lulls.',
      aiApproach: 'Time-series predictive models forecast inbound shipments and outbound order queue volumes up to 14 days in advance.',
      integrations: 'E-commerce storefront order pipelines, marketing calendar promotions, and carrier delivery manifests.',
      benefit: '18% reduction in warehouse overtime costs and zero missed same-day dispatch cutoff windows.',
    },
    {
      id: 'amr-pathfinding-optimization',
      number: '04',
      title: 'Multi-Agent Robotic Pathfinding',
      problem: 'Fleets of mobile robots experience aisle deadlocks and congestion at popular picking zones, reducing overall throughput.',
      aiApproach: 'Decentralized multi-agent reinforcement learning recalculates collision-free robot travel corridors in real time.',
      integrations: 'Robot LiDAR telemetry, floor obstacle sensors, and live task allocation queues.',
      benefit: 'Zero robotic aisle gridlocks and 28% increase in automated AMR task completion rates.',
    },
  ],

  domainsTitle: (
    <>
      Warehouse Software for <span className="wk-domain-sol__title-accent">Every Facility Model</span>
    </>
  ),
  domainsSubtitle: 'From high-velocity e-commerce fulfillment hubs to temperature-sensitive cold storage and multi-client 3PL distribution networks.',
  domainsEngineeringLabel: 'Webkorps Warehouse Engineering',
  domains: [
    {
      id: '3pl-logistics',
      name: 'Third-Party Logistics (3PL)',
      badge: 'MULTI-CLIENT FULFILLMENT',
      solutionTitle: 'Multi-Tenant Inventory Segregation, Client Portals & Billing',
      challenge: '3PL providers manage distinct SKUs, billing rules, and packaging guidelines across dozens of independent clients in shared buildings.',
      engineering: 'We engineer multi-tenant WMS platforms with individual customer portal logins, custom picking SLAs, and automated cubic-foot storage billing.',
      bulletPoints: [
        'Isolated multi-tenant tenant databases preventing cross-client inventory co-mingling.',
        'Automated real-time client billing calculating storage space, carton intake, and pallet touches.',
        'Branded client self-service portals with real-time stock balances and outbound tracking links.',
      ],
    },
    {
      id: 'cold-storage',
      name: 'Cold Storage & Food Logistics',
      badge: 'TEMPERATURE-CONTROLLED',
      solutionTitle: 'Continuous Thermal Telemetry, FEFO Rotation & Sanitary Compliance',
      challenge: 'Perishable goods require strict temperature maintenance, first-expired rotation, and immediate FDA/FSMA recall capabilities.',
      engineering: 'Webkorps implements wireless temperature sensor logging, automated FEFO picking algorithms, and sub-minute lot genealogy search.',
      bulletPoints: [
        'Automated FEFO (First-Expired, First-Out) picking enforcement preventing spoiled product waste.',
        'Real-time temperature excursion alerts sent directly to floor managers before spoilage occurs.',
        'One-click recall reports identifying every customer shipment containing a flagged supplier lot.',
      ],
    },
    {
      id: 'ecommerce-fulfillment',
      name: 'High-Velocity E-Commerce Fulfillment',
      badge: 'HIGH-VOLUME D2C',
      solutionTitle: 'Dynamic Batch Picking, Automated Cartonization & Carrier Rate Shopping',
      challenge: 'Direct-to-consumer fulfillment requires processing thousands of multi-item orders daily with same-day shipping cutoffs.',
      engineering: 'We develop high-velocity wave and batch picking engines, automated 3D box cartonization, and sub-second multi-carrier rate shopping.',
      bulletPoints: [
        'Smart batch sorting grouping single-item and multi-item orders to minimize picker travel distance.',
        'Automated carton size calculation reducing dimensional weight freight costs by up to 20%.',
        'Sub-second shipping label generation connected directly to FedEx, UPS, DHL, and regional carriers.',
      ],
    },
    {
      id: 'manufacturing-distribution',
      name: 'Manufacturing Parts Distribution',
      badge: 'JIT & JIS ASSEMBLY',
      solutionTitle: 'Just-in-Time Kitting, Assembly Staging & ERP Synchronization',
      challenge: 'Assembly plants require parts delivered to line stations in exact assembly sequence without line-stalling stockouts.',
      engineering: 'Webkorps builds Just-in-Sequence (JIS) staging consoles, automated kit validation scanners, and bidirectional ERP consumption sync.',
      bulletPoints: [
        'Kitting validation workstations preventing incomplete sub-assemblies from moving to the line.',
        'Automated safety-stock triggers reordering critical raw components before safety buffers deplete.',
        'Real-time material consumption synchronization with SAP, Oracle, and NetSuite ERPs.',
      ],
    },
    {
      id: 'micro-fulfillment',
      name: 'Micro-Fulfillment & Dark Stores',
      badge: 'HYPER-LOCAL FULFILLMENT',
      solutionTitle: 'Ultra-Dense Storage Shuttles, Fast Pick Carts & 15-Minute Packing',
      challenge: 'Urban dark stores operate in restricted footprints and must pack grocery orders in under 15 minutes for immediate delivery.',
      engineering: 'We engineer high-density vertical carousel controls, multi-order picking cart tablets, and instant courier dispatch integration.',
      bulletPoints: [
        'Multi-order picking carts with barcode verification allowing pickers to pick 8 orders simultaneously.',
        'Automated shelf-location LED pick-to-light indicators speeding retrieval in compact dark stores.',
        'Direct webhooks notifying dispatch couriers as the final bag is sealed at the packing bench.',
      ],
    },
    {
      id: 'bonded-cfs',
      name: 'Bonded Warehouses & Container Yards',
      badge: 'CUSTOMS & FREIGHT',
      solutionTitle: 'Customs Bonded Holds, Container De-Stuffing & Yard Spotting',
      challenge: 'Freight forwarders and customs brokers face severe fines if un-cleared bonded cargo leaves container freight stations prematurely.',
      engineering: 'We build customs hold interlocks, gate container seal verification scanners, and automated EDI customs declaration logs.',
      bulletPoints: [
        'Automated customs bond locks preventing gate checkout until electronic clearance is granted.',
        'Container de-stuffing tally apps with damage photo capture and digital discrepancy exception reports.',
        'Real-time yard map tracking trailer parking spots, reefer plug status, and chassis availability.',
      ],
    },
  ],

  partnerTitle: (
    <>
      Your Technology Partner for <span className="wk-ind-pt__title-accent">Warehouse Modernization</span>
    </>
  ),
  partnerSubtitle: 'We deliver mission-critical software built specifically around your facility layout, proprietary material flows, and automation hardware.',
  partnerImage: stage5Img,
  partnerCapabilities: [
    {
      number: '01',
      title: 'Tailored Material Flow Logic',
      description: 'Engineered specifically around your facility footprint, rack dimensions, conveyor layouts, and material handling systems.',
      highlight: 'Custom Layout & Workflow Engineering',
    },
    {
      number: '02',
      title: 'Sub-Second Real-Time Response',
      description: 'Ultra-fast event-driven architecture ensuring handheld scanners and pick-to-light displays respond instantaneously with zero latency.',
      highlight: 'Sub-100ms Barcode Scan Validation',
    },
    {
      number: '03',
      title: 'Comprehensive Hardware Interoperability',
      description: 'Native compatibility with Zebra, Honeywell, and Datalogic scanners, Cognex vision cameras, and leading AMR/AGV robot APIs.',
      highlight: 'Universal Scanner & Robotics Interop',
    },
    {
      number: '04',
      title: 'Enterprise ERP & Supply Chain Sync',
      description: 'Bidirectional real-time synchronization with SAP, Oracle, NetSuite, and Microsoft Dynamics 365 ERP platforms.',
      highlight: 'Seamless Bidirectional ERP Sync',
    },
  ],

  outcomesTitle: (
    <>
      Measurable Results from <span className="wk-service-outcomes__title-accent">Intelligent Warehousing</span>
    </>
  ),
  outcomesSubtitle: 'Tangible gains in inventory precision, fulfillment velocity, and facility labor efficiency.',
  outcomes: [
    {
      id: 'inventory-accuracy',
      number: '01',
      title: '99.8% Inventory Precision',
      description: 'Automated barcode checkpoints and continuous cycle counting eliminate ghost inventory and stockout surprises.',
      image: warehouseHeroImg,
      imageAlt: '99.8% Inventory accuracy 3D display',
    },
    {
      id: 'pick-speed',
      number: '02',
      title: '45% Faster Pick-and-Pack Cycle',
      description: 'Optimized travel paths and wave consolidation accelerate hourly associate pick productivity across all zones.',
      image: stage3Img,
      imageAlt: '45% Faster pick and pack cycle 3D display',
    },
    {
      id: 'dock-turnaround',
      number: '03',
      title: '50% Reduction in Dock Congestion',
      description: 'Automated yard appointment scheduling and digital ASNs eliminate carrier driver waiting and detention penalties.',
      image: stage1Img,
      imageAlt: 'Dock congestion reduction 3D display',
    },
    {
      id: 'labor-cost',
      number: '04',
      title: '20% Lower Operational Labor Costs',
      description: 'Automated task interleaving and predictive staffing models minimize unproductive walking distance and overtime.',
      image: stage2Img,
      imageAlt: 'Labor cost reduction 3D display',
    },
  ],

  techStackTitle1: 'Future-Ready',
  techStackTitle2: 'Warehouse Tech Stack',
  techStackSubtitle: 'We combine high-performance event streams, edge IoT gateways, and robust cloud microservices for 24/7 continuous warehouse operations.',

  faqTitle: (
    <>
      Warehouse Software <span className="wk-faq__title-accent">Questions Answered</span>
    </>
  ),
  faqSubtitle: 'Everything you need to know about developing, integrating, and modernizing warehouse and fulfillment software with Webkorps.',
  faqs: [
    {
      id: 'wms-vs-erp',
      question: 'How does a custom WMS integrate with our existing ERP (e.g. SAP, Oracle)?',
      answer:
        'Our custom WMS platforms integrate via bidirectional REST/GraphQL APIs and event-driven webhooks. Purchase orders and sales orders flow automatically from your ERP into the WMS, while inventory receipts, pick confirmations, and shipment manifests sync back to the ERP in real time with zero manual intervention.',
      isApproved: true,
    },
    {
      id: 'robotics-support',
      question: 'Can your warehouse software integrate with our existing robotics and conveyor hardware?',
      answer:
        'Yes. We build hardware-agnostic warehouse execution systems (WES) that interface with automated guided vehicles (AGVs), autonomous mobile robots (AMRs), automated storage and retrieval systems (ASRS), and barcode/RFID tunnels using standard protocols such as VDA 5050, OPC-UA, MQTT, and vendor-specific REST/TCP APIs.',
      isApproved: true,
    },
    {
      id: 'offline-capability',
      question: 'What happens if warehouse Wi-Fi drops in remote parts of the facility?',
      answer:
        'Our mobile handheld scanner applications are built with local SQLite/IndexedDB caching and offline-first capabilities. Associates can continue scanning, verifying barcodes, and picking items even during temporary network interruptions. When connection restores, all transactions sync back seamlessly with deterministic conflict resolution.',
      isApproved: true,
    },
    {
      id: 'timeline-deployment',
      question: 'What is the typical deployment timeline for a custom warehouse management system?',
      answer:
        'A phased production rollout typically takes 10 to 16 weeks. We begin with a facility mapping and workflow architectural audit, deliver a functioning core pilot within 6 to 8 weeks, and execute live parallel runs before cutting over to guarantee zero disruption to your daily shipping commitments.',
      isApproved: true,
    },
  ],
  ctaTitle: 'Ready to build high-throughput warehouse software?',
  ctaDesc:
    'Schedule a technical consultation with our senior warehouse systems architects. We analyze facility layout challenges, evaluate hardware integrations, and map a production automation roadmap.',
};
