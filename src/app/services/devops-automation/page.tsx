import React from "react";
import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { servicesData } from "@/lib/content/servicesData";

export const metadata: Metadata = {
  title: "DevOps & Automation | CI/CD Pipelines & Containerization",
  description:
    "Zero-downtime CI/CD pipelines, Docker containerization, Kubernetes orchestration, and GitOps governance by ARAVANTA TECH.",
};

export default function DevOpsAutomationPage() {
  const service = servicesData["devops-automation"];
  return <ServiceDetailTemplate service={service} />;
}
