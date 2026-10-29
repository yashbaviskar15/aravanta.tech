import React from "react";
import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { servicesData } from "@/lib/content/servicesData";

export const metadata: Metadata = {
  title: "Cybersecurity | Architecture, Zero-Trust IAM & DevSecOps",
  description:
    "Security-conscious application architecture, zero-trust IAM, dependency scanning, and threat modeling by ARAVANTA TECH.",
};

export default function CybersecurityPage() {
  const service = servicesData["cybersecurity"];
  return <ServiceDetailTemplate service={service} />;
}
