import {Navbar, Nav, Container} from "react-bootstrap"
import CardIcon from "../Cardicon/CardIcon"

export default function Header() {
    const count = 4
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
            <CardIcon />
            <span className="btn btn-light">{count}</span>    
        </Navbar>
        
    );
}
