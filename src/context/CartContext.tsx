"use client";

import { createContext, useContext, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
};

type CartContextType = {
  items: CartItem[];
  observation: string;
  deliveryFee: number;
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
  setObservation: (text: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [observation, setObservation] = useState("");
  const deliveryFee = 5; // taxa fixa por enquanto

  function addItem(item: CartItem) {
    setItems((prev) => [...prev, item]);
  }

  function removeItem(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  function clearCart() {
    setItems([]);
    setObservation("");
  }

  return (
    <CartContext.Provider
      value={{
        items,
        observation,
        deliveryFee,
        addItem,
        removeItem,
        clearCart,
        setObservation,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
