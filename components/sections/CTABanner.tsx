import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  headline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  variant?: "dark" | "light";
}

export function CTABanner({
  headline,
  description,
  ctaText,
  ctaHref,
  variant = "dark",
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        variant === "dark" ? "bg-charcoal text-white" : "bg-stone text-graphite"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={cn(
            "mb-4",
            variant === "dark" ? "text-white" : "text-charcoal"
          )}
        >
          {headline}
        </h2>
        <p
          className={cn(
            "max-w-2xl mx-auto mb-8 text-lg",
            variant === "dark" ? "text-white/70" : "text-warm-gray"
          )}
        >
          {description}
        </p>
        <Button asChild size="lg">
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  );
}
