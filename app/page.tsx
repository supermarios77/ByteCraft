"use client";

import Spline from "@splinetool/react-spline";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import image1 from "@/public/Tasbihly/1.png";
import image2 from "@/public/Tasbihly/2.png";
import image3 from "@/public/Tasbihly/3.png";

export default function Home() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-black">

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-[#A642EE]/30 rounded-full blur-[128px] animate-blob"
          />
          <div 
            className="absolute top-[-15%] right-[-20%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[128px] animate-blob animation-delay-2000"
          />
          <div 
            className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#BE75FF]/20 rounded-full blur-[128px] animate-blob animation-delay-4000"
          />
        </div>

        <div className="absolute inset-0 z-10 opacity-75">
          <Spline scene="https://prod.spline.design/X64iImK3XYtXd7p7/scene.splinecode" />
        </div>
        
        <div className="relative z-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <Badge variant="outline" className="mb-8 bg-black/50 backdrop-blur-sm border-purple-500/20">
                Featured on App Store
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
                Mobile Apps that{' '}
                <span className="text-primary bg-clip-text text-transparent bg-[linear-gradient(45deg,#A642EE,#BE75FF,#A642EE)] bg-size-200 animate-gradient">
                  matter
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                We create and publish innovative iOS applications 
                that users love. From concept to App Store success.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="bg-[linear-gradient(45deg,#A642EE,#BE75FF)] hover:opacity-90 transition-opacity">
                  View Our Apps
                </Button>
                <Button variant="outline" size="lg" className="border-purple-500/20 hover:bg-purple-500/10 backdrop-blur-sm">
                  Download Latest
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      </section>

      {/* App Showcase Section */}
      <section className="relative bg-black">

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div 
            className="absolute top-1/4 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#A642EE]/20 rounded-full blur-[128px] animate-blob"
          />
          <div 
            className="absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#BE75FF]/20 rounded-full blur-[128px] animate-blob animation-delay-2000"
          />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">

            <div className="relative">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

                <div className="w-full lg:w-1/2">
                  <div className="relative max-w-[300px] mx-auto">

                    <div className="relative aspect-[1170/2532] rounded-[3rem] overflow-hidden bg-black border-8 border-[#1F1F1F] shadow-2xl">

                      <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                        <Image
                          src={image1}
                          alt="Tasbihly Main Screenshot"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>

                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-[1.25rem] z-10" />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-6">
                    <Badge variant="outline" className="bg-black/50 backdrop-blur-sm border-purple-500/20">
                      Latest Release
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                      Tasbihly
                      <span className="block text-xl sm:text-2xl lg:text-3xl mt-2 bg-clip-text text-transparent bg-[linear-gradient(45deg,#A642EE,#BE75FF)] font-normal">
                        Your Digital Dhikr Companion
                      </span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Track your daily dhikr with ease. Beautiful interface, customizable counters, 
                      and a peaceful experience to enhance your spiritual journey.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                        <span className="text-[#A642EE] text-lg">✨</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Beautiful Design</h3>
                        <p className="text-sm text-muted-foreground">Elegant and intuitive interface</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                        <span className="text-[#A642EE] text-lg">🎯</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Custom Counters</h3>
                        <p className="text-sm text-muted-foreground">Create your own dhikr counters</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                        <span className="text-[#A642EE] text-lg">🌙</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Dark Mode</h3>
                        <p className="text-sm text-muted-foreground">Comfortable night-time usage</p>
                      </div>
                    </div>
                  </div>


                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      size="lg" 
                      className="bg-[linear-gradient(45deg,#A642EE,#BE75FF)] hover:opacity-90 transition-opacity w-full sm:w-auto"
                    >
                      Download Now
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-purple-500/20 hover:bg-purple-500/10 w-full sm:w-auto"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-16 lg:mt-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {[image1, image2, image3].map((image, num) => (
                    <div 
                      key={num}
                      className="relative transform hover:scale-105 transition-transform"
                    >
                      <div className="relative aspect-[1170/2532] rounded-[2rem] overflow-hidden bg-black border-4 shadow-xl">
                        <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
                          <Image
                            src={image}
                            alt={`Tasbihly Screenshot ${num + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] sm:w-[90px] h-[18px] sm:h-[25px] bg-black rounded-b-[1rem] z-10" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
    </>
  );
}