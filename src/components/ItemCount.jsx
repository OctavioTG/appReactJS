import React from "react";
import { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(1)

function sumar() {
  setCount(count + 1)
}
function restar() {
  if (count > 1) {
  setCount(count - 1)
  }
}

  return (
    <>
      <div>
      <button onClick={sumar}>+</button>
      <p>{count}</p>
      <button onClick={restar}>-</button>
      <button onClick={() => setCount((count) => count = 1)}>Reset</button>
      </div>
    </>
  );
}

export default ItemCount;
