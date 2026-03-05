import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { WaveDivider } from "@/components/sections/WaveDivider";

export const metadata: Metadata = {
  title: "Gallery — Our Work",
  description:
    "Browse our gallery of handcrafted custom furniture, cabinetry, shelving, and restoration projects by Northstar Woodworks in Hyrum, Utah.",
};

const placeholders = [
  "Custom Dining Table",
  "Kitchen Cabinetry",
  "Floating Shelves",
  "Restored Antique Dresser",
  "Live Edge Coffee Table",
  "Built-In Bookshelves",
  "Custom Bed Frame",
  "Bathroom Vanity",
];

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Our Work"
        subtitle="Every piece tells a story. Browse examples of our handcrafted furniture, custom cabinetry, shelving, and restoration work."
      />

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper mb-3">
              Portfolio
            </p>
            <h2 className="text-charcoal mb-4">Project Gallery</h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Photos of completed projects coming soon. In the meantime, contact us to discuss
              your project and we can share examples of similar work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {placeholders.map((label) => (
              <div
                key={label}
                className="bg-stone rounded-xl aspect-[4/3] flex flex-col items-center justify-center gap-3 border border-stone/80"
              >
                <Camera className="h-8 w-8 text-warm-gray/40" />
                <p className="text-sm text-warm-gray font-medium">{label}</p>
                <span className="text-xs text-warm-gray/60">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaveDivider fillColor="#1C2127" />
      <CTABanner
        headline="Start Your Project"
        description="Ready to see your vision become reality? Let us discuss your custom woodworking project today."
        ctaText="Request a Consultation"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
