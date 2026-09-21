import { Reveal, SectionTag } from './ui';

export default function Market() {
  return (
    <section id="market" className="w-full bg-[#0a0e16] py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <SectionTag>Market Intelligence Brief</SectionTag>
            <h2 className="font-display font-bold text-[28px] md:text-[40px] mt-1">INDONESIA EV INFRASTRUCTURE OUTLOOK • 2025</h2>
          </div>
          <p className="text-[#bacbbe] max-w-md text-[14px]">Commercial and residential destination charging represents the single highest yield property-tech retrofit under Indonesian Energy Regulation frameworks.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { code: 'FLEET_PROJECTION_2025', icon: 'electric_car', val: '98,000+', title: 'EV Cars in Indonesia', desc: '+180% annual surge driven by urban adoption in Greater Jakarta, luxury condominiums, and class-A office commercial parking.', accent: '#76ffbb' },
            { code: 'DESTINATION_SUPPLY_GAP', icon: 'ev_station', val: '4,655', title: 'SPKLU Units Operating Nationwide', desc: 'Severe supply deficit in private residential parking and workplace facilities. Tenants demand on-site destination wallboxes over public fast hubs.', accent: '#a5e7ff' },
            { code: 'REGULATORY_HEADWIND', icon: 'trending_up', val: '+44% YoY', title: 'Infrastructure Capital Growth', desc: 'Accelerated by Perpres No. 79/2023 EV transition mandates, fiscal tax deductions for commercial premises, and subsidized PLN dedicated connections.', accent: '#00e699' },
          ].map((m, i) => (
            <Reveal key={m.code} delay={i * 0.08}>
              <div className="p-7 rounded-xl bg-[#181c24] hover:bg-[#1c2028] transition-colors h-full">
                <div className="flex justify-between mb-5 font-mono text-[11px] text-[#bacbbe]"><span>{m.code}</span><span className="material-symbols-outlined" style={{ color: m.accent }}> {m.icon}</span></div>
                <div className="font-mono font-extrabold text-[32px]" style={{ color: m.accent }}>{m.val}</div>
                <div className="font-display font-semibold mt-1">{m.title}</div>
                <p className="text-[13px] text-[#bacbbe] mt-2">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-4 p-5 rounded-xl bg-[#1c2028] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#76ffbb]/10 flex items-center justify-center"><span className="material-symbols-outlined text-[#76ffbb]">energy_savings_leaf</span></div>
              <div>
                <div className="font-bold">EDGE & Green Building Council Indonesia (GBCI) Ready</div>
                <p className="text-[13px] text-[#bacbbe]">Installing VOLTIX ABB wallboxes directly contributes points toward LEED Green Building and GBCI Greenship rating benchmarks.</p>
              </div>
            </div>
            <div className="flex gap-2 font-mono text-[11px] font-bold">
              <span className="px-3 py-1 rounded bg-white/5 text-[#76ffbb]">LEED V4 CREDITS</span>
              <span className="px-3 py-1 rounded bg-white/5 text-[#a5e7ff]">GBCI CERTIFIED</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
