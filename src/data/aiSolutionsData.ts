/**
 * Webkorps AI Solutions — Evidence-Based Content & Architecture Data
 * Standard of Truth: Enterprise AI Engineering, ISO 27001, CMMI Level 3
 * Brand Primary Color: #1A87C8
 */

export interface AICapabilitySummary {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  badges: string[];
  keyOutcomes: string[];
  hasDetailPage?: boolean;
}

export interface AIIndustryApplication {
  id: string;
  industry: string;
  badge: string;
  title: string;
  challenge: string;
  solution: string;
  verifiedOutcomes: string[];
  icon: string;
}

export interface AIProcessStep {
  step: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
  activities: string[];
  deliverables: string[];
}

export interface AICaseStudyItem {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  techStack: string[];
}

export interface AITechCategory {
  category: string;
  description: string;
  technologies: { name: string; type: string }[];
}

export interface AIInsightItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  slug: string;
}

export interface AICapabilityDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroHeadline: string;
  heroSubtitle: string;
  stats: { value: string; label: string }[];
  problem: {
    title: string;
    description: string;
    painPoints: string[];
  };
  outcomes: {
    title: string;
    description: string;
    benefits: string[];
  };
  whatItDoes: {
    headline: string;
    description: string;
    pillars: { title: string; desc: string; icon: string }[];
  };
  useCases: {
    title: string;
    description: string;
    targetPersona: string;
    businessImpact: string;
  }[];
  architecture: {
    overview: string;
    steps: {
      layer: string;
      name: string;
      details: string;
      tech: string[];
    }[];
  };
  technologies: {
    category: string;
    items: string[];
  }[];
  caseStudy: {
    clientContext: string;
    industry: string;
    challenge: string;
    implementation: string;
    outcomes: { label: string; value: string }[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: { title: string; href: string; desc: string }[];
  relatedIndustries: { name: string; href: string }[];
}

// -----------------------------------------------------------------------------
// AI SOLUTIONS HUB DATA
// -----------------------------------------------------------------------------

export const AI_CAPABILITIES_DATA: AICapabilitySummary[] = [
  {
    id: 'genai-llm',
    slug: 'generative-ai-enterprise-llm',
    title: 'Generative AI & Enterprise LLMs',
    tagline: 'Private, Domain-Tuned Models & Secure RAG Workflows',
    description:
      'Architect and deploy production-grade Large Language Model systems, private RAG pipelines, and domain-tuned copilots with strict data isolation, zero leakage, and deterministic guardrails.',
    icon: 'sparkles',
    badges: ['Enterprise RAG', 'Private LLMs', 'Guardrails'],
    keyOutcomes: [
      'Sub-second semantic search over enterprise documents',
      'Zero model retention / proprietary data privacy',
      'Verifiable citational accuracy with hybrid dense-sparse retrieval',
    ],
    hasDetailPage: true,
  },
  {
    id: 'agentic-ai',
    slug: 'agentic-ai-workflow-automation',
    title: 'Agentic AI & Autonomous Workflows',
    tagline: 'Multi-Step Goal-Oriented AI Agents with Tool Calling',
    description:
      'Engineer autonomous agents capable of multi-step reasoning, external API tool-calling, stateful persistence, and human-in-the-loop governance to automate complex cross-system business operations.',
    icon: 'bot',
    badges: ['Autonomous Agents', 'Tool Calling', 'Human-in-the-Loop'],
    keyOutcomes: [
      'Multi-system automated task reconciliation',
      'Context-aware workflow orchestration',
      'Deterministic error recovery and fallback circuits',
    ],
    hasDetailPage: false,
  },
  {
    id: 'predictive-ml',
    slug: 'predictive-analytics-machine-learning',
    title: 'Predictive Analytics & Machine Learning',
    tagline: 'Mathematical Forecasting, Anomaly Detection & Scoring',
    description:
      'Develop custom predictive models and probabilistic scoring pipelines tailored to time-series forecasting, demand modeling, fraud detection, and customer lifetime value optimization.',
    icon: 'trending-up',
    badges: ['Time-Series', 'Risk Scoring', 'Anomaly Detection'],
    keyOutcomes: [
      'Proactive churn and risk signal identification',
      'Inventory demand optimization with dynamic inputs',
      'Continuous model telemetry and drift remediation',
    ],
    hasDetailPage: false,
  },
  {
    id: 'computer-vision',
    slug: 'computer-vision-multimodal-ai',
    title: 'Computer Vision & Multimodal AI',
    tagline: 'Visual Quality Inspection, Document OCR & Sensor Fusion',
    description:
      'Deploy high-throughput edge and cloud vision pipelines for automated defect inspection, structured document OCR extraction, and multi-sensor spatial intelligence in manufacturing and healthcare.',
    icon: 'eye',
    badges: ['Edge Vision', 'Document OCR', 'Visual QA'],
    keyOutcomes: [
      'Real-time defect classification on manufacturing lines',
      'Automated structured data extraction from paper records',
      'High frame-rate edge inferencing with TensorRT & OpenVINO',
    ],
    hasDetailPage: false,
  },
  {
    id: 'saas-ai-modernization',
    slug: 'saas-ai-modernization',
    title: 'SaaS AI Modernization & Copilots',
    tagline: 'Transforming Legacy SaaS with Embedded AI Capabilities',
    description:
      'Inject native AI search, contextual assistant sidecars, and natural-language-to-SQL querying directly into existing multi-tenant SaaS architectures without disruptive refactoring.',
    icon: 'layers',
    badges: ['Copilot Sidecars', 'NL-to-SQL', 'Multi-Tenant AI'],
    keyOutcomes: [
      'Seamless multi-tenant tenant-data isolation',
      'Immediate user productivity gains via conversational UI',
      'Modular microservice integration with existing APIs',
    ],
    hasDetailPage: false,
  },
  {
    id: 'ai-governance-mlops',
    slug: 'ai-governance-security-mlops',
    title: 'Enterprise AI Governance & MLOps',
    tagline: 'ISO 27001 Security, Continuous Evaluation & Latency SLA',
    description:
      'Standardize the enterprise AI lifecycle with automated CI/CD evaluation test suites, prompt regression testing, token expenditure budgets, PII redaction, and compliance logging.',
    icon: 'shield-check',
    badges: ['ISO 27001', 'PII Redaction', 'Drift Monitoring'],
    keyOutcomes: [
      'Automated PII scrubbing before third-party model inference',
      'Token consumption auditing and latency optimization',
      'Auditable lineage tracking for regulatory compliance',
    ],
    hasDetailPage: false,
  },
];

export const AI_INDUSTRIES_DATA: AIIndustryApplication[] = [
  {
    id: 'healthcare',
    industry: 'Healthcare & Life Sciences',
    badge: 'HIPAA Compliant',
    title: 'Clinical Workflow Intelligence & Diagnostic Triaging',
    challenge:
      'Clinicians spend over 35% of their working hours on administrative documentation and patient query triaging, delaying patient care and driving physician burnout.',
    solution:
      'Webkorps implements HIPAA-compliant clinical consultation platforms with ambient notes summarization, automated appointment triaging, and secure Electronic Health Record (EHR) query copilots.',
    verifiedOutcomes: [
      'Implemented secure consultation infrastructure supporting Cigna partner ecosystem',
      'Reduced initial intake triage turnaround time by 45%',
      'Strict Zero-Retention data policy adhering to HIPAA and ISO 27001 protocols',
    ],
    icon: 'activity',
  },
  {
    id: 'fintech',
    industry: 'FinTech & Digital Payments',
    badge: 'PCI-DSS & SOC 2',
    title: 'Real-Time Fraud Prevention & Transaction Risk Intelligence',
    challenge:
      'High-velocity digital payment gateways face sophisticated automated fraud patterns and card testing attacks that traditional rule-based filters fail to capture without elevating false declines.',
    solution:
      'Engineered sub-50ms probabilistic scoring pipelines and behavioral embedding models that analyze transaction graphs, device telemetry, and velocity vectors simultaneously.',
    verifiedOutcomes: [
      'Engineered checkout and transaction flows for global scale payment platforms (PayPal ecosystem)',
      'Marked reduction in checkout drop-offs through adaptive authentication',
      'Zero false-decline degradation on high-volume merchant batches',
    ],
    icon: 'credit-card',
  },
  {
    id: 'logistics',
    industry: 'Logistics & Supply Chain',
    badge: 'Operational Telemetry',
    title: 'Dynamic Route Optimization & Demand Forecasting',
    challenge:
      'Volatile fuel costs, dock congestion, and sudden demand shifts create costly carrier empty miles and unpredictable delivery windows.',
    solution:
      'Integrated real-time GPS telemetry, weather feeds, and historical shipment volumes into a continuous reinforcement optimization model for dispatch routing and dock scheduling.',
    verifiedOutcomes: [
      '18% reduction in carrier re-routing delays across pilot lanes',
      'Predictive ETA accuracy improved to +/- 8 minutes on long-haul routes',
      'Automated bill of lading (BOL) extraction reducing manual freight audits',
    ],
    icon: 'truck',
  },
  {
    id: 'manufacturing',
    industry: 'Manufacturing & Industrial IoT',
    badge: 'Edge Computing',
    title: 'Predictive Machinery Maintenance & Visual Quality Assurance',
    challenge:
      'Unplanned downtime on high-precision CNC machinery and automated assembly lines incurs severe hourly operational losses and material waste.',
    solution:
      'Deployed on-premise edge inference units processing acoustic vibration telemetry and high-speed camera feeds to detect bearing wear and micro-fractures before line stoppage.',
    verifiedOutcomes: [
      'Early bearing degradation detection 72 hours prior to mechanical failure',
      'Defect detection accuracy exceeding 99.1% on automated optical inspection',
      'Full offline edge capability with periodic cloud calibration sync',
    ],
    icon: 'cpu',
  },
  {
    id: 'saas-enterprise',
    industry: 'Enterprise SaaS Platforms',
    badge: 'Multi-Tenant Scale',
    title: 'Embedded Copilots & Semantic Intelligence Systems',
    challenge:
      'B2B software users struggle to locate complex configuration settings and synthesize reports across dense tabular datasets, leading to high support ticket volumes.',
    solution:
      'Engineered embedded natural language interfaces and domain-specific knowledge copilots directly integrated into multi-tenant SaaS dashboards.',
    verifiedOutcomes: [
      '50% reduction in Level-1 support tickets for platform navigation',
      'Natural-language-to-visualization generation for non-technical users',
      'Strict row-level security ensuring zero cross-tenant data crossover',
    ],
    icon: 'layout',
  },
];

export const AI_PROCESS_STEPS: AIProcessStep[] = [
  {
    step: '01',
    phase: 'Discovery & Feasibility',
    title: 'AI Opportunity Audit & ROI Assessment',
    duration: 'Weeks 1–2',
    description:
      'We evaluate your business workflows, examine data readiness, identify high-impact use cases, and define clear measurable ROI benchmarks before writing a line of code.',
    activities: [
      'Data quality, schema & completeness audit',
      'Model selection evaluation (Open-source vs. Proprietary APIs)',
      'Security, data residency & compliance scoping (ISO 27001 / HIPAA / GDPR)',
      'Cost-per-query & infrastructure token budgeting',
    ],
    deliverables: [
      'AI Feasibility & Technical Architecture Scorecard',
      'Production Cost & Token Expenditure Model',
      'Sprint 1 Proof-of-Concept Specification',
    ],
  },
  {
    step: '02',
    phase: 'Architecture & POC',
    title: 'Rapid Prototyping & Pipeline Validation',
    duration: 'Weeks 3–5',
    description:
      'We build a focused, functional proof-of-concept on a subset of your enterprise data to validate retrieval accuracy, latency, guardrails, and real-world task success rates.',
    activities: [
      'Chunking strategy & hybrid vector index creation',
      'Prompt engineering & few-shot evaluation frameworks',
      'PII redaction and deterministic hallucination guardrails',
      'Stakeholder testing sandbox & blind review sessions',
    ],
    deliverables: [
      'Functional Cloud or Edge Prototype Sandbox',
      'Quantitative Benchmark Report (Accuracy, Latency, Recall)',
      'Enterprise Production Integration Blueprint',
    ],
  },
  {
    step: '03',
    phase: 'Enterprise Integration',
    title: 'Secure Integration & System Orchestration',
    duration: 'Weeks 6–10',
    description:
      'We connect the validated AI pipeline into your live enterprise tech stack—integrating authentication, databases, existing microservices, and user-facing frontend applications.',
    activities: [
      'OAuth2, SSO, and Role-Based Access Control (RBAC) integration',
      'Asynchronous task workers with Celery / Kafka queueing',
      'Database connection pooling & vector search caching (Redis)',
      'Comprehensive regression & safety adversarial stress testing',
    ],
    deliverables: [
      'Fully Integrated Production Microservices',
      'End-to-End API Documentation & Postman Suites',
      'Security Audit & Vulnerability Assessment Sign-off',
    ],
  },
  {
    step: '04',
    phase: 'Deployment & MLOps',
    title: 'Production Rollout, Telemetry & Continuous Learning',
    duration: 'Ongoing',
    description:
      'We deploy with blue/green zero-downtime mechanisms and implement automated MLOps pipelines to monitor token latency, model drift, cost anomalies, and continuous fine-tuning.',
    activities: [
      'Real-time latency and token expenditure dashboards',
      'Automated semantic evaluation of live model responses',
      'Continuous dataset ingestion & periodic fine-tuning loops',
      '24/7 infrastructure SLA monitoring & proactive scaling',
    ],
    deliverables: [
      'Live Production MLOps Monitoring Dashboard',
      'Automated Drift Alerting & Fallback Automation',
      'Operational Runbooks & Engineering Team Handover',
    ],
  },
];

export const AI_CASE_STUDIES_DATA: AICaseStudyItem[] = [
  {
    id: 'healthcare-consultation',
    client: 'Enterprise Healthcare Platform (Cigna Integration)',
    industry: 'Healthcare Technology',
    title: 'Secure Patient Consultation & Intelligent Clinical Scheduling Platform',
    challenge:
      'A multi-specialty telemedicine provider needed to streamline online consultations, appointment bookings, and clinical triage while maintaining strict HIPAA compliance and zero data leakage across physician networks.',
    solution:
      'Engineered an intelligent digital health platform with verified clinical intake forms, automated schedule matching, and secure electronic health records query capabilities.',
    impactMetrics: [
      { label: 'Patient Triage Speed', value: '+45%' },
      { label: 'HIPAA Compliance', value: '100%' },
      { label: 'Active Provider Specialists', value: '500+' },
    ],
    techStack: ['Python', 'PostgreSQL', 'FastAPI', 'AWS Bedrock', 'Docker', 'Redis'],
  },
  {
    id: 'payment-intelligence',
    client: 'Global Payment Infrastructure (PayPal Ecosystem)',
    industry: 'FinTech & Payments',
    title: 'High-Throughput Card Checkout & Transaction Risk Intelligence Flow',
    challenge:
      'A leading payment system required enhanced checkout speed, modernized card processing, and intelligent fraud scoring to handle high-concurrency peak merchant volumes without latency penalties.',
    solution:
      'Built a resilient, high-speed checkout infrastructure incorporating automated transaction validation, adaptive verification prompts, and secure tokenization protocols.',
    impactMetrics: [
      { label: 'Checkout Latency', value: '<120ms' },
      { label: 'Checkout Abandonment', value: '-22%' },
      { label: 'Uptime Reliability', value: '99.99%' },
    ],
    techStack: ['TypeScript', 'Node.js', 'Go', 'Kafka', 'Redis', 'Kubernetes'],
  },
  {
    id: 'digital-wellness',
    client: 'Canopie Mental Health Platform',
    industry: 'Digital Health & Wellness',
    title: 'Personalized Conversational Companion for Maternal Mental Health',
    challenge:
      'Expecting and new mothers required accessible, evidence-based psychological support with compassionate conversational triage that reliably identifies clinical risk escalation points.',
    solution:
      'Designed a personalized mobile wellness platform with structured therapeutic modules, conversational mood tracking, and clinical safety fallback circuits.',
    impactMetrics: [
      { label: 'Daily User Engagement', value: '3.4x' },
      { label: 'Clinical Protocol Adherence', value: '98.5%' },
      { label: 'Safety Escalation Precision', value: '99.8%' },
    ],
    techStack: ['React Native', 'Python', 'FastAPI', 'LangChain', 'AWS'],
  },
];

export const AI_TECH_CATEGORIES: AITechCategory[] = [
  {
    category: 'Foundation Models & LLMs',
    description: 'Battle-tested proprietary and open-weights models tailored to specific latency and cost requirements.',
    technologies: [
      { name: 'OpenAI GPT-4o / o1', type: 'Proprietary' },
      { name: 'Anthropic Claude 3.5 Sonnet', type: 'Proprietary' },
      { name: 'Google Gemini 1.5 Pro', type: 'Proprietary' },
      { name: 'Meta Llama 3.1 / 3.2', type: 'Open Weights' },
      { name: 'Mistral Large / Codestral', type: 'Open Weights' },
      { name: 'DeepSeek R1', type: 'Open Reasoning' },
    ],
  },
  {
    category: 'Vector Databases & Retrieval',
    description: 'High-performance vector indices powering dense, sparse, and hybrid semantic search architectures.',
    technologies: [
      { name: 'Pinecone', type: 'Managed Vector' },
      { name: 'Qdrant', type: 'Rust Vector DB' },
      { name: 'Milvus', type: 'Distributed Vector' },
      { name: 'pgvector (PostgreSQL)', type: 'Relational Vector' },
      { name: 'ChromaDB', type: 'Embedded Vector' },
      { name: 'Elasticsearch / OpenSearch', type: 'Hybrid BM25' },
    ],
  },
  {
    category: 'Frameworks & Orchestration',
    description: 'Production toolchains for prompt engineering, agent tool-calling, and evaluation pipelines.',
    technologies: [
      { name: 'LangChain / LangGraph', type: 'Orchestration' },
      { name: 'LlamaIndex', type: 'Data Ingestion' },
      { name: 'vLLM', type: 'High-Throughput Serving' },
      { name: 'HuggingFace TGI', type: 'Inference Engine' },
      { name: 'Instructor / Outlines', type: 'Structured Output' },
      { name: 'FastAPI / gRPC', type: 'High-Speed API' },
    ],
  },
  {
    category: 'Enterprise Cloud & MLOps',
    description: 'Scalable infrastructure providing enterprise security, zero-retention logging, and compute efficiency.',
    technologies: [
      { name: 'AWS Bedrock & SageMaker', type: 'Cloud AI' },
      { name: 'Azure OpenAI & AI Foundry', type: 'Cloud AI' },
      { name: 'Google Cloud Vertex AI', type: 'Cloud AI' },
      { name: 'MLflow & Weights & Biases', type: 'Experiment Tracking' },
      { name: 'Docker & Kubernetes', type: 'Container Scale' },
      { name: 'NVIDIA Triton', type: 'GPU Inference Server' },
    ],
  },
];

export const AI_INSIGHTS_DATA: AIInsightItem[] = [
  {
    id: 'ai-insight-1',
    title: 'Industrial IoT Pilots Are Failing. Here Is Where They Break Down',
    category: 'AI-ML Development',
    readTime: '6 min read',
    summary:
      'Why 80% of predictive maintenance pilots stall before production, and the data telemetry architecture required to cross the deployment chasm.',
    slug: 'industrial-iot-pilots',
  },
  {
    id: 'ai-insight-2',
    title: 'Deploying Enterprise RAG with Strict Data Sovereignty & Zero Retention',
    category: 'Generative AI',
    readTime: '8 min read',
    summary:
      'A technical blueprint for building domain-specific document search that prevents model training on proprietary corporate intellectual property.',
    slug: 'enterprise-rag-data-sovereignty',
  },
  {
    id: 'ai-insight-3',
    title: 'The Executive Guide to Agentic AI & Autonomous Workflows in 2026',
    category: 'Agentic AI',
    readTime: '5 min read',
    summary:
      'Moving past simple chatbots: how autonomous agents with tool-calling capabilities automate complex back-office reconciliation.',
    slug: 'executive-guide-agentic-ai',
  },
];

// -----------------------------------------------------------------------------
// REPRESENTATIVE CAPABILITY DETAIL PAGE: GENERATIVE AI & ENTERPRISE LLMS
// -----------------------------------------------------------------------------

export const GENERATIVE_AI_DETAIL_DATA: AICapabilityDetail = {
  slug: 'generative-ai-enterprise-llm',
  name: 'Generative AI & Enterprise LLMs',
  metaTitle: 'Generative AI & Enterprise LLM Solutions | Webkorps',
  metaDescription:
    'Architect and scale production-grade Generative AI, private enterprise RAG pipelines, and domain-tuned copilots with strict data privacy, ISO 27001 compliance, and verifiable accuracy.',
  badge: 'Enterprise Capability',
  heroHeadline: 'Production-Grade Generative AI & Secure Enterprise LLMs',
  heroSubtitle:
    'We engineer domain-tuned LLM architectures, private Retrieval-Augmented Generation (RAG) pipelines, and intelligent copilot agents that solve high-stakes business challenges with zero data leakage, verifiable citations, and deterministic guardrails.',
  stats: [
    { value: '<250ms', label: 'Average Retrieval Latency' },
    { value: '99.4%', label: 'Verifiable Citation Accuracy' },
    { value: '0%', label: 'Proprietary Data Retention by Public Models' },
    { value: 'ISO 27001', label: 'Certified Security Standards' },
  ],
  problem: {
    title: 'The Challenge Enterprises Face with Generative AI',
    description:
      'While off-the-shelf public AI models impress in consumer demos, enterprise technology leaders face severe roadblocks when attempting to operationalize them across real business workflows.',
    painPoints: [
      'Hallucinations & False Citations: Generic LLMs invent facts when queried on nuanced internal policies or legal documents.',
      'Data Privacy & IP Exposure: Sending sensitive intellectual property or customer PII to third-party APIs risks catastrophic compliance violations.',
      'Lack of Internal Context: Public models have no awareness of your proprietary ERP, CRM, ticket history, or product specifications.',
      'Cost Spikes & Latency Choke points: Inefficient prompt chaining leads to runaway token costs and 15+ second user response times.',
    ],
  },
  outcomes: {
    title: 'Measurable Business Outcomes with Webkorps Engineering',
    description:
      'We turn raw LLMs into deterministic, auditable software assets that deliver quantifiable operational savings and competitive moats.',
    benefits: [
      '60% Faster Knowledge Retrieval: Employees locate accurate answers across millions of dense technical documents in seconds.',
      'Ironclad Data Sovereignty: Private VPC or on-premise deployments with strict zero-data-retention agreements guarantee compliance.',
      'Factual Grounding with Citations: Every answer references specific document paragraphs with direct clickable provenance.',
      'Predictable Token Economics: Intelligent vector caching and model tiering cut token consumption overhead by up to 50%.',
    ],
  },
  whatItDoes: {
    headline: 'Comprehensive Enterprise Generative AI Capabilities',
    description:
      'From private document copilots to domain-specific fine-tuned models, we build the entire stack from data ingestion to user experience.',
    pillars: [
      {
        title: 'Enterprise RAG Pipelines',
        desc: 'Hybrid dense-sparse semantic search combining vector embeddings with BM25 keyword matching for flawless domain document retrieval.',
        icon: 'database',
      },
      {
        title: 'Domain Model Fine-Tuning',
        desc: 'Supervised fine-tuning (LoRA / QLoRA) on curated proprietary datasets to teach models your company vocabulary, tone, and formatting rules.',
        icon: 'cpu',
      },
      {
        title: 'Deterministic Guardrails & Safety',
        desc: 'Pre- and post-processing evaluation layers that mask PII, block prompt injection, enforce brand tone, and filter out speculative statements.',
        icon: 'shield',
      },
      {
        title: 'Embedded Copilots & Assistants',
        desc: 'Modern, accessible UI components embedded directly into your web, desktop, or mobile applications with streaming responses and citations.',
        icon: 'layout',
      },
    ],
  },
  useCases: [
    {
      title: 'Enterprise Knowledge & Policy Copilot',
      description:
        'A unified conversational interface querying engineering wikis, HR policies, compliance manuals, and internal documentation across distributed teams.',
      targetPersona: 'Internal Operations, HR & Engineering Teams',
      businessImpact: 'Reduces onboarding time by 40% and eliminates repeated repetitive internal queries.',
    },
    {
      title: 'Automated Contract & Document Intelligence',
      description:
        'Rapid extraction and comparison of legal clauses, vendor liabilities, and payment terms across thousands of dense PDF contracts and lease agreements.',
      targetPersona: 'Legal, Procurement & Finance Departments',
      businessImpact: 'Cuts contract audit cycles from 4 business days to under 15 minutes per document.',
    },
    {
      title: 'Conversational Customer Support Copilot',
      description:
        'Tier-1 customer service assistant that autonomously resolves complex product queries with accurate links, with seamless escalation to human agents.',
      targetPersona: 'Customer Experience & Support Leaders',
      businessImpact: 'Autonomously resolves 55% of incoming support tickets while maintaining a 94%+ CSAT rating.',
    },
    {
      title: 'Automated Clinical & Diagnostic Charting Assistant',
      description:
        'HIPAA-compliant ambient notes summarization that converts patient-doctor consultation audio into structured medical record entries.',
      targetPersona: 'Healthcare Providers & Telemedicine Networks',
      businessImpact: 'Saves physicians 1.5 hours per day on electronic health record documentation.',
    },
  ],
  architecture: {
    overview:
      'Our enterprise RAG architecture separates data ingestion, semantic indexing, security guardrails, and model orchestration into modular, independently scalable microservices.',
    steps: [
      {
        layer: 'Layer 1: Ingestion & Processing',
        name: 'Document Parsing & OCR',
        details:
          'Ingests PDFs, DOCX, audio transcripts, and SQL databases. Performs layout analysis, table extraction, chunking with contextual overlap, and PII anonymization.',
        tech: ['Unstructured.io', 'Tesseract OCR', 'Python', 'Apache Tika'],
      },
      {
        layer: 'Layer 2: Hybrid Indexing',
        name: 'Vector & Sparse Semantic Store',
        details:
          'Embeds text chunks using state-of-the-art embedding models. Stores vectors in high-concurrency indices and builds reciprocal rank fusion (RRF) indices.',
        tech: ['Pinecone', 'Qdrant', 'pgvector', 'BGE-Large / text-embedding-3'],
      },
      {
        layer: 'Layer 3: Security & Guardrails',
        name: 'PII Redaction & Safety Gateway',
        details:
          'Validates user queries against prompt injection detectors, checks tenant role permissions, masks PII before API transit, and sets strict latency budgets.',
        tech: ['NeMo Guardrails', 'Presidio', 'Llama-Guard', 'Redis Rate Limiter'],
      },
      {
        layer: 'Layer 4: Orchestration & Generation',
        name: 'Contextual Reranking & Model Gateway',
        details:
          'Reranks top retrieved chunks using Cohere / cross-encoders, constructs grounded prompt contexts, routes to optimal model tier, and streams tokens to frontend.',
        tech: ['LangChain', 'LlamaIndex', 'Cohere Rerank', 'Claude 3.5 / GPT-4o / vLLM'],
      },
    ],
  },
  technologies: [
    {
      category: 'Foundation Models',
      items: ['Anthropic Claude 3.5 Sonnet', 'OpenAI GPT-4o & o1', 'Meta Llama 3.1 70B/405B', 'Google Gemini 1.5 Pro', 'Mistral Large'],
    },
    {
      category: 'Vector Databases',
      items: ['Pinecone Enterprise', 'Qdrant Distributed', 'PostgreSQL / pgvector', 'Milvus', 'OpenSearch Hybrid'],
    },
    {
      category: 'Frameworks & Serving',
      items: ['LangGraph / LangChain', 'LlamaIndex', 'vLLM Serving', 'FastAPI High-Speed Async', 'Instructor'],
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['AWS Bedrock & Private VPC', 'Azure OpenAI Service', 'GCP Vertex AI', 'Docker & Kubernetes', 'Triton Inference Server'],
    },
  ],
  caseStudy: {
    clientContext: 'Major Telemedicine & Healthcare Services Network',
    industry: 'Healthcare & Telehealth',
    challenge:
      'Patient inquiries spanning thousands of clinical conditions required rapid, accurate medical information triage while strictly forbidding hallucinated clinical advice and adhering to HIPAA and ISO 27001 data isolation laws.',
    implementation:
      'Webkorps engineered an isolated enterprise RAG pipeline connecting verified clinical literature and provider directories. The solution enforces hard citational grounding, automatic physician review flags, and zero-retention private cloud hosting on AWS Bedrock.',
    outcomes: [
      { label: 'Clinical Intake Turnaround', value: '45% Faster' },
      { label: 'Factual Accuracy on Test Sets', value: '99.4%' },
      { label: 'HIPAA & ISO 27001 Audit', value: '100% Pass' },
      { label: 'Physician Satisfaction Score', value: '4.8 / 5.0' },
    ],
  },
  faqs: [
    {
      question: 'Will our proprietary enterprise data be used to train public AI models?',
      answer:
        'Never. We mandate zero-data-retention enterprise agreements with model providers (such as AWS Bedrock, Azure OpenAI, or direct private endpoints) or deploy fully self-hosted open-weights models (like Llama 3) inside your dedicated private VPC or on-premise infrastructure. Your data never leaves your security perimeter.',
    },
    {
      question: 'How do you prevent hallucinations in high-stakes business environments?',
      answer:
        'We employ hybrid semantic retrieval (combining vector search with exact keyword BM25 match), cross-encoder re-ranking, and strict temperature control. Most importantly, our architecture enforces verifiable paragraph-level citations; if the underlying documents do not contain evidence for an answer, the model is programmed to explicitly declare uncertainty rather than speculate.',
    },
    {
      question: 'What is the typical timeline for an enterprise Generative AI project?',
      answer:
        'Our proven methodology begins with a 2-week Discovery and Feasibility audit, followed by a functional Proof-of-Concept delivered in 3 to 4 weeks. Enterprise integration and production rollout typically complete within 8 to 12 weeks, depending on data preparation complexity and third-party API integration requirements.',
    },
    {
      question: 'How do you manage ongoing LLM inference costs and latency?',
      answer:
        'We implement tiered model routing—using lightweight, sub-cent models for simple classification and query rewriting, and reserving frontier models (like Claude 3.5 Sonnet or GPT-4o) exclusively for complex multi-document synthesis. Coupled with semantic caching in Redis, this approach frequently reduces token expenditures by 40% to 60%.',
    },
    {
      question: 'Can you integrate this solution with our existing authentication and permissions (RBAC)?',
      answer:
        'Yes. We enforce document-level and chunk-level Access Control Lists (ACLs) synchronized directly with your existing Active Directory, Okta, or OAuth2 providers. Users can only retrieve and generate answers from documents they already possess explicit permissions to view.',
    },
  ],
  relatedServices: [
    {
      title: 'Enterprise Software Development',
      href: '/#services',
      desc: 'Build scalable, secure microservices and modern distributed web platforms.',
    },
    {
      title: 'Custom Software Development',
      href: '/#services',
      desc: 'End-to-end custom digital engineering tailored to unique business models.',
    },
    {
      title: 'Mobile App Development',
      href: '/#services',
      desc: 'Native iOS and Android mobile solutions with embedded AI capabilities.',
    },
  ],
  relatedIndustries: [
    { name: 'Healthcare & Life Sciences', href: '/#industries' },
    { name: 'FinTech & Payments', href: '/#industries' },
    { name: 'Manufacturing & Industrial IoT', href: '/#industries' },
    { name: 'Logistics & Supply Chain', href: '/#industries' },
  ],
};
