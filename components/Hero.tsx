import React from "react";
import Spline from "@splinetool/react-spline";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-[#A642EE]/30 rounded-full blur-[128px] animate-blob" />
        <div className="absolute top-[-15%] right-[-20%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#BE75FF]/20 rounded-full blur-[128px] animate-blob animation-delay-4000" />
      </div>

      <div className="absolute inset-0 z-10 opacity-75">
        <Spline scene="https://prod.spline.design/X64iImK3XYtXd7p7/scene.splinecode" />
      </div>

      <div className="relative z-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-8 bg-black/50 backdrop-blur-sm border-purple-500/20"
            >
              Featured on App Store
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
              Mobile Apps that{" "}
              <span className="text-primary bg-clip-text text-transparent bg-[linear-gradient(45deg,#A642EE,#BE75FF,#A642EE)] bg-size-200 animate-gradient">
                matter
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              We create and publish innovative iOS applications that users love.
              From concept to App Store success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-[linear-gradient(45deg,#A642EE,#BE75FF)] hover:opacity-90 transition-opacity"
              >
                View Our Apps
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/20 hover:bg-purple-500/10 backdrop-blur-sm"
              >
                Download Latest
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
