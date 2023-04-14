import React from "react";
import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContextProvider";

function ItemCount({ item }) {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);
  
  function sumar() {
    if (count < item.stock) {
      setCount(count + 1);
    }
  }
  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function addItem() {
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
    <>
      <div className="d-flex">
        <Button onClick={sumar}>+</Button>
        <p className="m-1">{count}</p>
        <Button onClick={restar}>-</Button>
        <Button className="ms-1" onClick={addItem}>Añadir al Carrito</Button>
      </div>
    </>
  );

}

export default ItemCount;
//onClick={() => setCount((count) => (count = 1))}
