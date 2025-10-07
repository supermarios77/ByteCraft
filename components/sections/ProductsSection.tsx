"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Product {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  gradient: string
  status: string
  cta: string
  link: string
  features: string[]
  screenshot: string
}

interface ProductsSectionProps {
  onProductClick?: (productId: string) => void
}

const products: Product[] = [
  {
    id: "tasbihly",
    name: "Tasbihly",
    tagline: "Digital tasbih for modern Muslims",
    description: "Beautiful, minimalist counter app for dhikr and daily remembrance. Available on iOS.",
    icon: "/islamic-prayer-beads-tasbih-app-icon-minimalist-te.jpg",
    gradient: "from-teal-500 to-cyan-600",
    status: "Available on iOS",
    cta: "Download App",
    link: "#",
    features: ["Elegant design", "Haptic feedback", "Progress tracking", "Multiple counters"],
    screenshot: "/ios-app-screenshot-tasbih-counter-interface-dark-t.jpg",
  },
  {
    id: "iconlab",
    name: "Icon Lab",
    tagline: "AI-powered app icon generator",
    description: "Create professional app icons in seconds with AI. No designer needed, just describe your vision.",
    icon: "/ai-laboratory-flask-icon-generator-purple-gradient.jpg",
    gradient: "from-purple-500 to-pink-600",
    status: "Launching Aug 18",
    cta: "Join Waitlist",
    link: "#",
    features: ["AI-powered", "Instant generation", "Multiple styles", "High resolution"],
    screenshot: "/web-app-interface-ai-icon-generator-dashboard-purp.jpg",
  },
]

export default function ProductsSection({ onProductClick }: ProductsSectionProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[0.9]">Our Products</h2>
        <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
          Two products live, more in development. Each one built to solve a real need.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 p-10 transition-all duration-500 hover:border-teal-500/40 hover:shadow-[0_0_50px_rgba(20,184,166,0.15)] hover:scale-[1.02] overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500`}
            ></div>
            <div
              className={`absolute -inset-[100%] bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700`}
            ></div>

            <div className="relative">
              <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 bg-white/5 group-hover:border-teal-500/30 transition-all duration-300">
                <img
                  src={product.screenshot || "/placeholder.svg"}
                  alt={`${product.name} screenshot`}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/10 overflow-hidden p-2">
                  <img
                    src={product.icon || "/placeholder.svg"}
                    alt={`${product.name} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="inline-flex items-center bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 text-xs font-semibold text-teal-300 backdrop-blur-sm">
                  <span className="inline-flex items-center justify-center w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
                  {product.status}
                </div>
              </div>

              <h3 className="text-4xl font-black mb-3 tracking-tight group-hover:text-teal-400 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-xl text-teal-400 font-semibold mb-4">{product.tagline}</p>
              <p className="text-gray-400 font-medium leading-relaxed mb-8 text-[15px]">{product.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5 mr-1.5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>

              <Button
                onClick={() => onProductClick?.(product.id)}
                className={`w-full bg-gradient-to-r ${product.gradient} text-white hover:opacity-90 font-semibold py-7 rounded-2xl transition-all duration-300 group-hover:shadow-[0_20px_60px_rgba(20,184,166,0.4)] group-hover:scale-[1.02]`}
              >
                {product.cta}
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
