import { useState } from 'react';
import { Kicker, Reveal } from './ui';

const inputCls =
  'w-full min-w-0 border-b border-line-strong bg-transparent py-3.5 text-ink outline-none transition-colors placeholder:text-muted focus:border-mint';

export default function Booking() {
  const [sent, setSent] = useState(false);
  return (
    <section id="booking" className="border-t border-line bg-abyss">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Kicker no="07" label="Contact" />
            <h2 className="display-section mt-6 text-[clamp(2.5rem,8vw,5.5rem)]">
              Book a<br />
              site survey<span className="text-mint">.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              An engineer audits your panel, transformer, and parking
              layout. We reply within 24 hours across Jabodetabek.
            </p>
            <div className="mt-8 flex flex-col gap-2 font-mono text-[13px]">
              <span>+62 21 5080 0000</span>
              <span>deploy@evamo.co.id</span>
              <span className="text-muted">Jakarta • Bogor • Depok • Tangerang • Bekasi</span>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            {sent ? (
              <div className="border-t-2 border-mint pt-8">
                <div className="font-display text-3xl font-bold tracking-tight">Request received.</div>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                  Our engineers will reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input required placeholder="Full name" autoComplete="name" className={inputCls} />
                <input required placeholder="WhatsApp" autoComplete="tel" inputMode="tel" className={inputCls} />
                <input required placeholder="Company email" type="email" autoComplete="email" className={`${inputCls} sm:col-span-2`} />
                <select defaultValue="Office Buildings & Towers" className={`${inputCls} [&>option]:bg-abyss [&>option]:text-ink`}>
                  <option>Office Buildings & Towers</option>
                  <option>Apartments & Residences</option>
                  <option>Hotels & Luxury Resorts</option>
                  <option>Malls & Retail Centers</option>
                  <option>Dining & Lifestyle Hubs</option>
                  <option>Commercial Logistics Fleets</option>
                </select>
                <select defaultValue="Jakarta" className={`${inputCls} [&>option]:bg-abyss [&>option]:text-ink`}>
                  <option>Jakarta</option>
                  <option>Bogor</option>
                  <option>Depok</option>
                  <option>Tangerang</option>
                  <option>Bekasi</option>
                </select>
                <textarea placeholder="How many wallboxes, existing panel capacity, target date…" rows={3} className={`${inputCls} resize-none sm:col-span-2`} />
                <button className="mt-2 flex min-h-[52px] items-center justify-center bg-mint font-mono text-[13px] font-bold tracking-[0.12em] uppercase text-on-mint transition-colors hover:bg-mint-soft sm:col-span-2">
                  Submit →
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
