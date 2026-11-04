import type { CaseStudyItem } from './CaseStudyCard';
import safexpressAsset from '../../../assets/case-studies/Safe-express.png';
import deepakFertilisersAsset from '../../../assets/case-studies/deepak fetilizer.png';
import cignaAsset from '../../../assets/case-studies/cigna.png';
import paypalAsset from '../../../assets/case-studies/paypal.png';
import canopieAsset from '../../../assets/case-studies/canopie.png';
import pebbleAsset from '../../../assets/case-studies/peble.png';

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'safexpress',
    client: 'Safexpress',
    description:
      'Manage bookings, deliveries, vehicle reporting, and hub activities seamlessly through one centralized platform.',
    categories: ['Website', 'Logistics', 'Supply Chain'],
    image: safexpressAsset,
    imageAlt: 'Safexpress centralized logistics and supply chain management platform on laptop',
    href: '/case-studies',
  },
  {
    id: 'deepak-fertilisers',
    client: 'Deepak Fertilisers',
    description:
      'Webkorps simplified RCA and MEP workflows with a smart, centralized digital solution that improved visibility, accountability, and team collaboration.',
    categories: ['Web Application', 'Manufacturing', 'Workflow Automation'],
    image: deepakFertilisersAsset,
    imageAlt: 'Deepak Fertilisers RCA and MEP workflow management dashboard on laptop',
    href: '/case-studies',
  },
  {
    id: 'cigna',
    client: 'Cigna',
    description:
      'Cigna is a health platform that connects patients with doctors for online consultations, appointments, records, and prescriptions across multiple medical specialties.',
    categories: ['Website', 'Healthcare', 'Health Solutions'],
    image: cignaAsset,
    imageAlt: 'Cigna healthcare platform interface displayed on a laptop screen',
    href: '/case-studies',
  },
  {
    id: 'paypal',
    client: 'PayPal',
    description:
      'PayPal partnered with Webkorps to enhance its payment platform with a smoother checkout experience, improved card payment capabilities, and secure, seamless online.',
    categories: ['Application', 'Payment Platform', 'Custom Application'],
    image: paypalAsset,
    imageAlt: 'PayPal payment platform mobile app interface displaying balance and transfer features',
    href: '/case-studies',
  },
  {
    id: 'canopie',
    client: 'Canopie',
    description:
      'Canopie is a digital mental health app for expecting and new mothers, offering personalized support during pregnancy and postpartum.',
    categories: ['Mental Health App', 'Healthcare', 'Website'],
    image: canopieAsset,
    imageAlt: 'Canopie mental health app interface displayed on a laptop screen',
    href: '/case-studies',
  },
  {
    id: 'pebble',
    client: 'Pebble',
    description:
      'Pebble partnered with Webkorps to create a custom smartwatch app that delivers notifications, fitness tracking, and personalized experiences.',
    categories: ['Application', 'Smartwatch App', 'Fitness Tracking'],
    image: pebbleAsset,
    imageAlt: 'Pebble smartwatch app interface featuring fitness tracking and personalized experiences',
    href: '/case-studies',
  },
];
