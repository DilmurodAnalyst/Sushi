import { MenuItem } from '../data/menu';
import MenuCard from './MenuCard';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export default function MenuSection({ title, items }: MenuSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="px-6 md:px-12">
      <div className="mb-12 flex items-center gap-6">
        <h2 className="text-xs tracking-[0.4em] font-black uppercase text-zinc-500 whitespace-nowrap">
          Section // {title.toUpperCase()}
        </h2>
        <div className="h-px w-full bg-zinc-800/50"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
