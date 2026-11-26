"use client";
import { useEffect, useState } from "react";
import * as React from "react";

import Link from "next/link";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,shadow] duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4A3B2E] rounded-sm" />
            <span className="text-sm font-semibold tracking-[0.16em] uppercase text-[#4A3B2E]">
              HARBORLINE
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["Residences", "Availability", "Amenities", "Neighborhood"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-[#4A3B2E] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/register" className="text-sm font-medium text-[#4A3B2E] hover:text-[#3a2e22]">
              Register
            </Link>
            <Button size="sm">
              Book a tour
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="size-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
