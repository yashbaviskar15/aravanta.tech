import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and data governance practices for ARAVANTA TECH enterprise website visitors and clients.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <Badge variant="neutral" size="sm">
            LEGAL & GOVERNANCE
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-brand-gray-400 font-mono">
            Last updated: October 2026 • Effective Date: October 7, 2026
          </p>
        </div>

        {/* Template Note */}
        <div className="p-4 rounded-xl bg-brand-surfaceElevated border border-brand-gold/30 text-xs text-brand-gray-300 mb-10 leading-relaxed">
          <strong className="text-brand-gold">Notice to Site Administrators:</strong> This Privacy Policy serves as our operational policy template. Identifiers marked in brackets <code className="text-brand-gold font-mono">[COMPANY_NAME]</code>, <code className="text-brand-gold font-mono">[JURISDICTION]</code>, and <code className="text-brand-gold font-mono">[REGISTERED_OFFICE]</code> can be updated upon corporate filing confirmation.
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-brand-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Overview & Scope</h2>
            <p>
              ARAVANTA TECH (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of visitors to our enterprise website and parties who submit technical inquiries. This Privacy Policy outlines what information we collect, how it is handled, and your choices regarding data protection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p>
              We collect information only when provided voluntarily by you through our contact and consultation request forms:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>Contact details: Name, business email address, company or organization name.</li>
              <li>Project details: Service area of interest, technical requirements summary, and timeline expectations.</li>
              <li>Technical usage logs: Minimal access logs (IP address, browser user-agent, timestamp) maintained solely for operational security and anti-abuse protection.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Collected Information</h2>
            <p>
              Information submitted is used strictly for legitimate commercial and technical purposes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>Evaluating and responding to your technical inquiry or request for technical scoping.</li>
              <li>Drafting mutual Non-Disclosure Agreements (NDAs) and preliminary engagement proposals.</li>
              <li>Maintaining the security, performance, and integrity of our digital platforms.</li>
            </ul>
            <p className="mt-2">
              We never sell, rent, or trade your personal or corporate information to third-party advertisers or data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Security & Data Protection</h2>
            <p>
              In accordance with our &quot;Safer&quot; engineering philosophy, all communications across this website utilize TLS 1.3 encryption in transit. Administrative access to inquiry databases is restricted by role-based access control and multi-factor authentication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Corporate Placeholders & Jurisdiction</h2>
            <p>
              Legal entity details requiring statutory confirmation:
            </p>
            <div className="p-4 rounded-lg bg-brand-surface border border-brand-border font-mono text-xs text-brand-gray-300 space-y-1">
              <div>Entity Name: ARAVANTA TECH [Legal Corporate Entity TBA]</div>
              <div>Governing Law / Jurisdiction: [Applicable State / Country Jurisdiction TBA]</div>
              <div>Registered Office: [Official Registered Address TBA]</div>
              <div>Data Protection Contact: privacy@aravantatech.com</div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Contacting Us Regarding Privacy</h2>
            <p>
              If you have questions regarding this privacy policy or wish to request the deletion of your submitted technical inquiry data, please contact us at <a href="mailto:privacy@aravantatech.com" className="text-brand-gold hover:underline">privacy@aravantatech.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
