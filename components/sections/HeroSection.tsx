"use client"

import { Button } from "@/components/ui/button"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

function AnimatedSphere({
  position,
  scale,
  color,
}: { position: [number, number, number]; scale: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.6}
          emissive={color}
          emissiveIntensity={1.2}
        />
      </mesh>
    </Float>
  )
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Environment preset="night" />

        <AnimatedSphere position={[-3, 2, 0]} scale={1.5} color="#14b8a6" />
        <AnimatedSphere position={[3, -1, -2]} scale={1.2} color="#06b6d4" />
        <AnimatedSphere position={[0, -2, -1]} scale={0.8} color="#0891b2" />
        <AnimatedSphere position={[-2, -1, 1]} scale={1} color="#22d3ee" />
      </Canvas>
    </div>
  )
}

interface HeroSectionProps {
  onExploreProducts?: () => void
  onCustomDevelopment?: () => void
}

export default function HeroSection({ onExploreProducts, onCustomDevelopment }: HeroSectionProps) {
  return (
    <main className="relative px-6 pt-32 pb-24 max-w-6xl mx-auto text-center">
      <HeroBackground />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <div className="inline-flex items-center bg-teal-500/10 border border-teal-500/20 rounded-full px-6 py-3 text-sm backdrop-blur-sm">
            <span className="inline-flex items-center justify-center w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-teal-300 font-medium">Indie studio • 2 products shipped • More coming soon</span>
          </div>
        </div>

        <div className="mb-12 opacity-0 animate-[fadeIn_1.2s_ease-out_0.2s_forwards]">
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black leading-[0.85] tracking-[-0.03em] mb-8">
            Small studio,
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
              big ideas
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
            Building apps and tools that solve real problems. Started as a solo project, growing one product at a
            time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
          <Button 
            onClick={onExploreProducts}
            className="bg-white text-black hover:bg-gray-100 font-semibold px-10 py-7 text-lg rounded-full transition-all duration-200 hover:scale-105"
          >
            Explore Products
          </Button>
          <Button
            onClick={onCustomDevelopment}
            variant="outline"
            className="border-2 border-white/20 bg-transparent text-white hover:bg-white/10 font-semibold px-10 py-7 text-lg rounded-full transition-all duration-200"
          >
            Custom Development
          </Button>
        </div>
      </div>
    </main>
  )
}
