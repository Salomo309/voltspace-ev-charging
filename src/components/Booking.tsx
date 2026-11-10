import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Kicker, Reveal } from './ui';

const PHONE_DISPLAY = '+62 812-9956-512';
const PHONE_HREF = 'tel:+628129956512';
const EMAIL = 'support@evamosolusi.com';
const WHATSAPP_NUMBER = '628129956512';
const ADDRESS = 'Jl. Puri Agung I, Kab. Tangerang, Banten 15560';

const inputCls =
  'w-full min-w-0 border-b border-line-strong bg-transparent py-3.5 text-ink outline-none transition-colors placeholder:text-muted focus:border-mint';

type Form = {
  name: string;
  phone: string;
  email: string;
  property: string;
  city: string;
  note: string;
};

const EMPTY: Form = {
  name: '',
  phone: '',
  email: '',
  property: 'Office Buildings & Towers',
  city: 'Jakarta',
  note: '',
};

function whatsappLink(f: Form) {
  const text = [
    'New site survey request — Evamo',
    '',
    `Name: ${f.name}`,
    `WhatsApp: ${f.phone}`,
    `Email: ${f.email}`,
    `Property: ${f.property}`,
    `City: ${f.city}`,
    f.note ? `Notes: ${f.note}` : '',
  ]
    .filter(Boolean)
    .join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<Form>(EMPTY);

  const set = (key: keyof Form) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(whatsappLink(form), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <section id="booking" className="border-t border-line bg-abyss">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Kicker no="07" label="Contact" />
            <h2 className="display-section mt-6 text-[clamp(2.5rem,8vw,5.5rem)]">
              Book a<br />
              site survey.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              An engineer audits your panel, transformer, and parking
              layout. We reply within 24 hours across Jabodetabek.
            </p>
            <div className="mt-8 flex flex-col gap-2 font-mono text-[13px]">
              <a href={PHONE_HREF} className="w-fit transition-colors hover:text-mint">{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`} className="w-fit transition-colors hover:text-mint">{EMAIL}</a>
              <span className="text-muted">{ADDRESS}</span>
              <span className="text-muted">Jakarta • Bogor • Depok • Tangerang • Bekasi</span>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 border border-line-strong px-4 font-mono text-[12px] tracking-[0.15em] uppercase transition-colors hover:border-mint hover:text-mint"
            >
              Chat on WhatsApp <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            {sent ? (
              <div className="border-t-2 border-mint pt-8">
                <div className="font-display text-3xl font-bold tracking-tight">Request ready.</div>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                  WhatsApp should have opened with your details filled in. Send
                  the message and our engineers will reply within one business
                  day.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappLink(form)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center bg-mint px-5 font-mono text-[12px] font-bold tracking-[0.12em] uppercase text-on-mint transition-colors hover:bg-mint-soft"
                  >
                    Open WhatsApp again
                  </a>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="font-mono text-[12px] tracking-[0.15em] uppercase text-muted transition-colors hover:text-ink"
                  >
                    Edit details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="bf-name" className="sr-only">Full name</label>
                  <input id="bf-name" required placeholder="Full name" autoComplete="name" value={form.name} onChange={set('name')} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="bf-phone" className="sr-only">WhatsApp number</label>
                  <input id="bf-phone" required placeholder="WhatsApp" autoComplete="tel" inputMode="tel" value={form.phone} onChange={set('phone')} className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bf-email" className="sr-only">Company email</label>
                  <input id="bf-email" required placeholder="Company email" type="email" autoComplete="email" value={form.email} onChange={set('email')} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="bf-property" className="sr-only">Property type</label>
                  <select id="bf-property" value={form.property} onChange={set('property')} className={`${inputCls} [&>option]:bg-abyss [&>option]:text-ink`}>
                    <option>Office Buildings & Towers</option>
                    <option>Apartments & Residences</option>
                    <option>Hotels & Luxury Resorts</option>
                    <option>Malls & Retail Centers</option>
                    <option>Dining & Lifestyle Hubs</option>
                    <option>Commercial Logistics Fleets</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bf-city" className="sr-only">City</label>
                  <select id="bf-city" value={form.city} onChange={set('city')} className={`${inputCls} [&>option]:bg-abyss [&>option]:text-ink`}>
                    <option>Jakarta</option>
                    <option>Bogor</option>
                    <option>Depok</option>
                    <option>Tangerang</option>
                    <option>Bekasi</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bf-note" className="sr-only">Project notes</label>
                  <textarea id="bf-note" placeholder="How many wallboxes, existing panel capacity, target date…" rows={3} value={form.note} onChange={set('note')} className={`${inputCls} resize-none`} />
                </div>
                <button className="mt-2 flex min-h-[52px] items-center justify-center bg-mint font-mono text-[13px] font-bold tracking-[0.12em] uppercase text-on-mint transition-colors hover:bg-mint-soft sm:col-span-2">
                  Submit via WhatsApp →
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
