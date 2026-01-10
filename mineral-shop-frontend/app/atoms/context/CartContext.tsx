"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types/ProductTypes";

interface CartContextType {
  productsInCart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cart") {
        const newCart = event.newValue;
        if (newCart) {
          setProductsInCart(JSON.parse(newCart));
        } else {
          setProductsInCart([]);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const cartString = localStorage.getItem("cart");
    if (cartString) {
      setProductsInCart(JSON.parse(cartString));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const addToCart = (product: Product) => {
    setProductsInCart(prev => {
      if (prev.some(p => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (id: number) => {
    setProductsInCart(prev => prev.filter(p => p.id !== id));
  };

  return (
    <CartContext.Provider value={{ productsInCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCartContext must be used inside CartProvider");
  return ctx;
};
