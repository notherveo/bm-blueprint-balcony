"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Button as UiButton } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Interactive floor-stack model (CSS 3D + SVG). Click a floor to reveal
 * available units, sold status, and floor-plan thumbnails.
 */
export function FloorStack() {
  const floors = [
    {
      id: 1,
      name: "Penthouse",
      units: 2,
      price: "$4,800,000",
      status: "Limited",
      plans: [
        "2 bed · 2.5 bath · 2,800 sq ft",
        "3 bed · 3 bath · 3,200 sq ft",
      ],
      units: [
        { number: "PH-01", status: "Available", price: "$4,800,000" },
        { number: "PH-02", status: "Sold", price: "$4,850,000" },
      ],
    },
    {
      id: 2,
      name: "Sky",
      units: 4,
      price: "$3,200,000",
      status: "In demand",
      plans: ["2 bed · 2 bath · 2,100 sq ft"],
      units: [
        { number: "S-101", status: "Available", price: "$3,200,000" },
        { number: "S-102", status: "Available", price: "$3,250,000" },
        { number: "S-103", status: "Sold", price: "$3,220,000" },
        { number: "S-104", status: "Pending", price: "$3,200,000" },
      ],
    },
    {
      id: 3,
      name: "Mid",
      units: 6,
      price: "$2,400,000",
      status: "Great value",
      plans: ["2 bed · 2 bath · 1,600 sq ft"],
      units: [
        { number: "M-201", status: "Available", price: "$2,400,000" },
        { number: "M-202", status: "Available", price: "$2,450,000" },
        { number: "M-203", status: "Sold", price: "$2,420,000" },
        { number: "M-204", status: "Available", price: "$2,400,000" },
        { number: "M-205", status: "Sold", price: "$2,430,000" },
        { number: "M-206", status: "Available", price: "$2,400,000" },
      ],
    },
    {
      id: 4,
      name: "Base",
      units: 8,
      price: "$1,900,000",
      status: "Popular",
      plans: ["1 bed · 1 bath · 1,100 sq ft", "2 bed · 1 bath · 1,400 sq ft"],
      units: [
        { number: "B-301", status: "Available", price: "$1,900,000" },
        { number: "B-302", status: "Available", price: "$1,950,000" },
        { number: "B-303", status: "Sold", price: "$1,920,000" },
        { number: "B-304", status: "Available", price: "$1,900,000" },
        { number: "B-305", status: "Sold", price: "$1,930,000" },
        { number: "B-306", status: "Available", price: "$1,900,000" },
        { number: "B-307", status: "Sold", price: "$1,910,000" },
        { number: "B-308", status: "Available", price: "$1,900,000" },
      ],
    },
  ];

  const [active, setActive] = useState<number | null>(1);

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-500">
            Floor Stack
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-1">
            Explore the floors
          </h2>
        </div>
        <span className="text-xs text-gray-500">
          {active ? floors.find((f) => f.id === active)?.name : "Select a floor"}
        </span>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {floors.map((floor) => (
              <button
                key={floor.id}
                onClick={() => setActive(floor.id)}
                className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                  active === floor.id
                    ? "bg-[#4A3B2E] text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="text-sm font-medium">{floor.name}</span>
                <span className="text-xs text-gray-500">
                  {active === floor.id ? "▼" : "▶"}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <FloorCard floor={floors.find((f) => f.id === active)!} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function FloorCard({ floor }: { floor: (typeof floors)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="h-full">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-500">
                {floor.name}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">
                {floor.units.length} units · {floor.price}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{floor.status}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setExpanded((e) => !e)}
              className="size-9"
            >
              {expanded ? (
                <ChevronUp className="size-4" />
              ) : (
                <ChevronDown className="size-4" />
              )}
              <span className="sr-only">
                {expanded ? "Hide details" : "Show details"}
              </span>
            </Button>
          </div>

          {expanded && (
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-500 mb-2">
                  Floor plans
                </p>
                <div className="flex flex-wrap gap-2">
                  {floor.plans.map((plan) => (
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
                  Available units
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {floor.units.map((unit) => (
                    <div
                      key={unit.number}
                      className={`p-2.5 rounded-lg text-xs ${
                        unit.status === "Available"
                          ? "bg-green-50 text-green-800"
                          : unit.status === "Sold"
                          ? "bg-gray-100 text-gray-500"
                          : "bg-yellow-50 text-yellow-800"
                      }`}
                    >
                      <div className="font-medium">{unit.number}</div>
                      <div className="mt-0.5">{unit.status}</div>
                      <div className="mt-0.5 opacity-75">{unit.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
