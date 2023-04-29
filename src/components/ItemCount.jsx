import { useState, useContext} from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContextProvider";

function ItemCount({ item }) {
  const { addItem } = useContext(CartContext);
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

  return (
    <>
      <div className="d-flex">
        <Button onClick={sumar}>+</Button>
        <p className="m-1">{count}</p>
        <Button onClick={restar}>-</Button>
        <Button className="ms-1" onClick={() => addItem(item, count)}>
          Añadir
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
