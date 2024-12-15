"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, AppWindow, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0.8%,transparent_50%)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl shadow-primary/10 ring-1 ring-primary/10 md:mr-28 lg:mr-0 xl:mr-16 xl:origin-center opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-24 flex flex-col items-center text-center min-h-[90vh] justify-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl"
        >

          <motion.div variants={itemVariants}>
            <span className="group inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 backdrop-blur-sm transition-all hover:ring-primary/40">
              <AppWindow className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:scale-110" />
              <span className="font-medium">App Development Studio</span>
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            </span>
          </motion.div>


          <motion.div variants={itemVariants} className="mt-8 md:mt-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Premium Apps for{' '}
              <span className="text-primary relative inline-flex flex-col">
                Your Daily Life
              </span>
            </h1>
          </motion.div>


          <motion.p 
            variants={itemVariants}
            className="mt-6 md:mt-8 text-base md:text-lg leading-7 md:leading-8 text-muted-foreground max-w-xl mx-auto"
          >
            Discover our collection of thoughtfully crafted iOS applications
            designed to enhance your everyday experience. From productivity to
            entertainment, find the perfect app for your needs.
          </motion.p>


          <motion.div 
            variants={itemVariants}
            className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
          >
            <Button 
              size="lg" 
              className="group w-full sm:w-auto h-12 px-8 rounded-full transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore Our Apps
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto h-12 px-8 rounded-full transition-all hover:scale-105 active:scale-95 hover:bg-primary/5"
            >
              View Features
            </Button>
          </motion.div>


          <motion.div 
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-2 border-primary/20 flex items-start justify-center p-1"
            >
              <motion.div className="w-1 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
