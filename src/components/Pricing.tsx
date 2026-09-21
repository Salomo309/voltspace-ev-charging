import { useMemo, useState } from 'react';
import { ADDONS, BASE_PRICE, formatIDR } from '../data';
import { Reveal, SectionTag } from './ui';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [checked, setChecked] = useState<boolean[]>(ADDONS.map((a) => a.checked));
  const total = useMemo(() => BASE_PRICE + ADDONS.reduce((s, a, i) => s + (checked[i] ? a.price : 0), 0), [checked]);

  return (
    <section id="package" className="max-w-[1440px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-7">
        <SectionTag>Turnkey Procurement & EPC Execution</SectionTag>
        <h2 className="font-display font-bold text-[28px] md:text-[40px]">ALL-INCLUSIVE JABODETABEK TURNKEY PACKAGE</h2>
        <p className="text-[#bacbbe] text-[14px] mt-2">No hidden subcontracting markups. Complete hardware supply, electrical engineering, certified installation, and testing by VOLTIX ABB-certified technicians.</p>
        <div className="mt-6 flex flex-col gap-3">
          {[
            ['1x Original ABB Terra AC Wallbox 7kW (TAC-W7-T-0)', 'Official Indonesian unit with SNI compliance, 5m Type 2 cable, integrated RFID security.'],
            ['Certified Professional Electrical Work (Up to 15m)', 'Supreme/Kabelmetal 3x6mm² NYY cable, PVC conduit, Schneider 40A MCB, IP65 sub-panel.'],
            ['Grounding Earthing Rod Test (< 2 Ohm)', 'Dedicated copper grounding rod with certified earth-resistance validation.'],
            ['Testing, Commissioning & SLO Assistance', 'Phase stress testing, app configuration, fast-track Sertifikat Laik Operasi (SLO).'],
            ['24-Month Official ABB Warranty & SLA', 'Local Jabodetabek spare-part depot with 48-hour hot-swap SLA.'],
          ].map(([t, d]) => (
            <Reveal key={t}>
              <div className="p-4 rounded-xl bg-[#181c24] flex gap-4">
                <span className="material-symbols-outlined text-[#00e699]">check_circle</span>
                <div><div className="font-bold text-[15px]">{t}</div><p className="text-[13px] text-[#bacbbe]">{d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 lg:sticky lg:top-28">
        <Reveal>
          <div className="p-7 rounded-xl bg-[#1c2028] shadow-2xl border border-white/5">
            <div className="flex justify-between font-mono text-[11px] font-bold text-[#00e699] pb-3"><span>JABODETABEK TURNKEY CONTRACT</span><span className="px-2 py-0.5 rounded bg-white/10 text-white">PPN 11% INCLUDED</span></div>
            <div className="py-4">
              <div className="font-mono text-[11px] text-[#bacbbe]">Total Package Investment:</div>
              <motion.div key={total} initial={{ scale: 0.97 }} animate={{ scale: 1 }} className="font-mono font-extrabold text-[32px]">{formatIDR(total)}</motion.div>
              <div className="text-[13px] text-[#00e699] mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">task_alt</span> Fixed transparent price for Greater Jakarta</div>
            </div>
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider pt-2">Select Optional Add-ons:</div>
            <div className="mt-2 flex flex-col gap-2">
              {ADDONS.map((a, i) => (
                <label key={a.name} className="flex items-center justify-between p-3 rounded bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                  <span className="flex items-center gap-2 text-[13px]"><input type="checkbox" checked={checked[i]} onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))} className="w-4 h-4 accent-[#00e699]" />{a.name}</span>
                  <span className="font-mono text-[11px] text-[#bacbbe]">+{formatIDR(a.price)}</span>
                </label>
              ))}
            </div>
            <a href="#booking" className="mt-6 w-full inline-flex justify-center gap-2 px-4 py-3.5 rounded bg-[#00e699] text-[#003822] font-bold shadow-[0_0_24px_rgba(0,230,153,.35)] hover:bg-[#4dffb1]">Lock Package & Book Survey <span className="material-symbols-outlined">arrow_forward</span></a>
            <div className="mt-3 flex justify-center gap-2 text-[#bacbbe] font-mono text-[11px]"><span className="material-symbols-outlined text-[14px]">lock</span> Zero upfront deposit prior to site audit</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
