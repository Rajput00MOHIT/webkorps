export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  items: ServiceItem[];
}

export interface ImpactStats {
  title: string;
  highlight: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface TechnologyItem {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
}

export interface InsightItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  href: string;
}

export interface CaseStudyNavItem {
  id: string;
  client: string;
  category: string;
  title: string;
  description: string;
  href: string;
}

export type ActiveMenuType = 'services' | 'industries' | 'case-studies' | 'technologies' | 'insights' | null;

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'core-mobile',
    name: 'CORE & MOBILE',
    items: [
      {
        id: 'ai-ml',
        title: 'AI-ML Solutions',
        description: 'Intelligent automation, predictive insights, and AI-powered innovation.',
        href: '/services',
      },
      {
        id: 'mobile-dev',
        title: 'Mobile App Development',
        description: 'Deliver intuitive mobile experiences that connect users across platforms.',
        href: '/services',
      },
      {
        id: 'web-dev',
        title: 'Web Development',
        description: 'Build fast, secure, and scalable web applications tailored to your goals.',
        href: '/services',
      },
      {
        id: 'custom-software',
        title: 'Custom Software Development',
        description: 'Custom software built to solve unique business challenges and operations.',
        href: '/services',
      },
    ],
  },
  {
    id: 'enterprise-cloud',
    name: 'ENTERPRISE & CLOUD',
    items: [
      {
        id: 'enterprise-software',
        title: 'Enterprise Software Development',
        description: 'Streamline complex workflows with secure, scalable enterprise software.',
        href: '/services',
      },
      {
        id: 'cloud-app',
        title: 'Cloud Solutions',
        description: 'Modernize infrastructure, automate delivery, and build resilient cloud systems.',
        href: '/services',
      },
      {
        id: 'iot',
        title: 'IoT Solutions',
        description: 'Connect devices and systems to enable real-time monitoring and smarter operations.',
        href: '/technologies',
      },
      {
        id: 'staff-aug',
        title: 'IT Staff Augmentation',
        description: 'Empower your projects with high-caliber technology professionals on demand.',
        href: '/contact-us',
      },
    ],
  },
  {
    id: 'specialized-commerce',
    name: 'SPECIALIZED & COMMERCE',
    items: [
      {
        id: 'managed-it',
        title: 'Managed IT Services',
        description: 'Reliable IT management for seamless operations and infrastructure health.',
        href: '/contact-us',
      },
      {
        id: 'salesforce',
        title: 'Salesforce Development',
        description: 'Empowering businesses with customized CRM and Salesforce solutions.',
        href: '/contact-us',
      },
      {
        id: 'ecommerce',
        title: 'E-commerce Solutions',
        description: 'Create seamless digital shopping experiences designed to improve conversions.',
        href: '/services',
      },
      {
        id: 'blockchain',
        title: 'Blockchain Solutions',
        description: 'Enable transparent, traceable, and secure digital transactions and workflows.',
        href: '/services',
      },
    ],
  },
];

export const IMPACT_DATA: ImpactStats = {
  title: 'OUR IMPACT',
  highlight: '10+ Years of Digital Excellence',
  description: 'Trusted by 350+ satisfied clients across 30+ countries worldwide.',
  stats: [
    {
      value: '500+',
      label: 'Products Delivered',
    },
    {
      value: '250+',
      label: 'Technology Experts',
    },
  ],
};

export const INDUSTRIES_NAV_DATA: IndustryItem[] = [
  {
    id: 'logistic',
    title: 'Logistics',
    description: 'Improve shipment visibility and coordinate supply chain workflows.',
    href: '/industries',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Enhance patient care and clinical workflows with secure digital solutions.',
    href: '/industries',
  },
  {
    id: 'fintech',
    title: 'Fintech',
    description: 'Strengthen financial operations and enhance transaction security.',
    href: '/industries',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Simplify property management and streamline operations with connected tech.',
    href: '/industries',
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'Create seamless customer shopping journeys and modern digital retail.',
    href: '/industries',
  },
  {
    id: 'travel',
    title: 'Travel and Hospitality',
    description: 'Enhance guest journeys and booking operations with connected digital systems.',
    href: '/industries',
  },
  {
    id: 'warehouse',
    title: 'Warehouse',
    description: 'Optimize fulfillment, inventory tracking, and warehouse automation.',
    href: '/industries',
  },
];

