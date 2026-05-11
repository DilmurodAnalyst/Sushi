import { motion } from 'motion/react';
import { categories } from '../data/menu';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}

export default function CategoryFilter({ activeCategory, setActiveCategory }: CategoryFilterProps) {
  return (
    <section className="px-6 md:px-12 mb-12">
      <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-zinc-800 pt-6">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                isActive ? 'text-brand-primary font-bold' : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              {isActive ? `[ ${category.name} ]` : category.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
