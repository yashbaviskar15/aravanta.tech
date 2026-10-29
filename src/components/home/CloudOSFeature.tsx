import React from "react";
import Link from "next/link";
import { Cpu, ShieldCheck, Activity, Terminal, ArrowRight, Layers, Sliders } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cloudosData } from "@/lib/content/cloudosData";

export function CloudOSFeature() {
  return (
    <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-brand-surfaceElevated to-brand-surface border border-brand-border rounded-2xl p-8 md:p-12 lg:p-16 gold-border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="gold" size="md">
                  FEATURED PLATFORM INITIATIVE
                </Badge>
                <span className="text-xs font-mono text-brand-gray-400">
                  ROADMAP-READY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Aravanta <span className="gold-gradient-text">CloudOS</span>
              </h2>

              <p className="text-base sm:text-lg text-brand-gray-300 leading-relaxed font-normal">
                {cloudosData.summary}
              </p>

              {/* Status transparency notice */}
              <div className="p-4 rounded-xl bg-brand-dark/60 border border-brand-border text-xs text-brand-gray-400 leading-relaxed">
                <strong className="text-brand-gold">Development Status:</strong>{" "}
                Currently in architecture and internal technical validation. No invented release dates or commercial tiers; we invite enterprise partners for architectural briefings.
              </div>

              {/* Pillars preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-brand-surface border border-brand-border/60">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Sliders className="w-4 h-4 text-brand-gold" />
                    <span>Unified Orchestration</span>
                  </div>
                  <p className="text-xs text-brand-gray-400 mt-1">
                    Declarative environments with automated state convergence.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-brand-surface border border-brand-border/60">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                    <span>Security Guardrails</span>
                  </div>
                  <p className="text-xs text-brand-gray-400 mt-1">
                    Continuous zero-trust policy enforcement and drift detection.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href="/cloudos"
                  variant="primary"
                  size="md"
                  className="font-semibold shadow-md"
                >
                  <span>Learn About Aravanta CloudOS</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  href="/contact?interest=CloudOS"
                  variant="outline"
                  size="md"
                  className="font-medium"
                >
                  <span>Request Technical Briefing</span>
                </Button>
              </div>
            </div>

            {/* Right Graphic/Mock Blueprint */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-brand-dark border border-brand-border p-6 font-mono text-xs text-brand-gray-300 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                  <span className="text-brand-gold font-bold">CloudOS Architectural Schema</span>
                  <span className="text-[10px] text-brand-gray-400">v0.4.0-preview</span>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-brand-gray-400 uppercase tracking-wider">
                    Control Plane Hierarchy
                  </div>
                  <div className="p-2.5 rounded bg-brand-surface border border-brand-border/60 text-white flex items-center justify-between">
                    <span>1. Ingress & Policy Layer</span>
                    <span className="text-emerald-400 text-[10px]">VERIFIED</span>
                  </div>
                  <div className="p-2.5 rounded bg-brand-surface border border-brand-border/60 text-white flex items-center justify-between">
                    <span>2. Telemetry Aggregation Core</span>
                    <span className="text-sky-400 text-[10px]">ACTIVE DESIGN</span>
                  </div>
                  <div className="p-2.5 rounded bg-brand-surface border border-brand-border/60 text-white flex items-center justify-between">
                    <span>3. Multi-Cloud Provisioner</span>
                    <span className="text-brand-gold text-[10px]">ROADMAP SPEC</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-brand-border text-[11px] text-brand-gray-400">
                  <p>
                    Targeting cloud transformation, simplified operations, and smarter infrastructure governance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
