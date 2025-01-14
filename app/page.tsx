"use client";
import AppShowcase from "@/components/AppShowcase";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import siteConfig from "@/lib/metadata";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <AppShowcase />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
