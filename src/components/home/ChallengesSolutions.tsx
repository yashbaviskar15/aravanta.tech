import React from "react";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";

const comparisons = [
  {
    challenge: "Runaway Cloud Spend & Unused Resources",
    challengeDetail:
      "Unmanaged instances, oversized databases, and orphaned snapshots leading to bloated monthly cloud bills.",
    solution: "FinOps Rigor & Automated Right-Sizing",
    solutionDetail:
      "Granular cost attribution, automated scaling policies, and systematic workload profiling to eliminate financial waste.",
    link: "/services/cloud-solutions",
  },
  {
    challenge: "Fear of Touching Fragile Legacy Monoliths",
    challengeDetail:
      "Codebases with undocumented dependencies where a single code modification causes unexpected system-wide outages.",
    solution: "Decoupled Modernization via Safe APIs",
    solutionDetail:
      "Incremental modularization using the strangler pattern, adding automated test barriers without high-risk total rewrites.",
    link: "/services/digital-transformation",
  },
  {
    challenge: "High-Stress Weekend Deployments",
    challengeDetail:
      "Engineers performing manual cutovers with lengthy spreadsheets, leading to downtime and emergency midnight hotfixes.",
    solution: "Declarative GitOps & Blue/Green Pipelines",
    solutionDetail:
      "Fully automated, repeatable CI/CD pipelines with automated health-check verification and instantaneous rollbacks.",
    link: "/services/devops-automation",
  },
  {
    challenge: "Excessive Admin Privileges & Weak IAM",
    challengeDetail:
      "Wide-open access permissions and shared credentials that expose production databases to catastrophic risk.",
    solution: "Strict Zero-Trust Identity & Hardened Gates",
    solutionDetail:
      "Role-based access controls, short-lived tokens, and automated secret scanning baked directly into the engineering workflow.",
    link: "/services/cybersecurity",
  },
];

export function ChallengesSolutions() {
  return (
    <section className="py-20 md:py-28 bg-[#0b0c10] border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="BUSINESS IMPACT"
          title="Common Challenges, Engineered Solutions"
          description="We tackle the friction points that prevent modern organizations from moving fast and operating reliably."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-brand-surface border border-brand-border p-6 sm:p-8 flex flex-col justify-between hover:border-brand-borderHighlight transition-all duration-300"
            >
              <div className="space-y-6">
                {/* The Challenge */}
                <div className="p-4 rounded-lg bg-red-950/20 border border-red-900/30">
                  <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>The Challenge</span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1.5">
                    {item.challenge}
                  </h4>
                  <p className="text-xs text-brand-gray-300 mt-1 leading-relaxed">
                    {item.challengeDetail}
                  </p>
                </div>

                {/* The Solution */}
                <div className="p-4 rounded-lg bg-brand-surfaceElevated border border-brand-gold/30">
                  <div className="flex items-center gap-2 text-brand-gold font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Aravanta Tech Approach</span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1.5">
                    {item.solution}
                  </h4>
                  <p className="text-xs text-brand-gray-300 mt-1 leading-relaxed">
                    {item.solutionDetail}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold hover:text-brand-gold-light transition-colors"
                >
                  <span>Explore related practice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
