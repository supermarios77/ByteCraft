"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Sparkles, Zap, Shield, Smartphone, Gem, Gauge, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useRef } from "react";

const features = [
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "iOS Native",
    description: "Built specifically for iOS with native performance and feel",
    badge: "Native",
    color: "#FF2D55",
    benefits: ["Native Performance", "iOS Design Guidelines", "System Integration"]
  },
  {
    icon: <Gauge className="w-10 h-10" />,
    title: "Lightning Fast",
    description: "Optimized for speed and responsiveness",
    badge: "Performance",
    color: "#32C759",
    benefits: ["Quick Launch", "Smooth Animations", "Efficient Processing"]
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Secure by Design",
    description: "Your data is protected with industry-standard security",
    badge: "Security",
    color: "#007AFF",
    benefits: ["End-to-End Encryption", "Secure Storage", "Privacy First"]
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Beautiful UI",
    description: "Thoughtfully designed interfaces that delight users",
    badge: "Design",
    color: "#AF52DE",
    benefits: ["Modern Interface", "Intuitive Layout", "Delightful Interactions"]
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Regular Updates",
    description: "Constant improvements and new features",
    badge: "Updates",
    color: "#FF9500",
    benefits: ["New Features", "Bug Fixes", "Performance Improvements"]
  },
  {
    icon: <Gem className="w-10 h-10" />,
    title: "Premium Quality",
    description: "Crafted with attention to every detail",
    badge: "Quality",
    color: "#5856D6",
    benefits: ["Attention to Detail", "Rigorous Testing", "Polished Experience"]
  }
];

export default function Features() {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section className="relative bg-black py-24 overflow-hidden" ref={containerRef}>
      {/* Parallax background effects */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#A642EE]/20 rounded-full blur-[128px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[128px]" 
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge
              variant="outline"
              className="mb-4 bg-black/50 backdrop-blur-sm border-purple-500/20 group hover:bg-purple-500/10 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Why Choose Our Apps
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Badge>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Crafted with
            <motion.span 
              className="bg-clip-text text-transparent bg-[linear-gradient(45deg,#A642EE,#BE75FF,#A642EE)] bg-size-200 animate-gradient inline-block"
              animate={isInView ? { scale: [1, 1.1, 1] } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {" "}Excellence
            </motion.span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our apps are built with the latest technologies and best practices,
            ensuring a premium experience for every user.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="relative hover:shadow-2xl transition-all duration-300 border-purple-500/20 bg-black/50 backdrop-blur-sm overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.color}15 0%, transparent 70%)`
                  }}
                />
                
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="transition-colors"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      style={{ color: feature.color }}
                    >
                      {feature.icon}
                    </motion.div>
                    <Badge
                      variant="outline"
                      className="backdrop-blur-sm transition-colors duration-300"
                      style={{
                        backgroundColor: `${feature.color}10`,
                        borderColor: `${feature.color}30`,
                        color: feature.color
                      }}
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors mb-4">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2 pt-4 border-t border-purple-500/10">
                    {feature.benefits.map((benefit, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.5 + index * 0.1 + idx * 0.1 }}
                      >
                        <CheckCircle2 
                          className="w-4 h-4 flex-shrink-0" 
                          style={{ color: feature.color }} 
                        />
                        {benefit}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-1 -right-1 w-12 h-12 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, transparent)`
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 