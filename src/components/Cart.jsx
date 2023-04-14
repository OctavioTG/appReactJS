import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { Button, Card } from "react-bootstrap";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  const removeItem = (id) => {
    const newItem = cart.filter(({ item }) => item.id !== id);
    setCart(newItem);
  };

  // function clearCart() {setCart([])}

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
    let subtotales = cart.map((item) => item.count * item.item.price);
    return sumar(subtotales);
  }

  function itemQuantity() {
    let q = cart.map((item) => item.count);
    let result = sumar(q);
    return result;
  }

  return (
    <>
      <div className="divCart border m-3 d-flex flex-wrap">
        <h4 className="d-flex justify-content-center">PRODUCTOS:</h4>
        {cart.map(({ item, count }) => (
          <div className="m-3" key={item.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                {/* <Card.Text>{detalles}</Card.Text> */}
                <p>Unidades: {count}</p>
                <p>SubTotal: ${getSubtotal(count, item.precio)}</p>
                
                <Button onClick={() => removeItem(item.id)}>Eliminar</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="divCart border m-3">
        <h4>TOTAL:</h4>
      </div>
    </>
  );
}

export default Cart;
