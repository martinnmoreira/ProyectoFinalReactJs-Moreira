import {Navbar, NavDropdown} from "react-bootstrap"

import CartIcon from "../CartIcon/CartIcon"
import {Link} from 'react-router-dom'

export default function NavBar() {
    return(
      <header className="header">
          <nav class="navbar navbar-expand-lg navbar navbar-dark menu">
          <div class="container-fluid">
              <a class="navbar-brand" Link to='/' href='Home' >
                  <Link to='/'><img src="img/logo.png" alt="" width="240" height="74" /></Link>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                  <Link to='/' class="nav-link active">Inicio</Link>
                  </li>
                  <li class="nav-item">
                  <Link to='/nosotros' class="nav-link">Nosotros</Link>
                  </li>
                  <li class="nav-item">
                      <NavDropdown title="Productos" id="basic-nav-dropdown">
                          <Link to="/productos" class="nav-link menu">Todos los productos</Link>
                          <Link to="/categoria/lapices" class="nav-link menu">Lapices</Link>
                          <Link to="/categoria/lapiceras" class="nav-link menu">Lapiceras</Link>        
                      </NavDropdown>
                  </li>
                  <li class="nav-item">
                  <Link to='/contacto' class="nav-link">Contacto</Link>
                  </li>
              </ul>
              <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                      <CartIcon className="cart-logo"/>
                  </Navbar.Text>
              </Navbar.Collapse>
              </div>
          </div>
          </nav>     
      </header>
  );
}
