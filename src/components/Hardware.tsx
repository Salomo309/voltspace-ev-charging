import { Reveal, SectionTag } from './ui';

export default function Hardware() {
  return (
    <section id="hardware" className="w-full bg-[#0a0e16] py-12 sm:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-3">
          <div className="min-w-0">
            <SectionTag>Certified Hardware Blueprint</SectionTag>
            <h2 className="font-display font-bold leading-[1.15] text-balance break-words text-[24px] min-[380px]:text-[28px] md:text-[40px]">ABB TERRA AC WALLBOX 7KW SPECIFICATIONS</h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-[12px]"><span className="w-2 h-2 rounded-full bg-[#FF0033]" /> SWISS-ENGINEERED BY ABB E-MOBILITY</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Reveal className="md:col-span-7">
            <div className="p-5 sm:p-7 rounded-xl bg-[#181c24] h-full min-w-0">
              <div className="flex flex-wrap gap-2 justify-between font-mono text-[11px] text-[#76ffbb] font-bold mb-3"><span className="break-all">POWER_OUTPUT // MOD_01</span><span className="px-2 py-0.5 rounded bg-[#76ffbb]/10 whitespace-nowrap">3X SPEED VS OUTLET</span></div>
              <div className="font-display font-bold leading-tight text-[22px] min-[380px]:text-[24px] md:text-[32px] text-balance">7.4 kW Continuous Single-Phase</div>
              <p className="text-[#bacbbe] text-[14px] mt-2">Delivers standard 32A single-phase current at 230V nominal. Recharges standard 60 kWh passenger EVs from 20% to 80% in approximately 4.8 hours.</p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-5">
                {[['Max Amperage', '32 A'], ['Supply Voltage', '230 V'], ['Frequency', '50 Hz']].map(([k, v]) => (
                  <div key={k} className="p-2 sm:p-3 rounded bg-white/5 min-w-0"><div className="font-mono text-[10px] sm:text-[11px] text-[#bacbbe] leading-tight">{k}</div><div className="font-mono font-bold text-[18px] sm:text-[22px] tabular-nums whitespace-nowrap">{v}</div></div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-5">
            <div className="p-5 sm:p-7 rounded-xl bg-[#181c24] h-full min-w-0 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] text-[#a5e7ff] font-bold mb-3">INTERCONNECT // MOD_02</div>
                <div className="font-display font-bold text-[24px] mb-2">Type 2 Universal Port</div>
                <p className="text-[13px] text-[#bacbbe]">Compliant with IEC 62196-2. Universal socket with mechanical interlock. 5m heavy-duty industrial cable included.</p>
              </div>
              <div className="pt-5 flex flex-wrap gap-2 font-mono text-[11px]"><span className="px-2.5 py-1 rounded bg-white/5 whitespace-nowrap">Hyundai Ioniq</span><span className="px-2.5 py-1 rounded bg-white/5 whitespace-nowrap">Wuling EV</span><span className="px-2.5 py-1 rounded bg-white/5 whitespace-nowrap">BYD & Tesla</span></div>
            </div>
          </Reveal>
          {[
            { tag: 'RUGGEDNESS // MOD_03', icon: 'shield', title: 'IP54 & IK08 Certified', desc: 'Engineered for tropical high-humidity Jabodetabek. Rainproof, dust sealed, 5-joule impact resistance.', foot1: 'RFID MIFARE ISO 14443', foot2: 'Tamper Proof' },
            { tag: 'TELEMETRY // MOD_04', icon: 'cloud_sync', title: 'OCPP 1.6J Open Protocol', desc: 'Native cloud telemetry for automated billing, real-time metering, and OTA firmware deployments.', foot1: 'Wi-Fi / 4G LTE / LAN', foot2: 'OTA Upgrades' },
            { tag: 'GRID_SAFETY // MOD_05', icon: 'dynamic_form', title: 'Dynamic Load Shaving (DLM)', desc: 'Active algorithmic power throttling protects sub-stations by scaling charger draw on baseline load.', foot1: 'Modbus RTU / RS485', foot2: 'Zero Breaker Trips' },
          ].map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.06} className="md:col-span-4">
            <div className="p-5 sm:p-7 rounded-xl bg-[#181c24] h-full min-w-0 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between font-mono text-[11px] font-bold text-[#76ffbb] mb-3"><span>{c.tag}</span><span className="material-symbols-outlined">{c.icon}</span></div>
                  <div className="font-bold text-[18px] mb-1">{c.title}</div>
                  <p className="text-[13px] text-[#bacbbe]">{c.desc}</p>
                </div>
                <div className="pt-4 flex flex-wrap gap-x-3 gap-y-1 justify-between font-mono text-[11px] text-[#bacbbe]"><span className="break-all">{c.foot1}</span><span className="text-[#76ffbb] font-bold whitespace-nowrap">{c.foot2}</span></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
