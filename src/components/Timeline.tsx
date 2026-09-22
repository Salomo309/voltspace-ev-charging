import { Kicker, Reveal } from './ui';

const STEPS: Array<[string, string, string, string]> = [
  ['01', 'Site survey', 'MDB audit, transformer headroom, cable routing.', 'Day 1'],
  ['02', 'Blueprint', 'Certified single-line diagram + PLN paperwork.', 'Day 2'],
  ['03', 'Install', 'Panel, conduit, grounding, wallbox docking.', 'Day 3–4'],
  ['04', 'Go live', 'Stress test, RFID provisioning, handover.', 'Day 5'],
];

export default function Timeline() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <Kicker no="05" label="Process" />
        <h2 className="display-section mt-6 text-[clamp(2rem,6vw,4.5rem)]">
          Live in five days<span className="text-[#00e699]">.</span>
        </h2>
      </Reveal>
      <div className="mt-12 border-t border-white/10">
        {STEPS.map(([n, t, d, f], i) => (
          <Reveal key={n} delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-1 border-b border-white/10 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-7">
              <span className="font-mono text-sm tabular-nums text-[#00e699] sm:col-span-1">{n}</span>
              <span className="font-display text-2xl font-bold tracking-tight sm:col-span-4 sm:text-3xl">{t}</span>
              <span className="max-w-md text-[14px] leading-relaxed text-[#8fa6ad] sm:col-span-5">{d}</span>
              <span className="font-mono text-[12px] tracking-[0.15em] uppercase text-[#8fa6ad] sm:col-span-2 sm:text-right">{f}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
