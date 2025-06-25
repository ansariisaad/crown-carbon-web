"use client";

import Link from "next/link";
import { Crown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-8 w-full border-b bg-slate-900 text-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Crown className="h-8 w-8 text-blue-500" />
          <div>
            <span className="text-xl font-bold">Crown Carbon Brush</span>
            <p className="text-xs text-gray-400">Since 20 Years</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-blue-500"
          >
            About
          </Link>
          <Link
            href="#products"
            className="text-sm font-medium hover:text-blue-500"
          >
            Products
          </Link>
          <Link
            href="#why-us"
            className="text-sm font-medium hover:text-blue-500"
          >
            Why Us
          </Link>
          <Link
            href="#ongoing-work"
            className="text-sm font-medium hover:text-blue-500"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-blue-500"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white">
          Request Quote
        </Button>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <nav className="container px-16 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#why-us"
              className="text-sm font-medium hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="#ongoing-work"
              className="text-sm font-medium hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
