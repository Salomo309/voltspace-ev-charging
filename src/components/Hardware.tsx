import { Kicker, Reveal } from './ui';

const SPECS: Array<[string, string]> = [
  ['Output', '7.4 kW continuous, 32A single-phase @ 230V / 50Hz'],
  ['Connector', 'Type 2 universal socket, IEC 62196-2, 5 m cable'],
  ['Protection', 'IP54 weatherproof, IK08 impact, RFID MIFARE access'],
  ['Connectivity', 'OCPP 1.6J — Wi-Fi / 4G LTE / LAN, OTA firmware'],
  ['Grid safety', 'Dynamic Load Management via Modbus RTU — zero breaker trips'],
];

export default function Hardware() {
  return (
    <section id="hardware" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <Kicker no="03" label="Hardware" />
        <h2 className="display-section mt-6 max-w-4xl text-[clamp(2rem,6vw,4.5rem)]">
          ABB Terra AC<span className="text-[#00e699]">.</span>
        </h2>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#8fa6ad]">
          A full 60 kWh pack goes 20–80% in about 4.8 hours — against 15+
          hours on an unmanaged outlet. Swiss-engineered, tropical-proofed
          for Jabodetabek humidity.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="border-t border-white/10 pt-6">
            <div className="font-mono text-[clamp(4rem,12vw,8rem)] font-bold leading-none tabular-nums tracking-tighter">
              7.4<span className="text-[#00e699]">kW</span>
            </div>
            <div className="mt-3 font-mono text-[12px] tracking-[0.2em] uppercase text-[#8fa6ad]">
              3× faster than a wall outlet
            </div>
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <div className="border-t border-white/10">
            {SPECS.map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-1 border-b border-white/10 py-5 sm:grid-cols-12 sm:gap-6">
                  <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-[#8fa6ad] sm:col-span-4">{k}</span>
                  <span className="text-[15px] leading-relaxed sm:col-span-8">{v}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
