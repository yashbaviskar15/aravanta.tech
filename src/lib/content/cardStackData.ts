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
    image: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
      <defs>
        <linearGradient id="bp1-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#05070a"/>
          <stop offset="50%" stop-color="#0d1424"/>
          <stop offset="100%" stop-color="#060910"/>
        </linearGradient>
        <linearGradient id="bp1-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f3cc72"/>
          <stop offset="100%" stop-color="#d4a342"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bp1-bg)"/>
      <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
        <line x1="0" y1="112" x2="800" y2="112"/>
        <line x1="0" y1="225" x2="800" y2="225"/>
        <line x1="0" y1="337" x2="800" y2="337"/>
        <line x1="200" y1="0" x2="200" y2="450"/>
        <line x1="400" y1="0" x2="400" y2="450"/>
        <line x1="600" y1="0" x2="600" y2="450"/>
      </g>
      <circle cx="400" cy="225" r="160" stroke="#d4a342" stroke-opacity="0.2" stroke-width="1.5" fill="none"/>
      <circle cx="400" cy="225" r="110" stroke="#38bdf8" stroke-opacity="0.25" stroke-width="1" stroke-dasharray="6,4" fill="none"/>
      <circle cx="400" cy="225" r="60" stroke="#d4a342" stroke-opacity="0.4" stroke-width="2" fill="none"/>
      <path d="M220 225 Q310 130 400 130 T580 225" fill="none" stroke="url(#bp1-gold)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M220 225 Q310 320 400 320 T580 225" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,4"/>
      <circle cx="220" cy="225" r="7" fill="#38bdf8"/>
      <circle cx="580" cy="225" r="7" fill="#38bdf8"/>
      <circle cx="400" cy="130" r="7" fill="#d4a342"/>
      <circle cx="400" cy="320" r="7" fill="#d4a342"/>
      <circle cx="400" cy="225" r="12" fill="url(#bp1-gold)"/>
      <text x="45" y="55" fill="#d4a342" font-family="monospace" font-size="13" font-weight="bold" letter-spacing="2">ARAVANTA ARCHITECTURE LABS // BLUEPRINT 01</text>
      <text x="45" y="80" fill="#9ca3af" font-family="sans-serif" font-size="12">Zero-Downtime Multi-AZ Ingestion & Dual-Write Grid</text>
    </svg>`,
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
    image: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
      <defs>
        <linearGradient id="bp2-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06080e"/>
          <stop offset="50%" stop-color="#11182c"/>
          <stop offset="100%" stop-color="#05070a"/>
        </linearGradient>
        <linearGradient id="bp2-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bp2-bg)"/>
      <rect x="110" y="140" width="160" height="170" rx="10" fill="#0c1220" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1.5"/>
      <rect x="530" y="140" width="160" height="170" rx="10" fill="#0c1220" stroke="#38bdf8" stroke-opacity="0.5" stroke-width="1.5"/>
      <circle cx="400" cy="225" r="54" fill="#0f1628" stroke="#d4a342" stroke-width="2"/>
      <path d="M270 225 L346 225" stroke="#ffffff" stroke-opacity="0.4" stroke-width="2" stroke-dasharray="4,4"/>
      <path d="M454 225 L530 225" stroke="url(#bp2-cyan)" stroke-width="3"/>
      <text x="190" y="222" fill="#9ca3af" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">LEGACY CORE</text>
      <text x="190" y="242" fill="#64748b" font-family="monospace" font-size="10" text-anchor="middle">MONOLITH</text>
      <text x="400" y="222" fill="#d4a342" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">API GATEWAY</text>
      <text x="400" y="240" fill="#9ca3af" font-family="monospace" font-size="10" text-anchor="middle">ROUTER</text>
      <text x="610" y="222" fill="#38bdf8" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">K8S CLUSTERS</text>
      <text x="610" y="242" fill="#38bdf8" font-family="monospace" font-size="10" text-anchor="middle">MICROSERVICES</text>
      <text x="45" y="55" fill="#38bdf8" font-family="monospace" font-size="13" font-weight="bold" letter-spacing="2">ARAVANTA ARCHITECTURE LABS // BLUEPRINT 02</text>
      <text x="45" y="80" fill="#9ca3af" font-family="sans-serif" font-size="12">Strangler-Fig API Routing & Pod Isolation Mesh</text>
    </svg>`,
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
    image: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
      <defs>
        <linearGradient id="bp3-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#05070a"/>
          <stop offset="50%" stop-color="#0b1b1e"/>
          <stop offset="100%" stop-color="#050a0d"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bp3-bg)"/>
      <polygon points="400,90 490,135 490,265 400,355 310,265 310,135" fill="#0b2426" stroke="#34d399" stroke-width="2"/>
      <polygon points="400,125 460,155 460,250 400,320 340,250 340,155" fill="none" stroke="#d4a342" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="400" cy="225" r="28" fill="#059669" fill-opacity="0.25" stroke="#34d399" stroke-width="2.5"/>
      <path d="M390 225 L398 233 L414 217" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="45" y="55" fill="#34d399" font-family="monospace" font-size="13" font-weight="bold" letter-spacing="2">ARAVANTA ARCHITECTURE LABS // BLUEPRINT 03</text>
      <text x="45" y="80" fill="#9ca3af" font-family="sans-serif" font-size="12">Zero-Trust mTLS Network Vault & Policy Engine</text>
    </svg>`,
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
    image: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
      <defs>
        <linearGradient id="bp4-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#080612"/>
          <stop offset="50%" stop-color="#181230"/>
          <stop offset="100%" stop-color="#05070a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bp4-bg)"/>
      <circle cx="400" cy="225" r="160" fill="none" stroke="#a855f7" stroke-opacity="0.3" stroke-width="1.5"/>
      <ellipse cx="400" cy="225" rx="190" ry="70" fill="none" stroke="#d4a342" stroke-opacity="0.4" stroke-width="1.5" transform="rotate(-20 400 225)"/>
      <ellipse cx="400" cy="225" rx="190" ry="70" fill="none" stroke="#38bdf8" stroke-opacity="0.35" stroke-width="1.5" transform="rotate(40 400 225)"/>
      <circle cx="400" cy="225" r="32" fill="#9333ea" fill-opacity="0.8" stroke="#c084fc" stroke-width="2"/>
      <text x="45" y="55" fill="#c084fc" font-family="monospace" font-size="13" font-weight="bold" letter-spacing="2">ARAVANTA ARCHITECTURE LABS // BLUEPRINT 04</text>
      <text x="45" y="80" fill="#9ca3af" font-family="sans-serif" font-size="12">Three.js Real-time Orbital Mesh & Shader Core</text>
    </svg>`,
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
    image: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
      <defs>
        <linearGradient id="sc1-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#05070a"/>
          <stop offset="50%" stop-color="#0b172a"/>
          <stop offset="100%" stop-color="#04070e"/>
        </linearGradient>
        <linearGradient id="sc1-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#sc1-bg)"/>
      <g stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
        <line x1="0" y1="112" x2="800" y2="112"/>
        <line x1="0" y1="225" x2="800" y2="225"/>
        <line x1="0" y1="337" x2="800" y2="337"/>
        <line x1="200" y1="0" x2="200" y2="450"/>
        <line x1="400" y1="0" x2="400" y2="450"/>
        <line x1="600" y1="0" x2="600" y2="450"/>
      </g>
      <!-- Central Cloud Fabric -->
      <path d="M280 250 C280 190, 340 170, 380 195 C410 150, 490 150, 520 195 C560 195, 590 230, 580 270 C580 305, 545 320, 510 320 L295 320 C250 320, 245 280, 280 250 Z" fill="#0f2038" stroke="url(#sc1-cyan)" stroke-width="2.5"/>
      <!-- Region Nodes -->
      <circle cx="340" cy="245" r="8" fill="#d4a342"/>
      <circle cx="430" cy="225" r="10" fill="#38bdf8"/>
      <circle cx="510" cy="255" r="8" fill="#d4a342"/>
      <line x1="340" y1="245" x2="430" y2="225" stroke="#d4a342" stroke-width="2" stroke-dasharray="4,3"/>
      <line x1="430" y1="225" x2="510" y2="255" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3"/>
      <!-- Header labels -->
      <rect x="45" y="42" width="220" height="24" rx="4" fill="#05070a" stroke="#38bdf8" stroke-opacity="0.4"/>
      <text x="55" y="58" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="bold" letter-spacing="1.5">CORE PRACTICE 01 // CLOUD</text>
      <text x="45" y="85" fill="#e2e8f0" font-family="sans-serif" font-size="15" font-weight="bold">Multi-Cloud Fabric & Global Resiliency</text>
      <text x="45" y="105" fill="#94a3b8" font-family="monospace" font-size="11">ACTIVE REGIONS: US-EAST // EU-WEST // AP-SOUTH</text>
    </svg>`,
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
    image: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
      <defs>
        <linearGradient id="sc2-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#08060f"/>
          <stop offset="50%" stop-color="#181328"/>
          <stop offset="100%" stop-color="#060810"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#sc2-bg)"/>
      <g stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
        <line x1="0" y1="112" x2="800" y2="112"/>
        <line x1="0" y1="225" x2="800" y2="225"/>
        <line x1="0" y1="337" x2="800" y2="337"/>
        <line x1="200" y1="0" x2="200" y2="450"/>
        <line x1="400" y1="0" x2="400" y2="450"/>
        <line x1="600" y1="0" x2="600" y2="450"/>
      </g>
      <!-- Terminal IDE frame -->
      <rect x="250" y="135" width="300" height="190" rx="10" fill="#0d0e18" stroke="#d4a342" stroke-width="2"/>
      <circle cx="275" cy="155" r="5" fill="#ef4444"/>
      <circle cx="290" cy="155" r="5" fill="#eab308"/>
      <circle cx="305" cy="155" r="5" fill="#22c55e"/>
      <line x1="250" y1="172" x2="550" y2="172" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>
      <line x1="275" y1="200" x2="480" y2="200" stroke="#d4a342" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="275" y1="225" x2="440" y2="225" stroke="#38bdf8" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="275" y1="250" x2="490" y2="250" stroke="#a855f7" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="275" y1="275" x2="410" y2="275" stroke="#34d399" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Header labels -->
      <rect x="45" y="42" width="220" height="24" rx="4" fill="#05070a" stroke="#d4a342" stroke-opacity="0.4"/>
      <text x="55" y="58" fill="#d4a342" font-family="monospace" font-size="11" font-weight="bold" letter-spacing="1.5">CORE PRACTICE 02 // DEV</text>
      <text x="45" y="85" fill="#e2e8f0" font-family="sans-serif" font-size="15" font-weight="bold">High-Concurrency Distributed Systems</text>
      <text x="45" y="105" fill="#94a3b8" font-family="monospace" font-size="11">LATENCY: P99 &lt; 28MS // CONCURRENCY: 50K+ REQ/S</text>
    </svg>`,
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
    image: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
      <defs>
        <linearGradient id="sc3-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#040807"/>
          <stop offset="50%" stop-color="#0c221a"/>
          <stop offset="100%" stop-color="#05070a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#sc3-bg)"/>
      <g stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
        <line x1="0" y1="112" x2="800" y2="112"/>
        <line x1="0" y1="225" x2="800" y2="225"/>
        <line x1="0" y1="337" x2="800" y2="337"/>
        <line x1="200" y1="0" x2="200" y2="450"/>
        <line x1="400" y1="0" x2="400" y2="450"/>
        <line x1="600" y1="0" x2="600" y2="450"/>
      </g>
      <!-- GitOps Infinity Loop -->
      <path d="M230 225 C230 160, 340 160, 400 225 C460 290, 570 290, 570 225 C570 160, 460 160, 400 225 C340 290, 230 290, 230 225 Z" fill="none" stroke="#34d399" stroke-width="3"/>
      <!-- Checkpoints -->
      <circle cx="280" cy="180" r="7" fill="#d4a342"/>
      <circle cx="340" cy="270" r="7" fill="#38bdf8"/>
      <circle cx="400" cy="225" r="10" fill="#34d399"/>
      <circle cx="460" cy="180" r="7" fill="#38bdf8"/>
      <circle cx="520" cy="270" r="7" fill="#d4a342"/>
      <!-- Header labels -->
      <rect x="45" y="42" width="220" height="24" rx="4" fill="#05070a" stroke="#34d399" stroke-opacity="0.4"/>
      <text x="55" y="58" fill="#34d399" font-family="monospace" font-size="11" font-weight="bold" letter-spacing="1.5">CORE PRACTICE 03 // DEVOPS</text>
      <text x="45" y="85" fill="#e2e8f0" font-family="sans-serif" font-size="15" font-weight="bold">GitOps Pipelines &amp; Kubernetes Orchestration</text>
      <text x="45" y="105" fill="#94a3b8" font-family="monospace" font-size="11">DEPLOYMENTS: AUTOMATED // ROLLBACK: INSTANT</text>
    </svg>`,
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
    image: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
      <defs>
        <linearGradient id="sc4-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#090506"/>
          <stop offset="50%" stop-color="#241014"/>
          <stop offset="100%" stop-color="#05070a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#sc4-bg)"/>
      <g stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
        <line x1="0" y1="112" x2="800" y2="112"/>
        <line x1="0" y1="225" x2="800" y2="225"/>
        <line x1="0" y1="337" x2="800" y2="337"/>
        <line x1="200" y1="0" x2="200" y2="450"/>
        <line x1="400" y1="0" x2="400" y2="450"/>
        <line x1="600" y1="0" x2="600" y2="450"/>
      </g>
      <!-- Shield Perimeter -->
      <path d="M400 120 L490 160 L490 260 C490 315, 400 355, 400 355 C400 355, 310 315, 310 260 L310 160 Z" fill="#220e14" stroke="#f43f5e" stroke-width="2.5"/>
      <circle cx="400" cy="225" r="18" fill="none" stroke="#d4a342" stroke-width="2.5"/>
      <path d="M400 243 L400 258" stroke="#d4a342" stroke-width="3" stroke-linecap="round"/>
      <!-- Header labels -->
      <rect x="45" y="42" width="220" height="24" rx="4" fill="#05070a" stroke="#f43f5e" stroke-opacity="0.4"/>
      <text x="55" y="58" fill="#f43f5e" font-family="monospace" font-size="11" font-weight="bold" letter-spacing="1.5">CORE PRACTICE 04 // SECURITY</text>
      <text x="45" y="85" fill="#e2e8f0" font-family="sans-serif" font-size="15" font-weight="bold">Zero-Trust Perimeter &amp; Compliance Hardening</text>
      <text x="45" y="105" fill="#94a3b8" font-family="monospace" font-size="11">ENCRYPTION: mTLS 1.3 // POSTURE: SOC 2 TYPE II</text>
    </svg>`,
    avatar: "/brand/primary-logo.png",
    href: "/services/cybersecurity",
    ctaText: "Explore Practice",
  },
];
