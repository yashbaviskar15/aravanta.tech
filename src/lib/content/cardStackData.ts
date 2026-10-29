import { CardItem } from "@/components/ui/scrollable-card-stack";

// Procedural high-contrast luxury SVG banners for instant offline rendering & sharp graphics
export const aravantaArchitectureCards: CardItem[] = [
  {
    id: "fintech-core-migration",
    name: "Zero-Downtime Core Database & FinTech Workload Migration",
    category: "FINANCIAL SERVICES",
    tagline: "High-Volume Asynchronous Replication with Dual-Write Ingestion",
    description:
      "Engineered an asynchronous blue/green data replication pipeline with dual-write synchronization and idempotent reconciliation workers for zero transaction loss.",
    badge: "99.999% SLA",
    metrics: { label: "p99 Query Latency", value: "28ms (was 420ms)" },
    tags: ["PostgreSQL Multi-AZ", "Terraform", "Kafka Pipelines", "Go Workers"],
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><defs><linearGradient id='bg' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%2305070a'/><stop offset='50%' stop-color='%230f1422'/><stop offset='100%' stop-color='%23080b12'/></linearGradient><linearGradient id='gold' x1='0%' y1='0%' x2='100%' y2='0%'><stop offset='0%' stop-color='%23f3cc72'/><stop offset='100%' stop-color='%23d4a342'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23bg)'/><circle cx='400' cy='225' r='180' stroke='%23d4a342' stroke-opacity='0.15' stroke-width='1' fill='none'/><circle cx='400' cy='225' r='120' stroke='%2338bdf8' stroke-opacity='0.2' stroke-width='1' stroke-dasharray='4,4' fill='none'/><circle cx='400' cy='225' r='60' stroke='%23d4a342' stroke-opacity='0.3' stroke-width='1.5' fill='none'/><line x1='100' y1='225' x2='700' y2='225' stroke='%23ffffff' stroke-opacity='0.08' stroke-width='1'/><line x1='400' y1='50' x2='400' y2='400' stroke='%23ffffff' stroke-opacity='0.08' stroke-width='1'/><circle cx='400' cy='225' r='8' fill='url(%23gold)'/><circle cx='280' cy='225' r='5' fill='%2338bdf8'/><circle cx='520' cy='225' r='5' fill='%2338bdf8'/><circle cx='400' cy='105' r='5' fill='%23d4a342'/><circle cx='400' cy='345' r='5' fill='%23d4a342'/><path d='M280 225 Q340 160 400 105 T520 225' fill='none' stroke='url(%23gold)' stroke-width='2' stroke-linecap='round'/><path d='M280 225 Q340 290 400 345 T520 225' fill='none' stroke='%2338bdf8' stroke-width='1.5' stroke-dasharray='6,4'/><text x='40' y='60' fill='%23d4a342' font-family='monospace' font-size='14' letter-spacing='2'>ARAVANTA ARCHITECTURE LABS // BLUEPRINT 01</text><text x='40' y='85' fill='%239ca3af' font-family='sans-serif' font-size='12'>Zero-Downtime Multi-AZ Ingestion Grid</text></svg>",
    avatar: "/brand/primary-logo.png",
    href: "/case-studies#fintech-migration",
    ctaText: "View Case Study",
  },
  {
    id: "strangler-fig-modernization",
    name: "Strangler-Fig Modernization of a Multi-Tenant Monolith",
    category: "ENTERPRISE SAAS",
    tagline: "Microservices Decoupling with Strict OpenAPI Gateway Routing",
    description:
      "Transitioned a 9-year-old monolithic enterprise backend into isolated Kubernetes microservices with zero customer-facing downtime and 4-minute MTTR.",
    badge: "MTTR < 4 MIN",
    metrics: { label: "Deployment Frequency", value: "Daily (was Bi-Weekly)" },
    tags: ["Next.js App Router", "Kubernetes", "Docker", "Redis Caching", "GraphQL"],
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><defs><linearGradient id='bg2' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%2306080e'/><stop offset='50%' stop-color='%23131828'/><stop offset='100%' stop-color='%2305070a'/></linearGradient><linearGradient id='cyan' x1='0%' y1='0%' x2='100%' y2='0%'><stop offset='0%' stop-color='%2338bdf8'/><stop offset='100%' stop-color='%230284c7'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23bg2)'/><rect x='120' y='140' width='140' height='170' rx='8' fill='%230f1422' stroke='%23ffffff' stroke-opacity='0.15'/><rect x='540' y='140' width='140' height='170' rx='8' fill='%230f1422' stroke='%2338bdf8' stroke-opacity='0.4'/><circle cx='390' cy='225' r='50' fill='%23111524' stroke='%23d4a342' stroke-width='2'/><path d='M260 225 L340 225' stroke='%23ffffff' stroke-opacity='0.3' stroke-width='2' stroke-dasharray='4,4'/><path d='M440 225 L540 225' stroke='url(%23cyan)' stroke-width='2.5'/><text x='190' y='230' fill='%239ca3af' font-family='monospace' font-size='12' text-anchor='middle'>LEGACY CORE</text><text x='390' y='225' fill='%23d4a342' font-family='monospace' font-size='11' font-weight='bold' text-anchor='middle'>API GATEWAY</text><text x='390' y='242' fill='%239ca3af' font-family='monospace' font-size='9' text-anchor='middle'>ROUTER</text><text x='610' y='230' fill='%2338bdf8' font-family='monospace' font-size='12' font-weight='bold' text-anchor='middle'>K8S MESH</text><text x='40' y='60' fill='%2338bdf8' font-family='monospace' font-size='14' letter-spacing='2'>ARAVANTA ARCHITECTURE LABS // BLUEPRINT 02</text><text x='40' y='85' fill='%239ca3af' font-family='sans-serif' font-size='12'>Strangler-Fig API Routing & Pod Isolation</text></svg>",
    avatar: "/brand/primary-logo.png",
    href: "/case-studies#saas-modernization",
    ctaText: "View Case Study",
  },
  {
    id: "zero-trust-cloud-security",
    name: "Zero-Trust Architecture & HIPAA-Compliant Infrastructure",
    category: "HEALTHCARE TECH",
    tagline: "Cryptographic Perimeter Defense & Ephemeral Credential Lifecycles",
    description:
      "Eliminated 100% of persistent credentials, enforcing mutual TLS authentication, OPA policy enforcement, and real-time posture scanning across multi-cloud clusters.",
    badge: "100% AUDIT PASS",
    metrics: { label: "Admin Key Lifespan", value: "15 min (Ephemeral)" },
    tags: ["Zero-Trust mTLS", "Open Policy Agent", "AWS KMS", "HIPAA Ready"],
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><defs><linearGradient id='bg3' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%2305070a'/><stop offset='50%' stop-color='%230b181c'/><stop offset='100%' stop-color='%2305090b'/></linearGradient><linearGradient id='green' x1='0%' y1='0%' x2='100%' y2='0%'><stop offset='0%' stop-color='%2334d399'/><stop offset='100%' stop-color='%23059669'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23bg3)'/><polygon points='400,100 480,140 480,260 400,340 320,260 320,140' fill='%230d2222' stroke='%2334d399' stroke-width='2'/><polygon points='400,130 455,160 455,245 400,305 345,245 345,160' fill='none' stroke='%23d4a342' stroke-width='1.5' stroke-dasharray='4,4'/><circle cx='400' cy='220' r='24' fill='%23059669' fill-opacity='0.2' stroke='%2334d399' stroke-width='2'/><path d='M392 220 L398 226 L410 214' fill='none' stroke='%23ffffff' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/><text x='40' y='60' fill='%2334d399' font-family='monospace' font-size='14' letter-spacing='2'>ARAVANTA ARCHITECTURE LABS // BLUEPRINT 03</text><text x='40' y='85' fill='%239ca3af' font-family='sans-serif' font-size='12'>Zero-Trust mTLS Network Vault & Policy Engine</text></svg>",
    avatar: "/brand/primary-logo.png",
    href: "/case-studies#healthtech-security",
    ctaText: "View Case Study",
  },
  {
    id: "threejs-graphic-engineering",
    name: "Interactive Spatial 3D WebGL & Graphic Engineering",
    category: "SPATIAL WEB & 3D",
    tagline: "Procedural Shaders, Real-Time Particle Physics & 60 FPS GPU Pipeline",
    description:
      "Crafted full-spectrum WebGL experiences with procedural shader choreography, reactive mouse and scroll physics, and optimized mobile rendering fallbacks.",
    badge: "60 FPS GPU LOCK",
    metrics: { label: "Shader Overhead", value: "< 2.8ms / frame" },
    tags: ["Three.js", "WebGL 2.0", "GLSL Shaders", "GSAP ScrollTrigger"],
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><defs><linearGradient id='bg4' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%2308060f'/><stop offset='50%' stop-color='%2319112e'/><stop offset='100%' stop-color='%2305070a'/></linearGradient><linearGradient id='purple' x1='0%' y1='0%' x2='100%' y2='0%'><stop offset='0%' stop-color='%23c084fc'/><stop offset='100%' stop-color='%23a855f7'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23bg4)'/><circle cx='400' cy='225' r='160' fill='none' stroke='%23a855f7' stroke-opacity='0.25' stroke-width='1'/><ellipse cx='400' cy='225' rx='190' ry='70' fill='none' stroke='%23d4a342' stroke-opacity='0.3' stroke-width='1.5' transform='rotate(-20 400 225)'/><ellipse cx='400' cy='225' rx='190' ry='70' fill='none' stroke='%2338bdf8' stroke-opacity='0.25' stroke-width='1' transform='rotate(40 400 225)'/><circle cx='400' cy='225' r='30' fill='url(%23purple)'/><text x='40' y='60' fill='%23c084fc' font-family='monospace' font-size='14' letter-spacing='2'>ARAVANTA ARCHITECTURE LABS // BLUEPRINT 04</text><text x='40' y='85' fill='%239ca3af' font-family='sans-serif' font-size='12'>Three.js Real-time Orbital Mesh & Shader Core</text></svg>",
    avatar: "/brand/primary-logo.png",
    href: "/case-studies",
    ctaText: "Explore Blueprint",
  },
];

