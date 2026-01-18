
import { Dish, TeamMember, EventSpace, Stat } from './types';

export const MENU_ITEMS: Dish[] = [
  // ANTIPASTI
  {
    id: 'a1',
    name: 'Burrata Caprese',
    description: 'House-made burrata, heirloom tomatoes, basil oil, aged balsamic, grilled sourdough',
    price: 18,
    image: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&q=80&w=800',
    category: 'antipasti',
    dietary: ['V'],
    winePairing: 'Vermentino'
  },
  {
    id: 'a2',
    name: 'Crispy Calamari',
    description: 'Lightly fried Carolina squid, cherry peppers, lemon aioli, marinara',
    price: 16,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    category: 'antipasti'
  },
  {
    id: 'a3',
    name: 'Tuna Crudo',
    description: 'Yellowfin tuna, citrus, avocado, Calabrian chili, crispy capers, grilled crostini',
    price: 22,
    image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800',
    category: 'antipasti',
    dietary: ['GF']
  },
  {
    id: 'a4',
    name: 'Grilled Mediterranean Octopus',
    description: 'Tender Spanish octopus, white bean purée, Calabrian chili oil, crispy fennel, preserved lemon',
    price: 34,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800',
    badge: "Chef's Favorite",
    category: 'antipasti',
    dietary: ['GF']
  },
  {
    id: 'a5',
    name: 'Charcuterie Board',
    description: 'Selection of Italian cured meats, artisan cheeses, honeycomb, marinated olives',
    price: 28,
    image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&q=80&w=800',
    category: 'antipasti'
  },
  // INSALATE
  {
    id: 'i1',
    name: 'Aurelia House Salad',
    description: 'Mixed greens, shaved fennel, radish, citrus vinaigrette, pecorino',
    price: 14,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    category: 'insalate',
    dietary: ['V', 'GF']
  },
  {
    id: 'i2',
    name: 'Caesar Classico',
    description: 'Romaine hearts, white anchovies, parmesan crisps, house-made Caesar dressing',
    price: 15,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80&w=800',
    category: 'insalate'
  },
  // PRIMI
  {
    id: 'p1',
    name: 'Pappardelle al Cinghiale',
    description: 'House-made pappardelle, slow-braised wild boar ragù, pecorino romano',
    price: 42,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
    category: 'primi'
  },
  {
    id: 'p2',
    name: 'Lobster Risotto',
    description: 'Carnaroli rice, Maine lobster, saffron, chives',
    price: 48,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
    category: 'primi',
    dietary: ['GF']
  },
  {
    id: 'p3',
    name: 'Cacio e Pepe',
    description: 'Traditional Roman pasta, pecorino romano, black pepper, butter',
    price: 28,
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&q=80&w=800',
    category: 'primi',
    dietary: ['V']
  },
  // SECONDI
  {
    id: 's1',
    name: 'Branzino al Sale',
    description: 'Whole Mediterranean sea bass baked in sea salt crust, herb oil, seasonal vegetables',
    price: 58,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    badge: 'Signature Dish',
    category: 'secondi',
    dietary: ['GF']
  },
  {
    id: 's2',
    name: 'Pan-Seared Scallops',
    description: 'Diver scallops, corn purée, crispy prosciutto, micro greens',
    price: 52,
    image: 'https://images.unsplash.com/photo-1599458252573-56ae36120de1?auto=format&fit=crop&q=80&w=800',
    category: 'secondi',
    dietary: ['GF']
  },
  {
    id: 's3',
    name: 'Filet Mignon',
    description: '8oz center-cut tenderloin, rosemary demi-glace, truffle mashed potatoes',
    price: 58,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800',
    category: 'secondi',
    dietary: ['GF']
  },
  // DOLCI
  {
    id: 'd1',
    name: 'Pistachio Panna Cotta',
    description: 'Silky Italian custard, Bronte pistachio, honeycomb, fresh berries',
    price: 16,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    category: 'dolci',
    dietary: ['V']
  },
  {
    id: 'd2',
    name: 'Tiramisu Classico',
    description: 'Traditional Italian recipe, espresso-soaked ladyfingers, mascarpone',
    price: 14,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
    category: 'dolci',
    dietary: ['V']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Chef Marco Santorini',
    role: 'Executive Chef',
    bio: 'Born in Calabria, Italy, Marco celebrates the simplicity and bold flavors of coastal Italian cooking.',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Elena Roussos',
    role: 'Owner & General Manager',
    bio: 'Elena grew up in Crete and brings 15 years of fine dining expertise to Aurelia.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800'
  }
];

export const EVENT_SPACES: EventSpace[] = [
  {
    name: 'The Adriatic Room',
    capacity: '20-40 guests',
    features: ['Floor-to-ceiling windows', 'Waterfront view', 'Private bar', 'AV equipment'],
    idealFor: 'Rehearsal dinners, corporate dinners, intimate celebrations',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'The Terrace',
    capacity: '40-80 guests',
    features: ['String lights', 'Outdoor bar', 'Water views', 'Heaters available'],
    idealFor: 'Cocktail receptions, summer parties, brunches',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800'
  }
];

export const STATS: Stat[] = [
  { value: '15+', label: 'Years of Culinary Excellence' },
  { value: '50+', label: 'Local Farm & Fishery Partners' },
  { value: '12K+', label: 'Guests Served Annually' },
  { value: '4.9★', label: 'Average Guest Rating' }
];
