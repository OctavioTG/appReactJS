import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

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
  const { categoria } = useParams();
  const catFilter = product.filter((prod) => prod.categoria == categoria);
  return (
    <>
      {categoria ? (<ItemList products={catFilter} />) : (<ItemList products={product} />)}
    </>
  );
}

export default ItemListContainer;
