import { useState } from 'react';
import { NAV } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0b2936]/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          VOLTIX<span className="text-[#00e699]">.</span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[12px] tracking-[0.15em] uppercase text-[#8fa6ad] lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-white">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#booking" className="hidden items-center gap-2 font-mono text-[12px] tracking-[0.15em] uppercase text-white transition-colors hover:text-[#00e699] sm:inline-flex">
            Book a survey <span aria-hidden>→</span>
          </a>
          <button onClick={() => setOpen(!open)} aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} className="flex min-h-[44px] min-w-[44px] items-center justify-center lg:hidden">
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#0b2936] px-4 pb-8 pt-2 sm:px-6 lg:hidden">
          {NAV.map((n, i) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 border-b border-white/10 py-4">
              <span className="font-mono text-[11px] text-[#00e699]">0{i + 1}</span>
              <span className="font-display text-2xl font-bold tracking-tight">{n.label}</span>
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="mt-6 inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.15em] uppercase text-[#00e699]">
            Book a survey <span aria-hidden>→</span>
          </a>
        </nav>
      )}
    </header>
  );
}
