import cloudAppImg from '../../assets/services/services page/Cloud_application_development.png';
import cloudDevopsImg from '../../assets/services/Custom software development /Cloud & DevOps solutions.png';
import enterpriseImg from '../../assets/services/Custom software development /Enterprise software & platforms.png';
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

export const CLOUD_APP_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'fintech-banking',
    name: 'FinTech & Banking',
    badge: 'PCI-DSS & SOC 2',
    solutionTitle: 'High-Resilience Multi-Region Financial Clouds',
    challenge:
      'Financial services struggle with legacy on-prem infrastructure failing strict compliance audits and suffering downtime during market volatility.',
    engineering:
      'Webkorps provisions active-active multi-region cloud environments with Terraform, encrypted secret vaults, and automated compliance posture management.',
    bulletPoints: [
      'Sub-50ms cross-region failover with zero financial transaction loss.',
      'Automated SOC 2 Type II and PCI-DSS compliance evidence generation.',
      'Enforced zero-trust network boundaries and ephemeral IAM credentials.',
    ],
  },
  {
    id: 'healthcare-medtech',
    name: 'Healthcare & MedTech',
    badge: 'HIPAA & HITRUST',
    solutionTitle: 'HIPAA-Compliant Cloud Infrastructure & Data Lakes',
    challenge:
      'Massive imaging files and genomic datasets require elastic compute and storage without violating strict patient privacy laws.',
    engineering:
      'Webkorps builds compliant cloud data lakes with automated KMS encryption, VPC endpoint isolation, and immutable audit access logs.',
    bulletPoints: [
      'Encrypted PHI storage pools with granular row-level access control.',
      'Auto-scaling serverless pipelines for distributed medical data processing.',
      '100% audit pass rate under third-party HIPAA security assessments.',
    ],
  },
  {
    id: 'enterprise-saas',
    name: 'Enterprise SaaS Platforms',
    badge: 'MULTI-TENANT K8S',
    solutionTitle: 'Elastic Kubernetes Clusters & Global CDN Edge',
    challenge:
      'Global SaaS expansion leads to noisy neighbor compute issues, ballooning infrastructure costs, and latency spikes across regions.',
    engineering:
      'Webkorps implements Kubernetes (EKS/GKE) with horizontal pod autoscaling, tenant isolation, and FinOps cloud cost optimization.',
    bulletPoints: [
      '40% reduction in monthly cloud infrastructure spend via FinOps rightsizing.',
      'Zero-downtime rolling blue-green deployments across all environments.',
      'Automated global traffic routing via Anycast DNS and edge caching.',
    ],
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-Commerce',
    badge: 'FLASH-SALE SCALE',
    solutionTitle: 'Autoscaling Serverless Architectures for Peak Retail',
    challenge:
      'Black Friday traffic surges overwhelm fixed compute servers, causing catastrophic checkout downtime and revenue loss.',
    engineering:
      'Webkorps architects event-driven serverless systems with AWS Lambda/Cloud Functions, Redis caching, and decoupled SQS messaging.',
    bulletPoints: [
      'Handles 10x traffic surges with zero manual infrastructure intervention.',
      'Sub-20ms database read latency using distributed Redis cache tiers.',
      'Real-time inventory deduction pipeline preventing over-selling.',
    ],
  },
  {
    id: 'media-streaming',
    name: 'Media & Streaming Services',
    badge: 'LOW-LATENCY CDN',
    solutionTitle: 'High-Throughput Video Ingestion & Global CDN Delivery',
    challenge:
      'High bandwidth egress fees and buffering playback experiences degrade viewer retention across international geographic regions.',
    engineering:
      'Webkorps configures multi-CDN routing, automated video transcoding pipelines, and edge computing for ultra-low latency playback.',
    bulletPoints: [
      'Global video startup time reduced under 800ms across 40+ countries.',
      'Automated cloud transcoding workflows utilizing spot instances.',
      'Real-time Quality of Experience (QoE) playback telemetry dashboards.',
    ],
  },
];

export const CLOUD_APP_SOLUTIONS: SolutionCardItem[] = [
  {
    id: 'cloud-native-microservices',
    number: '01',
    title: 'Cloud-native microservices',
    description: 'Modular, independently deployable services built with Docker, Kubernetes, and gRPC.',
  },
  {
    id: 'serverless-architectures',
    number: '02',
    title: 'Serverless architectures',
    description: 'Event-driven architectures with zero server maintenance and auto-scaling compute.',
  },
  {
    id: 'multi-cloud-hybrid',
    number: '03',
    title: 'Multi-cloud & hybrid deployments',
    description: 'Resilient cloud infrastructure spanning AWS, GCP, and Azure avoiding vendor lock-in.',
  },
  {
    id: 'cloud-migration-modernization',
    number: '04',
    title: 'Cloud migration & modernization',
    description: 'Zero-downtime database and monolithic workload replatforming to modern cloud.',
  },
  {
    id: 'automated-devops-iac',
    number: '05',
    title: 'Automated CI/CD & DevOps IaC',
    description: 'Infrastructure as Code (Terraform), blue-green deployments, and automated testing.',
  },
  {
    id: 'disaster-recovery-backup',
    number: '06',
    title: 'Disaster recovery & high availability',
    description: 'Multi-region replication, continuous automated backups, and instant failover protocols.',
  },
];

