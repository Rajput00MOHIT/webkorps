import iotPageImg from '../../assets/services/services page/IOT.png';
import serviceIotImg from '../../assets/services/service-IOT.png';
import integrationsImg from '../../assets/services/Custom software development /Integrations, APIs & legacy modernization.png';
import cloudDevopsImg from '../../assets/services/Custom software development /Cloud & DevOps solutions.png';
import enterpriseImg from '../../assets/services/Custom software development /Enterprise software & platforms.png';
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

export const IOT_APP_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'industrial-manufacturing',
    name: 'Industrial Manufacturing & IIoT',
    badge: 'PREDICTIVE IIOT',
    solutionTitle: 'Factory Telemetry & Machine Health Monitoring',
    challenge:
      'Unplanned CNC and conveyor line breakdowns halt manufacturing shifts and cost industrial operators tens of thousands per hour.',
    engineering:
      'Webkorps integrates vibration, thermal, and acoustic IoT sensor hubs with edge gateways streaming to automated anomaly forecasting models.',
    bulletPoints: [
      'Identifies machine anomalies up to 72 hours before catastrophic failure.',
      'Edge-processed telemetry reducing cloud bandwidth consumption by 65%.',
      'Unified Modbus, OPC-UA, and MQTT protocol gateway bridges.',
    ],
  },
  {
    id: 'smart-buildings-energy',
    name: 'Smart Buildings & Utilities',
    badge: 'SMART ENERGY',
    solutionTitle: 'Intelligent HVAC & Sub-Metering Energy Management',
    challenge:
      'Commercial real estate portfolios suffer from excessive energy waste and manual utility meter inspections across multiple properties.',
    engineering:
      'Webkorps develops centralized IoT building management platforms linking smart thermostats, occupancy sensors, and smart power meters.',
    bulletPoints: [
      '25% reduction in overall building HVAC energy expenditure.',
      'Automated tenant sub-metering and billing reconciliation.',
      'Instant leak detection and environmental hazard alert dispatching.',
    ],
  },
  {
    id: 'cold-chain-logistics',
    name: 'Cold-Chain & Fleet Logistics',
    badge: 'PRECISION TELEMETRY',
    solutionTitle: 'Refrigerated Cargo Telemetry & Geo-Tracking',
    challenge:
      'Temperature excursions and spoilage during refrigerated food and pharmaceutical transport result in catastrophic compliance write-offs.',
    engineering:
      'Webkorps provisions cellular and satellite IoT sensors logging temperature, humidity, and door-opening telemetry with real-time geofences.',
    bulletPoints: [
      'Continuous calibrated sensor logging meeting FDA 21 CFR Part 11 rules.',
      'Instant automated driver alerts upon ambient temperature drift.',
      'Proof-of-temperature digital compliance manifests upon cargo handover.',
    ],
  },
  {
    id: 'connected-healthcare',
    name: 'Connected Healthcare & Wearables',
    badge: 'HIPAA & FDA READY',
    solutionTitle: 'Internet of Medical Things (IoMT) Patient Gateways',
    challenge:
      'Remote chronic patient monitoring requires continuous sensor capture without draining wearable battery life or compromising patient data privacy.',
    engineering:
      'Webkorps architects secure IoMT pipelines with BLE medical sensors, patient gateway hubs, and encrypted HL7/FHIR EHR data ingestion.',
    bulletPoints: [
      'Sub-second telemetry transmission for vitals, SpO2, and cardiac metrics.',
      'Bank-grade hardware root-of-trust encryption on all edge medical devices.',
      'Proactive clinical alert thresholds notifying on-call physician teams.',
    ],
  },
  {
    id: 'smart-agriculture',
    name: 'Smart Agriculture & Farming',
    badge: 'AGRITECH IOT',
    solutionTitle: 'Soil Moisture Telemetry & Automated Irrigation',
    challenge:
      'Agricultural producers battle unpredictable weather and water scarcity, risking crop yield loss due to inefficient manual irrigation.',
    engineering:
      'Webkorps deploys low-power LoRaWAN sensor networks measuring soil moisture, pH, and solar radiation to trigger precision irrigation pumps.',
    bulletPoints: [
      '35% water savings achieved via autonomous soil-moisture-triggered watering.',
      'Up to 10-mile wireless sensor transmission range using LoRaWAN nodes.',
      'Multi-year battery lifespan on ruggedized outdoor sensor deployments.',
    ],
  },
];

export const IOT_APP_SOLUTIONS: SolutionCardItem[] = [
  {
    id: 'device-telemetry-fleet',
    number: '01',
    title: 'Smart device telemetry & fleet',
    description: 'Real-time monitoring, remote device management, and secure over-the-air (OTA) firmware updates.',
  },
  {
    id: 'iiot-predictive-maintenance',
    number: '02',
    title: 'Industrial IoT & predictive maintenance',
    description: 'Machine health analytics, vibration sensors, and automated failure prevention systems.',
  },
  {
    id: 'smart-buildings-energy',
    number: '03',
    title: 'Smart buildings & energy management',
    description: 'HVAC automation, occupancy sensing, power metering, and environmental controls.',
  },
  {
    id: 'connected-healthcare-iomt',
    number: '04',
    title: 'Connected healthcare & IoMT',
    description: 'Patient vitals monitoring, wearable telemetry, and emergency alert gateways.',
  },
  {
    id: 'asset-tracking-logistics',
    number: '05',
    title: 'Asset tracking & cold-chain logistics',
    description: 'GPS/BLE location beacons, temperature logging, and real-time geofencing alerts.',
  },
  {
    id: 'edge-computing-gateways',
    number: '06',
    title: 'Edge computing & IoT gateways',
    description: 'Local data filtering, low-latency edge AI inference, and autonomous edge controllers.',
  },
];

