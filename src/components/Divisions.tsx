import { DIVISIONS } from '../data';
import { Kicker, Reveal } from './ui';

export default function Divisions() {
  return (
    <section id="divisions" className="border-t border-line bg-abyss">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <Kicker no="01" label="What we do" />
          <h2 className="display-section mt-6 max-w-5xl text-[clamp(2rem,6vw,4.5rem)]">
            Four divisions<span className="text-mint">.</span>
            <br />
            One standard<span className="text-mint">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
            A family-run engineering group based in Jabodetabek. EV charging is
            where we started; electrical, computer equipment, and software are
            how we keep the whole operation running.
          </p>
        </Reveal>
        <div className="mt-12 border-t border-line">
          {DIVISIONS.map((d, i) => (
            <Reveal key={d.no} delay={Math.min(i * 0.05, 0.2)}>
              <a
                href="#booking"
                className="group grid grid-cols-1 gap-3 border-b border-line py-7 transition-colors hover:bg-ink/[0.02] md:grid-cols-12 md:items-baseline md:gap-6 md:py-8"
              >
                <span className="font-mono text-[12px] tabular-nums text-mint md:col-span-1">{d.no}</span>
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                    {d.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.15em] uppercase text-muted">{d.lead}</p>
                </div>
                <p className="max-w-xl text-[14px] leading-relaxed text-muted md:col-span-5">{d.desc}</p>
                <div className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-muted md:col-span-2 md:text-right">
                  {d.tags.join(' · ')}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
