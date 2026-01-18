
import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Trash2, X, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import { Dish, CartItem } from '../types';
import { Link } from 'react-router-dom';

const OrderOnline: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Dish['category']>('antipasti');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const categories = [
    { id: 'antipasti', label: 'Antipasti' },
    { id: 'insalate', label: 'Insalate' },
    { id: 'primi', label: 'Primi' },
    { id: 'secondi', label: 'Secondi' },
    { id: 'contorni', label: 'Contorni' },
    { id: 'dolci', label: 'Dolci' },
  ];

  const addToCart = (dish: Dish) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === dish.id);
      if (existing) {
        return prev.map(item => item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const randomOrderNum = `AUR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(randomOrderNum);
    setIsCheckingOut(false);
    setIsCartOpen(false);
    setIsOrderSuccess(true);
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-0 min-h-screen bg-sand">
      {/* Header */}
      <header className="relative min-h-[40vh] sm:min-h-[50vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-33b07acea4a3?auto=format&fit=crop&q=80&w=2000" 
            alt="Order Online" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        <div className="relative z-10 w-full flex flex-col items-center reveal active">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 tracking-wider uppercase leading-none text-neutral">
            Order Online
          </h1>
          <p className="text-base sm:text-lg md:text-2xl italic-script text-accent">
            Coastal flavors, delivered to your doorstep
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <aside className="lg:w-1/4 shrink-0">
          <div className="bg-white p-4 sm:p-10 rounded-3xl shadow-xl lg:sticky lg:top-24">
            <h3 className="hidden lg:block text-2xl font-serif text-primary mb-8 border-b border-primary/10 pb-4 font-bold">
              Menu Categories
            </h3>
            <div className="flex lg:flex-col overflow-x-auto no-scrollbar gap-3 pb-2 lg:pb-0">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Dish['category'])}
                  className={`whitespace-nowrap lg:w-full text-left px-6 py-3 rounded-2xl text-[10px] sm:text-sm font-sub uppercase tracking-widest transition-all font-bold ${
                    activeCategory === cat.id 
                      ? 'bg-primary text-white shadow-xl lg:translate-x-3' 
                      : 'text-charcoal/50 bg-sand/40 lg:bg-transparent hover:bg-sand hover:text-primary'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:w-3/4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white p-4 sm:p-8 rounded-3xl shadow-lg flex gap-4 sm:gap-6 group transition-all hover:shadow-2xl reveal active">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 shadow-inner bg-sand">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-serif text-lg sm:text-xl text-primary leading-tight font-bold">{item.name}</h4>
                      <span className="text-secondary font-serif text-lg sm:text-xl font-bold">${item.price}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-charcoal/60 mt-2 line-clamp-3 italic leading-relaxed">{item.description}</p>
                  </div>
                  <button 
                    onClick={() => addToCart(item)}
                    className="mt-6 bg-sand text-primary px-5 py-3 rounded-2xl text-[10px] font-sub uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95"
                  >
                    <Plus size={14} /> Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order Success Modal */}
      {isOrderSuccess && (
        <div className="fixed inset-0 bg-primary/90 backdrop-blur-xl z-[300] flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl p-8 sm:p-16 text-center space-y-8 animate-reveal">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-accent animate-float-slow">
                <CheckCircle2 size={64} strokeWidth={1.5} />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-serif text-primary tracking-tight">Buon Appetito!</h2>
              <p className="text-charcoal/60 italic-script text-2xl">Your coastal feast is being prepared.</p>
            </div>
            
            <div className="bg-sand/50 rounded-3xl p-8 space-y-4 border border-primary/5">
              <div className="flex justify-between text-xs uppercase tracking-[0.3em] font-bold text-primary/40">
                <span>Order Number</span>
                <span>Estimate</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-sub font-bold text-primary tracking-widest">{orderNumber}</span>
                <span className="text-xl font-serif text-secondary italic">25 - 35 mins</span>
              </div>
            </div>

            <button 
              onClick={() => setIsOrderSuccess(false)}
              className="bg-primary text-white px-12 py-5 rounded-full font-sub uppercase tracking-widest font-bold hover:bg-accent transition-all flex items-center justify-center gap-4 mx-auto group"
            >
              Continue Browsing <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]">
          <div className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-2xl flex flex-col animate-reveal-right">
            <div className="p-6 sm:p-10 bg-primary text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-4">
                <ShoppingBag className="text-accent" size={32} />
                <h3 className="font-serif text-2xl tracking-wide font-bold">Your Order</h3>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:text-accent transition-colors">
                <X size={32} />
              </button>
            </div>

            <div className="flex-grow p-6 sm:p-10 overflow-y-auto space-y-8 no-scrollbar">
              {cart.map(item => (
                <div key={item.id} className="flex gap-6 border-b border-primary/5 pb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-md bg-sand">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start gap-3">
                      <h5 className="font-serif text-base sm:text-lg text-primary leading-tight font-bold">{item.name}</h5>
                      <button onClick={() => removeFromCart(item.id)} className="text-secondary/30 hover:text-secondary transition-colors p-1">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-4 bg-sand/60 rounded-xl px-4 py-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-primary hover:text-accent"><Minus size={14} /></button>
                        <span className="text-sm font-bold min-w-[20px] text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-primary hover:text-accent"><Plus size={14} /></button>
                      </div>
                      <span className="font-serif text-secondary text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="p-6 sm:p-10 bg-neutral border-t border-primary/10 space-y-8 shrink-0">
                <div className="flex justify-between text-2xl font-serif text-primary border-b border-primary/10 pb-4">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-sub uppercase tracking-[0.2em] font-bold hover:bg-accent transition-all shadow-2xl flex items-center justify-center gap-4 disabled:bg-primary/50"
                >
                  {isCheckingOut ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Processing Securely...
                    </>
                  ) : (
                    'Proceed to Checkout'
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderOnline;
