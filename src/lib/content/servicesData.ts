export interface ServiceDetail {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  overview: string;
  challenges: {
    title: string;
    description: string;
  }[];
  capabilities: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  approach: {
    step: string;
    title: string;
    description: string;
  }[];
  businessOutcomes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "cloud-solutions": {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    eyebrow: "ARCHITECTURE & INFRASTRUCTURE",
    tagline: "Architecting resilient, cost-efficient, and future-proof cloud ecosystems.",
    overview:
      "We help businesses navigate the complexities of modern cloud environments. From foundational multi-cloud architecture and migration planning to cloud-native re-engineering, our team designs solutions that maximize elasticity, operational security, and fiscal control without vendor lock-in.",
    challenges: [
      {
        title: "Uncontrolled Cloud Spend & Sprawl",
        description:
          "Organizations frequently struggle with unoptimized instances, unmanaged storage, and unpredictable monthly cloud invoices that fail to deliver expected ROI.",
      },
      {
        title: "Migration Risk & Downtime Concerns",
        description:
          "Migrating business-critical databases and workloads carries genuine risks of service disruption, data inconsistency, and operational downtime.",
      },
      {
        title: "Inflexible Legacy Architecture",
        description:
          "Monolithic systems ported directly to the cloud without modernization suffer from poor scalability, high latency, and fragile failure points.",
      },
    ],
    capabilities: [
      {
        title: "Cloud Strategy & Roadmap Advisory",
        description:
          "Comprehensive workload assessments, total-cost-of-ownership modeling, and phased modernization roadmaps.",
        deliverables: [
          "Infrastructure audit and readiness report",
          "Multi-cloud vs. hybrid feasibility analysis",
          "Phased workload migration roadmap",
        ],
      },
      {
        title: "Cloud Architecture & Infrastructure Design",
        description:
          "Production-grade topology design adhering to the Well-Architected Framework for high availability and fault isolation.",
        deliverables: [
          "Infrastructure as Code (IaC) blueprints",
          "VPC, transit gateway, and subnet segmentation",
          "High availability cross-zone redundancy",
        ],
      },
      {
        title: "Cloud Migration & Workload Modernization",
        description:
          "Zero-downtime database replication, application containerization, and safe cutover execution.",
        deliverables: [
          "Database and state migration scripts",
          "Dry-run migration testing & fallback plans",
          "Live cutover runbooks with observability",
        ],
      },
      {
        title: "Cloud Optimization & FinOps Efficiency",
        description:
          "Systematic right-sizing, reserved capacity strategy, and auto-scaling policies to rein in operational costs.",
        deliverables: [
          "Resource utilization benchmarks",
          "Cost anomaly alerting and allocation tagging",
          "Auto-scaling configuration and policy rules",
        ],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Assessment & Topology Audit",
        description:
          "We analyze existing infrastructure, network dependencies, and security postures to define objective transformation goals.",
      },
      {
        step: "02",
        title: "Reference Architecture Blueprint",
        description:
          "We engineer target topologies with modular infrastructure code, zero-trust network boundaries, and resilience safeguards.",
      },
      {
        step: "03",
        title: "Controlled Pilot & Workload Migration",
        description:
          "We execute non-critical workload pilots, validate data integrity, and perform phased migrations with zero surprise.",
      },
      {
        step: "04",
        title: "Optimization & Operational Handover",
        description:
          "We implement monitoring metrics, budget guardrails, and train internal teams for confident ongoing management.",
      },
    ],
    businessOutcomes: [
      "Substantially reduced cloud waste through deliberate right-sizing and architecture discipline.",
      "Resilient failover topologies with defined Recovery Time (RTO) and Recovery Point (RPO) objectives.",
      "Clear multi-environment isolation (Dev, Staging, Production) with repeatable IaC provisioning.",
    ],
    faqs: [
      {
        question: "Which public cloud providers do you support?",
        answer:
          "We work across major cloud providers (AWS, Google Cloud, Microsoft Azure) as well as modern bare-metal and hybrid environments, applying cloud-neutral standards where appropriate.",
      },
      {
        question: "How do you ensure zero or minimal downtime during migration?",
        answer:
          "We employ blue/green deployment setups, continuous asynchronous data replication, and thorough staging cutover drills prior to any production DNS change.",
      },
      {
        question: "Can you review and remediate an existing cloud setup rather than starting over?",
        answer:
          "Yes. A significant portion of our work involves performing Well-Architected technical reviews, identifying security gaps, and restructuring existing configurations without requiring an expensive tear-down.",
      },
    ],
  },

  "digital-transformation": {
    slug: "digital-transformation",
    title: "Digital Transformation",
    eyebrow: "BUSINESS MODERNIZATION",
    tagline: "Bridging the gap between legacy technology and agile digital operations.",
    overview:
      "Digital transformation is not simply about adopting newer buzzwords; it is about eliminating operational friction, modernizing brittle systems, and aligning engineering execution with strategic commercial objectives.",
    challenges: [
      {
        title: "Manual, Error-Prone Workflows",
        description:
          "Siloed operational departments spending excessive hours on spreadsheets, duplicate manual entries, and fragmented tooling.",
      },
      {
        title: "Brittle Legacy Core Systems",
        description:
          "Decade-old monolithic systems that business stakeholders fear touching due to undocumented dependencies and lack of automated tests.",
      },
      {
        title: "Disjointed Customer & Partner Touchpoints",
        description:
          "Inconsistent interfaces and fractured data models leading to poor user satisfaction and lost commercial velocity.",
      },
    ],
    capabilities: [
      {
        title: "Legacy-System Modernization",
        description:
          "Incrementally decoupling legacy monoliths into maintainable modular services using the strangler-fig pattern.",
        deliverables: [
          "Legacy code dependency mapping",
          "API abstraction layer for core business logic",
          "Incremental replacement milestone roadmap",
        ],
      },
      {
        title: "Workflow & Process Automation",
        description:
          "Automating repetitive operational bottlenecks with auditable, event-driven integration flows.",
        deliverables: [
          "Process flow diagnostics",
          "Event-driven webhook & API integrations",
          "Operational dashboards and audit trails",
        ],
      },
      {
        title: "Digital Product Strategy",
        description:
          "Aligning technical feasibility, user experience, and architecture to build tools people actually want to use.",
        deliverables: [
          "Architecture and technical feasibility studies",
          "User flow blueprints & domain model maps",
          "MVP scoping and phased rollout schedules",
        ],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Operational Bottleneck Discovery",
        description:
          "We shadow teams and inspect core business flows to discover where latency, human error, and tech friction accumulate.",
      },
      {
        step: "02",
        title: "Modernization Architecture Blueprint",
        description:
          "We engineer API adapters and target architectures that allow legacy systems to coexist safely while new systems spin up.",
      },
      {
        step: "03",
        title: "Iterative Engineering & Validation",
        description:
          "We deliver functional increments in short cycles, validating business outcomes against real-world operational workflows.",
      },
      {
        step: "04",
        title: "Cultural & Process Integration",
        description:
          "We equip internal teams with clear documentation, runbooks, and automated testing suites for sustained self-sufficiency.",
      },
    ],
    businessOutcomes: [
      "Elimination of manual double-entry and unmonitored operational bottlenecks.",
      "Safely modernized mission-critical systems without high-risk 'big bang' rewrites.",
      "Unified operational visibility and real-time data accessibility across departments.",
    ],
    faqs: [
      {
        question: "Do we have to discard our existing software to modernize?",
        answer:
          "No. We prioritize pragmatic modernization. We often build secure API wrappers and micro-services around stable legacy databases, replacing legacy components incrementally without disrupting active revenue.",
      },
      {
        question: "How long does a digital transformation initiative typically take?",
        answer:
          "While comprehensive transformations are multi-quarter journeys, our modular approach delivers the first tangible production improvements within the first 4 to 8 weeks.",
      },
    ],
  },

  "application-development": {
    slug: "application-development",
    title: "Application Development",
    eyebrow: "ENGINEERING & SOFTWARE",
    tagline: "Engineering robust, performant web and full-stack software built to scale.",
    overview:
      "We design and build production-grade web applications, resilient backend architectures, and developer-friendly APIs. We prioritize type-safety, maintainability, clean data modeling, and intuitive user experiences.",
    challenges: [
      {
        title: "Sluggish, Unresponsive Frontends",
        description:
          "Bloated client-side applications that cause high bounce rates, poor mobile performance, and frustrated end users.",
      },
      {
        title: "Unmaintainable 'Spaghetti' Codebases",
        description:
          "Software created without architecture discipline, resulting in exponential bug rates whenever a new feature is added.",
      },
      {
        title: "Insecure or Brittle APIs",
        description:
          "Unversioned, poorly validated endpoints that fail under load and expose sensitive operational data.",
      },
    ],
    capabilities: [
      {
        title: "Modern Frontend Engineering",
        description:
          "High-performance, accessible, responsive web interfaces built with React, Next.js, TypeScript, and modern CSS systems.",
        deliverables: [
          "Component design systems with strict typing",
          "Accessible WCAG 2.2 compliant UI patterns",
          "Core Web Vitals optimized client experiences",
        ],
      },
      {
        title: "Backend & Distributed API Engineering",
        description:
          "Robust REST and GraphQL APIs, event streaming, microservices, and database persistence architectures.",
        deliverables: [
          "Validated OpenAPI / Swagger schemas",
          "Normalized relational and distributed data models",
          "Rate limiting, caching, and auth middleware",
        ],
      },
      {
        title: "Full-Stack Application Architecture",
        description:
          "End-to-end software solutions designed from database schemas to client-side caching.",
        deliverables: [
          "Complete architectural specification",
          "Automated unit, integration, and E2E test suites",
          "Containerized build manifests and CI/CD pipelines",
        ],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Domain Modeling & Architecture",
        description:
          "We define entities, relations, state machines, and contract specifications before writing application code.",
      },
      {
        step: "02",
        title: "Component & API Prototyping",
        description:
          "We establish typed design tokens, reusable UI primitives, and backend mock endpoints for rapid feedback.",
      },
      {
        step: "03",
        title: "Robust Full-Stack Implementation",
        description:
          "We implement features with strict type safety, input validation, structured error handling, and automated tests.",
      },
      {
        step: "04",
        title: "Performance & Security Hardening",
        description:
          "We conduct load testing, bundle analysis, vulnerability scans, and browser compatibility verification.",
      },
    ],
    businessOutcomes: [
      "Lightning-fast digital experiences that improve conversion and retain users.",
      "Maintainable, well-documented codebases that internal teams can easily extend.",
      "Predictable release cadence enabled by automated testing and CI/CD.",
    ],
    faqs: [
      {
        question: "What technology stack do you specialize in?",
        answer:
          "Our core expertise covers TypeScript, Next.js, React, Node.js, Python, PostgreSQL, Redis, Docker, and modern cloud deployment environments.",
      },
      {
        question: "Do you build custom internal enterprise tools or customer-facing products?",
        answer:
          "Both. We build customer-facing enterprise SaaS applications as well as mission-critical internal admin consoles, data management portals, and workflow engines.",
      },
    ],
  },

  "it-infrastructure": {
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    eyebrow: "RELIABILITY & PLATFORMS",
    tagline: "Building resilient, automated, and observable infrastructure foundations.",
    overview:
      "Modern business operations require infrastructure that is predictable, self-healing, and observable. We design and manage computing environments that eliminate single points of failure and keep services running smoothly.",
    challenges: [
      {
        title: "Unpredictable Outages & Silent Failures",
        description:
          "Lack of proactive monitoring leading to customers discovering system issues before internal teams do.",
      },
      {
        title: "Manual Server Configuration ('Snowflakes')",
        description:
          "Servers configured by hand without automation, making disaster recovery slow, undocumented, and error-prone.",
      },
      {
        title: "Inadequate Disaster Recovery Readiness",
        description:
          "Backups that are untested, unverified, and incapable of meeting critical business recovery objectives.",
      },
    ],
    capabilities: [
      {
        title: "Infrastructure Architecture & Topology Design",
        description:
          "Designing secure network segmentation, load balancer topologies, and compute clustering.",
        deliverables: [
          "Network topology documentation and CIDR maps",
          "Load balancing and edge routing policies",
          "Redundant failover zone specifications",
        ],
      },
      {
        title: "Infrastructure Automation & IaC",
        description:
          "Automating server provisioning and environment orchestration using Terraform and Ansible.",
        deliverables: [
          "Version-controlled IaC repositories",
          "Automated configuration management playbooks",
          "Ephemeral development environment scripts",
        ],
      },
      {
        title: "Observability, Logging & Alerting",
        description:
          "Centralized metrics, distributed tracing, and actionable alerting without alarm fatigue.",
        deliverables: [
          "Centralized log aggregation architecture",
          "Synthetic uptime monitoring and SLO dashboards",
          "On-call escalation routing policies",
        ],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Infrastructure Health & Reliability Audit",
        description:
          "We review server fleets, DNS routing, certificate management, and telemetry systems.",
      },
      {
        step: "02",
        title: "Codification & Declarative Templates",
        description:
          "We convert manual configurations into auditable, version-controlled declarative code.",
      },
      {
        step: "03",
        title: "Telemetry & SRE Implementation",
        description:
          "We set up proactive alerting, anomaly detection, and automated recovery scripts.",
      },
      {
        step: "04",
        title: "Disaster Recovery Testing",
        description:
          "We simulate host failure, database corruption, and network partitions to prove backup recovery.",
      },
    ],
    businessOutcomes: [
      "Drastically reduced Mean Time to Detection (MTTD) and Mean Time to Resolution (MTTR).",
      "Repeatable, auditable infrastructure changes that eliminate configuration drift.",
      "Verified disaster recovery procedures tested against real failure scenarios.",
    ],
    faqs: [
      {
        question: "Can you assist with hybrid on-premise and cloud infrastructure?",
        answer:
          "Yes. We configure site-to-site VPNs, Direct Connect / ExpressRoute pipelines, and unified management across bare metal and public cloud infrastructure.",
      },
      {
        question: "How do you handle backup verification?",
        answer:
          "We do not consider backups valid until an automated script restores them to an isolated test environment and executes automated data integrity checks.",
      },
    ],
  },

  "devops-automation": {
    slug: "devops-automation",
    title: "DevOps & Automation",
    eyebrow: "DELIVERY PIPELINES",
    tagline: "Accelerating release velocity with zero-downtime automated pipelines.",
    overview:
      "We eliminate friction between development and operations. Through automated CI/CD pipelines, container orchestration, and Infrastructure as Code, we empower engineering teams to ship code with speed and high confidence.",
    challenges: [
      {
        title: "High-Stress, Manual Deployments",
        description:
          "Deployments requiring late-night weekend shifts, long checklists, and unpredictable post-deployment hotfixes.",
      },
      {
        title: "Slow Development Feedback Loops",
        description:
          "Developers waiting hours for tests to execute and pull requests to build, drastically slowing delivery.",
      },
      {
        title: "'It Works on My Machine' Inconsistencies",
        description:
          "Discrepancies between local development laptops and production servers causing subtle, hard-to-debug bugs.",
      },
    ],
    capabilities: [
      {
        title: "CI/CD Pipeline Engineering",
        description:
          "Fast, reliable build, test, and deployment workflows using GitHub Actions, GitLab CI, or Jenkins.",
        deliverables: [
          "Optimized multi-stage build pipelines with caching",
          "Automated linting, unit testing, and security scanning gates",
          "Blue/green and canary deployment automation",
        ],
      },
      {
        title: "Containerization & Orchestration",
        description:
          "Standardized Docker images and container orchestration using Kubernetes or managed container platforms.",
        deliverables: [
          "Hardened, minimal base Dockerfiles (Alpine/Distroless)",
          "Kubernetes manifests / Helm charts / Compose specs",
          "Pod autoscaling and resource quota policies",
        ],
      },
      {
        title: "GitOps & Configuration Governance",
        description:
          "Managing deployment states declaratively through Git repositories with automated synchronization.",
        deliverables: [
          "ArgoCD / Flux declarative deployment configurations",
          "Secret management integration (HashiCorp Vault / Cloud Secrets)",
          "Audit trail of every production change",
        ],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Pipeline & Workflow Profiling",
        description:
          "We map the path of code from commit to production, pinpointing bottlenecks and manual steps.",
      },
      {
        step: "02",
        title: "Standardized Build Environments",
        description:
          "We containerize runtimes to guarantee that code runs identically across local, test, and prod.",
      },
      {
        step: "03",
        title: "Automated Verification Gates",
        description:
          "We embed automated quality, security, and performance gates into every pull request.",
      },
      {
        step: "04",
        title: "Safe Continuous Deployment",
        description:
          "We set up automated rollout strategies with instantaneous health-check rollbacks.",
      },
    ],
    businessOutcomes: [
      "Deployment frequency transformed from monthly nail-biters to confident multiple-times-a-day releases.",
      "Immediate feedback for developers on pull requests, cutting bug remediation costs.",
      "Strict security auditability with every deployment tied to a signed Git commit.",
    ],
    faqs: [
      {
        question: "Is Kubernetes always required for modern DevOps?",
        answer:
          "No. We advocate for appropriate tooling. For many applications, managed container services (ECS, Cloud Run, App Engine) provide excellent reliability without Kubernetes overhead.",
      },
      {
        question: "How do you handle production secrets in automated pipelines?",
        answer:
          "We enforce zero-plaintext rules. Secrets are securely retrieved at runtime from dedicated secret managers with fine-grained IAM roles and short-lived credentials.",
      },
    ],
  },

  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity",
    eyebrow: "SECURITY-CONSCIOUS ARCHITECTURE",
    tagline: "Embedding proactive security into architecture, identity, and engineering practices.",
    overview:
      "Security cannot be an afterthought tacked on before launch. We implement defense-in-depth methodologies, strict identity boundaries, and secure software development lifecycles to protect your data, reputation, and customers.",
    challenges: [
      {
        title: "Expanding Attack Surfaces & Cloud Gaps",
        description:
          "Misconfigured cloud storage buckets, open security groups, and default credentials inviting unauthorized access.",
      },
      {
        title: "Supply Chain & Dependency Vulnerabilities",
        description:
          "Third-party libraries containing critical CVEs introduced into production code unnoticed.",
      },
      {
        title: "Over-Privileged Identity & Access (IAM)",
        description:
          "Broad admin permissions granted to multiple accounts without multi-factor authentication or role separation.",
      },
    ],
    capabilities: [
      {
        title: "Secure Architecture & Threat Modeling",
        description:
          "Analyzing data flows, trust boundaries, and potential attack vectors during system design.",
        deliverables: [
          "Threat modeling matrix (STRIDE / DREAD methodologies)",
          "Network segmentation and zero-trust policy architecture",
          "Data-at-rest and data-in-transit encryption specs",
        ],
      },
      {
        title: "Identity & Access Management (IAM)",
        description:
          "Enforcing least-privilege access, centralized Single Sign-On (SSO), and role-based access control.",
        deliverables: [
          "IAM policy audit and permission pruning",
          "SSO / SAML / OIDC implementation blueprints",
          "Privileged access management (PAM) workflows",
        ],
      },
      {
        title: "DevSecOps & Automated Security Gates",
        description:
          "Embedding static analysis (SAST), software composition analysis (SCA), and secret scanning directly into CI pipelines.",
        deliverables: [
          "Pre-commit and pipeline secret scanning triggers",
          "Vulnerability triage workflow and SLA definitions",
          "Hardened OS and container baseline images",
        ],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Security Posture Assessment",
        description:
          "We evaluate infrastructure configurations, access policies, and application dependencies for vulnerabilities.",
      },
      {
        step: "02",
        title: "Zero-Trust Architecture Design",
        description:
          "We engineer strict boundary validation, network isolation, and encryption by default.",
      },
      {
        step: "03",
        title: "Continuous Security Tooling",
        description:
          "We integrate automated scanners and alerting so that newly discovered CVEs are flagged instantly.",
      },
      {
        step: "04",
        title: "Incident Response Playbooks",
        description:
          "We develop practical step-by-step containment and recovery playbooks for potential security events.",
      },
    ],
    businessOutcomes: [
      "Substantially reduced risk of data exposure through least-privilege access enforcement.",
      "Clear visibility into software dependencies and early mitigation of supply chain vulnerabilities.",
      "Documented security posture that instills confidence in enterprise clients and partners.",
    ],
    faqs: [
      {
        question: "Do you provide penetration testing or compliance certifications?",
        answer:
          "We provide security-conscious architecture, configuration hardening, and vulnerability assessments. For formal accredited certifications (SOC2, ISO 27001), we work alongside your accredited auditing partners to ensure all technical controls pass inspection.",
      },
      {
        question: "How do you help prevent credential leaks in code repositories?",
        answer:
          "We set up automated pre-commit hooks, repository branch protection rules, and automated CI scans that block commits containing API keys, private certificates, or passwords.",
      },
    ],
  },

  "it-consulting": {
    slug: "it-consulting",
    title: "IT Consulting",
    eyebrow: "STRATEGIC TECHNOLOGY ADVISORY",
    tagline: "Pragmatic technical guidance aligning engineering investments with business growth.",
    overview:
      "Technology decisions carry long-term financial and operational ramifications. Our senior consulting team provides unbiased architecture reviews, technology selection guidance, and clear engineering roadmaps to de-risk high-stakes initiatives.",
    challenges: [
      {
        title: "Vendor Lock-In & Cost Trap",
        description:
          "Committing to proprietary ecosystems that become prohibitively expensive and difficult to migrate away from.",
      },
      {
        title: "Architecture Analysis Paralysis",
        description:
          "Engineering teams debating between competing frameworks and tools without clear decision criteria, stalling projects.",
      },
      {
        title: "Misalignment Between Tech & Business",
        description:
          "Building complex technical solutions that do not solve actual commercial problems or deliver measurable value.",
      },
    ],
    capabilities: [
      {
        title: "Technical Architecture Reviews",
        description:
          "Independent, objective peer reviews of proposed system designs, scalability bottlenecks, and reliability gaps.",
        deliverables: [
          "Architecture strengths and vulnerabilities report",
          "Scalability bottleneck analysis",
          "Prioritized technical debt remediation plan",
        ],
      },
      {
        title: "Technology Selection & Vendor Evaluation",
        description:
          "Unbiased comparative analysis of tools, cloud services, and databases tailored to your team's real capacity.",
        deliverables: [
          "Evaluation scorecard with criteria matrices",
          "Total cost of ownership (TCO) 3-year projection",
          "Proof of concept (PoC) validation criteria",
        ],
      },
      {
        title: "Engineering Workflow & Team Alignment",
        description:
          "Refining sprint planning, code review standards, and technical governance to maximize engineering throughput.",
        deliverables: [
          "Engineering standards documentation",
          "Definition of Done and quality checklists",
          "Code review and PR workflow optimization",
        ],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Stakeholder Alignment & Goals",
        description:
          "We interview leadership and engineering leads to understand strategic business objectives and current pain points.",
      },
      {
        step: "02",
        title: "Deep-Dive Technical Review",
        description:
          "We examine codebases, system diagrams, deployment pipelines, and operational expense reports.",
      },
      {
        step: "03",
        title: "Pragmatic Strategic Roadmap",
        description:
          "We deliver actionable, prioritized recommendations categorized by business impact and implementation effort.",
      },
      {
        step: "04",
        title: "Implementation Guidance",
        description:
          "We remain available to guide technical leadership through execution, vendor negotiations, and key milestones.",
      },
    ],
    businessOutcomes: [
      "Clarity on high-stakes architectural choices, preventing costly technical missteps.",
      "Actionable roadmap with clear ROI, eliminating unproductive technology debate.",
      "Streamlined engineering processes that improve team velocity and code quality.",
    ],
    faqs: [
      {
        question: "How do you ensure recommendations are truly unbiased?",
        answer:
          "We are an independent technology consulting firm. We do not accept commissions, kickbacks, or exclusive sales quotas from vendors, ensuring our advice serves your business interests exclusively.",
      },
      {
        question: "Can you advise our non-technical executive board?",
        answer:
          "Yes. A cornerstone of our consulting practice is translating deep technical architecture concepts into clear business terms, risk models, and financial forecasts.",
      },
    ],
  },
};
