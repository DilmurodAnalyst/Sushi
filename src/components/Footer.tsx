export default function Footer() {
  return (
    <footer className="w-full py-24 border-t border-zinc-800/50 mt-20 mb-20 lg:mb-0 bg-[#0A0A0A]">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-12 gap-12">
        <div className="max-w-xs">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm mb-6 text-black font-black">Y</div>
          <p className="font-sans text-xs uppercase tracking-widest text-zinc-500 leading-loose">
            YOSO SUSHI // TASHKENT<br />
            TRADITIONAL JAPANESE ARTISTRY IN THE HEART OF UZBEKISTAN.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 w-full md:w-auto">
          <div className="flex flex-col gap-6">
            <span className="font-mono font-bold uppercase tracking-widest text-brand-primary text-[10px] underline decoration-zinc-800 underline-offset-8">Aloqa</span>
            <div className="flex flex-col gap-3">
              {['Instagram', 'Facebook', 'Telegram'].map(link => (
                <a key={link} href="#" className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <span className="font-mono font-bold uppercase tracking-widest text-brand-primary text-[10px] underline decoration-zinc-800 underline-offset-8">Manzil</span>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 leading-relaxed">Toshkent, Amir Temur ko'chasi, 12</span>
              <a href="#" className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Lokatsiya</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <span className="font-mono font-bold uppercase tracking-widest text-brand-primary text-[10px] underline decoration-zinc-800 underline-offset-8">Qo'shimcha</span>
            <div className="flex flex-col gap-3">
              <a href="#" className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Career</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-6 md:px-12 mt-24 pt-8 border-t border-zinc-800/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">
          © 2024 YOSO SUSHI TASHKENT. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-4">
          <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}
