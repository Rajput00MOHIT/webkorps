import managedItImg from '../../assets/services/services page/IT_service.png';
import enterpriseImg from '../../assets/services/Custom software development /Enterprise software & platforms.png';
import cloudDevopsImg from '../../assets/services/Custom software development /Cloud & DevOps solutions.png';
import integrationsImg from '../../assets/services/Custom software development /Integrations, APIs & legacy modernization.png';
import discoveryImg from '../../assets/services/Custom software development /Product discovery & strategy.png';
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

export const MANAGED_IT_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'healthcare-clinics',
    name: 'Healthcare & Clinical Networks',
    badge: 'HIPAA & BAA GUARANTEED',
    solutionTitle: 'HIPAA-Compliant Managed Clinical Infrastructure',
    challenge:
      'Hospitals and private practices risk crippling ransomware attacks and federal HIPAA penalties due to unpatched endpoints and insecure Wi-Fi.',
    engineering:
      'Webkorps delivers 24/7 endpoint detection and response (EDR), automated security patch management, and encrypted off-site cloud backups.',
    bulletPoints: [
      'Signed Business Associate Agreements (BAAs) and full HIPAA compliance.',
      'Sub-15-minute response times for critical clinical workstation incidents.',
      'Continuous immutable air-gapped backups protecting against ransomware.',
    ],
  },
  {
    id: 'financial-accounting',
    name: 'Financial Services & CPA Firms',
    badge: 'SOC 2 & GLBA READY',
    solutionTitle: 'Encrypted Workstation Fleets & Cloud Network Security',
    challenge:
      'Accounting firms handling sensitive client tax records face phishing infiltration and compliance scrutiny under FTC Safeguards rules.',
    engineering:
      'Webkorps enforces multi-factor authentication (MFA), hardware-encrypted laptops, automated network isolation, and phishing threat training.',
    bulletPoints: [
      'Zero-trust network architecture preventing lateral network movement.',
      'Automated SOC 2 and FTC Safeguards compliance readiness reports.',
      '24/7/365 active Security Operations Center (SOC) telemetry monitoring.',
    ],
  },
  {
    id: 'legal-professional',
    name: 'Legal & Professional Services',
    badge: 'CONFIDENTIALITY & DLP',
    solutionTitle: 'Secure Remote Workspaces & Document Loss Prevention',
    challenge:
      'Attorneys working remotely risk client confidentiality leaks through unmonitored home networks, mobile devices, and lost laptops.',
    engineering:
      'Webkorps provisions managed virtual desktops (VDI), data loss prevention (DLP) filters, and instant remote device wipe capabilities.',
    bulletPoints: [
      'Instant remote lock and encryption wipe for lost or stolen attorney devices.',
      'Strict client document DLP preventing accidental unauthorized external sharing.',
      'Dedicated legal practice management software support (Clio, iManage).',
    ],
  },
  {
    id: 'manufacturing-plants',
    name: 'Manufacturing & Distribution Hubs',
    badge: 'INDUSTRIAL IT RESILIENCE',
    solutionTitle: 'Industrial Network Segmentation & 24/7 OT Uptime',
    challenge:
      'Factory floor automation networks (OT) connected to corporate IT networks are vulnerable to malware that halts assembly lines.',
    engineering:
      'Webkorps establishes secure Purdue Model OT/IT network segmentation, industrial switch monitoring, and redundant failover internet lines.',
    bulletPoints: [
      '99.99% network uptime guarantee across factory production lines.',
      'Micro-segmented OT firewall preventing corporate network malware spread.',
      'Dual-WAN cellular automatic failover maintaining continuous warehouse shipping.',
    ],
  },
  {
    id: 'education-institutions',
    name: 'Educational Institutions & Schools',
    badge: 'FERPA & CIPA COMPLIANT',
    solutionTitle: 'Campus Wi-Fi Infrastructure & Student Device Security',
    challenge:
      'Schools and universities face network congestion during testing, student cyberbullying/inappropriate content, and tight IT budgets.',
    engineering:
      'Webkorps configures high-density campus Wi-Fi networks with automated CIPA-compliant content filtering and centralized Chromebook/iPad MDM.',
    bulletPoints: [
      'Automated deployment and policy management for thousands of student devices.',
      'High-capacity campus Wi-Fi delivering seamless digital exam performance.',
      'Predictable per-seat educational pricing with zero surprise repair bills.',
    ],
  },
];

export const MANAGED_IT_SOLUTIONS: SolutionCardItem[] = [
  {
    id: 'noc-monitoring',
    number: '01',
    title: '24/7 infrastructure & network NOC',
    description: 'Continuous server, network, and endpoint telemetry with proactive incident response.',
  },
  {
    id: 'cybersecurity-threat',
    number: '02',
    title: 'Cybersecurity & threat protection',
    description: 'Managed SIEM/SOC, endpoint detection and response (EDR), and vulnerability patching.',
  },
  {
    id: 'cloud-hybrid-it',
    number: '03',
    title: 'Cloud & hybrid IT administration',
    description: 'Resource optimization, identity access management, and multi-cloud environment operations.',
  },
  {
    id: 'backup-disaster-recovery',
    number: '04',
    title: 'Backup & disaster recovery',
    description: 'Automated off-site backups, instant VM failovers, and business continuity guarantees.',
  },
  {
    id: 'helpdesk-user-support',
    number: '05',
    title: 'Helpdesk & end-user support',
    description: 'Tier 1–3 technical support, workstation provisioning, and remote troubleshooting.',
  },
  {
    id: 'compliance-governance',
    number: '06',
    title: 'Compliance & IT governance',
    description: 'SOC 2, ISO 27001, HIPAA, and GDPR compliance readiness audits and policy enforcement.',
  },
];

