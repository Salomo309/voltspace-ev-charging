import { SECTORS } from '../data';
import { Kicker, Reveal } from './ui';

export default function PropertyTypes() {
  return (
    <section id="property" className="border-t border-line bg-abyss">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <Kicker no="03" label="Where it deploys" />
          <h2 className="display-section mt-6 max-w-4xl text-[clamp(2rem,6vw,4.5rem)]">
            One wallbox, six asset classes.
          </h2>
        </Reveal>
        <div className="mt-12 border-t border-line">
          {SECTORS.map((s, i) => (
            <Reveal key={s.code} delay={Math.min(i * 0.04, 0.2)}>
              <a href="#booking" className="group grid grid-cols-1 gap-1 border-b border-line py-6 transition-colors hover:bg-ink/[0.02] sm:py-7 md:grid-cols-12 md:items-baseline md:gap-6">
                <span className="font-mono text-[12px] tabular-nums text-muted md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl md:col-span-5">
                  {s.title}
                </span>
                <span className="max-w-xl text-[14px] leading-relaxed text-muted md:col-span-5">{s.desc}</span>
                <span className="hidden font-mono text-[12px] tracking-[0.15em] uppercase text-mint opacity-0 transition-opacity group-hover:opacity-100 md:col-span-1 md:text-right" aria-hidden>
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
