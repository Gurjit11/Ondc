import React, { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

// Create the CartProvider component
const CartProvider = ({ children }) => {
  // State to hold the cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1, total: item.price }]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Value object to be provided by the context
  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
  };

  // Render the CartProvider with the provided value and children
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
