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
            <Link to={`/categoria/${"balanceados"}`}>
              <Nav.Link href="/categoria/balanceados">Balanceados</Nav.Link>
            </Link>
            <Link to={`/categoria/${"accesorios"}`}>
              <Nav.Link href="/categoria/accesorios">Asccesorios</Nav.Link>
            </Link>
            {/* <Nav.Link href="#">Productos de Limpieza</Nav.Link> */}
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
