"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

function FloatingParticles() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#14b8a6" : "#06b6d4"}
            emissive={i % 2 === 0 ? "#14b8a6" : "#06b6d4"}
            emissiveIntensity={0.3}
            opacity={0.6}
            transparent
          />
        </mesh>
      ))}
    </>
  )
}

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5, rootMargin: "-100px 0px -50% 0px" },
    )

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "data-collection", title: "Data We Collect" },
    { id: "data-usage", title: "How We Use Your Data" },
    { id: "data-sharing", title: "Data Sharing" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "user-rights", title: "Your Rights" },
    { id: "security", title: "Data Security" },
    { id: "children", title: "Children's Privacy" },
    { id: "changes", title: "Policy Changes" },
    { id: "contact", title: "Contact Us" },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <FloatingParticles />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>

      {/* Header */}
      <header className="backdrop-blur-sm bg-black sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-sm text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">Last updated: March 10, 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-24">
        <div className="max-w-7xl mx-auto flex gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                On This Page
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block text-sm py-1 transition-colors ${
                      activeSection === section.id
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 max-w-3xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <section
                id="introduction"
                ref={(el) => {
                  sectionsRef.current["introduction"] = el
                }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Bytecraft, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you use our products and services, including Icon Lab
                  and Tasbihly.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  By using our services, you agree to the collection and use of information in accordance with this
                  policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </section>

              <section
                id="data-collection"
                ref={(el) => {
                  sectionsRef.current["data-collection"] = el
                }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Data We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect several types of information to provide and improve our services:
                </p>
                <div className="space-y-4">
                  <div className="bg-black backdrop-blur-sm border border-border/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Email address, name, and account credentials when you create an account or contact us for support.
                    </p>
                  </div>
                  <div className="bg-black backdrop-blur-sm border border-border/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Information about how you interact with our services, including pages visited, features used, and
                      time spent on our platforms.
                    </p>
                  </div>
                  <div className="bg-black backdrop-blur-sm border border-border/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Device Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Device type, operating system, browser type, IP address, and unique device identifiers.
                    </p>
                  </div>
                </div>
              </section>

              <section
                id="data-usage"
                ref={(el) => {
                  sectionsRef.current["data-usage"] = el
                }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">How We Use Your Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the collected data for various purposes:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>To provide, maintain, and improve our services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>To notify you about changes to our services or new features</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>To provide customer support and respond to your requests</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>To monitor usage patterns and detect technical issues</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>To send you marketing communications (with your consent)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>To prevent fraud and enhance security</span>
                  </li>
                </ul>
              </section>

              <section
                id="data-sharing"
                ref={(el) => {
                  sectionsRef.current["data-sharing"] = el
                }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your data only in the following circumstances:
                </p>
                <div className="bg-black backdrop-blur-sm border border-border/50 rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Service Providers</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We work with third-party companies to provide hosting, analytics, and payment processing services.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Legal Requirements</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We may disclose your information if required by law or to protect our rights and safety.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Transfers</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new
                      entity.
                    </p>
                  </div>
                </div>
              </section>

              <section
                id="cookies"
                ref={(el) => {
                  sectionsRef.current["cookies"] = el
                }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Cookies & Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our services and store certain
                  information. Cookies are files with small amounts of data that are sent to your browser from a website
                  and stored on your device.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  However, if you do not accept cookies, you may not be able to use some portions of our services.
                </p>
              </section>

              <section
                id="user-rights"
                ref={(el) => {
                  sectionsRef.current["user-rights"] = el
                }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <div className="grid gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Access</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Request a copy of the personal data we hold about you
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Correction</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Request correction of inaccurate or incomplete data
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Deletion</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Request deletion of your personal data
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Portability</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Request transfer of your data to another service
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Opt-out</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Opt-out of marketing communications at any time
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="security"
                ref={(el) => {
                  sectionsRef.current["security"] = el
                }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal data
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                  strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute
                  security.
                </p>
              </section>

              <section
                id="children"
                ref={(el) => {
                  sectionsRef.current["children"] = el
                }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and believe your child has
                  provided us with personal data, please contact us so we can delete it.
                </p>
              </section>

              <section
                id="changes"
                ref={(el) => {
                  sectionsRef.current["changes"] = el
                }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                  Policy are effective when they are posted on this page.
                </p>
              </section>

              <section
                id="contact"
                ref={(el) => {
                  sectionsRef.current["contact"] = el
                }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-black backdrop-blur-sm border border-border/50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-muted-foreground">Email:</span>
                      <p className="font-medium text-white">contact@bytecraft.cc</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Support:</span>
                      <p className="font-medium text-white">
                        <Link href="/support" className="hover:underline">
                          Visit our Support Page
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
