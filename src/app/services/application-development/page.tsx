import React from "react";
import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { servicesData } from "@/lib/content/servicesData";

export const metadata: Metadata = {
  title: "Application Development | Web, APIs & Full-Stack Systems",
  description:
    "Modern frontend engineering, resilient distributed APIs, and scalable full-stack web applications by ARAVANTA TECH.",
};

export default function ApplicationDevelopmentPage() {
  const service = servicesData["application-development"];
  return <ServiceDetailTemplate service={service} />;
}
