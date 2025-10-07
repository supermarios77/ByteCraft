"use client"

interface Stat {
  label: string
  count: number
  suffix: string
}

export default function StatsSection() {
  const stats: Stat[] = [
    { label: "Active Users", count: 110, suffix: "+" },
    { label: "Products Live", count: 2, suffix: "" },
    { label: "Countries", count: 8, suffix: "+" },
  ]

  return (
    <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
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
