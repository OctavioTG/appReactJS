import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useContext(CartContext);

  function removeItem(id) {
    const newItem = cart.filter(({ item }) => item.id !== id);
    setCart(newItem);
  }

  function clearCart() {
    setCart([]);
  }

  function getSubtotal(count, precio) {
    let result = count * precio;
    return result;
  }

  function sumar(lista) {
    let resultado = 0;
    for (let i = 0; i < lista.length; i++) {
      resultado += lista[i];
    }
    return resultado;
  }

  function getTotal() {
    let subtotales = cart.map((item) => item.count * item.item.precio);
    return sumar(subtotales);
  }

  return (
    <>
      <div className="border m-3 d-flex flex-wrap">
        <h4 className="d-flex justify-content-center">PRODUCTOS:</h4>

        {cart.map(({ item, count }) => (
          <div className="m-3" key={item.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <p>Unidades: {count}</p>
                <p>SubTotal: ${getSubtotal(count, item.precio)}</p>
                <Button onClick={() => removeItem(item.id)}>Eliminar</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
        <div>
          <Button className="m-3" onClick={clearCart}>
            Vaciar Carrito
          </Button>
          <Link to={"/checkout"}>
            <Button>CHECKOUT</Button>
          </Link>
        </div>
      </div>
      <div className="divCart border m-3 d-flex">
        <h4>TOTAL: ${getTotal()}</h4>
      </div>
    </>
  );
}

export default Cart;
