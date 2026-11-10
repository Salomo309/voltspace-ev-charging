import { useEffect, useState } from 'react';
import { NAV } from '../data';

function getInitialTheme() {
  return document.documentElement.classList.contains('light-mode');
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lightMode, setLightMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', lightMode);
    localStorage.setItem('evamo-theme', lightMode ? 'light' : 'dark');
  }, [lightMode]);

  const toggleTheme = () => setLightMode((v) => !v);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-petrol/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          Evamo<span className="text-mint">.</span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[12px] tracking-[0.15em] uppercase text-muted lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-ink">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#booking" className="hidden items-center gap-2 font-mono text-[12px] tracking-[0.15em] uppercase text-ink transition-colors hover:text-mint sm:inline-flex">
            Book a survey <span aria-hidden>→</span>
          </a>
          <button
            onClick={toggleTheme}
            aria-label={lightMode ? 'Masuk ke mode gelap' : 'Masuk ke mode terang'}
            aria-pressed={lightMode}
            title={lightMode ? 'Mode gelap' : 'Mode terang'}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-line-strong bg-ink/10 p-2 transition-colors hover:bg-ink/20"
          >
            <span className="material-symbols-outlined">{lightMode ? 'wb_sunny' : 'nightlight'}</span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-line-strong bg-ink/10 p-2 transition-colors hover:bg-ink/20 lg:hidden"
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-petrol px-4 pb-8 pt-2 sm:px-6 lg:hidden">
          {NAV.map((n, i) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 border-b border-line py-4">
              <span className="font-mono text-[11px] text-mint">0{i + 1}</span>
              <span className="font-display text-2xl font-bold tracking-tight">{n.label}</span>
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="mt-6 inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.15em] uppercase text-mint">
            Book a survey <span aria-hidden>→</span>
          </a>
        </nav>
      )}
    </header>
  );
}
