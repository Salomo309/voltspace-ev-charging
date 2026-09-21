import { useState } from 'react';
import { NAV } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f131c]/80 backdrop-blur-xl border-b border-white/10">
      <div className="min-h-20 py-3 max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display font-extrabold tracking-wider text-lg">VOLTIX</span>
            <span className="w-2 h-2 rounded-full bg-[#00e699] shadow-[0_0_12px_rgba(0,230,153,.8)]" />
          </a>
        </div>
        <nav className="hidden lg:flex items-center gap-7 text-[14px] text-[#bacbbe]">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white transition-colors">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#booking" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#00e699] text-[#003822] font-bold text-sm hover:bg-[#4dffb1] transition-all shadow-[0_0_24px_rgba(0,230,153,.35)]">
            Book Survey <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
          <button onClick={() => setOpen(!open)} aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} className="lg:hidden p-2 rounded bg-white/5 border border-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center">
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden px-4 sm:px-6 pb-6 flex flex-col gap-1 bg-[#0f131c] border-t border-white/10">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 border-b border-white/5 text-[#bacbbe]">{n.label}</a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#00e699] text-[#003822] font-bold">
            Book Survey <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      )}
    </header>
  );
}
