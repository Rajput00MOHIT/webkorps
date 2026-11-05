import mobileDevImg from '../../assets/services/services page/Mobile_app_development.png';
import mobileAppCustomImg from '../../assets/services/Custom software development /Mobile application development.png';
import serviceMobileImg from '../../assets/services/service-mobile.png';
import enterpriseImg from '../../assets/services/Custom software development /Enterprise software & platforms.png';
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

export const MOBILE_DEV_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'healthcare-telehealth',
    name: 'Healthcare & Telehealth',
    badge: 'HIPAA & HL7/FHIR',
    solutionTitle: 'Patient Telehealth Apps & Remote Vitals Monitoring',
    challenge:
      'Patients demand on-the-go medical access, but strict HIPAA compliance, mobile privacy risks, and Bluetooth pairing unreliability stall deployment.',
    engineering:
      'Webkorps engineers native iOS/Android telehealth apps with end-to-end encrypted video, background medical device telemetry, and automated FHIR syncing.',
    bulletPoints: [
      'Sub-second vital sign sync with continuous BLE wearable connectivity.',
      'Zero local storage of unencrypted PHI adhering to strict HIPAA rules.',
      'Over 90% patient adherence rate with automated smart medication notifications.',
    ],
  },
  {
    id: 'fintech-banking',
    name: 'FinTech & Digital Banking',
    badge: 'BANK-GRADE SECURITY',
    solutionTitle: 'High-Security Mobile Banking & Investment Wallets',
    challenge:
      'Financial mobile apps suffer from user drop-off due to clunky authentication flows and heightened vulnerability to mobile screen-overlay attacks.',
    engineering:
      'Webkorps implements biometric authentication (FaceID/Fingerprint), hardware-backed keystore encryption, and real-time mobile fraud telemetry.',
    bulletPoints: [
      'Sub-second biometric authorization for high-value financial transfers.',
      'Real-time runtime application self-protection (RASP) security defense.',
      'Maintained consistent 4.8+ App Store rating across 250,000+ active users.',
    ],
  },
  {
    id: 'ecommerce-retail',
    name: 'E-Commerce & Retail Loyalty',
    badge: 'OMNICHANNEL MOBILE',
    solutionTitle: 'Personalized Mobile Shopping & 1-Click Checkout',
    challenge:
      'Slow mobile catalog rendering, unoptimized asset bundles, and multi-step checkouts trigger high mobile cart abandonment rates.',
    engineering:
      'Webkorps builds lightning-fast React Native/Flutter commerce apps with Apple Pay/Google Pay, offline wishlists, and personalized push funnels.',
    bulletPoints: [
      '60fps fluid product browsing with local image pre-fetching and caching.',
      'Frictionless 1-click checkout cutting transaction completion time by 50%.',
      'Rich push messaging campaigns achieving 3.5x higher repeat conversion.',
    ],
  },
  {
    id: 'ondemand-logistics',
    name: 'On-Demand Delivery & Logistics',
    badge: 'REAL-TIME GPS',
    solutionTitle: 'Driver Dispatch, Fleet Telemetry & Order Tracking',
    challenge:
      'Battery-draining GPS polling, inaccurate location breadcrumbs, and dropped mobile connections in dead zones cause delivery bottlenecks.',
    engineering:
      'Webkorps develops intelligent background location engines with adaptive power consumption, offline queue sync, and real-time WebSocket routing.',
    bulletPoints: [
      '30% reduction in mobile battery draw using adaptive movement sensors.',
      'Accurate real-time driver breadcrumbs with sub-second ETA updates.',
      'Offline-first digital signature and photo proof-of-delivery capture.',
    ],
  },
  {
    id: 'iot-smart-devices',
    name: 'Smart IoT & Field Services',
    badge: 'BLE & INDUSTRIAL IOT',
    solutionTitle: 'Connected Device Controllers & Field Technician Apps',
    challenge:
      'Field technicians and IoT device owners encounter dropped connections, slow telemetry updates, and difficult device provisioning workflows.',
    engineering:
      'Webkorps creates companion mobile apps with QR code instant provisioning, encrypted Bluetooth mesh pairing, and offline work-order management.',
    bulletPoints: [
      'Under 10-second smart hardware onboarding via BLE and NFC pairing.',
      'Offline-capable equipment diagnostics and automated work-order syncing.',
      'Over-the-air (OTA) firmware upgrade initiation from native mobile controls.',
    ],
  },
];

export const MOBILE_DEV_SOLUTIONS: SolutionCardItem[] = [
  {
    id: 'consumer-on-demand',
    number: '01',
    title: 'Consumer & on-demand apps',
    description: 'High-engagement mobile apps with geolocation, push alerts, and instant ordering.',
  },
  {
    id: 'enterprise-workforce',
    number: '02',
    title: 'Enterprise field & workforce apps',
    description: 'Mobile CRM, task tracking, offline-first data sync, and field dispatch systems.',
  },
  {
    id: 'fintech-payments',
    number: '03',
    title: 'Mobile commerce & FinTech',
    description: 'Secure in-app payments, biometric authentication, digital wallets, and mobile checkout.',
  },
  {
    id: 'healthcare-telehealth',
    number: '04',
    title: 'Healthcare & telehealth apps',
    description: 'HIPAA-compliant patient portals, doctor scheduling, vitals tracking, and messaging.',
  },
  {
    id: 'iot-smart-device',
    number: '05',
    title: 'IoT & smart device companion apps',
    description: 'BLE connectivity, real-time sensor visualization, and smart device controls.',
  },
  {
    id: 'social-community',
    number: '06',
    title: 'Social & community platforms',
    description: 'Interactive feeds, media sharing, real-time messaging, and community engagement.',
  },
];

