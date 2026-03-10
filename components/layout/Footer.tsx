import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/lib/company";
import { footerNav } from "@/lib/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/90">
      {/* Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/photos/IMG_0433.JPG"
                alt="Northstar Woodworks"
                width={40}
                height={40}
                className="h-10 w-10 object-contain brightness-110"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-base font-bold text-white">
                  Northstar
                </span>
                <span className="font-heading text-base font-bold text-copper -mt-1">
                  Woodworks
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              {company.tagline}. Second-generation craftsmanship with Amish heritage,
              serving {company.serviceArea}.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-body text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-copper transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-body text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-copper transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-body text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="flex items-start gap-2.5 text-sm text-white/60 hover:text-copper transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-2.5 text-sm text-white/60 hover:text-copper transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {company.address.full}
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p>{company.hours.weekdays}</p>
                  <p>{company.hours.weekends}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {footerNav.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
