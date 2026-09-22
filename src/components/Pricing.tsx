import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ADDONS, BASE_PRICE, formatIDR } from '../data';
import { Kicker, Reveal } from './ui';

const SCOPE = [
  'ABB Terra AC Wallbox 7 kW, SNI unit + 5 m Type 2 cable',
  'Certified electrical work up to 15 m — 40A MCB, IP65 sub-panel',
  'Grounding rod install, tested below 2 Ohm',
  'Commissioning, app setup & SLO fast-track assistance',
  '24-month warranty, 48-hour hot-swap SLA in Jabodetabek',
];

export default function Pricing() {
  const [checked, setChecked] = useState<boolean[]>(ADDONS.map((a) => a.checked));
  const total = useMemo(() => BASE_PRICE + ADDONS.reduce((s, a, i) => s + (checked[i] ? a.price : 0), 0), [checked]);

  return (
    <section id="package" className="border-t border-white/10 bg-[#071318]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker no="04" label="Turnkey package" />
            <h2 className="display-section mt-6 text-[clamp(2rem,6vw,4.5rem)]">
              One price<span className="text-[#00e699]">.</span>
              <br />
              No markups<span className="text-[#00e699]">.</span>
            </h2>
          </Reveal>
          <div className="mt-10 border-t border-white/10">
            {SCOPE.map((t, i) => (
              <Reveal key={t} delay={i * 0.04}>
                <div className="flex gap-4 border-b border-white/10 py-4 text-[15px] leading-relaxed">
                  <span className="font-mono text-[13px] text-[#00e699]" aria-hidden>+</span>
                  <span>{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-24">
            <div className="border-t-2 border-[#00e699] pt-6">
              <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[#8fa6ad]">
                Jabodetabek turnkey, PPN 11% incl.
              </div>
              <motion.div
                key={total}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                className="mt-3 font-mono text-[clamp(2rem,6vw,3.25rem)] font-bold tabular-nums leading-none tracking-tight"
              >
                {formatIDR(total)}
              </motion.div>
              <div className="mt-8 border-t border-white/10">
                {ADDONS.map((a, i) => (
                  <label key={a.name} className="flex cursor-pointer items-start gap-3 border-b border-white/10 py-4">
                    <input
                      type="checkbox"
                      checked={checked[i]}
                      onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#00e699]"
                    />
                    <span className="flex-1 text-[14px] leading-snug">{a.name}</span>
                    <span className="shrink-0 font-mono text-[12px] tabular-nums text-[#8fa6ad]">+{formatIDR(a.price)}</span>
                  </label>
                ))}
              </div>
              <a href="#booking" className="mt-8 flex min-h-[52px] items-center justify-center bg-[#00e699] font-mono text-[13px] font-bold tracking-[0.12em] uppercase text-[#071318] transition-colors hover:bg-[#76ffbb]">
                Lock package →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
