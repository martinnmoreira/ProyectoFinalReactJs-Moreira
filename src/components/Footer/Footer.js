import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {
  return (
    <>
      {/* Inicio del footer */}
      <footer className="container-fluid bgBlack clBlanco">
        <div className="container-fluid py-5">
            <div className="row w-100 d-flex justify-content-around">
                <div className="col-12 col-lg-3">
                    <h2 className="redesFooter">Contacto</h2>
                    <p>Tel. (54-11) 4768-4793/4470</p>
                    <p>administracion@maiten.edu.ar</p>
                    <p>La Paz 3145 (ex 247), Villa Ballester. Buenos Aires.</p>
                    <button type="button" className="btn btn-primary btn-lg bgGreen btnVerde"><Link to="/contacto.html">Escribinos</Link></button>
                </div>
                <div className="col-12 col-lg-3">
                    <ul className="linksFooter">
                        <h2 className="redesFooter">Info</h2>
                        <li className="transicion"><Link to="/" className="clBlanco">Inicio</Link></li>
                        <li className="transicion"><Link to="/nosotros" className="clBlanco">Nosotros</Link></li>
                        <li className="transicion"><Link to="/productos" className="clBlanco">Productos</Link></li>
                        <li className="transicion"><Link to="/contacto" className="clBlanco">Contacto</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-3 marginTarjetasMovil">
                    <h2 className="redesFooter">Nuestras redes</h2>
                    <FontAwesomeIcon icon="fab fa-facebook" />
                    <FontAwesomeIcon icon="fab fa-instagram" />
                    <FontAwesomeIcon icon="fab fa-twitter" />
                    <FontAwesomeIcon icon="fab fa-whatsapp" />
                </div>
            </div>
        </div>
    </footer>
    {/* Fin del footer */}
  </>
  )
}