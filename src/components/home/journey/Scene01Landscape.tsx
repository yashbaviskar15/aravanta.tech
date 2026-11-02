"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroInteractiveCloudMesh } from "@/components/home/HeroInteractiveCloudMesh";

export function Scene01Landscape() {
  return (
    <section
      id="scene-01"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 md:pt-36 md:pb-28 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Phase 3 Section 02 Hero Copy */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <ScrollReveal direction="up" delay={0.05} duration={0.75} distance={20}>
              {/* Telemetry Status Ticker Eyebrow */}
              <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 hover:border-[#d4a342]/40 transition-colors shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a342] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4a342]" />
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#d4a342] font-mono">
                  ENTERPRISE CLOUD &amp; SYSTEMS ENGINEERING
                </span>
                <span className="text-white/20 hidden sm:inline">•</span>
                <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                  ALL SYSTEMS NOMINAL (99.999% SLA)
                </span>
              </div>

              {/* Exact Phase 3 Section 02 Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] font-sans">
                Engineering the <br />
                <span className="gold-gradient-text">Infrastructure</span> of Tomorrow.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15} duration={0.75} distance={20}>
              {/* Exact Phase 3 Section 02 Supporting Text */}
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal max-w-2xl font-sans">
                We engineer intelligent cloud infrastructure, resilient software systems and modern automation to help businesses build, scale and evolve.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.25} duration={0.75} distance={20}>
              {/* Exact Phase 3 Section 02 CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                {/* CTA 1: Explore Our Capabilities */}
                <Link
                  href="/technology"
                  className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-[#08090d] font-bold text-sm shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all select-none active:scale-[0.98] w-full sm:w-auto"
                >
                  <span className="relative z-10">Explore Our Capabilities</span>
                  <ArrowRight className="relative z-10 w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-[#08090d]" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </Link>

                {/* CTA 2: Discover Aravanta CloudOS */}
                <Link
                  href="/cloudos"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all backdrop-blur-md shadow-sm group select-none cursor-pointer active:scale-[0.98] w-full sm:w-auto"
                >
                  <Cloud className="w-4 h-4 text-[#d4a342] group-hover:scale-110 transition-transform" />
                  <span>Discover Aravanta CloudOS</span>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35} duration={0.75} distance={20}>
              {/* Proof Badges Bar */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-white font-semibold">99.999% SLA Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4a342] shrink-0" />
                  <span className="text-white font-semibold">Zero-Drift IaC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-white font-semibold">Zero-Trust Vault</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-white font-semibold">SOC 2 Type II Aligned</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive 3D Multi-Cloud Topology Canvas */}
          <div className="lg:col-span-5 relative w-full">
            <ScrollReveal direction="left" delay={0.2} duration={0.85} distance={30}>
              <div className="relative w-full">
                {/* Background Angled Hatch Pattern Accent */}
                <div className="absolute -top-6 -right-6 w-48 h-48 opacity-20 pointer-events-none hidden sm:block">
                  <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
                    <pattern id="hatch-pattern-hero" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="16" stroke="#d4a342" strokeWidth="2" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#hatch-pattern-hero)" />
                  </svg>
                </div>

                {/* The Interactive 3D Canvas Frontend Component */}
                <HeroInteractiveCloudMesh />
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 pb-4 flex flex-col items-center justify-center text-center">
          <a
            href="#company-intro"
            aria-label="Scroll to introduction"
            className="inline-flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors group"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#d4a342] transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-[#d4a342]"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Scene01Landscape;
