import type { StaticImageData } from 'next/image';

// Healthcare Ecosystem Assets
import ehrImg from '../../assets/industries/healthcare/ecosystem/Patient Intake & EHR.png';
import clinicalImg from '../../assets/industries/healthcare/ecosystem/Clinical Diagnostics & Telehealth.png';
import pharmacyImg from '../../assets/industries/healthcare/ecosystem/Smart Pharmacy & Dispensing.png';
import aiHealthImg from '../../assets/Real world ai result/AI health care.png';
import hospitalImg from '../../assets/services/indrusties /hospital.png';
import healthcareHeroImg from '../../assets/industries/page img/Healthcare.png';

import type { CapabilityItem } from '../../components/ServiceCapabilities';
import type { OutcomeItem } from '../../components/ServiceOutcomes';
import type { DomainSolutionItem } from '../../components/DomainSpecificSolutions';
import type { FAQItemData } from '../../sections/home/FAQ/faqData';

export { ehrImg, clinicalImg, pharmacyImg, aiHealthImg, hospitalImg, healthcareHeroImg };

/**
 * 1. Market Intelligence & Statistics
 */
export const HEALTHCARE_STATS = {
  featured: {
    badge: 'DIGITAL HEALTH BENCHMARK',
    value: '84%+',
    label: 'Telehealth & EHR Adoption',
    description:
      'Over 84% of healthcare systems and specialty provider networks now deploy cloud-native, HIPAA-compliant patient intake and remote clinical monitoring platforms.',
    source: 'HIMSS Global Health Tech & AMA Telehealth Survey • 2024–2025',
  },
  secondary: [
    {
      id: 'compliance-audit',
      badge: 'SECURITY & TRUST',
      value: '100%',
      label: 'HIPAA & HL7/FHIR Compliance',
      description: 'Zero-trust role-based access, end-to-end data encryption, and strict audit logging across all patient telemetry streams.',
      source: 'ONC Health IT Interoperability Standards',
      chartType: 'donut' as const,
    },
    {
      id: 'intake-velocity',
      badge: 'EFFICIENCY',
      value: '65% Faster',
      label: 'Patient Intake & Triage',
      description: 'Automated digital consent, insurance verification, and EHR pre-population cut clinical registration delays dramatically.',
      source: 'Healthcare Information Management Review • 2025',
      chartType: 'trend' as const,
    },
    {
      id: 'diagnostics-ai',
      badge: 'ACCURACY',
      value: '94.2%',
      label: 'AI Diagnostic Screening Assistance',
      description: 'Computer vision and NLP engines assist radiologists and pathologists in prioritizing urgent triage queues.',
      source: 'Nature Digital Medicine Review • 2025',
      chartType: 'bar' as const,
    },
  ],
};

/**
 * 2. Healthcare Ecosystem Stages (Horizontal Scroll)
 */
export interface HealthcareEcosystemStage {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  image: StaticImageData | string;
}

export const HEALTHCARE_ECOSYSTEM_STAGES: HealthcareEcosystemStage[] = [
  {
    id: 'patient-intake-ehr',
    stepNumber: '01',
    title: 'Patient Intake & Smart EHR',
    description:
      'Self-service digital onboarding, insurance eligibility verification, digital medical history capture, and instant HL7/FHIR record sync.',
    image: ehrImg,
  },
  {
    id: 'clinical-diagnostics-telehealth',
    stepNumber: '02',
    title: 'Clinical Diagnostics & Telehealth',
    description:
      'HD secure WebRTC video consultations, integrated digital stethoscope telemetry, and automated clinical note transcription.',
    image: clinicalImg,
  },
  {
    id: 'smart-pharmacy',
    stepNumber: '03',
    title: 'Smart Pharmacy & Dispensing',
    description:
      'Automated e-prescriptions (eRx), drug-drug interaction warning checks, automated refill routing, and medication adherence notifications.',
    image: pharmacyImg,
  },
  {
    id: 'ai-clinical-decision',
    stepNumber: '04',
    title: 'AI Diagnostic Decision Support',
    description:
      'Deep learning models analyze radiological scans, lab values, and vitals history to flag critical anomalies for clinical teams.',
    image: aiHealthImg,
  },
  {
    id: 'hospital-operations',
    stepNumber: '05',
    title: 'Hospital Bed & Staff Coordination',
    description:
      'Real-time inpatient bed occupancy tracking, smart nurse scheduling, operating theater utilization, and discharge planning.',
    image: hospitalImg,
  },
  {
    id: 'wearable-remote-monitoring',
    stepNumber: '06',
    title: 'Remote Patient Monitoring (RPM)',
    description:
      'Continuous streaming of ECG, SpO2, blood pressure, and glucose monitors with automatic emergency threshold alerts.',
    image: healthcareHeroImg,
  },
];

