import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function Navigasibar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Add Todo">Add Todo</Nav.Link>
            <Nav.Link href="#Uncompleted Todo">Uncompleted Todo</Nav.Link>
            <Nav.Link href="#Complete Todo">Complete Todo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasibar;
