export const companyData = {
  name: "ARAVANTA TECH",
  tagline: "Empowering Cloud Transformation.",
  philosophy: "Simpler. Safer. Smarter.",
  coreMessage: "Build Smarter. Grow Faster.",
  positioning:
    "A modern technology company helping businesses simplify technology, modernize digital infrastructure, develop applications, improve operational efficiency, and explore cloud-native solutions.",

  pillars: [
    {
      title: "Simpler",
      description:
        "We reject unnecessary technical complexity. We replace brittle architectures and convoluted workflows with clean, maintainable systems that empower your team rather than overwhelm it.",
    },
    {
      title: "Safer",
      description:
        "Security is an intrinsic architectural foundation, not an afterthought. We implement zero-trust boundaries, defensive code practices, and strict credential isolation at every layer.",
    },
    {
      title: "Smarter",
      description:
        "We engineer for sustainable velocity and commercial impact. Every technology decision is grounded in real business requirements, predictable scalability, and disciplined resource management.",
    },
  ],

  engineeringPrinciples: [
    {
      title: "Architecture Before Code",
      description:
        "We model domains, establish contracts, and evaluate failure modes before writing lines of code, preventing costly refactors down the road.",
    },
    {
      title: "Zero-Downtime Mentality",
      description:
        "Whether deploying microservices or migrating multi-terabyte databases, we build redundant, reversible cutovers with zero operational surprises.",
    },
    {
      title: "Automate the Repeatable",
      description:
        "If an operational procedure is performed twice, it is codified into Infrastructure as Code or an automated CI/CD pipeline.",
    },
    {
      title: "Uncompromising Transparency",
      description:
        "We provide clear, honest assessments of technical debt, realistic delivery timelines, and genuine operational costs.",
    },
  ],

  techStack: {
    frontend: [
      { name: "TypeScript", role: "Type-safe robust application logic" },
      { name: "React", role: "Component-driven user interfaces" },
      { name: "Next.js", role: "High-performance hybrid rendering & App Router" },
      { name: "Tailwind CSS", role: "Design token consistency & rapid styling" },
    ],
    backend: [
      { name: "Node.js / Express", role: "High-throughput asynchronous services" },
      { name: "Python / FastAPI", role: "High-speed APIs & data processing" },
      { name: "PostgreSQL", role: "ACID-compliant relational persistence" },
      { name: "Redis", role: "In-memory caching & session management" },
    ],
    cloud: [
      { name: "Amazon Web Services (AWS)", role: "Elastic enterprise cloud workloads" },
      { name: "Google Cloud Platform (GCP)", role: "Data, containers & global network" },
      { name: "Microsoft Azure", role: "Enterprise hybrid integration" },
      { name: "Bare Metal & Hybrid", role: "Dedicated performant infrastructure" },
    ],
    devops: [
      { name: "Docker", role: "Standardized container packaging" },
      { name: "Kubernetes", role: "Container orchestration & scaling" },
      { name: "Terraform", role: "Declarative Infrastructure as Code (IaC)" },
      { name: "GitHub Actions / GitLab CI", role: "Automated continuous delivery" },
    ],
    security: [
      { name: "Zero-Trust IAM", role: "Least-privilege role access control" },
      { name: "HashiCorp Vault / KMS", role: "Hardware-grade secrets encryption" },
      { name: "SAST & SCA Scanning", role: "Automated code vulnerability detection" },
      { name: "TLS 1.3 & mTLS", role: "End-to-end transport encryption" },
    ],
  },
};
