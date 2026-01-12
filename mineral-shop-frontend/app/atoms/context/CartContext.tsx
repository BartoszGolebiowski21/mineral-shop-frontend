"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types/ProductTypes";

interface CartContextType {
  productsInCart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Function to fetch products using their IDs
  const fetchProductsByIds = async (ids: number[]) => {
    try {
      const response = await fetch(`http://localhost:8000/api/products?id__in=${ids.join(",")}`);
      if (!response.ok) throw new Error("Error fetching products");
      const data = await response.json();
      setProductsInCart(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Listen for changes in localStorage (from other tabs)
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cart") {
        const newCart = event.newValue;
        if (newCart) {
          const productIds: number[] = JSON.parse(newCart);
          if (productIds.length > 0) {
            fetchProductsByIds(productIds);
          } else {
            setProductsInCart([]);
          }
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

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const cartString = localStorage.getItem("cart");
    if (cartString) {
      const productIds: number[] = JSON.parse(cartString);
      if (productIds.length > 0) {
        fetchProductsByIds(productIds);
      }
    }
  }, []);

  // Save only product IDs to localStorage whenever cart changes
  useEffect(() => {
    const productIds = productsInCart.map(product => product.id);
    localStorage.setItem("cart", JSON.stringify(productIds));

    // TODO: to fix Number(String(number)) parsing
    const sum = productsInCart.reduce((acc, product) => acc + Number(String(product.price)), 0);
    setTotalPrice(sum);
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
    <CartContext.Provider value={{ productsInCart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCartContext must be used inside CartProvider");
  return ctx;
};
