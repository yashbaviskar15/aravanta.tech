import React from "react";
import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { servicesData } from "@/lib/content/servicesData";

export const metadata: Metadata = {
  title: "IT Infrastructure | Architecture, IaC & Observability",
  description:
    "Reliable, automated computing infrastructure, telemetry, and verified disaster recovery by ARAVANTA TECH.",
};

export default function ITInfrastructurePage() {
  const service = servicesData["it-infrastructure"];
  return <ServiceDetailTemplate service={service} />;
}
