import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (item, count) => {
    const isInCart = cart.find((cart) => cart.item.id === item.id);
    
    if (isInCart) {
      const newQ = isInCart.count + count;
      const newCart = cart.filter((cart) => cart.item.id !== item.id);
      setCart([...newCart, { item, count: newQ }]);
    } else {
      setCart([...cart, { item, count }]);
    }
  };
  return (
    <CartContext.Provider value={{cart, setCart, addItem}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
