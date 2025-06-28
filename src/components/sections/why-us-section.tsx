"use client";

import { Award, Truck, PenToolIcon as Tool, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "20 Years Experience",
    description: "Two decades of manufacturing excellence",
  },
  {
    icon: Truck,
    title: "Pan India Service",
    description: "Serving clients across all of India",
  },
  {
    icon: Tool,
    title: "Custom Solutions",
    description: "Tailored to your specific requirements",
  },
  {
    icon: Clock,
    title: "Quality Materials",
    description: "Only the highest grade components",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white ">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16 ">
          <h2 className="text-3xl font-bold">Why Choose Crown Carbon Brush</h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Protecting your armatures with quality that exceeds expectations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 mx-10 md:mx-0 rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 ">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
