"use client"

interface Tech {
  name: string
  icon: string
}

const technologies: Tech[] = [
  { name: "Next.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Swift", icon: "🍎" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind", icon: "🎨" },
  { name: "AI/ML", icon: "🤖" },
]

export default function TechStackSection() {
  return (
    <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Built with modern tech</h2>
        <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">
          We use cutting-edge technologies to build fast, reliable, and scalable products.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:border-teal-500/40 hover:scale-105 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] text-center"
            style={{
              transitionDelay: `${index * 50}ms`,
            }}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
            <div className="text-sm font-semibold text-gray-300 group-hover:text-teal-400 transition-colors duration-300">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
