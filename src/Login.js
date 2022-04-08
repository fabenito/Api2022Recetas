import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';

import './App.css';

function Login() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Image src='./logo.svg' /> La Nonna</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Recetas</Nav.Link>
            <Nav.Link href="#categories">Categorías</Nav.Link>
            <Nav.Link href="#login">Ingresá</Nav.Link>
            <Nav.Link href="#register">Registrate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Login;
