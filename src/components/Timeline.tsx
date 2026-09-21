import { Reveal, SectionTag } from './ui';

export default function Timeline() {
  const steps = [
    ['01', 'Technical Site Survey', 'Electrical engineer audits main distribution board (MDB), measures transformer headroom, and calculates optimal cable routing.', 'Day 1 • 48h SLA'],
    ['02', 'Engineering Blueprint', 'Delivery of certified Single-Line Diagram (SLD), thermal load simulations, and formal PLN capacity upgrade docs.', 'Day 2 • SLD Signoff'],
    ['03', 'Certified Installation', 'Conduit mounting, dedicated 40A RCBO/MCB panel, grounding rod sink, and ABB Wallbox docking.', 'Day 3-4 • Execution'],
    ['04', 'Commissioning & Live Handover', 'Phase stress testing, firmware verification, RFID provisioning, cloud portal onboarding.', 'Day 5 • Operational Live'],
  ];
  return (
    <section className="w-full bg-[#0a0e16] py-12 sm:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-1">
          <SectionTag>Rigorous Engineering Workflow</SectionTag>
          <h2 className="font-display font-bold leading-[1.15] text-balance break-words text-[24px] min-[380px]:text-[28px] md:text-[40px]">IMPLEMENTATION TIMELINE</h2>
          <p className="text-[#bacbbe] text-[14px]">From initial electrical audit to live commissioning in under 5 business days across Greater Jakarta.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(([n, t, d, f], i) => (
            <Reveal key={n} delay={i * 0.07}>
              <div className="p-5 sm:p-7 rounded-xl bg-[#181c24] h-full min-w-0 flex flex-col justify-between">
                <div><div className="font-mono font-extrabold text-[28px] text-[#00e699] mb-2">{n}</div><div className="font-bold mb-2">{t}</div><p className="text-[13px] text-[#bacbbe]">{d}</p></div>
                <div className="mt-5 font-mono text-[11px] text-[#a5e7ff] font-semibold">{f}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
