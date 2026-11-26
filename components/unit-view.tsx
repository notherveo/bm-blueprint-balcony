"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UnitView() {
  const [orientation, setOrientation] = useState("South");
  const [finish, setFinish] = useState("Classic");

  const units = [
    {
      id: "S-101",
      floor: "Sky",
      number: "S-101",
      price: "$3,200,000",
      status: "Available",
      plans: [
        "2 bed · 2 bath · 2,100 sq ft",
        "2 bed · 2.5 bath · 2,300 sq ft",
      ],
      features: "Floor-to-ceiling windows · Private terrace · Smart home",
      finish: "Classic",
      image: "https://picsum.photos/seed/interior-1/800/600",
    },
    {
      id: "S-102",
      floor: "Sky",
      number: "S-102",
      price: "$3,250,000",
      status: "Available",
      plans: ["2 bed · 2 bath · 2,100 sq ft"],
      features: "Corner views · Private elevator · Wine storage",
      finish: "Modern",
      image: "https://picsum.photos/seed/interior-2/800/600",
    },
    {
      id: "M-201",
      floor: "Mid",
      number: "M-201",
      price: "$2,400,000",
      status: "Available",
      plans: ["2 bed · 2 bath · 1,600 sq ft"],
      features: "Open layout · Private balcony · Storage unit",
      finish: "Classic",
      image: "https://picsum.photos/seed/interior-3/800/600",
    },
    {
      id: "B-301",
      floor: "Base",
      number: "B-301",
      price: "$1,900,000",
      status: "Available",
      plans: ["1 bed · 1 bath · 1,100 sq ft", "2 bed · 1 bath · 1,400 sq ft"],
      features: "Ground floor · Private entrance · Garden access",
      finish: "Modern",
      image: "https://picsum.photos/seed/interior-4/800/600",
    },
  ];

  const current = units.find((u) => u.id === "S-101")!;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-500">
            Unit Simulator
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-1">
            Preview your residence
          </h2>
        </div>
        <span className="text-xs text-gray-500">{current.number}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-2xl overflow-hidden relative aspect-video">
          <img
            src={current.image}
            alt="Interior view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase">
              Current view
            </p>
            <p className="text-lg font-medium mt-1">{current.number}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-500">
              Unit details
            </p>
            <div className="mt-2 space-y-1 text-sm">
              <p className="text-gray-900 font-medium">{current.floor}</p>
              <p className="text-gray-500">{current.features}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-500 mb-2">
              Floor plans
            </p>
            <div className="flex flex-wrap gap-2">
              {current.plans.map((plan) => (
                <span
                  key={plan}
                  className="px-2.5 py-1 bg-gray-100 text-xs text-gray-700 rounded-md"
                >
                  {plan}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-500 mb-2">
              Finish package
            </p>
            <div className="flex flex-wrap gap-2">
              {["Classic", "Modern", "Luxury"].map((finish) => (
                <button
                  key={finish}
                  onClick={() => setFinish(finish)}
                  className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
                    finish === current.finish
                      ? "bg-[#4A3B2E] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {finish}
                </button>
              ))}
            </div>
          </div>

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
    </div>
  );
}