/**
 * 3. The Real Challenges in Healthcare Technology
 */
export interface HealthcareChallenge {
  number: string;
  title: string;
  description: string;
  impact: string;
}

export const HEALTHCARE_CHALLENGES: HealthcareChallenge[] = [
  {
    number: '01',
    title: 'Siloed EHR Systems & Interoperability Barriers',
    description:
      'Disparate legacy hospital systems (Epic, Cerner, Allscripts) fail to share patient histories smoothly across care transitions.',
    impact: 'Duplicated diagnostic lab tests, clinician administrative burnout, and dangerous gaps in longitudinal patient care.',
  },
  {
    number: '02',
    title: 'Strict Regulatory Compliance & Cyber Threat Surface',
    description:
      'Ransomware attacks targeting hospital databases and strict penalties for HIPAA and HITECH privacy breaches.',
    impact: 'Millions in remediation costs, severe reputational loss, and operational shutdown during security incidents.',
  },
  {
    number: '03',
    title: 'Administrative Overload & Clinician Burnout',
    description:
      'Doctors and nurses spend over 40% of their shifts entering data into clunky electronic medical record software instead of treating patients.',
    impact: 'High staff turnover, delayed patient consultations, and increased risk of manual clinical documentation errors.',
  },
  {
    number: '04',
    title: 'Fragmented Medical Billing & High Claim Denial Rates',
    description:
      'Complex insurance coding (ICD-10, CPT) and manual prior-authorization workflows cause high initial claim rejection rates.',
    impact: 'Months of delayed reimbursement, cash flow instability, and patient confusion over surprise bills.',
  },
  {
    number: '05',
    title: 'Inadequate Remote Patient Monitoring Infrastructure',
    description:
      'Lack of unified telemetry ingest pipelines to process continuous patient biometric data outside the hospital clinic.',
    impact: 'Unnecessary hospital readmissions for chronic patients and missed early warning signs of acute decompensation.',
  },
  {
    number: '06',
    title: 'Patient Portal Drop-Off & Low Engagement',
    description:
      'Poorly designed, unintuitive mobile apps discourage patients from reviewing test results, scheduling follow-ups, or taking medications.',
    impact: 'Lower care protocol compliance, higher no-show appointment rates, and diminished clinical outcomes.',
  },
];

/**
 * 4. Healthcare AI Capabilities
 */
export interface HealthcareAIUseCase {
  id: string;
  number: string;
  title: string;
  problem: string;
  aiApproach: string;
  integrations: string;
  benefit: string;
}

