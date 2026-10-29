import React from "react";
import { ArrowRight, MessageSquare, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#0b0c10] border-t border-brand-border/60 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surfaceElevated border border-brand-border text-xs font-mono text-brand-gold mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>START THE CONVERSATION</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Modernize Your Technology? <br />
          <span className="gold-gradient-text">Build Smarter. Grow Faster.</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
          Whether you require a comprehensive cloud architecture review, full-stack application development, or an automated CI/CD pipeline, our senior engineering team is ready to assist.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto font-semibold shadow-lg shadow-brand-gold/20"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto font-medium"
          >
            <span>Explore All Services</span>
          </Button>
        </div>

        <p className="mt-6 text-xs text-brand-gray-400">
          Inquiries reviewed directly by principal engineers. Responses within one business day.
        </p>
      </div>
    </section>
  );
}
