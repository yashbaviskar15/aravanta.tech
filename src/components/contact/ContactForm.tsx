"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  projectSummary: string;
  consent: boolean;
  honeypot: string; // Anti-spam hidden field
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  projectSummary?: string;
  consent?: string;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || searchParams.get("interest") || "";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: initialService,
    projectSummary: "",
    consent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid business email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service or area of interest.";
    }

    if (!formData.projectSummary.trim()) {
      newErrors.projectSummary = "Please provide a brief summary of your project or requirements.";
    } else if (formData.projectSummary.trim().length < 15) {
      newErrors.projectSummary = "Please provide at least 15 characters describing your initiative.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the processing of your project details.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check anti-spam honeypot
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setServerMessage(
          data.message ||
            "Your technical inquiry has been transmitted securely. A principal systems architect will review your workload specifications and respond within one business day."
        );
      } else {
        setStatus("error");
        setServerMessage(data.message || "Failed to submit inquiry. Please try again or reach out directly.");
      }
    } catch (err) {
      setStatus("error");
      setServerMessage("A network error occurred while sending your request. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-[#0d0f15] border border-emerald-500/30 p-8 md:p-12 text-center space-y-5 shadow-2xl backdrop-blur-xl">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            TRANSMISSION CONFIRMED
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">Inquiry Received</h3>
        </div>
        <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed font-sans">
          {serverMessage}
        </p>
        <div className="pt-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setFormData({
                name: "",
                email: "",
                company: "",
                service: "",
                projectSummary: "",
                consent: false,
                honeypot: "",
              });
              setStatus("idle");
            }}
          >
            Submit Another Technical Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-8 md:p-10 space-y-6 shadow-2xl backdrop-blur-xl"
    >
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-1">
          <Terminal className="w-3.5 h-3.5" />
          <span>SECURE ARCHITECT DISPATCH</span>
        </div>
        <h3 className="text-2xl font-bold text-white font-sans">Initiate Technical Consultation</h3>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 font-sans">
          Direct dialogue with engineering leads. Non-disclosure agreements (NDAs) available prior to architecture analysis.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-red-300 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>{serverMessage}</span>
        </div>
      )}

      {/* Honeypot field (hidden from screen, catches automated bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-field">Leave blank</label>
        <input
          type="text"
          id="website-field"
          name="honeypot"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
            Full Name <span className="text-emerald-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder="e.g. Elena Rostova"
            className="w-full px-4 py-3 rounded-xl bg-[#08090d] border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
            Enterprise Email <span className="text-emerald-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="e.g. elena@enterprise.com"
            className="w-full px-4 py-3 rounded-xl bg-[#08090d] border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Helix Technologies Ltd."
            className="w-full px-4 py-3 rounded-xl bg-[#08090d] border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
          />
        </div>

        {/* Service of Interest */}
        <div>
          <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
            Engagement Practice <span className="text-emerald-400">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(e) => {
              setFormData({ ...formData, service: e.target.value });
              if (errors.service) setErrors({ ...errors, service: undefined });
            }}
            className="w-full px-4 py-3 rounded-xl bg-[#08090d] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
          >
            <option value="" disabled className="bg-[#08090d] text-zinc-500">Select practice area...</option>
            <option value="Cloud Solutions" className="bg-[#08090d]">Cloud Infrastructure &amp; Multi-Region</option>
            <option value="Digital Transformation" className="bg-[#08090d]">Legacy Modernization &amp; Event Mesh</option>
            <option value="Application Development" className="bg-[#08090d]">Distributed Systems Engineering</option>
            <option value="IT Infrastructure" className="bg-[#08090d]">Enterprise Bare-Metal &amp; SRE</option>
            <option value="DevOps and Automation" className="bg-[#08090d]">GitOps &amp; Zero-Trust CI/CD</option>
            <option value="Cybersecurity" className="bg-[#08090d]">Zero-Trust Security &amp; SPIFFE mTLS</option>
            <option value="IT Consulting" className="bg-[#08090d]">Architecture Audit &amp; FinOps Advisory</option>
            <option value="Aravanta CloudOS" className="bg-[#08090d]">Aravanta CloudOS MicroVM Platform</option>
            <option value="General Inquiry" className="bg-[#08090d]">Executive Architecture Consultation</option>
          </select>
          {errors.service && (
            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.service}
            </p>
          )}
        </div>
      </div>

      {/* Project Summary */}
      <div>
        <label htmlFor="projectSummary" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
          Workload Brief &amp; Architecture Challenges <span className="text-emerald-400">*</span>
        </label>
        <textarea
          id="projectSummary"
          name="projectSummary"
          rows={4}
          value={formData.projectSummary}
          onChange={(e) => {
            setFormData({ ...formData, projectSummary: e.target.value });
            if (errors.projectSummary) setErrors({ ...errors, projectSummary: undefined });
          }}
          placeholder="Detail current infrastructure topography, scale targets, latency thresholds, compliance mandates, or cloud optimization goals..."
          className="w-full px-4 py-3 rounded-xl bg-[#08090d] border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors resize-y"
        />
        {errors.projectSummary && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
            <AlertCircle className="w-3 h-3" /> {errors.projectSummary}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={(e) => {
              setFormData({ ...formData, consent: e.target.checked });
              if (errors.consent) setErrors({ ...errors, consent: undefined });
            }}
            className="mt-0.5 rounded bg-[#08090d] border-white/20 text-emerald-400 focus:ring-emerald-400 focus:ring-offset-[#08090d]"
          />
          <span className="text-xs text-zinc-400 leading-relaxed font-sans">
            I agree to the processing of submitted technical details strictly for scoping discussion. Non-disclosure agreements apply and telemetry is never brokered to third parties.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
            <AlertCircle className="w-3 h-3" /> {errors.consent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={status === "loading"}
          disabled={status === "loading"}
          className="w-full font-bold shadow-xl shadow-emerald-500/10"
        >
          <span>Transmit Technical Inquiry</span>
          <Send className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="text-[11px] font-mono text-zinc-500 text-center flex items-center justify-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>TLS 1.3 Encrypted • Direct Architect Review • Mutual NDA Ready</span>
      </div>
    </form>
  );
}
