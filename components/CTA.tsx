"use client";

import { Button } from "./ui/button";
import { Download, Star, Apple, Rocket, Zap, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import Spline from '@splinetool/react-spline/next';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const glowVariants = {
  initial: { opacity: 0.5, scale: 0.8 },
  animate: {
    opacity: [0.4, 0.6, 0.4],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function CTA() {
  return (
    <section className="relative min-h-[600px] bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-[#A642EE]/30 rounded-full blur-[128px]" 
        />
        <motion.div 
          variants={glowVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-[-10%] right-[-20%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[128px]" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-10 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]"
      >
        <Spline 
          scene="https://prod.spline.design/qfWGv-lGixvzqotE/scene.splinecode"
        />
      </motion.div>

      <AnimatePresence>
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 flex flex-col items-center justify-center min-h-[600px] px-6 text-center"
        >
          <motion.div variants={item} className="relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-xl animate-pulse" />
            <Badge
              variant="outline"
              className="relative mb-6 bg-black/50 backdrop-blur-sm border-purple-500/20 group hover:bg-purple-500/10 transition-colors"
            >
              <Rocket className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform" />
              Just Launched
            </Badge>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-1 mb-4 hover:gap-2 transition-all p-2"
            variants={item}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 180 }}
                whileTap={{ scale: 0.9, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
              >
                <Star className="text-yellow-400 w-5 h-5 fill-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="relative">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-transparent blur-xl"
              animate={{
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-2xl">
              Discover Apps That
              <motion.span 
                className="block mt-2 bg-clip-text text-transparent bg-[linear-gradient(45deg,#A642EE,#BE75FF,#A642EE)] bg-size-200 animate-gradient"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Enhance Your Daily Life
              </motion.span>
            </h2>

            <p className="relative text-lg text-muted-foreground max-w-xl mb-8">
              Thoughtfully crafted iOS applications that focus on great user experience. 
              Join our growing community of satisfied users.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={item}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000" />
              <Button
                size="lg"
                className="relative bg-[linear-gradient(45deg,#A642EE,#BE75FF)] hover:opacity-90 transition-all group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                <Apple className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get Latest App
                <Zap className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/20 hover:bg-purple-500/10 backdrop-blur-sm transition-all group"
              >
                Browse Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground"
            variants={item}
          >
            {[
              { icon: <Download className="w-4 h-4 mr-1" />, text: "Easy Installation" },
              { text: "Regular Updates" },
              { text: "24/7 Support" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative flex items-center">
                  {feature.icon}
                  {feature.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
    </section>
  );
} 