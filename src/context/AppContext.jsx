import { createContext, useState } from "react";
import { products } from "../data/products";

export const AppContext = createContext();

export default function AppProvider({ children }) {

    // DUMMY CART
  const [cart, setCart] = useState([
    { ...products[5], qty: 1 },
    { ...products[3], qty: 2 },
    { ...products[6], qty: 1 }
  ]);

  // DUMMY WISHLIST
  const [wishlist, setWishlist] = useState([
    products[1],
    products[2],
    products[4]
  ]);

  return (
    <AppContext.Provider value={{ cart, setCart, wishlist, setWishlist }}>
      {children}
    </AppContext.Provider>
  );
}