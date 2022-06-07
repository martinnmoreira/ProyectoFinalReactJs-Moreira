import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon"

export default function NavBar() {
    return(
      <Navbar bg="light" variant="light" className="container-fluid">
      <Container>
        <NavLink to="/">TodoLibrería</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/fetch">Fetch</NavLink>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavLink to="/productos">Todos los productos</NavLink>
              <NavLink to="/categoria/lapices">Lapices</NavLink>
              <NavLink to="/categoria/lapiceras">Lapiceras</NavLink>        
            </NavDropdown>
            <NavLink to="/contacto">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartIcon />
      </Navbar>
    );
}
