import React from 'react';
import type { IndustryPageConfig } from '../IndustryDetailView';

import eduHeroImg from '../../../assets/industries/page img/Education.png';
import edu3dImg from '../../../assets/industries/education.png';
import eduIllustImg from '../../../assets/industries/education-illustration.png';
import stage1Img from '../../../assets/industries/education/ecosystem/stage-1.png';
import stage2Img from '../../../assets/industries/education/ecosystem/stage-2.png';
import stage3Img from '../../../assets/industries/education/ecosystem/stage-3.png';
import stage4Img from '../../../assets/industries/education/ecosystem/stage-4.png';
import stage5Img from '../../../assets/industries/education/ecosystem/stage-5.png';
import stage6Img from '../../../assets/industries/education/ecosystem/stage-6.png';

export const educationConfig: IndustryPageConfig = {
  seoTitle: 'Education Software Development & EdTech Solutions | Webkorps',
  seoDescription:
    'Build next-generation EdTech platforms: LMS portals, interactive virtual classrooms, student information systems (SIS), and adaptive AI tutoring.',
  canonicalUrl: 'https://www.webkorps.com/industries/education',

  badge: 'Education & EdTech Solutions',
  heroFirstWordPrefix: 'Smart',
  heroFirstWordLetter: 'E',
  heroSvgPath: (
    <path
      d="M14 18L23.5 13L33 18L23.5 23L14 18ZM17 22.5V28.5C17 31 23.5 33 23.5 33C23.5 33 30 31 30 28.5V22.5"
      stroke="#1887C9"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  heroFirstWordSuffix: 'dTech for',
  heroTitleLine2: (
    <>
      Scalable <span className="wk-service-hero__title-accent">Digital Learning</span>
    </>
  ),
  heroDescription:
    'Build next-generation EdTech platforms: LMS portals, interactive virtual classrooms, student information systems (SIS), and adaptive AI tutoring.',
  ctaText: 'Discuss Your EdTech Project',

  statsTitle: (
    <>
      Digital Education & EdTech <span className="wk-ind-stats__title-accent">at a Glance</span>
    </>
  ),
  statsSubtitle: 'Learner engagement metrics, mobile learning adoption, and institutional efficiency benchmarks shaping modern education.',
  statsData: {
    featured: {
      badge: 'GLOBAL ADOPTION',
      value: '80%+',
      label: 'Digital Learning Engagement',
      description: 'Over 80% of higher education universities and corporate training organizations now deliver hybrid curricula through digital learning platforms.',
      source: 'World Economic Forum & Educause Horizon Report • 2024–2025',
    },
    secondary: [
      {
        id: 'retention-lift',
        badge: 'ENGAGEMENT',
        value: '3.4x',
        label: 'Course Completion with Gamification',
        description: 'Interactive bite-sized microlearning modules and achievement badges dramatically boost course completion rates.',
        source: 'Global EdTech Research Review',
      },
      {
        id: 'grading-velocity',
        badge: 'PRODUCTIVITY',
        value: '70% Faster',
        label: 'Automated Grading & Feedback',
        description: 'AI code autograders and rubric-based assessment engines cut instructor grading fatigue while providing immediate student feedback.',
        source: 'ACM Educational Technology Survey',
      },
      {
        id: 'concurrency',
        badge: 'SCALABILITY',
        value: '100K+',
        label: 'Concurrent Live Exam Takers',
        description: 'High-availability cloud architectures supporting automated remote proctoring and real-time live video classrooms with zero lag.',
        source: 'Webkorps EdTech Infrastructure Benchmark • 2025',
      },
    ],
  },

  ecosystemTitle: (
    <>
      How the Modern <span className="wk-ind-eco__title-accent">EdTech Ecosystem Works</span>
    </>
  ),
  ecosystemSubtitle: 'From learner onboarding and adaptive course delivery to collaborative virtual labs, automated grading, and career credentialing.',
  ecosystemStages: [
    {
      id: 'onboarding-enrollment',
      stepNumber: '01',
      title: 'Student Onboarding & SIS Sync',
      description: 'Single sign-on (SSO) authentication, automated course prerequisite verification, and seamless Student Information System (SIS) integration.',
      image: stage1Img,
    },
    {
      id: 'interactive-courseware',
      stepNumber: '02',
      title: 'Interactive Content & Video Labs',
      description: 'SCORM/xAPI compliant multimedia modules, interactive coding environments, and live WebRTC virtual breakout classrooms.',
      image: stage2Img,
    },
    {
      id: 'adaptive-learning-engine',
      stepNumber: '03',
      title: 'AI Adaptive Learning Paths',
      description: 'Machine learning algorithms continuously adjust quiz difficulty and recommend personalized remedial review based on student mastery.',
      image: stage3Img,
    },
    {
      id: 'proctored-assessments',
      stepNumber: '04',
      title: 'Secure Remote Assessments & Proctoring',
      description: 'Browser lockdown environments, AI automated facial gaze monitoring, automated question shuffling, and instant rubric grading.',
      image: stage4Img,
    },
    {
      id: 'collaborative-discussions',
      stepNumber: '05',
      title: 'Social Learning & Peer Review',
      description: 'Gamified discussion boards, automated peer-review workflows, study group scheduling, and mentor office hours queues.',
      image: stage5Img,
    },
    {
      id: 'digital-credentials',
      stepNumber: '06',
      title: 'Verifiable Digital Credentials & Badges',
      description: 'Open Badges 2.0 and cryptographic blockchain degree certificates easily shared to LinkedIn and verified by prospective employers.',
      image: stage6Img,
    },
  ],

  challengesTitle: (
    <>
      Why Digital Learning <span className="wk-ind-ch__title-accent">Faces Friction</span>
    </>
  ),
  challengesSubtitle: 'Clunky legacy LMS systems, student isolation in asynchronous courses, and academic integrity vulnerabilities degrade online educational outcomes.',
  challenges: [
    {
      number: '01',
      title: 'Clunky Legacy LMS Platforms & High Dropouts',
      description: 'Outdated, non-responsive portals feel like administrative file directories rather than engaging interactive learning experiences.',
      impact: 'Course drop-off rates exceeding 80% on self-paced online curriculum.',
    },
    {
      number: '02',
      title: 'Inflexible Student Information System (SIS) Silos',
      description: 'Student grades, financial aid, and registration records remain trapped in decades-old on-premise relational databases.',
      impact: 'Manual grade syncing errors and delayed academic standing audits.',
    },
    {
      number: '03',
      title: 'Academic Integrity & Cheating on Remote Exams',
      description: 'Unproctored exams leave institutions vulnerable to unauthorized external tools and impersonation during certification tests.',
      impact: 'Devaluation of institutional accreditation and degree credibility.',
    },
    {
      number: '04',
      title: 'High Instructor Grading & Administrative Fatigue',
      description: 'Faculty members spend hours manually reading hundreds of homework submissions instead of providing 1-on-1 mentorship.',
      impact: 'Delayed feedback loops that cause struggling students to fall behind.',
    },
    {
      number: '05',
      title: 'Lack of Mobile-First Learning Offline Support',
      description: 'Students in low-bandwidth areas face buffering videos and broken web assessments when internet drops.',
      impact: 'Digital divide barriers excluding international and non-traditional learners.',
    },
    {
      number: '06',
      title: 'Disconnected Corporate Training & ROI Tracking',
      description: 'Enterprise L&D leaders cannot prove whether employee training courses correlate with real job performance improvements.',
      impact: 'Unjustified corporate training budgets and unengaged workforce participants.',
    },
  ],

  capabilitiesTitle: (
    <>
      Scalable Software for{' '}
      <span className="wk-capabilities__title-accent">Modern Educational Institutions</span>
    </>
  ),
  capabilitiesSubtitle: 'We build custom learning platforms, virtual classrooms, and automated assessment systems.',
  capabilities: [
    {
      id: 'custom-lms',
      number: '01',
      title: 'Custom Learning Management Systems (LMS)',
      description: 'White-label learning platforms featuring multimedia curricula, SCORM/xAPI compliance, and customizable learner journeys.',
      image: eduHeroImg,
      imageAlt: 'Custom LMS and digital learning platform 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'virtual-classrooms',
      number: '02',
      title: 'Virtual Classrooms & WebRTC Video',
      description: 'Interactive live lecture streaming with digital whiteboards, breakout rooms, in-stream polling, and automated session recording.',
      image: edu3dImg,
      imageAlt: 'Virtual classroom and live lecture streaming 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'ai-tutoring',
      number: '03',
      title: 'Adaptive AI Tutoring Engines',
      description: '24/7 conversational study co-pilots that guide students through math, coding, and language exercises with step-by-step hints.',
      image: eduIllustImg,
      imageAlt: 'Adaptive AI tutoring engine 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'online-proctoring',
      number: '04',
      title: 'Remote Proctoring & Assessment Suites',
      description: 'Secure browser lockdowns, automated webcam identity verification, anti-plagiarism scanning, and instant question randomized pools.',
      image: eduHeroImg,
      imageAlt: 'Remote exam proctoring and assessment suite 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'sis-integrations',
      number: '05',
      title: 'SIS & LTI Tool Interoperability',
      description: 'Seamless integration with Banner, Canvas, Blackboard, Moodle, and Google Classroom via modern 1EdTech LTI 1.3 standards.',
      image: edu3dImg,
      imageAlt: 'SIS and LTI interoperability 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
    {
      id: 'digital-credentialing',
      number: '06',
      title: 'Micro-Credentials & Blockchain Badges',
      description: 'Cryptographically verifiable digital certificates and Open Badges that showcase verifiable course competencies.',
      image: eduIllustImg,
      imageAlt: 'Digital badges and credentialing 3D illustration',
      ctaLabel: 'Know More',
      ctaHref: '/contact-us',
    },
  ],

  aiTitle: (
    <>
      Smarter <span className="wk-ind-ai__title-accent">Education with AI</span>
    </>
  ),
  aiSubtitle: 'AI adapts learning difficulty to student pace, automates assignment grading, and flags at-risk students before dropouts occur.',
  aiImage: eduHeroImg,
  aiUseCases: [
    {
      id: 'ai-adaptive-tutoring',
      number: '01',
      title: 'Step-by-Step AI Socratic Tutoring',
      problem: 'Students get stuck on difficult homework problems at night when teaching assistants are unavailable.',
      aiApproach: 'RAG-based Socratic LLMs guide students through conceptual hints without directly giving away test answers.',
      integrations: 'Textbook knowledge bases, LaTeX math parsers, and student homework submission portals.',
      benefit: 'Provides 24/7 personalized study assistance, boosting homework completion by 48%.',
    },
    {
      id: 'ai-autograding',
      number: '02',
      title: 'Automated Code & Essay Rubric Grading',
      problem: 'Grading 500 coding assignments or essay exams takes weeks, delaying vital feedback.',
      aiApproach: 'Automated unit test execution combined with LLM semantic rubric scoring evaluates structure, logic, and style.',
      integrations: 'GitHub Classroom, Docker sandbox execution containers, and LMS gradebooks.',
      benefit: 'Returns detailed actionable feedback to students in seconds, saving 70% of instructor grading time.',
    },
    {
      id: 'ai-dropout-early-warning',
      number: '03',
      title: 'Predictive Student Retention Early Warning',
      problem: 'Struggling students quietly stop logging into portals and fail courses before academic advisors notice.',
      aiApproach: 'Machine learning evaluates login frequency, video pause rates, and quiz score trajectories to flag risk.',
      integrations: 'LMS event logs, SIS demographic tables, and academic advisor ticketing queues.',
      benefit: 'Identifies at-risk learners 3 weeks before midterms, enabling proactive tutoring interventions.',
    },
    {
      id: 'ai-curriculum-generation',
      number: '04',
      title: 'Automated Quiz & Flashcard Generation',
      problem: 'Professors spend hours writing multiple-choice quiz questions and practice flashcards for each lecture.',
      aiApproach: 'NLP models analyze lecture transcripts and slide decks to auto-generate Bloom-taxonomy aligned question banks.',
      integrations: 'Recorded lecture video audio feeds, PDF lecture slides, and digital flashcard engines.',
      benefit: 'Generates comprehensive chapter assessment banks in minutes.',
    },
    {
      id: 'ai-plagiarism-detection',
      number: '05',
      title: 'Deep AI-Generated Content & Code Detection',
      problem: 'Unregulated copy-pasting from generative AI tools threatens academic integrity on writing and coding projects.',
      aiApproach: 'Perplexity and burstiness classifiers detect synthetic patterns while cross-checking against global web text.',
      integrations: 'Student essay submission endpoints, citation databases, and academic honesty review workflows.',
      benefit: 'Protects institutional academic integrity with transparent false-positive probability indicators.',
    },
    {
      id: 'ai-accessibility-transcription',
      number: '06',
      title: 'Instant Multilingual Audio & Subtitle Translation',
      problem: 'Deaf, hard-of-hearing, and international students struggle following complex technical lectures.',
      aiApproach: 'Speech-to-text models generate synchronized subtitles, chapter indexes, and translations into 40+ languages.',
      integrations: 'Video streaming CDN, WebVTT subtitle tracks, and screen reader accessibility APIs.',
      benefit: 'Ensures 100% ADA Section 508 and WCAG 2.1 AA accessibility for all institutional media.',
    },
  ],

  domainsTitle: (
    <>
      EdTech Platforms for{' '}
      <span className="wk-domain-sol__title-accent">Every Learning Model</span>
    </>
  ),
  domainsSubtitle: 'Tailored solutions for higher education universities, corporate enterprise L&D, and K-12 school districts.',
  domainsEngineeringLabel: 'Webkorps EdTech Engineering',
  domains: [
    {
      id: 'higher-education',
      name: 'Higher Education Universities',
      badge: 'CAMPUS SCALABILITY',
      solutionTitle: 'Hybrid Degree Portals, SIS Integration & Research Repositories',
      challenge: 'Universities need to modernize traditional campus coursework into engaging hybrid degree programs.',
      engineering: 'We architect enterprise LMS platforms supporting thousands of courses, SSO authentication, and registrar grade sync.',
      bulletPoints: [
        'Turnkey LTI 1.3 certified integration with Canvas, Blackboard, and Banner SIS.',
        'High-concurrency virtual lecture broadcasting supporting 5,000+ simultaneous viewers per session.',
        'FERPA-compliant role-based access control protecting student academic and financial records.',
      ],
    },
    {
      id: 'corporate-ld',
      name: 'Enterprise Corporate Training (L&D)',
      badge: 'EMPLOYEE UPSKILLING',
      solutionTitle: 'Compliance Tracking, Microlearning & Skills Badging',
      challenge: 'Global enterprises struggle to mandate annual compliance training and track workforce skill development.',
      engineering: 'Webkorps develops gamified employee training portals with automated HRIS sync, SCORM support, and executive skill dashboards.',
      bulletPoints: [
        'Automated employee onboarding tracks synchronizing with Workday and BambooHR.',
        'Bite-sized 5-minute microlearning modules optimized for mobile devices and busy workdays.',
        'Real-time compliance audit reports demonstrating 100% mandatory regulatory completion.',
      ],
    },
    {
      id: 'k12-districts',
      name: 'K-12 School Districts & Tutoring',
      badge: 'SAFE LEARNING',
      solutionTitle: 'COPPA-Compliant Parent Portals & Interactive Classrooms',
      challenge: 'School districts require child-safe digital tools with intuitive parent communication and state curriculum alignment.',
      engineering: 'We build COPPA and FERPA compliant student portals with automated attendance tracking, parent messaging, and digital gradebooks.',
      bulletPoints: [
        'COPPA-certified child safety architecture with zero third-party tracking or advertising.',
        'Multilingual parent communication portal delivering real-time grade and attendance alerts via SMS.',
        'Interactive gamified math and reading lessons aligned with state standardized curriculum standards.',
      ],
    },
  ],

  partnerTitle: (
    <>
      Your EdTech{' '}
      <span className="wk-ind-pt__title-accent">Technology Partner</span>
    </>
  ),
  partnerSubtitle: 'We combine pedagogical UX principles with cloud scalability and strict educational data privacy.',
  partnerImage: eduHeroImg,
  partnerCapabilities: [
    {
      number: '01',
      title: 'FERPA & COPPA Regulatory Compliance',
      description: 'End-to-end data encryption and strict access boundaries protecting student academic records and minor privacy.',
      highlight: 'FERPA & COPPA Certified Privacy',
    },
    {
      number: '02',
      title: '1EdTech LTI 1.3 & QTI Interoperability',
      description: 'Certified LTI 1.3 Advantage integration allowing custom tools to plug directly into any existing institutional LMS.',
      highlight: 'LTI 1.3 Advantage Certified',
    },
    {
      number: '03',
      title: 'High-Scale Concurrency Cloud Architecture',
      description: 'Serverless cloud infrastructure engineered to handle massive morning login surges and synchronized university finals.',
      highlight: '100K+ Concurrent Exam Taker Scaling',
    },
    {
      number: '04',
      title: 'Universal WCAG 2.1 AA Accessibility',
      description: 'Keyboard navigable interfaces, screen-reader optimized DOM elements, and closed captions meeting Section 508 mandates.',
      highlight: 'WCAG 2.1 AA & Section 508 Compliant',
    },
    {
      number: '05',
      title: '24/7 Academic Support SLAs',
      description: 'Guaranteed uptime and round-the-clock technical monitoring throughout academic semesters and testing periods.',
      highlight: '99.99% Academic Term Uptime SLA',
    },
  ],

  outcomesTitle: (
    <>
      Transform Digital Education with <span className="wk-service-outcomes__title-accent">Modern EdTech</span>
    </>
  ),
  outcomesSubtitle: '3.4x higher course completions, 70% faster assignment grading, and 100K+ concurrent testing resilience.',
  outcomes: [
    {
      id: 'completion-rates',
      number: '01',
      title: '3.4x Higher Course Completion Rates',
      description: 'Gamified microlearning modules, bite-sized quizzes, and social learning forums keep students engaged through graduation.',
      image: eduHeroImg,
      imageAlt: 'Higher course completion outcome 3D illustration',
    },
    {
      id: 'grading-velocity',
      number: '02',
      title: '70% Instructor Grading Time Saved',
      description: 'Automated autograders and rubric AI tools handle mechanical evaluations, freeing instructors for mentorship.',
      image: edu3dImg,
      imageAlt: 'Instructor grading time saved outcome 3D illustration',
    },
    {
      id: 'proctoring-integrity',
      number: '03',
      title: 'Zero Academic Integrity Compromises',
      description: 'Browser lockdown environments and automated proctoring safeguard institutional accreditation during remote tests.',
      image: eduIllustImg,
      imageAlt: 'Academic integrity outcome 3D illustration',
    },
    {
      id: 'global-accessibility',
      number: '04',
      title: '100% WCAG 2.1 AA Accessibility',
      description: 'Equitable learning experiences for all students with screen reader compatibility, captions, and localized languages.',
      image: eduHeroImg,
      imageAlt: 'Universal accessibility outcome 3D illustration',
    },
  ],

  techStackTitle1: 'Future-Ready',
  techStackTitle2: 'EdTech Stack',
  techStackSubtitle: 'We combine Next.js, WebRTC, Node.js microservices, and LTI standards to build engaging digital education platforms.',

  faqTitle: (
    <>
      EdTech Software <span className="wk-faq__title-accent">FAQs</span>
    </>
  ),
  faqSubtitle: 'Answers to common questions regarding LMS interoperability, FERPA compliance, and live video lecture scalability.',
  faqs: [
    {
      id: 'faq-1',
      question: 'How do you ensure FERPA and COPPA compliance in educational software?',
      answer:
        'All our education platforms are engineered following strict FERPA and COPPA guidelines. We enforce TLS 1.3 encryption in transit, AES-256 encryption at rest, role-based access control (RBAC), zero third-party ad trackers, and verified parental consent workflows for users under 13.',
      isApproved: true,
    },
    {
      id: 'faq-2',
      question: 'Can your custom learning tools plug into our existing Canvas or Blackboard LMS?',
      answer:
        'Yes. We build custom applications using the official 1EdTech LTI (Learning Tools Interoperability) 1.3 Advantage standard. This allows your custom tool to embed directly into Canvas, Blackboard, Moodle, or Brightspace with single sign-on (SSO) and automatic roster/gradebook passback.',
      isApproved: true,
    },
    {
      id: 'faq-3',
      question: 'How many students can attend a live virtual classroom session simultaneously?',
      answer:
        'Our WebRTC-based virtual lecture architectures utilize scalable Selective Forwarding Units (SFUs) paired with edge HLS live video broadcasting. This enables interactive small-group seminars of 20 to 50 active video participants, or massive auditorium lectures streaming to over 10,000 simultaneous viewers with live interactive chat.',
      isApproved: true,
    },
    {
      id: 'faq-4',
      question: 'Does the platform support SCORM or xAPI content packages?',
      answer:
        'Yes. We support all major e-learning content standards including SCORM 1.2, SCORM 2004, and modern Tin Can (xAPI) packages, enabling comprehensive learning telemetry tracking and quiz score reporting from external authoring tools like Articulate Storyline and Adobe Captivate.',
      isApproved: true,
    },
    {
      id: 'faq-5',
      question: 'What is the typical timeframe to build and launch a custom EdTech platform?',
      answer:
        'A full-featured custom LMS or virtual classroom platform typically launches in 10 to 14 weeks, including UX prototyping, SIS integration, accessibility auditing, and high-concurrency load testing.',
      isApproved: true,
    },
  ],
  ctaTitle: 'Ready to Transform Digital Learning?',
  ctaDesc: 'Build engaging learning experiences, connect student information systems, and scale your EdTech platform with custom software.',
};
