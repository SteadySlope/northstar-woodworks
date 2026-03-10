import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { services } from "@/lib/services";

const service = services.find((s) => s.slug === "shelving")!;

export const metadata: Metadata = {
  title: "Custom Shelving & Storage Solutions  - Floating Shelves to Wall Units",
  description:
    "Custom shelving and storage solutions handcrafted from premium hardwoods. Floating shelves, wall units, closet systems, and more. Northstar Woodworks, Hyrum, Utah.",
};

const steps = [
  {
    number: 1,
    title: "Assess Your Space",
    description:
      "We evaluate your space, understand what you need to store or display, and discuss design preferences including wood type and finish.",
  },
  {
    number: 2,
    title: "Design to Fit",
    description:
      "We create a shelving design that maximizes your space and complements your decor. Every shelf is planned for both beauty and load-bearing strength.",
  },
  {
    number: 3,
    title: "Handcrafted Build",
    description:
      "Each shelf and bracket is built from solid hardwood with precision joinery. We ensure every piece is smooth, level, and beautifully finished.",
  },
  {
    number: 4,
    title: "Install & Enjoy",
    description:
      "We securely install your shelving with proper wall anchoring and leveling. The result is functional art that transforms your space.",
  },
];

const faqs = [
  {
    question: "How much weight can custom shelves support?",
    answer:
      "Our shelves are engineered for strength. Depending on the wood species, shelf thickness, and span, our floating shelves can typically support 50 to 100+ pounds. We design each shelf to handle its intended load with a generous safety margin.",
  },
  {
    question: "Can you build floating shelves that hide the hardware?",
    answer:
      "Yes. We specialize in floating shelf designs where all mounting hardware is completely concealed inside the shelf. The result is a clean, seamless look with no visible brackets.",
  },
  {
    question: "What is the turnaround time for a shelving project?",
    answer:
      "Simple floating shelf projects can be completed in 2 to 3 weeks. Larger wall units or closet systems typically take 4 to 6 weeks. We provide an exact timeline during your consultation.",
  },
  {
    question: "Can shelving be built to match my existing furniture?",
    answer:
      "Absolutely. We can match wood species, stain color, and finish type to blend seamlessly with your existing furniture or woodwork. Bring us a sample or photo and we will get it right.",
  },
];

export default function ShelvingPage() {
  return (
    <>
      <Hero
        title={service.title}
        subtitle={service.shortDescription}
        ctaText={service.cta}
        ctaHref="/contact"
      />

      {/* Description */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-charcoal mb-6">Storage That Makes a Statement</h2>
            <p className="text-warm-gray text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#E8E3DC" />

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-stone/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper mb-3 text-center">
            Solutions
          </p>
          <h2 className="text-charcoal text-center mb-10">Shelving Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 bg-white rounded-lg p-5 border border-stone"
              >
                <CheckCircle className="h-5 w-5 text-copper shrink-0 mt-0.5" />
                <span className="text-graphite font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#FAF8F5" flip />

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-charcoal text-center mb-12">Our Shelving Process</h2>
          <ProcessStep steps={steps} />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Shelving FAQ" faqs={faqs} />

      {/* CTA */}
      <WaveDivider fillColor="#1C2127" />
      <CTABanner
        headline="Ready for Custom Shelving?"
        description="Whether you need a single floating shelf or a full wall system, we will build it to last and look beautiful."
        ctaText={service.cta}
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
