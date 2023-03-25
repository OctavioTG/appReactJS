import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer({}) {
  async function getItmes() {
    const response = await fetch("./productos.json");
    const data = await response.json();
    return data;
  }

  const [product, setProduct] = useState([]);
  useEffect(() => {
    getItmes().then((product) => setProduct(product));
  }, []);

  return (
    <>
      <ItemList products={product} />
    </>
  );
}

export default ItemListContainer;
