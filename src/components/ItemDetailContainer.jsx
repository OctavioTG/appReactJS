import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useParams } from "react-router-dom";

function ItemDetailContainer({}) {
  // function loadProd() {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(product);
  //     }, 2000);
  //   });
  // }
  
  // async function getItmes() {
  //   const response = await fetch("../productos.json");
  //   // const delay = await loadProd();
  //   const data = await response.json();
  //   return data;
  // }

  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   getItmes().then((product) => setProduct(product));
  // }, []);
  
  const [product, setProduct] = useState([]);
  const {id} = useParams()
  
  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "items", `${id}`)
    getDoc(oneItem).then((snapshot)=>{
      if (snapshot.exists()) {
        const docs = snapshot.data()
        setProduct(docs)
      }
    })
  }, [id]);
console.log(id);
  return (
    <>
      <ItemDetail prod={product} id={id}/>
    </>
  );
}

export default ItemDetailContainer;
