"use client"

import { useState, useEffect, useRef } from "react"

interface StatsSectionProps {
  isVisible: boolean
}

interface Stat {
  label: string
  count: number
  suffix: string
}

export default function StatsSection({ isVisible }: StatsSectionProps) {
  const [usersCount, setUsersCount] = useState(0)
  const [productsCount, setProductsCount] = useState(0)
  const [countriesCount, setCountriesCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const animateCount = (end: number, setter: (value: number) => void, duration = 2000) => {
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        setter(Math.floor(progress * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }

    animateCount(110, setUsersCount)
    animateCount(2, setProductsCount)
    animateCount(8, setCountriesCount)
  }, [isVisible])

  const stats: Stat[] = [
    { label: "Active Users", count: usersCount, suffix: "+" },
    { label: "Products Live", count: productsCount, suffix: "" },
    { label: "Countries", count: countriesCount, suffix: "+" },
  ]

  return (
    <section
      className={`relative z-10 py-20 px-6 max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              {stat.count.toLocaleString()}
              {stat.suffix}
            </div>
            <div className="text-sm md:text-base text-gray-400 font-semibold tracking-wide uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
