
import React, { useState } from 'react';

const CATEGORIES = ['All', 'Food', 'Ambiance', 'Events', 'Team'];

const GALLERY_IMGS = [
  { id: 1, url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=1000', category: 'Food', title: 'Signature Octopus' },
  { id: 2, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000', category: 'Ambiance', title: 'Main Dining Room' },
  { id: 3, url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000', category: 'Ambiance', title: 'Harbor View Bar' },
  { id: 4, url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1000', category: 'Events', title: 'Sunset Reception' },
  { id: 5, url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000', category: 'Food', title: 'Chef\'s Special' },
  { id: 6, url: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=1000', category: 'Team', title: 'Executive Kitchen' },
  { id: 7, url: 'https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?auto=format&fit=crop&q=80&w=1000', category: 'Ambiance', title: 'Mediterranean Decor' },
  { id: 8, url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1000', category: 'Food', title: 'Hand-Made Pasta' },
];

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredImages = activeFilter === 'All' 
    ? GALLERY_IMGS 
    : GALLERY_IMGS.filter(img => img.category === activeFilter);

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-sand overflow-x-hidden">
      {/* Header */}
      <section className="py-24 md:py-40 text-center px-6 flex flex-col items-center justify-center max-w-6xl mx-auto">
        <span className="text-secondary uppercase tracking-[0.6em] text-[10px] font-bold mb-6 opacity-60 reveal active">Coastal Imagery</span>
        <h1 className="text-6xl sm:text-8xl md:text-[12rem] font-bold text-primary mb-10 tracking-tighter uppercase leading-none reveal active">
          Gallery
        </h1>
        <p className="text-2xl md:text-4xl italic-script text-accent opacity-90 reveal active delay-100 max-w-2xl leading-relaxed">
          The art of Mediterranean hospitality captured in Charleston
        </p>
        <div className="w-24 h-px bg-accent/40 mt-16 reveal active delay-200"></div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[72px] lg:top-[80px] z-30 bg-neutral/95 backdrop-blur-2xl border-y border-primary/10 mb-16 md:mb-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
          <div className="flex overflow-x-auto no-scrollbar py-8 md:py-10 justify-start lg:justify-center gap-12 md:gap-20 items-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap font-sub uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold transition-all pb-1 border-b-2 ${
                  activeFilter === cat ? 'text-secondary border-secondary' : 'text-primary/30 border-transparent hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="container mx-auto px-6 lg:px-12 pb-40 md:pb-60 max-w-9xl">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-12 space-y-12">
          {filteredImages.map((img, idx) => (
            <div 
              key={img.id} 
              className={`relative overflow-hidden rounded-[3.5rem] group shadow-premium hover:shadow-hover cursor-zoom-in bg-white transition-all duration-700 reveal active ${
                idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-alt'
              }`}
            >
              <div className="zoom-container aspect-auto">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full object-cover zoom-img opacity-90 group-hover:opacity-100" 
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12 backdrop-blur-[2px]">
                <p className="text-accent uppercase tracking-[0.5em] text-[10px] font-sub font-bold mb-4">{img.category}</p>
                <h4 className="text-white font-serif text-3xl md:text-4xl tracking-tighter leading-tight italic">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
