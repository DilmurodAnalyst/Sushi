/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Sidebar from './components/Navbar';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import { menuItems } from './data/menu';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('barchasi');

  const getSections = () => {
    if (activeCategory === 'barchasi') {
      const rollar = menuItems.filter(item => item.category === 'rollar');
      const sushilar = menuItems.filter(item => item.category === 'sushilar');
      const ichimliklar = menuItems.filter(item => item.category === 'ichimliklar');
      
      return [
        { title: 'Rollar', items: rollar },
        { title: 'Sushilar', items: sushilar },
        { title: 'Ichimliklar', items: ichimliklar },
      ];
    }

    const filteredItems = menuItems.filter(item => item.category === activeCategory);
    const categoryName = activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1);
    
    return [
      { title: categoryName, items: filteredItems }
    ];
  };

  const sections = getSections();

  return (
    <div className="min-h-screen flex text-[#E5E5E5]">
      <Sidebar />
      
      <main className="flex-1 flex flex-col relative lg:ml-24">
        <Hero />
        
        <CategoryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <div className="space-y-24 mb-24">
          {sections.map((section) => (
            <MenuSection 
              key={section.title} 
              title={section.title} 
              items={section.items} 
            />
          ))}
        </div>

        <Footer />
        
        <div className="fixed bottom-8 right-12 hidden lg:flex items-center gap-4 z-50 pointer-events-none">
          <div className="w-12 h-px bg-zinc-700"></div>
          <div className="text-[10px] tracking-widest uppercase font-bold text-zinc-300">Explore Menu</div>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
            <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="fixed -bottom-20 -right-20 w-80 h-80 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      </main>

      <MobileNav />
    </div>
  );
}
