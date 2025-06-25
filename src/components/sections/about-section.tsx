"use client";
import Image from "next/image";
import { Factory, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              About Crown Carbon Brush
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Since 20 years, Crown Carbon Brush has specialized in
              manufacturing premium carbon brushes. We work with different
              grades of high-quality materials and collaborate closely with our
              customers to deliver products tailored to their specific needs.
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Our manufacturing experience has helped us gain extensive
              technical expertise, developing a strong customer base with
              manufacturers of original equipment across India.
            </p>
            <div className="flex gap-8 mt-6">
              <div className="flex items-center gap-2">
                <Factory className="h-5 w-5 text-blue-600" />
                <span className="font-medium">State-of-the-art Facility</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Expert Team</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[400px] w-full">
            {/* <Image
              // src="https://images.unsplash.com/photo-1613790410526-0c15af6a250c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src={""}
              alt="Our facility"
              fill
              className="object-cover rounded-lg shadow-lg"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
