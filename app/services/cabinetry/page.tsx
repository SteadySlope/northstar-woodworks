import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { services } from "@/lib/services";

const service = services.find((s) => s.slug === "cabinetry")!;

export const metadata: Metadata = {
  title: "Custom Cabinetry & Built-Ins  - Kitchen, Bathroom & More",
  description:
    "Custom-built cabinetry for kitchens, bathrooms, and living spaces. Handcrafted with premium hardwoods by Northstar Woodworks in Hyrum, Utah. 5-year warranty.",
};

const steps = [
  {
    number: 1,
    title: "In-Home Consultation",
    description:
      "We visit your space, take precise measurements, discuss your style preferences, storage needs, and budget to create a comprehensive plan.",
  },
  {
    number: 2,
    title: "Custom Design",
    description:
      "We develop detailed cabinet designs tailored to your space. You choose wood species, finish colors, hardware, and layout before we proceed.",
  },
  {
    number: 3,
    title: "Precision Building",
    description:
      "Each cabinet is handcrafted in our shop with dovetail joints, solid wood construction, and meticulous finishing. No assembly-line shortcuts.",
  },
  {
    number: 4,
    title: "Professional Installation",
    description:
      "We handle the full installation, ensuring every cabinet is perfectly level, aligned, and functioning flawlessly in your space.",
  },
];

const faqs = [
  {
    question: "How do custom cabinets compare in price to semi-custom or stock?",
    answer:
      "Custom cabinets are an investment, but the value is unmatched. You get solid hardwood construction, perfect-fit dimensions for your space, and a level of craftsmanship that stock or semi-custom cabinets cannot provide. We offer transparent pricing during your consultation.",
  },
  {
    question: "How long does a custom cabinetry project take?",
    answer:
      "A typical kitchen cabinetry project takes 6 to 10 weeks from design approval to installation. Smaller projects like bathroom vanities or built-in bookshelves may take 3 to 6 weeks. We provide a specific timeline during your consultation.",
  },
  {
    question: "Do you handle the installation?",
    answer:
      "Yes. We handle every step from design through final installation. This ensures the quality and fit meet our standards. We do not hand off our work to subcontractors.",
  },
  {
    question: "Can you match existing woodwork in my home?",
    answer:
      "Absolutely. We are skilled at matching existing wood species, stain colors, and finish types so new cabinetry blends seamlessly with your current woodwork and trim.",
  },
  {
    question: "What hardware options are available?",
    answer:
      "We offer a wide selection of hardware styles from traditional to modern. You can choose pulls, knobs, hinges, and soft-close mechanisms. We can also work with hardware you source yourself.",
  },
];

export default function CabinetryPage() {
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
            <h2 className="text-charcoal mb-6">Cabinetry Built to Fit Your Life</h2>
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
          <h2 className="text-charcoal text-center mb-10">Cabinetry Solutions</h2>
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
          <h2 className="text-charcoal text-center mb-12">Our Cabinetry Process</h2>
          <ProcessStep steps={steps} />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Cabinetry FAQ" faqs={faqs} />

      {/* CTA */}
      <WaveDivider fillColor="#1C2127" />
      <CTABanner
        headline="Transform Your Space with Custom Cabinetry"
        description="From kitchen makeovers to built-in bookshelves, let us design and build cabinetry that fits your home perfectly."
        ctaText={service.cta}
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
