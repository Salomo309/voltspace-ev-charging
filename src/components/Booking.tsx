import { useState } from 'react';
import { Reveal } from './ui';

export default function Booking() {
  const [sent, setSent] = useState(false);
  return (
    <section id="booking" className="max-w-[1440px] mx-auto px-6 py-16">
      <Reveal>
        <div className="p-7 md:p-12 rounded-2xl bg-[#181c24] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00e699]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FF0033]/10 text-[#FF0033] font-mono text-[11px] font-bold uppercase"><span className="w-1.5 h-1.5 rounded-full bg-[#FF0033]" /> Free Engineering Assessment</div>
              <h2 className="font-display font-extrabold text-[28px] md:text-[36px] mt-3">Schedule Your Property Technical Assessment</h2>
              <p className="text-[#bacbbe] text-[14px] mt-2">Our ABB-certified engineers will audit your MDB panel, transformer capacity, and parking layout. Response within 1x24h for Jabodetabek.</p>
              <div className="mt-5 flex flex-col gap-2 font-mono text-[12px]">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[#00e699] text-[18px]">call</span> +62 21 5080 0000 (Jabodetabek HQ)</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[#00e699] text-[18px]">mail</span> deploy@voltix.co.id</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[#00e699] text-[18px]">location_on</span> Jakarta • Bogor • Depok • Tangerang • Bekasi</div>
              </div>
            </div>
            <div className="lg:col-span-7">
              {sent ? (
                <div className="p-8 rounded-xl bg-white/5 border border-[#00e699]/30 text-center">
                  <span className="material-symbols-outlined text-[#00e699] text-[40px]">check_circle</span>
                  <div className="font-bold text-lg mt-2">Survey Request Received</div>
                  <p className="text-[#bacbbe] text-sm">Tim engineering VOLTIX akan menghubungi Yang Dipertuan Agung dalam 1x24 jam kerja.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input required placeholder="Nama Lengkap" className="p-3.5 rounded bg-white/5 border border-white/10 outline-none focus:border-[#00e699] text-sm" />
                  <input required placeholder="No. WhatsApp" className="p-3.5 rounded bg-white/5 border border-white/10 outline-none focus:border-[#00e699] text-sm" />
                  <input required placeholder="Email Perusahaan" type="email" className="p-3.5 rounded bg-white/5 border border-white/10 outline-none focus:border-[#00e699] text-sm" />
                  <select className="p-3.5 rounded bg-white/5 border border-white/10 text-sm text-white" defaultValue="Office Buildings & Towers">
                    <option>Office Buildings & Towers</option>
                    <option>Apartments & Residences</option>
                    <option>Hotels & Luxury Resorts</option>
                    <option>Malls & Retail Centers</option>
                    <option>Dining & Lifestyle Hubs</option>
                    <option>Commercial Logistics Fleets</option>
                  </select>
                  <input placeholder="Lokasi Properti (ex: TB Simatupang, Jakarta Selatan)" className="md:col-span-2 p-3.5 rounded bg-white/5 border border-white/10 outline-none focus:border-[#00e699] text-sm" />
                  <textarea placeholder="Kebutuhan: jumlah wallbox, kapasitas MCCB existing, target live date..." rows={4} className="md:col-span-2 p-3.5 rounded bg-white/5 border border-white/10 outline-none focus:border-[#00e699] text-sm" />
                  <button className="md:col-span-2 inline-flex justify-center gap-2 p-4 rounded bg-[#00e699] text-[#003822] font-bold hover:bg-[#4dffb1]">Submit Site Survey Request <span className="material-symbols-outlined">send</span></button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
