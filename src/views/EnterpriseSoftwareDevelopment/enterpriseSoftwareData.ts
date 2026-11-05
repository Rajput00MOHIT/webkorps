import enterpriseImg from '../../assets/services/Custom software development /Enterprise software & platforms.png';
import enterprisePageImg from '../../assets/services/services page/Enterprice_sofware.png';
import integrationsImg from '../../assets/services/Custom software development /Integrations, APIs & legacy modernization.png';
import cloudDevopsImg from '../../assets/services/Custom software development /Cloud & DevOps solutions.png';
import customWebImg from '../../assets/services/Custom software development /Custom web applications.png';
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

export const ENTERPRISE_SOFTWARE_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial',
    badge: 'INDUSTRY 4.0 ERP',
    solutionTitle: 'Connected Manufacturing Execution Systems (MES)',
    challenge:
      'Plant managers struggle with disconnected shop-floor machinery, manual production logging, and slow bottleneck discovery.',
    engineering:
      'Webkorps implements real-time MES and ERP integrations capturing machine telemetry, tracking OEE metrics, and automating work orders.',
    bulletPoints: [
      'Real-time Overall Equipment Effectiveness (OEE) tracking dashboards.',
      'Automated BOM material reconciliation reducing scrap waste by 22%.',
      'Unified plant-floor data synchronization with SAP/Oracle corporate ERPs.',
    ],
  },
  {
    id: 'supply-chain-logistics',
    name: 'Supply Chain & Logistics',
    badge: 'GLOBAL VISIBILITY',
    solutionTitle: 'Autonomous Warehouse & Freight Management Systems',
    challenge:
      'Global logistics networks suffer from multi-carrier tracking blindspots, dock congestion, and error-prone paper manifest handling.',
    engineering:
      'Webkorps develops end-to-end logistics platforms with dynamic load-matching, automated EDI parsing, and real-time shipment geofencing.',
    bulletPoints: [
      'Sub-minute shipment milestone updates across international sea/air freight.',
      'Paperless automated Bill of Lading (BOL) digital signature workflows.',
      '30% improvement in warehouse loading dock turnaround times.',
    ],
  },
  {
    id: 'healthcare-systems',
    name: 'Healthcare Systems & Payers',
    badge: 'HIPAA & HL7/FHIR',
    solutionTitle: 'Enterprise Clinical Portals & Claims Automation Engines',
    challenge:
      'Healthcare enterprises waste millions processing paper claims, managing disparate provider networks, and reconciling billing discrepancies.',
    engineering:
      'Webkorps engineers compliant claims adjudication engines with automated adjudication rules, provider roster credentialing, and FHIR integrations.',
    bulletPoints: [
      'Automated first-pass claims processing rate boosted to over 85%.',
      'Strict HIPAA, SOC 2, and HITRUST compliance data governance.',
      'Zero-leakage role-based access control (RBAC) across hospital networks.',
    ],
  },
  {
    id: 'financial-services',
    name: 'Financial Services & Banking',
    badge: 'BANK-GRADE GOVERNANCE',
    solutionTitle: 'Core Ledger Modernization & Compliance Auditing Hubs',
    challenge:
      'Financial institutions face regulatory fines and security risks due to aging COBOL legacy systems and fragmented transaction auditing trails.',
    engineering:
      'Webkorps modernizes core ledgers into modular microservices architectures with immutable event-sourcing and automated FinCEN/BSA compliance.',
    bulletPoints: [
      'Zero-downtime ledger migration using strangler fig pattern.',
      'Automated AML transaction monitoring and suspicious activity report (SAR) generation.',
      'Sub-second multi-currency settlement and accounting reconciliation.',
    ],
  },
  {
    id: 'retail-distribution',
    name: 'Retail Distribution & CPG',
    badge: 'OMNICHANNEL ERP',
    solutionTitle: 'Centralized Master Data Management (MDM) & Distribution',
    challenge:
      'Massive multi-channel retailers battle inventory discrepancies, misaligned supplier catalogs, and regional replenishment delays.',
    engineering:
      'Webkorps builds high-throughput Master Data Management engines synchronizing product, pricing, and stock records across global distribution centers.',
    bulletPoints: [
      'Real-time synchronization of over 500,000 SKUs across 200+ retail locations.',
      'Predictive inventory reorder triggers preventing stock-outs during peak seasons.',
      'Streamlined vendor onboarding portal with automated EDI validation.',
    ],
  },
];

export const ENTERPRISE_SOFTWARE_SOLUTIONS: SolutionCardItem[] = [
  {
    id: 'erp-business-engines',
    number: '01',
    title: 'ERP & core business engines',
    description: 'Unified resource planning across finance, manufacturing, supply chain, and human capital.',
  },
  {
    id: 'supply-chain-logistics',
    number: '02',
    title: 'Supply chain & logistics platforms',
    description: 'End-to-end warehouse visibility, shipment telemetry, inventory tracking, and routing.',
  },
  {
    id: 'enterprise-integration-hubs',
    number: '03',
    title: 'Enterprise integration hubs',
    description: 'Secure enterprise service bus (ESB) and API gateways unifying disparate legacy tools.',
  },
  {
    id: 'compliance-document-mgmt',
    number: '04',
    title: 'Compliance & document systems',
    description: 'Automated audit trails, RBAC access control, digital signatures, and regulatory filings.',
  },
  {
    id: 'custom-crm-portals',
    number: '05',
    title: 'Custom CRM & relationship systems',
    description: 'Custom sales pipelines, contract lifecycle management, and account orchestration.',
  },
  {
    id: 'legacy-system-modernization',
    number: '06',
    title: 'Legacy system modernization',
    description: 'Modernizing monolithic architectures into secure, microservices-driven digital cores.',
  },
];

