import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { WaveDivider } from "@/components/sections/WaveDivider";

export const metadata: Metadata = {
  title: "Gallery — Our Work",
  description:
    "Browse our gallery of handcrafted custom furniture, cabinetry, shelving, and restoration projects by Northstar Woodworks in Hyrum, Utah.",
};

const galleryItems = [
  {
    src: "/photos/IMG_0505.JPG",
    alt: "Complete bedroom suite in showroom — bed frame, dresser with mirror, chest of drawers, and nightstands",
    label: "Bedroom Suite — Showroom",
    span: "sm:col-span-2",
  },
  {
    src: "/photos/IMG_0476.JPG",
    alt: "Quarter-sawn oak five-drawer chest with dark iron knobs — front three-quarter view",
    label: "Quarter-Sawn Oak Chest",
    span: "",
  },
  {
    src: "/photos/IMG_0483.PNG",
    alt: "Custom hardwood bed headboard — close-up showing horizontal plank detail and rich stain",
    label: "Bed Headboard Detail",
    span: "",
  },
  {
    src: "/photos/IMG_0481.PNG",
    alt: "Two-tone dining table set with ladder-back chairs and matching bench",
    label: "Dining Table Set",
    span: "sm:col-span-2",
  },
  {
    src: "/photos/IMG_0437.PNG",
    alt: "Oak chest of drawers with decorative arch side panels — front three-quarter view",
    label: "Oak Chest of Drawers",
    span: "",
  },
  {
    src: "/photos/IMG_0462.JPG",
    alt: "Bedroom chest and nightstand in warm maple finish with black iron hardware — styled with lamp",
    label: "Chest & Nightstand",
    span: "",
  },
  {
    src: "/photos/IMG_0467.PNG",
    alt: "Complete bedroom furniture set — bed, dresser with mirror, tall chest, and two nightstands",
    label: "Full Bedroom Collection",
    span: "sm:col-span-2",
  },
  {
    src: "/photos/IMG_0440.PNG",
    alt: "Compact oak dresser with seven drawers — three-quarter angle showing wood grain detail",
    label: "Compact Oak Dresser",
    span: "",
  },
  {
    src: "/photos/IMG_0477.JPG",
    alt: "Tall storage cabinet shown closed and open — handcrafted with interior shelving",
    label: "Storage Cabinet",
    span: "",
  },
  {
    src: "/photos/IMG_2911.jpg",
    alt: "Custom oak living room set — round coffee table with two matching end tables",
    label: "Living Room Table Set",
    span: "sm:col-span-2",
  },
  {
    src: "/photos/IMG_0466.PNG",
    alt: "Five-drawer chest and single-drawer nightstand — clean studio shot on white background",
    label: "Chest & Nightstand — Studio",
    span: "",
  },
  {
    src: "/photos/IMG_2960.jpg",
    alt: "Round oak end table with tapered legs — styled with coffee mug showing wood grain",
    label: "Oak End Table",
    span: "",
  },
  {
    src: "/photos/IMG_0439.PNG",
    alt: "Compact oak dresser with clean lines — front view showing natural wood grain",
    label: "Small Oak Dresser",
    span: "",
  },
  {
    src: "/photos/IMG_2938.jpg",
    alt: "Round oak coffee table with cross-base design and book styled on top",
    label: "Round Coffee Table",
    span: "",
  },
  {
    src: "/photos/IMG_0438.PNG",
    alt: "Oak chest of drawers — side profile showing arch panel and dovetail construction",
    label: "Chest — Side Detail",
    span: "",
  },
  {
    src: "/photos/IMG_2921.jpg",
    alt: "Close-up of round end table top showing natural oak wood grain and smooth finish",
    label: "Wood Grain Detail",
    span: "",
  },
  {
    src: "/photos/IMG_2951.jpg",
    alt: "Round oak coffee table in living room setting with open book — lifestyle shot",
    label: "Coffee Table — Lifestyle",
    span: "sm:col-span-2",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Our Work"
        subtitle="Every piece tells a story. Browse examples of our handcrafted furniture, custom cabinetry, and woodworking projects."
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
              A selection of our recent handcrafted pieces. Each project is custom-built with
              premium hardwoods and time-tested joinery techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.src}
                className={`group relative rounded-xl overflow-hidden ${item.span}`}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes={item.span ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 50vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-sm">{item.label}</p>
                  </div>
                </div>
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
