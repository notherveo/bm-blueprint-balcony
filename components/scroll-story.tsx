"use client";

import { useScroll, useTransform } from "motion/react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollStory() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const y = useTransform(scrollY, [0, 1000], [0, 500]);
  const opacity = useTransform(scrollY, [0, 300, 500], [0, 1, 1]);
  const scale = useTransform(scrollY, [0, 300, 500], [1, 1.05, 1]);
  const rotate = useTransform(scrollY, [0, 300, 500], [0, -3, 0]);
  const blur = useTransform(scrollY, [0, 300, 500], [6, 0, 0]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0603]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2a2218] via-[#0a0603] to-[#0a0603]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          style={{ y, opacity, scale, rotate, blur }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs font-semibold tracking-[0.18em] uppercase text-[#8A6A3B]"
              >
                A new chapter
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-semibold text-white mt-4 leading-tight"
              >
                HARBORLINE
                <br />
                <span className="text-[#8A6A3B]">RESIDENCES</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-400 text-lg mt-6 max-w-md leading-relaxed"
              >
                A waterfront sanctuary where modern luxury meets timeless
                elegance. Your new chapter begins here.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-8"
              >
                <Button size="lg" className="gap-2">
                  Explore residences
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative h-[600px] rounded-3xl overflow-hidden"
            >
              <img
                src="https://picsum.photos/seed/hero-1/1200/800"
                alt="Luxury waterfront residence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs font-semibold tracking-[0.14em] uppercase">
                  Waterfront
                </p>
                <p className="text-lg font-medium mt-1">
                  Unobstructed harbor views
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
