"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
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
      newErrors.email = "Please enter a valid email address.";
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
            "Thank you. Your inquiry has been received by our engineering team. We will review your requirements and respond within one business day."
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
      <div className="rounded-2xl bg-brand-surface border border-brand-gold/40 p-8 md:p-10 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
        <p className="text-sm text-brand-gray-300 max-w-md mx-auto leading-relaxed">
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
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-brand-surface border border-brand-border p-6 sm:p-8 md:p-10 space-y-6 shadow-xl"
    >
      <div className="border-b border-brand-border/60 pb-4">
        <h3 className="text-xl font-bold text-white">Start a Technical Discussion</h3>
        <p className="text-xs text-brand-gray-400 mt-1">
          Tell us about your systems, goals, or architectural questions. All inquiries are kept strictly confidential.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-lg bg-red-950/40 border border-red-800/60 text-xs text-red-300 flex items-start gap-3">
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
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-brand-gray-300 mb-1.5">
            Full Name <span className="text-brand-gold">*</span>
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
            placeholder="e.g. Alex Morgan"
            className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surfaceElevated border border-brand-border text-white text-sm placeholder:text-brand-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-brand-gray-300 mb-1.5">
            Business Email <span className="text-brand-gold">*</span>
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
            placeholder="e.g. alex@enterprise.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surfaceElevated border border-brand-border text-white text-sm placeholder:text-brand-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-brand-gray-300 mb-1.5">
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Acme Systems Ltd."
            className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surfaceElevated border border-brand-border text-white text-sm placeholder:text-brand-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
          />
        </div>

        {/* Service of Interest */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-brand-gray-300 mb-1.5">
            Service of Interest <span className="text-brand-gold">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(e) => {
              setFormData({ ...formData, service: e.target.value });
              if (errors.service) setErrors({ ...errors, service: undefined });
            }}
            className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surfaceElevated border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
          >
            <option value="" disabled>Select an area...</option>
            <option value="Cloud Solutions">Cloud Solutions</option>
            <option value="Digital Transformation">Digital Transformation</option>
            <option value="Application Development">Application Development</option>
            <option value="IT Infrastructure">IT Infrastructure</option>
            <option value="DevOps and Automation">DevOps & Automation</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="IT Consulting">IT Consulting</option>
            <option value="Aravanta CloudOS">Aravanta CloudOS Platform</option>
            <option value="General Inquiry">General Technical Inquiry</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.service}
            </p>
          )}
        </div>
      </div>

      {/* Project Summary */}
      <div>
        <label htmlFor="projectSummary" className="block text-xs font-semibold uppercase tracking-wider text-brand-gray-300 mb-1.5">
          Project Summary & Technical Objectives <span className="text-brand-gold">*</span>
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
          placeholder="Briefly describe your current architecture, key challenges, or what you are aiming to build or modernize..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surfaceElevated border border-brand-border text-white text-sm placeholder:text-brand-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold resize-y"
        />
        {errors.projectSummary && (
          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.projectSummary}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={(e) => {
              setFormData({ ...formData, consent: e.target.checked });
              if (errors.consent) setErrors({ ...errors, consent: undefined });
            }}
            className="mt-0.5 rounded bg-brand-surfaceElevated border-brand-border text-brand-gold focus:ring-brand-gold focus:ring-offset-brand-dark"
          />
          <span className="text-xs text-brand-gray-400 leading-relaxed">
            I consent to ARAVANTA TECH processing my inquiry to discuss technical requirements. Information will not be shared with third parties.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
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
          className="w-full font-bold shadow-lg shadow-brand-gold/20"
        >
          <span>Send Technical Inquiry</span>
          <Send className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="text-[11px] text-brand-gray-400 text-center">
        All inquiries reviewed directly by technical leads. Non-disclosure agreements available upon request.
      </div>
    </form>
  );
}
