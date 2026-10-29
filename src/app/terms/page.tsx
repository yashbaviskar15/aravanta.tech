import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service governing the use of the ARAVANTA TECH enterprise website and technical consultation requests.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <Badge variant="neutral" size="sm">
            LEGAL & GOVERNANCE
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-brand-gray-400 font-mono">
            Last updated: October 2026 • Effective Date: October 7, 2026
          </p>
        </div>

        {/* Template Note */}
        <div className="p-4 rounded-xl bg-brand-surfaceElevated border border-brand-gold/30 text-xs text-brand-gray-300 mb-10 leading-relaxed">
          <strong className="text-brand-gold">Notice to Site Administrators:</strong> This Terms of Service page provides standard enterprise web terms. Formal master services agreements (MSAs) and statements of work (SOWs) are executed separately for commercial consulting and development engagements.
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-brand-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to be bound by these Terms of Service. If you do not agree with any portion of these terms, please discontinue use of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Informational Purpose & No Warranty</h2>
            <p>
              The content provided on this website is for general informational and conceptual purposes regarding ARAVANTA TECH&apos;s consulting services, engineering practices, and the Aravanta CloudOS platform initiative. Descriptions of upcoming platform capabilities do not constitute a binding commercial warranty or guarantee of release timelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Intellectual Property Rights</h2>
            <p>
              All trademarks, service marks, logos (including the ARAVANTA TECH emblem and wordmark), design elements, and original website copy are the proprietary property of ARAVANTA TECH. Nothing on this website grants any license or right to use any mark without prior written authorization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Commercial Engagements & Separate Agreements</h2>
            <p>
              Submitting an inquiry through this website does not create a formal client-consultant relationship. Binding professional services engagements require a mutually signed Master Services Agreement (MSA) and Statement of Work (SOW) defining scope, deliverables, and liability limits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Corporate Placeholders & Jurisdiction</h2>
            <div className="p-4 rounded-lg bg-brand-surface border border-brand-border font-mono text-xs text-brand-gray-300 space-y-1">
              <div>Entity Name: ARAVANTA TECH [Legal Corporate Entity TBA]</div>
              <div>Governing Jurisdiction: [Applicable State / Country Jurisdiction TBA]</div>
              <div>Legal Inquiries: legal@aravantatech.com</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
