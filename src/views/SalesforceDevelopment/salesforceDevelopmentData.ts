import enterpriseImg from '../../assets/services/Custom software development /Enterprise software & platforms.png';
import integrationsImg from '../../assets/services/Custom software development /Integrations, APIs & legacy modernization.png';
import customWebImg from '../../assets/services/Custom software development /Custom web applications.png';
import discoveryImg from '../../assets/services/Custom software development /Product discovery & strategy.png';
import cloudDevopsImg from '../../assets/services/Custom software development /Cloud & DevOps solutions.png';
import customSoftwareImg from '../../assets/services/services page/custom_software.png';

import automateImg from '../../assets/services/business-outcomes/automate-operations.png';
import smarterDecisionsImg from '../../assets/services/business-outcomes/smarter-decisions.png';
import seamlessExpImg from '../../assets/services/business-outcomes/seamless-experiences.png';
import scaleLimitsImg from '../../assets/services/business-outcomes/scale-without-limits.png';

import type { OutcomeItem } from '../../components/ServiceOutcomes';
import type { CapabilityItem } from '../../components/ServiceCapabilities';
import type { FAQItemData } from '../../sections/home/FAQ/faqData';
import type { SolutionCardItem } from '../../sections/custom-software/SoftwareForEveryBusiness';
import type { DomainSolutionItem } from '../../components/DomainSpecificSolutions';

export const SALESFORCE_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'financial-wealth',
    name: 'Financial Services & Wealth',
    badge: 'FINANCIAL SERVICES CLOUD',
    solutionTitle: 'Salesforce FSC Client 360 & Advisor Portals',
    challenge:
      'Wealth managers and loan officers lose high-net-worth clients due to siloed portfolio systems and manual regulatory KYC tracking.',
    engineering:
      'Webkorps implements Salesforce Financial Services Cloud (FSC) with automated KYC/AML onboarding, household modeling, and core banking APIs.',
    bulletPoints: [
      'Single consolidated pane of glass for household financial portfolios.',
      'Automated loan origination and KYC onboarding shortening approval time by 40%.',
      'Strict SEC, FINRA, and GLBA compliant data security and audit trails.',
    ],
  },
  {
    id: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    badge: 'HEALTH CLOUD HIPAA',
    solutionTitle: 'Patient Relationship Management & Care Plans',
    challenge:
      'Care coordinators struggle with manual phone follow-ups, fragmented appointment records, and non-compliance with HIPAA data sharing.',
    engineering:
      'Webkorps tailors Salesforce Health Cloud with automated patient journeys, HL7/FHIR EHR sync, and secure Omnichannel patient messaging.',
    bulletPoints: [
      'Automated post-op and chronic disease care coordinator workflows.',
      'HIPAA-compliant patient communications via SMS, WhatsApp, and email.',
      'Real-time EHR bi-directional synchronization with Epic and Cerner.',
    ],
  },
  {
    id: 'manufacturing-distribution',
    name: 'Manufacturing & Distribution',
    badge: 'CPQ & REVENUE CLOUD',
    solutionTitle: 'Configure-Price-Quote (CPQ) & Dealer Communities',
    challenge:
      'Industrial manufacturers take weeks to deliver complex multi-variant equipment proposals, losing deals to agile competitors.',
    engineering:
      'Webkorps implements Salesforce CPQ with automated pricing rules, multi-tier discount approval matrices, and Experience Cloud dealer portals.',
    bulletPoints: [
      'Quote generation turnaround time slashed from 6 days to under 30 minutes.',
      'Self-service distributor portal with live inventory checks and order tracking.',
      'Automated ERP price book and SAP sales order synchronization.',
    ],
  },
  {
    id: 'hightech-saas',
    name: 'High-Tech & SaaS Businesses',
    badge: 'SUBSCRIPTION BILLING',
    solutionTitle: 'Sales Cloud Deal Pipeline & Renewal Automation',
    challenge:
      'Fast-growing SaaS companies battle customer churn and missed contract renewals due to disorganized customer success handoffs.',
    engineering:
      'Webkorps configures Sales Cloud with automated opportunity stage triggers, product usage telemetry scoring, and auto-renewals.',
    bulletPoints: [
      'Automated contract renewal pipeline boosting net revenue retention (NRR).',
      'Predictive churn risk scoring powered by Einstein Activity Capture.',
      'Stripe and Zuora subscription billing integrations with automated dunning.',
    ],
  },
  {
    id: 'professional-services',
    name: 'Professional Services & Consulting',
    badge: 'PSA & EXPERIENCE CLOUD',
    solutionTitle: 'Professional Services Automation (PSA) & Billing',
    challenge:
      'Consulting agencies suffer from poor consultant utilization, leaked billable hours, and delayed project milestone invoices.',
    engineering:
      'Webkorps deploys Salesforce-native PSA tools with resource capacity scheduling, time tracking, and automated milestone invoice triggers.',
    bulletPoints: [
      '18% increase in billable consultant utilization rates across teams.',
      'Automated timesheet submission and project budget burndown tracking.',
      'Branded client project portal for real-time deliverable approvals.',
    ],
  },
];