export const HEALTHCARE_AI_USE_CASES: HealthcareAIUseCase[] = [
  {
    id: 'ai-clinical-notes',
    number: '01',
    title: 'Ambient Clinical Voice Documentation',
    problem: 'Physicians spend hours after clinical rounds typing notes into EHR systems, leading to exhaustion.',
    aiApproach: 'Specialized clinical LLMs listen to patient-doctor dialogue and automatically generate structured SOAP notes.',
    integrations: 'HL7/FHIR EHR gateways, mobile dictation microphones, and Cerner/Epic API adapters.',
    benefit: 'Saves 2+ hours per physician shift while capturing 99.1% of billing-relevant clinical details.',
  },
  {
    id: 'diagnostic-imaging',
    number: '02',
    title: 'Computer Vision Triage for Imaging',
    problem: 'Emergency departments face imaging backlogs where critical hemorrhages or fractures wait hours for radiologist review.',
    aiApproach: 'Convolutional neural networks scan incoming CT and X-ray DICOM slices to flag life-threatening anomalies instantly.',
    integrations: 'PACS networks, DICOM imaging servers, and emergency triage notification monitors.',
    benefit: 'Reduces time-to-diagnosis for acute trauma and stroke from hours to under 4 minutes.',
  },
  {
    id: 'predictive-readmission',
    number: '03',
    title: 'Predictive Hospital Readmission Scoring',
    problem: 'Hospitals incur significant penalty fines when chronic heart failure or COPD patients are readmitted within 30 days.',
    aiApproach: 'Ensemble machine learning evaluates vitals trends, lab markers, and social determinants to predict relapse risk.',
    integrations: 'Hospital discharge records, outpatient medication adherence feeds, and home telemetry.',
    benefit: 'Reduces 30-day preventable readmissions by 32% through targeted post-discharge outreach.',
  },
  {
    id: 'automated-prior-auth',
    number: '04',
    title: 'Automated Prior Authorization Engine',
    problem: 'Manual insurance prior authorizations take weeks of faxing documents, delaying critical patient treatments.',
    aiApproach: 'NLP parsers extract clinical necessity criteria from patient charts and auto-submit electronic payer requests.',
    integrations: 'Payer clearinghouses, X12 278 EDI transactions, and electronic medical record charts.',
    benefit: 'Prior authorization turnaround reduced from 7 business days to under 15 minutes.',
  },
  {
    id: 'patient-triage-chatbot',
    number: '05',
    title: 'GenAI Patient Navigation & Triage',
    problem: 'After-hours call lines are inundated with non-urgent queries, overwhelming triage nursing desks.',
    aiApproach: 'Clinically calibrated conversational AI guides patients through evidence-based triage protocols.',
    integrations: 'Scheduling engine, telemedicine queue, and secure patient portal messaging.',
    benefit: 'Provides 24/7 symptom guidance and directs 45% of non-emergent inquiries to scheduled telehealth slots.',
  },
  {
    id: 'drug-interaction-guard',
    number: '06',
    title: 'AI Medication Safety & Dosing Engine',
    problem: 'Polypharmacy in elderly patients frequently causes dangerous adverse drug events (ADEs).',
    aiApproach: 'Knowledge graphs cross-reference active prescriptions, renal function lab data, and genetic markers in real time.',
    integrations: 'E-prescribing (Surescripts), laboratory information systems (LIS), and genetic registries.',
    benefit: 'Eliminates preventable prescription conflicts and optimizes dosing based on patient organ function.',
  },
];

/**
 * 5. Domain-Specific Solutions for Healthcare Business Models
 */
export const HEALTHCARE_BUSINESS_DOMAINS: DomainSolutionItem[] = [
  {
    id: 'hospitals-health-systems',
    name: 'Hospitals & Health Systems',
    badge: 'ENTERPRISE INPATIENT',
    solutionTitle: 'Unified Hospital Operations & Enterprise EHR Interoperability',
    challenge:
      'Large health systems with multiple hospital campuses struggle with disjointed workflows, uneven bed utilization, and fragmented patient handoffs.',
    engineering:
      'We architect centralized digital control centers connecting EHRs, telemetry monitors, pharmacy dispensing, and surgical suite scheduling into a unified pane.',
    bulletPoints: [
      'Bidirectional HL7/FHIR integration across Epic, Cerner, and specialized departmental software.',
      'Real-time bed management algorithms reducing emergency department boarding time by 40%.',
      'HIPAA and SOC 2 Type II certified zero-trust security architecture protecting PHI.',
    ],
  },
  {
    id: 'telehealth-virtual-care',
    name: 'Telehealth & Digital Health Startups',
    badge: 'VIRTUAL CLINIC',
    solutionTitle: 'HIPAA-Compliant WebRTC Telemedicine & Patient Portals',
    challenge:
      'Digital clinics require frictionless patient onboarding, high-definition video calls on low bandwidth, and instant e-prescription routing.',
    engineering:
      'Webkorps builds white-label virtual care platforms with sub-second appointment scheduling, in-call screen sharing, digital intake forms, and automated billing.',
    bulletPoints: [
      'Peer-to-peer encrypted WebRTC video sessions with adaptive bitrates for mobile devices.',
      'Integrated e-prescriptions (eRx) routed instantly to over 65,000 retail and mail-order pharmacies.',
      'Automated credit card and insurance copay collection with PCI-DSS compliance.',
    ],
  },
  {
    id: 'medtech-rpm',
    name: 'MedTech & Remote Patient Monitoring (RPM)',
    badge: 'IOT BIOMETRICS',
    solutionTitle: 'Connected Medical Device Telemetry & RPM Dashboards',
    challenge:
      'Medical hardware manufacturers need FDA/HIPAA compliant cloud infrastructure to ingest, store, and visualize patient sensor data continuously.',
    engineering:
      'We engineer Bluetooth Low Energy (BLE) and cellular IoT device ingest pipelines capable of streaming millions of biometric data points with real-time alerting.',
    bulletPoints: [
      'Sub-second critical threshold alerts sent directly to on-call clinician pagers and smartphones.',
      'Automated CMS RPM billing code generation (CPT 99453, 99454, 99457) maximizing practice revenue.',
      'Encrypted cloud time-series storage designed for clinical research and longitudinal analysis.',
    ],
  },
];

