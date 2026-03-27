export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  quantity?: number;
}

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, amount: number) => void;
  cartTotal: string;
  cartCount: number;
}
