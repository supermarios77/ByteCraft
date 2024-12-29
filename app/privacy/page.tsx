"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Server, Bell, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Information Collection",
    content: "We collect minimal personal information necessary to provide our services. This includes device information and usage statistics to improve app performance.",
    color: "#FF2D55"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Data Security",
    content: "Your data is protected using industry-standard encryption protocols. We regularly audit our systems to ensure maximum security.",
    color: "#32C759"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Data Storage",
    content: "All data is stored securely on servers located in the EU, complying with GDPR and other relevant data protection regulations.",
    color: "#007AFF"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Data Sharing",
    content: "We never sell your personal data. Any sharing is strictly limited to what's necessary for app functionality.",
    color: "#AF52DE"
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Communications",
    content: "You can control how we communicate with you. Opt out of non-essential communications at any time.",
    color: "#FF9500"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Data Retention",
    content: "Your data is retained only as long as necessary. You can request deletion of your data at any time.",
    color: "#5856D6"
  }
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black mt-10">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#A642EE]/20 rounded-full blur-[128px] animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="mb-6 bg-black/50 backdrop-blur-sm border-purple-500/20"
            >
              <Shield className="w-4 h-4 mr-2" />
              Privacy First
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Privacy Matters
              <span className="block mt-2 bg-clip-text text-transparent bg-[linear-gradient(45deg,#A642EE,#BE75FF,#A642EE)] bg-size-200 animate-gradient">
                We Keep Your Data Safe
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in complete transparency about how we handle your data. 
              Our privacy policy is designed to be clear and easy to understand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="p-6 bg-black/50 backdrop-blur-sm border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all group h-full flex flex-col">
                  <div className="flex items-start gap-4 h-full">
                    <div 
                      className="p-2 rounded-lg transition-colors shrink-0"
                      style={{ color: section.color, backgroundColor: `${section.color}10` }}
                    >
                      {section.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 p-6 rounded-lg border border-purple-500/20 bg-black/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-semibold">Last Updated</h2>
            </div>
            <p className="text-muted-foreground">
              This privacy policy was last updated on {new Date().toLocaleDateString()}. 
              We regularly review and update our privacy practices to ensure they align with current regulations and best practices.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            For any privacy-related questions, please contact us at{" "}
            <a href="mailto:privacy@bytecraft.cc" className="text-purple-400 hover:text-purple-300 transition-colors">
              privacy@bytecraft.cc
            </a>
          </motion.p>
        </div>
      </div>
    </div>
  );
} 