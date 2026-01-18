
import React from 'react';
import { EVENT_SPACES } from '../constants';

const PrivateEvents: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000" 
            alt="Event Space" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center text-neutral px-4 sm:px-6 flex flex-col items-center justify-center h-full reveal active">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 tracking-wider leading-tight uppercase">Celebrate with Us</h1>
          <p className="text-lg sm:text-2xl italic-script text-accent">Unforgettable events in stunning waterfront settings</p>
        </div>
      </section>

      {/* Event Spaces */}
      <section className="py-24 bg-sand">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-4 reveal">
            <h2 className="text-4xl md:text-6xl text-primary font-bold">Our Spaces</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-charcoal/70 text-lg">Whether it's an intimate rehearsal dinner or a grand corporate buyout, we have the perfect setting for your celebration.</p>
          </div>

          <div className="space-y-24">
            {EVENT_SPACES.map((space, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center reveal ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                  <img src={space.image} alt={space.name} className="w-full h-full object-cover zoom-img" loading="lazy" />
                </div>
                <div className="lg:w-1/2 space-y-8">
                  <h3 className="text-4xl font-serif text-primary">{space.name}</h3>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] font-sub font-bold text-accent">Capacity</p>
                    <p className="text-xl text-charcoal">{space.capacity}</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.2em] font-sub font-bold text-accent">Features</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {space.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-charcoal/70 italic">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] font-sub font-bold text-accent">Ideal For</p>
                    <p className="text-charcoal/70 leading-relaxed font-body italic">{space.idealFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form ... (Rest remains the same) */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-sand p-10 md:p-16 rounded-3xl shadow-2xl space-y-12 reveal">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-serif text-primary">Start Planning</h2>
              <p className="text-charcoal/60">Tell us about your event and we'll be in touch within 24 hours.</p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form fields... */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-sub font-bold text-accent">Event Date</label>
                <input type="date" className="w-full bg-white p-4 rounded-xl outline-none border border-primary/5 focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-sub font-bold text-accent">Guest Count</label>
                <input type="number" placeholder="Estimated attendance" className="w-full bg-white p-4 rounded-xl outline-none border border-primary/5 focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest font-sub font-bold text-accent">Event Type</label>
                <select className="w-full bg-white p-4 rounded-xl outline-none border border-primary/5 focus:border-accent transition-colors">
                  <option>Rehearsal Dinner</option>
                  <option>Corporate Event</option>
                  <option>Milestone Celebration</option>
                  <option>Wedding Buyout</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-sub font-bold text-accent">Name</label>
                <input type="text" placeholder="Your full name" className="w-full bg-white p-4 rounded-xl outline-none border border-primary/5 focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-sub font-bold text-accent">Email</label>
                <input type="email" placeholder="Your email address" className="w-full bg-white p-4 rounded-xl outline-none border border-primary/5 focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest font-sub font-bold text-accent">Additional Details</label>
                <textarea rows={5} className="w-full bg-white p-4 rounded-xl outline-none border border-primary/5 focus:border-accent transition-colors resize-none" placeholder="Special requests, dietary notes, etc."></textarea>
              </div>
              <button className="md:col-span-2 bg-primary text-neutral py-5 rounded-xl font-sub uppercase tracking-[0.2em] font-bold hover:bg-accent transition-all shadow-xl">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateEvents;
