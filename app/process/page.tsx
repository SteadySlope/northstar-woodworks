import type { Metadata } from "next";
import { MessageSquare, PenTool, Hammer, Truck } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { CTABanner } from "@/components/sections/CTABanner";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Our Process — From Consultation to Delivery",
  description:
    "Learn how Northstar Woodworks takes your project from initial consultation through design, build, and delivery. Transparent process, no surprises.",
};

const steps = [
  {
    number: 1,
    title: "Consultation",
    description:
      "Every project begins with a conversation. Tell us what you envision, and we will discuss materials, dimensions, style, and budget.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "We create detailed plans and select the perfect materials. You review, refine, and approve every detail before work begins.",
  },
  {
    number: 3,
    title: "Build",
    description:
      "Your piece is handcrafted using traditional joinery and premium hardwoods. We keep you updated and welcome questions along the way.",
  },
  {
    number: 4,
    title: "Delivery",
    description:
      "We deliver and install your finished piece, walk you through care instructions, and ensure your complete satisfaction.",
  },
];

const detailedSteps = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Step 1: Consultation",
    description: `Every great piece of furniture starts with a great conversation. During your free consultation, we sit down with you to understand exactly what you need. We discuss the type of piece, dimensions, wood species, finish preferences, how it will be used, and where it will live in your home. We also talk budget openly — no pressure, no surprises. For cabinetry and built-in projects, we visit your space to take precise measurements. By the end of this step, you have a clear understanding of what we will build and what it will cost.`,
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Step 2: Design",
    description: `With your vision clear, we create detailed plans for your approval. This includes material selection — we help you choose the right wood species for your needs, whether that is the rich warmth of walnut, the classic beauty of oak, or the clean look of maple. We finalize every detail: dimensions, joinery methods, hardware, stain color, and finish type. Nothing moves forward until you are completely happy with the plan.`,
  },
  {
    icon: <Hammer className="h-8 w-8" />,
    title: "Step 3: Build",
    description: `This is where decades of family craftsmanship come to life. Every piece is built by hand in our workshop using time-tested joinery techniques — mortise and tenon, dovetails, tongue and groove — the same methods that have made Amish furniture legendary for its durability. We do not cut corners or rush the process. Every joint is hand-fitted, every surface is sanded through multiple grits, and every finish is applied with patience. We send you progress updates so you can watch your piece take shape.`,
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Step 4: Delivery",
    description: `When your piece is complete, we handle delivery and installation personally. We do not trust your furniture to a third-party shipping company. We place it in your home, ensure it fits perfectly, and walk you through care instructions so your piece stays beautiful for generations. Every project is backed by our ${company.stats.warrantyYears}-year warranty. If anything is not right, we make it right — that is our promise.`,
  },
];

export default function ProcessPage() {
  return (
    <>
      <Hero
        title="Our Process"
        subtitle="From your first idea to the finished piece in your home — here is how we work together to create something extraordinary."
        ctaText="Begin Your Consultation"
        ctaHref="/contact"
      />

      {/* Process Steps Overview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper mb-3">
              How We Work
            </p>
            <h2 className="text-charcoal mb-4">Four Simple Steps</h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              We keep our process straightforward and transparent. You are involved at every
              stage, and there are never any surprises.
            </p>
          </div>
          <ProcessStep steps={steps} />
        </div>
      </section>

      <WaveDivider fillColor="#E8E3DC" />

      {/* Detailed Steps */}
      <section className="py-16 md:py-24 bg-stone/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {detailedSteps.map((step) => (
              <div key={step.title} className="bg-white rounded-xl p-8 border border-stone">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-copper">{step.icon}</div>
                  <h3 className="text-charcoal">{step.title}</h3>
                </div>
                <p className="text-warm-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaveDivider fillColor="#1C2127" />
      <CTABanner
        headline="Begin Your Consultation"
        description="The first step is always a conversation. Tell us what you have in mind — there is no obligation and no pressure."
        ctaText="Get in Touch"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
