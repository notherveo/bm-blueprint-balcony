"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinishSelector() {
  const [finish, setFinish] = useState("Classic");

  const finishes = [
    {
      id: "Classic",
      name: "Classic",
      price: "$150,000",
      description: "Traditional elegance with warm wood tones and neutral accents.",
      features: "Marble flooring · Quartz countertops · Brass fixtures",
      image: "https://picsum.photos/seed/finish-1/800/600",
    },
    {
      id: "Modern",
      name: "Modern",
      price: "$180,000",
      description: "Clean lines and contemporary materials for a sleek look.",
      features: "Concrete floors · Glass countertops · Matte black fixtures",
      image: "https://picsum.photos/seed/finish-2/800/600",
    },
    {
      id: "Luxury",
      name: "Luxury",
      price: "$250,000",
      description: "Premium materials and custom finishes for the ultimate experience.",
      features: "Italian marble · Gold fixtures · Custom cabinetry",
      image: "https://picsum.photos/seed/finish-3/800/600",
    },
  ];

  const current = finishes.find((f) => f.id === finish)!;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-500">
            Finish Packages
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-1">
            Choose your style
          </h2>
        </div>
        <span className="text-xs text-gray-500">{current.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {finishes.map((finish) => (
          <motion.div
            key={finish.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className={`p-4 rounded-2xl cursor-pointer transition-all ${
              finish.id === current.id
                ? "bg-[#4A3B2E] text-white ring-2 ring-[#4A3B2E]"
                : "bg-gray-50 text-gray-900 hover:bg-gray-100"
            }`}
            onClick={() => setFinish(finish.id)}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase">
                {finish.name}
              </span>
              <span className="text-xs opacity-75">{finish.price}</span>
            </div>
            <p className="text-sm opacity-80">{finish.description}</p>
            <p className="text-xs mt-3 opacity-75">{finish.features}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 lg:hidden">
        <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video">
          <img
            src={current.image}
            alt="Interior view"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-6 hidden lg:block">
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-lg font-semibold text-gray-900">{current.price}</p>
          </div>
          <Button>
            Book a tour
            <ArrowRight className="size-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
