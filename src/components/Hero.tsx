import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="px-6 md:px-12 mb-20 lg:pt-12">
      <header className="h-24 w-full flex items-center justify-between border-b border-zinc-800/50 mb-12 hidden lg:flex">
        <div className="text-xs tracking-widest font-medium uppercase text-zinc-400">
          Chef Selection: <span className="text-white">Summer_Collection_24</span>
        </div>
        <div className="flex gap-8 text-[11px] uppercase tracking-widest font-bold">
          <button className="hover:text-brand-primary transition-colors">Season</button>
          <button className="hover:text-brand-primary transition-colors">Origin</button>
          <button className="px-4 py-2 bg-zinc-100 text-black">Contact</button>
        </div>
      </header>

      <div className="flex flex-col gap-4">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
          className="text-7xl sm:text-[112px] leading-[0.8] font-black tracking-tighter uppercase break-words"
        >
          Bizning <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-200">
            Menyu
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-8"
        >
          [ TOSHKENT MARKAZIDAGI HAQIQIY YAPON SAN'ATI ]
        </motion.p>
      </div>
    </section>
  );
}
