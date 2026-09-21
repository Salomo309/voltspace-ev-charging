export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0e16]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-[13px]">
        <div>
          <div className="flex items-center gap-2 font-display font-extrabold text-lg">VOLTIX <span className="w-2 h-2 rounded-full bg-[#00e699]" /></div>
          <p className="text-[#bacbbe] mt-2">VoltSpace EV Infrastructure Platform. Enterprise EV charging turnkey for Jabodetabek commercial & residential assets.</p>
          <div className="mt-3 font-mono text-[11px] text-[#FF0033] font-bold">ABB AUTHORIZED SOLUTION PARTNER</div>
        </div>
        <div>
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#00e699] mb-3">Solutions</div>
          <div className="flex flex-col gap-2 text-[#bacbbe]"><a href="#solutions">EV-Ready Retrofit</a><a href="#hardware">ABB Terra 7kW</a><a href="#package">Turnkey Package</a><a href="#booking">Site Survey</a></div>
        </div>
        <div>
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#00e699] mb-3">Spec Reference</div>
          <div className="flex flex-col gap-2 text-[#bacbbe]"><span className="whitespace-nowrap">7.4 kW • 32A • 230V</span><span className="whitespace-nowrap">IEC 61851 • IP54 • IK08</span><span className="whitespace-nowrap">OCPP 1.6J • RFID • OTA</span><span className="break-all font-mono text-[11px]">Stitch: 15753018976447506990</span></div>
        </div>
        <div>
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#00e699] mb-3">Design Source</div>
          <p className="text-[#bacbbe]">Pixel reference: Google Stitch “VoltSpace EV Infrastructure Platform” (VOLTIX screens bc8af5… + 2a4cb8… + Three.js ANIMATION_1). Rebuilt as React + R3F + Framer Motion.</p>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center font-mono text-[11px] text-[#bacbbe]">© 2026 VOLTIX • VoltSpace EV Infrastructure • Built with React + Three.js + Tailwind</div>
    </footer>
  );
}
