import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = { title: "Amenities" };

export default function AmenitiesPage() {
  const amenities = [
    {
      id: 1,
      title: "Infinity Pool",
      description: "A stunning infinity pool with panoramic harbor views.",
      image: "https://picsum.photos/seed/pool/800/600",
    },
    {
      id: 2,
      title: "Fitness Center",
      description: "State-of-the-art equipment and personal training.",
      image: "https://picsum.photos/seed/fitness/800/600",
    },
    {
      id: 3,
      title: "Spa & Wellness",
      description: "Relax and rejuvenate with our full-service spa.",
      image: "https://picsum.photos/seed/spa/800/600",
    },
    {
      id: 4,
      title: "Private Dining",
      description: "Host elegant gatherings in our private dining rooms.",
      image: "https://picsum.photos/seed/dining/800/600",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8A6A3B]">
              Lifestyle
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-2">
              Exceptional amenities
            </h1>
            <p className="text-gray-500 mt-4 max-w-xl">
              Enjoy a wide range of amenities designed for your comfort and
              entertainment.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {amenities.map((amenity) => (
              <div
                key={amenity.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900">{amenity.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-[#4A3B2E] rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  More amenities coming soon
                </h2>
                <p className="text-gray-300">
                  We're continuously expanding our amenities to provide you
                  with the best possible lifestyle.
                </p>
              </div>
              <div>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A3B2E]">
                  <Link href="/register">
                    Get notified
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
