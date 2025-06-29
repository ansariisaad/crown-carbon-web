"use client";

import Image from "next/image";
import { Crown } from "lucide-react";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button"

import { Button } from "../ui/button";

// const heroImages = [

// ]

const heroImages: any = [
  "/assets/carbon_image/carbonheader.jpeg",
  "/assets/carbon_image/carbon2.jpeg",
  "/assets/carbon_image/carbon3.jpeg",
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      {/* this is the ocmment */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative h-[600px] overflow-hidden">
        {heroImages.length > 0 &&
          heroImages.map((image: any, index: any) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Manufacturing facility ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
      </div>
      <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
        <div className="flex items-center justify-center mb-4">
          <Crown className="h-16 w-16 text-blue-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Crown Carbon Brush
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-2xl">
          Premium carbon brush solutions for industrial applications
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl italic">
          "We care for your armatures, fulfilling the highest quality standards"
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
            Our Solutions
          </Button>
          <Button
            variant="outline"
            className="border-white bg-slate-600 text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {heroImages.length > 0 &&
          heroImages.map((_: any, index: any) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-blue-500" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
      </div>
    </section>
  );
}
