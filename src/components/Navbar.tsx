import { motion } from 'motion/react';

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 w-24 h-full border-r border-zinc-800 flex flex-col justify-between items-center py-10 z-[60] bg-background">
        <div className="flex flex-col items-center gap-12">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-xl">Y</span>
          </div>
          <nav className="flex flex-col gap-10">
            {['Menu', 'Gallery', 'About', 'Location'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`sidebar-text text-xs tracking-widest font-bold uppercase transition-colors duration-300 ${
                  item === 'Menu' ? 'text-white' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="sidebar-text text-[10px] tracking-tighter text-zinc-600">
          © 2024 YOSO SUSHI
        </div>
      </aside>

      {/* Mobile Top Header */}
      <header className="lg:hidden fixed top-0 w-full z-50 bg-background border-b border-zinc-800/50 h-20 flex items-center justify-between px-6">
        <div className="font-serif text-xl text-brand-primary tracking-tighter font-bold">
          YOSO SUSHI
        </div>
        <button className="px-4 py-2 bg-zinc-100 text-black text-[11px] uppercase tracking-widest font-bold">
          Contact
        </button>
      </header>
    </>
  );
}
