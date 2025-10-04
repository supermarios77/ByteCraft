"use client"

import { useMultipleIntersectionObserver } from "@/hooks/useIntersectionObserver"
import HeroSection from "@/components/sections/HeroSection"
import StatsSection from "@/components/sections/StatsSection"
import ProductsSection from "@/components/sections/ProductsSection"
import TechStackSection from "@/components/sections/TechStackSection"
import CustomDevSection from "@/components/sections/CustomDevSection"
import MissionSection from "@/components/sections/MissionSection"

export default function BytecraftHome() {
  const sectionCount = 5 // stats, products, techStack, customDev, mission
  const { setRef, visibleSections } = useMultipleIntersectionObserver(sectionCount)

  const handleExploreProducts = () => {
    // Scroll to products section or handle navigation
    console.log("Explore products clicked")
  }

  const handleCustomDevelopment = () => {
    // Scroll to custom dev section or handle navigation
    console.log("Custom development clicked")
  }

  const handleProductClick = (productId: string) => {
    console.log("Product clicked:", productId)
  }

  const handleStartProject = () => {
    console.log("Start project clicked")
  }

  const handleViewPortfolio = () => {
    console.log("View portfolio clicked")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-black to-black pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] pointer-events-none"></div>

      <HeroSection 
        onExploreProducts={handleExploreProducts}
        onCustomDevelopment={handleCustomDevelopment}
      />

      <div ref={setRef(0)}>
        <StatsSection isVisible={visibleSections[0]} />
      </div>

      <div ref={setRef(1)}>
        <ProductsSection 
          isVisible={visibleSections[1]} 
          onProductClick={handleProductClick}
        />
      </div>

      <div ref={setRef(2)}>
        <TechStackSection isVisible={visibleSections[2]} />
      </div>

      <div ref={setRef(3)}>
        <CustomDevSection 
          isVisible={visibleSections[3]}
          onStartProject={handleStartProject}
          onViewPortfolio={handleViewPortfolio}
        />
      </div>

      <div ref={setRef(4)}>
        <MissionSection isVisible={visibleSections[4]} />
      </div>

    </div>
  )
}