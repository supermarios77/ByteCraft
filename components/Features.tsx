"use client";

import { motion } from "framer-motion";
import { Shield, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our apps are optimized for performance, ensuring a smooth experience.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Your privacy and security are our top priorities.",
  },
  {
    icon: Smartphone,
    title: "Native Experience",
    description: "Built specifically for iOS, following Apple's design guidelines.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-background flex items-center justify-center">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Choose ByteCraft Apps?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We build apps with attention to detail and user experience in mind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl w-full place-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-6 p-6 w-full max-w-sm"
            >
              <div className="p-5 bg-primary/10 rounded-full">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground max-w-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 