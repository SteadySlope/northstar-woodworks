import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${company.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-charcoal mb-8">Privacy Policy</h1>
          <p className="text-warm-gray mb-8">
            Last updated: January 1, 2025
          </p>

          <div className="prose prose-neutral max-w-none space-y-8 text-warm-gray leading-relaxed">
            <div>
              <h2 className="text-charcoal">Introduction</h2>
              <p>
                {company.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your
                privacy and is committed to protecting the personal information you share with us.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, and
                  mailing address when you submit our contact form or request a consultation.
                </li>
                <li>
                  <strong>Project Information:</strong> Details about your woodworking project,
                  preferences, and specifications that you share with us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our website,
                  including pages visited, time spent, and referring URLs.
                </li>
                <li>
                  <strong>Device Information:</strong> Browser type, operating system, and device
                  type used to access our website.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-charcoal">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and consultation requests</li>
                <li>Provide quotes and project estimates</li>
                <li>Communicate about your project status and updates</li>
                <li>Improve our website and services</li>
                <li>Send occasional updates about our services (only with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-charcoal">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers who help us operate our website (e.g., hosting, analytics)</li>
                <li>When required by law or to protect our legal rights</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-charcoal">Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information
                from unauthorized access, alteration, disclosure, or destruction. However, no
                method of internet transmission or electronic storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your
                browsing experience and analyze website traffic. You can control cookie settings
                through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible
                for the privacy practices or content of these external sites. We encourage you
                to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-charcoal">Children&apos;s Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not
                knowingly collect personal information from children under 13.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on
                this page with an updated revision date. We encourage you to review this policy
                periodically.
              </p>
            </div>

            <div>
              <h2 className="text-charcoal">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please
                contact us:
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
