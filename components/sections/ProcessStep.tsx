interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepProps {
  steps: Step[];
}

export function ProcessStep({ steps }: ProcessStepProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step) => (
        <div key={step.number} className="relative text-center">
          {/* Step number */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-copper text-white text-xl font-bold font-heading mb-4">
            {step.number}
          </div>

          {/* Connecting line (hidden on mobile, shown on lg) */}
          {step.number < steps.length && (
            <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-stone" />
          )}

          <h3 className="text-charcoal mb-2">{step.title}</h3>
          <p className="text-warm-gray text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
