import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  variant?: "elevated" | "flat" | "dark";
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  variant = "elevated",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1",
        variant === "elevated" &&
          "bg-white border-l-4 border-l-copper border border-stone shadow-sm hover:shadow-lg",
        variant === "flat" &&
          "bg-transparent border-none",
        variant === "dark" &&
          "bg-charcoal text-white border border-white/10 hover:border-copper/40"
      )}
    >
      <div className="text-copper mb-4">{icon}</div>
      <h3
        className={cn(
          "mb-2 transition-colors",
          variant === "dark"
            ? "text-white group-hover:text-copper"
            : "text-charcoal group-hover:text-copper"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-sm leading-relaxed mb-4",
          variant === "dark" ? "text-white/70" : "text-warm-gray"
        )}
      >
        {description}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-copper group-hover:gap-2.5 transition-all">
        Learn More
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
