import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { services } from "@/lib/services";

const service = services.find((s) => s.slug === "restoration")!;

export const metadata: Metadata = {
  title: "Furniture Restoration & Refinishing  - Heirlooms & Family Pieces",
  description:
    "Expert furniture restoration and refinishing services. Structural restoration, surface refinishing, and hardware replacement. Northstar Woodworks, Hyrum, Utah.",
};

const steps = [
  {
    number: 1,
    title: "Assessment",
    description:
      "Bring your piece to our shop or send photos. We evaluate the condition, identify structural issues, and discuss your goals for the restoration.",
  },
  {
    number: 2,
    title: "Restoration Plan",
    description:
      "We create a detailed plan covering structural repairs, surface restoration, finish options, and hardware. You approve the plan and pricing before we begin.",
  },
  {
    number: 3,
    title: "Careful Restoration",
    description:
      "We restore your piece with the respect it deserves  - repairing joints, replacing damaged wood, stripping old finishes, and applying new ones that honor the original character.",
  },
  {
    number: 4,
    title: "Return & Care",
    description:
      "Your restored piece is returned looking and functioning beautifully. We provide care instructions to help it last another lifetime.",
  },
];

const faqs = [
  {
    question: "Can you restore a piece without changing its character?",
    answer:
      "Absolutely. We understand that the patina, wear marks, and character of antique and heirloom furniture are part of its story. We discuss your preferences and can preserve as much original character as you wish while making the piece structurally sound and beautiful.",
  },
  {
    question: "Is it worth restoring old furniture versus buying new?",
    answer:
      "In most cases, yes  - especially for pieces with sentimental value or solid wood construction. Older furniture was often built with higher quality materials and joinery than modern mass-produced pieces. Restoration gives it new life while preserving that superior craftsmanship.",
  },
  {
    question: "How long does a restoration project take?",
    answer:
      "Simple refinishing may take 2 to 3 weeks. More complex restorations involving structural repair, veneer work, or color matching can take 4 to 8 weeks. We provide an estimated timeline after assessing your piece.",
  },
  {
    question: "Can you match a specific stain color or finish?",
    answer:
      "Yes. We are experienced in color matching and can replicate or closely match existing stains and finishes. We create test samples for your approval before applying the final finish to your piece.",
  },
  {
    question: "Do you work on antiques?",
    answer:
      "Yes. We have extensive experience restoring antique furniture. We use period-appropriate techniques and materials when possible, and we take extra care to preserve the historical integrity of each piece.",
  },
];

export default function RestorationPage() {
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
            <h2 className="text-charcoal mb-6">Preserving What Matters</h2>
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
            Expertise
          </p>
          <h2 className="text-charcoal text-center mb-10">Restoration Services</h2>
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
          <h2 className="text-charcoal text-center mb-12">Our Restoration Process</h2>
          <ProcessStep steps={steps} />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Restoration FAQ" faqs={faqs} />

      {/* CTA */}
      <WaveDivider fillColor="#1C2127" />
      <CTABanner
        headline="Have a Piece Worth Saving?"
        description="Whether it is a family heirloom or an antique find, we can bring it back to life with expert care and craftsmanship."
        ctaText={service.cta}
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
