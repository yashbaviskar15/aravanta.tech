"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  RefreshCw,
  Server,
  Cloud,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Untitled UI Split Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#d4a342] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#d4a342] font-mono">
                ENTERPRISE CLOUD & SOFTWARE ENGINEERING
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              People who care <br />
              about your <span className="gold-gradient-text">growth.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal max-w-2xl">
              Powerful, self-serve cloud infrastructure, resilient software engineering, and modern DevOps built to help you convert, scale, and retain more.
            </p>

            {/* CTA Buttons side-by-side matching reference image */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#scene-06"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all backdrop-blur-md shadow-sm group select-none cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                </div>
                <span>Interactive Demo</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-[#d4a342] hover:brightness-110 text-white font-bold text-sm shadow-[0_10px_25px_rgba(109,40,217,0.35)] transition-all select-none group"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Proof Badges Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-zinc-400">
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
            </div>
          </div>

          {/* Right Column: Arched Hero Visual with Brand Logo & Floating Cards */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Angled Hatch Pattern */}
            <div className="absolute -top-6 -right-6 w-48 h-48 opacity-20 pointer-events-none hidden sm:block">
              <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
                <pattern id="hero-hatch" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="16" stroke="#d4a342" strokeWidth="2" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#hero-hatch)" />
              </svg>
            </div>

            {/* Main Arched Showcase Frame */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              
              <div className="relative h-[480px] sm:h-[530px] rounded-tl-[100px] sm:rounded-tl-[140px] rounded-br-[36px] rounded-tr-3xl rounded-bl-3xl overflow-hidden bg-gradient-to-b from-[#151926] via-[#0d1017] to-[#07090f] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center p-8 group">
                
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,163,66,0.12),transparent_65%)] pointer-events-none" />
                
                <div 
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Professional Brand Logo Presentation */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                  <div className="relative p-6 sm:p-7 rounded-full bg-gradient-to-b from-[#ffffff]/5 to-transparent border border-[#d4a342]/40 shadow-[0_0_50px_rgba(212,163,66,0.15)] group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-1 rounded-full border border-white/10 animate-spin" style={{ animationDuration: "35s" }} />
                    <div className="absolute inset-3 rounded-full border border-dashed border-[#d4a342]/30" />
                    
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#ffffff] via-[#f8f8fa] to-[#e4e6ea] p-4 shadow-2xl flex items-center justify-center border-2 border-[#d4a342]/70">
                      <Image
                        src="/brand/icon.png"
                        alt="ARAVANTA TECH Emblem"
                        width={110}
                        height={110}
                        priority
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xl sm:text-2xl font-extrabold tracking-wider text-white font-mono">
                      ARAVANTA<span className="text-[#d4a342] ml-1">TECH</span>
                    </div>
                    <div className="text-xs font-mono text-[#d4a342] tracking-widest uppercase">
                      SIMPLER. SAFER. SMARTER.
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider">
                    CLOUD ARCHITECTURE LABS
                  </span>
                </div>
              </div>

              {/* Overlapping Floating UI Cards */}
              <div className="absolute -bottom-6 -left-3 sm:-left-8 z-20 flex flex-col gap-3 w-[94%] sm:w-[380px] pointer-events-auto">
                
                {/* Floating Card 1: Core Migration Progress */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 text-zinc-900 border border-white shadow-[0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform hover:-translate-y-0.5 duration-200">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-pink-500 text-white tracking-wider uppercase shrink-0">
                        CLOUD
                      </span>
                      <div className="font-bold text-xs sm:text-sm text-zinc-900 leading-snug truncate">
                        Core Migration — Multi-AZ Cluster
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  </div>

                  <div className="flex items-center justify-between text-xs text-zinc-500 mb-2 font-medium">
                    <span>24 of 24 Workloads</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      ✓ Complete & Synced
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-zinc-200 overflow-hidden">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-[#d4a342]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-700 shrink-0">
                      100%
                    </span>
                  </div>
                </div>

                {/* Floating Card 2: Aravanta CloudOS Telemetry Stream */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 text-zinc-900 border border-white shadow-[0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform hover:-translate-y-0.5 duration-200">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-purple-600 text-white tracking-wider uppercase shrink-0">
                        TELEMETRY
                      </span>
                      <div className="font-bold text-xs sm:text-sm text-zinc-900 leading-snug truncate">
                        Aravanta CloudOS Data Stream
                      </div>
                    </div>
                    <RefreshCw className="w-3.5 h-3.5 text-purple-600 animate-spin shrink-0 mt-0.5" style={{ animationDuration: "6s" }} />
                  </div>

                  <div className="flex items-center justify-between text-xs text-zinc-500 mb-2 font-medium">
                    <span>p99 Latency 28ms</span>
                    <span className="text-purple-600 font-semibold">
                      ⟳ Active Telemetry...
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-zinc-200 overflow-hidden">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500" />
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-700 shrink-0">
                      80%
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