export const MANAGED_IT_OUTCOMES: OutcomeItem[] = [
  {
    id: 'uptime-guarantee',
    number: '01',
    title: '99.9% Uptime Guarantee',
    description: 'Proactively detect and neutralize infrastructure failures before they impact your daily business operations.',
    image: automateImg,
    imageAlt: '99.9% managed IT uptime guarantee 3D illustration',
  },
  {
    id: 'incident-response',
    number: '02',
    title: 'Rapid Incident Resolution',
    description: 'Backed by strict SLAs with sub-15-minute response times for critical severity infrastructure issues.',
    image: smarterDecisionsImg,
    imageAlt: 'Rapid managed IT incident resolution 3D illustration',
  },
  {
    id: 'cyber-protection',
    number: '03',
    title: 'Multi-Layer Cyber Defense',
    description: 'Protect all company workstations, cloud servers, and employee endpoints with automated EDR threat detection.',
    image: seamlessExpImg,
    imageAlt: 'Enterprise cybersecurity defense 3D illustration',
  },
  {
    id: 'predictable-costs',
    number: '04',
    title: 'Predictable IT Budgeting',
    description: 'Replace unpredictable break-fix bills with transparent, fixed monthly pricing and zero surprise charges.',
    image: scaleLimitsImg,
    imageAlt: 'Predictable managed IT budgeting 3D illustration',
  },
];

export const MANAGED_IT_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'server-network-monitoring',
    number: '01',
    title: '24/7 Network & Server Monitoring',
    description:
      'Round-the-clock telemetry across physical and cloud servers, firewalls, and switches. Automated alert triage and self-healing scripts ensure non-stop operations.',
    image: managedItImg,
    imageAlt: '24/7 network and server monitoring 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'cloud-infrastructure-management',
    number: '02',
    title: 'Cloud Operations & Patching',
    description:
      'Keep AWS, Azure, and Google Cloud environments secure with automated OS patching, SSL certificate renewal, database maintenance, and resource monitoring.',
    image: cloudDevopsImg,
    imageAlt: 'Cloud infrastructure operations and patch management 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'cybersecurity-edr',
    number: '03',
    title: 'Endpoint Security & Threat Defense',
    description:
      'Deploy enterprise Endpoint Detection & Response (EDR), next-gen firewalls, email phishing protection, and multi-factor authentication (MFA) enforcement.',
    image: enterpriseImg,
    imageAlt: 'Endpoint cybersecurity and threat defense 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'helpdesk-support',
    number: '04',
    title: 'Dedicated IT Help Desk & Support',
    description:
      'Empower your workforce with responsive Tier 1-3 helpdesk support covering hardware diagnostics, software provisioning, and seamless employee onboarding/offboarding.',
    image: discoveryImg,
    imageAlt: 'Dedicated IT helpdesk and remote user support 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'disaster-recovery-backup',
    number: '05',
    title: 'Disaster Recovery & Data Backups',
    description:
      'Never lose business data. We configure automated, encrypted offsite backups, routine restore simulations, and business continuity plans that meet compliance audits.',
    image: integrationsImg,
    imageAlt: 'Disaster recovery and automated cloud backups 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'vcio-strategy',
    number: '06',
    title: 'vCIO Strategy & Technology Roadmaps',
    description:
      'Receive strategic guidance from seasoned Virtual Chief Information Officers (vCIOs) for IT budgeting, software audits, vendor negotiations, and technology modernization.',
    image: customSoftwareImg,
    imageAlt: 'vCIO technology advisory and roadmapping 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

export const MANAGED_IT_FAQS: FAQItemData[] = [
  {
    id: 'managed-support-hours',
    question: 'Do you provide 24/7/365 monitoring and support coverage?',
    answer:
      'Yes, our Network Operations Center (NOC) and Security Operations Center (SOC) operate continuously 24 hours a day, 7 days a week, 365 days a year to ensure zero downtime.',
    isApproved: true,
  },
  {
    id: 'managed-sla-response-times',
    question: 'What are your guaranteed SLA response times for IT incidents?',
    answer:
      'We guarantee sub-15-minute response times for critical severity issues (server/network outages) and under 1 hour for standard user support requests.',
    isApproved: true,
  },
  {
    id: 'managed-co-managed-it',
    question: 'Can you work alongside our existing in-house IT department?',
    answer:
      'Yes, we offer both fully outsourced IT management and co-managed IT services where we handle night/weekend monitoring, Tier 3 escalations, and cybersecurity so your team can focus on core projects.',
    isApproved: true,
  },
  {
    id: 'managed-backup-frequency',
    question: 'How frequently are data backups taken and tested?',
    answer:
      'Backups are performed incrementally every few hours and fully on a daily basis with immutable cloud retention. We conduct automated weekly restoration tests to guarantee data recoverability.',
    isApproved: true,
  },
  {
    id: 'managed-security-audits',
    question: 'Do you help our company prepare for compliance audits (SOC2, HIPAA, ISO)?',
    answer:
      'Yes, we provide comprehensive security assessments, vulnerability scans, audit log exports, and remediation assistance to ensure your IT infrastructure passes SOC2, HIPAA, and ISO 27001 audits.',
    isApproved: true,
  },
];

