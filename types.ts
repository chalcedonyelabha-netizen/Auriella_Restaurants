
export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  category: 'antipasti' | 'insalate' | 'primi' | 'secondi' | 'contorni' | 'dolci';
  dietary?: ('V' | 'VG' | 'GF')[];
  winePairing?: string;
}

export interface MenuItemProps {
  dish: Dish;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface EventSpace {
  name: string;
  capacity: string;
  features: string[];
  idealFor: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface CartItem extends Dish {
  quantity: number;
}
