"use client";

import AppShowcase from "@/components/AppShowcase";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>  
      <Hero />
      <AppShowcase />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}