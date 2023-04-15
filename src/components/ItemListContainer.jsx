import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore} from "firebase/firestore";

function ItemListContainer({}) {
  // async function getItmes() {
  //   const response = await fetch("../productos.json");
  //   const data = await response.json();
  //   return data;
  // }

  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   getItmes().then((product) => setProduct(product));
  // }, []);
  
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    let arr = []
    const db = getFirestore();
    const itemsCollection = collection(db, "items")
    getDocs(itemsCollection).then((snapshot)=>{
      snapshot.docs.map((doc) => arr.push({ id: doc.id, ...doc.data() }))
      setProduct(arr)
    })
  }, []);
  
  const { categoria } = useParams();
  const catFilter = product.filter((prod) => prod.categoria == categoria);
  console.log(product);
  return (
    <>
      {categoria ? (
        <ItemList products={catFilter} />
      ) : (
        <ItemList products={product} />
      )}
    </>
  );
}

export default ItemListContainer;

// doc.docs.map((doc) => arr.push({ id: doc.id, ...doc.data() }));