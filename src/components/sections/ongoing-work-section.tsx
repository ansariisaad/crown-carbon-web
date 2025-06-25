"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Mining Equipment Brushes",
    description:
      "Developing specialized carbon brushes for extreme conditions in collaboration with leading mining equipment manufacturers.",
    image: "/assets/carbon_image/product-2.jpeg",
  },
  {
    title: "Advanced Generator Brushes",
    description:
      "Working with power generation companies to develop carbon brushes with improved conductivity and reduced wear.",
    image: "/assets/carbon_image/product-3.jpeg",
  },
];

export function OngoingWorkSection() {
  return (
    <section id="ongoing-work" className="py-20 bg-white">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Current Projects
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Our latest development initiatives
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <Link
                  href="#contact"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700"
                >
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
