import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { WaveDivider } from "@/components/sections/WaveDivider";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about custom woodworking, pricing, timelines, materials, warranty, and more from Northstar Woodworks.",
};

const faqs = [
  {
    question: "How much does custom furniture cost?",
    answer:
      "Pricing depends on the type of piece, wood species, size, and complexity. A simple floating shelf might start at a few hundred dollars, while a large custom dining table in premium walnut could be several thousand. We provide detailed, transparent quotes during your free consultation so there are never any surprises.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by project scope. Simple pieces like floating shelves take 2 to 3 weeks. Custom furniture typically takes 4 to 8 weeks. Full cabinetry projects run 6 to 10 weeks from design approval to installation. We provide a specific timeline during your consultation and keep you updated throughout.",
  },
  {
    question: "What types of wood do you use?",
    answer:
      "We work with a wide range of premium hardwoods including walnut, white oak, red oak, hard maple, cherry, ash, hickory, and more. We can also source specialty or exotic woods upon request. We will help you choose the best species for your project based on aesthetics, durability, and budget.",
  },
  {
    question: "What does your 5-year warranty cover?",
    answer:
      "Our 5-year warranty covers structural integrity and craftsmanship defects. If a joint fails, wood splits due to a manufacturing issue, or any structural component we built does not hold up under normal use, we will repair or replace it at no cost. This does not cover damage from misuse, accidents, or normal wear.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Hyrum, Utah and primarily serve families throughout Utah. We also work with clients in surrounding states including Idaho, Wyoming, and Nevada. For larger projects, we are happy to discuss delivery options regardless of your location.",
  },
  {
    question: "Do I need to know exactly what I want before contacting you?",
    answer:
      "Not at all. Many of our clients come to us with a general idea and we help refine it into a specific design. Bring us your inspiration photos, rough sketches, or just describe what you need. Helping you figure out the details is part of our process.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept ACH bank transfers and credit cards. For larger projects, we typically work with a deposit to begin the project and final payment upon completion and your satisfaction. Payment terms are discussed and agreed upon before work begins.",
  },
  {
    question: "Can you replicate a piece of furniture I have seen?",
    answer:
      "In most cases, yes. Send us photos and dimensions of the piece you like and we can build something similar or identical, often with customizations to make it perfectly suited to your space and style.",
  },
  {
    question: "Do you offer a military discount?",
    answer:
      "Yes. We proudly offer a military discount to active duty service members, veterans, and their families. Contact us for details.",
  },
  {
    question: "Are you licensed, bonded, and insured?",
    answer:
      "Yes. Northstar Woodworks is fully licensed, bonded, and insured. You can trust that your project and your home are protected throughout the entire process.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Answers to the questions we hear most about our custom woodworking services."
      />

      <FAQSection faqs={faqs} />

      <WaveDivider fillColor="#1C2127" />
      <CTABanner
        headline="Still Have Questions?"
        description="We are always happy to chat. Reach out by phone or send us a message and we will get back to you within one business day."
        ctaText="Contact Us"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
