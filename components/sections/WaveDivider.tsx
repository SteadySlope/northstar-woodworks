import { cn } from "@/lib/utils";

interface WaveDividerProps {
  fillColor: string;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({ fillColor, flip = false, className }: WaveDividerProps) {
  return (
    <div
      className={cn(
        "w-full h-[40px] md:h-[60px] lg:h-[80px] leading-[0]",
        flip && "rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,48 C240,100 480,-10 720,48 C960,106 1200,-10 1440,48 L1440,80 L0,80 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
