
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, ChevronDown, ChevronUp, Send } from 'lucide-react';

const FAQ_ITEMS = [
  { q: 'Do you take walk-ins?', a: 'While we prioritize reservations, we do keep a limited number of tables and full bar seating available for walk-in guests on a first-come, first-served basis.' },
  { q: 'What is your dress code?', a: 'We appreciate smart casual attire. We recommend semi-formal attire for dinner service to match the refined ambiance of our dining room.' },
  { q: 'Do you accommodate dietary restrictions?', a: 'Absolutely. Our kitchen is well-versed in accommodating gluten-free, vegetarian, vegan, and specific allergy requirements. Please note these on your reservation.' },
  { q: 'Is parking available?', a: 'Yes, complimentary valet parking is available for all guests during dinner service. There is also ample street parking in the vicinity.' },
  { q: 'Can I bring my own wine?', a: 'We permit up to two 750ml bottles per party. A corkage fee of $35 per bottle applies, provided the wine is not currently featured on our cellar list.' },
];

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-24 min-h-screen">
      <header className="py-20 bg-primary text-neutral text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-widest uppercase">Contact Us</h1>
        <p className="text-xl italic-script text-accent">We are here to assist you</p>
      </header>

      <section className="py-24 bg-sand">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20">
          {/* Left: Contact Form */}
          <div className="lg:w-[60%] space-y-12">
            <h2 className="text-4xl font-serif text-primary">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-sub font-bold text-accent">Name</label>
                  <input type="text" className="w-full bg-neutral/50 p-4 rounded-xl outline-none border border-primary/5 focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-sub font-bold text-accent">Email</label>
                  <input type="email" className="w-full bg-neutral/50 p-4 rounded-xl outline-none border border-primary/5 focus:border-accent transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-sub font-bold text-accent">Subject</label>
                <select className="w-full bg-neutral/50 p-4 rounded-xl outline-none border border-primary/5 focus:border-accent transition-colors">
                  <option>General Inquiry</option>
                  <option>Reservations</option>
                  <option>Private Events</option>
                  <option>Careers</option>
                  <option>Press</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-sub font-bold text-accent">Message</label>
                <textarea rows={6} className="w-full bg-neutral/50 p-4 rounded-xl outline-none border border-primary/5 focus:border-accent transition-colors resize-none"></textarea>
              </div>
              <button className="bg-primary text-neutral px-12 py-5 rounded-xl font-sub uppercase tracking-widest font-bold hover:bg-accent transition-all shadow-xl">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Info Sidebar */}
          <div className="lg:w-[40%] space-y-12">
            <div className="bg-neutral p-10 rounded-3xl shadow-xl space-y-10 border border-primary/5">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-primary">Information</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <MapPin className="text-accent shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Address</p>
                      <p className="text-sm text-charcoal/70">247 Waterfront Boulevard, Charleston, SC 29401</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-accent shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Phone</p>
                      <a href="tel:8435550123" className="text-sm text-charcoal/70 hover:text-accent">(843) 555-0123</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-accent shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Email</p>
                      <a href="mailto:jamescharles7724@gmail.com" className="text-sm text-charcoal/70 hover:text-accent">jamescharles7724@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Send className="text-accent shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Telegram</p>
                      <a href="https://t.me/jamescharles7724" target="_blank" rel="noopener noreferrer" className="text-sm text-charcoal/70 hover:text-accent">@jamescharles7724</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-primary">Hours</h3>
                <div className="space-y-2 text-sm text-charcoal/70">
                  <div className="flex justify-between border-b border-primary/5 pb-2">
                    <span>Tuesday - Sunday</span>
                    <span>5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/5 pb-2">
                    <span>Weekend Brunch</span>
                    <span>11:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between text-secondary italic">
                    <span>Mondays</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-primary">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-primary text-neutral rounded-full hover:bg-accent transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="p-3 bg-primary text-neutral rounded-full hover:bg-accent transition-colors"><Facebook size={20} /></a>
                  <a href="https://t.me/jamescharles7724" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary text-neutral rounded-full hover:bg-accent transition-colors"><Send size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full bg-charcoal grayscale relative overflow-hidden group">
        <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=2000" alt="Map Location" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[10s]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary p-8 rounded-3xl shadow-2xl text-neutral text-center space-y-4 max-w-sm">
            <h3 className="text-2xl font-serif">Aurelia Restaurant</h3>
            <p className="text-sm opacity-70">Overlooking the Charleston Harbor at the Waterfront Boulevard.</p>
            <button className="bg-accent text-white px-8 py-3 rounded-xl font-sub uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-primary transition-all">
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif text-primary">Frequently Asked Questions</h2>
            <p className="text-charcoal/60">Everything you need to know before your visit.</p>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-sand rounded-2xl overflow-hidden border border-primary/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
                >
                  <span className="font-serif text-lg text-primary">{item.q}</span>
                  {openFaq === i ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-accent" />}
                </button>
                <div className={`transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="text-charcoal/70 leading-relaxed italic">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
