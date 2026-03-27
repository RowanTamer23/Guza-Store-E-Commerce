import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { Product, CartContextType } from "../types/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists)
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity! + 1 }
            : item,
        );
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, amount: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity! + amount) }
          : item,
      ),
    );
  };

  const cartTotal = useMemo(
    () =>
      cart
        .reduce((acc, item) => acc + item.price * item.quantity!, 0)
        .toFixed(2),
    [cart],
  );

  const cartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity!, 0),
    [cart],
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
