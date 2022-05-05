import {Navbar, Nav, Container} from "react-bootstrap"
import FiShoppingCart from "../Cardicon/CardIcon"

export default function Header() {
    return(
        <Navbar bg="light" variant="light" className="container">
            <Container>
                <Navbar.Brand href="#inicio">TodoLibrería</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#inicio">Inicio</Nav.Link>
                    <Nav.Link href="#productos">Productos</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                
            </Container>
            <FiShoppingCart />
                
        </Navbar>
        
    );
}
