import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
//import {Link} from 'react-router-dom'
import CardIcon from "../Cardicon/CardIcon"

export default function NavBar() {
    const count = 4
    return(
        // <Navbar bg="light" variant="light" className="container-fluid">
        //     <Container>
        //         <Navbar.Brand href="/">TodoLibrería</Navbar.Brand>
        //         <Nav className="me-auto">
        //             <Nav.Link href="/">Inicio</Nav.Link>
        //             <Nav.Link href="/productos">Productos</Nav.Link>
        //             <Nav.Link href="/detalle">Detalle</Nav.Link>
        //             <Nav.Link href="/fetch">Fetch</Nav.Link>
        //             <Nav.Link href="/contacto">Contacto</Nav.Link>
        //         </Nav>
        //     </Container>
        //     <CardIcon />
        //     <span className="btn btn-light">{count}</span>    
        // </Navbar>

<Navbar bg="light" variant="light" className="container-fluid">
<Container>
  <Navbar.Brand href="/">TodoLibrería</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="/fetch">Fetch</Nav.Link>
      <NavDropdown title="Productos" id="basic-nav-dropdown">
        <NavDropdown.Item href="/productos">Todos los productos</NavDropdown.Item>
        <NavDropdown.Item href="/categoria/lapices">Lapices</NavDropdown.Item>
        <NavDropdown.Item href="/categoria/lapiceras">Lapiceras</NavDropdown.Item>        
      </NavDropdown>
      <Nav.Link href="/contacto">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
<CardIcon />
<span className="btn btn-light">{count}</span>    
</Navbar>
        
    );
}
