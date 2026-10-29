import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aravantatech.com";
  const now = new Date();

  const routes = [
    "",
    "/services",
    "/services/cloud-solutions",
    "/services/digital-transformation",
    "/services/application-development",
    "/services/it-infrastructure",
    "/services/devops-automation",
    "/services/cybersecurity",
    "/services/it-consulting",
    "/cloudos",
    "/solutions",
    "/case-studies",
    "/careers",
    "/about",
    "/technology",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/security",
    "/sla",
    "/cookies",
    "/compliance",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/cloudos" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") || route === "/cloudos" ? 0.8 : 0.6,
  }));
}
