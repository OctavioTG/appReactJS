import { useContext, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContextProvider";
import { Card } from "react-bootstrap";

function SendOrders() {
  const [cart] = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const order = {
    nombre,
    email,
  };

  const ordersCollection = collection(db, "order");

  return (
    <div>
      <div className="border m-3 d-flex flex-wrap">
        <h4 className="d-flex justify-content-center">PRODUCTOS:</h4>

        {cart.map(({ item, count }) => (
          <div className="m-3" key={item.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <p>Unidades: {count}</p>
                <p>${item.precio * count}</p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
        <h4>Nro de Compra: {orderId}</h4>
      </form>
    </div>
  );
}

export default SendOrders;
