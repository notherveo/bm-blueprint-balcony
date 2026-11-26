import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#1a110a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#8A6A3B] rounded-sm" />
              <span className="text-sm font-semibold tracking-[0.16em] uppercase">
                HARBORLINE
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              A new chapter in waterfront living. HARBORLINE RESIDENCES brings
              modern luxury to the heart of the harbor district.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.1em] uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {["Residences", "Availability", "Amenities", "Neighborhood"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.1em] uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>1-800-HARBORLINE</li>
              <li>info@harborline.example</li>
              <li>200 Harbor Point, San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 HARBORLINE RESIDENCES. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span>Illustrative concept. Not a real property.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