export const IOT_APP_OUTCOMES: OutcomeItem[] = [
  {
    id: 'telemetry-visibility',
    number: '01',
    title: 'Real-Time Edge Telemetry',
    description: 'Capture, visualize, and analyze continuous sensor streams from distributed hardware fleets with sub-second latency.',
    image: automateImg,
    imageAlt: 'Real time IoT edge telemetry 3D illustration',
  },
  {
    id: 'predictive-maintenance',
    number: '02',
    title: 'Predictive Maintenance',
    description: 'Leverage IoT data models to anticipate machinery wear and hardware anomalies before costly breakdowns occur.',
    image: smarterDecisionsImg,
    imageAlt: 'Predictive IoT maintenance 3D illustration',
  },
  {
    id: 'edge-efficiency',
    number: '03',
    title: 'Edge Computing Efficiency',
    description: 'Filter and process high-frequency sensor payloads on the edge, minimizing cloud bandwidth and hosting costs.',
    image: seamlessExpImg,
    imageAlt: 'Edge computing efficiency and connectivity 3D illustration',
  },
  {
    id: 'hardware-security',
    number: '04',
    title: 'Hardware-Level Security',
    description: 'Protect device endpoints with hardware root-of-trust, encrypted MQTT channels, and secure Over-The-Air (OTA) updates.',
    image: scaleLimitsImg,
    imageAlt: 'Hardware root of trust and IoT security 3D illustration',
  },
];

export const IOT_APP_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'iot-cloud-dashboards',
    number: '01',
    title: 'IoT Cloud Platforms & Dashboards',
    description:
      'We engineer high-performance IoT control centers featuring real-time telemetry graphs, digital twin asset modeling, geo-fencing, and threshold-based automated alerting.',
    image: iotPageImg,
    imageAlt: 'IoT cloud platform and telemetry dashboard 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'edge-computing-firmware',
    number: '02',
    title: 'Edge Computing & Firmware Interop',
    description:
      'Connect microcontrollers and edge gateways using lightweight protocols like MQTT, CoAP, and WebSockets with optimized embedded C/C++ firmware integration.',
    image: serviceIotImg,
    imageAlt: 'Edge computing and firmware protocol engineering 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'iiot-smart-manufacturing',
    number: '03',
    title: 'Industrial IoT (IIoT) & Factory Automation',
    description:
      'Bridge the gap between operational technology (OT) and IT. Connect legacy PLCs, SCADA systems, and manufacturing lines to modernize industrial factory operations.',
    image: enterpriseImg,
    imageAlt: 'Industrial IoT and smart manufacturing automation 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'connected-consumer-matter',
    number: '04',
    title: 'Smart Consumer & Connected Devices',
    description:
      'Deliver seamless smart home and wearable ecosystems utilizing Bluetooth Low Energy (BLE), Matter, and Zigbee with intuitive iOS and Android companion apps.',
    image: discoveryImg,
    imageAlt: 'Smart connected consumer devices 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'ota-fleet-management',
    number: '05',
    title: 'OTA Firmware & Fleet Provisioning',
    description:
      'Manage device lifecycles at global scale. Push cryptographic Over-The-Air (OTA) firmware patches, track device batteries, and automate zero-touch provisioning.',
    image: integrationsImg,
    imageAlt: 'OTA firmware updates and fleet provisioning 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'time-series-analytics',
    number: '06',
    title: 'Time-Series Pipelines & Cloud Data',
    description:
      'Ingest billions of sensor events into distributed time-series databases (TimescaleDB, InfluxDB) and streaming pipelines (Kafka, AWS IoT Core, Azure IoT Hub).',
    image: cloudDevopsImg,
    imageAlt: 'Time-series sensor data pipeline 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

export const IOT_APP_FAQS: FAQItemData[] = [
  {
    id: 'iot-protocols-supported',
    question: 'Which IoT communication protocols and hardware do you support?',
    answer:
      'We work with MQTT, CoAP, WebSockets, HTTP/HTTPS, BLE (Bluetooth Low Energy), Zigbee, LoRaWAN, and cellular IoT (NB-IoT/LTE-M) across ESP32, ARM Cortex, Raspberry Pi, and industrial PLC hardware.',
    isApproved: true,
  },
  {
    id: 'iot-cloud-providers',
    question: 'Can you integrate with AWS IoT Core or Azure IoT Hub?',
    answer:
      'Yes, we build certified architectures utilizing AWS IoT Core, Azure IoT Hub, and Google Cloud IoT, as well as standalone self-hosted EMQX and TimescaleDB backends.',
    isApproved: true,
  },
  {
    id: 'iot-security-firmware',
    question: 'How do you safeguard IoT devices against tampering and cyberattacks?',
    answer:
      'We implement X.509 cryptographic mutual TLS (mTLS), secure hardware bootloaders, encrypted flash memory, signed OTA binaries, and isolated network VLANs.',
    isApproved: true,
  },
  {
    id: 'iot-edge-offline',
    question: 'What happens if connected IoT devices lose internet connectivity?',
    answer:
      'Our edge firmware and gateway software buffer critical telemetry locally in non-volatile flash storage and automatically synchronize once network connection is restored with zero data loss.',
    isApproved: true,
  },
  {
    id: 'iot-poc-development',
    question: 'Can Webkorps help build an initial IoT Proof of Concept (PoC)?',
    answer:
      'Yes, our IoT engineers can rapid-prototype functional hardware-to-cloud PoCs with interactive dashboards in as little as 3 to 6 weeks to validate your commercial feasibility.',
    isApproved: true,
  },
];

