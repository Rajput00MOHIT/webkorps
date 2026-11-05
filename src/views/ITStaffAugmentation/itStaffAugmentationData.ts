import itStaffImg from '../../assets/services/services page/IT_Staff.png';
import discoveryImg from '../../assets/services/Custom software development /Product discovery & strategy.png';
import webAppsImg from '../../assets/services/Custom software development /Custom web applications.png';
import mobileAppsImg from '../../assets/services/Custom software development /Mobile application development.png';
import cloudDevopsImg from '../../assets/services/Custom software development /Cloud & DevOps solutions.png';
import enterpriseImg from '../../assets/services/Custom software development /Enterprise software & platforms.png';

import automateImg from '../../assets/services/business-outcomes/automate-operations.png';
import smarterDecisionsImg from '../../assets/services/business-outcomes/smarter-decisions.png';
import seamlessExpImg from '../../assets/services/business-outcomes/seamless-experiences.png';
import scaleLimitsImg from '../../assets/services/business-outcomes/scale-without-limits.png';

import type { OutcomeItem } from '../../components/ServiceOutcomes';
import type { CapabilityItem } from '../../components/ServiceCapabilities';
import type { FAQItemData } from '../../sections/home/FAQ/faqData';
import type { SolutionCardItem } from '../../sections/custom-software/SoftwareForEveryBusiness';

export const IT_STAFF_SOLUTIONS: SolutionCardItem[] = [
  {
    id: 'dedicated-engineering-squads',
    number: '01',
    title: 'Dedicated engineering squads',
    description: 'Cross-functional teams with tech leads, frontend, backend, and QA ready to execute.',
  },
  {
    id: 'senior-fullstack-devs',
    number: '02',
    title: 'Senior full-stack developers',
    description: 'Vetted senior developers proficient in modern stacks like React, Node, Python, and Go.',
  },
  {
    id: 'mobile-cloud-specialists',
    number: '03',
    title: 'Mobile & cloud specialists',
    description: 'Native iOS/Android engineers and certified AWS, GCP, and Azure cloud architects.',
  },
  {
    id: 'devops-sre-engineers',
    number: '04',
    title: 'DevOps & SRE engineers',
    description: 'Infrastructure automation, CI/CD pipelines, Kubernetes, and site reliability experts.',
  },
  {
    id: 'qa-automation-engineers',
    number: '05',
    title: 'QA & test automation specialists',
    description: 'Automation engineers proficient in Cypress, Playwright, Selenium, and performance tests.',
  },
  {
    id: 'project-surge-teams',
    number: '06',
    title: 'Project surge & scale teams',
    description: 'Rapid developer ramp-up to hit aggressive deadlines, product launches, or seasonal peaks.',
  },
];

export const IT_STAFF_OUTCOMES: OutcomeItem[] = [
  {
    id: 'rapid-onboarding',
    number: '01',
    title: '48-Hour Fast Onboarding',
    description: 'Bypass months of costly recruiting. Review pre-screened candidate profiles and onboard senior engineers in days.',
    image: automateImg,
    imageAlt: 'Fast IT staffing onboarding 3D illustration',
  },
  {
    id: 'top-tier-talent',
    number: '02',
    title: 'Top 2% Vetted Engineers',
    description: 'Every engineer undergoes thorough algorithmic coding tests, system design reviews, and English fluency evaluations.',
    image: smarterDecisionsImg,
    imageAlt: 'Top vetted engineering talent 3D illustration',
  },
  {
    id: 'seamless-collaboration',
    number: '03',
    title: 'Seamless Team Integration',
    description: 'Our engineers integrate directly into your daily standups, Jira sprints, Slack channels, and Git workflows.',
    image: seamlessExpImg,
    imageAlt: 'Seamless team integration and collaboration 3D illustration',
  },
  {
    id: 'elastic-scalability',
    number: '04',
    title: 'Zero Overhead & Flexibility',
    description: 'Scale headcount up or down based on product roadmaps with zero recruitment fees, payroll taxes, or long-term lock-in.',
    image: scaleLimitsImg,
    imageAlt: 'Elastic staffing scalability 3D illustration',
  },
];

