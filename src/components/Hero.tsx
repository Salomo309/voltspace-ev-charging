import { motion } from 'framer-motion';
import Charger3D from './Charger3D';

export default function Hero() {
  return (
    <section id="solutions" className="relative w-full overflow-hidden pt-24 sm:pt-28">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] sm:w-[1000px] max-w-none h-[380px] sm:h-[480px] bg-[#00e699]/10 blur-[80px] sm:blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 sm:py-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          className="lg:col-span-7 flex flex-col gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded bg-[#FF0033]/10">
              <span className="w-2 h-2 rounded-full bg-[#FF0033] shadow-[0_0_8px_#FF0033]" />
              <span className="font-mono text-[11px] font-bold text-[#FF0033] uppercase tracking-wider">ABB Authorized Solution Partner</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e699] animate-ping" />
              <span className="font-mono text-[11px] text-[#76ffbb]">Official Jabodetabek Deployment</span>
            </div>
          </div>
          <h1 className="font-display font-extrabold tracking-tight leading-[1.08] text-balance break-words text-[32px] min-[380px]:text-[36px] sm:text-[56px]">
            Make Your Property <br className="hidden sm:inline" />
            <span className="text-[#76ffbb] text-glow">EV-Ready</span>
          </h1>
          <p className="text-[#bacbbe] text-[16px] leading-[26px] max-w-2xl">
            Turn commercial parking bays and residential developments into high-yield, future-proof EV charging hubs with the industry-standard <span className="text-white font-semibold">ABB Terra AC Wallbox 7kW</span>. Scalable, secure, and revenue-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#booking" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[#00e699] text-[#003822] font-bold shadow-[0_0_30px_rgba(0,230,153,.4)]">
              Book a Site Survey <span className="material-symbols-outlined">arrow_forward</span>
            </motion.a>
            <a href="#package" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-white/10 text-[#a5e7ff] font-semibold hover:bg-white/15 transition-all">
              <span className="material-symbols-outlined">verified</span> Explore Solution Package
            </a>
          </div>
          <div className="p-4 rounded bg-[#181c24] grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-4 mt-2">
            {[
              ['7.4 kW / 32A', 'Single-Phase AC'],
              ['IEC 61851', 'IP54 Weatherproof'],
              ['OCPP 1.6J', 'Cloud Telemetry'],
              ['RFID & App', 'Access Billing'],
            ].map(([a, b]) => (
              <div key={a} className="min-w-0">
                <div className="font-mono text-[12px] sm:text-[13px] font-bold truncate">{a}</div>
                <div className="font-mono text-[11px] text-[#bacbbe] truncate">{b}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Charger3D />
          <p className="text-center font-mono text-[11px] text-[#bacbbe] mt-2">ABB Terra AC Wallbox 7kW • Interactive 3D • Stitch Design ANIMATION_1</p>
        </motion.div>
      </div>
    </section>
  );
}
