
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowRight, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-neutral pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Column */}
        <div className="space-y-6">
          <Link to="/" className="text-4xl font-serif font-bold tracking-widest">
            <span className="text-accent">A</span>URELIA
          </Link>
          <p className="text-neutral/80 font-body leading-relaxed">
            Where the Mediterranean meets the Carolina coast. Join us for a culinary journey through sundrenched flavors and local traditions.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="https://t.me/jamescharles7724" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Telegram">
              <Send size={20} />
            </a>
            <span className="cursor-default text-accent/50">TripAdvisor</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-serif mb-6 text-accent">Quick Links</h4>
          <ul className="space-y-4">
            {['Menu', 'Reservations', 'Private Events', 'Gift Cards', 'Careers'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-accent transition-colors font-sub text-sm uppercase tracking-wider">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-4">
          <h4 className="text-xl font-serif mb-6 text-accent">Contact</h4>
          <div className="flex items-start space-x-3">
            <MapPin size={20} className="text-accent shrink-0" />
            <p className="text-sm">247 Waterfront Boulevard, Charleston, SC 29401</p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone size={20} className="text-accent shrink-0" />
            <a href="tel:8435550123" className="text-sm hover:text-accent">(843) 555-0123</a>
          </div>
          <div className="flex items-center space-x-3">
            <Mail size={20} className="text-accent shrink-0" />
            <a href="mailto:jamescharles7724@gmail.com" className="text-sm hover:text-accent">jamescharles7724@gmail.com</a>
          </div>
          <div className="mt-6 pt-6 border-t border-neutral/10">
            <p className="text-xs uppercase tracking-widest font-sub text-accent/80 mb-2">Hours</p>
            <p className="text-xs">Tue-Sun: 5:00 PM - 10:00 PM</p>
            <p className="text-xs">Sat-Sun Brunch: 11:00 AM - 3:00 PM</p>
            <p className="text-xs">Closed Mondays</p>
          </div>
        </div>

        {/* Location / Map */}
        <div>
          <h4 className="text-xl font-serif mb-6 text-accent">Location</h4>
          <div className="w-full h-48 bg-charcoal rounded-lg overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
              alt="Map location" 
              className="w-full h-full object-cover opacity-50 grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a 
                href="#" 
                className="bg-accent text-primary px-4 py-2 rounded font-sub text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:bg-neutral transition-colors"
              >
                Get Directions <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-neutral/10 flex flex-col md:flex-row justify-between items-center text-xs text-neutral/50 tracking-widest uppercase">
        <p>Copyright © 2024 Aurelia Restaurant</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-accent">Privacy Policy</a>
          <a href="#" className="hover:text-accent">Terms of Service</a>
          <span>Site by Creative Studio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