export const ENTERPRISE_SOFTWARE_OUTCOMES: OutcomeItem[] = [
  {
    id: 'workflow-efficiency',
    number: '01',
    title: 'Streamlined Operations',
    description: 'Eliminate manual bottlenecks, automate cross-department handoffs, and optimize operational throughput.',
    image: automateImg,
    imageAlt: 'Enterprise operational workflow efficiency 3D illustration',
  },
  {
    id: 'data-unification',
    number: '02',
    title: 'Unified Data Insights',
    description: 'Break down departmental data silos and gain real-time visibility across all core enterprise operations.',
    image: smarterDecisionsImg,
    imageAlt: 'Unified enterprise data intelligence 3D illustration',
  },
  {
    id: 'system-interoperability',
    number: '03',
    title: 'Seamless Interoperability',
    description: 'Connect legacy systems, cloud apps, ERPs, and third-party tools into a cohesive digital ecosystem.',
    image: seamlessExpImg,
    imageAlt: 'Enterprise systems interoperability 3D illustration',
  },
  {
    id: 'audit-governance',
    number: '04',
    title: 'Strict Security Governance',
    description: 'Enforce enterprise-wide RBAC, complete audit trails, and strict compliance with global standards.',
    image: scaleLimitsImg,
    imageAlt: 'Enterprise security and audit governance 3D illustration',
  },
];

export const ENTERPRISE_SOFTWARE_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'custom-erp-platforms',
    number: '01',
    title: 'Custom ERP & Core Operations',
    description:
      'We architect tailored Enterprise Resource Planning (ERP) platforms and supply chain management systems designed precisely around your unique business rules and organizational hierarchy.',
    image: enterpriseImg,
    imageAlt: 'Custom enterprise ERP platform 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'enterprise-automation',
    number: '02',
    title: 'Workflow Automation & BPM',
    description:
      'Automate repetitive corporate workflows, document routing, review cycles, and multi-tier approval processes with bespoke Business Process Management (BPM) software.',
    image: enterprisePageImg,
    imageAlt: 'Enterprise business workflow automation 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'legacy-modernization',
    number: '03',
    title: 'Legacy Modernization & Refactoring',
    description:
      'Safely decommission legacy technical debt. We modernize monolithic mainframes and outdated codebases into modular, cloud-ready microservices with zero operational risk.',
    image: integrationsImg,
    imageAlt: 'Legacy enterprise systems modernization 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'middleware-integration',
    number: '04',
    title: 'Enterprise Middleware & Integrations',
    description:
      'Build robust API gateways, message queues, and enterprise service bus (ESB) architectures to synchronize data bidirectionally between SAP, Salesforce, Oracle, and proprietary systems.',
    image: customWebImg,
    imageAlt: 'Enterprise middleware and integration pipeline 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'enterprise-portals',
    number: '05',
    title: 'Corporate Portals & Intranets',
    description:
      'Deliver secure, role-governed internal communication hubs, vendor management dashboards, and executive reporting centers integrated with single sign-on (SSO).',
    image: discoveryImg,
    imageAlt: 'Corporate enterprise portal 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'governance-compliance',
    number: '06',
    title: 'Governance, Security & Auditing',
    description:
      'Protect enterprise operations with SOC2 Type II-compliant data structures, immutable audit logging, automated risk detection, and strict GDPR and HIPAA governance.',
    image: cloudDevopsImg,
    imageAlt: 'Enterprise governance, security and compliance 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

export const ENTERPRISE_SOFTWARE_FAQS: FAQItemData[] = [
  {
    id: 'enterprise-tech-integration',
    question: 'Can you integrate custom software with SAP, Oracle, and Salesforce?',
    answer:
      'Yes, we have deep experience engineering custom middleware, REST/SOAP connectors, and real-time event brokers that integrate seamlessly with SAP, Oracle, Microsoft Dynamics, and Salesforce.',
    isApproved: true,
  },
  {
    id: 'enterprise-scalability-load',
    question: 'How do you ensure enterprise systems handle high concurrent usage?',
    answer:
      'We architect distributed systems utilizing microservices, database sharding, asynchronous queues (Kafka/RabbitMQ), and horizontal auto-scaling to ensure reliable throughput under peak loads.',
    isApproved: true,
  },
  {
    id: 'enterprise-data-privacy',
    question: 'How do you manage data confidentiality and regulatory compliance?',
    answer:
      'We implement bank-level data encryption, role-based access control (RBAC), multi-factor single sign-on (SSO/SAML), and rigorous audit trails aligned with SOC2, ISO 27001, and HIPAA mandates.',
    isApproved: true,
  },
  {
    id: 'enterprise-implementation-timeline',
    question: 'What is the typical delivery timeline for an enterprise software platform?',
    answer:
      'Using agile delivery and modular architecture, we deliver initial functional production releases within 8 to 12 weeks, followed by continuous phased feature rollouts.',
    isApproved: true,
  },
  {
    id: 'enterprise-slas-governance',
    question: 'What ongoing maintenance and SLA guarantees do you provide?',
    answer:
      'We offer 24/7 dedicated support tiers with guaranteed response times, proactive system health monitoring, quarterly security reviews, and dedicated technical account managers.',
    isApproved: true,
  },
];

