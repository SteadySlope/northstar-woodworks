import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  location?: string;
}

interface TestimonialCardProps {
  testimonials: Testimonial[];
}

export function TestimonialCard({ testimonials }: TestimonialCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-stone p-6 md:p-8 shadow-sm"
        >
          <Quote className="h-8 w-8 text-copper/40 mb-4" />
          <p className="text-graphite leading-relaxed mb-6 italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div>
            <p className="font-semibold text-charcoal">{testimonial.name}</p>
            {testimonial.location && (
              <p className="text-sm text-warm-gray">{testimonial.location}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
