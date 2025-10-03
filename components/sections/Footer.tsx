"use client"

interface FooterProps {
  onLinkClick?: (link: string) => void
}

export default function Footer({ onLinkClick }: FooterProps) {
  const links = [
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative z-10 border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex items-center space-x-3 mb-8 md:mb-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center font-black text-xl">
              B
            </div>
            <span className="text-xl font-bold">Bytecraft</span>
          </div>

          <div className="flex items-center space-x-10 text-sm text-gray-400">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  onLinkClick?.(link.href)
                }}
                className="hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Bytecraft. All rights reserved. Crafting digital experiences with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
