import { Suspense } from 'react';
import JsonLd from "@/components/JsonLd";
import siteConfig from "@/lib/metadata";
import { Organization, WithContext } from "schema-dts";
import dynamic from 'next/dynamic';
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";

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
    </main>
  );
}