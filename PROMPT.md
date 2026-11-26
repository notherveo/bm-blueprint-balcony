Build a complete, production-quality multi-page Next.js (App Router) website — a **luxury condo developer's presale site**. The feeling: "the building, before the building" — an immersive presale experience.

## Routes
`/`, `/residence`, `/availability`, `/amenities`, `/neighborhood`, `/register`

## Design language
- Palette: material swatches — travertine `#E7DFD1`, smoked oak `#4A3B2E`, bronze `#8A6A3B`, soft concrete gray.
- Type: architectural sans with wide tracking; small-caps labels.

## Motion language (signature — build without WebGL)
- **Scroll-driven storytelling**: full-viewport sections where imagery scales/parallaxes to feel like a camera moving from skyline -> lobby -> residence.
- **Interactive floor-stack model** (CSS 3D + SVG): clicking a floor reveals available units, sold status, and floor-plan thumbnails.
- **Unit-view simulator**: choose floor + orientation; an SVG sightline view + a photo update.
- **Finish selector**: toggle kitchen/bath packages over a rendering (swap CSS/SVG layers).
- **Neighborhood map**: inline SVG with walking-time rings (isochrone-style) to restaurants/schools/transit.

Write: `components/reveal.tsx`, `components/floor-stack.tsx`, `components/unit-view.tsx`, `components/finish-selector.tsx`, `components/iso-map.tsx`, `components/scroll-story.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`. Create `lib/units.ts`.

## Content — fictional development "HARBORLINE RESIDENCES"
- `/` — immersive hero; project story (scroll-driven); residence teaser; amenities; neighborhood; register-interest CTA.
- `/residence` — floor plans, finish packages (interactive finish selector).
- `/availability` — the interactive floor-stack model + unit list (fictional inventory, "illustrative").
- `/amenities` — amenity spaces with imagery.
- `/neighborhood` — the SVG walking-time map + local highlights.
- `/register` — two paths: buyer + broker registration forms with validation.

Label all pricing/inventory as illustrative. Use a fictional development name + sample contact details.

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`
- NO 3D/WebGL/map libraries. Do NOT import `three`, `@react-three/*`, `mapbox-gl`, `maplibre-gl`, `d3`, etc. (not installed). Build any "3D"/interactive visuals with CSS 3D transforms, inline SVG, gradients, and motion.

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` -> `{ Button }`
- `@/components/ui/card` -> `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` -> `{ Badge }`
- `@/components/ui/input` -> `{ Input }`
- `@/components/ui/label` -> `{ Label }`
Everything else you MUST write yourself under `components/` and import your own file. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1. (A dynamic route page with `generateStaticParams`/`generateMetadata` stays a SERVER component; put interactive UI in `"use client"` children.)
2. Icons are components: `<ArrowUpRight className="size-4" />`. Never `{icon.size}`. JSX component names MUST be Capitalized (never `<icon />`).
3. Shared chrome (header/nav, footer) lives in `app/layout.tsx`, rendered EXACTLY once; pages must NOT render it.
4. Import every symbol you use; no unused imports; no `any`; type props explicitly.
5. Photos: plain `<img loading="lazy" alt="..." className="... object-cover">`; use `https://picsum.photos/seed/<unique-slug>/<w>/<h>`; graphics via CSS gradients / inline SVG. No empty src.
6. Respect reduced motion (`useReducedMotion()`); skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy (fictional business). No lorem ipsum / TODO / sample text.
8. Responsive mobile-first; never overflow horizontally.
9. Clearly label testimonials, results, figures, and imagery as illustrative demo content. Use a FICTIONAL business name + sample contact details; never present invented credentials, results, certifications, or reviews as verified facts.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="...">...</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route, every component, and any `lib/*` data module you reference.
