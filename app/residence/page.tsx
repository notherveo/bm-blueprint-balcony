import { Reveal } from "@/components/reveal";
import { FinishSelector } from "@/components/finish-selector";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = { title: "Residences" };

export default function ResidencesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8A6A3B]">
              Your new home
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-2">
              Discover your residence
            </h1>
            <p className="text-gray-500 mt-4 max-w-xl">
              Explore our collection of luxury residences, each designed with
              modern living in mind.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {["2 bedroom", "3 bedroom", "Penthouse"].map((type) => (
              <div
                key={type}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-[#4A3B2E] rounded-lg mb-4" />
                <h3 className="font-semibold text-gray-900">{type}</h3>
                <p className="text-sm text-gray-500 mt-1">Starting from $1.9M</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <FinishSelector />
        </Reveal>

        <Reveal>
          <div className="mt-16">
            <Button>
              <Link href="/availability">
                View all residences
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
