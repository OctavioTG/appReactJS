import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

function CartWidget() {
  // const {cart, setCart} = useContext(CartContext)
  // console.log(cart);
  return (
    <>
      <Link to={"/cart"}>
        <span className="material-symbols-outlined text-dark">
          shopping_cart
        </span>
      </Link>
      {/* <p>{cart}</p> */}
    </>
  );
}

export default CartWidget;
