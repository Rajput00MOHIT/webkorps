import type { DomainSolutionItem } from '../../components/DomainSpecificSolutions';

export const CUSTOM_SOFTWARE_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    badge: 'HIPAA & SOC 2',
    solutionTitle: 'Clinical Portals, Telehealth & EHR Integrations',
    challenge:
      'Fragmented medical record keeping, manual appointment coordination, and strict HIPAA compliance requirements slow clinical throughput.',
    engineering:
      'Webkorps engineers compliant clinical platforms with automated patient intake, secure EHR/EMR data bridges, and encrypted provider communication.',
    bulletPoints: [
      'Bespoke clinical consultation infrastructure with zero data leakage.',
      'HL7 and FHIR bi-directional hospital database interoperability.',
      '45% reduction in intake processing times across clinical clinics.',
    ],
  },
  {
    id: 'fintech',
    name: 'FinTech & Banking',
    badge: 'PCI-DSS & FINRA',
    solutionTitle: 'Core Ledger Engines & Automated Fraud Monitoring',
    challenge:
      'Legacy transaction systems face security vulnerabilities, manual reconciliation bottlenecks, and strict multi-currency compliance rules.',
    engineering:
      'Webkorps develops custom financial engines with real-time settlement tracking, automated fraud scoring, and immutable accounting audit logs.',
    bulletPoints: [
      'Sub-50ms transaction validation pipeline on high-volume volumes.',
      'Automated multi-ledger matching and discrepancy resolution.',
      'End-to-end encryption compliant with international banking standards.',
    ],
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-Commerce',
    badge: 'OMNICHANNEL SCALE',
    solutionTitle: 'Omnichannel Inventory Engines & POS Sync',
    challenge:
      'Siloed physical store inventory and online order queues lead to over-selling, inventory inaccuracies, and delayed customer fulfillment.',
    engineering:
      'Webkorps creates custom unified commerce platforms synchronizing warehouse stock, point-of-sale registers, and multi-channel storefronts.',
    bulletPoints: [
      'Real-time inventory deduction preventing out-of-stock orders.',
      'Unified order management system handling peak seasonal surges.',
      'Bespoke loyalty and personalized rewards calculation engine.',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    badge: 'INDUSTRY 4.0',
    solutionTitle: 'Shop-Floor Execution & Supply Chain Telemetry',
    challenge:
      'Unscheduled machinery downtime and paper-based shop-floor logs hinder factory efficiency and inflate operational production costs.',
    engineering:
      'Webkorps implements custom MES solutions connecting industrial sensors, automated quality logging, and ERP production scheduling.',
    bulletPoints: [
      'Continuous machine performance and OEE analytics tracking.',
      'Automated Bill-of-Materials (BOM) material flow reconciliation.',
      '25% reduction in assembly-line downtime via predictive scheduling.',
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    badge: 'DYNAMIC ROUTING',
    solutionTitle: 'Intelligent Dispatch & Multi-Stop Fleet Routing',
    challenge:
      'Unpredictable traffic delays, volatile fuel costs, and manual warehouse dispatching increase delivery times and erode profit margins.',
    engineering:
      'Webkorps builds dynamic logistics engines with algorithmic dispatching, real-time driver mobile sync, and digital proof-of-delivery.',
    bulletPoints: [
      'Automated dynamic fleet routing cutting average delivery miles by 18%.',
      'Real-time GPS vehicle telemetry and customer arrival notifications.',
      'Digital paperless manifest generation with multi-carrier tracking.',
    ],
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    badge: 'FERPA COMPLIANT',
    solutionTitle: 'Custom Learning Management Systems (LMS) & Assessment',
    challenge:
      'Off-the-shelf LMS platforms lack the flexibility needed for custom institutional grading rubrics, live video classrooms, and student analytics.',
    engineering:
      'Webkorps engineers bespoke educational platforms featuring interactive video classrooms, automated grading, and FERPA-compliant records.',
    bulletPoints: [
      'Interactive live classrooms supporting real-time collaborative whiteboards.',
      'Custom competency-based assessment and automated progress tracking.',
      'Compliant student privacy safeguards meeting FERPA guidelines.',
    ],
  },
];

