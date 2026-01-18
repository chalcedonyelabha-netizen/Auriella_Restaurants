
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-0 min-h-screen bg-sand">
      {/* Hero */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2000" 
            alt="Restaurant Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        <div className="relative z-10 text-center text-neutral px-6 max-w-5xl flex flex-col items-center reveal active">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 tracking-tighter uppercase leading-none drop-shadow-2xl">Our Story</h1>
          <p className="text-xl sm:text-2xl md:text-3xl italic-script text-accent max-w-3xl drop-shadow-lg leading-relaxed">A journey from the Mediterranean to the Lowcountry</p>
          <div className="w-24 h-1 bg-accent mt-12 opacity-50"></div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-32 md:space-y-48">
          {/* Origins */}
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left reveal active">
              <span className="text-secondary uppercase tracking-[0.4em] font-sub font-bold text-xs opacity-70">Origins</span>
              <h2 className="text-4xl md:text-7xl font-serif text-primary leading-tight tracking-tight">Born from a Dream</h2>
              <div className="w-20 h-1 bg-accent/30 mx-auto lg:mx-0 rounded-full" />
              <p className="text-charcoal/80 leading-relaxed font-body text-xl italic">
                Aurelia was born from a dream shared over a bottle of Vernaccia in a small Tuscan village. Chef Marco Santorini and Elena Roussos met while staging at a Michelin-starred restaurant in Florence.
              </p>
            </div>
            <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-premium reveal active delay-200 animate-float-slow">
              <img src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&q=80&w=2000" alt="Origins" className="w-full h-full object-cover zoom-img" />
            </div>
          </div>

          {/* Charleston Connection */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 md:gap-24">
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left reveal active">
              <span className="text-secondary uppercase tracking-[0.4em] font-sub font-bold text-xs opacity-70">Destiny</span>
              <h2 className="text-4xl md:text-7xl font-serif text-primary leading-tight tracking-tight">The Lowcountry</h2>
              <div className="w-20 h-1 bg-accent/30 mx-auto lg:mx-0 rounded-full" />
              <p className="text-charcoal/80 leading-relaxed font-body text-xl italic">
                Charleston felt like destiny. The waterfront setting, access to pristine seafood, and rich heritage reminded us of home in the Aegean and Calabria.
              </p>
            </div>
            <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-premium reveal active delay-200 animate-float-alt">
              <img src="https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&fit=crop&q=80&w=2000" alt="Charleston Harbor" className="w-full h-full object-cover zoom-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-neutral">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-20 reveal active">
            <h2 className="text-4xl md:text-7xl text-primary font-bold mb-6 tracking-tight">Meet the Team</h2>
            <p className="text-secondary italic-script text-2xl md:text-3xl opacity-80">The heart and soul of Aurelia</p>
            <div className="w-24 h-1 bg-accent/20 mx-auto mt-10 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className={`group bg-white p-8 md:p-12 rounded-[2.5rem] shadow-premium hover:shadow-hover transition-all duration-500 hover:-translate-y-2 reveal active`}>
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-10 shadow-inner">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover zoom-img grayscale hover:grayscale-0 transition-all duration-1000" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-primary mb-2 font-bold tracking-tight">{member.name}</h3>
                <p className="text-secondary font-sub uppercase tracking-[0.3em] text-[10px] font-bold mb-6">{member.role}</p>
                <p className="text-charcoal/70 text-base leading-relaxed font-body italic opacity-80">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
