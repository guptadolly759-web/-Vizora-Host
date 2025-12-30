
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface Plan {
  service: string;
  name: string;
  price: string;
}

interface CartContextType {
  cart: Plan[];
  addToCart: (plan: Plan) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Plan[]>([]);

  const addToCart = (plan: Plan) => setCart(prev => [...prev, plan]);
  const removeFromCart = (index: number) =>
    setCart(prev => prev.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
