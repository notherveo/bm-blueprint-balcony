import { FloorStack } from "@/components/floor-stack";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = { title: "Availability" };

export default function AvailabilityPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8A6A3B]">
              Current inventory
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-2">
              Available residences
            </h1>
            <p className="text-gray-500 mt-4 max-w-xl">
              Explore our current availability across all floors.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <FloorStack />
        </Reveal>

        <Reveal>
          <div className="mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Need more information?
              </h2>
              <p className="text-gray-500 mb-6">
                Our team is ready to answer your questions and help you find
                your perfect residence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button>
                  <Link href="/register">
                    Schedule a consultation
                  </Link>
                </Button>
                <Button variant="outline">
                  <Link href="/amenities">
                    Explore amenities
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
