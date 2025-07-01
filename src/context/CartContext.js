import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  const removeFromCart = (index) =>
    setCart(cart.filter((_, i) => i !== index));

  /*  What does i !== index do?
i is the index of the current item being looked at.
index is the index you want to remove 
(you passed it into removeFromCart(index)).
i !== index means: “keep this item if its index 
is NOT the one I want to remove.  */ 

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
