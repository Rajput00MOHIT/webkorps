import React from 'react';
import type { IndustryPageConfig } from '../IndustryDetailView';

import mfgHeroImg from '../../../assets/industries/page img/Manufacturing.png';
import mfg3dImg from '../../../assets/industries/manufacturing.png';
import mfgIllustImg from '../../../assets/industries/manufacturing-illustration.png';
import stage1Img from '../../../assets/industries/manufacturing/ecosystem/stage-1.png';
import stage2Img from '../../../assets/industries/manufacturing/ecosystem/stage-2.png';
import stage3Img from '../../../assets/industries/manufacturing/ecosystem/stage-3.png';
import stage4Img from '../../../assets/industries/manufacturing/ecosystem/stage-4.png';
import stage5Img from '../../../assets/industries/manufacturing/ecosystem/stage-5.png';
import stage6Img from '../../../assets/industries/manufacturing/ecosystem/stage-6.png';

export const manufacturingConfig: IndustryPageConfig = {
  seoTitle: 'Manufacturing Software Development & Smart Factory Solutions | Webkorps',
  seoDescription:
    'Engineer smart manufacturing software: MES platforms, industrial IoT telemetry, automated predictive maintenance, and supply chain ERP integration.',
  canonicalUrl: 'https://www.webkorps.com/industries/manufacturing',

  badge: 'Manufacturing & Industrial Solutions',
  heroFirstWordPrefix: 'Smart',
  heroFirstWordLetter: 'M',
  heroSvgPath: (
    <path
      d="M14 28V19L23.5 14L33 19V28L23.5 33L14 28Z"
      stroke="#1887C9"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  heroFirstWordSuffix: 'anufacturing for',
  heroTitleLine2: (
    <>
      Automated <span className="wk-service-hero__title-accent">Industrial Operations</span>
    </>
  ),
  heroDescription:
    'Engineer smart manufacturing software: MES platforms, industrial IoT telemetry, automated predictive maintenance, and supply chain ERP integration.',
  ctaText: 'Discuss Your Manufacturing Project',

  statsTitle: (
    <>
      Smart Factory & Industry 4.0 <span className="wk-ind-stats__title-accent">at a Glance</span>
    </>
  ),
  statsSubtitle: 'Real-time production monitoring, OEE benchmarks, and telemetry performance metrics shaping modern industrial facilities.',
  statsData: {
    featured: {
      badge: 'INDUSTRY 4.0 BENCHMARK',
      value: '78%+',
      label: 'Connected Factory Adoption',
      description: 'Over three-quarters of global industrial manufacturers now deploy edge IoT telemetry and digital twin platforms on production lines.',
      source: 'McKinsey & World Economic Forum Industry 4.0 Report • 2024–2025',
    },
    secondary: [
      {
        id: 'oee-uplift',
        badge: 'EFFICIENCY',
        value: '22% Lift',
        label: 'Overall Equipment Effectiveness (OEE)',
        description: 'Automated bottleneck detection and digital work instructions maximize assembly line throughput.',
        source: 'ARC Advisory Group Manufacturing Benchmark',
      },
      {
        id: 'downtime-reduction',
        badge: 'RELIABILITY',
        value: '38% Less',
        label: 'Unplanned Machine Downtime',
        description: 'Vibration and acoustic anomaly detection catches component wear weeks before catastrophic mechanical failure.',
        source: 'Plant Engineering Maintenance Review',
      },
      {
        id: 'scrap-reduction',
        badge: 'QUALITY',
        value: '45% Drop',
        label: 'Defect & Scrap Rate Reduction',
        description: 'High-speed automated computer vision inspection intercepts dimensional and surface defects at cycle speed.',
        source: 'Automotive & Industrial Quality Index • 2025',
      },
    ],
  },

  ecosystemTitle: (
    <>
      How the Modern <span className="wk-ind-eco__title-accent">Manufacturing Ecosystem Works</span>
    </>
  ),
  ecosystemSubtitle: 'From raw material intake and robotic PLC automation to MES scheduling, quality vision control, and warehouse dispatch.',
  ecosystemStages: [
    {
      id: 'raw-material-inbound',
      stepNumber: '01',
      title: 'Raw Material Intake & ERP Sync',
      description: 'Automated supplier ASN verification, lot tracking barcodes, and real-time inventory reconciliation with SAP/Oracle ERP.',
      image: stage1Img,
    },
    {
      id: 'plc-scada-telemetry',
      stepNumber: '02',
      title: 'PLC & SCADA Telemetry Stream',
      description: 'OPC-UA and MQTT edge gateways streaming live machine cycle times, temperature, spindle speed, and hydraulic pressure.',
      image: stage2Img,
    },
    {
      id: 'mes-scheduling',
      stepNumber: '03',
      title: 'Manufacturing Execution Systems (MES)',
      description: 'Dynamic work-order dispatching, digital work instructions on rugged shop-floor tablets, and real-time operator tracking.',
      image: stage3Img,
    },
    {
      id: 'ai-quality-inspection',
      stepNumber: '04',
      title: 'AI Computer Vision Quality Inspection',
      description: 'Automated 2D/3D camera inspection detecting micro-cracks, surface blemishes, and tolerances in milliseconds.',
      image: stage4Img,
    },
    {
      id: 'predictive-maintenance',
      stepNumber: '05',
      title: 'Predictive Machinery Maintenance',
      description: 'FFT spectral vibration analysis alerting maintenance crews to bearing fatigue before catastrophic line shutdown.',
      image: stage5Img,
    },
    {
      id: 'automated-dispatch',
      stepNumber: '06',
      title: 'Packaging & Warehouse Logistics',
      description: 'Automated AGV pallet routing, automated packing slip printing, and real-time synchronization with outbound distribution.',
      image: stage6Img,
    },
  ],

  challengesTitle: (
    <>
      Why Factory Operations <span className="wk-ind-ch__title-accent">Face Complexity</span>
    </>
  ),
  challengesSubtitle: 'Legacy proprietary PLCs, uncoordinated shift handoffs, and paper-based inspection sheets create production bottlenecks and unbudgeted machine downtime.',
  challenges: [
    {
      number: '01',
      title: 'Proprietary PLC Protocols & Machine Silos',
      description: 'Machines from different vendors (Siemens, Rockwell, Fanuc, Mitsubishi) use incompatible communication protocols.',
      impact: 'Dispatchers lack a unified dashboard of factory output, leading to delayed order deliveries and uneven machine utilization.',
    },
    {
      number: '02',
      title: 'Unplanned Equipment Breakdowns',
      description: 'Reactive maintenance schedules fail to warn technicians about internal mechanical wear before lines grind to a halt.',
      impact: 'Thousands of dollars per hour in idle labor costs and emergency expedite fees to replace damaged tooling.',
    },
    {
      number: '03',
      title: 'Manual Quality Inspections & Human Error',
      description: 'Visual inspection performed manually at the end of the shift misses subtle surface defects under production fatigue.',
      impact: 'Costly product recalls, scrapped production batches, and customer chargebacks.',
    },
    {
      number: '04',
      title: 'Paper Traveler Sheets & Lack of Traceability',
      description: 'Physical paper route sheets travel between stations, making real-time lot recall and compliance auditing tedious.',
      impact: 'Days of audit preparation and vulnerability during ISO 9001 and IATF 16949 regulatory reviews.',
    },
    {
      number: '05',
      title: 'Energy Spikes & High Utility Operating Costs',
      description: 'Simultaneous furnace starts and unmonitored compressed air leaks create massive electrical peak demand surcharges.',
      impact: 'Inflated monthly utility overhead reducing factory gross operating margins.',
    },
    {
      number: '06',
      title: 'Shift Handoff Communication Gaps',
      description: 'Second and third shift operators lack context on machine calibration drift observed earlier in the morning.',
      impact: 'Production inconsistencies between shifts and higher first-piece scrap rates.',
    },
  ],

  capabilitiesTitle: (
    <>
      Connected Software for{' '}
      <span className="wk-capabilities__title-accent">Next-Generation Smart Factories</span>
    </>
  ),
  capabilitiesSubtitle: 'We build modular industrial software for MES execution, SCADA telemetry, and automated quality control.',
  capabilities: [
    {
      id: 'mes-platform',
      number: '01',
      title: 'Manufacturing Execution Systems (MES)',
      description: 'Centralized plant-floor management for work order scheduling, bill of materials (BOM) tracking, and real-time OEE reporting.',
      image: mfgHeroImg,
      imageAlt: 'Manufacturing Execution System 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'iiot-telemetry',
      number: '02',
      title: 'Industrial IoT & SCADA Telemetry',
      description: 'Edge computing nodes supporting OPC-UA, Modbus, and MQTT to aggregate continuous machine sensor metrics in sub-seconds.',
      image: mfg3dImg,
      imageAlt: 'Industrial IoT and edge sensor integration 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'computer-vision-qa',
      number: '03',
      title: 'AI Computer Vision Quality Inspection',
      description: 'Sub-millimeter defect detection using high-speed industrial cameras and deep learning visual inference.',
      image: mfgIllustImg,
      imageAlt: 'AI computer vision quality control 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'predictive-cmms',
      number: '04',
      title: 'Predictive Maintenance & CMMS',
      description: 'Machine learning anomaly detection that predicts bearing failures, motor overheating, and tooling wear automatically.',
      image: mfgHeroImg,
      imageAlt: 'Predictive maintenance and CMMS platform 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'digital-twin',
      number: '05',
      title: 'Digital Twin & Production Simulation',
      description: '3D virtual plant replicas that simulate production line bottlenecks and optimize throughput before physical equipment changes.',
      image: mfg3dImg,
      imageAlt: 'Digital twin and plant simulation 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'traceability-erp',
      number: '06',
      title: 'End-to-End Lot Traceability & ERP Sync',
      description: 'Full serial and lot genealogy tracking from raw ingredient suppliers through to finished goods distribution.',
      image: mfgIllustImg,
      imageAlt: 'End-to-end lot genealogy and ERP integration 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
  ],

  aiTitle: (
    <>
      Smarter <span className="wk-ind-ai__title-accent">Manufacturing with AI</span>
    </>
  ),
  aiSubtitle: 'AI reduces machine downtime, catches defects at cycle speed, and balances production line scheduling.',
  aiImage: mfgHeroImg,
  aiUseCases: [
    {
      id: 'ai-predictive-maintenance',
      number: '01',
      title: 'Acoustic & Vibration Anomaly Detection',
      problem: 'Unscheduled spindle seizures on CNC machines halt entire assembly lines for days.',
      aiApproach: 'Edge neural networks analyze high-frequency accelerometer and acoustic sensor feeds in real time.',
      integrations: 'Piezoelectric vibration sensors, edge IPC gateways, and plant CMMS work orders.',
      benefit: 'Reduces catastrophic machine failures by 75% and saves thousands in expedited spare part shipping.',
    },
    {
      id: 'ai-vision-defect',
      number: '02',
      title: 'Real-Time Automated Visual Inspection',
      problem: 'Microscopic hairline weld cracks or paint pinholes escape manual human inspections.',
      aiApproach: 'YOLO-based computer vision models inspect parts moving on conveyor belts at 120 units per minute.',
      integrations: 'GigE industrial cameras, PLC strobe triggers, and automated diverter arms.',
      benefit: '99.8% defect detection accuracy with zero production conveyor slowdown.',
    },
    {
      id: 'ai-schedule-optimization',
      number: '03',
      title: 'Algorithmic Production Line Balancing',
      problem: 'Tooling changeover setups waste hours of productive capacity when job sequencing is planned manually.',
      aiApproach: 'Genetic algorithms and constraint satisfaction solvers optimize job sequencing to minimize changeover downtime.',
      integrations: 'MES job queues, ERP sales orders, and tooling inventory availability tables.',
      benefit: '18% higher machine utilization and 30% reduction in total changeover setup hours.',
    },
    {
      id: 'ai-energy-optimization',
      number: '04',
      title: 'Peak Electrical Demand Shaving',
      problem: 'Factories face severe penalty tariffs when multiple heavy electric kilns cycle on simultaneously.',
      aiApproach: 'Predictive algorithms stagger high-draw equipment cycles while maintaining planned batch delivery deadlines.',
      integrations: 'Smart electrical sub-meters, SCADA load control relays, and utility tariff schedules.',
      benefit: '14% reduction in peak electrical utility billing charges.',
    },
    {
      id: 'ai-root-cause-analytics',
      number: '05',
      title: 'Autonomous Process Root-Cause Analysis',
      problem: 'Quality engineers spend days analyzing spreadsheets to understand why a specific chemical batch failed yield.',
      aiApproach: 'Multivariate regression models isolate the exact correlation between ambient humidity, speed, and yield drops.',
      integrations: 'Batch historian databases, ambient weather stations, and chemical titration logs.',
      benefit: 'Identifies yield failure drivers in minutes instead of weeks of manual data correlation.',
    },
    {
      id: 'ai-operator-copilot',
      number: '06',
      title: 'GenAI Maintenance Assistant',
      problem: 'Junior technicians take hours deciphering 800-page legacy machine manuals to diagnose rare error codes.',
      aiApproach: 'RAG-powered conversational assistants index machine schematics, service history, and SOPs for voice lookup.',
      integrations: 'Digital OEM equipment manuals, historical maintenance tickets, and rugged worker tablets.',
      benefit: 'Cuts mean time to repair (MTTR) by 45% during emergency troubleshooting calls.',
    },
  ],

  domainsTitle: (
    <>
      Industrial Platforms for{' '}
      <span className="wk-domain-sol__title-accent">Every Manufacturing Model</span>
    </>
  ),
  domainsSubtitle: 'Tailored manufacturing platforms for discrete assembly, continuous process chemicals, and contract job shops.',
  domainsEngineeringLabel: 'Webkorps Industrial Engineering',
  domains: [
    {
      id: 'discrete-manufacturing',
      name: 'Discrete Manufacturing & Assembly',
      badge: 'HIGH-VOLUME ASSEMBLY',
      solutionTitle: 'Automated Line Balancing, Work Instructions & Serialization',
      challenge: 'Automotive and electronics manufacturers must manage hundreds of component BOMs and enforce strict assembly steps.',
      engineering: 'We engineer barcode-verified assembly workstations, automated torque-tool interlocks, and real-time station cycle tracking.',
      bulletPoints: [
        'Zero-error assembly with automated tool interlocks that prevent line advance until steps are verified.',
        'Complete digital product birth history tied to individual 2D DataMatrix serial codes.',
        'Real-time line takt-time monitoring with automated Andon cord alerts for team leads.',
      ],
    },
    {
      id: 'process-manufacturing',
      name: 'Process & Chemical Manufacturing',
      badge: 'BATCH RECIPES',
      solutionTitle: 'Batch Recipe Automation, Historian Logs & Environmental Controls',
      challenge: 'Food, beverage, and chemical manufacturers must track precise temperature profiles and maintain sanitary lot compliance.',
      engineering: 'Webkorps develops ISA-88 compliant batch execution platforms with automated tank CIP logging and laboratory quality gates.',
      bulletPoints: [
        'Automated recipe execution preventing off-spec chemical blending errors.',
        'High-density time-series historian storing thousands of sensor tags for regulatory audits.',
        'Automated compliance reporting aligned with FDA 21 CFR Part 11 and cGMP guidelines.',
      ],
    },
    {
      id: 'contract-job-shops',
      name: 'Job Shops & Custom Fabricators',
      badge: 'HIGH-MIX LOW-VOLUME',
      solutionTitle: 'Dynamic Quoting, CNC Machine Utilization & Tool Tracking',
      challenge: 'Custom machine shops deal with frequent short-run setup changes, manual CAD estimation, and uncertain tool life.',
      engineering: 'We build digital quoting engines, automated spindle utilization monitors, and RFID tool-crib inventory systems.',
      bulletPoints: [
        'Automated 3D CAD analysis generating accurate machining cost estimates in minutes.',
        'Real-time machine status dashboards showing green/yellow/red spindle runtime across all bays.',
        'Automated tool wear compensation integration preventing ruined custom workpieces.',
      ],
    },
  ],

  partnerTitle: (
    <>
      Your Industrial{' '}
      <span className="wk-ind-pt__title-accent">Technology Partner</span>
    </>
  ),
  partnerSubtitle: 'We bridge the gap between IT cloud architectures and shop-floor Operational Technology (OT).',
  partnerImage: mfgHeroImg,
  partnerCapabilities: [
    {
      number: '01',
      title: 'Shop-Floor OT & IT Convergence',
      description: 'Bridging industrial fieldbuses (Profibus, EtherNet/IP, Modbus) with enterprise cloud ERPs and cloud data lakes securely.',
      highlight: 'Secure OT/IT Air-Gapped Interconnect',
    },
    {
      number: '02',
      title: 'Zero-Downtime Plant Deployments',
      description: 'Edge-native local-first execution ensures production continues uninterrupted even if wide-area network connectivity drops.',
      highlight: 'Local Edge Autonomy & Zero Data Loss',
    },
    {
      number: '03',
      title: 'ISA-95 & Industry 4.0 Architecture',
      description: 'System designs aligned with international enterprise-control system integration standards for seamless scalability.',
      highlight: 'ISA-95 Enterprise Architecture Aligned',
    },
    {
      number: '04',
      title: 'Rigid Shop-Floor Cyber Security',
      description: 'Industrial cyber security adhering to IEC 62443 zero-trust standards, isolating critical SCADA systems from external vectors.',
      highlight: 'IEC 62443 Industrial Security Standard',
    },
    {
      number: '05',
      title: '24/7 Dedicated Manufacturing SRE',
      description: 'Round-the-clock technical support for 3-shift 24/7/365 continuous manufacturing plants worldwide.',
      highlight: '24/7/365 Factory Critical Response SLAs',
    },
  ],

  outcomesTitle: (
    <>
      Maximize Factory Output with <span className="wk-service-outcomes__title-accent">Connected Operations</span>
    </>
  ),
  outcomesSubtitle: '22% higher OEE, 38% reduction in unplanned downtime, and complete digital lot traceability across your entire manufacturing footprint.',
  outcomes: [
    {
      id: 'oee-boost',
      number: '01',
      title: '22% Higher Overall Equipment Effectiveness',
      description: 'Real-time bottleneck identification and automated operator dispatch keep machines running at peak rated capacity.',
      image: mfgHeroImg,
      imageAlt: 'OEE lift 3D illustration',
    },
    {
      id: 'downtime-reduction',
      number: '02',
      title: '38% Less Unplanned Machine Downtime',
      description: 'Predictive sensor anomaly alerts give maintenance crews advance notice to replace worn components during scheduled shift changes.',
      image: mfg3dImg,
      imageAlt: 'Downtime reduction 3D illustration',
    },
    {
      id: 'defect-reduction',
      number: '03',
      title: '45% Reduction in Scrap & Defects',
      description: 'Sub-millimeter automated computer vision quality inspection catches flawed parts before expensive downstream processing.',
      image: mfgIllustImg,
      imageAlt: 'Defect reduction 3D illustration',
    },
    {
      id: 'rapid-audit',
      number: '04',
      title: 'Sub-Minute Compliance Traceability',
      description: 'Instant genealogy lookups find the exact supplier lot, machine, and operator responsible for any finished serial number.',
      image: mfgHeroImg,
      imageAlt: 'Rapid compliance traceability 3D illustration',
    },
  ],

  techStackTitle1: 'Future-Ready',
  techStackTitle2: 'Industrial Stack',
  techStackSubtitle: 'We combine edge industrial gateways (Node-RED/C++), time-series databases (TimescaleDB/InfluxDB), and robust cloud platforms to power resilient manufacturing operations.',

  faqTitle: (
    <>
      Manufacturing Software <span className="wk-faq__title-accent">FAQs</span>
    </>
  ),
  faqSubtitle: 'Answers to common questions regarding PLC/SCADA integrations, MES implementation timelines, and shop-floor security.',
  faqs: [
    {
      id: 'faq-1',
      question: 'How do you connect modern cloud software to legacy factory PLCs?',
      answer:
        'We deploy edge computing industrial gateways that interface directly with machine PLCs via standard industrial protocols like OPC-UA, Modbus TCP, EtherNet/IP, and Profinet. The edge gateway collects high-frequency machine data locally, runs local filtering, and transmits sanitized telemetry to the cloud via lightweight encrypted MQTT.',
      isApproved: true,
    },
    {
      id: 'faq-2',
      question: 'Will production stop if the internet connection to the cloud goes down?',
      answer:
        'No. We design all shop-floor workstations with local-first edge autonomy. The edge system caches work orders, stores hours of sensor telemetry locally, and executes all operator validation logic offline. Once connectivity is restored, all data automatically reconciles with the central cloud ERP.',
      isApproved: true,
    },
    {
      id: 'faq-3',
      question: 'Can your MES integrate with our existing ERP (SAP, NetSuite, etc.)?',
      answer:
        'Yes. We specialize in bidirectional ERP integrations. Production work orders, BOMs, and delivery dates synchronize from your ERP into the MES, while finished goods completions, scrap counts, and actual labor hours flow back to the ERP in real time.',
      isApproved: true,
    },
    {
      id: 'faq-4',
      question: 'How do you protect industrial control systems against cybersecurity threats?',
      answer:
        'We follow the IEC 62443 industrial security framework. We isolate OT control networks behind physical firewalls, enforce strict unidirectional data diodes, disable all unauthorized ports, and employ encrypted TLS 1.3 channels for external telemetry communication.',
      isApproved: true,
    },
    {
      id: 'faq-5',
      question: 'What is the typical deployment timeline for a smart factory MES pilot?',
      answer:
        'An initial pilot line integration covering 5 to 10 machines with real-time OEE tracking and digital work instructions typically deploys in 8 to 12 weeks, followed by enterprise-wide facility rollout.',
      isApproved: true,
    },
  ],
  ctaTitle: 'Ready to Modernize Your Manufacturing Operations?',
  ctaDesc: 'Connect your factory floor, boost equipment effectiveness, and eliminate unplanned machine downtime with custom industrial software.',
};
