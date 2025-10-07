"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedSphere({
  position,
  scale,
  color,
}: { position: [number, number, number]; scale: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.4}
          emissive={color}
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />

        <AnimatedSphere position={[-4, 3, -2]} scale={1.8} color="#06b6d4" />
        <AnimatedSphere position={[4, -2, -3]} scale={1.4} color="#22d3ee" />
        <AnimatedSphere position={[0, -3, -1]} scale={1} color="#0891b2" />
        <AnimatedSphere position={[-3, -2, 1]} scale={1.2} color="#67e8f9" />
        <AnimatedSphere position={[3, 2, -1]} scale={0.9} color="#14b8a6" />
      </Canvas>
    </div>
  )
}

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState("")

  const [faqVisible, setFaqVisible] = useState(true)

  const faqs = [
    {
      question: "How do I get started with Icon Lab?",
      answer:
        "Simply visit iconlab.app, describe the icon you want to create, choose your preferred style, and our AI will generate professional app icons in seconds. No account required for your first try!",
      category: "products",
    },
    {
      question: "Is Tasbihly available on Android?",
      answer:
        "Currently, Tasbihly is only available on iOS. We're considering an Android version based on user demand. Join our newsletter to be notified when it launches!",
      category: "products",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 14-day money-back guarantee on all purchases. If you're not satisfied with your purchase, contact us within 14 days for a full refund, no questions asked.",
      category: "account",
    },
    {
      question: "How long does custom development take?",
      answer:
        "Project timelines vary based on complexity. Simple apps typically take 4-6 weeks, while more complex projects can take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
      category: "custom",
    },
    {
      question: "Do you offer student or nonprofit discounts?",
      answer:
        "Yes! We offer 30% off for students and nonprofits. Contact us with proof of eligibility (student ID or nonprofit documentation) to receive your discount code.",
      category: "account",
    },
    {
      question: "Can I request new features for your products?",
      answer:
        "We love hearing from users. Send us your feature requests via the contact form below or email us directly. We prioritize features based on user demand and feasibility.",
      category: "products",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, Amex), Apple Pay, and Google Pay. For custom development projects, we also accept bank transfers and can provide invoices.",
      category: "account",
    },
    {
      question: "How do I report a bug?",
      answer:
        "Please use the contact form below and select 'Technical Issues' as your category. Include as much detail as possible: what you were doing, what happened, and any error messages. Screenshots are super helpful!",
      category: "technical",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.')
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-black to-black pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] pointer-events-none"></div>

      <main className="relative px-6 pt-16 pb-12 max-w-6xl mx-auto">
        <HeroBackground />

        <div className="relative z-10">
          <div className="text-center mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <div className="inline-flex items-center bg-teal-500/10 border border-teal-500/20 rounded-full px-5 py-2 text-sm backdrop-blur-sm mb-6">
              <span className="inline-flex items-center justify-center w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-teal-300 font-medium">Response within 24 hours</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-4">
              How can we{" "}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                help?
              </span>
            </h1>
            <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">
              Search our FAQs or contact us directly
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12 opacity-0 animate-[fadeIn_1.2s_ease-out_0.2s_forwards]">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50 focus:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium text-lg"
              />
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>

      <section className="relative z-10 px-6 pb-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Column */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-black mb-3 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-gray-400 font-medium">
                {searchQuery
                  ? `Found ${filteredFaqs.length} result${filteredFaqs.length !== 1 ? "s" : ""}`
                  : "Quick answers to common questions"}
              </p>
            </div>

            <div className="space-y-3">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-teal-500/40"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <h3 className="text-base font-bold pr-6 group-hover:text-teal-400 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      >
                        <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 text-sm text-gray-400 font-medium leading-relaxed">{faq.answer}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <p className="text-lg font-medium">No results found for "{searchQuery}"</p>
                  <p className="text-sm mt-2">Try a different search term or contact us below</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Form Column */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="sticky top-8">
              <div className="relative bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl border border-teal-500/20 p-8 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>

                <div className="relative">
                  <div className="mb-8">
                    <h2 className="text-3xl font-black mb-3 tracking-tight">Contact Us</h2>
                    <p className="text-gray-300 font-medium">We'll respond within 24 hours</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Status Message */}
                    {submitMessage && (
                      <div className={`p-4 rounded-xl border ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/10 border-green-500/30 text-green-300' 
                          : 'bg-red-500/10 border-red-500/30 text-red-300'
                      }`}>
                        <div className="flex items-center">
                          <svg className={`w-5 h-5 mr-3 ${
                            submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            {submitStatus === 'success' ? (
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            ) : (
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            )}
                          </svg>
                          <span className="font-medium">{submitMessage}</span>
                        </div>
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50 focus:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50 focus:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What's this about?"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50 focus:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more..."
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50 focus:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium resize-none"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:opacity-90 font-semibold py-5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(20,184,166,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-white/10 text-center">
                    <p className="text-xs text-gray-400 font-medium mb-2">Or email us directly</p>
                    <a
                      href="mailto:contact@bytecraft.cc"
                      className="text-teal-400 hover:text-teal-300 font-semibold transition-colors duration-200"
                    >
                      contact@bytecraft.cc
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
