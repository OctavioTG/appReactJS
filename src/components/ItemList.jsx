import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <>
      {products.map((prod) => {
        return <Item
        key={prod.id}        
        img={prod.img}
        nombre={prod.nombre}
        precio={prod.precio}
        detalles={prod.detalles}
        />;
      })}
    </>
  );
}

export default ItemList;
