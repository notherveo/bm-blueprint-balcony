"use client";
import * as React from "react";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * A section that reveals itself on scroll: the hero's copy and imagery
 * emerge from a soft blur, and the CTA slides up.
 */
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.3, rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: reduced ? "none" : "opacity 1.2s ease-out",
        opacity: revealed ? 1 : 0,
        filter: revealed ? "none" : "blur(8px)",
        pointerEvents: revealed ? "auto" : "none",
      }}
    >
      {children}
    </div>
  );
}
