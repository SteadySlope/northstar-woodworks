"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { company } from "@/lib/company";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-stone">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/photos/IMG_0433.JPG"
              alt="Northstar Woodworks"
              width={48}
              height={48}
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-base md:text-lg font-bold text-charcoal">
                Northstar
              </span>
              <span className="font-heading text-base md:text-lg font-bold text-copper -mt-1">
                Woodworks
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md",
                      pathname.startsWith(item.href)
                        ? "text-copper"
                        : "text-graphite hover:text-copper"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg border border-stone py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            pathname === child.href
                              ? "text-copper bg-cream"
                              : "text-graphite hover:text-copper hover:bg-cream"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                    pathname === item.href
                      ? "text-copper"
                      : "text-graphite hover:text-copper"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-1.5 text-sm text-warm-gray hover:text-copper transition-colors"
            >
              <Phone className="h-4 w-4" />
              {company.phone}
            </a>
            <Button asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-graphite hover:text-copper transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-1 mt-8" aria-label="Mobile navigation">
                {/* Phone - tap to call */}
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="flex items-center gap-2 px-3 py-3 text-copper font-medium border-b border-stone mb-2"
                >
                  <Phone className="h-4 w-4" />
                  {company.phone}
                </a>

                {mainNav.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-3 py-3 text-base font-medium transition-colors rounded-md",
                        pathname === item.href
                          ? "text-copper bg-cream"
                          : "text-graphite hover:text-copper hover:bg-cream"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 border-l-2 border-stone ml-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "block px-3 py-2 text-sm transition-colors rounded-md",
                              pathname === child.href
                                ? "text-copper"
                                : "text-warm-gray hover:text-copper"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="mt-4 pt-4 border-t border-stone">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Request a Quote
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
