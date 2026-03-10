import type { Metadata } from "next";
import Image from "next/image";
import { Armchair, Hammer, BookOpen, RefreshCw, TreePine, Ruler, Wrench } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { company } from "@/lib/company";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services  - Custom Woodworking & Furniture",
  description:
    "Explore our full range of custom woodworking services: furniture, cabinetry, shelving, and restoration. Handcrafted with Amish heritage by Northstar Woodworks in Hyrum, Utah.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  "custom-furniture": <Armchair className="h-10 w-10" />,
  cabinetry: <Hammer className="h-10 w-10" />,
  shelving: <BookOpen className="h-10 w-10" />,
  restoration: <RefreshCw className="h-10 w-10" />,
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="From a single custom shelf to a full kitchen of cabinetry, we bring the same level of care and craftsmanship to every project."
        ctaText="Request a Consultation"
        ctaHref="/contact"
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                href={service.href}
                icon={serviceIcons[service.slug]}
              />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#E8E3DC" />

      {/* Why Handcrafted */}
      <section className="py-16 md:py-24 bg-stone/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper mb-3">
              The Difference
            </p>
            <h2 className="text-charcoal mb-4">Why Choose Handcrafted?</h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Mass-produced furniture is built to a price. Handcrafted furniture is built to a standard.
              Here is why the difference matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 md:p-8 border border-stone text-center">
              <div className="text-copper mb-4 flex justify-center">
                <TreePine className="h-10 w-10" />
              </div>
              <h3 className="text-charcoal mb-3">Real Solid Hardwood</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                No particle board, no veneer tricks. We build with genuine hardwoods  - walnut,
                oak, maple, cherry, and more  - chosen for grain quality, strength, and beauty.
                These are materials that develop character with age rather than falling apart.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 border border-stone text-center">
              <div className="text-copper mb-4 flex justify-center">
                <Ruler className="h-10 w-10" />
              </div>
              <h3 className="text-charcoal mb-3">Precision Joinery</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                Mortise and tenon, dovetail, tongue and groove  - we use traditional joinery
                techniques that have proven their strength over centuries. These time-honored
                methods create bonds stronger than the wood itself, ensuring structural
                integrity for decades.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 border border-stone text-center">
              <div className="text-copper mb-4 flex justify-center">
                <Wrench className="h-10 w-10" />
              </div>
              <h3 className="text-charcoal mb-3">Built to Your Specs</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                Custom means custom. Every dimension, wood species, stain color, and design
                detail is tailored to your needs. You are not choosing from a catalog  - you
                are collaborating with a craftsman to create something uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#FAF8F5" flip />

      {/* How We Work */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-charcoal mb-6">
                Backed by {company.stats.familyLegacy}+ Years of Family Tradition
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-4">
                When you choose {company.name}, you get more than a woodworker  - you get a
                second-generation craftsman whose family has been building furniture for over four
                decades. Our Amish heritage instilled values of patience, precision, and
                uncompromising quality that show in every piece we create.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed">
                Every project comes with our {company.warranty} and
                the peace of mind that comes from working with a licensed, bonded, and insured
                professional.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/photos/IMG_0467.PNG"
                alt="Complete custom bedroom furniture collection  - bed frame, dresser with mirror, tall chest, and nightstands"
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaveDivider fillColor="#1C2127" />
      <CTABanner
        headline="Let Us Build Something Beautiful for You"
        description="Tell us about your project and we will provide a detailed consultation  - no obligation, no pressure."
        ctaText="Get a Free Consultation"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
