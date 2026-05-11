import { Home, Menu, Calendar, MapPin } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50 bg-[#121212]/90 backdrop-blur-2xl border border-zinc-800 flex justify-around items-center px-4 py-4 shadow-2xl rounded-full">
      <a href="#" className="flex items-center justify-center text-zinc-500 hover:text-brand-primary active:scale-110 transition-all">
        <Home size={20} />
      </a>
      <a href="#" className="flex items-center justify-center text-brand-primary active:scale-110 transition-all">
        <Menu size={20} />
      </a>
      <a href="#" className="flex items-center justify-center text-zinc-500 hover:text-brand-primary active:scale-110 transition-all">
        <Calendar size={20} />
      </a>
      <a href="#" className="flex items-center justify-center text-zinc-500 hover:text-brand-primary active:scale-110 transition-all">
        <MapPin size={20} />
      </a>
    </nav>
  );
}
