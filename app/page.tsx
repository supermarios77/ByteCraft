<<<<<<< HEAD
import { Suspense } from 'react';
import JsonLd from "@/components/JsonLd";
import siteConfig from "@/lib/metadata";
import { Organization, WithContext } from "schema-dts";
import dynamic from 'next/dynamic';
import Loading from "@/components/Loading";
=======
"use client";

import AppShowcase from "@/components/AppShowcase";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
>>>>>>> parent of 259ab60 (⚡️ Fix: Fix Build Errors)
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import siteConfig from "@/lib/metadata";

// Dynamically import client components
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <Loading />
});
const AppShowcase = dynamic(() => import("@/components/AppShowcase"), {
  loading: () => <Loading />
});
const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <Loading />
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <Loading />
});

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: []
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AppShowcase />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Features />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <CTA />
      </Suspense>
      <Footer />
    </>
  );
}