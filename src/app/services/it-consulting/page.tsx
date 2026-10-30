import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  FileSearch,
  TrendingDown,
  ShieldCheck,
  Scale,
  Activity,
  ArrowUpRight,
  Layers,
  BrainCircuit,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "IT Consulting & Architecture Advisory | ARAVANTA TECH",
  description:
    "Unbiased enterprise architecture reviews, M&A technology due diligence, technical debt scorecards, and cloud spend rationalization from ARAVANTA TECH.",
};

export default function ITConsultingPage() {
  const capabilities = [
    {
      title: "Comprehensive Architecture Audits",
      icon: FileSearch,
      description: "Thorough inspection of source repositories, database query plans, network choke points, and distributed dependencies to uncover hidden single points of failure.",
      specs: ["Codebase Quality & Complexity Analysis", "Bottleneck & Latency Mapping", "Actionable Refactoring Blueprint"],
    },
    {
      title: "Cloud Spend & FinOps Rationalization",
      icon: TrendingDown,
      description: "Independent audit of cloud invoices across AWS, Azure, and GCP. We identify orphaned resources, misconfigured tiering, and over-provisioned clusters.",
      specs: ["Immediate 20%+ Waste Identification", "Unit Economics Attribution", "Committed Use Discount Modeling"],
    },
    {
      title: "M&A Technical Due Diligence",
      icon: Scale,
      description: "Rigorous technical assessments for investors and acquirers. Evaluating engineering team velocity, code maintainability, open-source license risk, and infrastructure debt.",
      specs: ["Red-Flag Technical Risk Dossier", "IP & Open Source License Audit", "Post-Acquisition Integration Roadmap"],
    },
    {
      title: "Strategic Technology Roadmapping",
      icon: Compass,
      description: "Translating business growth objectives into clear, phased technical milestones that eliminate recurring engineering friction and accelerate market delivery.",
      specs: ["Vendor-Neutral Tool Selection", "Team Skill Gap Analysis", "Executive Board-Level Reporting"],
    },
  ];

  const auditScorecard = [
    {
      category: "Infrastructure Scalability",
      score: "94/100",
      status: "Optimal",
      finding: "Horizontal auto-scaling and stateless workers verified up to 50k req/s.",
    },
    {
      category: "Zero-Trust Security Posture",
      score: "98/100",
      status: "Compliant",
      finding: "Strict mTLS mesh, zero public ingress ports, and hardware KMS envelope encryption.",
    },
    {
      category: "Cloud Spend Efficiency",
      score: "88/100",
      status: "Good",
      finding: "Spot instance consolidation recommended for non-critical worker node pools.",
    },
    {
      category: "Code Maintainability & Debt",
      score: "91/100",
      status: "Low Debt",
      finding: "Strict TypeScript typing across all modules; 89% test coverage maintained.",
    },
  ];

  const useCases = [
    {
      category: "Private Equity Tech Audit",
      challenge: "Pre-acquisition assessment of a fast-growing B2B SaaS company with claims of proprietary AI and scalable architecture.",
      solution: "Conducted complete code audit, git commit velocity analysis, and cloud dependency teardown over a 10-day period.",
      outcome: "Discovered critical unencrypted customer data and unsustainable GPU cloud spend, enabling the investor to renegotiate terms by $4.2M.",
    },
    {
      category: "Global Enterprise FinOps Overhaul",
      challenge: "Cloud hosting bill ballooned from $40k/month to $210k/month following a series of uncoordinated team deployments.",
      solution: "Executed deep cost allocation audit, purged 40TB of orphaned snapshot storage, and automated spot instance scheduling.",
      outcome: "Reduced monthly cloud spend by 41% ($86,000/month in net savings) within the first 45 days.",
    },
    {
      category: "Failing Monolith Modernization",
      challenge: "An enterprise software modernization project had spent 18 months and $3M with zero production deliverables.",
      solution: "Stepped in as independent technical advisors, replaced the stalled big-bang rewrite with an actionable Strangler-Fig roadmap.",
      outcome: "Shipped the first decoupled production service in 6 weeks, realigning the engineering organization around measurable milestones.",
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Bespoke IT Consulting Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2">
              <Badge variant="gold" size="sm" dot>
                UNBIASED ARCHITECTURE ADVISORY
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
              Architecture Reviews &amp; <br />
              <span className="gold-gradient-text">Technical Due Diligence.</span>
            </h1>

            <p className="text-xl text-zinc-300 font-light font-mono">
              Unbiased Truth. Actionable Roadmaps. Zero Vendor Kickbacks.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
              We provide independent, rigorous technical counsel to technology executives, boards, and engineering leaders. We do not sell proprietary vendor licenses or push bloated tooling. Our recommendations are rooted purely in production durability and business longevity.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Button href="/contact?service=IT%20Consulting" variant="primary" size="md">
                <span>Book Architecture Advisory</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/case-studies" variant="secondary" size="md">
                <span>Explore Advisory Case Studies</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Interactive Tech Debt Scorecard Visualizer */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-brand-gold">
                  <Compass className="w-4 h-4" />
                  <span>ARCHITECTURE HEALTH SCORECARD</span>
                </div>
                <span className="text-[10px] font-mono bg-brand-gold/10 text-brand-gold border border-brand-gold/30 px-2 py-0.5 rounded">
                  OVERALL: 93/100
                </span>
              </div>

              {/* Scorecard Items */}
              <div className="space-y-2.5 font-mono text-xs">
                {auditScorecard.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-brand-gold/30 transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white font-sans">{item.category}</span>
                      <span className="text-[11px] font-bold text-brand-gold font-mono">{item.score} ({item.status})</span>
                    </div>
                    <div className="text-[10px] text-zinc-400 font-sans">{item.finding}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Scope: 100% Vendor Neutral</span>
                <span className="text-brand-gold">Lead Time: 1–2 Weeks</span>
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
              CONSULTING PRACTICES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Rigorous Technical Analysis
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Actionable engineering guidance for high-stakes technical and investment decisions.
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

      {/* Verified Enterprise Case Studies */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="emerald" size="sm" dot className="mb-3">
              REAL ENGAGEMENTS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Advisory Case Studies
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              How independent architecture audits saved millions and salvaged failing initiatives.
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
                    <div className="text-xs font-semibold text-zinc-300">Situation / Dilemma:</div>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-300">Advisory Action:</div>
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
              <Link href="/services/cloud-solutions" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                Cloud Solutions <ArrowRight className="w-3 h-3 text-brand-gold" />
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/services/digital-transformation" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                Digital Transformation <ArrowRight className="w-3 h-3 text-brand-gold" />
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/solutions" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                Industry Solutions <ArrowRight className="w-3 h-3 text-brand-gold" />
              </Link>
            </div>
          </div>
          <Button href="/contact?service=IT%20Consulting" variant="primary" size="md">
            <span>Schedule Advisory Session</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
