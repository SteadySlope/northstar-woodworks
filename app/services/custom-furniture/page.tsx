import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { services } from "@/lib/services";

const service = services.find((s) => s.slug === "custom-furniture")!;

export const metadata: Metadata = {
  title: "Custom Furniture  - Handcrafted Tables, Beds & More",
  description:
    "Handcrafted custom furniture built to your exact specifications. Dining tables, bed frames, desks, chairs, and more. Built with Amish heritage craftsmanship in Hyrum, Utah.",
};

const steps = [
  {
    number: 1,
    title: "Share Your Vision",
    description:
      "Tell us about the piece you envision  - dimensions, style, wood preferences, and how it will be used. We will discuss options and provide a detailed quote.",
  },
  {
    number: 2,
    title: "Design & Refine",
    description:
      "We create detailed plans and select the perfect materials. You review and approve every detail before we begin building.",
  },
  {
    number: 3,
    title: "Expert Craftsmanship",
    description:
      "Your piece is handcrafted using time-tested techniques and premium hardwoods. Every joint, curve, and surface receives meticulous attention.",
  },
  {
    number: 4,
    title: "Delivery & Enjoyment",
    description:
      "We deliver your finished piece, ensure your complete satisfaction, and provide care instructions so it lasts for generations.",
  },
];

const faqs = [
  {
    question: "How long does a custom furniture piece take to build?",
    answer:
      "Most custom furniture pieces take 4 to 8 weeks depending on complexity and current workload. Large or highly detailed pieces may take longer. We provide a specific timeline during your consultation and keep you updated throughout the process.",
  },
  {
    question: "What types of wood do you work with?",
    answer:
      "We work with a wide range of premium hardwoods including walnut, oak, maple, cherry, ash, and hickory. We can also source specialty woods upon request. We will help you choose the best wood for your project based on aesthetics, durability, and budget.",
  },
  {
    question: "Can I choose the exact dimensions for my piece?",
    answer:
      "Absolutely. Custom means custom. Every dimension is built to your specifications. Whether you need a table that fits a specific room or a desk at an exact height, we build to your measurements.",
  },
  {
    question: "Do you offer a warranty on custom furniture?",
    answer:
      "Yes. Every piece comes with our 5-year warranty covering structural integrity and craftsmanship. We stand behind our work because we build furniture meant to last for generations.",
  },
  {
    question: "What is the price range for custom furniture?",
    answer:
      "Pricing varies based on the type of piece, wood species, size, and complexity of design. We provide detailed quotes during your free consultation so there are no surprises. We believe in fair, transparent pricing for quality craftsmanship.",
  },
];

export default function CustomFurniturePage() {
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
            <h2 className="text-charcoal mb-6">Furniture That Tells Your Story</h2>
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
            What We Build
          </p>
          <h2 className="text-charcoal text-center mb-10">Custom Furniture Options</h2>
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
          <h2 className="text-charcoal text-center mb-12">How It Works</h2>
          <ProcessStep steps={steps} />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Custom Furniture FAQ" faqs={faqs} />

      {/* CTA */}
      <WaveDivider fillColor="#1C2127" />
      <CTABanner
        headline="Ready to Start Your Custom Piece?"
        description="Every heirloom starts with a conversation. Tell us your vision and we will bring it to life."
        ctaText={service.cta}
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
