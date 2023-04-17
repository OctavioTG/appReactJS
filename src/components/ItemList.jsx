import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <>
      <div className="d-flex flex-wrap">
        {products.map((prod) => {
          return (
            <Item
              key={prod.id}
              id={prod.id}
              img={prod.img}
              nombre={prod.nombre}
              precio={prod.precio}
              detalles={prod.detalles}
            />
          );
        })}
      </div>
    </>
  );
}

export default ItemList;
