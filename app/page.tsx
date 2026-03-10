import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Armchair, Hammer, BookOpen, RefreshCw, Shield, TreePine, Award, Clock } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Northstar Woodworks  - Premium Custom Furniture | Hyrum, Utah",
  description:
    "Handcrafted custom furniture by a second-generation craftsman with Amish heritage. 16 years experience, 5-year warranty. Serving Utah and surrounding states from Hyrum, UT.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  "custom-furniture": <Armchair className="h-10 w-10" />,
  cabinetry: <Hammer className="h-10 w-10" />,
  shelving: <BookOpen className="h-10 w-10" />,
  restoration: <RefreshCw className="h-10 w-10" />,
};

const testimonials = [
  {
    quote:
      "We had a custom dining table built for our family and it is absolutely stunning. The craftsmanship is incredible  - every joint, every detail is perfect. Our kids will inherit this table someday and it will still look beautiful.",
    name: "Sarah & Mark Thompson",
    location: "Logan, Utah",
  },
  {
    quote:
      "Northstar Woodworks built custom cabinets for our entire kitchen remodel. The quality is leagues beyond anything we looked at from big box stores. Worth every penny and then some.",
    name: "David Reynolds",
    location: "Brigham City, Utah",
  },
  {
    quote:
      "I brought in my grandmother's rocking chair that was falling apart. They restored it beautifully  - kept the character but made it solid and functional again. You can feel the respect they have for the craft.",
    name: "Jennifer Olsen",
    location: "Hyrum, Utah",
  },
];

const uspPoints = [
  {
    icon: <TreePine className="h-6 w-6" />,
    title: "Amish Heritage Craftsmanship",
    description:
      "Second-generation woodworker carrying forward traditions rooted in Amish craftsmanship. Every piece reflects decades of passed-down knowledge and unwavering attention to detail.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "5-Year Warranty",
    description:
      "We stand behind every piece we build with a comprehensive 5-year warranty. Our furniture is built to last generations, and our guarantee reflects that confidence.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Premium Materials Only",
    description:
      "We source the finest hardwoods and use time-tested joinery techniques  - no particle board, no shortcuts. Every material is chosen for beauty and lasting durability.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Built on Your Timeline",
    description:
      "Custom work takes time to do right, but we keep you informed every step of the way. Transparent timelines, honest communication, and no surprises.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Handcrafted Furniture, Built to Last Generations"
        subtitle="Second-generation craftsman with Amish heritage bringing over 40 years of family woodworking tradition to every custom piece. Based in Hyrum, Utah, serving families across the state and beyond."
        ctaText="Request a Consultation"
        ctaHref="/contact"
        secondaryCtaText="View Our Services"
        secondaryCtaHref="/services"
        backgroundImage="/photos/IMG_2911.jpg"
        fullHeight
      />

      {/* Stats Bar */}
      <StatsBar
        stats={[
          { value: `${company.stats.yearsExperience}+`, label: "Years Experience" },
          { value: `${company.stats.warrantyYears}-Year`, label: "Warranty" },
          { value: `${company.stats.familyLegacy}+`, label: "Years Family Legacy" },
        ]}
      />

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper mb-3">
              Our Services
            </p>
            <h2 className="text-charcoal mb-4">What We Build</h2>
            <p className="text-warm-gray text-lg">
              From heirloom dining tables to custom kitchen cabinets, every piece is designed
              and built to your exact specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div className="text-center mt-10">
            <Button asChild variant="secondary">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 md:py-24 bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper mb-3">
                Featured Work
              </p>
              <h2 className="text-white mb-6">Handcrafted for Your Home</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                From dining sets built for family gatherings to bedroom furniture with
                heirloom quality  - every piece is crafted from solid hardwood with traditional
                joinery techniques. No particle board, no shortcuts. Just honest craftsmanship
                built to last for generations.
              </p>
              <Button asChild size="lg">
                <Link href="/gallery">View More Projects</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-xl overflow-hidden">
                <Image
                  src="/photos/IMG_0481.PNG"
                  alt="Custom two-tone dining table with bench and ladder-back chairs"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square">
                <Image
                  src="/photos/IMG_0462.JPG"
                  alt="Handcrafted bedroom chest of drawers and nightstand in warm maple finish"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square">
                <Image
                  src="/photos/IMG_0476.JPG"
                  alt="Quarter-sawn oak five-drawer chest with dark iron hardware"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#E8E3DC" />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-stone/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper mb-3">
              Why Choose Us
            </p>
            <h2 className="text-charcoal mb-4">Why Choose {company.name}</h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              {company.usp}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uspPoints.map((point) => (
              <div
                key={point.title}
                className="flex gap-5 bg-white rounded-xl p-6 border border-stone"
              >
                <div className="shrink-0 text-copper mt-1">{point.icon}</div>
                <div>
                  <h3 className="text-charcoal mb-2">{point.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#FAF8F5" flip />

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper mb-3">
              Testimonials
            </p>
            <h2 className="text-charcoal mb-4">What Our Customers Say</h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Real stories from families who trusted us with their custom woodworking projects.
            </p>
          </div>

          <TestimonialCard testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Banner */}
      <WaveDivider fillColor="#1C2127" />
      <CTABanner
        headline="Ready to Bring Your Vision to Life?"
        description="Every great piece starts with a conversation. Tell us what you have in mind and we will craft something extraordinary  - built to last for generations."
        ctaText="Start Your Project"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
