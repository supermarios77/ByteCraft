/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React from "react";
import Image from "next/image";

import image1 from "@/public/Tasbihly/1.png";
import image2 from "@/public/Tasbihly/2.png";
import image3 from "@/public/Tasbihly/3.png";

export function FeaturedApps() {
  return (
    <section className="w-full py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-32 relative">
          <div className="inline-block">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                Latest App
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-foreground">
              Tasbihly
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-12 max-w-6xl w-full place-items-center">
          <FeatureSection
            image={image1}
            title="Effortless Counting"
            description="Count dhikr with ease, anywhere, anytime."
          />
          <FeatureSection
            image={image2}
            title="Choose Your Dhikr"
            description="Effortlessly switch between dhikr as you continue your prayers."
          />
          <FeatureSection
            image={image3}
            title="Customize Your Experience"
            description="Enable sound or set a target to match your preferences."
          />
        </div>

        <div className="mt-32 text-center">
          <a
            href="https://apps.apple.com/app/tasbihly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 
                     bg-primary text-primary-foreground
                     rounded-full font-medium text-sm tracking-wide
                     transition-all hover:scale-105 active:scale-95 hover:bg-primary/90"
          >
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
}

interface FeatureSectionProps {
  image: any;
  title: string;
  description: string;
}

function FeatureSection({ image, title, description }: FeatureSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center group w-full max-w-sm">
      <div
        className="relative w-[260px] h-[540px] mb-12
                    rounded-[3rem] overflow-hidden
                    shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)]
                    dark:shadow-[0_32px_64px_-12px_rgba(255,255,255,0.05)]
                    transition-all duration-500 ease-out
                    group-hover:translate-y-[-8px]
                    group-hover:shadow-[0_40px_80px_-12px_rgba(0,0,0,0.18)]
                    dark:group-hover:shadow-[0_40px_80px_-12px_rgba(255,255,255,0.07)]"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      <div className="space-y-2.5 max-w-[260px]">
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
