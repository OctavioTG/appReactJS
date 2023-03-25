import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

function ItemDetailContainer({}) {
  function loadProd() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 2000);
    });
  }
  
  async function getItmes() {
    const response = await fetch("../productos.json");
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
      <ItemDetail product={product}/>
    </>
  );
}

export default ItemDetailContainer;
