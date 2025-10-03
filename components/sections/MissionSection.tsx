"use client"

interface MissionSectionProps {
  isVisible: boolean
}

export default function MissionSection({ isVisible }: MissionSectionProps) {
  return (
    <section
      className={`relative z-10 py-32 px-6 max-w-4xl mx-auto text-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-tight">
          Quality over quantity, always
        </h2>
        <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
          Bytecraft started as a solo project to build tools I wished existed. Every product is crafted with attention
          to detail, tested thoroughly, and designed to actually solve problems. No fluff, no shortcuts—just honest
          work.
        </p>
      </div>
    </section>
  )
}
