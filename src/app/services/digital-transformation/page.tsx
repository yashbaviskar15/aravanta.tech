import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Workflow,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Layers,
  Database,
  Cpu,
  ArrowUpRight,
  Split,
  GitFork,
  Activity,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Digital Transformation & Monolith Decoupling | ARAVANTA TECH",
  description:
    "Phased legacy monolith decoupling, strangler-fig architecture, event-driven streaming, and database modernizations executed with zero operational downtime.",
};

export default function DigitalTransformationPage() {
  const capabilities = [
    {
      title: "Strangler-Fig Monolith Decoupling",
      icon: Split,
      description: "Gradual, low-risk extraction of monolithic business domains into autonomous microservices via reverse-proxy facades, preventing high-risk big-bang rewrites.",
      specs: ["Zero Disruption to Existing Users", "Incremental Domain Extraction", "Reversible Route Gates"],
    },
    {
      title: "Event-Driven Data Streaming (CDC)",
      icon: RefreshCw,
      description: "Implementing Change Data Capture (Debezium + Kafka) to asynchronously synchronize updates between legacy SQL tables and modern event-driven architectures.",
      specs: ["Sub-Second Data Synchronization", "Transactional Outbox Guarantees", "Zero Direct Schema Coupling"],
    },
    {
      title: "Database Partitioning & Polyglot Storage",
      icon: Database,
      description: "Decoupling shared monolithic databases into purpose-fit transactional, analytical, and search datastores (PostgreSQL, ClickHouse, Redis, Elasticsearch).",
      specs: ["Dual-Write Validation Pipelines", "Zero-Loss Shadow Reading", "Zero Downtime Cutover"],
    },
    {
      title: "Automated Parity & Regression Verification",
      icon: Activity,
      description: "Mirroring live production traffic to both legacy systems and modernized services to mathematically verify output parity before full cutover.",
      specs: ["Traffic Shadowing & Diffing", "Zero-Risk Production Testing", "Automated Anomaly Detection"],
    },
  ];

  const stranglerPhases = [
    {
      phase: "Phase 01: Boundary Mapping",
      action: "Identify bounded domains and deploy API Gateway facade routing in front of legacy core.",
      status: "Mapped",
    },
    {
      phase: "Phase 02: Change Data Capture",
      action: "Stream table mutations to Kafka event bus without modifying legacy application code.",
      status: "Streaming",
    },
    {
      phase: "Phase 03: Service Extraction",
      action: "Implement isolated microservice consuming event stream with dedicated database.",
      status: "Active",
    },
    {
      phase: "Phase 04: Traffic Shadowing",
      action: "Mirror 100% live requests to new service, verifying 0 divergence in responses.",
      status: "Verified",
    },
    {
      phase: "Phase 05: Atomic Cutover",
      action: "Shift primary traffic to modern service; decommission legacy endpoint.",
      status: "Complete",
    },
  ];

  const useCases = [
    {
      category: "FinTech Transactional Core",
      challenge: "A 14-year-old monolithic Java banking system with tight database locks preventing horizontal scaling during month-end settlements.",
      solution: "Implemented an API Gateway facade and extracted the ledger settlement service into autonomous Go microservices via Kafka CDC.",
      outcome: "Settlement processing time slashed from 6.5 hours to 18 minutes; zero downtime during the 9-month phased migration.",
    },
    {
      category: "Enterprise Supply Chain Monolith",
      challenge: "Fragile monolithic codebase where minor shipping updates frequently broke warehouse inventory and billing routines.",
      solution: "Employed the Strangler-Fig pattern with automated traffic diffing to incrementally extract inventory management.",
      outcome: "Deployment frequency increased by 8x while production incident tickets dropped by 84%.",
    },
    {
      category: "Healthcare Record Management",
      challenge: "Legacy on-premise relational database struggling to handle real-time medical imaging ingestion and search requests.",
      solution: "Decoupled search and read workloads to an Elasticsearch and Redis cache cluster backed by event-driven change replication.",
      outcome: "Clinician search response times improved from 4.2 seconds to 85 milliseconds.",
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Bespoke Transformation Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2">
              <Badge variant="gold" size="sm" dot>
                LEGACY MODERNIZATION &amp; STRANGLER-FIG
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
              Legacy Monolith <br />
              <span className="gold-gradient-text">Decoupling &amp; Modernization.</span>
            </h1>

            <p className="text-xl text-zinc-300 font-light font-mono">
              Zero Big-Bang Rewrites. Zero Downtime. Controlled Migration.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
              Big-bang software rewrites fail. We employ the Strangler-Fig architecture pattern and event-driven data streaming to systematically decouple monolithic systems into high-velocity, cloud-native microservices while your business continues operating without interruption.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Button href="/contact?service=Digital%20Transformation" variant="primary" size="md">
                <span>Plan Monolith Modernization</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/case-studies" variant="secondary" size="md">
                <span>View Decoupling Case Studies</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Interactive Strangler-Fig Visualizer Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-brand-gold">
                  <Workflow className="w-4 h-4" />
                  <span>STRANGLER-FIG DECOUPLING CADENCE</span>
                </div>
                <span className="text-[10px] font-mono bg-brand-gold/10 text-brand-gold border border-brand-gold/30 px-2 py-0.5 rounded">
                  RISK: MITIGATED
                </span>
              </div>

              {/* Strangler Phases Flow */}
              <div className="space-y-2.5 font-mono text-xs">
                {stranglerPhases.map((phase, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-brand-gold/30 transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white font-sans">{phase.phase}</span>
                      <span className="text-[10px] text-brand-gold font-mono">✓ {phase.status}</span>
                    </div>
                    <div className="text-[10px] text-zinc-400">{phase.action}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Parity: 100% Shadow Verified</span>
                <span className="text-brand-gold">Downtime: 0 Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 md:py-24 border-t border-white/10 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="gold" size="sm" dot className="mb-3">
              TRANSFORMATION DISCIPLINES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Predictable Systems Evolution
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Engineering disciplines that replace catastrophic code rewrites with verifiable incremental improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0d0f15] border border-white/10 p-7 hover:border-brand-gold/30 transition-all space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {cap.description}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 border-t border-white/5">
                    {cap.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[11px] font-mono text-zinc-300"
                      >
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Case Studies */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="emerald" size="sm" dot className="mb-3">
              VERIFIED SUCCESS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Modernization In Action
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              How high-risk monolithic systems were safely transformed into decoupled architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-gold">
                    {uc.category}
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-zinc-300">Legacy Bottleneck:</div>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-300">Modernization Architecture:</div>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.solution}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs font-mono text-brand-gold font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{uc.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Practices */}
      <section className="py-12 border-t border-white/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Related Practices</span>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <Link href="/services/application-development" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                Application Development <ArrowRight className="w-3 h-3 text-brand-gold" />
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/services/cloud-solutions" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                Cloud Solutions <ArrowRight className="w-3 h-3 text-brand-gold" />
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/services/it-consulting" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                IT Consulting <ArrowRight className="w-3 h-3 text-brand-gold" />
              </Link>
            </div>
          </div>
          <Button href="/contact?service=Digital%20Transformation" variant="primary" size="md">
            <span>Schedule Modernization Review</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
