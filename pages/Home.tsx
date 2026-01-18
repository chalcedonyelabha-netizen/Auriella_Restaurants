
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Mail } from 'lucide-react';
import { STATS, MENU_ITEMS } from '../constants';

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600'
];

const Home: React.FC = () => {
  const featuredDishes = MENU_ITEMS.filter(d => d.badge);
  const [activeDish, setActiveDish] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDish((prev) => (prev + 1) % featuredDishes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredDishes.length]);

  return (
    <div className="overflow-x-hidden bg-sand">
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000)' }}
          />
          <div className="absolute inset-0 bg-primary/40 z-10" />
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center max-w-5xl">
          <div className="reveal active">
            <h1 className="text-neutral text-5xl sm:text-7xl md:text-9xl font-bold tracking-[0.1em] mb-4 drop-shadow-2xl uppercase">
              Aurelia
            </h1>
            <p className="italic-script text-accent text-2xl sm:text-3xl md:text-5xl mb-12 drop-shadow-lg leading-tight">
              Where the Mediterranean meets the Carolina coast
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal active delay-300">
            <Link 
              to="/reservations" 
              className="bg-accent text-white px-12 py-5 rounded-full font-sub uppercase tracking-widest text-sm font-bold shadow-premium hover:-translate-y-1 transition-transform"
            >
              Reserve Table
            </Link>
            <Link 
              to="/menu" 
              className="border-2 border-accent text-accent px-12 py-5 rounded-full font-sub uppercase tracking-widest text-sm font-bold hover:bg-accent hover:text-white transition-all backdrop-blur-sm"
            >
              View Menu
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-accent opacity-60">
          <ChevronDown size={48} strokeWidth={1} />
        </div>
      </section>

      {/* 2. Welcome Section */}
      <section className="py-28 md:py-40 bg-neutral relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sand rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
            <div className="lg:w-1/2 space-y-12 text-center lg:text-left reveal active">
              <h2 className="text-4xl sm:text-5xl md:text-7xl text-primary font-bold leading-[1.1]">
                A Culinary <br/><span className="text-secondary italic font-serif">Journey</span>
              </h2>
              <div className="space-y-8 text-charcoal/80 font-body text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p>
                  At Aurelia, we believe the Mediterranean way of life transcends geography. Our chef, Marco Santorini, brings coastal Italian and Greek culinary tradition to the Carolina Lowcountry.
                </p>
                <p className="text-charcoal/50 italic font-serif">
                  "Every plate is a celebration of sun-drenched olive groves and morning fish markets."
                </p>
              </div>
              <Link to="/about" className="group inline-flex items-center gap-6 text-secondary font-sub uppercase tracking-[0.3em] font-bold hover:text-primary transition-all text-xs">
                Meet Chef Marco <ArrowRight className="group-hover:translate-x-4 transition-transform text-accent" />
              </Link>
            </div>
            
            <div className="w-full lg:w-1/2 relative reveal active delay-300">
              <div className="absolute -top-10 -left-10 w-full h-full border-2 border-accent/10 rounded-[2.5rem] translate-x-4 translate-y-4 animate-float-alt -z-10" />
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-premium animate-float-slow group bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800" 
                  alt="Chef Marco" 
                  className="w-full h-full object-cover zoom-img scale-105"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-accent text-white p-10 rounded-2xl shadow-premium hidden md:block max-w-xs animate-float-alt">
                <p className="font-serif italic text-3xl leading-tight">"The ocean is our greatest pantry."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Dishes Carousel */}
      <section className="py-28 md:py-40 bg-sand relative">
        <div className="container mx-auto px-6 text-center mb-24 max-w-4xl reveal active">
          <h2 className="text-4xl md:text-7xl text-primary font-bold mb-8">Signature Creations</h2>
          <div className="w-32 h-1 bg-accent/30 mx-auto rounded-full" />
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative">
          {featuredDishes.map((dish, idx) => (
            <div 
              key={dish.id}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-20 transition-all duration-1000 ${
                idx === activeDish ? 'opacity-100 translate-x-0 relative' : 'opacity-0 absolute inset-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-accent/20 blur-[100px] -z-10 rounded-full animate-pulse" />
                <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-premium animate-float-slow group">
                  <img src={dish.image} alt={dish.name} className="w-full h-full object-cover zoom-img" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="h-px w-8 bg-secondary" />
                  <span className="text-secondary font-sub uppercase tracking-[0.4em] text-[10px] font-bold">
                    {dish.badge}
                  </span>
                </div>
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif text-primary leading-none tracking-tight">{dish.name}</h3>
                <p className="text-charcoal/60 font-body text-xl md:text-2xl italic leading-relaxed opacity-90 max-w-xl mx-auto lg:mx-0">
                  {dish.description}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-10">
                  <p className="text-4xl md:text-5xl font-serif text-secondary font-bold tracking-tighter">${dish.price}</p>
                  <Link to="/menu" className="font-sub uppercase tracking-[0.3em] py-4 px-8 border border-primary/20 hover:bg-primary hover:text-white transition-all text-[10px] font-bold rounded-full">
                    View Full Menu
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center lg:justify-start mt-16 gap-4">
            {featuredDishes.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveDish(idx)}
                className={`h-1.5 rounded-full transition-all duration-700 ${idx === activeDish ? 'bg-secondary w-16' : 'bg-primary/10 w-4'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reservations Teaser */}
      <section className="relative py-40 md:py-52 parallax-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000)' }}>
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[4px]" />
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 text-neutral text-center lg:text-left reveal active">
              <h2 className="text-5xl md:text-8xl font-bold mb-8 leading-none tracking-tighter">Your Table <br/>is Waiting</h2>
              <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-serif italic max-w-2xl">
                Experience Charleston's most stunning waterfront dining setting under the golden hour light.
              </p>
            </div>
            
            <div className="lg:w-1/2 w-full reveal active delay-300">
              <div className="bg-white/10 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-premium border border-white/20 animate-float-slow">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-4">
                    <label className="text-neutral/60 uppercase tracking-widest text-[10px] font-bold">Select Date</label>
                    <input type="date" className="bg-white/5 text-white p-5 rounded-2xl border border-white/10 outline-none w-full focus:bg-white/20 transition-all font-sub text-xs tracking-widest" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="text-neutral/60 uppercase tracking-widest text-[10px] font-bold">Time</label>
                      <select className="bg-white/5 text-white p-5 rounded-2xl border border-white/10 outline-none w-full font-sub text-xs tracking-widest cursor-pointer">
                        <option className="text-charcoal">7:00 PM</option>
                        <option className="text-charcoal">8:00 PM</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-neutral/60 uppercase tracking-widest text-[10px] font-bold">Guests</label>
                      <select className="bg-white/5 text-white p-5 rounded-2xl border border-white/10 outline-none w-full font-sub text-xs tracking-widest cursor-pointer">
                        <option className="text-charcoal">2 Guests</option>
                        <option className="text-charcoal">4 Guests</option>
                      </select>
                    </div>
                  </div>
                  <Link to="/reservations" className="bg-accent text-white py-6 rounded-2xl font-sub uppercase tracking-[0.3em] font-bold text-sm shadow-premium hover:bg-white hover:text-primary transition-all text-center">
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats Section */}
      <section className="py-24 bg-secondary text-neutral overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center reveal active">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="text-5xl md:text-7xl font-serif font-bold tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold opacity-70 leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gallery Preview */}
      <section className="py-28 md:py-40 bg-neutral">
        <div className="container mx-auto px-6 text-center mb-24 max-w-4xl reveal active">
          <h2 className="text-4xl md:text-7xl text-primary font-bold mb-8">Captures</h2>
          <Link to="/gallery" className="text-secondary uppercase tracking-[0.4em] text-[10px] font-bold border-b-2 border-secondary/20 pb-2 hover:border-secondary transition-all">Explore Collection</Link>
        </div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-8 space-y-8">
            {GALLERY_IMAGES.map((path, i) => (
              <div 
                key={i} 
                className={`relative group overflow-hidden rounded-[2.5rem] shadow-premium bg-white transition-all duration-700 ${
                  i % 2 === 0 ? 'animate-float-slow' : 'animate-float-alt'
                }`}
              >
                <img 
                  src={path} 
                  alt={`Moment ${i + 1}`}
                  className="w-full object-cover zoom-img opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white font-serif italic text-2xl transform translate-y-12 group-hover:translate-y-0 transition-all duration-700">Explore</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