export const IT_STAFF_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'dedicated-developers',
    number: '01',
    title: 'Dedicated Full-Stack Developers',
    description:
      'Augment your in-house squad with senior React, Next.js, Node.js, Python, Java, and .NET engineers dedicated 100% to your codebase and development velocity.',
    image: itStaffImg,
    imageAlt: 'Dedicated software developers 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'mobile-app-engineers',
    number: '02',
    title: 'Senior Mobile App Engineers',
    description:
      'Add seasoned native Swift, Kotlin, Flutter, and React Native mobile developers to accelerate iOS and Android app releases without hiring friction.',
    image: mobileAppsImg,
    imageAlt: 'Mobile engineering talent 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'cloud-devops-engineers',
    number: '03',
    title: 'Cloud & DevOps Specialists',
    description:
      'Fill critical infrastructure gaps with certified AWS, GCP, Azure, Kubernetes, Docker, and Terraform specialists who streamline deployment pipelines.',
    image: cloudDevopsImg,
    imageAlt: 'Cloud DevOps engineering specialists 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'qa-automation-testers',
    number: '04',
    title: 'QA & Test Automation Engineers',
    description:
      'Eliminate software defects with QA specialists skilled in Cypress, Playwright, Selenium, API performance benchmarking, and regression automation.',
    image: discoveryImg,
    imageAlt: 'QA and test automation engineers 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'dedicated-scrum-pods',
    number: '05',
    title: 'Managed Turnkey Scrum Pods',
    description:
      'Need an entire self-managed team? Deploy a dedicated cross-functional pod comprising a Product Manager, Tech Lead, Senior Developers, and QA Engineers.',
    image: enterpriseImg,
    imageAlt: 'Managed turnkey engineering scrum pods 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'principal-architects',
    number: '06',
    title: 'Fractional CTO & Architects',
    description:
      'Access senior technical leadership for high-stakes technology decisions, cloud migrations, security audits, and scalable system architecture blueprints.',
    image: webAppsImg,
    imageAlt: 'Principal software architects and CTO advisory 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

export const IT_STAFF_FAQS: FAQItemData[] = [
  {
    id: 'staff-how-fast-onboard',
    question: 'How quickly can augmented engineers start working on our project?',
    answer:
      'We match qualified pre-vetted candidates within 24 to 48 hours. After your direct technical interview, engineers can be fully onboarded within 3 to 5 business days.',
    isApproved: true,
  },
  {
    id: 'staff-timezone-overlap',
    question: 'Do your engineers work within our timezone and business hours?',
    answer:
      'Yes, our engineers guarantee minimum 4 to 5 hours of direct real-time working overlap with your time zone (US, UK, Europe, Australia) to ensure smooth communication and daily standups.',
    isApproved: true,
  },
  {
    id: 'staff-ip-ownership',
    question: 'Who owns the intellectual property (IP) and code created by augmented staff?',
    answer:
      'You retain 100% full ownership of all source code, technical assets, designs, and intellectual property developed during the engagement under strict NDA agreements.',
    isApproved: true,
  },
  {
    id: 'staff-trial-period',
    question: 'Is there a trial period to evaluate an engineer before committing?',
    answer:
      'Yes, we provide a 2-week risk-free trial period. If you are not completely satisfied with an engineer’s performance, we replace them immediately at no additional cost.',
    isApproved: true,
  },
  {
    id: 'staff-contract-flexibility',
    question: 'Can we scale up or scale down team size during our engagement?',
    answer:
      'Absolutely. Our engagements are completely elastic—you can add developers or ramp down team capacity with simple 30-day notice, giving you complete budget agility.',
    isApproved: true,
  },
];

