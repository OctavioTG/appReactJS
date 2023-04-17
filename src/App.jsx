import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContextProvider";
import SendOrders from "./components/SendOrders";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/categoria/:categoria"
            element={<ItemListContainer />}
          />
          <Route exact path="/detail" element={<ItemDetailContainer />} />
          <Route exact path="/detail/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<SendOrders />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
