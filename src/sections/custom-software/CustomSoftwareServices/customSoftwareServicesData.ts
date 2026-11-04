import discoveryImg from '../../../assets/services/Custom software development /Product discovery & strategy.png';
import webAppsImg from '../../../assets/services/Custom software development /Custom web applications.png';
import mobileAppsImg from '../../../assets/services/Custom software development /Mobile application development.png';
import enterpriseImg from '../../../assets/services/Custom software development /Enterprise software & platforms.png';
import cloudDevopsImg from '../../../assets/services/Custom software development /Cloud & DevOps solutions.png';
import integrationsImg from '../../../assets/services/Custom software development /Integrations, APIs & legacy modernization.png';

export interface CustomSoftwareServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: any;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const CUSTOM_SOFTWARE_SERVICES: CustomSoftwareServiceItem[] = [
  {
    id: 'product-discovery',
    number: '01',
    title: 'Product discovery & strategy',
    description:
      'Validate your idea, define requirements, and build a clear roadmap for success.',
    image: discoveryImg,
    imageAlt: '3D illustration representing product discovery and strategic digital planning',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'custom-web-apps',
    number: '02',
    title: 'Custom web applications',
    description:
      'Build high-performance, scalable web applications tailored to your business needs.',
    image: webAppsImg,
    imageAlt: '3D illustration representing high performance modern web applications',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'mobile-app-dev',
    number: '03',
    title: 'Mobile application development',
    description:
      'Build engaging iOS and Android apps that connect your business with users.',
    image: mobileAppsImg,
    imageAlt: '3D illustration representing iOS and Android cross-platform mobile apps',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'enterprise-software',
    number: '04',
    title: 'Enterprise software & platforms',
    description:
      'Streamline complex operations with enterprise-ready digital solutions.',
    image: enterpriseImg,
    imageAlt: '3D illustration representing scalable enterprise software architecture and operations',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'cloud-devops',
    number: '05',
    title: 'Cloud & DevOps solutions',
    description:
      'Scale securely with cloud-native applications built for performance and flexibility.',
    image: cloudDevopsImg,
    imageAlt: '3D illustration representing cloud infrastructure, DevOps CI/CD and security',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'integrations-legacy',
    number: '06',
    title: 'Integrations, APIs & legacy modernization',
    description:
      'Connect your software with third-party systems and modernize legacy applications.',
    image: integrationsImg,
    imageAlt: '3D illustration representing API integrations and legacy system modernization',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