export const MOBILE_DEV_OUTCOMES: OutcomeItem[] = [
  {
    id: 'user-retention',
    number: '01',
    title: 'Intuitive 60fps Experience',
    description: 'Deliver responsive, fluid mobile interactions that delight users and maximize retention rates.',
    image: automateImg,
    imageAlt: 'High performance mobile user experience 3D illustration',
  },
  {
    id: 'cross-platform',
    number: '02',
    title: 'Cross-Platform Velocity',
    description: 'Reach both iOS and Android audiences simultaneously with Flutter & React Native without code compromise.',
    image: smarterDecisionsImg,
    imageAlt: 'Cross platform mobile engineering 3D illustration',
  },
  {
    id: 'offline-sync',
    number: '03',
    title: 'Offline-First Resilience',
    description: 'Keep apps fully functional offline with intelligent local caching and seamless cloud synchronization.',
    image: seamlessExpImg,
    imageAlt: 'Offline first mobile synchronization 3D illustration',
  },
  {
    id: 'biometric-security',
    number: '04',
    title: 'Bank-Grade Mobile Security',
    description: 'Implement biometric authentication, end-to-end data encryption, and full App Store compliance.',
    image: scaleLimitsImg,
    imageAlt: 'Bank grade mobile app security 3D illustration',
  },
];

export const MOBILE_DEV_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'ios-dev',
    number: '01',
    title: 'Native iOS Development',
    description:
      'We craft bespoke native iOS apps using Swift and SwiftUI, fully aligned with Apple Human Interface Guidelines and integrated with CoreML, Apple Pay, and TestFlight CI/CD pipelines.',
    image: mobileDevImg,
    imageAlt: 'Native iOS application development 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'android-dev',
    number: '02',
    title: 'Native Android Development',
    description:
      'Deliver fluid, robust Android experiences built with Kotlin and Jetpack Compose, optimized for millions of diverse device form factors, tablets, and Google Play ecosystem guidelines.',
    image: mobileAppCustomImg,
    imageAlt: 'Native Android mobile development 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'cross-platform-apps',
    number: '03',
    title: 'Flutter & React Native Apps',
    description:
      'Accelerate your product launch with single-codebase cross-platform architectures that deliver near-native performance, rapid feature parity, and cost-efficient maintenance.',
    image: serviceMobileImg,
    imageAlt: 'Cross-platform Flutter and React Native mobile development 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'enterprise-mobile',
    number: '04',
    title: 'Enterprise Mobile Solutions',
    description:
      'Empower mobile workforces and field teams with secure corporate mobile portals, Mobile Device Management (MDM) integration, and role-governed internal apps.',
    image: enterpriseImg,
    imageAlt: 'Enterprise mobile software and workforce tools 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'mobile-backend-apis',
    number: '05',
    title: 'Mobile Backend & APIs',
    description:
      'Architect elastic cloud backends, microservices, and GraphQL/REST APIs powering push notifications, real-time messaging, geo-location, and high-frequency data sync.',
    image: integrationsImg,
    imageAlt: 'Mobile backend API architecture and cloud synchronization 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'app-modernization',
    number: '06',
    title: 'App Maintenance & Store CI/CD',
    description:
      'Keep your apps updated, secure, and compliant with ongoing OS upgrades, crash analytics monitoring, performance tuning, and automated App Store/Play Store deployments.',
    image: cloudDevopsImg,
    imageAlt: 'Mobile app store continuous delivery and maintenance 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

export const MOBILE_DEV_FAQS: FAQItemData[] = [
  {
    id: 'mobile-native-vs-cross',
    question: 'Should we choose native (Swift/Kotlin) or cross-platform (Flutter/React Native)?',
    answer:
      'Native is ideal for apps requiring deep OS hardware integration, heavy AR/3D graphics, or maximum device-specific optimization. Cross-platform is excellent for fast time-to-market, unified codebase efficiency, and cost savings across both platforms.',
    isApproved: true,
  },
  {
    id: 'mobile-store-submission',
    question: 'Do you manage Apple App Store and Google Play Store submissions?',
    answer:
      'Yes, we manage the complete publishing lifecycle including certificate provisioning, metadata setup, screenshot design, review guidelines compliance, and post-launch updates.',
    isApproved: true,
  },
  {
    id: 'mobile-offline-data',
    question: 'Can your mobile applications work when offline?',
    answer:
      'Yes, we architect offline-first mobile apps with local SQLite/Realm storage and robust conflict-resolution algorithms that automatically sync data when internet connectivity is restored.',
    isApproved: true,
  },
  {
    id: 'mobile-security-compliance',
    question: 'How do you secure mobile apps and sensitive user data?',
    answer:
      'We implement biometric auth (FaceID/Fingerprint), keychain/keystore encryption, SSL certificate pinning, obfuscated builds, and strict adherence to GDPR and HIPAA standards.',
    isApproved: true,
  },
  {
    id: 'mobile-post-launch-support',
    question: 'What ongoing maintenance and support do you provide post-launch?',
    answer:
      'We offer continuous SLA-backed support including iOS/Android OS compatibility updates, crash monitoring, bug remediation, security patches, and performance optimization.',
    isApproved: true,
  },
];