export const CLOUD_APP_OUTCOMES: OutcomeItem[] = [
  {
    id: 'cloud-resilience',
    number: '01',
    title: '99.99% High Availability',
    description: 'Engineer fault-tolerant multi-zone failovers, auto-healing clusters, and zero-data-loss disaster recovery.',
    image: automateImg,
    imageAlt: 'High availability cloud infrastructure 3D illustration',
  },
  {
    id: 'cicd-velocity',
    number: '02',
    title: 'Rapid Deployment Velocity',
    description: 'Accelerate release frequency from months to hours with fully automated infrastructure as code (IaC) pipelines.',
    image: smarterDecisionsImg,
    imageAlt: 'Automated CI/CD cloud deployment velocity 3D illustration',
  },
  {
    id: 'cost-optimization',
    number: '03',
    title: 'Cloud Cost Optimization',
    description: 'Slash unnecessary cloud expenditure through intelligent resource rightsizing, auto-scaling, and FinOps practices.',
    image: seamlessExpImg,
    imageAlt: 'FinOps cloud cost optimization 3D illustration',
  },
  {
    id: 'zero-trust-sec',
    number: '04',
    title: 'Zero-Trust Cloud Security',
    description: 'Enforce strict IAM least-privilege policies, automated security audits, and SOC2/HIPAA compliance.',
    image: scaleLimitsImg,
    imageAlt: 'Zero-trust cloud security and compliance 3D illustration',
  },
];

export const CLOUD_APP_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'cloud-native-microservices',
    number: '01',
    title: 'Cloud-Native & Microservices',
    description:
      'Break free from rigid monoliths. We design loosely coupled microservices architectures managed via Kubernetes and Docker for high resilience and rapid feature deployment.',
    image: cloudAppImg,
    imageAlt: 'Cloud-native microservices architecture 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'cloud-migration',
    number: '02',
    title: 'Cloud Migration & Modernization',
    description:
      'Seamlessly migrate on-premises workloads or outdated hosts to AWS, Google Cloud, or Azure with structured re-platforming strategies that guarantee minimal downtime.',
    image: cloudDevopsImg,
    imageAlt: 'Enterprise cloud migration 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'devops-iac',
    number: '03',
    title: 'DevOps & Infrastructure as Code',
    description:
      'Automate your infrastructure provisioning with Terraform, Ansible, and Helm. We build reliable CI/CD delivery pipelines ensuring continuous test-driven deployment.',
    image: integrationsImg,
    imageAlt: 'DevOps and automated infrastructure delivery 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'serverless-computing',
    number: '04',
    title: 'Serverless & Event-Driven Systems',
    description:
      'Build responsive event-driven microservices using AWS Lambda, Google Cloud Run, and Azure Functions that only incur costs when code is actively executing.',
    image: discoveryImg,
    imageAlt: 'Serverless computing and event-driven architecture 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'security-compliance',
    number: '05',
    title: 'Cloud Governance & Security',
    description:
      'Protect mission-critical data with granular IAM policies, automated network segmentation, secrets management via HashiCorp Vault, and continuous audit readiness.',
    image: enterpriseImg,
    imageAlt: 'Cloud governance, security and compliance 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'finops-optimization',
    number: '06',
    title: 'FinOps & Performance Optimization',
    description:
      'Gain full visibility into cloud costs. We audit compute usage, configure auto-scaling policies, and eliminate zombie resources to maximize infrastructure ROI.',
    image: customSoftwareImg,
    imageAlt: 'FinOps cloud performance and cost optimization 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

export const CLOUD_APP_FAQS: FAQItemData[] = [
  {
    id: 'cloud-platforms-supported',
    question: 'Which cloud providers and platforms do you support?',
    answer:
      'We hold deep certified expertise across Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure, along with hybrid and private cloud configurations.',
    isApproved: true,
  },
  {
    id: 'cloud-downtime-migration',
    question: 'How do you minimize downtime during a live cloud migration?',
    answer:
      'We use phased migration methodologies, blue-green deployment strategies, and continuous data synchronization to ensure zero or negligible downtime for end users during cutover.',
    isApproved: true,
  },
  {
    id: 'cloud-security-compliance',
    question: 'How do you ensure data security and compliance in the cloud?',
    answer:
      'We enforce end-to-end data encryption (at rest and in transit), least-privilege IAM policies, automated patch management, and architectures designed for SOC2, HIPAA, and GDPR compliance.',
    isApproved: true,
  },
  {
    id: 'cloud-cost-savings',
    question: 'How does Webkorps help reduce cloud hosting costs?',
    answer:
      'Through our FinOps audit, we identify idle resources, implement container packing, rightsize compute instances, leverage reserved/spot instances, and introduce automated auto-scaling.',
    isApproved: true,
  },
  {
    id: 'cloud-monitoring-slas',
    question: 'What monitoring and ongoing operational support do you provide?',
    answer:
      'We implement 24/7 observability using Datadog, Prometheus, Grafana, and cloud-native alerts with strict SLAs, incident response runbooks, and proactive capacity planning.',
    isApproved: true,
  },
];

