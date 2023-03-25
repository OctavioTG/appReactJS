import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount({ stock }) {
  const [count, setCount] = useState(1);

  function sumar() {
   if (count < stock){ //No Funciona!
    //if (count < 5) {
      setCount(count + 1);
    }
  }
  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="d-flex">
        <Button onClick={sumar}>+</Button>
        <p className="m-1">{count}</p>
        <Button onClick={restar}>-</Button>
        <Button className="ms-1" onClick={() => setCount((count) => (count = 1))}>Añadir al Carrito</Button>
      </div>
    </>
  );
}

export default ItemCount;
