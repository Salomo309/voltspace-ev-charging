import { motion } from 'framer-motion';
import Charger3D from './Charger3D';

const META: Array<[string, string]> = [
  ['7.4 kW / 32A', 'Single-phase AC'],
  ['IEC 61851', 'IP54 weatherproof'],
  ['OCPP 1.6J', 'Cloud telemetry'],
];

export default function Hero() {
  return (
    <section id="solutions" className="relative overflow-hidden pt-16">
      <div className="mx-auto max-w-[1440px] px-4 pt-12 sm:px-6 sm:pt-20">
        <motion.p
          className="font-mono text-[12px] tracking-[0.25em] uppercase text-[#8fa6ad]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          VoltSpace — EV infrastructure, Jabodetabek
        </motion.p>
        <motion.h1
          className="display-giant mt-6 text-[clamp(3rem,11vw,8.5rem)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Power your
          <br />
          property<span className="text-[#00e699]">.</span>
        </motion.h1>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="max-w-md text-[15px] leading-relaxed text-[#8fa6ad]">
              Turn parking bays into revenue-grade EV charging hubs with the
              ABB Terra AC Wallbox 7&nbsp;kW — engineered, installed, and
              maintained turnkey.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#booking" className="inline-flex min-h-[52px] items-center justify-center bg-[#00e699] px-8 font-mono text-[13px] font-bold tracking-[0.12em] uppercase text-[#071318] transition-colors hover:bg-[#76ffbb]">
                Book a site survey
              </a>
              <a href="#package" className="inline-flex min-h-[52px] items-center justify-center gap-2 border border-white/20 px-8 font-mono text-[13px] tracking-[0.12em] uppercase transition-colors hover:border-[#00e699] hover:text-[#00e699]">
                The package
              </a>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <Charger3D />
          </motion.div>
        </div>
        <div className="mt-12 grid grid-cols-1 border-t border-white/10 sm:grid-cols-3">
          {META.map(([a, b]) => (
            <div key={a} className="flex items-baseline justify-between gap-4 border-b border-white/10 py-4 sm:flex-col sm:items-start sm:gap-1 sm:border-b-0 sm:py-5 sm:pr-6">
              <span className="font-mono text-sm font-bold tabular-nums">{a}</span>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8fa6ad]">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
