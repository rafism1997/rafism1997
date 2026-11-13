export const profile = {
  name: "Rafi Shaik Mohammed",
  initials: "RSM",
  roles: ["AI Solutions Architect", "Forward Deployed Engineer"],
  company: "UST",
  location: "Alpharetta, GA",
  status: "Open to opportunities",
  headline:
    "Agentic AI, RAG and vision systems, carried from research and edge prototypes to reliable production.",
  intro:
    "5+ years building and deploying production AI across insurance, pharmaceutical, retail and manufacturing: LLM applications, multi-agent orchestration, RAG pipelines and AI-driven SDLC automation, alongside computer vision and robotics.",
  focus: ["Agentic AI", "RAG", "MLOps", "Vision AI"],
  email: "rafism1997@gmail.com",
  phone: { label: "+1 (949) 750-5403", href: "tel:+19497505403" },
  linkedin: {
    label: "linkedin.com/in/s-m-rafi-911442130",
    href: "https://www.linkedin.com/in/s-m-rafi-911442130/",
  },
  github: { label: "github.com/rafism1997", href: "https://github.com/rafism1997" },
  languages: ["English", "Malayalam", "Hindi"],
}

export const navigation = [
  { id: "profile", label: "Profile" },
  { id: "systems", label: "Systems" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
]

export const metrics = [
  { value: "5+", unit: "years", label: "Building and deploying production AI systems" },
  { value: "60–80%", unit: "gain", label: "SDLC efficiency improvement from AI-DLC and agent pipelines" },
  { value: "2", unit: "patents", label: "Granted in the US and India for an Electronic Shelf Label design" },
  { value: "25–30", unit: "FPS", label: "Real-time YOLO detection on the NVIDIA Jetson Nano" },
]

export const about = {
  paragraphs: [
    "I am an AI Solutions Architect and Forward Deployed Engineer with 5+ years building and deploying production AI systems: LLM applications, agentic workflows, multi-agent orchestration, RAG pipelines and AI-driven SDLC automation, alongside computer vision and robotics.",
    "Today I build RAG pipelines and agentic LLM systems spanning retrieval, orchestration and evaluation with RAGAS and LangSmith. That includes spec-driven agentic workflows in Kiro, an AI-DLC workflow and a custom code-review agent pipeline on AWS that improved SDLC efficiency by 60–80%.",
    "I am a named inventor on a granted US Design Patent and an Indian Patent for a novel Electronic Shelf Label design, and I am most useful carrying a system from research and edge-hardware prototyping through to reliable production deployment.",
  ],
  domains: ["Insurance", "Pharmaceutical", "Retail", "Manufacturing"],
  lifecycle: [
    "Data pipelines",
    "Experiment tracking",
    "Model registry and versioning",
    "Model serving",
    "Monitoring",
  ],
  platforms: [
    { name: "AWS", services: ["SageMaker", "Bedrock", "AgentCore"] },
    { name: "Databricks", services: ["MLflow", "Model Serving", "Unity Catalog"] },
    { name: "Azure", services: ["Functions", "Logic Apps", "Event Hubs", "AI Foundry"] },
  ],
}

export type SystemReadout = {
  label: string
  value: string
  highlight?: boolean
}

export type SystemEntry = {
  id: string
  tag: string
  title: string
  summary: string
  readout: SystemReadout[]
  stack: string[]
}

export const flagshipSystem: SystemEntry & { phases: string[] } = {
  id: "SYS-01",
  tag: "Insurance / Federal projects",
  title: "AI-DLC: an AI-driven development lifecycle",
  summary:
    "AI agents embedded across requirements, design, code generation, testing and review, with a human approval gate at each phase so engineers stay in control of key decisions. Built spec-first in Kiro, alongside a custom code-review agent pipeline on AWS that checks pull requests before a human does.",
  phases: ["Requirements", "Design", "Code generation", "Testing", "Review"],
  readout: [
    {
      label: "Efficiency",
      value: "60–80% improvement in SDLC efficiency, measured on cycle time, review turnaround and rework",
      highlight: true,
    },
    {
      label: "Security",
      value: "Encryption, role-based access and data masking / redaction for PHI and PII",
    },
    {
      label: "Tooling",
      value: "Kiro steering files, agent hooks and MCP server integrations",
    },
  ],
  stack: ["Kiro", "Spec-driven development", "MCP", "Code-review agent", "AWS"],
}

export const systems: SystemEntry[] = [
  {
    id: "SYS-02",
    tag: "Agent platform",
    title: "Agentic AI pipelines on AWS",
    summary:
      "Agentic pipelines on Amazon Bedrock for foundation models and knowledge bases, with Bedrock AgentCore providing agent runtime, memory, identity and tool gateway. AWS Lambda and Step Functions orchestrate the multi-step workflows.",
    readout: [
      { label: "Safety", value: "Bedrock Guardrails" },
      { label: "Tracing", value: "CloudWatch and OpenTelemetry" },
      { label: "Tracked", value: "Tool-call accuracy, latency and cost in production" },
    ],
    stack: ["Bedrock", "AgentCore", "Lambda", "Step Functions", "OpenTelemetry"],
  },
  {
    id: "SYS-03",
    tag: "Healthcare / Radiology",
    title: "Medical RAG platform for radiologists",
    summary:
      "A production-grade RAG platform delivering literature-derived diagnostic support for tumor analysis. It operates strictly in observation space: retrieval and evidence correlation stay decoupled from diagnostic coding, which is applied only after the radiologist's own determination.",
    readout: [
      { label: "Retrieval", value: "Hybrid dense + sparse search with a cross-encoder reranker" },
      { label: "Sources", value: "Citations from PubMed, CORE and TCIA" },
      { label: "Evaluation", value: "RAGAS and LangSmith across releases" },
    ],
    stack: ["LangChain", "LangGraph", "MLflow", "SageMaker", "Bedrock"],
  },
  {
    id: "SYS-04",
    tag: "Pharmaceutical",
    title: "Vision AI for vial fill-line monitoring",
    summary:
      "Vision AI models for vial-production fill lines, scoped through site visits that tied KPIs and KPMs to measurable business value, then delivered end to end for enterprise clients as Implementation Specialist.",
    readout: [
      { label: "Inference", value: "Real-time on NVIDIA GPUs with TensorRT" },
      { label: "MLOps", value: "Tracking, registry, deployment and drift monitoring for on-prem models on Azure" },
      { label: "Release", value: "CI/CD on AWS EC2 across heterogeneous environments" },
    ],
    stack: ["Computer vision", "Azure MLOps", "TensorRT", "CI/CD"],
  },
  {
    id: "SYS-05",
    tag: "Retail / IoT",
    title: "Patented Electronic Shelf Label platform",
    summary:
      "Led the design of a 4-foot ESL hinge mechanism that secured US and Indian design patents, and built the middleware and Event Hub distribution system that pushes updates to every label in the fleet.",
    readout: [
      { label: "Latency", value: "60% lower data-transmission latency with parallel workflows", highlight: true },
      { label: "Patents", value: "US D1,004,400 S and IN 354819-001" },
      { label: "Network", value: "Azure IoT Hub and Event Hubs" },
    ],
    stack: ["Azure IoT Hub", "Event Hubs", "Middleware", "Hardware design"],
  },
  {
    id: "SYS-06",
    tag: "Edge AI / Robotics",
    title: "Edge vision and warehouse robots",
    summary:
      "YOLOv8 and YOLO11 models deployed as inference payloads at the edge, and Autonomous Mobile Robots for warehouse management built on ROS and validated in NVIDIA Isaac Sim before physical deployment.",
    readout: [
      { label: "Detection", value: "25–30 FPS on the Jetson Nano with TensorRT", highlight: true },
      { label: "Navigation", value: "RTAB-Map SLAM and RRT path planning" },
      { label: "Fleet", value: "AWS RoboMaker and Azure IoT Hub pipelines" },
    ],
    stack: ["YOLOv8", "YOLO11", "Jetson Nano", "ROS", "Isaac Sim"],
  },
]

export const earlierBuilds = [
  {
    title: "Tea leaf disease detection",
    summary:
      "Multi-class YOLOv9 model for agricultural disease classification: 95% precision, 96% recall, 95.5% F1 and 94.8% mAP@0.5.",
    stack: ["YOLOv9", "PyTorch"],
  },
  {
    title: "Conversational Metahuman",
    summary:
      "Photorealistic NLP assistant built in Unreal Engine with OpenAI GPT-3 for interactive enterprise support and training.",
    stack: ["Unreal Engine", "GPT-3"],
  },
  {
    title: "POS device troubleshooting",
    summary:
      "Vision AI tool giving point-of-sale operators real-time issue detection and guidance during live support, to shorten resolution time.",
    stack: ["Computer vision", "Edge computing"],
  },
]

export type ExperienceRole = {
  id: string
  title: string
  company: string
  location: string
  period: string
  summary: string
  groups: { title: string; points: string[] }[]
}

export const experience: ExperienceRole[] = [
  {
    id: "ai-solutions-architect",
    title: "AI Solutions Architect",
    company: "UST",
    location: "Alpharetta, Georgia",
    period: "Dec 2025 – Present",
    summary:
      "Embedding AI agents into how enterprise software gets built, and delivering agentic and Vision AI systems end to end.",
    groups: [
      {
        title: "AI-driven development lifecycle",
        points: [
          "Implemented an AI-Driven Development Lifecycle (AI-DLC) workflow on AWS platforms such as Kiro, embedding AI agents across requirements, design, code generation, testing, and review, with human approval gates at each phase to keep engineers in control of key decisions.",
          "Delivered AI-DLC engagements for insurance clients on federal projects involving sensitive data, architecting data-security controls (encryption, role-based access, and data masking / redaction) to ensure PHI and PII were handled securely and in line with compliance requirements throughout the development lifecycle.",
          "Built a custom code-review agent pipeline on AWS that automatically reviews pull requests against team coding standards, security, and best practices, surfacing actionable findings before human review.",
          "Defined and captured work-efficiency KPI metrics across the SDLC, including cycle time, review turnaround, and rework, demonstrating a 60–80% improvement in SDLC efficiency.",
          "Built agentic development workflows in Kiro (AWS's agentic IDE) using spec-driven development, turning requirements, design, and task specs into implemented agentic pipelines with traceable, reviewable design decisions.",
          "Configured Kiro steering files, agent hooks, and MCP server integrations to enforce coding standards, automate test and documentation generation on code changes, and connect agents to enterprise tools and data sources.",
        ],
      },
      {
        title: "Agentic AI on AWS",
        points: [
          "Architected and deployed agentic AI pipelines on AWS: Amazon Bedrock for foundation models and knowledge bases, and Bedrock AgentCore for agent runtime, memory, identity, and tool gateway, with AWS Lambda and Step Functions orchestrating multi-step workflows.",
          "Applied Bedrock Guardrails and instrumented agent observability with CloudWatch and OpenTelemetry tracing to monitor tool-call accuracy, latency, and cost of agentic pipelines in production.",
        ],
      },
      {
        title: "Vision AI and MLOps delivery",
        points: [
          "Served as Implementation Specialist for Vision AI product solutions, focusing on end-to-end delivery for enterprise clients.",
          "Developed and designed Vision AI models for vial-production fill-line monitoring; conducted site visits to identify KPIs and KPMs and tie them to measurable business value.",
          "Designed MLOps pipelines spanning the model lifecycle (experiment tracking, model versioning and registry, deployment, and monitoring) for on-prem computer-vision models using Azure MLOps frameworks; built a data-pipeline framework for automated model re-patch and fine-tuning.",
          "Optimized hardware configurations and interfaced ML models with edge devices, achieving real-time inferencing using NVIDIA GPUs and TensorRT.",
          "Automated deployment across heterogeneous environments with CI/CD workflows on AWS EC2, standardizing model rollout and reducing manual release effort.",
          "Instrumented performance and drift monitoring for deployed models to ensure consistent accuracy and efficiency in production.",
        ],
      },
    ],
  },
  {
    id: "developer-iii",
    title: "Developer III, Enterprise Solutions",
    company: "UST",
    location: "Aliso Viejo, California",
    period: "Oct 2024 – Dec 2025",
    summary:
      "Led product development of a RAG-based medical AI platform for radiologists, from architecture through evaluation and roadmap.",
    groups: [
      {
        title: "Medical RAG platform",
        points: [
          "Led product development for a production-grade RAG-based medical AI platform delivering literature-derived diagnostic support to radiologists for tumor analysis.",
          "Designed the end-to-end system, data flow, and component architecture, spanning ingestion, retrieval, agent orchestration, and the radiologist-facing application layer.",
          "Implemented hybrid search (dense + sparse retrieval) with a cross-encoder reranker for high-precision retrieval of clinical literature, with citations sourced from accredited repositories including PubMed, CORE, and TCIA.",
          "Architected the platform to operate strictly in observation space: retrieval and evidence correlation remain decoupled from diagnostic coding (SNOMED / ICD), which is applied only after the radiologist's own determination, preserving the non-diagnostic regulatory posture.",
        ],
      },
      {
        title: "Agents, lifecycle and evaluation",
        points: [
          "Built agentic workflows using LangChain / LangGraph to streamline the radiologist's review order, surfacing evidence-attributed impressions so clinicians focus solely on validation.",
          "Managed model lifecycle and reproducibility with MLflow (experiment tracking and model registry); packaged and served models behind REST APIs, with MLOps on AWS SageMaker and Bedrock.",
          "Established evaluation with RAGAS and LangSmith to measure retrieval quality and response faithfulness across releases.",
        ],
      },
      {
        title: "Product strategy",
        points: [
          "Created the product strategy and roadmap, incorporating customer feedback, the evolving regulatory landscape, and competitive market dynamics.",
        ],
      },
    ],
  },
  {
    id: "developer-ii",
    title: "Developer II, Enterprise Solutions",
    company: "UST",
    location: "Thiruvananthapuram, Kerala",
    period: "Jan 2021 – Oct 2024",
    summary: "Patented hardware design, IoT data pipelines, edge vision and warehouse robotics.",
    groups: [
      {
        title: "Electronic Shelf Labels",
        points: [
          "Led the design of a state-of-the-art 4-foot ESL hinge mechanism, securing both US and Indian design patents for the team.",
          "Developed middleware for ESL communication with Azure IoT Hub integration, enabling seamless, reliable data transmission across the device fleet.",
          "Architected the Event Hub management and data-distribution system to push updates to all ESLs at scale; reduced data-transmission latency by 60% by re-engineering the pipeline around parallel workflows.",
        ],
      },
      {
        title: "Edge vision and robotics",
        points: [
          "Designed and deployed vision-based YOLO models (YOLOv8 and YOLO11) as inference payloads, achieving real-time detection at 25–30 FPS on the NVIDIA Jetson Nano with TensorRT optimization.",
          "Developed Autonomous Mobile Robots (AMRs) for warehouse management using ROS, achieving accurate localization with RTAB-Map SLAM and RRT path planning; validated control systems in NVIDIA Isaac Sim before physical deployment.",
          "Deployed simulation and fleet-management pipelines across AWS RoboMaker and Azure IoT Hub, enabling cloud-orchestrated edge computing at fleet scale.",
        ],
      },
    ],
  },
]

export type StackItem = {
  name: string
  detail?: string
}

export type StackCategory = {
  id: string
  label: string
  items: StackItem[]
}

const entry = (name: string, detail?: string): StackItem => ({ name, detail })

export const stack: StackCategory[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "YAML"].map((name) => entry(name)),
  },
  {
    id: "ml-lifecycle",
    label: "MLOps / ML lifecycle",
    items: [
      entry("MLflow", "experiment tracking, model registry, model signatures, model serving"),
      entry(
        "Databricks",
        "Model Serving REST endpoints, Unity Catalog model registry, Feature Store, Asset Bundles",
      ),
      entry("Model versioning"),
      entry("A/B testing & rollback"),
      entry("CI/CD for model deployment"),
      entry("Model monitoring & drift detection"),
    ],
  },
  {
    id: "ml-ai",
    label: "ML / AI",
    items: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "OpenCV", "YOLO", "Ollama"].map((name) =>
      entry(name),
    ),
  },
  {
    id: "llm-rag",
    label: "LLM / RAG",
    items: [
      entry("LangChain"),
      entry("LangGraph"),
      entry("RAG"),
      entry("AI agents & orchestration"),
      entry("MCP", "Model Context Protocol"),
      entry("Kiro", "spec-driven agentic development"),
      entry("LangSmith"),
      entry("RAGAS"),
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["Chroma", "FAISS", "Pinecone", "Neo4j", "PostgreSQL", "Snowflake"].map((name) => entry(name)),
  },
  {
    id: "cloud",
    label: "Cloud / MLOps",
    items: [
      entry("AWS", "Bedrock, AgentCore, SageMaker, Lambda, Step Functions, EC2"),
      entry("Databricks"),
      entry("Azure", "Functions, Logic Apps, Event Hubs, AI Foundry"),
      entry("Kafka"),
      entry("CI/CD"),
      entry("Git / GitHub"),
    ],
  },
  {
    id: "serving",
    label: "Web / Serving",
    items: ["FastAPI", "Flask", "Streamlit", "Gradio", "REST APIs", "Docker", "Kubernetes", "Nginx"].map(
      (name) => entry(name),
    ),
  },
  {
    id: "observability",
    label: "Observability",
    items: [
      entry("OpenTelemetry", "distributed tracing"),
      entry("CloudWatch"),
      entry("Model performance monitoring"),
    ],
  },
  {
    id: "edge-hardware",
    label: "Hardware (Edge)",
    items: [
      entry("NVIDIA Jetson Orin"),
      entry("Jetson Nano"),
      entry("Raspberry Pi 5"),
      entry("Dell Edge Server"),
      entry("NVIDIA GPUs", "T4 / g4dn"),
    ],
  },
  {
    id: "os",
    label: "OS",
    items: ["Linux", "Windows", "macOS"].map((name) => entry(name)),
  },
]