/**
 * 6. Core Capabilities
 */
export const HEALTHCARE_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'telehealth-platform',
    number: '01',
    title: 'HIPAA-Compliant Telemedicine Platforms',
    description:
      'Secure, high-definition video consultation suites with digital triage, document exchange, and automated clinical summaries.',
    image: clinicalImg,
    imageAlt: 'HIPAA compliant telemedicine platform 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'ehr-integration',
    number: '02',
    title: 'EHR & FHIR/HL7 Interoperability',
    description:
      'Unified API gateways connecting legacy hospital medical records with modern cloud applications, patient apps, and laboratory systems.',
    image: ehrImg,
    imageAlt: 'HL7 and FHIR EHR interoperability architecture 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'smart-pharmacy-rx',
    number: '03',
    title: 'Smart Pharmacy & e-Prescribing (eRx)',
    description:
      'Automated electronic prescription routing, formulary checking, drug interaction warnings, and prescription status tracking.',
    image: pharmacyImg,
    imageAlt: 'Electronic prescription and smart pharmacy platform 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'rpm-iot',
    number: '04',
    title: 'Remote Patient Monitoring & IoT',
    description:
      'Cellular and BLE device telemetry pipelines connecting glucometers, blood pressure cuffs, and ECG patches to clinical dashboards.',
    image: healthcareHeroImg,
    imageAlt: 'Remote patient monitoring and medical IoT telemetry 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'clinical-ai',
    number: '05',
    title: 'Clinical AI & Diagnostic Decision Engines',
    description:
      'Machine learning algorithms supporting medical imaging anomaly detection, ambient SOAP transcription, and patient risk stratification.',
    image: aiHealthImg,
    imageAlt: 'Clinical artificial intelligence and diagnostic algorithms 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
  {
    id: 'medical-billing',
    number: '06',
    title: 'Revenue Cycle Management & Medical Billing',
    description:
      'Automated claim scrubbing, insurance eligibility verification, electronic prior authorizations, and patient payment collection.',
    image: hospitalImg,
    imageAlt: 'Revenue cycle management and healthcare billing 3D illustration',
    ctaLabel: 'Know More',
    ctaHref: '/contact-us',
  },
];

/**
 * 7. Partner Capabilities
 */
export const HEALTHCARE_PARTNER_CAPABILITIES = [
  {
    number: '01',
    title: 'HIPAA, HITECH & SOC 2 Type II Security',
    description:
      'Strict Zero-Trust security policies, field-level database encryption for Protected Health Information (PHI), and comprehensive BAA support.',
    highlight: 'Zero-Trust PHI Data Protection',
  },
  {
    number: '02',
    title: 'HL7, FHIR & USCDI Interoperability',
    description:
      'Deep expertise implementing SMART-on-FHIR apps and bidirectional synchronization with Epic, Cerner, MEDITECH, and Athenahealth.',
    highlight: 'SMART-on-FHIR Certified Interconnect',
  },
  {
    number: '03',
    title: 'Medical Device & Telemetry Engineering',
    description:
      'High-reliability IoT pipelines ingesting millions of telemetry readings from FDA-cleared biometric sensors with sub-second alert triggers.',
    highlight: 'FDA-Aligned Connected IoT Pipelines',
  },
  {
    number: '04',
    title: 'Clinical Workflow Optimization',
    description:
      'User experiences engineered hand-in-hand with doctors and nursing professionals to reduce charting fatigue and clicks per patient visit.',
    highlight: '50% Fewer Clicks per Patient Encounter',
  },
  {
    number: '05',
    title: '24/7 High-Availability Clinical Support',
    description:
      'Around-the-clock site reliability engineering guaranteeing 99.999% uptime for life-critical healthcare services and urgent care platforms.',
    highlight: '99.999% Critical Care System Uptime',
  },
];