export const TECHNOLOGIES_NAV_DATA: TechnologyItem[] = [
  {
    id: 'ai-ml-tech',
    category: 'INTELLIGENCE',
    title: 'AI & Machine Learning',
    description: 'Generative AI, neural models, NLP engines, and intelligent computer vision.',
    href: '/technologies',
  },
  {
    id: 'cloud-devops',
    category: 'INFRASTRUCTURE',
    title: 'Cloud & DevOps Engineering',
    description: 'AWS, Azure, Google Cloud multi-region architectures with automated CI/CD.',
    href: '/technologies',
  },
  {
    id: 'iot-tech',
    category: 'CONNECTED SYSTEMS',
    title: 'Industrial IoT Systems',
    description: 'Sensor pipelines, edge computing, and real-time remote equipment monitoring.',
    href: '/technologies',
  },
  {
    id: 'cybersecurity',
    category: 'SECURITY & TRUST',
    title: 'Enterprise Cyber Security',
    description: 'Zero-trust architecture, threat surface analysis, and ISO 27001 compliance.',
    href: '/technologies',
  },
  {
    id: 'blockchain-tech',
    category: 'DECENTRALIZED',
    title: 'Blockchain & Smart Contracts',
    description: 'Enterprise ledger networks, cryptographic verification, and tokenized assets.',
    href: '/technologies',
  },
  {
    id: 'data-analytics',
    category: 'DATA INSIGHTS',
    title: 'Big Data & Power BI',
    description: 'Predictive intelligence dashboards, warehouse pipelines, and executive BI.',
    href: '/technologies',
  },
];

export const INSIGHTS_NAV_DATA: InsightItem[] = [
  {
    id: 'insight-1',
    category: 'INDUSTRIAL IOT',
    title: 'How Industrial IoT is Revolutionizing Modern Manufacturing Plants',
    readTime: '5 min read',
    href: '/insights',
  },
  {
    id: 'insight-2',
    category: 'ENTERPRISE AI',
    title: 'Building Resilient Generative AI Systems for Regulated Industries',
    readTime: '7 min read',
    href: '/insights',
  },
  {
    id: 'insight-3',
    category: 'DATA & ANALYTICS',
    title: 'Transforming Raw Enterprise Data into Real-Time Strategic Power BI Dashboards',
    readTime: '6 min read',
    href: '/insights',
  },
];

export interface InsightEventItem {
  id: string;
  badge: string;
  date: string;
  title: string;
  description: string;
  href: string;
}

export const INSIGHT_EVENTS_DATA: InsightEventItem[] = [
  {
    id: 'event-1',
    badge: 'WEBINAR',
    date: 'Oct 24, 2026',
    title: 'Architecting Enterprise AI Agents for Production Scale',
    description: 'Deep dive into LLM deployment, latency optimization, and enterprise security patterns.',
    href: '/insights',
  },
  {
    id: 'event-2',
    badge: 'GLOBAL SUMMIT',
    date: 'Nov 12, 2026',
    title: 'Cloud-Native & Distributed Systems World Summit',
    description: 'Keynotes and engineering sessions on modern multi-cloud resilience.',
    href: '/insights',
  },
  {
    id: 'event-3',
    badge: 'ROUNDTABLE',
    date: 'Dec 05, 2026',
    title: 'Industrial IoT & Predictive Telemetry Executive Forum',
    description: 'Strategies for zero unplanned downtime with edge computing and smart sensors.',
    href: '/insights',
  },
];

export const CASE_STUDIES_NAV_DATA: CaseStudyNavItem[] = [
  {
    id: 'cigna',
    client: 'Cigna Health',
    category: 'HEALTHCARE',
    title: 'Integrated Telehealth & Smart Patient Scheduling Portal',
    description: 'HIPAA-compliant web platform serving 4M+ members with real-time appointment sync.',
    href: '/case-studies',
  },
  {
    id: 'paypal',
    client: 'PayPal / Braintree',
    category: 'FINTECH',
    title: 'High-Throughput Global Payment Engine & Tokenization',
    description: 'Zero-latency fault-tolerant merchant processing architecture supporting 10K TPS.',
    href: '/case-studies',
  },
  {
    id: 'acima',
    client: 'Acima Credit',
    category: 'LENDING & E-COMMERCE',
    title: 'Omnichannel POS Lending Platform & Instant Credit Engine',
    description: 'Underwriting decision microservices reducing approval cycle to under 3 seconds.',
    href: '/case-studies',
  },
  {
    id: 'cryoport',
    client: 'Cryoport Systems',
    category: 'SUPPLY CHAIN & IOT',
    title: 'Global Biopharma Cold-Chain Telemetry & Condition Tracking',
    description: 'Sub-minute cellular IoT telemetry monitoring life-saving cellular therapies.',
    href: '/case-studies',
  },
];
