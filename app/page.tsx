"use client";

import JsonLd from "@/components/JsonLd";
import siteConfig from "@/lib/metadata";
import { Organization, WithContext } from "schema-dts";
import Hero from "@/components/Hero";
import AppShowcase from "@/components/AppShowcase";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`
    },
    description: siteConfig.description,
    sameAs: []
  };

  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={jsonLd} />
      <Hero />
      <AppShowcase />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}