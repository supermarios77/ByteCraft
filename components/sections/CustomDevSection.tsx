"use client"

import { Button } from "@/components/ui/button"

interface CustomDevSectionProps {
  onStartProject?: () => void
  onViewPortfolio?: () => void
}

export default function CustomDevSection({ onStartProject, onViewPortfolio }: CustomDevSectionProps) {
  return (
    <section className="relative z-10 py-32 px-6 max-w-5xl mx-auto">
      <div className="relative bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-[3rem] border border-teal-500/20 p-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>

        <div className="relative text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            Need something custom?
          </h2>
          <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            We build bespoke mobile apps and SaaS products tailored to your specific needs. Let&apos;s bring your vision to
            life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onStartProject}
              className="bg-white text-black hover:bg-gray-100 font-semibold px-10 py-7 text-lg rounded-full transition-all duration-200 hover:scale-105"
            >
              Start a Project
            </Button>
            <Button
              onClick={onViewPortfolio}
              variant="outline"
              className="border-2 border-white/20 bg-transparent text-white hover:bg-white/10 font-semibold px-10 py-7 text-lg rounded-full transition-all duration-200"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
