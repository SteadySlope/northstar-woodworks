"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Shield, BadgePercent } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { services } from "@/lib/services";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, this would submit to an API endpoint
    setSubmitted(true);
  }

  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="Ready to start your project? Have a question about our services? We would love to hear from you."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-charcoal mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-white rounded-xl border border-stone p-8 text-center">
                  <div className="text-copper text-4xl mb-4">&#10003;</div>
                  <h3 className="text-charcoal mb-2">Message Sent!</h3>
                  <p className="text-warm-gray">
                    Thank you for reaching out. We will get back to you within 1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Full Name <span className="text-copper">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-stone bg-white px-4 py-2.5 text-graphite placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Email Address <span className="text-copper">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-stone bg-white px-4 py-2.5 text-graphite placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-md border border-stone bg-white px-4 py-2.5 text-graphite placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-md border border-stone bg-white px-4 py-2.5 text-graphite focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Message <span className="text-copper">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-stone bg-white px-4 py-2.5 text-graphite placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent resize-y"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-charcoal mb-6">Contact Information</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-0.5">Phone</p>
                    <a
                      href={`tel:${company.phoneRaw}`}
                      className="text-warm-gray hover:text-copper transition-colors"
                    >
                      {company.phone}
                    </a>
                    <p className="text-xs text-warm-gray/60 mt-0.5">Tap to call</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-0.5">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-warm-gray hover:text-copper transition-colors"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-0.5">Address</p>
                    <p className="text-warm-gray">
                      {company.address.street}<br />
                      {company.address.city}, {company.address.state} {company.address.zip}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-0.5">Business Hours</p>
                    <p className="text-warm-gray">{company.hours.weekdays}</p>
                    <p className="text-warm-gray">{company.hours.weekends}</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-8 border-t border-stone space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-copper" />
                  <span className="text-sm font-medium text-charcoal">
                    Licensed, Bonded &amp; Insured
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BadgePercent className="h-5 w-5 text-copper" />
                  <span className="text-sm font-medium text-charcoal">
                    Military Discount Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
