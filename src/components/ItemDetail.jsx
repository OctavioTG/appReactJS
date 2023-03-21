import React from "react";
import { Button, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemDetail({ nombre, precio, img, detalles }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{detalles}</Card.Text>
          <p>${precio}</p>
          <ItemCount/>
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemDetail;
