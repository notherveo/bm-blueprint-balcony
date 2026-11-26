import { ScrollStory } from "@/components/scroll-story";
import { Reveal } from "@/components/reveal";
import { FinishSelector } from "@/components/finish-selector";
import { IsoMap } from "@/components/iso-map";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollStory />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8A6A3B]">
                  Your new chapter
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-2 leading-tight">
                  A sanctuary for modern living
                </h2>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  HARBORLINE RESIDENCES brings waterfront luxury to the heart
                  of the harbor district. Experience a new standard of living.
                </p>
                <div className="mt-8 flex gap-3">
                  <Button size="lg">
                    Explore residences
                  </Button>
                  <Button variant="outline" size="lg">
                    Book a tour
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <img
                  src="https://picsum.photos/seed/interior-5/800/600"
                  alt="Luxury interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-500">
                Choose your style
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
                Finish packages
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <FinishSelector />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-100 rounded-3xl overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/interior-6/800/600"
                    alt="Spacious living area"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8A6A3B]">
                  Your world
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
                  Within walking distance
                </h2>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  Discover a vibrant neighborhood filled with restaurants,
                  parks, and cultural attractions. Everything you need is
                  conveniently located.
                </p>
                <div className="mt-8">
                  <Button>
                    Explore neighborhood
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-500">
                Your neighborhood
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
                A vibrant community
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <IsoMap />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8A6A3B]">
                Get started
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
                Reserve your interest
              </h2>
              <p className="text-gray-500 mt-4 max-w-md mx-auto">
                Be among the first to know about exclusive opportunities and
                early access to our residences.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Register interest
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/availability">
                  View availability
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
