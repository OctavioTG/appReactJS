import React from "react";
import CartWidget from "./CartWidget";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
        <Link to="/">
          <Navbar.Brand>
            
            <img
              src="../imgs/logoBlack.png"
              width="50"
              height="50"
              className="d-inline-block align-center m-3"
            />
            Espora Pets
            
          </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
                <Nav.Link href="#">Balanceados</Nav.Link>
                <Nav.Link href="#">Accesorios</Nav.Link>
                <Nav.Link href="#">Productos de Limpieza</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
