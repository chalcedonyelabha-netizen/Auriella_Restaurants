
import React from 'react';
import { Calendar, Users, Clock, Info } from 'lucide-react';

const Reservations: React.FC = () => {
  return (
    <div className="pt-0 min-h-screen bg-sand">
      {/* Header */}
      <header className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000" 
            alt="Reservations Header" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center text-neutral px-4 sm:px-6 max-w-4xl flex flex-col items-center justify-center h-full reveal active">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 tracking-wider leading-tight uppercase">Reservations</h1>
          <p className="text-lg sm:text-xl italic-script text-accent">We look forward to welcoming you</p>
          <div className="w-24 h-1 bg-accent mt-8 opacity-50 delay-500"></div>
        </div>
      </header>

      {/* Main Form Section */}
      <section className="py-12 md:py-20 -mt-10 sm:-mt-20 relative z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-neutral rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden reveal active">
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 md:mb-12">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold flex items-center gap-2">
                    <Calendar size={12} /> Date
                  </label>
                  <input type="date" className="w-full bg-sand/50 p-4 rounded-xl border border-primary/10 outline-none focus:border-accent transition-colors text-sm sm:text-base" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold flex items-center gap-2">
                    <Clock size={12} /> Time
                  </label>
                  <select className="w-full bg-sand/50 p-4 rounded-xl border border-primary/10 outline-none focus:border-accent transition-colors text-sm sm:text-base">
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2 md:col-span-1">
                  <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold flex items-center gap-2">
                    <Users size={12} /> Guests
                  </label>
                  <select className="w-full bg-sand/50 p-4 rounded-xl border border-primary/10 outline-none focus:border-accent transition-colors text-sm sm:text-base">
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n} Guests</option>)}
                    <option>Large Party (9+)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">Special Requests</label>
                  <textarea 
                    rows={3}
                    placeholder="Celebrations, dietary restrictions, seating preferences..."
                    className="w-full bg-sand/50 p-4 rounded-xl border border-primary/10 outline-none focus:border-accent transition-colors resize-none text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <input type="text" placeholder="First Name" className="bg-sand/50 p-4 rounded-xl border border-primary/10 outline-none focus:border-accent transition-colors text-sm sm:text-base" />
                  <input type="text" placeholder="Last Name" className="bg-sand/50 p-4 rounded-xl border border-primary/10 outline-none focus:border-accent transition-colors text-sm sm:text-base" />
                  <input type="email" placeholder="Email Address" className="bg-sand/50 p-4 rounded-xl border border-primary/10 outline-none focus:border-accent transition-colors text-sm sm:text-base" />
                  <input type="tel" placeholder="Phone Number" className="bg-sand/50 p-4 rounded-xl border border-primary/10 outline-none focus:border-accent transition-colors text-sm sm:text-base" />
                </div>

                <button className="w-full bg-primary text-neutral py-4 sm:py-5 rounded-xl font-sub uppercase tracking-widest text-base sm:text-lg font-bold hover:bg-accent transition-all shadow-xl">
                  Complete Reservation
                </button>
              </div>
            </div>

            <div className="bg-primary/5 p-6 sm:p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 border-t border-primary/10">
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-serif text-primary flex items-center gap-2">
                  <Info className="text-accent" size={20} /> Policies
                </h3>
                <ul className="space-y-3 md:space-y-4 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  <li><strong>Cancellation:</strong> Please provide 24 hours notice for cancellations to avoid a fee.</li>
                  <li><strong>Large Parties:</strong> Groups of 13+ guests require direct coordination with our events team.</li>
                  <li><strong>Dress Code:</strong> Smart casual attire is appreciated.</li>
                </ul>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-serif text-primary">Need Assistance?</h3>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed mb-2 md:mb-4">Prefer to speak with our host? We are available via phone during business hours.</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:8435550123" className="text-lg sm:text-xl font-bold text-secondary hover:text-primary transition-colors">(843) 555-0123</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