/**
 * 8. Measurable Business Outcomes
 */
export const HEALTHCARE_OUTCOMES: OutcomeItem[] = [
  {
    id: 'intake-speed',
    number: '01',
    title: '65% Faster Patient Registration',
    description:
      'Self-service digital onboarding and automated insurance verification eliminate clipboard paperwork and waiting room congestion.',
    image: ehrImg,
    imageAlt: 'Faster patient registration and digital intake 3D illustration',
  },
  {
    id: 'claim-denial-reduction',
    number: '02',
    title: '42% Lower Insurance Claim Denials',
    description:
      'Automated coding validation and electronic prior authorizations dramatically reduce rejected claims and accelerate clinic cash flow.',
    image: hospitalImg,
    imageAlt: 'Insurance claim denial reduction 3D illustration',
  },
  {
    id: 'physician-time-saved',
    number: '03',
    title: '2+ Hours Saved per Doctor Shift',
    description:
      'Ambient clinical AI documentation and automated prescription refills eliminate after-hours pajama time for clinical practitioners.',
    image: clinicalImg,
    imageAlt: 'Physician time savings and ambient charting 3D illustration',
  },
  {
    id: 'reduced-readmissions',
    number: '04',
    title: '32% Decrease in Preventable Readmissions',
    description:
      'Remote biometric monitoring and automated medication adherence reminders detect patient decline before emergency intervention is required.',
    image: healthcareHeroImg,
    imageAlt: 'Reduced hospital readmissions with remote monitoring 3D illustration',
  },
];

/**
 * 9. Frequently Asked Questions
 */
export const HEALTHCARE_FAQS: FAQItemData[] = [
  {
    id: 'faq-1',
    question: 'How do you ensure HIPAA compliance when developing healthcare software?',
    answer:
      'All our healthcare solutions are built strictly adhering to HIPAA and HITECH security standards. We enforce end-to-end TLS 1.3 data encryption in transit, AES-256 field-level encryption for PHI at rest, role-based access control (RBAC), multi-factor authentication, automated session termination, and immutable audit logs that record every PHI access event.',
    isApproved: true,
  },
  {
    id: 'faq-2',
    question: 'Can you integrate custom software with our existing EHR (Epic, Cerner, etc.)?',
    answer:
      'Yes. We specialize in HL7 v2, v3, and modern HL7 FHIR (Fast Healthcare Interoperability Resources) integrations. We build SMART-on-FHIR applications, custom RESTful gateways, and direct database synchronizers with major EHR providers including Epic Systems, Cerner/Oracle Health, Athenahealth, and Allscripts.',
    isApproved: true,
  },
  {
    id: 'faq-3',
    question: 'What protocols do you use for secure telemedicine video consultations?',
    answer:
      'Our telemedicine platforms utilize encrypted WebRTC protocols featuring SRTP (Secure Real-time Transport Protocol) and DTLS encryption. We implement adaptive bitrate streaming, fallback TURN/STUN servers, and bandwidth optimization so clinicians can hold uninterrupted video calls even over mobile cellular networks.',
    isApproved: true,
  },
  {
    id: 'faq-4',
    question: 'Can your platform connect to remote patient monitoring (RPM) medical devices?',
    answer:
      'Yes. We build IoT ingest bridges for Bluetooth Low Energy (BLE) and cellular-enabled health devices, including blood pressure monitors, pulse oximeters, continuous glucose monitors (CGMs), and digital weight scales, with automated CMS billing code generation for RPM services.',
    isApproved: true,
  },
  {
    id: 'faq-5',
    question: 'What is the typical timeframe to launch a custom healthcare application?',
    answer:
      'A production-ready MVP for a HIPAA-compliant patient portal or telemedicine application typically requires 12 to 16 weeks, including security threat modeling, compliance audits, and third-party EHR integration testing.',
    isApproved: true,
  },
];
