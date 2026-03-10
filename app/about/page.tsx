import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Handshake, Gem, Award, Users, Clock, Shield } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { CTABanner } from "@/components/sections/CTABanner";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About Us  - Our Story & Heritage",
  description:
    "Learn about Northstar Woodworks  - a second-generation craftsman with Amish heritage, 16 years of personal experience, and over 40 years of family legacy in premium woodworking.",
};

const valueIcons: Record<string, React.ReactNode> = {
  "Customer Satisfaction": <Heart className="h-8 w-8" />,
  "Quality Above All Else": <Gem className="h-8 w-8" />,
  "Heritage Craftsmanship": <Award className="h-8 w-8" />,
  "Honesty & Integrity": <Handshake className="h-8 w-8" />,
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="Three generations of woodworking tradition. One unwavering commitment to quality."
        ctaText="See Our Work"
        ctaHref="/gallery"
      />

      {/* Heritage Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/photos/IMG_0505.JPG"
                alt="Northstar Woodworks bedroom showroom  - complete handcrafted bedroom suite with bed, dresser, chest, and nightstands"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Story content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper mb-3">
                Our Heritage
              </p>
              <h2 className="text-charcoal mb-6">
                Built on Heritage, Driven by Craft
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  The story of {company.name} begins not in a modern shop, but in the
                  traditions of Amish craftsmanship  - where furniture was built to serve
                  families for generations, not just years. Those values were passed down
                  through our family, and they remain the foundation of everything we build
                  today.
                </p>
                <p>
                  As a second-generation woodworker, I grew up surrounded by sawdust and the
                  sound of hand tools shaping raw lumber into something lasting. My father
                  taught me that a piece of furniture carries more than just function  - it
                  carries the pride and care of the hands that built it. That lesson has
                  guided every project I have taken on over the past {company.stats.yearsExperience} years.
                </p>
                <p>
                  With over {company.stats.familyLegacy} years of combined family experience in the
                  furniture industry, we bring a depth of knowledge and skill that simply
                  cannot be rushed or replicated. Every joint is hand-fitted. Every surface
                  is sanded and finished with patience. Every piece is built to the standard
                  our family name demands.
                </p>
                <p>
                  Based in {company.address.city}, {company.address.state}, we serve families across{" "}
                  {company.serviceArea}  - bringing old-world craftsmanship to modern homes.
                  Whether you need a custom dining table for holiday gatherings or heirloom
                  cabinetry for your kitchen, we approach every project with the same care
                  and dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#E8E3DC" />

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-stone/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper mb-3">
              Our Values
            </p>
            <h2 className="text-charcoal mb-4">Our Core Values</h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              These are not just words on a wall  - they guide every decision we make and
              every piece we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.values.map((value) => (
              <div
                key={value}
                className="bg-white rounded-xl p-6 md:p-8 border border-stone text-center"
              >
                <div className="text-copper mb-4 flex justify-center">
                  {valueIcons[value]}
                </div>
                <h3 className="text-charcoal mb-2">{value}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {value === "Customer Satisfaction" &&
                    "Your vision drives our work. We listen carefully, communicate openly, and do not rest until you are completely satisfied with the result."}
                  {value === "Quality Above All Else" &&
                    "No shortcuts, no compromises. We use premium materials and proven techniques because your furniture deserves nothing less."}
                  {value === "Heritage Craftsmanship" &&
                    "Every technique we use has been refined over decades. Our Amish roots taught us that true quality comes from patience and precision."}
                  {value === "Honesty & Integrity" &&
                    "We give you honest timelines, fair pricing, and straightforward communication. Your trust is earned through actions, not promises."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar
        stats={[
          { value: `${company.stats.yearsExperience}+`, label: "Years Personal Experience" },
          { value: `${company.stats.familyLegacy}+`, label: "Years Family Legacy" },
          { value: `${company.stats.warrantyYears}-Year`, label: "Warranty on All Work" },
        ]}
      />

      {/* Commitment Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-charcoal mb-6">Our Commitment to You</h2>
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                When you work with {company.name}, you are not just hiring a woodworker  - you
                are partnering with a craftsman who takes personal pride in every piece that
                leaves our shop. We are fully licensed, bonded, and insured, and we back every
                project with our {company.warranty}.
              </p>
              <p>
                We also proudly offer a military discount as a small thank you to those who have
                served. It is our way of giving back to the community that supports us.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm text-charcoal">
                <Shield className="h-5 w-5 text-copper" />
                Licensed, Bonded &amp; Insured
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal">
                <Clock className="h-5 w-5 text-copper" />
                {company.stats.warrantyYears}-Year Warranty
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal">
                <Users className="h-5 w-5 text-copper" />
                Military Discount Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaveDivider fillColor="#1C2127" />
      <CTABanner
        headline="See Our Work in Action"
        description="Browse our gallery of completed projects and imagine what we could build for you."
        ctaText="View Gallery"
        ctaHref="/gallery"
        variant="dark"
      />
    </>
  );
}
