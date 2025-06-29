"use client";
import Image from "next/image";
import { Factory, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl text-center md:text-left  font-bold mb-6 text-slate-900">
              About Crown Carbon Brush
            </h2>
            <p className="text-slate-700 text-center md:text-left sm:mx-10  mb-6 leading-relaxed ">
              Since 20 years, Crown Carbon Brush has specialized in
              manufacturing premium carbon brushes. We work with different
              grades of high-quality materials and collaborate closely with our
              customers to deliver products tailored to their specific needs.
            </p>
            <p className="text-slate-700 text-center md:text-left sm:mx-10  mb-6 leading-relaxed">
              Our manufacturing experience has helped us gain extensive
              technical expertise, developing a strong customer base with
              manufacturers of original equipment across India.
            </p>
            <div className="flex justify-center  md:justify-start gap-8 mt-6">
              <div className="flex items-center snap-center gap-2">
                <Factory className="h-5 w-5 text-blue-600 " />
                <span className="font-medium">State-of-the-art Facility</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Expert Team</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[400px] w-full ">
            <Image
              src="/assets/carbon_image/carbon3.jpeg"
              alt="Our facility"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
