"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Apple } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden flex justify-center align-middle">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
      </div>

      <div className="container relative">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-primary/10">
  
          <div className="absolute inset-0 bg-background/50 backdrop-blur-2xl" />
          
          <div className="absolute -left-20 -top-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute right-1/4 top-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse delay-300" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative px-6 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
          >
            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Enhance Your Daily Life
                  <span className="text-primary block mt-1">With Our Apps</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                  Discover our collection of thoughtfully crafted iOS applications, 
                  designed to make your everyday experiences better and more enjoyable.
                </p>
              </div>

              <motion.ul 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 text-sm text-muted-foreground"
              >
                {[
                  "Beautiful & Intuitive Design",
                  "Regular Updates & New Features",
                  "Privacy-First Approach",
                  "Seamless iOS Integration"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </motion.ul>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              <Button
                size="lg"
                className="group relative h-14 px-8 rounded-xl transition-all hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/20"
              >
                <span className="relative flex items-center">
                  <Apple className="w-5 h-5 mr-2" />
                  Download Our Apps
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-xl border-primary/20 hover:bg-primary/5 transition-all hover:scale-105 backdrop-blur-sm"
              >
                Explore Features
              </Button>
            </div>
          </motion.div>

          <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 gap-4 pointer-events-none opacity-[0.02]">
            {Array(48).fill(0).map((_, i) => (
              <div key={i} className="h-full border-r border-t border-primary" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 