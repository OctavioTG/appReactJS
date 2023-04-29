import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetailContainer({}) {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "items", `${id}`);
    getDoc(oneItem).then(res => {
      setProduct({id:res.id, ...res.data()})
    })
  }, [id]);

  return (
    <>
      <ItemDetail prod={product} id={id} />
    </>
  );
}

export default ItemDetailContainer;
