interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="bg-graphite py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={index < stats.length - 1 ? "md:border-r md:border-white/10" : ""}
            >
              <p className="text-3xl md:text-4xl font-bold font-heading text-copper mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-white/60 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
