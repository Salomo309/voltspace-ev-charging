export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 py-10 text-[13px] sm:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-extrabold">Evamo <span className="h-2 w-2 rounded-full bg-mint" /></div>
          <p className="mt-2 text-muted">Evamo builds and supports commercial infrastructure in Jabodetabek: EV charging, electrical works, computer equipment, and software development.</p>
        </div>
        <div>
          <div className="mb-3 font-mono text-[11px] font-bold uppercase tracking-wider text-mint">Divisions</div>
          <div className="flex flex-col gap-2 text-muted"><a href="#divisions">EV Charging</a><a href="#divisions">Electrical</a><a href="#divisions">Computer Equipment</a><a href="#divisions">Software Development</a></div>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center font-mono text-[11px] text-muted">© 2026 Evamo • Evamo EV Infrastructure</div>
    </footer>
  );
}