export const aravantaServiceCards: CardItem[] = [
  {
    id: "service-cloud-infrastructure",
    name: "Cloud Solutions & Infrastructure Engineering",
    category: "PRACTICE 01 // CLOUD",
    tagline: "Multi-Cloud Reliability & Automated FinOps Cost Guardrails",
    description:
      "Enterprise cloud architectures across AWS, Azure, and GCP engineered with multi-region redundancy, automated failover, and strict fiscal budget controls.",
    badge: "MULTI-CLOUD",
    metrics: { label: "Availability Target", value: "99.999% SLA" },
    tags: ["AWS Multi-AZ", "Azure ExpressRoute", "GCP Anthos", "Terraform IaC"],
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><defs><linearGradient id='sbg1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%2305070a'/><stop offset='50%' stop-color='%230b1524'/><stop offset='100%' stop-color='%2304060a'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23sbg1)'/><path d='M300 240 C300 200, 340 180, 380 200 C400 160, 480 160, 500 200 C540 200, 560 230, 550 260 C550 290, 520 300, 490 300 L320 300 C280 300, 270 270, 300 240 Z' fill='%23132036' stroke='%2338bdf8' stroke-width='2'/><circle cx='400' cy='240' r='6' fill='%23d4a342'/><text x='40' y='60' fill='%2338bdf8' font-family='monospace' font-size='14' letter-spacing='2'>ARAVANTA CORE PRACTICE 01</text><text x='40' y='85' fill='%239ca3af' font-family='sans-serif' font-size='12'>Multi-Region Cloud Architecture & Zero-Downtime Migration</text></svg>",
    avatar: "/brand/primary-logo.png",
    href: "/services/cloud-solutions",
    ctaText: "Explore Practice",
  },
  {
    id: "service-app-modernization",
    name: "Enterprise Application & Full-Stack Engineering",
    category: "PRACTICE 02 // DEV",
    tagline: "Microservices, Distributed Systems & Next.js Platforms",
    description:
      "High-concurrency web systems, resilient event streams, and scalable backend platforms built on modern TypeScript, Go, and reactive cloud architectures.",
    badge: "HIGH CONCURRENCY",
    metrics: { label: "Throughput", value: "50k+ req/sec" },
    tags: ["Next.js 14", "TypeScript", "Node.js", "GraphQL", "PostgreSQL"],
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><defs><linearGradient id='sbg2' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%2308060d'/><stop offset='50%' stop-color='%23181226'/><stop offset='100%' stop-color='%2305070a'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23sbg2)'/><rect x='280' y='140' width='240' height='160' rx='10' fill='%23121020' stroke='%23d4a342' stroke-width='2'/><circle cx='310' cy='165' r='5' fill='%23ef4444'/><circle cx='325' cy='165' r='5' fill='%23eab308'/><circle cx='340' cy='165' r='5' fill='%2322c55e'/><line x1='310' y1='200' x2='490' y2='200' stroke='%23d4a342' stroke-opacity='0.6' stroke-width='2'/><line x1='310' y1='225' x2='440' y2='225' stroke='%2338bdf8' stroke-opacity='0.6' stroke-width='2'/><line x1='310' y1='250' x2='460' y2='250' stroke='%23a855f7' stroke-opacity='0.6' stroke-width='2'/><text x='40' y='60' fill='%23d4a342' font-family='monospace' font-size='14' letter-spacing='2'>ARAVANTA CORE PRACTICE 02</text><text x='40' y='85' fill='%239ca3af' font-family='sans-serif' font-size='12'>Full-Stack Software Engineering & Strangler-Fig Decoupling</text></svg>",
    avatar: "/brand/primary-logo.png",
    href: "/services/application-development",
    ctaText: "Explore Practice",
  },
  {
    id: "service-devops-automation",
    name: "DevOps, CI/CD & Automated GitOps Infrastructure",
    category: "PRACTICE 03 // DEVOPS",
    tagline: "Declarative Infrastructure as Code & Continuous Delivery Gates",
    description:
      "Automated testing, continuous integration, Kubernetes pod orchestration, and deployment gates designed to take releases from weeks to minutes.",
    badge: "ZERO-DOWNTIME",
    metrics: { label: "Release Velocity", value: "35x Faster" },
    tags: ["Kubernetes", "Docker", "GitHub Actions", "ArgoCD", "Helm"],
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><defs><linearGradient id='sbg3' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23050907'/><stop offset='50%' stop-color='%230e1f18'/><stop offset='100%' stop-color='%23040706'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23sbg3)'/><path d='M250 225 C250 160, 350 160, 400 225 C450 290, 550 290, 550 225 C550 160, 450 160, 400 225 C350 290, 250 290, 250 225 Z' fill='none' stroke='%2334d399' stroke-width='2.5'/><circle cx='400' cy='225' r='8' fill='%23d4a342'/><text x='40' y='60' fill='%2334d399' font-family='monospace' font-size='14' letter-spacing='2'>ARAVANTA CORE PRACTICE 03</text><text x='40' y='85' fill='%239ca3af' font-family='sans-serif' font-size='12'>Continuous Integration, GitOps Pipelines & Kubernetes</text></svg>",
    avatar: "/brand/primary-logo.png",
    href: "/services/devops-automation",
    ctaText: "Explore Practice",
  },
  {
    id: "service-cybersecurity-zerotrust",
    name: "Cybersecurity & Zero-Trust Compliance Engineering",
    category: "PRACTICE 04 // SECURITY",
    tagline: "SOC 2 Type II, ISO 27001, HIPAA & Threat Hardening",
    description:
      "Cryptographic access policies, continuous compliance drift detection, ephemeral credential managers, and vulnerability remediation across all digital assets.",
    badge: "AUDIT-READY",
    metrics: { label: "Compliance Drift", value: "Automated Alerting" },
    tags: ["Zero-Trust mTLS", "Vault", "CloudTrail", "SOC 2 Type II"],
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><defs><linearGradient id='sbg4' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23090606'/><stop offset='50%' stop-color='%231f1010'/><stop offset='100%' stop-color='%2305070a'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23sbg4)'/><path d='M400 120 L480 160 L480 250 C480 300, 400 340, 400 340 C400 340, 320 300, 320 250 L320 160 Z' fill='%23221316' stroke='%23f43f5e' stroke-width='2'/><circle cx='400' cy='220' r='14' fill='none' stroke='%23d4a342' stroke-width='2'/><path d='M400 234 L400 244' stroke='%23d4a342' stroke-width='2' stroke-linecap='round'/><text x='40' y='60' fill='%23f43f5e' font-family='monospace' font-size='14' letter-spacing='2'>ARAVANTA CORE PRACTICE 04</text><text x='40' y='85' fill='%239ca3af' font-family='sans-serif' font-size='12'>Zero-Trust Identity, Threat Monitoring & Regulatory Hardening</text></svg>",
    avatar: "/brand/primary-logo.png",
    href: "/services/cybersecurity",
    ctaText: "Explore Practice",
  },
];

