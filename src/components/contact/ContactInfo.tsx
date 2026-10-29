import React from "react";
import { Mail, Clock, ShieldCheck, Terminal, HelpCircle, Phone } from "lucide-react";
import Link from "next/link";
import DynamicIsland from "@/components/ui/dynamic-island";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-brand-surface border border-brand-border p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-bold text-white">Inquiry Channels</h3>

        <div className="space-y-5">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-brand-surfaceElevated border border-brand-border flex items-center justify-center text-brand-gold shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-brand-gray-400">Direct Contact</div>
              <div className="text-sm font-semibold text-white mt-0.5">
                contact@aravantatech.com
              </div>
              <div className="text-xs text-brand-gray-400 mt-1">
                For architectural reviews, RFPs, and consulting partnerships.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-brand-surfaceElevated border border-brand-border flex items-center justify-center text-brand-gold shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-brand-gray-400">Response Window</div>
              <div className="text-sm font-semibold text-white mt-0.5">
                Within 1 Business Day
              </div>
              <div className="text-xs text-brand-gray-400 mt-1">
                Submissions are triaged directly by principal architects, not sales call centers.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-brand-surfaceElevated border border-brand-border flex items-center justify-center text-brand-gold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-brand-gray-400">Confidentiality Guarantee</div>
              <div className="text-sm font-semibold text-white mt-0.5">
                NDA Readiness
              </div>
              <div className="text-xs text-brand-gray-400 mt-1">
                Mutual NDAs executed prior to inspecting proprietary source code or topologies.
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Island Architect Availability Capsule */}
        <div className="pt-2 border-t border-brand-border/60 flex justify-center">
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
                  <p className="pointer-events-none text-white/60 text-[11px]">
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

      <div className="rounded-2xl bg-brand-surfaceElevated/60 border border-brand-border p-6 text-xs text-brand-gray-400 space-y-3">
        <div className="flex items-center gap-2 text-brand-gold font-semibold">
          <Terminal className="w-4 h-4" />
          <span>Integration & Environment Notice</span>
        </div>
        <p className="leading-relaxed">
          Form submissions are validated through our secure Next.js server runtime. For production email delivery, configure the <code className="text-brand-gold font-mono">CONTACT_NOTIFICATION_EMAIL</code> and SMTP provider credentials in your environment variables.
        </p>
        <div className="pt-2">
          <Link
            href="/faq"
            className="text-white hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-brand-gold" />
            <span>Have questions before submitting? Read our FAQ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
