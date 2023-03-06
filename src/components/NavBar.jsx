import React from 'react'
import CartWidget from './CartWidget'
import {Container, Navbar, Nav} from 'react-bootstrap'


function NavBar() {

  let categorias = ["Balanceados", "Accesorios", "Productos de Limpieza","Otros"]

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src="../imgs/logoBlack.png"
              width="50"
              height="50"
              className="d-inline-block align-center m-3"/>
            Espora Pets
          </Navbar.Brand>
          <Nav className="me-auto">
          <ul className='d-flex'>
            {categorias.map((cat, index) => (
              <li key={index}><Nav.Link href="#">{cat}</Nav.Link></li>
            ))}
          </ul>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar