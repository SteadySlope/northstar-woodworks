import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${company.name}. Understand the terms governing our custom woodworking services, warranty, and payment policies.`,
};

export default function TermsPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-charcoal mb-8">Terms of Service</h1>
          <p className="text-warm-gray mb-8">
            Last updated: January 1, 2025
          </p>

          <div className="prose prose-neutral max-w-none space-y-8 text-warm-gray leading-relaxed">
            <div>
              <h2 className="text-charcoal">Agreement to Terms</h2>
              <p>
                By engaging {company.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
                for custom woodworking services, or by using our website, you agree to be bound by
                these Terms of Service. If you do not agree, please do not use our services or website.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Services</h2>
              <p>
                {company.name} provides custom woodworking services including but not limited to
                custom furniture, cabinetry, shelving, and furniture restoration. All work is
                performed according to specifications agreed upon in writing between {company.name}
                {" "}and the client prior to the start of the project.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Quotes and Pricing</h2>
              <p>
                All quotes provided by {company.name} are estimates based on the information
                available at the time of consultation. Final pricing may vary if project
                specifications change, additional work is requested, or unforeseen conditions
                are discovered during the project. Any changes to scope or pricing will be
                discussed and agreed upon with the client before proceeding.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Payment Terms</h2>
              <p>We accept the following payment methods:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>ACH bank transfer</li>
                <li>Credit card</li>
              </ul>
              <p className="mt-4">
                For most projects, a deposit is required to reserve your spot in our production
                schedule and cover material costs. The typical payment structure is:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Deposit:</strong> 50% due upon project approval to begin work</li>
                <li><strong>Final Payment:</strong> Remaining 50% due upon completion and before delivery</li>
              </ul>
              <p className="mt-4">
                Specific payment terms will be outlined in your project agreement. Payment is
                expected within the terms agreed upon. Late payments may result in project delays.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Warranty</h2>
              <p>
                All furniture and woodworking projects completed by {company.name} come with a
                {" "}{company.stats.warrantyYears}-year warranty covering:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Structural integrity of joints and construction</li>
                <li>Craftsmanship defects in materials and workmanship</li>
                <li>Hardware function (hinges, slides, and mechanisms we install)</li>
              </ul>
              <p className="mt-4">The warranty does not cover:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Damage from misuse, accidents, or negligence</li>
                <li>Normal wear and aging of wood and finishes</li>
                <li>Changes in wood due to environmental conditions (humidity, temperature)</li>
                <li>Damage from improper cleaning products or methods</li>
                <li>Modifications made by anyone other than {company.name}</li>
              </ul>
              <p className="mt-4">
                To make a warranty claim, contact us at{" "}
                <a href={`mailto:${company.email}`} className="text-copper hover:underline">
                  {company.email}
                </a>
                {" "}with a description and photos of the issue. We will assess the claim and
                arrange repair or replacement at no cost if covered.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Project Timeline</h2>
              <p>
                We provide estimated timelines during the consultation phase. While we make every
                effort to meet projected deadlines, timelines may be affected by material
                availability, project complexity, or circumstances beyond our control. We will
                communicate any significant delays promptly.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Cancellations and Refunds</h2>
              <p>
                If you need to cancel a project after work has begun, please contact us as soon
                as possible. Refund eligibility depends on the stage of the project:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Before materials are purchased:</strong> Full deposit refund minus a
                  design fee for work completed.
                </li>
                <li>
                  <strong>After materials are purchased:</strong> Deposit refund minus material
                  costs and labor completed to date.
                </li>
                <li>
                  <strong>During construction:</strong> Refund calculated based on remaining work
                  and materials not yet used.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-charcoal">Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing accurate measurements and project specifications</li>
                <li>Ensuring clear access to installation areas</li>
                <li>Reviewing and approving designs before construction begins</li>
                <li>Following care instructions provided for finished pieces</li>
                <li>Making payments according to agreed terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-charcoal">Limitation of Liability</h2>
              <p>
                {company.name} is licensed, bonded, and insured. Our liability for any claim
                arising from our services shall not exceed the total amount paid for the specific
                project in question. We are not liable for indirect, incidental, or consequential
                damages.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Intellectual Property</h2>
              <p>
                All content on our website, including text, images, and designs, is the property
                of {company.name} and is protected by applicable copyright laws. Custom designs
                created for your project become your property upon full payment.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws
                of the State of Utah. Any disputes arising from these terms or our services shall
                be resolved in the courts of Cache County, Utah.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms of Service at any time. Changes will be
                posted on this page with an updated revision date. Continued use of our services
                after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none space-y-1 mt-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${company.email}`} className="text-copper hover:underline">
                    {company.email}
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${company.phoneRaw}`} className="text-copper hover:underline">
                    {company.phone}
                  </a>
                </li>
                <li>
                  <strong>Address:</strong> {company.address.full}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
