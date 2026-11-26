import { IsoMap } from "@/components/iso-map";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = { title: "Neighborhood" };

export default function NeighborhoodPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8A6A3B]">
              Location
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-2">
              Your new neighborhood
            </h1>
            <p className="text-gray-500 mt-4 max-w-xl">
              Discover a vibrant community with everything you need within
              walking distance.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <IsoMap />
        </Reveal>

        <Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Dining", count: "45+", description: "Restaurants and cafes" },
              { title: "Parks", count: "8", description: "Green spaces and recreation" },
              { title: "Shopping", count: "20+", description: "Boutiques and markets" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <p className="text-3xl font-semibold text-[#4A3B2E]">{item.count}</p>
                <h3 className="font-semibold text-gray-900 mt-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12">
            <Button>
              <Link href="/register">
                Explore the area
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
