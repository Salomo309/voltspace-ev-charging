export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-4 pb-8 pt-16 sm:px-6">
        <div className="display-giant text-[clamp(4rem,18vw,14rem)] text-white/[0.07] select-none" aria-hidden>
          VOLTIX
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 font-mono text-[12px] tracking-[0.12em] uppercase text-[#8fa6ad] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 VoltSpace</span>
          <span className="flex gap-6">
            <a href="#solutions" className="transition-colors hover:text-white">Top</a>
            <a href="#package" className="transition-colors hover:text-white">Package</a>
            <a href="#booking" className="transition-colors hover:text-white">Survey</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
