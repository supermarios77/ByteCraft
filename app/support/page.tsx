"use client"

import { ContactForm } from '@/components/ContactForm'
import Spline from "@splinetool/react-spline";
import { Badge } from "@/components/ui/badge";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black relative">

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-[#A642EE]/30 rounded-full blur-[128px] animate-blob"
        />
        <div 
          className="absolute bottom-[-15%] right-[-20%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[128px] animate-blob animation-delay-2000"
        />
        <div 
          className="absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-[#BE75FF]/20 rounded-full blur-[128px] animate-blob animation-delay-4000"
        />
      </div>

      <div className="absolute inset-0 z-10 opacity-75 pointer-events-none">
        <Spline scene="https://prod.spline.design/GQm9wrw1WqRNgBmu/scene.splinecode" />
      </div>

      <div className="relative z-20 container mx-auto px-4 py-24 min-h-screen flex flex-col lg:flex-row items-center gap-16">

        <div className="w-full lg:w-1/2 space-y-6 mt-10">
          <Badge variant="outline" className="bg-black/50 backdrop-blur-sm border-purple-500/20">
            24/7 Support
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
            Need 
            <span className="block text-transparent bg-clip-text bg-[linear-gradient(45deg,#A642EE,#BE75FF,#A642EE)] bg-size-200 animate-gradient">
              Assistance?
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl">
            Our dedicated support team is here to help you with any questions or concerns. 
            We typically respond within 24 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                <span className="text-[#A642EE] text-xl">📱</span>
              </div>
              <h3 className="font-semibold mb-1">App Support</h3>
              <p className="text-sm text-muted-foreground">Technical issues & bug reports</p>
            </div>

            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                <span className="text-[#A642EE] text-xl">💡</span>
              </div>
              <h3 className="font-semibold mb-1">Feature Requests</h3>
              <p className="text-sm text-muted-foreground">Suggest new features</p>
            </div>

            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                <span className="text-[#A642EE] text-xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-1">Business Inquiries</h3>
              <p className="text-sm text-muted-foreground">Partnerships & collaboration</p>
            </div>

            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                <span className="text-[#9531dd] text-xl">📨</span>
              </div>
              <h3 className="font-semibold mb-1">General Contact</h3>
              <p className="text-sm text-muted-foreground">Questions & feedback</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="backdrop-blur-md bg-black/40 p-8 rounded-2xl border border-purple-500/10">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
    </div>
  )
}

