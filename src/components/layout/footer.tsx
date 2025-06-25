"use client";
import Link from "next/link";
import { Crown } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="h-8 w-8 text-blue-500" />
              <div>
                <span className="text-xl font-bold">Crown Carbon Brush</span>
                <p className="text-xs text-gray-400">Since 20 Years</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              An innovative company specializing in manufacturing high-quality
              carbon brushes for industrial applications across India.
            </p>
            <p className="text-gray-400 italic">
              "We care for your armatures, fulfilling the highest quality
              standards"
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-blue-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-gray-400 hover:text-blue-500"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#why-us"
                  className="text-gray-400 hover:text-blue-500"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="#ongoing-work"
                  className="text-gray-400 hover:text-blue-500"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#products"
                  className="text-gray-400 hover:text-blue-500"
                >
                  Industrial Carbon Brushes
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-gray-400 hover:text-blue-500"
                >
                  Power Tool Carbon Brushes
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-gray-400 hover:text-blue-500"
                >
                  Custom Carbon Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Crown Carbon Brush. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
