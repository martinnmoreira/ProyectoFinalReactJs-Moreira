import {Navbar, Nav, Container} from "react-bootstrap"
export default function Header() {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#inicio">TodoLibrería</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#inicio">Inicio</Nav.Link>
                    <Nav.Link href="#productos">Productos</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}