import {Navbar, NavDropdown, Nav, NavItem} from "react-bootstrap"

import CartIcon from "../CartIcon/CartIcon"
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="header">
        <Nav className="navbar navbar-expand-lg navbar-dark menu">
            <NavItem><Link to='/'><img className="fondoImg" src="img/logo.png" alt="Logo" width="240" height="74" /></Link></NavItem>
            <Nav.Item><Nav.Link><Link to='/' className="nav-link">Inicio</Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link title="Item"><Link to='/nosotros' className="nav-link">Nosotros</Link></Nav.Link></Nav.Item>
            <NavDropdown title="Productos" id="nav-dropdown" className="menu">                                    
                <NavDropdown.Item><Link to="/productos" className="nav-link menu">Todos los productos</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/categoria/lapices" className="nav-link menu submenu">Lapices</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/categoria/lapiceras" className="nav-link menu">Lapiceras</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/categoria/mochilas" className="nav-link menu">Mochilas</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/categoria/cartucheras" className="nav-link menu">Cartucheras</Link> </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item><Nav.Link title="Item"><Link to='/contacto' className="nav-link">Contacto</Link></Nav.Link></Nav.Item>
            <Navbar.Collapse className="justify-content-end"><Navbar.Text><CartIcon classNameName="cartLogo" /></Navbar.Text></Navbar.Collapse>
        </Nav>
    </header>
  );
}
