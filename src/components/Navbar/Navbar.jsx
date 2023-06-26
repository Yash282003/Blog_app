import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Link } from 'react-router-dom';




function NavbarMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">"Blogging is fun"</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#home" as={Link} to="/">Home</Nav.Link>
          <Nav.Link href="#home" as={Link} to="/blogs">Blogs</Nav.Link>
          
         
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarMenu;
