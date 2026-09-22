import { Kicker, Reveal } from './ui';

const STATS: Array<[string, string, string]> = [
  ['98,000+', 'EV cars on Indonesian roads', 'Up 180% year-on-year, concentrated in Greater Jakarta offices and residences.'],
  ['4,655', 'Public chargers nationwide', 'Private and workplace destination charging is where the deficit — and the yield — sits.'],
  ['+44%', 'Infrastructure capital growth', 'Driven by Perpres 79/2023 mandates and commercial tax deductions.'],
];

export default function Market() {
  return (
    <section id="market" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <Kicker no="01" label="Market" />
        <h2 className="display-section mt-6 max-w-4xl text-[clamp(2rem,6vw,4.5rem)]">
          Demand is outpacing supply<span className="text-[#00e699]">.</span>
        </h2>
      </Reveal>
      <div className="mt-12 border-t border-white/10">
        {STATS.map(([val, title, desc], i) => (
          <Reveal key={val} delay={i * 0.06}>
            <div className="grid grid-cols-1 gap-2 border-b border-white/10 py-8 sm:py-10 md:grid-cols-12 md:gap-6">
              <div className="font-mono text-[clamp(2.5rem,7vw,5rem)] font-bold leading-none tabular-nums tracking-tight md:col-span-5">
                {val}
              </div>
              <div className="md:col-span-7">
                <div className="font-display text-xl font-bold tracking-tight sm:text-2xl">{title}</div>
                <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[#8fa6ad]">{desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
