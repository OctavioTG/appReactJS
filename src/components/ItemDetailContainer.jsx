import React from "react";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

function ItemDetailContainer({ products }) {
  function loadProd() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 2000);
    });
  }
  async function getItmes() {
    const response = await fetch("./productos.json");
    const delay = await loadProd();
    const data = await response.json();
    return data;
  }

  const [product, setProduct] = useState([]);
  useEffect(() => {
    getItmes().then((product) => setProduct(product));
  }, []);
  return (
    <>
      {product.map((prod) => {
        return <ItemDetail
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

export default ItemDetailContainer;
