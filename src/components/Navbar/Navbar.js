import {Navbar, NavDropdown, Nav, NavItem} from "react-bootstrap"

import CartIcon from "../CartIcon/CartIcon"
import {Link} from 'react-router-dom'

export default function NavBar() {
//     return(
//         <header className="header">
//             <nav class="navbar navbar-expand-lg navbar navbar-dark menu">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" Link to='/' href='Home' >
//                         <Link to='/'><img src="img/logo.png" alt="" width="240" height="74" /></Link>
//                     </a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <Link to='/' class="nav-link active">Inicio</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link to='/nosotros' class="nav-link">Nosotros</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <NavDropdown title="Productos" id="basic-nav-dropdown">
//                                     <Link to="/productos" class="nav-link menu">Todos los productos</Link>
//                                     <Link to="/categoria/lapices" class="nav-link menu">Lapices</Link>
//                                     <Link to="/categoria/lapiceras" class="nav-link menu">Lapiceras</Link>
//                                     <Link to="/categoria/mochilas" class="nav-link menu">Mochilas</Link>
//                                     <Link to="/categoria/cartucheras" class="nav-link menu">Cartucheras</Link>         
//                                 </NavDropdown>
//                             </li>
//                             <li>
//                             <Dropdown>
//                                 <Dropdown.Toggle id="dropdown-basic" className="menu">
//                                     Productos
//                                 </Dropdown.Toggle>

//                                 <Dropdown.Menu className="menu">
//                                     <Dropdown.Item className="menu"><Link to="/productos" class="nav-link menu">Todos los productos</Link></Dropdown.Item>
//                                     <Dropdown.Item ><Link to="/categoria/lapices" class="nav-link menu">Lapices</Link></Dropdown.Item>
//                                     <Dropdown.Item ><Link to="/categoria/lapiceras" class="nav-link menu">Lapiceras</Link></Dropdown.Item>
//                                     <Dropdown.Item ><Link to="/categoria/mochilas" class="nav-link menu">Mochilas</Link></Dropdown.Item>
//                                     <Dropdown.Item ><Link to="/categoria/cartucheras" class="nav-link menu">Cartucheras</Link>   </Dropdown.Item>
//                                 </Dropdown.Menu>
//                                 </Dropdown>
//                             </li>
//                             <li>
//                             <Dropdown as={NavItem}>
//                                 <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
//                                 <Dropdown.Menu>
//                                     <Dropdown.Item>Hello there!</Dropdown.Item>
//                                 </Dropdown.Menu>
//                             </Dropdown>;
//                             </li>
//                             <li class="nav-item">
//                                 <Link to='/contacto' class="nav-link">Contacto</Link>
//                             </li>
//                         </ul>
//                         <Navbar.Collapse className="justify-content-end">
//                             <Navbar.Text>
//                             <CartIcon className="cart-logo"/>
//                             </Navbar.Text>
//                         </Navbar.Collapse>
//                     </div>
//                 </div>
//             </nav>     
//         </header>
// );

//const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <header className="header">
        <Nav className="navbar navbar-expand-lg navbar-dark menu">
            <NavItem><Link to='/'><img className="fondoImg" src="img/logo.png" alt="Logo" width="240" height="74" /></Link></NavItem>
            <Nav.Item><Nav.Link><Link to='/' className="nav-link">Inicio</Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link title="Item"><Link to='/nosotros' className="nav-link">Nosotros</Link></Nav.Link></Nav.Item>
            <NavDropdown title="Productos" id="nav-dropdown" className="menu">                                    
                <NavDropdown.Item><Link to="/productos" className="nav-link menu">Todos los productos</Link></NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
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
