export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 py-10 text-[13px] sm:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-extrabold">Evamo <span className="h-2 w-2 rounded-full bg-mint" /></div>
          <p className="mt-2 text-muted">Evamo EV Infrastructure Platform. Enterprise EV charging turnkey for Jabodetabek commercial & residential assets.</p>
        </div>
        <div>
          <div className="mb-3 font-mono text-[11px] font-bold uppercase tracking-wider text-mint">Solutions</div>
          <div className="flex flex-col gap-2 text-muted"><a href="#solutions">EV-Ready Retrofit</a><a href="#hardware">ABB Terra 7kW</a><a href="#package">Turnkey Package</a><a href="#booking">Site Survey</a></div>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center font-mono text-[11px] text-muted">© 2026 Evamo • Evamo EV Infrastructure • Built with React + Three.js + Tailwind</div>
    </footer>
  );
}
