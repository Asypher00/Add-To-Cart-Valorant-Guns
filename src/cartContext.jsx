import { createContext, useContext, useState } from "react";
const defaultValue = { items: 0, func: () => console.log("logging...") };
const CartContext = createContext({ defaultValue });
const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = () => setItems((items) => items + 1);
  return (
    <CartContext.Provider value={{ items, addToCart, cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
const UseCart = () => useContext(CartContext);
export { CartProvider, UseCart };
