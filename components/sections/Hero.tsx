import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  fullHeight?: boolean;
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  fullHeight = false,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative bg-charcoal text-white overflow-hidden",
        fullHeight ? "min-h-[85vh] flex items-center" : "py-20 md:py-28"
      )}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover blur-[5px] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(193,124,58,0.3),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
        {/* Copper accent bar */}
        <div className="w-12 h-1 bg-copper mb-6 rounded-full" />

        <h1 className="text-white mb-6 max-w-4xl text-5xl md:text-6xl lg:text-7xl">{title}</h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            {subtitle}
          </p>
        )}

        {(ctaText || secondaryCtaText) && (
          <div className="flex flex-col sm:flex-row gap-4">
            {ctaText && ctaHref && (
              <Button asChild size="lg">
                <Link href={ctaHref}>{ctaText}</Link>
              </Button>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <Button asChild size="lg" variant="secondary">
                <Link
                  href={secondaryCtaHref}
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  {secondaryCtaText}
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
