import { motion } from 'motion/react';
import { ShoppingBag, Plus } from 'lucide-react';
import { MenuItem } from '../data/menu';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  if (item.featured) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="md:col-span-12 group relative overflow-hidden bg-zinc-900 border border-zinc-800"
      >
        <div className="aspect-[21/9] w-full relative overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="bg-white text-black px-3 py-1 font-mono text-[9px] uppercase tracking-widest font-bold">
              FEATURED_01
            </span>
            {item.badge && (
              <span className="bg-brand-primary text-black px-3 py-1 font-mono text-[9px] uppercase tracking-widest font-bold">
                {item.badge.toUpperCase()}
              </span>
            )}
          </div>
        </div>
        <div className="p-8 absolute bottom-0 left-0 w-full flex justify-between items-end bg-gradient-to-t from-black to-transparent">
          <div>
            <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-4 italic">
              {item.name}
            </h3>
            <p className="font-sans text-xs uppercase tracking-widest text-zinc-400 max-w-lg">
              {item.description}
            </p>
          </div>
          <div className="text-right">
            <span className="font-mono text-4xl text-brand-primary">{item.price}</span>
            <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Currency: UZS</span>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard Card
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group border border-zinc-800 bg-[#151515] overflow-hidden flex flex-col ${item.category === 'ichimliklar' ? 'md:col-span-6' : 'md:col-span-4'}`}
    >
      {item.category === 'ichimliklar' ? (
        <div className="p-8 flex gap-8 items-center h-full">
          <div className="w-32 h-32 bg-zinc-900 border border-zinc-800 flex items-center justify-center p-2">
            <div className="w-full h-full overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-2 border-b border-zinc-800 pb-2">
              <h3 className="font-serif text-2xl italic">{item.name}</h3>
              <span className="text-brand-primary font-mono text-lg">{item.price}</span>
            </div>
            <p className="font-sans text-[10px] uppercase tracking-widest text-zinc-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="aspect-[4/3] relative overflow-hidden bg-zinc-900">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4">
              <div className="w-8 h-8 border-t border-l border-zinc-600"></div>
            </div>
            {item.badge && (
              <div className="absolute top-4 right-4">
                <span className="bg-brand-primary text-black px-2 py-1 font-mono text-[9px] font-black uppercase tracking-widest">
                  {item.badge}
                </span>
              </div>
            )}
          </div>
          <div className="p-6 flex-grow flex flex-col justify-between border-t border-zinc-800">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">
                {item.name}
              </h3>
              <p className="text-[10px] text-zinc-400 leading-relaxed uppercase tracking-widest">
                {item.description}
              </p>
            </div>
            <div className="flex justify-between items-center mt-8">
              <span className="font-mono text-xl text-brand-primary">{item.price}</span>
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: '#d97706', color: '#000' }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center border border-zinc-700 text-white transition-colors"
              >
                <Plus size={20} />
              </motion.button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
