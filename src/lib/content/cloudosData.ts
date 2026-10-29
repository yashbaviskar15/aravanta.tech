export interface CloudOSPillar {
  title: string;
  badge: string;
  description: string;
  keyAspects: string[];
  status: "In Architecture" | "In Development" | "Planned Phase";
}

export const cloudosData = {
  name: "Aravanta CloudOS",
  tagline: "The Unified Operating Environment for Intelligent Cloud Transformation",
  badge: "Platform Initiative",
  summary:
    "Aravanta CloudOS is our proprietary platform initiative designed to simplify how enterprises deploy, govern, and optimize cloud-native infrastructure. By unifying operational telemetry, deployment automation, and architectural guardrails into a single control plane, CloudOS aims to eliminate operational complexity.",
  statusNote:
    "Aravanta CloudOS is actively under architectural development and internal validation. Features presented below reflect current platform specifications, target architecture, and our engineering roadmap. Public availability dates, commercial tiers, and specific enterprise integrations will be confirmed in upcoming technical release bulletins.",
  
  corePillars: [
    {
      title: "Simplified Infrastructure Orchestration",
      badge: "Core Architecture",
      status: "In Architecture" as const,
      description:
        "Abstract away the fragmented friction of managing multi-cloud resources into unified declarative environments with automated state convergence.",
      keyAspects: [
        "Declarative environment definitions",
        "Automated resource lifecycle management",
        "Multi-cloud topology normalization",
      ],
    },
    {
      title: "Security-Conscious Policy Enforcement",
      badge: "Zero-Trust",
      status: "In Architecture" as const,
      description:
        "Built-in compliance checks and guardrails that validate network boundaries, IAM permissions, and encryption standards continuously before and after deployment.",
      keyAspects: [
        "Automated guardrails and policy gates",
        "Continuous compliance drift detection",
        "Zero-trust credential lifecycle management",
      ],
    },
    {
      title: "Intelligent Resource & FinOps Telemetry",
      badge: "Observability",
      status: "In Development" as const,
      description:
        "Unified visibility across compute instances, storage clusters, and network throughput to identify operational waste and recommend right-sizing.",
      keyAspects: [
        "Real-time resource utilization aggregation",
        "Granular cost-allocation attribution",
        "Anomaly detection for compute spend",
      ],
    },
    {
      title: "Developer Workflow Unification",
      badge: "Velocity",
      status: "Planned Phase" as const,
      description:
        "Providing engineering teams with self-service ephemeral staging sandboxes and frictionless build delivery pipelines.",
      keyAspects: [
        "Ephemeral sandbox environment provisioning",
        "Standardized container execution runtime",
        "Centralized configuration catalogs",
      ],
    },
  ],

  roadmapPhases: [
    {
      phase: "Phase 1: Architecture & Core Engine",
      focus: "Control plane design, declarative schema definition, and security guardrail engine.",
      status: "Current Milestone",
      details: [
        "Definition of the Aravanta CloudOS declarative topology spec",
        "Zero-trust state management and identity federation design",
        "Internal architectural proof-of-concept validation",
      ],
    },
    {
      phase: "Phase 2: Closed Technical Preview",
      focus: "Select enterprise partner testing, deployment automation, and telemetry ingestion.",
      status: "Upcoming Milestone",
      details: [
        "Early technical preview with design partners",
        "Telemetry ingestion pipelines and baseline monitoring",
        "Container and compute orchestration drivers",
      ],
    },
    {
      phase: "Phase 3: Public Release & Ecosystem Extensions",
      focus: "Broad deployment support, custom plugin ecosystem, and enterprise support tiers.",
      status: "Future Roadmap",
      details: [
        "Enterprise integration connectors and CLI tools",
        "Public release announcement and technical documentation",
        "Tiered support and SLA commitments",
      ],
    },
  ],

  faqs: [
    {
      question: "What is Aravanta CloudOS?",
      answer:
        "Aravanta CloudOS is an enterprise platform initiative currently in development by ARAVANTA TECH. Its mission is to simplify cloud management, automate security guardrails, and provide unified operational visibility across modern infrastructure.",
    },
    {
      question: "Is Aravanta CloudOS commercially available today?",
      answer:
        "CloudOS is currently in its architectural development and internal validation phase. We do not make false claims of general availability. Enterprise organizations interested in early architecture previews or technical briefings can register for updates via our contact channel.",
    },
    {
      question: "How does Aravanta CloudOS complement your consulting services?",
      answer:
        "While our consulting and engineering teams provide hands-on architecture, migration, and custom software delivery today, CloudOS represents the codification of these operational best practices into an automated platform.",
    },
    {
      question: "Will CloudOS support hybrid and multi-cloud environments?",
      answer:
        "Yes, multi-cloud and hybrid interoperability is one of the foundational architectural tenets guiding the platform's control plane design.",
    },
  ],
};
