import React from 'react'
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <>
    <Link to={"/cart"}>
    <span className="material-symbols-outlined text-dark">
shopping_cart
    </span>
    </Link>
    <p>0</p>
    </>
  )
}

export default CartWidget