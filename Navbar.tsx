
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Order Online', path: '/order-online' },
    { name: 'About', path: '/about' },
    { name: 'Private Events', path: '/private-events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled || !isHome ? 'bg-primary shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-serif text-neutral font-bold tracking-widest flex items-center">
          <span className="text-accent">A</span>URELIA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] uppercase tracking-widest transition-all hover:text-accent font-sub font-bold ${
                location.pathname === link.path ? 'text-accent border-b border-accent' : 'text-neutral'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/reservations"
            className="bg-accent hover:bg-white hover:text-primary text-neutral px-6 py-2 rounded-full font-sub text-[10px] uppercase tracking-widest transition-all duration-300 shadow-lg font-bold"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-neutral"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-primary z-[60] transition-transform duration-500 transform ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          <button 
            className="absolute top-6 right-6 text-neutral"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={40} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-serif text-neutral tracking-widest hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/reservations"
            className="bg-accent text-neutral px-10 py-4 rounded-full font-sub text-lg uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reserve Your Table
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