export const SALESFORCE_SOLUTIONS: SolutionCardItem[] = [
  {
    id: 'sales-cloud-automation',
    number: '01',
    title: 'Sales Cloud & pipeline automation',
    description: 'Lead scoring, automated deal flows, quote-to-cash (CPQ), and revenue forecasting.',
  },
  {
    id: 'service-cloud-support',
    number: '02',
    title: 'Service Cloud & omnichannel support',
    description: 'AI-assisted agent consoles, automated case routing, knowledge bases, and SLA management.',
  },
  {
    id: 'experience-cloud-communities',
    number: '03',
    title: 'Experience Cloud portals & communities',
    description: 'Branded partner portals, vendor extranets, and customer self-service communities.',
  },
  {
    id: 'appexchange-engineering',
    number: '04',
    title: 'AppExchange product engineering',
    description: 'Building, packaging, security-reviewing, and publishing ISV AppExchange applications.',
  },
  {
    id: 'enterprise-salesforce-integrations',
    number: '05',
    title: 'Enterprise Salesforce integrations',
    description: 'MuleSoft, REST/SOAP APIs connecting Salesforce to ERP, billing, and custom databases.',
  },
  {
    id: 'agentforce-einstein-ai',
    number: '06',
    title: 'Agentforce & Einstein AI customization',
    description: 'Autonomous AI service agents, predictive lead routing, and generative email summaries.',
  },
];

export const SALESFORCE_OUTCOMES: OutcomeItem[] = [
  {
    id: 'pipeline-efficiency',
    number: '01',
    title: 'Boosted Sales Velocity',
    description: 'Automate lead routing, quote generation, and deal progression to shorten sales cycles dramatically.',
    image: automateImg,
    imageAlt: 'Accelerated Salesforce sales pipeline velocity 3D illustration',
  },
  {
    id: 'customer-360',
    number: '02',
    title: '360° Customer Clarity',
    description: 'Unify sales records, support tickets, customer history, and purchase telemetry in a single view.',
    image: smarterDecisionsImg,
    imageAlt: 'Salesforce 360 degree customer view 3D illustration',
  },
  {
    id: 'enterprise-sync',
    number: '03',
    title: 'Seamless ERP Integration',
    description: 'Synchronize Salesforce with SAP, Oracle, NetSuite, and internal billing engines with real-time accuracy.',
    image: seamlessExpImg,
    imageAlt: 'Salesforce enterprise ERP integrations 3D illustration',
  },
  {
    id: 'data-governance',
    number: '04',
    title: 'Data Hygiene & Security',
    description: 'Enforce granular field-level permissions, automated deduplication, and regulatory privacy compliance.',
    image: scaleLimitsImg,
    imageAlt: 'Salesforce data governance and security 3D illustration',
  },
];