export const patents = [
  {
    region: "United States",
    kind: "US Design Patent",
    number: "US D1,004,400 S",
    title: "Live Hinge Formed from a Rigid Material by Selective Material Removal",
    issued: "November 14, 2023",
    term: "15 years",
  },
  {
    region: "India",
    kind: "Indian Patent",
    number: "354819-001",
    title: "Live Hinge Formed from a Rigid Material by Selective Material Removal",
    issued: "February 1, 2022",
    term: null,
  },
]

export const award = {
  title: "Top Performer",
  program: "Aspiring Leaders Program, UST",
  description: "Recognized as a top performer in UST's Aspiring Leaders Program.",
}

export const education = [
  {
    degree: "B.Tech, Electrical and Electronics Engineering",
    school: "Government Engineering College, Barton Hill",
    period: "2016 – 2020",
    score: "GPA 8.0 / 10",
  },
  {
    degree: "Higher Secondary School",
    school: "Sarvodaya Central Vidyalaya",
    period: "2013 – 2015",
    score: "GPA 8.8 / 10",
  },
]

export const certifications = [
  {
    name: "Databricks Certified Generative AI Engineer Associate",
    issuer: "Databricks",
    note: null,
    inProgress: true,
  },
  {
    name: "AWS AgentCore: Platform for Agentic AI Systems",
    issuer: "Udemy",
    note: null,
    inProgress: true,
  },
  {
    name: "Building Production-Grade RAG Applications",
    issuer: "IBM",
    note: "Capstone project",
    inProgress: false,
  },
  {
    name: "TensorFlow and PyTorch for ML / AI",
    issuer: "DeepLearning.AI",
    note: null,
    inProgress: false,
  },
]
