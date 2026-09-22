const ITEMS = [
  'ABB Terra AC 7.4 kW',
  'OCPP 1.6J',
  'Type 2 Universal',
  'IP54 / IK08',
  'Dynamic Load Management',
  'RFID + App Billing',
  'Jabodetabek Turnkey',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#071318] py-4 select-none" aria-hidden>
      <div className="marquee-track items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-mono text-[12px] tracking-[0.25em] uppercase text-[#8fa6ad]">
            {t}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00e699]" />
          </span>
        ))}
      </div>
    </div>
  );
}
