import webAppsImg from '../../assets/services/Custom software development /Custom web applications.png';
import enterpriseImg from '../../assets/services/Custom software development /Enterprise software & platforms.png';
import webDevImg from '../../assets/services/services page/web development.png';
import discoveryImg from '../../assets/services/Custom software development /Product discovery & strategy.png';
import integrationsImg from '../../assets/services/Custom software development /Integrations, APIs & legacy modernization.png';
import cloudDevopsImg from '../../assets/services/Custom software development /Cloud & DevOps solutions.png';

import automateImg from '../../assets/services/business-outcomes/automate-operations.png';
import smarterDecisionsImg from '../../assets/services/business-outcomes/smarter-decisions.png';
import seamlessExpImg from '../../assets/services/business-outcomes/seamless-experiences.png';
import scaleLimitsImg from '../../assets/services/business-outcomes/scale-without-limits.png';

import type { OutcomeItem } from '../../components/ServiceOutcomes';
import type { CapabilityItem } from '../../components/ServiceCapabilities';
import type { FAQItemData } from '../../sections/home/FAQ/faqData';
import type { SolutionCardItem } from '../../sections/custom-software/SoftwareForEveryBusiness';
import type { DomainSolutionItem } from '../../components/DomainSpecificSolutions';

export const WEB_DEV_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'saas-tech',
    name: 'SaaS & Technology Platforms',
    badge: 'SOC 2 COMPLIANT',
    solutionTitle: 'Multi-Tenant SaaS Web Applications & Dashboards',
    challenge:
      'Growing SaaS products face performance bottlenecks, complex state management, and slow page loads as customer datasets expand.',
    engineering:
      'Webkorps architects Next.js SSR and micro-frontend architectures with tenant-isolated data routing, optimized edge caching, and real-time WebSockets.',
    bulletPoints: [
      'Engineered sub-second dashboard rendering for enterprise analytics.',
      'Achieved 99.99% web uptime with zero-downtime rolling deployments.',
      'Enforced SOC 2 and OAuth2/SAML single sign-on authentication.',
    ],
  },
  {
    id: 'ecommerce-retail',
    name: 'E-Commerce & Digital Marketplaces',
    badge: 'PCI-DSS VALIDATED',
    solutionTitle: 'High-Throughput Headless Storefronts & Checkout Flows',
    challenge:
      'Traditional monolithic e-commerce platforms suffer from slow mobile response times and cart drop-offs during high-concurrency flash sales.',
    engineering:
      'Webkorps implements composable, headless web storefronts using modern frameworks, localized edge CDN caching, and frictionless checkout integrations.',
    bulletPoints: [
      'Sub-300ms product catalog search and instant filter indexing.',
      'Resilient serverless checkout pipeline handling thousands of orders per minute.',
      'Seamless multi-gateway payment processing with automated PCI-DSS compliance.',
    ],
  },
  {
    id: 'healthcare-telehealth',
    name: 'Healthcare & Telehealth Systems',
    badge: 'HIPAA COMPLIANT',
    solutionTitle: 'Secure Patient Portals & Clinical Consultation Hubs',
    challenge:
      'Patients face fragmented care scheduling and clinical staff waste hours manually coordinating records across disparate legacy EHR systems.',
    engineering:
      'Webkorps develops HIPAA-compliant web portals with accessible WCAG 2.1 AA interfaces, end-to-end encrypted telemetry, and HL7/FHIR EHR sync.',
    bulletPoints: [
      'Encrypted browser-based video consultation and real-time scheduling.',
      'Zero-retention ephemeral data caching adhering to strict HIPAA standards.',
      'Intuitive patient onboarding with 40% reduction in support queries.',
    ],
  },
  {
    id: 'fintech-banking',
    name: 'FinTech & Financial Portals',
    badge: 'BANK-GRADE ENCRYPTION',
    solutionTitle: 'Real-Time Financial Analytics & Wealth Management Portals',
    challenge:
      'Financial clients demand real-time portfolio tracking, multi-asset analytics, and uncompromising security against web session vulnerabilities.',
    engineering:
      'Webkorps delivers high-frequency financial web interfaces with streaming market feeds, rigorous CSP headers, and automated transaction verification.',
    bulletPoints: [
      'Sub-50ms data streaming using optimized binary WebSockets protocols.',
      'Multi-factor biometrics and hardware token web authentication.',
      'Audited audit-logging for financial regulatory compliance.',
    ],
  },
  {
    id: 'professional-services',
    name: 'Professional Services & Consulting',
    badge: 'ENTERPRISE WORKFLOWS',
    solutionTitle: 'Client Collaboration Extranets & Document Engines',
    challenge:
      'Consulting and legal firms struggle with chaotic email threads, unversioned client files, and lack of transparency into engagement progress.',
    engineering:
      'Webkorps engineers branded client portals with role-based access control (RBAC), collaborative document markup, and automated milestone tracking.',
    bulletPoints: [
      'Centralized client workspaces with granular permission tiers.',
      'Automated invoice generation and digital signature integration.',
      '35% improvement in client onboarding and deliverables turnaround.',
    ],
  },
];

