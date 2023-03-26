import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Item({ nombre, precio, img, detalles, id }) {
  return (
    <>
    <div className="m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          {/* <Card.Text>{detalles}</Card.Text> */}
          <p>${precio}</p>
          <Link to={`/detail/${id}`}>
          <Button variant="primary">Detalles</Button>
          </Link>
        </Card.Body>
      </Card>
      </div>
    </>
  );
}

export default Item;
