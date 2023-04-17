import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

function CartWidget() {
  const [cart] = useContext(CartContext);

  return (
    <>
      <Link to={"/cart"}>
        <span className="material-symbols-outlined text-dark">
          shopping_cart
        </span>
      </Link>
      <p>{cart.length}</p>
    </>
  );
}

export default CartWidget;