export const SALESFORCE_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'apex-lwc-development',
    number: '01',
    title: 'Apex & Lightning Web Components (LWC)',
    description:
      'We write clean, governor-limit-optimized Apex triggers, asynchronous batch jobs, and modern Lightning Web Components that transform standard CRM screens into streamlined workflows.',
    image: enterpriseImg,
    imageAlt: 'Custom Apex and Lightning Web Components development 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'cloud-deployments',
    number: '02',
    title: 'Multi-Cloud Setup & Configuration',
    description:
      'End-to-end setup and tailored configuration across Sales Cloud, Service Cloud, Marketing Cloud, Experience Cloud (Community), and Financial Services Cloud.',
    image: customWebImg,
    imageAlt: 'Salesforce multi-cloud implementation 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'crm-erp-integrations',
    number: '03',
    title: 'CRM, ERP & Middleware Integrations',
    description:
      'Connect Salesforce to backend accounting, inventory, and marketing automation systems using MuleSoft, Kafka, or bespoke bi-directional REST API connectors.',
    image: integrationsImg,
    imageAlt: 'Salesforce CRM and ERP middleware integration 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'appexchange-development',
    number: '04',
    title: 'AppExchange Product Development (ISV)',
    description:
      'Turn your software into an official AppExchange application. We guide ISVs through 2GP packaging, automated security reviews, and commercial marketplace listing.',
    image: discoveryImg,
    imageAlt: 'Salesforce AppExchange partner product development 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'data-migration-cleanup',
    number: '05',
    title: 'Data Migration & Schema Architecture',
    description:
      'Migrate from HubSpot, Zoho, or legacy spreadsheets without losing relationships. We handle data cleansing, field mapping, custom object creation, and deduplication.',
    image: cloudDevopsImg,
    imageAlt: 'Salesforce data migration and cleansing 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'managed-admin-support',
    number: '06',
    title: 'Managed Admin & Ongoing Optimization',
    description:
      'Keep your Salesforce org running at peak health with dedicated administrator support, workflow adjustments, security health checks, and seasonal release updates.',
    image: customSoftwareImg,
    imageAlt: 'Managed Salesforce administrator support 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

export const SALESFORCE_FAQS: FAQItemData[] = [
  {
    id: 'sf-developer-certifications',
    question: 'Are your Salesforce developers and architects certified?',
    answer:
      'Yes, our team consists of certified Salesforce Platform Developers (PD I & II), Application Architects, and System Administrators with extensive enterprise delivery experience.',
    isApproved: true,
  },
  {
    id: 'sf-governor-limits',
    question: 'How do you prevent governor limit errors in custom Apex code?',
    answer:
      'We follow strict Salesforce engineering best practices including bulkified triggers, SOQL/DML query isolation, asynchronous queueable/batch jobs, and comprehensive unit test coverage.',
    isApproved: true,
  },
  {
    id: 'sf-classic-to-lightning',
    question: 'Can you help migrate our organization from Salesforce Classic to Lightning?',
    answer:
      'Yes, we provide complete Classic-to-Lightning migration services including Visualforce-to-LWC refactoring, JavaScript button modernizations, and user change management training.',
    isApproved: true,
  },
  {
    id: 'sf-appexchange-security-review',
    question: 'Do you assist with passing the official AppExchange Security Review?',
    answer:
      'Yes, we conduct automated CodeScan and Checkmarx source audits, remediate CRUD/FLS and SOQL injection vulnerabilities, and handle the formal security submission process with Salesforce.',
    isApproved: true,
  },
  {
    id: 'sf-engagement-models',
    question: 'What engagement models do you offer for Salesforce projects?',
    answer:
      'We offer project-based custom implementation sprints, dedicated Salesforce developer staff augmentation, and ongoing monthly managed administrator support tiers.',
    isApproved: true,
  },
];