export const WEB_DEV_SOLUTIONS: SolutionCardItem[] = [
  {
    id: 'corporate-portals',
    number: '01',
    title: 'Corporate & enterprise portals',
    description: 'Scalable corporate intranets, communication hubs, and digital workplaces.',
  },
  {
    id: 'customer-partner-portals',
    number: '02',
    title: 'Customer & partner portals',
    description: 'Secure self-service account management and authenticated client dashboards.',
  },
  {
    id: 'saas-web-platforms',
    number: '03',
    title: 'SaaS & cloud web platforms',
    description: 'Multi-tenant architectures, subscription billing, and high-availability web products.',
  },
  {
    id: 'high-traffic-ecommerce',
    number: '04',
    title: 'High-traffic e-commerce',
    description: 'Lightning-fast storefronts, seamless checkout flows, and catalog engines.',
  },
  {
    id: 'realtime-collaborative',
    number: '05',
    title: 'Real-time collaborative tools',
    description: 'Interactive dashboards, live messaging, WebSockets, and document workflows.',
  },
  {
    id: 'progressive-web-apps',
    number: '06',
    title: 'Progressive web apps (PWAs)',
    description: 'App-like web experiences with offline caching, push notifications, and speed.',
  },
];

export const WEB_DEV_OUTCOMES: OutcomeItem[] = [
  {
    id: 'performance',
    number: '01',
    title: 'Blazing Fast Performance',
    description: 'Optimize load times, Core Web Vitals, and responsive fluidity across all screen sizes.',
    image: automateImg,
    imageAlt: 'Fast web application performance and optimization 3D illustration',
  },
  {
    id: 'engagement',
    number: '02',
    title: 'Frictionless User Journey',
    description: 'Turn visitors into loyal customers with intuitive UX, accessibility, and smooth workflows.',
    image: smarterDecisionsImg,
    imageAlt: 'Intuitive user engagement and seamless web UX 3D illustration',
  },
  {
    id: 'security-scale',
    number: '03',
    title: 'Enterprise-Grade Security',
    description: 'Protect critical data with role-based auth, OWASP standards, and resilient cloud architecture.',
    image: seamlessExpImg,
    imageAlt: 'Enterprise web security and cloud resilience 3D illustration',
  },
  {
    id: 'scalable-growth',
    number: '04',
    title: 'Elastic Scalability',
    description: 'Deploy cloud-native infrastructure that handles traffic spikes without compromise.',
    image: scaleLimitsImg,
    imageAlt: 'Scalable cloud web architecture 3D illustration',
  },
];

export const WEB_DEV_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'custom-web-apps',
    number: '01',
    title: 'Custom Web Applications',
    description:
      'We engineer bespoke Single-Page Applications (SPAs) and Progressive Web Apps (PWAs) utilizing React, Next.js, and TypeScript for responsive, desktop-grade web experiences.',
    image: webAppsImg,
    imageAlt: 'Custom web application engineering 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'enterprise-portals',
    number: '02',
    title: 'Enterprise Web Portals',
    description:
      'Streamline business operations with secure internal dashboards, customer self-service portals, and role-based management platforms tailored to complex organizational workflows.',
    image: enterpriseImg,
    imageAlt: 'Enterprise web portal and operational dashboard 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'fullstack-engineering',
    number: '03',
    title: 'Full-Stack Modernization',
    description:
      'Transform outdated monolithic web systems into clean, modular micro-frontends and cloud-native services with zero downtime and improved development velocity.',
    image: webDevImg,
    imageAlt: 'Full-stack web modernization 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'frontend-design-systems',
    number: '04',
    title: 'UI/UX & Design Systems',
    description:
      'Establish cohesive design systems with reusable component libraries, WCAG 2.1 AA accessibility compliance, and delightful micro-interactions that elevate brand credibility.',
    image: discoveryImg,
    imageAlt: 'Frontend UI/UX design systems 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'backend-apis',
    number: '05',
    title: 'API Engineering & Integrations',
    description:
      'Design high-throughput REST and GraphQL APIs connecting your web frontend to payment gateways, CRMs, ERPs, and external partner systems securely.',
    image: integrationsImg,
    imageAlt: 'API engineering and system integrations 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'cloud-devops',
    number: '06',
    title: 'Cloud Deployment & DevOps',
    description:
      'Automate CI/CD pipelines, containerize workloads with Docker and Kubernetes, and deploy across AWS, GCP, and Azure with 99.99% uptime guarantees.',
    image: cloudDevopsImg,
    imageAlt: 'Cloud DevOps and automated delivery 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

export const WEB_DEV_FAQS: FAQItemData[] = [
  {
    id: 'web-tech-stack',
    question: 'Which technologies and frameworks do you use for web development?',
    answer:
      'We utilize modern, industry-standard technologies including Next.js, React, TypeScript, Vue.js, Node.js, Python, Ruby on Rails, PostgreSQL, MongoDB, Docker, and AWS/GCP cloud platforms.',
    isApproved: true,
  },
  {
    id: 'web-performance-seo',
    question: 'How do you ensure web applications are fast and SEO-friendly?',
    answer:
      'We leverage Server-Side Rendering (SSR), Static Site Generation (SSG), advanced caching, image optimization, and semantic HTML to score high on Google Core Web Vitals and search rankings.',
    isApproved: true,
  },
  {
    id: 'web-legacy-migration',
    question: 'Can you migrate or refactor our existing legacy web application?',
    answer:
      'Yes, we specialize in legacy modernization using incremental strangler patterns and micro-frontend architectures to modernize legacy platforms without disrupting live business operations.',
    isApproved: true,
  },
  {
    id: 'web-responsive-cross-browser',
    question: 'Will our web application work seamlessly across all devices and browsers?',
    answer:
      'Every web application is engineered with mobile-first responsive design, rigorously tested across all modern browsers (Chrome, Safari, Firefox, Edge) and screen resolutions.',
    isApproved: true,
  },
  {
    id: 'web-security-standards',
    question: 'How do you safeguard web platforms against security threats?',
    answer:
      'We implement OWASP Top 10 security protocols, TLS 1.3 encryption, secure JWT/OAuth2 authentication, automated vulnerability scanning, and strict role-based access control (RBAC).',
    isApproved: true,
  },
];
