import React from "react";
import { Mail, Clock, ShieldCheck, Terminal, HelpCircle, Phone, Lock, FileText } from "lucide-react";
import Link from "next/link";
import DynamicIsland from "@/components/ui/dynamic-island";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 md:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h3 className="text-xl font-bold text-white font-sans">Inquiry Channels</h3>
          <span className="font-mono text-xs text-emerald-400">DESK_ACTIVE</span>
        </div>

        <div className="space-y-5">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-zinc-400">Direct Inquiries</div>
              <div className="text-sm font-semibold text-white mt-0.5 font-mono">
                contact@aravanta.tech
              </div>
              <div className="text-xs text-zinc-400 mt-1 font-sans">
                For architectural evaluations, RFPs, and enterprise transformation retainers.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-zinc-400">Response SLA</div>
              <div className="text-sm font-semibold text-white mt-0.5">
                Within 1 Business Day
              </div>
              <div className="text-xs text-zinc-400 mt-1 font-sans">
                Inquiries are triaged directly by principal architects, not sales call centers.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-zinc-400">Confidentiality Protocol</div>
              <div className="text-sm font-semibold text-white mt-0.5">
                Mutual NDA Standard
              </div>
              <div className="text-xs text-zinc-400 mt-1 font-sans">
                Pre-scoping mutual NDAs executed prior to inspecting proprietary source repositories or cloud topologies.
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Island Architect Availability Capsule */}
        <div className="pt-4 border-t border-white/10 flex justify-center">
          <DynamicIsland
            showControls={false}
            variant="dock"
            ringContent={
              <div className="flex w-72 items-center gap-3 overflow-hidden px-4 py-2.5 text-white">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40">
                  <Phone className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="pointer-events-none font-medium text-xs text-white">
                    Solutions Architects Live
                  </p>
                  <p className="pointer-events-none text-zinc-400 text-[11px]">
                    Average Response &lt; 2 Hours
                  </p>
                </div>
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              </div>
            }
            view="ring"
          />
        </div>
      </div>

      <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 text-xs text-zinc-400 space-y-3">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono">
          <Terminal className="w-4 h-4" />
          <span>Security &amp; API Integration</span>
        </div>
        <p className="leading-relaxed font-sans">
          Inquiries are validated and encrypted through our Next.js edge runtime. Telemetry logs are purged within 7 days.
        </p>
        <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
          <Link
            href="/faq"
            className="text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
          >
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Read our Enterprise FAQ before scheduling</span>
          </Link>
          <Link
            href="/security"
            className="text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
          >
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Review our Zero-Trust Security Architecture</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
