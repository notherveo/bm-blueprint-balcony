"use client";

import { useState } from "react";
import { motion } from "motion/react";

/**
 * Neighborhood map: inline SVG with walking-time rings (isochrone-style) to
 * restaurants, schools, and transit.
 */
export function IsoMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  const points = {
    "Harbor Point": { x: 50, y: 50 },
    "Beacon Square": { x: 70, y: 35 },
    "Riverside Park": { x: 30, y: 65 },
    "Marina Plaza": { x: 60, y: 75 },
    "West End": { x: 20, y: 40 },
    "Northgate": { x: 80, y: 20 },
    "Downtown": { x: 45, y: 25 },
  };

  const icons = {
    "Harbor Point": { type: "residence", color: "#4A3B2E" },
    "Beacon Square": { type: "dining", color: "#8A6A3B" },
    "Riverside Park": { type: "park", color: "#2D7A4F" },
    "Marina Plaza": { type: "shopping", color: "#1E40AF" },
    "West End": { type: "transit", color: "#7C3AED" },
    "Northgate": { type: "education", color: "#0891B2" },
    "Downtown": { type: "dining", color: "#8A6A3B" },
  };

  const times = [0, 10, 20];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-500">
            Neighborhood
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-1">
            Your world, within reach
          </h2>
        </div>
        <span className="text-xs text-gray-500">
          {hovered ? `${hovered} · ${times[times.indexOf(Number(hovered.split(" ")[0]))]}` : "Hover a point"}
        </span>
      </div>

      <div className="relative aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Grid */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="ring" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />

          {/* Walking-time rings */}
          {times.map((t) => (
            <g key={t}>
              {Object.entries(points).map(([name, { x, y }]) => (
                <circle
                  key={`${name}-${t}`}
                  cx={x}
                  cy={y}
                  r={t * 2.5}
                  fill="url(#ring)"
                  className="text-gray-400"
                />
              ))}
            </g>
          ))}

          {/* Connections */}
          <g className="text-gray-300">
            {Object.entries(points).map(([name, { x, y }]) => (
              <line
                key={`${name}-line`}
                x1={x}
                y1={y}
                x2={x + 1}
                y2={y + 1}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="2 2"
              />
            ))}
          </g>

          {/* Points */}
          {Object.entries(points).map(([name, { x, y }]) => {
            const icon = icons[name];
            return (
              <g
                key={name}
                onMouseEnter={() => setHovered(name)}
                onMouseLeave={() => setHovered(null)}
              >
                <circle cx={x} cy={y} r="1.5" fill={icon.color} />
                <circle
                  cx={x}
                  cy={y}
                  r="0.8"
                  fill="white"
                  stroke={icon.color}
                  strokeWidth="0.5"
                />
                <text
                  x={x}
                  y={y - 2.5}
                  textAnchor="middle"
                  fill={icon.color}
                  fontSize="4"
                  fontWeight="bold"
                  className="select-none"
                >
                  {name.split(" ")[0]}
                </text>
                <text
                  x={x}
                  y={y + 2.5}
                  textAnchor="middle"
                  fill="#6B7280"
                  fontSize="5"
                  className="select-none"
                >
                  {icon.type}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-xs space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4A3B2E]" />
            <span>Residences</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#8A6A3B]" />
            <span>Dining</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#2D7A4F]" />
            <span>Park</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#1E40AF]" />
            <span>Shopping</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            <span>Transit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0891B2]" />
            <span>Education</span>
          </div>
        </div>
      </div>
    </div>
  );
}
