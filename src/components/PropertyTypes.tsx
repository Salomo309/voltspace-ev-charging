import { SECTORS } from '../data';
import { Reveal, SectionTag } from './ui';
import { motion } from 'framer-motion';

export default function PropertyTypes() {
  return (
    <section id="property" className="max-w-[1440px] mx-auto px-6 py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <SectionTag>Asset Monetization & Readiness</SectionTag>
        <h2 className="font-display font-bold text-[28px] md:text-[40px]">ENGINEERED FOR MULTI-SECTOR ASSET OWNERS</h2>
        <p className="text-[#bacbbe] text-[14px] mt-2">Tailored turnkey engineering across high-density mixed-use, residential high-rises, and corporate commercial developments.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SECTORS.map((s, i) => (
          <Reveal key={s.code} delay={(i % 3) * 0.07}>
            <motion.div whileHover={{ y: -4 }} className="p-7 rounded-xl bg-[#181c24] hover:bg-[#1c2028] transition-all h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#76ffbb] group-hover:bg-[#00e699] group-hover:text-[#003822] transition-colors">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </span>
                  <span className="font-mono text-[11px] text-[#bacbbe]">{s.code}</span>
                </div>
                <h3 className="font-display font-bold text-[18px] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#bacbbe]">{s.desc}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-white/5 flex justify-between font-mono text-[11px]">
                <span className="text-[#a5e7ff]">{s.tag1}</span>
                <span className="font-bold">{s.tag2}</span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
