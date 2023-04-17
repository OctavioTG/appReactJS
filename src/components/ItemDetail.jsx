import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ prod, id }) {
  return (
    <>
      {/* {prodFilter.map((prod) => ( */}
        <div key={id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={prod.img} />
            <Card.Body>
              <Card.Title>{prod.nombre}</Card.Title>
              <Card.Text>{prod.detalles}</Card.Text>
              <p>${prod.precio}</p>
              <p>Stock: {prod.stock}</p>
              <ItemCount item={prod} />
            </Card.Body>
          </Card>
        </div>
    </>
  );
}

export default ItemDetail;
