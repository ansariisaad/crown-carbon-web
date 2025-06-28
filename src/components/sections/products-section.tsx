"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

const products = [
  {
    title: "Industrial Carbon Brushes",
    description:
      "Heavy-duty carbon brushes for industrial motors and generators",
    image: "/assets/carbon_image/carbon2.jpeg",
  },
  {
    title: "Power Tool Carbon Brushes",
    description: "Specialized brushes for power tools and equipment",
    image: "/assets/carbon_image/product-2.jpeg",
  },
  {
    title: "Custom Carbon Solutions",
    description: "Tailored carbon brush solutions for specific requirements",
    image: "/assets/carbon_image/product-3.jpeg",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Our Products
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            We manufacture high-quality carbon brushes for various industrial
            applications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {product.title}
                </h3>
                <p className="text-slate-600 mb-4">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center flex items-center justify-center">
          <Button className="bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Product Catalog
          </Button>
        </div>
      </div>
    </section>
  );
}
