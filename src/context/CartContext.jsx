import { createContext, useContext, useState, useEffect } from 'react';
import React from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize state from localStorage or default to empty
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [tableNumber, setTableNumber] = useState(() => {
    return localStorage.getItem('tableNumber') || '';
  });
  const [specialRequests, setSpecialRequests] = useState(() => {
    return localStorage.getItem('specialRequests') || '';
  });

  // Save to localStorage whenever cart, tableNumber, or specialRequests change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('tableNumber', tableNumber);
  }, [tableNumber]);

  useEffect(() => {
    localStorage.setItem('specialRequests', specialRequests);
  }, [specialRequests]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setTableNumber('');
    setSpecialRequests('');
    // Clear localStorage
    localStorage.removeItem('cart');
    localStorage.removeItem('tableNumber');
    localStorage.removeItem('specialRequests');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeItem,
        tableNumber,
        setTableNumber,
        specialRequests,
        setSpecialRequests,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);