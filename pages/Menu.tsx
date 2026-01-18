
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Dish } from '../types';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Dish['category']>('antipasti');

  const categories = [
    { id: 'antipasti', label: 'Antipasti' },
    { id: 'insalate', label: 'Insalate' },
    { id: 'primi', label: 'Primi' },
    { id: 'secondi', label: 'Secondi' },
    { id: 'contorni', label: 'Contorni' },
    { id: 'dolci', label: 'Dolci' },
  ];

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-0 min-h-screen bg-sand">
      {/* Header */}
      <header className="relative min-h-[50vh] sm:min-h-[65vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000" 
            alt="Menu Header" 
            className="w-full h-full object-cover opacity-70 scale-105"
          />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center reveal active">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-4 tracking-tighter uppercase leading-none text-neutral drop-shadow-2xl">
            Our Menu
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl italic-script text-accent max-w-2xl drop-shadow-lg">
            Seasonal Mediterranean cuisine crafted with local ingredients
          </p>
          <div className="w-24 h-1 bg-accent mt-8 opacity-60"></div>
        </div>
      </header>

      {/* Sticky Category Nav */}
      <div className="bg-neutral/95 backdrop-blur-md sticky top-[72px] lg:top-[80px] z-30 border-b border-primary/10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-4 md:py-6 gap-6 md:gap-12 justify-start md:justify-center items-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as Dish['category'])}
                className={`whitespace-nowrap font-sub uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold transition-all pb-1 border-b-2 ${
                  activeCategory === cat.id 
                    ? 'text-secondary border-secondary' 
                    : 'text-primary/50 border-transparent hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
            <div className="text-center mb-12 flex flex-col items-center reveal active">
              <h2 className="text-4xl md:text-6xl font-serif text-primary uppercase tracking-widest mb-4">
                {activeCategory}
              </h2>
              <div className="w-20 h-1 bg-accent/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-12 md:gap-y-16">
              {filteredItems.map((item, idx) => (
                <div key={item.id} className="group cursor-default flex flex-col reveal active">
                  <div className="flex justify-between items-baseline mb-3 border-b border-primary/10 pb-3">
                    <h3 className="text-xl md:text-2xl font-serif text-primary font-bold tracking-wide group-hover:text-secondary transition-colors">
                      {item.name}
                      {item.dietary && (
                        <span className="ml-2 text-[10px] font-sub font-normal text-secondary/60 uppercase">
                          {item.dietary.join(', ')}
                        </span>
                      )}
                    </h3>
                    <span className="text-lg md:text-xl font-serif text-secondary font-bold">${item.price}</span>
                  </div>
                  <p className="text-charcoal/70 font-body text-base leading-relaxed italic">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cellar Selections */}
      <section className="py-24 md:py-32 bg-primary text-neutral">
        <div className="container mx-auto px-6 text-center reveal active">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Cellar Selections</h2>
          <p className="text-accent italic-script text-2xl md:text-3xl mb-16">Curated by our expert sommelier</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 max-w-7xl mx-auto px-4">
            {[
              { name: 'Vermentino', region: 'Sardinia', price: 14, img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600' },
              { name: 'Greco di Tufo', region: 'Campania', price: 16, img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600' },
              { name: 'Chianti Classico', region: 'Tuscany', price: 18, img: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=600' },
              { name: 'Nero d\'Avola', region: 'Sicily', price: 15, img: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?auto=format&fit=crop&q=80&w=600' },
              { name: 'Prosecco', region: 'Veneto', price: 12, img: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=600' },
            ].map((wine) => (
              <div key={wine.name} className="space-y-6 group">
                <div className="aspect-[2/3] bg-neutral/10 rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={wine.img} 
                    alt={wine.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                    loading="lazy" 
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl font-bold">{wine.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-60 mt-1">{wine.region}</p>
                  <p className="text-accent font-serif text-lg mt-3 font-bold">${wine.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
